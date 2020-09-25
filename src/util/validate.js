/**
 * @desc  [自定义校验规则]
 * @example
 *  import { rule } from "@/util/validateRules";
 *  rules: [
 *     { validator: rule.validatorNumber, trigger: 'blur'}
 *  ]
 */

export const rule = {
  /**
   * 校验 请输入中文、英文、数字包括下划线
   * 名称校验
   */
  validatorNameCn(rule, value, callback) {
    let acount = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
    if (value && (!(acount).test(value))) {
      callback(new Error('请输入中文、英文、数字包括下划线'));
    } else {
      callback();
    }
  },

  /**
   * 校验 请输入中文、英文、数字包括下划线
   * 名称校验
   */
  validatorKey(rule, value, callback) {
    let acount = /^[A-Z_]+$/;
    if (value && (!(acount).test(value))) {
      callback(new Error('请输入大写英文、下划线'));
    } else {
      callback();
    }
  },

  /**
   * 校验 首尾空白字符的正则表达式
   *
   */
  checkSpace(rule, value, callback) {
    let longrg = /[^\s]+$/;
    if (!longrg.test(value)) {
      callback(new Error('请输入非空格信息'));
    } else {
      callback();
    }
  },

  /* 校验 请输入数字
   * */
  validatorNumber(rule, value, callback) {
    let acount = /^[0-9]*$/;
    if (value && (!(acount).test(value))) {
      callback(new Error('请输入数字'));
    } else {
      callback();
    }
  },

  /**
   * 校验 请输入汉字
   * */
  validatorName(rule, value, callback) {
    let acount = /^[\u4e00-\u9fa5]+$/;
    if (value && (!(acount).test(value))) {
      callback(new Error('请输入汉字'));
    } else {
      callback();
    }
  },

  /* 手机号校验 */
  validatorPhoneNumber(rule, value, callback) {
    let acount = /^1[3-9]\d{9}$/
    if (value && (!(acount).test(value))) {
      callback(new Error('请输入正确的手机号码'))
    } else {
      callback()
    }
  },

  /**
   * 校验 身份证号的正则表达式
   */
  validatorIdNumber(rule, value, callback) {
    // let acount = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    let acount = /(^\d{17}(\d|X|x)$)/
    if (value && (!(acount).test(value))) {
      callback(new Error('请输入正确的身份证号码'))
    } else {
      callback()
    }
  },

  /**
   * 校验 邮箱的正则表达式
   */
  // validatorEmail(rule, value, callback) {
  //   let acount = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
  //   if (value && (!(acount).test(value))) {
  //     callback(new Error('请输入正确的邮箱地址'))
  //   } else {
  //     callback()
  //   }
  // },

  /**
   * 校验 请输入英文
   * */
  validatorNameEN(rule, value, callback) {
    let acount = /^[A-Za-z]+$/;
    if (value && (!(acount).test(value))) {
      callback(new Error('请输入英文'));
    } else {
      callback();
    }
  },

  /**
   * 校验 是否为非中文
   * */
  validatorNotChinese(rule, value, callback) {
    let acount = /^[^\u4e00-\u9fa5]*$/;
    if (value && (!(acount).test(value))) {
      callback(new Error('请输入非中文的字符'));
    } else {
      callback();
    }

  },

  /* 校验 邮箱
   * */
  validatorEmail(rule, value, callback) {
    let acount = /^([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (value && (!(acount).test(value))) {
      callback(new Error('请输入正确的信息'));
    } else {
      callback();
    }
  },
}
