import jwt from "jsonwebtoken";

export const signToken = async (params, time) => {
    console.log("Id", params);
    
  const token = await jwt.sign(
    {
      userId: params,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: time,
    }
  );
  return token;
};
