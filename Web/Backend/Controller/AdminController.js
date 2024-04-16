import bcrypt from "bcrypt";
import AdminModel from "../Models/Adminmodel.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Input validation
  if (
    !name ||
    !email ||
    !password ||
    name.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Input" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    let admin = new AdminModel({ name, email, password: hashPassword });
    admin = await admin.save();

    return res
      .status(201)
      .json({ message: "User Succefully Register", id: admin._id });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ message: "Error occurred at user registration" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await AdminModel.findOne({ email: email });
    if (!existingAdmin) {
      return res.status(404).json({ message: "User unavailable" });
    }

    const isPassCorrect = bcrypt.compareSync(password, existingAdmin.password);

    if (!isPassCorrect) {
      return res.status(404).json({ message: "Password incorrect" });
    }

    return res
      .status(200)
      .json({ message: "Login successful", admin: existingAdmin });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { login, register };

// everything ok
