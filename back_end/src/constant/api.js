/*
 * @Descripttion: 后端接口地址
 * @Author: zhaokh
 * @Date: 2020-02-22 21:29:58
 */
const BASIC_API = 'http://localhost:7001/backend'

export default {
  checkLogin: `${BASIC_API}/login`,
  getAriticleType: `${BASIC_API}/ariticleType`,
  editArticle: `${BASIC_API}/article`,
  getArticlesList: `${BASIC_API}/articles`,
  deleteArticle: `${BASIC_API}/article`
}
