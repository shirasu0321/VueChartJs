<template>
  <div class="login-box">
    <img
    class="logo"
    src="@/assets/marsIcon2.png"
    />
    <div class="login-input">
      <input type="button" class="login-button" value="ログイン" onclick="location.href='./#/Home'"/>
      <input type="textbox" class="user-id" v-model="userId" placeholder="社員番号"/>
      <input type="password" class="password" v-model="userPass" placeholder="パスワード"/>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      userId: '',
      userPass: ''
    }
  },
  methods:{
    UserAuth(){
      this.$store.dispatch('Login/Auth',{'id':this.userId, 'pass': this.userPass})
    }
  }
}
</script>

<style scoped>
  .login-box {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    text-align: center;
    user-select: none;
  }
  .login-input {
    margin: auto;
    padding-top: 10px;
    width: 380px;
    height: 200px;
    background: #FFFFFF;
  }
  .logo {
    text-align: center;
    margin-top: 100px;
  }
  .user-id {
    float: left;
    border-width: 0px 0px 4px 0px;
    width: 240px;
    height: 30px;
    font-size: 16px;
    border-color: rgb(139, 139, 139);
    color: rgb(89, 89, 89);
    outline: 0;
    border-style: dotted;
  }
  .password {
    float: left;
    margin-top: 30px;
    border-width: 0px 0px 4px 0px;
    width: 240px;
    height: 30px;
    font-size: 16px;
    border-color: rgb(139, 139, 139);
    color: rgb(89, 89, 89);
    outline: 0;
    border-style: dotted;
  }
  .login-button {
    float: right;
    /* margin-top: 10px;
    padding-top: 20px; */
    width: 95px;
    height:105px;
    background-color: rgb(247, 127, 94);
    font-size: 15px;
    color: #FFFFFF;
    outline: 0;
    border-radius: 15px;
  }
  
</style>


