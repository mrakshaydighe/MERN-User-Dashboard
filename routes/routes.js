import express from "express";
import { create, deletUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";



const route = express.Router()


route.post("/create",create);
route.get("/users",getAllUsers);
route.get("/users/:id",getUser);
route.put("/users/:id",updateUser)
route.delete("/users/:id",deletUser);

export default route;