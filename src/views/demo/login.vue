<template>
    <el-form  :model="loginForm" >
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="handleSubmit">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive  } from "vue";
  import { login } from "@/api/user";
  import {encrypt} from '@/utils/encrypt';
  console.log(encrypt)
    const loginForm = reactive ({
    username: "",
    password: "",
    });
    const publickey='MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXosin/5O53B7qb0Jcyjs/TcYAA99/3PrMWCb8Wu7Za3H63bpJqJUAA6FIlaLSrGZQSxmtuXEMblAlZEFtsoCSTNmWmCu7X7E3JD0AUiu16js+zsfHRG69MwoCXDrT8eE0A8oHidMIIVecwYUexJUfsyGQoLMg1E65nBEkPLUkxwIDAQAB';
    const handleSubmit = () => {
      login({
        username: loginForm.username,
        password: encrypt(publickey,loginForm.password),
      }).then(res=>{
        console.log(res)
      })
    };
  </script>
  
  <style scoped>
  .login-btn {
    width: 100%;
  }
  </style>
  