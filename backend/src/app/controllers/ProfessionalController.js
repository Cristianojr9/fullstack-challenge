import * as Yup from "yup";
import Profissional from "../models/Professional";

export default {
  // CREATE
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        phone: Yup.string().required(),
        professionId: Yup.number().required(),
        active: Yup.bool().required()
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validation fails" });
      };

      const profissionalExists = await Professional.findOne({ where: { email: req.body.email } });

      if (profissionalExists) {
        return res.status(400).json({ error: "Professional already exists" });
      };

      const { name, email, phone, profession_id: professionId, active } = await Professional.create(req.body); 

      return res.status(201).json({
        name, 
        email, 
        phone, 
        professionId, 
        active
      });
    } catch(error) {
      return res.status(400).json({ error: "Is not possible create this professional" });
    }
  },

/*   // GET ALL 
  async index(req, res) {
    try {
      const Profissional = await Profissional.findAll();

      return res.json(Profissional);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // GET ONE
  async getOne(req, res) {
    try {
      const { id, description, active } = await Profissional.findOne(req.params?.id);

      return res.json({
        id, 
        description, 
        active 
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // UPDATE 
  async update (req, res) {
    try {
      const { id, description, active } = await Profissional.update(req.body, req.params.id);

      return res.json({
        id, 
        description, 
        active
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  } */
}
