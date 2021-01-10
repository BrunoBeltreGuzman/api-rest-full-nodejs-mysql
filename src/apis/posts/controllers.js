const model = require("./model");
const bcrypt = require("../../lib/auth/bcrypt");

module.exports = {
       /*
              Insert Users
       */
       async insert(request, response) {
              const title = request.body.title;
              const content = request.body.content;

              if (
                     typeof title !== "undefined" ||
                     title !== "" ||
                     typeof content !== "undefined" ||
                     content !== ""
              ) {
                     try {
                            const result = await model.insert(
                                   title,
                                   content,
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
              const title = request.body.title;
              const content = request.body.content;
              const id = request.params.id;

              if (
                     typeof title !== "undefined" ||
                     title !== "" ||
                     typeof content !== "undefined" ||
                     content !== "" ||
                     typeof id !== "undefined" ||
                     id !== ""
              ) {
                     try {
                            const result = await model.update(
                                   id,
                                   title,
                                   content,
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
