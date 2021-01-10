const model = require("./model");
const bcrypt = require("../../lib/auth/bcrypt");

module.exports = {
       /*
              Insert Role
       */
       async insert(request, response) {
              const role = request.body.role;

              if (typeof role !== "undefined" || role !== "") {
                     try {
                            const result = await model.insert(
                                   role,
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
              Update Role
       */
       async update(request, response) {
              const role = request.body.role;
              const id = request.params.id;

              if (
                     typeof role !== "undefined" ||
                     role !== "" ||
                     typeof id !== "undefined" ||
                     id !== ""
              ) {
                     try {
                            const result = await model.update(
                                   id,
                                   role,
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
              Delete Role
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
              FindAll Role
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
              FindById Role
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
