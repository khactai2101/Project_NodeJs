import * as services from "../services";

export const createCartItemController = async (req, res) => {
  try {
    const response = await services.createCartItemService(req.body);
    console.log("teof", response);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getAllCartItemController = async (req, res) => {
  try {
    const response = await services.getAllCartItemServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const getAllCartItemByUserController = async (req, res) => {
  try {
    const { id } = req.user;
    const response = await services.getAllCartItemByUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
// export const getOneBrandController = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const response = await services.getOneBrandServices({ id });
//     return res.status(200).json(response);
//   } catch (error) {
//     if (error.success === false) {
//       return res.status(404).json({
//         error: true,
//         message: "Brand not found",
//       });
//     }
//     return { error: "error" };
//   }
// };
// export const updateBrandController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await services.updateBrandServices(id, req.body);
//     return res.status(200).json(response);
//   } catch (error) {
//     if (error.success === false) {
//       return res.status(404).json({
//         error: true,
//         message: "Brand not found",
//       });
//     }
//     return { error: "error" };
//   }
// };
// export const deleteBrandController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await services.deleteBrandServices({ id });
//     return res.status(200).json(response);
//   } catch (error) {
//     if (error.success === false) {
//       return res.status(404).json({
//         error: true,
//         message: "Brand not found",
//       });
//     }
//     return { error: "error" };
//   }
// };
