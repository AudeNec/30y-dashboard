import type { RequestHandler } from "express";
import dailyRepository from "./dailyRepository";

const browse: RequestHandler = async (req, res) => {
  try {
    const daily = await dailyRepository.readAll();
    res.json(daily);
  } catch (error) {
    res.sendStatus(404);
  }
};

const read: RequestHandler = async (req, res) => {
  const requestedDate = new Date(req.params.date);
  try {
    const day = await dailyRepository.read(requestedDate);
    res.json(day);
  } catch (error) {
    res.sendStatus(400);
  }
};

const add: RequestHandler = async (req, res) => {
  try {
    const addedDay = await dailyRepository.create(req.body);
    res.status(202).json(addedDay);
  } catch (error) {
    res.sendStatus(400);
  }
};

const edit: RequestHandler = async (req, res) => {
  const updatedDate = new Date(req.params.date);

  try {
    const editDay = await dailyRepository.update(updatedDate, req.body);
    res.status(202).json(editDay);
  } catch (error) {
    res.sendStatus(400);
  }
};

// const browseProperty: RequestHandler = async (req, res) => {
//   try {
//     const propertyArray = await dailyRepository.readAllProperty(req.params);
//     res.json(propertyArray);
//   } catch (error) {
//     res.sendStatus(400);
//   }
// };

export default {
  browse,
  read,
  add,
  edit,
};
