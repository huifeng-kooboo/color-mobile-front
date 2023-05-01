<template>
    <van-row class="loginLogo" justify="center">
        <van-col>
            <van-image width="200" height="200" src="https://ytouch-1258011219.cos.ap-nanjing.myqcloud.com/zSm4FIlogo.png" />
        </van-col>
    </van-row>
    <van-row class="loginTitle" justify="center">
        <van-col>
            <h2 style="color: black; margin-top: 20px; font-size: 14px;">登录界面</h2>
        </van-col>
    </van-row>
    <van-row class="loginInput" justify="center">
        <van-col>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                  <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                  />
                  <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                  />
                </van-cell-group>
                <div style="margin: 16px;">
                  <van-button round block type="primary" native-type="submit">
                    登录
                  </van-button>
                </div>
              </van-form>      
        </van-col>
    </van-row>
</template>