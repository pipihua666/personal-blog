/*
 * @Descripttion: 项目路由接口
 * @Author: zhaokh
 * @Date: 2020-02-04 16:03:02
 */
import { Application } from "egg";

export default (app: Application) => {
  require("./router/font_end")(app);
  require("./router/back_end")(app);
};
