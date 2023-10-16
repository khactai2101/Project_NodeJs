import db from "../models";

export const createFavorite = async ({ userId, productId }) => {
  try {
    const response = await db.Favorite.findOrCreate({
      where: { productId },
      defaults: { userId, productId },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllFavorites = async () => {
  try {
    const response = await db.Favorite.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getFavoriteByUser = async ({ id }) => {
  console.log("getFavoriteByUser", id);
  try {
    const response = await db.Favorite.findAll({
      where: { userId: id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "productId"],
      },
      include: [
        {
          model: db.Product,
          as: "product",
          attributes: {
            exclude: ["createdAt", "updatedAt", "categoryId", "brandId"],
          },
          include: [
            {
              model: db.Brand,
              as: "brand",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
            {
              model: db.Category,
              as: "category",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });
    console.log(response, "repositories");
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteFavorite = async ({ id }) => {
  try {
    const response = await db.Favorite.destroy({
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};
