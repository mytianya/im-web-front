import request from '@/utils/request'
export function id(){
    return request({
        url: '/id',
        method: 'get'
    })
} 