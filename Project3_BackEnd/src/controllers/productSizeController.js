import * as services from "../services";

export const createProductSizeController = async (req, res) => {
  try {
    const response = await services.createProductSizeService(req.body);
    // console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const getAllProductSizeController = async (req, res) => {
  try {
    const response = await services.getAllProductSizeServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
// export const getOneProductController = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const response = await services.getOneProductServices({ id });
//     return res.status(200).json(response);
//   } catch (error) {
//     if (error.success === false) {
//       return res.status(404).json({
//         error: true,
//         message: "Product not found",
//       });
//     }
//     return { error: "error" };
//   }
// };
