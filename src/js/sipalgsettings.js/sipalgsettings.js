var g_sipData;function checked_ck(){1==$("#enable_sip_alg").get(0).checked?$("#sip_port").removeAttr("disabled"):0==$("#enable_sip_alg").get(0).checked&&($("#sip_port").attr("disabled","disabled"),$("#sip_port").val(g_sipData.SipPort))}function initPage(){getAjaxData("api/security/sip",(function(t){var a=xml2object(t);g_sipData=a.response,$("#enable_sip_alg").attr("checked",1==g_sipData.SipStatus),$("#sip_port").val(g_sipData.SipPort),checked_ck()}))}function validateSIP(){var t=!0,a=$("#enable_sip_alg").get(0).checked?1:0,e=$("#sip_port").val();return 1==a&&(isNaN(e)||""==$.trim($("#sip_port").val())||$.trim($("#sip_port").val()).indexOf(".")>-1?(showErrorUnderTextbox("sip_port_prompt",firewall_hint_port_empty),$("#sip_port").focus(),t=!1):(e<1||e>65535)&&(showErrorUnderTextbox("sip_port_prompt",firewall_hint_port_number_valid_char),$("#sip_port").focus(),t=!1)),t}function apply(){if(clearAllErrorLabel(),isButtonEnable("apply_button")&&1==validateSIP()){g_sipData.SipStatus=$("#enable_sip_alg").get(0).checked?1:0,g_sipData.SipPort=$.trim($("#sip_port").val());var t=object2xml("request",g_sipData);button_enable("apply_button","0"),saveAjaxData("api/security/sip",t,(function(t){var a=xml2object(t);isAjaxReturnOK(a)?(button_enable("apply_button","0"),$("#sip_port").val($.trim($("#sip_port").val())),showInfoDialog(common_success)):(showInfoDialog(common_failed),setTimeout("initPage()",3e3))}))}}$(document).ready((function(){initPage(),button_enable("apply_button","0"),$("#apply_button").click((function(){apply()})),$("#enable_sip_alg").click((function(){checked_ck()})),$("input").bind("change input paste cut keydown",(function(t){MACRO_KEYCODE!=t.keyCode&&button_enable("apply_button","1")}))}));
