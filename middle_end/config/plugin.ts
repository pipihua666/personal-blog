/*
 * @Descripttion:
 * @Author: zhaokh
 * @Date: 2020-02-04 16:03:02
 */
import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  mongoose: {
    enable: true,
    package: "egg-mongoose"
  },
  cors: {
    enable: true,
    package: "egg-cors"
  },
  validate: {
    enable: true,
    package: "egg-validate"
  }
};

export default plugin;
