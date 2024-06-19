const express = require("express");
const router = express.Router();
const Role = require("../models/role.schema");

// CREATE
router.post("/", async (req, res) => {
  try {
    const newRole = new Role(req.body);
    const role = await newRole.save();
    res.status(201).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.status(200).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.status(200).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.status(200).json({ message: "Role successfully deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
