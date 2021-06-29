'use strict'

import * as Yup from "yup";
import Professional from "../../../models/Professional";

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

      const { name, email, phone, professionId, active } = await Professional.create(req.body); 

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

  // GET ALL 
  async index(req, res) {
    try {
      const professionals = await Professional.findAll();

      return res.status(201).json(professionals);
    } catch (error) {
      return res.status(400).json({ error: "Is not possible list professionals" });
    }
  },

  // GET ONE
  async show(req, res) {
    try {
      const { id, name, email, phone, professionId, active } = await Professional.findOne({ 
        id: req.params.id
      });

      return res.status(201).json({
        id, 
        name, 
        email, 
        phone, 
        professionId, 
        active 
      });
    } catch (error) {
      return res.status(400).json({ error: "Something wrong with this professional. We cannot list it." });
    }
  },

  // UPDATE 
  async update (req, res) {
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
      }

      const professional = await Professional.findOne({ where: { id: req.params.id } });

      const { name, email, phone, professionId, active } = await professional.update(req.body);

      return res.status(200).json({
        name, 
        email, 
        phone, 
        professionId, 
        active
      });
    } catch (error) {
      return res.status(400).json({ error: "Something wrong with this professional. We cannot edit it." });
    }
  }
}
