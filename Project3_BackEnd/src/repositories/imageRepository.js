import db from "../models";
export const createImage = async (image) => {
  try {
    const response = await db.Image.findOrCreate({
      where: { src: image.src },
      defaults: { src: image.src, productId: +image.productId },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllImage = async () => {
  try {
    const response = await db.Image.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      // include: [
      //   {
      //     model: db.Product,
      //     as: "product",
      //     attributes: {
      //       exclude: ["createdAt", "updatedAt"],
      //     },
      //   },
      // ],
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getOneImage = async ({ id }) => {
  try {
    const response = await db.Image.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      // include: [
      //   {
      //     model: db.Product,
      //     as: "product",
      //     attributes: {
      //       exclude: ["createdAt", "updatedAt"],
      //     },
      //   },
      // ],
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const updateImage = async (id, body) => {
  try {
    const response = await db.Image.update(
      { src: body },
      {
        where: { id },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteImage = async ({ id }) => {
  try {
    const response = await db.Image.destroy({
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};
