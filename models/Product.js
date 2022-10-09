const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Category = require('./Category');

class Product extends Model {}

Product.init(
  {
    product_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }, 
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      references:
      {
        model:'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
