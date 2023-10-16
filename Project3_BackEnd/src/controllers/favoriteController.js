import * as services from "../services";

export const createFavoriteController = async (req, res) => {
  console.log(req.body);
  try {
    const response = await services.createFavoriteService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const getFavoriteByUserController = async (req, res) => {
  try {
    const { id } = req.user;

    const response = await services.getFavoriteByUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Favorite not found",
      });
    }
    return { error: "error" };
  }
};

export const getAllFavoritesController = async (req, res) => {
  try {
    const response = await services.getAllFavoritesServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const deleteFavoriteController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteFavoriteServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Favorite not found",
      });
    }
    return { error: "error" };
  }
};
