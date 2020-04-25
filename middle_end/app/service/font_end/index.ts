/*
 * @Descripttion: 前端service
 * @Author: zhaokh
 * @Date: 2020-02-04 17:55:25
 */
import { Service } from "egg";

class FontEndService extends Service {
  async getArticles() {
    return await this.ctx.model.Article.find({});
  }

  async getArticleById(id = "") {
    return await this.ctx.model.Article.findById(id);
  }

  async getHeaderNav() {
    return await this.ctx.model.Type.find({});
  }

  async getListByTypeid(id) {
    return await this.ctx.model.Article.find({ type: id });
  }
}

export default FontEndService;
