<template>
  <div class="login-container">
    <div class="login-wrapper">
      <el-container class="login-main">
        <el-aside style="overflow: hidden;"> <el-image :src="url" :fit="fit" style="height: 100%;"/>
        </el-aside>
        <el-container>
          <el-header>
              <div class="text-mid">音乐空间</div>
          </el-header>
          <el-main>
            <el-form :model="loginForm">
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
          </el-main>
        </el-container>
      </el-container>

    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { reactive } from "vue";
import { login } from "@/api/user";
import { encrypt } from '@/utils/encrypt';
const fit = 'fill';
const url =
  'https://img1.baidu.com/it/u=3636959033,277400010&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333';
console.log(encrypt)
const loginForm = reactive({
  username: "",
  password: "",
});
const publickey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXosin/5O53B7qb0Jcyjs/TcYAA99/3PrMWCb8Wu7Za3H63bpJqJUAA6FIlaLSrGZQSxmtuXEMblAlZEFtsoCSTNmWmCu7X7E3JD0AUiu16js+zsfHRG69MwoCXDrT8eE0A8oHidMIIVecwYUexJUfsyGQoLMg1E65nBEkPLUkxwIDAQAB';
const handleSubmit = () => {
  login({
    username: loginForm.username,
    password: encrypt(publickey, loginForm.password),
  }).then(res => {
    console.log(res)
  })
};
</script>
  
<style scoped>
.login-container {
  margin: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #990033;
}

.login-wrapper {
  max-width: 800px;
  box-shadow: 10px 5px 5px black;
}
.login-main{
  background-color: #CC99CC;

}
.text-mid{
  height:60px;
  line-height: 60px;
  margin:auto;
  text-align: center;
}
.login-btn {
  width: 100%;
}
</style>
  