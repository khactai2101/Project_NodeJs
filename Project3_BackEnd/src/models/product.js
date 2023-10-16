"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Brand, {
        foreignKey: "brandId",
        targetKey: "id",
        as: "brand",
      });
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
        targetKey: "id",
        as: "category",
      });
      Product.hasMany(models.Image, {
        foreignKey: "productId",
        targetKey: "id",
        as: "image",
      });
      Product.hasMany(models.ProductSize, {
        foreignKey: "productId",
        targetKey: "id",
        as: "productSize",
      });
    }
  }
  Product.init(
    {
      nameProduct: DataTypes.STRING,
      description: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
