import request from 'axios'

export function Api(obj) {
    return request({
      url: '/admin/userinfo',
      method: 'post',
      data: obj
    })
  }