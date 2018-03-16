<template>
    <div class="header">
      <div class="warp clearfix">
        <div class="header_l l">
          <h1 class="logo"><router-link to="/index">科幻星云</router-link>></h1>
          <ul class="nav" id="menu">
            <li> <router-link to="/list-1"> <a>科幻盒子</a></router-link></li>
            <li> <router-link to="/wlkhds"><a>未来科幻大师奖</a></router-link></li>
            <li><router-link to="/foundation-1"><a>基地</a></router-link></li>
          </ul>
        </div>
        <div class="header_r r">
          <div class="top_member">
            <div class="search_bar"> <span class="icon_search">搜索</span>
              <label>
                <form action="" method="get">
                  <input type="text" name="keywords" id="keywords" placeholder="星云奖投票作品">
                  <button type="submit" class="" id="search_keywords">搜索</button>
                </form>
              </label>
            </div>
            <router-link to="/login" class="pop_login" v-if="PopLogin">
              登录
            </router-link>
            <span v-if="!PopLogin">Welcome</span>
            <a v-if="!PopLogin">{{uname}}</a>
            |
            <a v-if="!PopLogin" v-on:click="cancel">注销</a>
            <router-link to="/register" v-if="PopLogin">
              注册
            </router-link>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import bus from '../assets/js/test.js'

  export default {
        name: 'Header',
        data: function () {
            return {
              PopLogin:true,
              uname:''
            }
        },
        beforeCreate:function(){
          bus.bus.$on('add',(msg)=>{
//            console.log(msg);
            if(msg){
              this.PopLogin=false;
              this.uname=msg;
              return;
            }else{
              console.log(5555)
            }
          })
        },
        mounted:function(){
          this.$nextTick(function(){

          });

        },
        methods:{
          cancel:function(){
            this.PopLogin=!this.PopLogin;
            this.$axios.get("http://127.0.0.1:3000/islogin").then(data=>{
              console.log(data);
            })

          }
        }

    }
</script>

<style scoped>

</style>
