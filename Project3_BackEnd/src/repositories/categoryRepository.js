import db from "../models";

export const createCategory = async ({ title }) => {
  try {
    const response = await db.Category.findOrCreate({
      where: { title },
      defaults: { title },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await db.Category.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getOneCategory = async ({ id }) => {
  try {
    const response = await db.Category.findOne({
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
export const updateCategory = async (id, body) => {
  try {
    const response = await db.Category.update(body, {
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const deleteCategory = async ({ id }) => {
  try {
    const response = await db.Category.destroy({
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};
