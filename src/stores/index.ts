import { defineStore } from "pinia";
export const useUserStore=defineStore('main',{
    state: ()=>({
        message:'helloworld!!!',
        refreshToken:'aaaa',
        authToken:'',
        nickName:''
    }),
})