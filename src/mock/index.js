import Mock from 'mockjs'
Mock.mock('/id','get',{
    id:new Date().getTime()
})