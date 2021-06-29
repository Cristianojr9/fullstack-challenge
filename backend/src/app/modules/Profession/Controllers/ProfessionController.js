'use strict'

import * as Yup from "yup";
import Profession from "../../../models/Profession";

export default {
  // CREATE
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        description: Yup.string().required(),
        active: Yup.bool().required()
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validation fails" });
      };

      const profissionExists = await Profession.findOne({ where: { description: req.body.description } });

      if (profissionExists) {
        return res.status(400).json({ error: "Profession already exists" });
      }

      const { description, active } = await Profession.create(req.body);

      return res.status(201).json({
        description, 
        active
      });
    } catch (error) {
      return res.status(400).json({ error: "Is not possible create this profession" });
    }
  },

  // GET ALL 
  async index(req, res) {
    try {
      const professions = await Profession.findAll();

      return res.status(201).json(professions);
    } catch (error) {
      return res.status(400).json({ error: "Is not possible list professions" });
    }
  },

  // GET ONE
  async show(req, res) {
    try {
      const profession = await Profession.findOne({ 
        id: req.params.id
      });

      return res.status(201).json(profession);
    } catch (error) {
      return res.status(400).json({ error: "Something wrong with this profession. We cannot list it." });
    }
  },

  // UPDATE 
  async update(req, res) {
    try {
      const schema = Yup.object().shape({
        description: Yup.string().required(),
        active: Yup.bool().required()
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validation fails" });
      }

      const profession = await Profession.findOne({ where: { id: req.params.id } });

      const { description, active } = await profession.update(req.body);

      return res.status(200).json({
        description, 
        active
      });
    } catch (error) {
      return res.status(400).json({ error: "Something wrong with this profession. We cannot edit it." });
    }
  }
}