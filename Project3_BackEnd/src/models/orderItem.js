"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    static associate(models) {
      //   OrderItems.belongsTo(models.Orders, {
      //     foreignKey: "codeOrder",
      //     targetKey: "codeOrder",
      //     as: "orderProduct",
      //   });
      OrderItems.belongsTo(models.ProductSize, {
        foreignKey: "productSizeId",
        targetKey: "id",
        as: "productSize",
      });
    }
  }
  OrderItems.init(
    {
      quantity: DataTypes.INTEGER,
      productSizeId: DataTypes.INTEGER,
      codeOrderItem: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderItems",
    }
  );
  return OrderItems;
};
