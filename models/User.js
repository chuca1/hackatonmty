const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    password: String,
    rfc: String
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const User = model("User", userSchema);

module.exports = User;
