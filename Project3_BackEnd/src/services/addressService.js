import * as AddressRepository from "../repositories/addressRepository";

export const createAddressService = async (data, id) => {
  try {
    const response = await AddressRepository.createAddress(data, id);
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true
          ? "Create Address successfully"
          : "Address is available",
    };
  } catch (error) {
    return error;
  }
};

export const getAllAddressServices = async () => {
  try {
    const Addresses = await AddressRepository.getAllAddresses();
    return { success: true, data: Addresses };
  } catch (error) {
    return error;
  }
};

export const getAllAddressByUserServices = async ({ id }) => {
  try {
    const response = await AddressRepository.getAllAddressesByUser(id);

    return { success: true, data: response };
  } catch (error) {
    return error;
  }
};

export const getOneAddressServices = async ({ id }) => {
  try {
    const response = await AddressRepository.getOneAddress(id);
    if (response?.dataValues !== undefined) {
      return response.dataValues;
    } else {
      return {
        success: false,
        message: "Address not found",
      };
    }
  } catch (error) {
    return error;
  }
};

export const updateAddressServices = async (id, body) => {
  try {
    const res = await AddressRepository.updateAddress(id, body);
    if (res[0] === 0) {
      return { success: false, message: "Address not found" };
    } else {
      return { success: true, message: "Address updated successfully" };
    }
  } catch (error) {
    return error;
  }
};

export const deleteAddressServices = async ({ id }) => {
  try {
    const response = await AddressRepository.deleteAddress(id);
    if (response === 0) {
      return {
        success: false,
        message: "Address not found",
      };
    }
    return { success: true, message: "Delete Address successfully" };
  } catch (error) {
    return error;
  }
};
