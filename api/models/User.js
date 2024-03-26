const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      required: true,
      default:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.vhv.rs%2Fdpng%2Fd%2F15-155087_dummy-image-of-user-hd-png-download.png&tbnid=n8er016PyciiUM&vet=12ahUKEwjyubD_pI2FAxUuyDgGHQn_BDIQMygJegQIARBW..i&imgrefurl=https%3A%2F%2Fwww.vhv.rs%2Fviewpic%2FihmxhJ_dummy-image-of-user-hd-png-download%2F&docid=7M71ZvBojMNkAM&w=860&h=784&q=dummy%20image%20url&ved=2ahUKEwjyubD_pI2FAxUuyDgGHQn_BDIQMygJegQIARBW",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
