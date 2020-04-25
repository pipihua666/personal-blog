/*
 * @Descripttion:用户表
 * @Author: zhaokh
 * @Date: 2020-02-04 17:36:13
 */
import { Application } from "egg";

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    username: {
      // 用户
      type: String,
      required: true
    },
    password: {
      // 密码
      type: String,
      required: true
    }
  });
  return mongoose.model("User", UserSchema);
};
