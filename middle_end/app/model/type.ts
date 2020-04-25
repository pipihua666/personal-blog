/*
 * @Descripttion: 导航栏表
 * @Author: zhaokh
 * @Date: 2020-02-04 17:57:43
 */
import { Application } from "egg";

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const typeSchema = new Schema({
    name: {
      // 菜单项目名称
      type: String,
      required: true
    },
    order: {
      // 排序编号
      type: Number,
      required: true
    },
    icon: {
      // 菜单项icon
      type: String,
      required: true
    }
  });
  return mongoose.model("Type", typeSchema);
};
