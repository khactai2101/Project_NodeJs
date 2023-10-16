import * as services from "../services";
export const createImageController = async (req, res) => {
  try {
    const data = req?.files?.map((el) => ({ src: el.path, ...req.body }));
    const response = await services.createImageService(data);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const getAllImageController = async (req, res) => {
  try {
    const response = await services.getAllImageService();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getOneImageController = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneImageService({ id });
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const updateImageController = async (req, res) => {
  try {
    const { id } = req.params;
    const src = req.file.path;
    console.log(req);
    const response = await services.updateImageService(id, src);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const deleteImageController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteImageService({ id });
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
