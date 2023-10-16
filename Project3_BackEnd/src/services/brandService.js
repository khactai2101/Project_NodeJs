import db from "../models";
import * as BrandRepository from "../repositories/brandRepository";

export const createBrandService = async ({ title }) => {
  try {
    const response = await BrandRepository.createBrand({ title });
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true
          ? "Create Brand successfully"
          : "Brand is available",
    };
  } catch (error) {
    return error;
  }
};

export const getAllBrandServices = async () => {
  try {
    const response = await BrandRepository.getAllBrand();

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const getOneBrandServices = async ({ id }) => {
  try {
    const response = await BrandRepository.getOneById({ id });

    if (response?.dataValues !== undefined) {
      return {
        success: true,
        data: response?.dataValues,
      };
    } else {
      return {
        success: false,
        message: "Brand not found",
      };
    }
  } catch (error) {
    return error;
  }
};

export const updateBrandServices = async (id, body) => {
  try {
    const res = await BrandRepository.getOneById({ id });
    if (!res) {
      return {
        success: false,
        message: `Brand not found`,
      };
    }
    const result = await BrandRepository.updateBrand(id, body);
    if (result) {
      return {
        success: true,
        message: `Brand updated successfully`,
      };
    }
  } catch (error) {
    return error;
  }
};

export const deleteBrandServices = async ({ id }) => {
  try {
    const response = await BrandRepository.deleteBrand({ id });
    if (response === 0) {
      return {
        success: false,
        message: `Brand not found`,
      };
    }
    return {
      success: response > 0 ? true : false,
      message: `Delete brand successfully`,
    };
  } catch (error) {
    return error;
  }
};
