const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vuedata');

const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

const loginSchema = mongoose.Schema({
  acount : String,
  password : String,
});

const Models = {
  Login : mongoose.model('Login',loginSchema)
}

module.exports = Models;
