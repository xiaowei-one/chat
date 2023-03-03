import { host } from './api'

export default ({ url, method = 'POST', success, fail, ...rest }: UniNamespace.RequestOptions) => {
  uni.request({
    method,
    url: `${host}${url}`,
    success(res) {
      if (res.statusCode !== 200) {
        console.log('error')
      } else {
        success && success(res)
      }
    },
    fail(error){
      console.log('error', error)
      fail && fail(error)
    },
    ...rest,
  })
}