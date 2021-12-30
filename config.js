require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.DB_URL || 'mongodb+srv://Salymka:12345@dbfornode.ktnan.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
};
