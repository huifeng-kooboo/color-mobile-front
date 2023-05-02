<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
    <van-row class="loginLogo" justify="center" >
        <van-col>
            <van-image width="200" height="200" style="margin-top:40px;"
                src="https://ytouch-1258011219.cos.ap-nanjing.myqcloud.com/zSm4FIlogo.png" />
        </van-col>
    </van-row>
    <van-row class="loginTitle" justify="center">
        <van-col>
            <h2 style="color: black; margin-top: 20px; margin-bottom: 20px; font-size: 24px; font-weight:bold;">登录界面</h2>
        </van-col>
    </van-row>
    <van-row class="loginInput" justify="center">
        <van-col>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="用户名" label="用户名" placeholder="请输入用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="密码" label="密码" placeholder="请输入密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px; margin-top:20px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </van-col>
    </van-row>
</template>
<script lang="ts">
import { loginApi } from '@/api/service/user';
import router from '@/router';
export default {
    data() {
        return {
            password: ref("dutest12."),
            username: ref("admin")
        }
    },
    beforeMount() {
      console.log("1222")  
    },
    methods: {
        onSubmit() {
            console.log("login-info:", this.username, this.password)
            console.log("进行登录的操作")
            let loginRequestData = { "username": this.username, "password": this.password }
            loginApi(loginRequestData).then(function (loginResult: { [x: string]: { [x: string]: any; }; }) {
                console.log("【response】登录返回的结果数据为:", loginResult)
                var token = loginResult["data"]["access"]
                console.log("获取cookie成功:", token)
                localStorage.setItem("token", "Bearer " + token)
                router.push("/")
            }).catch(function (error: string) {
                console.log("【response】用户登录失败：", error)
            });
        }
    }
}
</script>