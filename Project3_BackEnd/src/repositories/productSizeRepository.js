import db from "../models";

export const createProductSize = async (body) => {
  try {
    const response = await db.ProductSize.findOrCreate({
      where: {
        productId: body.productId,
        sizeId: body.sizeId,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const getAllProductSize = async () => {
  try {
    const response = await db.ProductSize.findAll({
      include: [
        {
          model: db.Size,
          as: "size",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: db.Product,
          as: "product",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          include: [
            {
              model: db.Category,
              as: "category",
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
          ],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
      //   include: [
      //     {
      //       model: db.Brand,
      //       as: "brand",
      //       attributes: {
      //         exclude: ["createdAt", "updatedAt"],
      //       },
      //     },
      //     {
      //       model: db.Category,
      //       as: "category",
      //       attributes: {
      //         exclude: ["createdAt", "updatedAt"],
      //       },
      //     },
      //     {
      //       model: db.Image,
      //       as: "image",
      //       attributes: {
      //         exclude: ["createdAt", "updatedAt"],
      //       },
      //     },
      //   ],
    });
    return response;
  } catch (error) {
    return error;
  }
};

// export const getOneProduct = async ({ id }) => {
//   try {
//     const response = await db.Product.findOne({
//       where: { id },
//       attributes: {
//         exclude: ["createdAt", "updatedAt", "categoryId", "brandId"],
//       },
//     });
//     return response;
//   } catch (error) {
//     return error;
//   }
// };
