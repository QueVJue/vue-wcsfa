export default {
  email: {
    required: '邮箱不能为空'
  },
  upassword: {
    required: '密码不能为空',
    min: (filed, [length]) => '密码不能低于6位',
    max: (filed, [length]) => '密码不能超过18位',
    alpha_dash:(field) =>'密码只能够包含字母数字字符，包括破折号、下划线'
  },
  upaw: {
    required: '确认密码不能为空',
    confirmed: (field, [confirmedField]) => ` 确认密码必须与密码一致`
  },
  tel: {
    isMobile: '电话格式不正确',
    max: (filed, [length]) => '电话不能超出11位'
  },
  user: {
    required: () => '用户名不能为空',
    min: (filed, [length]) => '用户名长度不能少于 3 个字符。',
    max: (filed, [length]) => ' 用户名最长不得超过7个汉字'
  },
  code:{
    required: () => '您必须同意服务条款后，才能提交注册'
  }
}
