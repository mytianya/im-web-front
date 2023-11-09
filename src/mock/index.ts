import Mock from 'mockjs'
Mock.setup({
    timeout:'300'
})
Mock.mock('/api/id','get',{
    id:new Date().getTime()
})

Mock.mock('/api/login','post',{
    code:1,
    token:'aaa',
    msg:'登录成功'
})