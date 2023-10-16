import db from "../models";
import bcrypt from "bcryptjs";

export const getAllUser = async () => {
  try {
    const response = await db.User.findAll({
      include: [
        {
          model: db.Role,
          as: "role",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "roleId"], // bỏ những cái không cần thiết
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getOneUser = async ({ id }) => {
  try {
    const response = await db.User.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: db.Favorite,
          as: "favorite",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (id, body) => {
  console.log(body);
  try {
    let newUpdate = { ...body };

    if (body.password) {
      const hashPassword = bcrypt.hashSync(body.password, 12);
      newUpdate = {
        ...newUpdate,
        password: hashPassword,
      };
    }

    const response = await db.User.update(newUpdate, {
      where: { id },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteUser = async ({ id }) => {
  try {
    const response = await db.User.destroy({
      where: { id },
    });
    return response;
  } catch (error) {
    return error;
  }
};
