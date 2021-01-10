const connection = require("../../lib/connectionMySQL/connnectionMySQL");

module.exports = {
       /*
              Insert Posts
       */
       async insert(title, content, response) {
              try {
                     await connection.query(
                            {
                                   sql:
                                          "INSERT INTO posts (title, content) VALUES (?,?)",
                                   values: [title, content],
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
              Update Posts
       */
       async update(id, title, content, response) {
              try {
                     await connection.query(
                            {
                                   sql:
                                          "UPDATE  posts SET title = ?, content = ? WHERE id = ?",
                                   values: [title, content, id],
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
              Delete Posts
       */
       async delete(id, response) {
              try {
                     await connection.query(
                            {
                                   sql: "DELETE FROM posts WHERE id = ?",
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
              FindAll Posts
       */
       async findAll(response) {
              try {
                     await connection.query(
                            {
                                   sql: "SELECT * FROM posts",
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
              FindById Posts
       */
       async findById(id, response) {
              try {
                     await connection.query(
                            {
                                   sql: "SELECT * FROM posts WHERE id = ?",
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
