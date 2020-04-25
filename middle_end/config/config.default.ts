/*
 * @Descripttion:
 * @Author: zhaokh
 * @Date: 2020-02-04 16:03:02
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1580803334769_6381";

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  //my plugin
  config.mongoose = {
    url: "mongodb://localhost:27017/myblog",
    options: {}
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ["*"]
  };

  config.cors = {
    origin: "http://localhost:3000",
    credentials: true, //允许Cookie可以跨域
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
