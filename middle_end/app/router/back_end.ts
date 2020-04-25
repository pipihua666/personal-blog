import { Application } from 'egg'
/*
 * @Descripttion: 后端路由接口
 * @Author: zhaokh
 * @Date: 2020-02-04 16:44:29
 */
module.exports = (app: Application) => {
  const { controller, router } = app
  const { auth } = app.middleware
  router.post('/backend/login', controller.backEnd.index.login) // 登录接口
  router.get(
    '/backend/ariticleType',
    auth(),
    controller.backEnd.index.getAriticleType
  ) // 获取文章类型
  router.post('/backend/article', auth(), controller.backEnd.index.editArticle) // 添加或编辑文章
  router.get(
    '/backend/articles',
    auth(),
    controller.backEnd.index.getArticleList
  ) // 获取文章列表
  router.delete(
    '/backend/article',
    auth(),
    controller.backEnd.index.deleteArticle
  ) // 删除文章
  router.put(
    '/backend/article',
    auth(),
    controller.backEnd.index.updateArticle
  ) // 编辑文章
}
