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
        } else if (field == 'identify') {
          return "身份证为必填项"
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
Validator.extend('id', {
  getMessage: field => "请输入正确的身份证号码",
  validate: value => {
    var city = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外 "
    };
    var format = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i
    var status, status1, status2;
    status = format.test(value)
    if (!city[value.substr(0, 2)]) {
      status1 = false;
    } else {
      status1 = true
    }
    if (value.length == 18) {
      value = value.split('');
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = value[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (parity[sum % 11] != value[17]) {
        status2 = false;
      } else {
        status2 = true
      }
    }
    return status && status1 && status2
  }
})
