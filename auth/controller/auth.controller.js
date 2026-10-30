const User  = require("../model/user.model")
const bcrypt = require("bcrypt")


const registerUser = async (req, res) => {
  try{
        const {name,email,password} = req.body
        if(!name||!email||!password){
            return res.status(400).json({
                 success: false,
                 message: "All fields are required",
            })
        }
        if(password.length<8){
               return res.status(400).json({
               success: false,
               message: "Password must be at least 8 characters",
      });
        
    }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
        return res.status(409).json({
            success: false,
            message: "Email already registered",
        });
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
        name,
        email,
        password: hashedPassword,
        });

      return res.status(201).json({
      success: true,
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  }
  catch(error){
   if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Find user
        const user = await User.findOne({
            email: email.toLowerCase().trim()
        }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Successful login
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
module.exports = { registerUser,loginUser };