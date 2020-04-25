/*
 * @Descripttion: 后台控制器
 * @Author: zhaokh
 * @Date: 2020-02-04 16:43:51
 */
import { Controller } from 'egg'
import uuidv1 = require('uuid/v1')

export default class FontEndController extends Controller {
  public async login(ctx) {
    const { username = '', password = '' } = this.ctx.request.body
    let response = []
    if (username && password) {
      const admin = { username, password }
      response = await ctx.service.backEnd.index.login(admin)
    }
    if (response.length > 0) {
      //登录成功,进行session缓存
      let openId = uuidv1()
      ctx.session.openId = { openId: openId }
      ctx.body = { data: '登录成功', openId: openId }
    } else {
      ctx.throw(401, '登录失败', { user: username })
    }
  }

  public async getAriticleType(ctx) {
    ctx.body = await ctx.service.backEnd.index.getAriticleType()
  }

  // 编辑文章，有则更新，没有则添加
  public async editArticle(ctx) {
    const { dataProps = {} } = ctx.request.body
    const length = Object.keys(dataProps).length
    if (length > 0) {
      ctx.body = await ctx.service.backEnd.index.editArticle(dataProps)
    } else {
      ctx.throw(400)
    }
  }

  // 获取文章信息列表
  public async getArticleList(ctx) {
    ctx.body = await ctx.service.backEnd.index.getArticleList()
  }

  // 删除文章
  public async deleteArticle(ctx) {
    const { id = '' } = ctx.request.query
    if (id) {
      ctx.body = await ctx.service.backEnd.index.deleteArticle(id)
    } else {
      ctx.throw(400)
    }
  }

  // 编辑文章
  public async updateArticle(ctx) {
    const { payload = {} } = ctx.request.body
    const { _id = '' } = payload
    if (_id) {
      delete payload._id
      ctx.body = await ctx.service.backEnd.index.updateArticle(_id, payload)
    } else {
      ctx.throw(400)
    }
  }
}
