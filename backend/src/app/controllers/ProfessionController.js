import Profession from "../models/Profession";

class ProfessionController {
  async store(req, res) {
    const { id, description, active } = await Profession.create(req.body);

    return res.json({
      id, 
      description, 
      active,
    });
  }

  async index(req, res) {
    const professions = await Profession.findAll();

    return res.json(professions);
  }
}

export default new ProfessionController;