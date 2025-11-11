import { Router } from "express";
import { authentication } from "../controllers/auth.controller.ts";
import { authenticationValidation } from "../middlewares/auth.middleware.ts";

const router = Router();

// Define your auth route
router.post(
  "/registers",
  authenticationValidation.userRegistrationValidation,
  authentication.userRegistration
);
router.post(
  "/login",
  authenticationValidation.userLoginValidation,
  authentication.userLogin
);
router.get(
  "/user",
  authentication.getUser
);

export default router;
