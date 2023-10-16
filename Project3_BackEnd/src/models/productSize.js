"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductSize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //   ProductSize.belongsTo(models.Brand, {
      //     foreignKey: "brandId",
      //     targetKey: "id",
      //     as: "brand",
      //   });
      //   ProductSize.belongsTo(models.Category, {
      //     foreignKey: "categoryId",
      //     targetKey: "id",
      //     as: "category",
      //   });
      //   ProductSize.hasMany(models.Image, {
      //     foreignKey: "ProductSizeId",
      //     targetKey: "id",
      //     as: "image",
      //   });
      ProductSize.belongsTo(models.Size, {
        foreignKey: "sizeId",
        as: "size",
      });
      ProductSize.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }
  ProductSize.init(
    {
      productId: DataTypes.INTEGER,
      sizeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductSize",
    }
  );
  return ProductSize;
};
