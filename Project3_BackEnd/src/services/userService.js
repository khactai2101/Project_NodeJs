import * as UserRepository from "../repositories/userRepository";

export const getAllUserServices = async () => {
  try {
    const response = await UserRepository.getAllUser();

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const getOneUserServices = async ({ id }) => {
  try {
    const response = await UserRepository.getOneUser({ id });

    if (response?.dataValues !== undefined) {
      return {
        success: true,
        data: response?.dataValues,
      };
    } else {
      return {
        success: false,
        message: "User not found",
      };
    }
  } catch (error) {
    return error;
  }
};

export const updateUserServices = async (id, body) => {
  try {
    const response = await UserRepository.updateUser(id, body);
    if (response > 0) {
      return {
        success: true,
        message: `User updated successfully`,
      };
    } else {
      return {
        success: false,
        message: `User updated fail`,
      };
    }
  } catch (error) {
    return error;
  }
};

export const deleteUserServices = async ({ id }) => {
  try {
    const response = await UserRepository.deleteUser({ id });
    if (response === 0) {
      return {
        success: false,
        message: `User not found`,
      };
    }
    return {
      data: response,
    };
  } catch (error) {
    return error;
  }
};
