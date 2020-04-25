/*
 * @Descripttion: 后端service
 * @Author: zhaokh
 * @Date: 2020-02-04 17:55:25
 */
import { Service } from 'egg'

class FontEndService extends Service {
  async login(admin) {
    return await this.ctx.model.User.find(admin)
  }

  async getAriticleType() {
    return await this.ctx.model.Type.find({})
  }

  async editArticle(article) {
    const { title = '' } = article
    return this.ctx.model.Article.updateOne({ title }, article, {
      upsert: true
    })
  }

  async getArticleList() {
    return this.ctx.model.Article.find({})
  }

  async deleteArticle(id = '') {
    return this.ctx.model.Article.deleteOne({ _id: id })
  }

  async updateArticle(id = '', payload = {}) {
    return this.ctx.model.Article.findByIdAndUpdate(id, payload)
  }
}

export default FontEndService
