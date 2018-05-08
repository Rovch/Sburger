module.exports = function(sequelize, DataTypes){
  var burger = sequelize.define("burgers", {
    text:{type: DataTypes.STRING, 
      validate: {
        notNull: false,
        len: [2,10]
      },
    },
    flag: DataTypes.BOOLEAN
  })


  return burger;
}