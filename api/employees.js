import express from "express";
const router = express.Router();
export default router;

import {
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  isPosInt,
} from "#db/queries/employees";

router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!isPosInt(id)) {
    return res.status(400).send("ID must be a positive integer.");
  }

  const employee = await getEmployee(id);
  if (!employee) {
    return res.status(404).send("Employee not found.");
  }
  res.send(employee);
});

router.post("/", async (req, res) => {
  const bod = req.body;
  if (!bod) {
    return res.status(400).send("Body is not provided.");
  }
  if (!bod.name || !bod.salary || !bod.birthday) {
    return res.status(400).send("Required field missing.");
  }
  const employee = await createEmployee(bod);
  if (!employee) {
    return res.status(404).send("Employee not found.");
  }
  res.status(201).send(employee);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).send("Please provide an ID");
  } else if (!isPosInt(id)) {
    return res.status(400).send("ID must be a positive integer.");
  }

  const employee = await deleteEmployee(id);
  if (!employee) {
    return res.status(404).send("Employee not found.");
  }
  res.status(204).send(employee);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  if (!isPosInt(id)) {
    return res.status(400).send("ID must be a positive integer.");
  }

  const bod = req.body;
  if (!bod) {
    return res.status(400).send("Body is not provided.");
  }
  if (!bod.name || !bod.birthday || !bod.salary) {
    return res.status(400).send("Required field missing.");
  }
  const employee = await updateEmployee(bod);
  if (!employee) {
    return res.status(404).send("Employee not found.");
  }
  res.send(employee);
});
