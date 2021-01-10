const model = require("./model");
const bcrypt = require("../../lib/auth/bcrypt");

module.exports = {
       /*
              Insert Users
       */
       async insert(request, response) {
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
                            password = await bcrypt.encryptPassword(password);

                            const result = await model.insert(
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

       /*
              Update Users
       */
       async update(request, response) {
              const name = request.body.name;
              const email = request.body.email;
              const id = request.params.id;
              let password = request.body.password;

              if (
                     typeof name !== "undefined" ||
                     name !== "" ||
                     typeof email !== "undefined" ||
                     email !== "" ||
                     typeof password !== "undefined" ||
                     password !== "" ||
                     typeof id !== "undefined" ||
                     id !== ""
              ) {
                     try {
                            //bcrypt password
                            password = await bcrypt.encryptPassword(
                                   request.body.password
                            );

                            const result = await model.update(
                                   id,
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

       /*
              Delete Users
       */
       async delete(request, response) {
              const id = request.params.id;

              if (typeof id !== "undefined" || id !== "") {
                     try {
                            await model.delete(id, function (result) {
                                   response.json(result);
                            });
                     } catch (error) {
                            throw error;
                     }
              } else {
                     response.status(400).json({
                            message: "Inputs incomplete, All input required",
                     });
              }
       },

       /*
              FindAll Users
       */
       async findAll(request, response) {
              try {
                     await model.findAll(function (result) {
                            response.json(result);
                     });
              } catch (error) {
                     throw error;
              }
       },

       /*
              FindById Users
       */
       async findById(request, response) {
              const id = request.params.id;

              if (typeof id !== "undefined" || id !== "") {
                     try {
                            await model.findById(id, function (result) {
                                   response.json(result);
                            });
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
