import request from '@/utils/request'
export function listMusic(data){
    return request({
        url: '/v1/music/search?pageIndex='+data.pageIndex+"&pageSize="+data.pageSize,
        method: 'post',
        data
    })
} 