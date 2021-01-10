const model = require("./model");
const modelRole = require("../role/model");

const bcrypt = require("../../lib/auth/bcrypt");
const jsonwebtoken = require("../../lib/auth/jwt.js");

module.exports = {
       /*
              Signin
       */
       async signin(request, response) {
              const name = request.body.name;
              const password = request.body.password;
              console.log(name);
              if (typeof name !== "undefined" || name !== "") {
                     if (typeof password !== "undefined" || password !== "") {
                            try {
                                   const result = await model.signin(
                                          name,
                                          async function (result) {
                                                 if (result[0]) {
                                                        const validPassword = await bcrypt.matchPassword(
                                                               password,
                                                               result[0]
                                                                      .password
                                                        );
                                                        if (validPassword) {
                                                               const role = modelRole.findById(
                                                                      result[0]
                                                                             .role,
                                                                      async function (
                                                                             role
                                                                      ) {
                                                                             const token = await jsonwebtoken.signJwt(
                                                                                    {
                                                                                           user:
                                                                                                  result[0],
                                                                                           role,
                                                                                    }
                                                                             );
                                                                             response.json(
                                                                                    {
                                                                                           user:
                                                                                                  result[0],
                                                                                           role: role,
                                                                                           token: token,
                                                                                           message:
                                                                                                  "Success",
                                                                                    }
                                                                             );
                                                                      }
                                                               );
                                                        } else {
                                                               response.json({
                                                                      message:
                                                                             "Incorrect Password",
                                                               });
                                                        }
                                                 } else {
                                                        response.json({
                                                               message:
                                                                      "The Username does not exists.",
                                                        });
                                                 }
                                          }
                                   );
                            } catch (error) {
                                   throw error;
                            }
                     } else {
                            response.status(400).json({
                                   message: "Password required",
                            });
                     }
              } else {
                     response.status(400).json({ message: "User required" });
              }
       },

       /*
              Signup 
       */
       async signup(request, response) {
              const name = request.body.name;
              const email = request.body.email;
              let password = request.body.password;

              if (
                     typeof name !== "undefined" ||
                     name !== "" ||
                     typeof email !== "undefined" ||
                     email !== "" ||
                     typeof password !== "undefined" ||
                     password !== ""
              ) {
                     try {
                            //bcrypt password
                            password = await bcrypt.encryptPassword(
                                   request.body.password
                            );

                            const result = await model.signup(
                                   name,
                                   email,
                                   password,
                                   function (result) {
                                          response.json(result);
                                   }
                            );
                     } catch (error) {
                            throw error;
                     }
              } else {
                     response.status(400).json({
                            message: "Inputs incomplete, All input required",
                     });
              }
       },
};
