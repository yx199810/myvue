<template>
  <div class="login">
    {{ message }}
    <input v-model="username" placeholder="用户名">
    <input v-model="password" placeholder="密码">
    <button v-on:click="login">登陆 </button>
  </div>
</template>
 
<script>
    export default {
      name: "login",
      data() {
        return {
          message: 'Hello Vue!',
          username: '',
          password: ''
        }
      },
      http: {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
      },
      methods: {
        login: function () {
          var _this = this;
          console.log(_this.username+_this.password);
          var data = new Map(['username', '_this.username'],['password', '_this.password']);
          _this.$http.post('http://192.168.0.27:443/sysUser/adminLogin',data
          )
            .then(function (response) {
              var errorcode = response.data.code;
              console.log(response.data.data)
              if (errorcode == "200") {
                _this.$router.push(
                  { path: '/HelloWorld',
                    query: {
                      user: response.data.data,
                    }
                  });
              } else {
                _this.$router.push({ path: '/Test' });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
 
    }
</script>
 
<style scoped>
 
</style>