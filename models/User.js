const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");
const userSchema = new Schema(
  {
    name: String,
    email: String,
    rfc: String,
    total: {
      type: Number,
      default: 0
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);
userSchema.plugin(PLM, { usernameField: "email" });
const User = model("User", userSchema);
module.exports = User;
