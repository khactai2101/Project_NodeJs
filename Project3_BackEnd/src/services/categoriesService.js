import db from "../models";
import * as categoryRepository from "../repositories/categoryRepository";

export const createCategoryService = async ({ title }) => {
  try {
    const response = await categoryRepository.createCategory({ title });
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true
          ? "Create Category successfully"
          : "Category is available",
    };
  } catch (error) {
    console.log(error);
    reject(error);
  }
};

export const getAllCategoriesServices = async () => {
  try {
    const response = await categoryRepository.getAllCategories();
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const getOneCategoryServices = async ({ id }) => {
  try {
    const response = await categoryRepository.getOneCategory({ id });
    if (response?.dataValues !== undefined) {
      return {
        success: true,
        data: response?.dataValues,
      };
    } else {
      return {
        success: false,
        message: "Category not found",
      };
    }
  } catch (error) {
    return error;
  }
};

export const updateCategoryServices = async (id, body) => {
  try {
    const res = await categoryRepository.updateCategory(id, body);
    if (res[0] === 0) {
      return {
        success: false,
        message: `Category not found`,
      };
    } else {
      return {
        success: true,
        message: `Category updated successfully`,
      };
    }
  } catch (error) {
    return error;
  }
};

export const deleteCategoryServices = async ({ id }) => {
  try {
    const response = await categoryRepository.deleteCategory({ id });
    if (response === 0) {
      return {
        success: false,
        message: `Category not found`,
      };
    }
    return {
      success: response > 0 ? true : false,
      message: `Delete Category successfully`,
    };
  } catch (error) {
    return error;
  }
};
