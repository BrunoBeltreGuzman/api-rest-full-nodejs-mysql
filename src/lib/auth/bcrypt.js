const bcrypt = require("bcryptjs");

const helpers = {};

helpers.encryptPassword = async function (password) {
       try {
              const salt = await bcrypt.genSalt(10);
              const hash = await bcrypt.hash(password, salt);
              return hash;
       } catch (error) {
              throw error;
       }
};

helpers.matchPassword = async function (password, savedPassword) {
       try {
              return await bcrypt.compare(password, savedPassword);
       } catch (error) {
              throw error;
       }
};

module.exports = helpers;
