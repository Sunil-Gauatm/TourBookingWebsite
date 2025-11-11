import type { Request, Response, NextFunction } from "express";

export const authenticationValidation = {
  userRegistrationValidation(req: Request, res: Response, next: NextFunction) {
    const name = req.body.name?.trim();
    const phonenumber = req.body.phonenumber?.trim();
    const email = req.body.email?.trim();
    const password = req.body.password;

    if (!name)
      return res.status(400).json({ message: "Name field is required" });
    if (!phonenumber)
      return res
        .status(400)
        .json({ message: "Phone number field is required" });
    if (!email)
      return res.status(400).json({ message: "Email field is required" });
    if (!password)
      return res.status(400).json({ message: "Password field is required" });

    if (name.length < 3)
      return res
        .status(400)
        .json({ message: "Name must be at least 3 characters long" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ message: "Invalid email format" });

    const phoneRegex = /^9\d{9}$/; // 10 digits starting with 9 (Nepal)
    if (!phoneRegex.test(phonenumber))
      return res
        .status(400)
        .json({ message: "Invalid phone number format (Nepalese only)" });

    next();
  },

  userLoginValidation(req: Request, res: Response, next: NextFunction) {
    const phonenumber = req.body.phonenumber.trim();
    const password = req.body.password.trim();

    if (!phonenumber) {
      return res
        .status(400)
        .json({ message: "Phone number field is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password field is required" });
    }

    const phoneRegex = /^9\d{9}$/; // 10 digits starting with 9 (Nepal)
    if (!phoneRegex.test(phonenumber))
      return res
        .status(400)
        .json({ message: "Invalid phone number format (Nepalese only)" });

    next();
  },
};
