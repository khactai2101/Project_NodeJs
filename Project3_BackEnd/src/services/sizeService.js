import * as sizeRepository from "../repositories/sizeRepository";

export const createSizeService = async (body) => {
  try {
    const response = await sizeRepository.createSize(body);

    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true ? "Create Size successfully" : "Size is available",
    };
  } catch (error) {
    return error;
  }
};
export const getAllSizeServices = async () => {
  try {
    const response = await sizeRepository.getAllSize();

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};
export const getOneSizeServices = async ({ id }) => {
  try {
    const response = await sizeRepository.getOneSize({ id });
    if (response?.dataValues !== undefined) {
      return {
        success: true,
        data: response?.dataValues,
      };
    } else {
      return {
        success: false,
        message: "Size not found",
      };
    }
  } catch (error) {
    return error;
  }
};
export const updateSizeServices = async (id, body) => {
  try {
    const res = await sizeRepository.updateSize(id, body);
    if (res[0] === 0) {
      return {
        success: false,
        message: `Size not found`,
      };
    } else {
      return {
        success: true,
        message: `Size updated successfully`,
      };
    }
  } catch (error) {
    return error;
  }
};
export const deleteSizeServices = async ({ id }) => {
  try {
    const response = await sizeRepository.deleteSize({ id });
    if (response === 0) {
      return {
        success: false,
        message: `Size not found`,
      };
    }
    return {
      success: response > 0 ? true : false,
      message: `Delete Size successfully`,
    };
  } catch (error) {
    return error;
  }
};
