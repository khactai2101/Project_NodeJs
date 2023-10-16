import db from "../models";
export const createSize = async (body) => {
  try {
    const response = await db.Size.findOrCreate({
      where: { sizeName: body.sizeName },
      defaults: { sizeName: body.sizeName, percent: +body.percent },
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
export const getAllSize = async () => {
  try {
    const response = await db.Size.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getOneSize = async ({ id }) => {
  try {
    const response = await db.Size.findOne({
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
export const updateSize = async (id, body) => {
  try {
    const response = await db.Size.update(body, {
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteSize = async ({ id }) => {
  try {
    const response = await db.Size.destroy({
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};
