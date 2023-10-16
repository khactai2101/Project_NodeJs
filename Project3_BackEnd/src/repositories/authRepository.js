import db from "../models";

export const register = async ({ fullName, email, password }) => {
  const defaultAvatar = `https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-12.jpg`;
  const response = await db.User.findOrCreate({
    where: { email },
    defaults: {
      fullName,
      email,
      password,
      avatar: defaultAvatar,
    },
  });
  return response;
};

export const login = async (dataUser) => {
  const { email } = dataUser;

  const user = await db.User.findOne({
    where: { email },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  return user;
};
