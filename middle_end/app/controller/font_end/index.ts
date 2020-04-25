/*
 * @Descripttion: ĺçŤŻcontroller
 * @Author: zhaokh
 * @Date: 2020-02-04 16:43:51
 */
import { Controller } from "egg";

export default class FontEndController extends Controller {
  public async getArticles(ctx) {
    ctx.body = await ctx.service.fontEnd.index.getArticles();
  }

  public async getArticleById(ctx) {
    const {
      params: { id = "" }
    } = ctx;
    ctx.body = await ctx.service.fontEnd.index.getArticleById(id);
  }

  public async getHeaderNav(ctx) {
    ctx.body = await ctx.service.fontEnd.index.getHeaderNav();
  }

  public async getListByTypeid(ctx) {
    const { id = "" } = ctx.params;
    let result = "";
    if (id) {
      result = await ctx.service.fontEnd.index.getListByTypeid(id);
    }
    ctx.body = result;
  }
}
