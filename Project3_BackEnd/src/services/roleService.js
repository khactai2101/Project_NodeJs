import * as RoleRepository from "../repositories/roleRepository";

export const createRoleService = async (body) => {
  try {
    const response = await RoleRepository.createRole(body);

    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true ? "Create Role successfully" : "Role is available",
    };
  } catch (error) {
    return error;
  }
};
export const getAllRoleServices = async () => {
  try {
    const response = await RoleRepository.getAllRole();

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};
export const getOneRoleServices = async ({ id }) => {
  try {
    const response = await RoleRepository.getOneRole({ id });
    if (response?.dataValues !== undefined) {
      return {
        success: true,
        data: response?.dataValues,
      };
    } else {
      return {
        success: false,
        message: "Role not found",
      };
    }
  } catch (error) {
    return error;
  }
};
export const updateRoleServices = async (id, body) => {
  try {
    const res = await RoleRepository.updateRole(id, body);
    if (res[0] === 0) {
      return {
        success: false,
        message: `Role not found`,
      };
    } else {
      return {
        success: true,
        message: `Role updated successfully`,
      };
    }
  } catch (error) {
    return error;
  }
};
export const deleteRoleServices = async ({ id }) => {
  try {
    const response = await RoleRepository.deleteRole({ id });
    if (response === 0) {
      return {
        success: false,
        message: `Role not found`,
      };
    }
    return {
      success: response > 0 ? true : false,
      message: `Delete Role successfully`,
    };
  } catch (error) {
    return error;
  }
};
