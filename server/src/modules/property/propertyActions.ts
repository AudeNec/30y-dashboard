import type { RequestHandler } from "express";
import propertyRepository from "./propertyRepository";

const browse: RequestHandler<{ property: string }> = async (req, res) => {
  try {
    const result = await propertyRepository.readAllProperty(req.params);
    res.json(result);
  } catch (error) {
    res.sendStatus(400);
  }
};

const browseAndSumProperty: RequestHandler<{ property: string }> = async (
  req,
  res,
) => {
  try {
    const result = await propertyRepository.readAllAndSumProperty(req.params);
    res.json(result);
  } catch (error) {
    res.sendStatus(400);
  }
};

export default {
  browseAndSumProperty,
  browse,
};
