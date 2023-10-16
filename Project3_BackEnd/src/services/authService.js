import { generateAccessToken } from "../middlewares/generateToken";
import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

export const registerService = async ({ fullName, email, password }) => {
  try {
    const hashPassword = bcrypt.hashSync(password, salt);

    const response = await authRepository.register({
      fullName,
      email,
      password: hashPassword,
    });
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true ? "Create User successfully" : "User is available",
    };
  } catch (error) {
    return error;
  }
};

export const loginUserServices = async (dataUser) => {
  try {
    const { email, password } = dataUser;

    const user = await authRepository.login({
      email,
      password,
    });
    if (!user) {
      return { success: false, message: "Email không hợp lệ" };
    }

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      return { success: false, message: "Mật khẩu không hợp lệ" };
    }

    const token = generateAccessToken(
      user.id,
      user.fullName,
      user.email,
      user.roleId
    );
    console.log(checkPassword, "checkl");

    const { password: hiddenPassword, ...userWithoutPassword } =
      user?.dataValues || {};

    return {
      success: true,
      data: userWithoutPassword,
      accessToken: token,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
