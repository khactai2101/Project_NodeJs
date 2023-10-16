import * as favoriteRepository from "../repositories/favoriteRepository";

export const createFavoriteService = async ({ userId, productId }) => {
  try {
    const response = await favoriteRepository.createFavorite({
      userId,
      productId,
    });
    console.log(response);
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true
          ? "Create Favorite successfully"
          : "Favorite is available",
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllFavoritesServices = async () => {
  try {
    const response = await favoriteRepository.getAllFavorites();
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const getFavoriteByUserServices = async ({ id }) => {
  try {
    const response = await favoriteRepository.getFavoriteByUser({ id });
    console.log(response);
    if (response[0]?.dataValues !== undefined) {
      return {
        success: true,
        data: response[0]?.dataValues,
      };
    } else {
      return {
        success: false,
        message: "Favorite not found",
      };
    }
  } catch (error) {
    return error;
  }
};
export const deleteFavoriteServices = async ({ id }) => {
  try {
    const response = await favoriteRepository.deleteFavorite({ id });
    if (response === 0) {
      return {
        success: false,
        message: `Favorite not found`,
      };
    }
    return {
      success: response > 0 ? true : false,
      message: `Delete Favorite successfully`,
    };
  } catch (error) {
    return error;
  }
};
