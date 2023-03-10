const Sequelize = require("sequelize");
const db = require("../database");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 5;

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.ENUM("user", "admin"),
    defaultValue: "user",
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
});

module.exports = User;

User.prototype.correctPassword = function(candidatePwd){
  return bcrypt.compare(candidatePwd, this.password);
}

User.prototype.generateToken = function(){
  return jwt.sign({id: this.id}, process.env.JWT)
}

User.authenticate = async function({ username, password }){
  const user = await this.findOne({where: {username}})
  if(!user || !(await user.correctPassword(password))){
    const error = Error('Incorrect username/password');
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function(token){
  try{
    const {id} = await jwt.verify(token, process.env.JWT)
    const user = User.findByPk(id)
    if(!user){
      throw 'nooo'
    }
    return user
  }catch(ex){
    const error = Error('bad token')
    error.status = 401
    throw error
  }
}

const hashPassword = async(user)=> {
  if(user.changed('passsword')){
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
}

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)
User.beforeBulkCreate(user => Promise.all(users.map(hashPassword)))

