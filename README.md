# api-rest-full-nodejs-mysql
API-REST-FULL with some Entities and Authentication Json Web Token, NodeJs, Express and MySQL and requests http get, post, put and delete.

# Entitys:

**Entities, structure of their tables and their relationships**
![Image](https://github.com/BrunoBeltreGuzman/api-rest-full-nodejs-mysql/blob/main/screenshot/tables.png)
**More specific structure in `SQL` folder**

# Structure:

**The controller of each api is imported and each function corresponding to each request is passed as parameters. Thus, in each controller it receives the `request` and` response` parameters and is in charge of receiving and sending what the client requests.**

**Users:**

```javascript
router.post(
       "/",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.insert
);

router.put(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.update
);

router.delete(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.delete
);

router.get(
       "/",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.findAll
);

router.get(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.findById
);
```

**Role:**

```javascript
router.post(
       "/",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.insert
);

router.put(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.update
);

router.delete(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.delete
);

router.get(
       "/",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.findAll
);

router.get(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isAdmin],
       controllers.findById
);
```

**Posts:**

```javascript
router.post(
       "/",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.insert
);

router.put(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.update
);

router.delete(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.delete
);

router.get(
       "/",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.findAll
);

router.get(
       "/:id",
       [jsonwebtoken.verifyToken, jsonwebtoken.isUser],
       controllers.findById
);
```

**Sign:**

```javascript
router.post("/signin", [jsonwebtoken.allRols], controllers.signin);

router.post("/signup", [jsonwebtoken.allRols], controllers.signup);
```

# Router

**This is the main router where all the routers of all the apis are imported and a prefix or subdomain is added to identify each route and then export them to where the application starts.**

```javascript
router.use("/users", routerUsers);

router.use("/sign", routerSigns);

router.use("/post", routerPosts);

router.use("/role", routerRoles);
```

# Bcrypt:

**Bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on Blowfish encryption.**

```javascript
async encryptPassword(password) {
       try {
              const salt = await bcrypt.genSalt(10);
              const hash = await bcrypt.hash(password, salt);
              return hash;
       } catch (error) {
              throw error;
       }
};

async matchPassword(password, savedPassword) {
       try {
              const boo = await bcrypt.compare(password, savedPassword);
              return boo;
       } catch (error) {
              throw error;
       }
};
```

The rest api uses two Bcrypt functions `encryptPassword(password)` to encrypt the password and `matchPassword(password, savedPassword) ` to decrypt it.

# JSON Web Token:

**JSON Web Token is an open standard based on JSON proposed by the IETF for the creation of access tokens that allow the propagation of identity and privileges**

```javascript
async verifyToken(request, response, next) {
       let token = request.headers["authorization"];
       if (token) {
              try {
                     const decode = await jwt.verify(token, config.secret);
                     request.user = decode.user;
                     next();
              } catch (error) {
                     throw error;
              }
       }else{
              return response.status(403).send({
                     message: "No token provided!",
              });
       }
};
```

# Install

**Install**

```console
$ npm install
```

**Run**

```console
$ npm run dev

or

$ node src/index.js
```

**Dependencies**

```json
"dependencies": {
       "bcryptjs": "^2.4.3",
       "express": "^4.17.1",
       "jsonwebtoken": "^8.5.1",
       "morgan": "^1.10.0",
       "mysql": "^2.18.1"
},
"devDependencies": {
       "nodemon": "^2.0.6"
}
```

# Routers:

# Sign:

Signup

`POST - http://localhost:2000/sign/signup`

Signin

`POST - http://localhost:2000/sign/signin`

# Users:

Fetch ALL Records

`GET - http://localhost:2000/users`

Fetch Single Record

`GET - http://localhost:2000/users/{id}`

Create Record

`POST - http://localhost:2000/users`

Update Record

`PUT - http://localhost:2000/users/{id}`

Remove Records

`DELETE - http://localhost:2000/users/{id}`

# Role:

Fetch ALL Records

`GET - http://localhost:2000/role`

Fetch Single Record

`GET - http://localhost:2000/role/{id}`

Create Record

`POST - http://localhost:2000/role`

Update Record

`PUT - http://localhost:2000/role/{id}`

Remove Records

`DELETE - http://localhost:2000/role/{id}`

# Posts:

Fetch ALL Records

`GET - http://localhost:2000/posts`

Fetch Single Record

`GET - http://localhost:2000/posts/{id}`

Create Record

`POST - http://localhost:2000/posts`

Update Record

`PUT - http://localhost:2000/posts/{id}`

Remove Records

`DELETE - http://localhost:2000/posts/{id}`
