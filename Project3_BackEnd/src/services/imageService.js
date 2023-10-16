import db from "../models";
import * as imageRepository from "../repositories/imageRepository";

export const createImageService = async (body) => {
  try {
    let hasSuccess = false;
    for (const image of body) {
      try {
        const response = await imageRepository.createImage(image);
        const success = response[1] === true ? true : false;
        if (success) {
          hasSuccess = true;
        }
      } catch (error) {
        throw error;
      }
    }
    if (hasSuccess) {
      return {
        success: true,
        message: "Create image successfully",
      };
    } else {
      return {
        success: false,
        message: "Image is available",
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllImageService = async () => {
  try {
    const response = await imageRepository.getAllImage();
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const getOneImageService = async ({ id }) => {
  try {
    const response = await imageRepository.getOneImage({ id });
    // console.log(response);
    // include: [
    //     {
    //         model: db.Product,
    //         as: "product",
    //         attributes: {
    //             exclude: ["createdAt", "updatedAt"],
    //         },
    //     },
    // ],

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const updateImageService = async (id, body) => {
  try {
    const response = await imageRepository.updateImage(id, body);
    return {
      success: response > 0 ? true : false,
      message:
        response > 0 ? "Image updated successfully" : "Image update fail",
    };
  } catch (error) {
    return error;
  }
};

export const deleteImageService = async ({ id }) => {
  try {
    const response = await imageRepository.deleteImage({ id });
    return {
      success: response > 0 ? true : false,
      message: `Delete successfully`,
    };
  } catch (error) {
    return error;
  }
};
