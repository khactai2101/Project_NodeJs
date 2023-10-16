import db from "../models";

export const createAddress = async (data, id) => {
  try {
    const userData = { ...data, userId: id };
    const response = await db.Address.findOrCreate({
      where: {
        addressName: data.addressName,
        phoneNumber: data.phoneNumber,
        userId: id,
      },
      defaults: { userData },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllAddresses = async () => {
  try {
    const response = await db.Address.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllAddressesByUser = async (userId) => {
  try {
    const response = await db.Address.findAll({
      where: { userId },
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getOneAddress = async (id) => {
  try {
    const response = await db.Address.findOne({
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

export const updateAddress = async (id, body) => {
  try {
    const res = await db.Address.update(body, {
      where: { id },
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const deleteAddress = async (id) => {
  try {
    const response = await db.Address.destroy({
      where: { id },
    });

    return response;
  } catch (error) {
    return error;
  }
};
