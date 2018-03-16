<template>
  <div class="content" style="min-height: 715px;" id="register">
    <div class="warp">
          <div class="content_form clearfix">
            <h2>欢迎加入科幻星云</h2>
            <div class="content_form_m l">

              <form @submit.prevent="vaBeSu">
                <ul>
                  <li>
                    <label>
                      <span>用户名</span>
                        <input class="ipt_txt" value=""
                               v-model="username"
                               v-validate="'required|min:3|max:7'"
                               name="name" type="text" data-vv-name="user"
                               :class="{'input': true, 'is-fault': errors.has('user') }"
                               @blur="uname()"
                          >
                      <em id="username_notice" style="color:#FF0000" v-show="!errors.has('user')">*</em>
                      <em style="color:#FF0000"
                          v-show="errors.has('user')"
                          class="help is-danger">
                        {{errors.first('user')}}
                      </em>
                      <em style="color:#FF0000" v-show="!errors.has('user')">
                        {{AccountNumber}}
                      </em>
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>邮箱</span>
                      <input type="email" name="email" class="ipt_txt"
                             v-model="uemail"
                             v-validate="'required|email'"
                             data-vv-name="email"
                             :class="{'input':true,'is-fault':errors.has('email')}"

                        > <!--@blur="uemail"-->
                      <em id="email_notice" style="color:#FF0000" v-show="!errors.has('email')"> *</em>
                      <em style="color:#FF0000"
                          v-show="errors.has('email')"
                          class="help is-danger">
                        {{errors.first('email')}}
                      </em>

                    </label>
                  </li>
                  <li>
                    <label>
                      <span>密码</span>
                      <input type="password" name="password" id="password1" class="ipt_txt"
                             v-model="upassword"
                             v-validate="'required|min:6|max:18|alpha_dash'"
                             data-vv-name="upassword"
                        >
                      <em style="color:#FF0000" id="password_notice" v-show="!errors.has('upassword')"> *</em>
                      <em style="color:#FF0000"
                          v-show="errors.has('upassword')"
                          class="help is-danger">
                        {{errors.first('upassword')}}
                      </em>
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>确认密码</span>
                      <input type="password" name="confirm_password" id="conform_password" class="ipt_txt"
                             v-model="upass"
                             v-validate="'required|confirmed:password'"
                             data-vv-name="upaw"
                        >
                      <em style="color:#FF0000" id="conform_password_notice" v-show="!errors.has('upaw')"> *</em>
                      <em style="color:#FF0000"
                          v-show="errors.has('upaw')"
                          class="help is-danger">
                        {{errors.first('upaw')}}
                      </em>
                    </label>
                  </li>
                  <li>
                    <label><span>验证码</span>
                      <input type="text" name="captcha" class="ipt_txt ipt_txt_small" placeholder="请输入验证码…" maxlength="4">
                    </label>
                    <img src="" alt="captcha" style="vertical-align: middle;cursor: pointer;"  id="verify"> <em>看不清，换一张</em></li>
                  <li>
                    <label>
                      <input name="agreement" type="checkbox" value="1"
                            v-validate="'required'"
                             data-vv-name="code"
                        >
                      我已经认真阅读并同意科幻星云的《<a href="" target="_blank">使用协议</a>》。</label>
                    <p style="color: #ff0000"
                       v-show="errors.has('code')"
                      >{{errors.first('code')}}</p>
                  </li>
                  <li>
                    <input name="act" type="hidden" value="act_register">
                    <input type="hidden" name="back_act" value="">
                    <button class="btn_gary" type="submit">注册</button>
                  </li>
                </ul>
              </form>

            </div>
            <div class="content_form_side r">
              <ul class="form_txt">
                <li> 还没有科幻星云用户名？<router-link to="/login"> <a>立即登录</a></router-link></li>

                <li>> 你还可以用第三方帐号登录
                  <div><a href="javascript:;" class="login_by_weibo">微博登录</a><a href="javascript:;"  class="login_by_qq">QQ登录</a></div>
                </li>

                <li> 什么是幻想公社？ <a href="">幻想公社</a>
                  <div><a href="" class="btn_gary">申请加入幻想公社</a></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
  </div>
</template>
<script>
  import custom from '../../assets/js/custom.js'
  import Vue from 'vue';
  import VeeValidate,{Validator} from 'vee-validate';
//  import axios from 'axios'
  //定义字典
  const dictionary = {
      zh_CN:{
        //自定义消息
        messages:{
//          min:(field,[length])=>  ${field}至少要有 ${length} 字符.
        },
  //自定义属性
        attributes:{
//          uname:'用户名'
//          ,qq:'QQ'
        },
        custom:custom
     }
  }

//自定义
//  Validator.extend('uname',{getMessage:field=>'xxxxxx',
//    validate:value=> /^[0-9]{5,8}$/.test(value)
//  })
//  let instance = new Validator({trueField:'uname'});

  // 2.0.0之后，引入了国际化文件，想要中文须定义i18n国际化对象


//  特定多个字段的自定义消息
//  const dict= {
//   custom:{
//      alpha:{
//        required:'不能为空'
//      },
////      alpha:{
////        required:()=>'bunem'
////      }
//    }
//  }
//  修改
//const validator = new Validator({uname:'uname'});
  Validator.localize(dictionary);


    export default {

        name: 'register',

        data: function () {
          return {
            username:'',
            upassword:'',
            upass:'',
            uemail:'',
            name:'',
            locale:'zh_CN',
            AccountNumber:''
          }
        },
      mounted:function(){
        this.$nextTick(function(){

        });

      },
      methods:{

        uname:function() {
          this.$axios.get("http://127.0.0.1:3000/exist?uname="+this.username
          ).then(res=>{
            this.AccountNumber=res.data.msg

          }
          )
        },
        //点击注册之后验证 ：validateAll()
          vaBeSu(e){
            e.preventDefault();
            this.$validator.validateAll()
            .then((result)=>{if(result){
              this.$axios.get
              ("http://127.0.0.1:3000/register?"+
              "uname="+this.username+
              "&upwd="+this.upassword+
              "&email="+this.uemail,{
                withCredentials:true})
                .then(res=>{
//                console.log(1);
              })
              alert('成功');
              this.$router.push('/login');
                return;
              }
              console.log('失败');
              });
          },

      }
    }
</script>

<style>

</style>
