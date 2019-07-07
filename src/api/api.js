import axios from './axios'
const requests = {
    // 商品类型接口
      // PostCommoditytype () {
      //   return axios('/goods-type/query', {
      //     method: 'post'
      //   })
      // },
  getUser (data = {}) {
    // user 请求接口
    return axios('/login', {
      // 请求方法
      method: 'post',
      // 请求体
      data: data
    })
  },
  getGood (data = {}){
    return axios('/order/query',{
      method:'post',
      data:data
    })
  },
  getTable (data ={}){
    return axios('/order/query-goods',{
      method:'post',
      data:data
    })
  }
  // getTwo (data = {}){
  //     return axios('/two',{
  //         method:'get',
  //         data:data
  //     })
  // },
  //   getThree (data = {}){
  //       return axios('/three',{
  //           method:'get',
  //           data:data
  //       })
  //   }
}
// 导出对象，然后在全局注册或在单个vue文件下调用
export default requests
