import express from "express";
import {
  contact,
  login,
  logout,
  myProfile,
  updateUser,
  getUser,
  addTimeline,
  addYoutube,
  addProject,
  deleteTimeline,
  deleteYoutube,
  deleteProject,
} from "../controller/User.js";

export const userRouter = express.Router();

import { isAuthenticated } from "../middlewares/auth.js";

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);

userRouter.route("/user").get(getUser);

userRouter.route("/me").get(isAuthenticated, myProfile);

userRouter.route("/contact").post(contact);

userRouter.route("/admin/update").put(isAuthenticated, updateUser);

userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);

userRouter.route("/admin/youtube/add").post(isAuthenticated, addYoutube);

userRouter.route("/admin/project/add").post(isAuthenticated, addProject);

userRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);

userRouter.route("/admin/youtube/:id").delete(isAuthenticated, deleteYoutube);

userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);




