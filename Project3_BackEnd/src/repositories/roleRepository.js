import db from "../models";
export const createRole = async (body) => {
  try {
    const response = await db.Role.findOrCreate({
      where: { codeRole: body.codeRole },
      defaults: { codeRole: body.codeRole },
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
export const getAllRole = async () => {
  try {
    const response = await db.Role.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getOneRole = async ({ id }) => {
  try {
    const response = await db.Role.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const updateRole = async (id, body) => {
  try {
    const response = await db.Role.update(body, {
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteRole = async ({ id }) => {
  try {
    const response = await db.Role.destroy({
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};
