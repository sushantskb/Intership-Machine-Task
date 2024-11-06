import Test from "../../models/test.model.js";

export const getDataByMail = async (email) => {
  try {
    const data = Test.findOne({ email });
    return data;
  } catch {
    return null;
  }
};

export const getDataById = async (id) => {
  try {
    const data = Test.findById(id);
    return data;
  } catch (error) {
    return null;
  }
};
