/**
 * jquery.validate相关扩展验证
 * @author lizz
 */

$(function () {
    // 验证用户名       
    jQuery.validator.addMethod('userNameCheck', function (value, element) {
        return this.optional(element) || /^[a-zA-Z]\w{4,20}$/.test(value);
    }, '请输入4-20位字母开头的字母或数字和下划线');

    // 字符验证       
    jQuery.validator.addMethod('stringCheck', function (value, element) {
        return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);
    }, '只能包括中文字、英文字母、数字和下划线');

    // 验证密码
    jQuery.validator.addMethod('checkPass', function(value, element) {
        return this.optional(element) || /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/.test(value);
    }, '请输入6-16位字母加数字的密码');

    // 邮箱验证       
    jQuery.validator.addMethod('isEmail', function (value, element) {
        return this.optional(element) || /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    }, '请正确填写邮箱格式');

    // 手机号码验证
    jQuery.validator.addMethod('isPhone', function (value, element) {
        var length = value.length;
        var mobile = /^1[34578][0-9]\d{8}$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, '请填写正确的手机号码');

    // 固定电话验证       
    jQuery.validator.addMethod('isTel', function (value, element) {
        var length = value.length;
        var phone = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
        return this.optional(element) || (phone.test(value));
    }, '请填写正确的固定电话');

    // 联系电话(手机/电话皆可)验证   
    jQuery.validator.addMethod('mobile', function (value, element) {
        if (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value) || /^1[34578][0-9]\d{8}$/.test(value)) {
            return true;
        }
        return false;
    }, '请输入固话或手机号码');

    jQuery.validator.addMethod('card', function (value, element) {
        if(/^([1-9]{1})(\d{14}|\d{18})$/.test(value)) {
          return true;
        }
        return false;
    })
})