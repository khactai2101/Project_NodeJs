import db from "../models";
export const createProduct = async (body) => {
  try {
    const response = await db.Product.findOrCreate({
      where: {
        nameProduct: body.nameProduct,
        description: body.description,
        price: body.price,
        stock: body.stock,
        categoryId: body.categoryId,
        brandId: body.brandId,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const getAllProduct = async () => {
  try {
    const response = await db.Product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "categoryId", "brandId"], // bỏ những cái không cần thiết
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
        {
          model: db.Image,
          as: "image",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: db.Brand,
          as: "brand",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: db.ProductSize,
          as: "productSize",
          attributes: {
            exclude: ["createdAt", "updatedAt", "productId", "sizeId"],
          },

          include: [
            {
              model: db.Size,
              as: "size",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getOneProduct = async ({ id }) => {
  try {
    const response = await db.Product.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "categoryId", "brandId"],
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const updateProduct = async (id, body) => {
  try {
    const response = await db.Product.update(body, {
      where: { id },
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteProduct = async ({ id }) => {
  try {
    const response = await db.Product.destroy({
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};
