import mongoose from "mongoose";
import validator from "validator";

//creating schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        required: [true, "Email is require"],
        unique: true,
        validate: validator.isEmail,

    },
    password: {
        type: String,
        required: [true, "password is require"],
        minlength: [6, "password lengfth should be greater than a character"],
    },
    location: {
        type: String,
        default: "India",
    },
},
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
