import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/logistics/getTrace',
    method:'get',
    params:params
  })
}
