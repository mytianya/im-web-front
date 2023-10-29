import request from '@/utils/request'
export function login(data){
    return request({
        url: '/id',
        method: 'post',
        data
    })
} 