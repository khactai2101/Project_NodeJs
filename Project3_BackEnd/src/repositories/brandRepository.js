import db from "../models";

export const createBrand = async ({ title }) => {
  try {
    const response = await db.Brand.findOrCreate({
      where: { title },
      defaults: { title },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllBrand = async () => {
  try {
    const response = await db.Brand.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getOneById = async ({ id }) => {
  try {
    const response = await db.Brand.findOne({
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

export const updateBrand = async (id, body) => {
  try {
    const response = await db.Brand.update(body, {
      where: { id },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const deleteBrand = async ({ id }) => {
  try {
    const response = await db.Brand.destroy({
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};
