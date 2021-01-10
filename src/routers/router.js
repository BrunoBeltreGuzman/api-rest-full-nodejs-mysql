const express = require("express");
const router = express.Router();

const routerUsers = require("../apis/users/router");
const routerSigns = require("../apis/auth/router");
const routerPosts = require("../apis/posts/router");
const routerRoles = require("../apis/role/router");

router.use("/users", routerUsers);
router.use("/sign", routerSigns);
router.use("/post", routerPosts);
router.use("/role", routerRoles);

module.exports = router;
