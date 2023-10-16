import * as productRepository from "../repositories/productRepository";

export const createProductService = async (body) => {
  try {
    const response = await productRepository.createProduct(body);
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true
          ? "Create Product successfully"
          : "Product is available",
    };
  } catch (error) {
    return error;
  }
};
export const getAllProductServices = async () => {
  try {
    const response = await productRepository.getAllProduct();

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};
export const getOneProductServices = async ({ id }) => {
  try {
    const response = await productRepository.getOneProduct({ id });
    if (response?.dataValues !== undefined) {
      return {
        success: true,
        data: response?.dataValues,
      };
    } else {
      return {
        success: false,
        message: "Product not found",
      };
    }
  } catch (error) {
    return error;
  }
};
export const updateProductServices = async (id, body) => {
  try {
    const res = await productRepository.updateProduct(id, body);
    if (res[0] === 0) {
      return {
        success: false,
        message: `Product not found`,
      };
    } else {
      return {
        success: true,
        message: `Product updated successfully`,
      };
    }
  } catch (error) {
    return error;
  }
};
export const deleteProductServices = async ({ id }) => {
  try {
    const response = await productRepository.deleteProduct({ id });
    if (response === 0) {
      return {
        success: false,
        message: `Product not found`,
      };
    }
    return {
      success: response > 0 ? true : false,
      message: `Delete Product successfully`,
    };
  } catch (error) {
    return error;
  }
};
