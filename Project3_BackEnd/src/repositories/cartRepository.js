import db from "../models";

export const createCart = async (body) => {
  const existingItem = await db.Cart.findOne({
    where: {
      userId: body.userId,
      productSizeId: body.productSizeId,
    },
  });

  if (existingItem) {
    // If the product is already in the cart and is the same size, update the quantity
    const newCart = await db.Cart.update(
      {
        quantity: existingItem.quantity + +body.quantity,
      },
      {
        where: {
          userId: body.userId,
          productSizeId: body.productSizeId,
        },
      }
    );
    return {
      message: "The product is already in the cart and is the same size",
      newCart: newCart,
    };
  } else {
    // If the product is not in the cart, create a new cart
    const newCart = await db.Cart.create({
      userId: body.userId,
      productSizeId: body.productSizeId,
      quantity: +body.quantity,
    });
    return {
      message: "The product is added in the cart",
      newCart: newCart,
    };
  }
  // return newCart;
};

export const getAllCart = async () => {
  return db.Cart.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        model: db.ProductSize,
        as: "productSize",
        attributes: {
          exclude: ["createdAt", "updatedAt", "productId", "sizeId"],
        },
      },
    ],
    // include: [
    //   {
    //     model: db.ProductSize,
    //     as: "sizeProduct",
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt"],
    //     },
    //     // include: [
    //     //   //* size
    //     //   {
    //     //     model: db.Size,
    //     //     as: "size",
    //     //     attributes: {
    //     //       exclude: ["createdAt", "updatedAt", "id"],
    //     //     },
    //     //   },
    //     //   //* product
    //     //   {
    //     //     model: db.Product,
    //     //     as: "product",
    //     //     attributes: {
    //     //       exclude: ["createdAt", "updatedAt", "id"],
    //     //     },
    //     //   },
    //     // ],
    //   },
    //   // {
    //   //   model: db.User,
    //   //   as: "user",
    //   //   attributes: {
    //   //     exclude: ["createdAt", "updatedAt"],
    //   //   },
    //   // },
    // ],
  });
};

export const getAllCartByUser = async ({ id }) => {
  console.log(22222, id);
  // get all products in the cart of a user through the productSizeId and userId
  return await db.Cart.findAll({
    where: { userId: id },
    attributes: {
      exclude: ["createdAt", "updatedAt", "productSizeId"],
    },
    include: [
      {
        model: db.ProductSize,
        as: "productSize",
        attributes: {
          exclude: ["createdAt", "updatedAt", "productId", "sizeId"],
        },
        include: [
          //* size
          {
            model: db.Size,
            as: "size",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          //* product
          {
            model: db.Product,
            as: "product",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
            include: [
              {
                model: db.Image,
                as: "image",
                attributes: {
                  exclude: ["createdAt", "updatedAt"],
                },
              },
            ],
          },
        ],
      },
    ],
  });
};

export const deleteCart = async (id) => {
  return await db.Cart.destroy({
    where: { id: id },
  });
};
