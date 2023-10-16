"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      roleId: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "Review",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    // Thêm sợi dây liên kết
    //   await queryInterface.addConstraint("Users", {
    //     fields: ["roleId"],
    //     type: "foreign key",
    //     name: "fk_users_roleId", // Tên sợi dây liên kết (foreign key constraint)
    //     references: {
    //       table: "Roles", // Tên bảng tham chiếu
    //       field: "id", // Tên cột khóa chính trong bảng Roles
    //     },
    //     onDelete: "CASCADE", // Xóa dữ liệu trong bảng Users khi dữ liệu trong bảng Roles bị xóa
    //     onUpdate: "CASCADE", // Cập nhật dữ liệu trong bảng Users khi dữ liệu trong bảng Roles được cập nhật
    //   });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
