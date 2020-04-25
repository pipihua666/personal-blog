/*
 * @Descripttion:文章表
 * @Author: zhaokh
 * @Date: 2020-02-04 17:36:13
 */
import { Application } from "egg";

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ArticalSchema = new Schema({
    type: {
      // 文章类型编号
      type: Schema.Types.ObjectId,
      required: true
    },
    title: {
      // 文章标题
      type: String,
      required: true
    },
    content: {
      // 文章内容主体
      type: String,
      required: true
    },
    intruduction: {
      // 文章简介
      type: String,
      required: true
    },
    releaseTime: {
      // 文章发布时间
      type: Date,
      required: true
    },
    browseTimes: {
      // 文章浏览次数
      type: Number,
      required: true,
      default: 0
    }
  });
  return mongoose.model("Article", ArticalSchema);
};
