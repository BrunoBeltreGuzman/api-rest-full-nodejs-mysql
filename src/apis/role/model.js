const connection = require("../../lib/connectionMySQL/connnectionMySQL");

module.exports = {
       /*
              Insert Role
       */
       async insert(role, response) {
              try {
                     await connection.query(
                            {
                                   sql: "INSERT INTO roles (role) VALUES (?)",
                                   values: [role],
                            },
                            function (error, results, fields) {
                                   if (error) {
                                          response(error);
                                          throw error;
                                   } else {
                                          response(results);
                                   }
                            }
                     );
              } catch (error) {
                     throw error;
              }
       },

       /*
              Update Role
       */
       async update(id, role, response) {
              try {
                     await connection.query(
                            {
                                   sql:
                                          "UPDATE  roles SET role = ? WHERE id = ?",
                                   values: [role, id],
                            },
                            function (error, results, fields) {
                                   if (error) {
                                          response(error);
                                          throw error;
                                   } else {
                                          response(results);
                                   }
                            }
                     );
              } catch (error) {
                     throw error;
              }
       },

       /*
              Delete Role
       */
       async delete(id, response) {
              try {
                     await connection.query(
                            {
                                   sql: "DELETE FROM roles WHERE id = ?",
                                   values: [id],
                            },
                            function (error, results, fields) {
                                   if (error) {
                                          response(error);
                                          throw error;
                                   } else {
                                          response(results);
                                   }
                            }
                     );
              } catch (error) {
                     throw error;
              }
       },

       /*
              FindAll Role
       */
       async findAll(response) {
              try {
                     await connection.query(
                            {
                                   sql: "SELECT * FROM roles",
                            },
                            function (error, results, fields) {
                                   if (error) {
                                          response(error);
                                          throw error;
                                   } else {
                                          response(results);
                                   }
                            }
                     );
              } catch (error) {
                     throw error;
              }
       },

       /*
              FindById Role
       */
       async findById(id, response) {
              try {
                     await connection.query(
                            {
                                   sql: "SELECT * FROM roles WHERE id = ?",
                                   values: [id],
                            },
                            function (error, results, fields) {
                                   if (error) {
                                          response(error);
                                          throw error;
                                   } else {
                                          response(results);
                                   }
                            }
                     );
              } catch (error) {
                     throw error;
              }
       },
};
