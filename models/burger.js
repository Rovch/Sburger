module.exports = function(sequelize, DataTypes){
  var burger = sequelize.define("burgers", {
    text: {type: DataTypes.STRING, 
      validate: {
        len: [2,10]
      },
    },
    flag: DataTypes.BOOLEAN
  })

  return burger;
}