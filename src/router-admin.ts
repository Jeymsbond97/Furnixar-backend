import express from "express";
import restaurantController from "./controllers/furnixar.Controller";
import productController from "./controllers/product.controller";
import makeUploader  from "./libs/utils/uploader";
import furnixarController from "./controllers/furnixar.Controller";
const routerAdmin  = express.Router();

// Restaurant bilan bog'liq routerlar:

routerAdmin.get('/', furnixarController.goHome);

routerAdmin.get('/login',furnixarController.getLogin).post('/login',furnixarController.processLogin);

routerAdmin.get('/signup', furnixarController.getSignup).post('/signup', makeUploader('members').single("memberImage"), restaurantController.processSignup);

routerAdmin.get("/logout", furnixarController.logout);
routerAdmin.get("/check-me", furnixarController.checkAuthSession);


// Product bilan bog'liq bo'lgan routerlar:

routerAdmin.get("/product/all", furnixarController.verifyRestaurant, productController.getAllProducts);
routerAdmin.post("/product/create", furnixarController.verifyRestaurant, makeUploader('products').array("productImages", 5), productController.createNewProduct);
routerAdmin.post("/product/:id", furnixarController.verifyRestaurant, productController.updateChosenProduct);

// User bilan bog'liq bo'lgan routerlar

routerAdmin.get('/user/all', furnixarController.verifyRestaurant, furnixarController.getUsers);
routerAdmin.post('/user/edit', furnixarController.verifyRestaurant, furnixarController.updateChosenUser);

export default routerAdmin