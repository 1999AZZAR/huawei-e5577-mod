var g_connectionData=null,connectionstatus=null,vsim_status="",g_vsim_info="",vsim_checkhealth_info="",vsim_check_status="",g_timerReboot=1e3,roamAutoConnectEnable=0,vsimStatus="",cradle_connect_status="";function updateVsimRadioStatus(t){0==t?$("#vsimstatus").val(0):1==t?$("#vsimstatus").val(1):$("#vsimstatus").val(2)}function setRoamStatus(t){1==t&&$("[name='roam_switch']").eq(0).attr("checked",!0)}function initPage(){getAjaxData("api/dialup/connection",(function(t){var a=xml2object(t);"response"==a.type&&(g_connectionData=a.response,roamAutoConnectEnable=g_connectionData.RoamAutoConnectEnable)}),{sync:!0}),setRoamStatus(parseInt(g_connectionData.RoamAutoConnectEnable,10))}function initVsim(){getAjaxData("api/vsim/operateswitch-vsim",(function(t){var a=xml2object(t);if("response"!=a.type)return showInfoDialog(common_error),!1;g_vsim_info=a.response,updateVsimRadioStatus(vsim_status=g_vsim_info.vsim_status)}),{sync:!0})}function initCrableStatus(){getAjaxData("api/cradle/status-info",(function(t){var a=xml2object(t);if("response"==a.type){var o=a.response;cradle_connect_status=o.connectstatus}}),{sync:!0})}function initVsimStatus(){getAjaxData("api/vsim/checkhealth-vsim",(function(t){var a=xml2object(t);if("response"==a.type){var o=a.response;vsim_check_status=o.vsim_health}}),{sync:!0})}function getMobile_dataswitch(){getAjaxData("api/monitoring/status",(function(t){var a=xml2object(t);if("response"==a.type){var o=a.response;"901"==(connectionstatus=o.ConnectionStatus)?(initVsimStatus(),""!=vsim_check_status&&"1"==vsim_check_status?(closeWaitingDialog(),showInfoDialog(IDS_vsim_check_status1)):(closeWaitingDialog(),showInfoDialog(IDS_vsim_check_status0))):g_module.cradle_enabled?(initCrableStatus(),"901"==cradle_connect_status?(initVsimStatus(),""!=vsim_check_status&&"1"==vsim_check_status?(closeWaitingDialog(),showInfoDialog(IDS_vsim_check_status1)):(closeWaitingDialog(),showInfoDialog(IDS_vsim_check_status0))):(closeWaitingDialog(),showInfoDialog(IDS_connection_status))):(closeWaitingDialog(),showInfoDialog(IDS_connection_status))}}),{errorCB:function(t,a){closeWaitingDialog(),showInfoDialog(IDS_connection_status)}})}function postMoblieconnection(){g_connectionData.RoamAutoConnectEnable=$("[name='roam_switch']").get(0).checked?1:0;var t=object2xml("request",g_connectionData);saveAjaxData("api/dialup/connection",t,(function(t){var a=xml2object(t);isAjaxReturnOK(a)?postVsim():(showInfoDialog(common_fail),initPage())}))}function postData(){g_connectionData.RoamAutoConnectEnable=$("[name='roam_switch']").get(0).checked?1:0;var t=object2xml("request",g_connectionData);saveAjaxData("api/dialup/connection",t,(function(t){var a=xml2object(t);clearDialog(),isAjaxReturnOK(a)?(showInfoDialog(common_success),vsimStatus=$("#vsimstatus").val(),roamAutoConnectEnable=$("[name='roam_switch']").get(0).checked?1:0,button_enable("apply_button","0")):(showInfoDialog(common_fail),initPage())}))}function postVsim(){g_vsim_info.vsim_status=$("#vsimstatus").val();var t=object2xml("request",g_vsim_info);saveAjaxData("api/vsim/operateswitch-vsim",t,(function(t){var a=xml2object(t);clearDialog(),startLogoutTimer(),"response"==a.type&&"OK"==a.response?(showWaitingDialog(common_waiting,update_label_device_waiting),do_reboot(),button_enable("apply_button","0")):showInfoDialog(common_failed)}),{timeout:12e4,errorCB:function(t,a){startLogoutTimer(),closeWaitingDialog();var o="timeout"==a?common_timeout:common_failed;showInfoDialog(o)}})}function do_reboot(){getAjaxData("api/dhcp/settings",(function(t){var a=xml2object(t);if("response"==a.type){var o=a.response.DhcpIPAddress;ping_setPingAddress(o),setTimeout(startPing,5e4)}}),{sync:!0})}function checkHeal(){showWaitingDialog(common_waiting,IDS_vsim_checking_status),getMobile_dataswitch()}$(document).ready((function(){initVsim(),initPage(),button_enable("apply_button","0"),0==(vsimStatus=$("#vsimstatus").val())?$("#roam_on").hide():1==vsimStatus?($("#roam_on").hide(),$("#description_auto").hide()):2==vsimStatus&&$("#description_auto").hide(),$("#vsimstatus,[name='roam_switch']").change((function(){button_enable("apply_button","1"),"2"==$("#vsimstatus").val()?($("#description_auto").hide(),$("#roam_on").show()):"0"==$("#vsimstatus").val()?($("#roam_on").hide(),$("#description_auto").show()):"1"==$("#vsimstatus").val()&&($("#roam_on").hide(),$("#description_auto").hide()),$("#vsimstatus").val()!=vsimStatus||($("[name='roam_switch']").get(0).checked?1:0)!=roamAutoConnectEnable&&0!=vsimStatus&&1!=vsimStatus||button_enable("apply_button","0")})),$("#button_vsim_check").click((function(){isButtonEnable("button_vsim_check")&&checkHeal()})),$("#apply_button").bind("click",(function(){isButtonEnable("apply_button")&&($("#vsimstatus").val()==vsimStatus||0!=$("#vsimstatus").val()&&1!=$("#vsimstatus").val()?$("#vsimstatus").val()!=vsimStatus&&(2==$("#vsimstatus").val()&&$("[name='roam_switch']").get(0).checked||0!=roamAutoConnectEnable)?showConfirmDialog(system_hint_operation_restart_device,postMoblieconnection,(function(){})):$("#vsimstatus").val()!=vsimStatus&&2==$("#vsimstatus").val()&&($("[name='roam_switch']").get(0).checked?1:0)==roamAutoConnectEnable?showConfirmDialog(system_hint_operation_restart_device,postVsim,(function(){})):$("#vsimstatus").val()==vsimStatus&&2==vsimStatus&&1==$("[name='roam_switch']").get(0).checked?showConfirmDialog(dialup_hint_roam_auto_connect,postData,(function(){})):$("#vsimstatus").val()==vsimStatus&&2==vsimStatus&&0==$("[name='roam_switch']").get(0).checked&&showConfirmDialog(firewall_hint_submit_list_item,postData,(function(){})):showConfirmDialog(system_hint_operation_restart_device,postVsim,(function(){})))}))}));
