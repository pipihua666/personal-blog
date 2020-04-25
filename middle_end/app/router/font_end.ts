/*
 * @Descripttion: 前端路由接口
 * @Author: zhaokh
 * @Date: 2020-02-04 16:44:29
 */
import { Application } from "egg";

module.exports = (app: Application) => {
  const { controller, router } = app;
  router.get("/fontend/articles", controller.fontEnd.index.getArticles); // 首页列表
  router.get("/fontend/article/:id", controller.fontEnd.index.getArticleById); // 文章详情
  router.get("/fontend/nav", controller.fontEnd.index.getHeaderNav); // 头部导航
  router.get("/fontend/list/:id", controller.fontEnd.index.getListByTypeid); // 头部导航
};
