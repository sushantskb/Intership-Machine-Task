import { User } from "../../models/user.model.js";

export async function generateNumberAsString() {
  const number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  const exist = await User.findOne({ id: number.toString() });
  if (exist) {
    return generateNumberAsString();
  }
  return number.toString();
}
