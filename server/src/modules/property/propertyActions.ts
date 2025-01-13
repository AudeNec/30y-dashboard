import type { RequestHandler } from "express";
import propertyRepository from "./propertyRepository";

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

//   async readAllProperty({ property }) {
//     if (
//       property === "friends" ||
//       property === "alcohol" ||
//       property === "healthyFood"
//     ) {
//       const propertyArray = daily.map((curr) => ({
//         date: curr.date,
//         value: curr[property],
//       }));
//       return propertyArray;
//     }
//   }

export default {
  browseAndSumProperty,
};
