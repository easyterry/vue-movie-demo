import Vue from 'vue'
import VeeValidate, {
  Validator
} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Validator.localize('zh_CN', zh_CN);
Vue.use(VeeValidate);

// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      required: (field) => {
        if (field == 'username') {
          return "用户名为必填项"
        } else if (field == 'password') {
          return "密码为必填项"
        }
      },
    }
  }
}
  Validator.localize(dictionary);
  // 手机验证
  Validator.extend('mobile', {
    getMessage: field => "请输入正确的手机号码",
    validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  });
