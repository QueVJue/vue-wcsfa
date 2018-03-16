<template>
    <div>
      <div class="content" style="min-height: 415px;" id="register">
        <div class="warp">
          <div class="content_form clearfix">
            <h2>登录科幻星云</h2>
            <div class="content_form_m l">
              <form name="formLogin"  method="post">
                <ul>
                  <li>
                    <label><span>用户名</span>
                      <input type="text" name="username" class="ipt_txt" v-model="name">
                    </label>
                  </li>
                  <li>
                    <label><span>密码</span>
                      <input type="password" name="password" class="ipt_txt" v-model="password">
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" value="1" name="remember">
                      下次自动登录</label>&nbsp;|&nbsp;<a href="member.php?act=send_mail">忘记密码</a> |&nbsp;<a href="member.php?act=send_mail">忘记验证</a></li>
                  <li>
                    <input type="hidden" name="act" value="act_login">
                    <input type="hidden" name="back_act" value="./index.php">
                    <button class="btn_blue"  style="pointer-events: auto;" @click="btnBlue()" type="button">登录</button>
                  </li>
                </ul>
              </form>
            </div>
            <div class="content_form_side r">
              <ul class="form_txt">
                <li> 还没有科幻星云用户名？<router-link to="/register">立即注册</router-link></li>
                <!--
                 <li>> 你还可以用第三方帐号登录
                  <div><a href="javascript:;" onclick="toWeiboLogin()" class="login_by_weibo">微博登录</a><a href="javascript:;" onclick="toQzoneLogin()" class="login_by_qq">QQ登录</a></div>
                </li>
                 -->
                <li> 什么是幻想公社？ <a href="article.php?id=5">幻想公社</a>
                  <div><a href="member.php?act=image" class="btn_gary">申请加入幻想公社</a></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: '',
      data: function () {
          return {
            name:'',
            password:'',
            withCredentials:true
          }
        },

      components:{

        },
      methods:{
        btnBlue:function(){

//          console.log(this.name);
//          console.log(this.password);
          this.$axios.get("http://127.0.0.1:3000/login?uname="+this.name+"&upwd="+this.password,{
            withCredentials:true
          }).then(res=>{
//            console.log(res);
            if(res.data.code>0){
              alert("成功");
              this.$router.push('/index');

            }else{
              alert(res.data.msg)
            }
          })
        }
      }

    }
</script>

<style>

</style>
