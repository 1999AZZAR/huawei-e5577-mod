var WLAN_CHANNEL_AUTO="0",WIFI5G_CHANNEL_MODE0="0",WORKINGBAND_2_4G="2.4",WORKINGBAND_5G="5",WIFI5G_ON="1",WIFI_AUTOCOUNTRY_ON="1",g_wlan_dataInfo="",g_WifiFeature=null,g_currentWorkingBand="",g_currentWifiMode="",g_autoSwitch="",g_featureSwitch=null,AN_MODE="802.11a/n",g_ap_isolation=0,wlan_basicData=[],ap_isalation_flag=!1,g_unsupportedCountry="",g_wifi_unsupportedCountry="",g_indoorOnlyChannel=[],DOUBLE_CHIP="1",g_wlan_dataInfo_ex=[],is_24G_first=!0,is_5G_first=!0,IDS_wlan_fre_0="2.4GHz",IDS_wlan_fre_1="5GHz",wlan_label_80211a="802.11a",wlan_label_80211an="802.11a/n",wlan_label_80211anac="802.11a/n/ac",wlan_label_80211bgn="802.11b/g/n",g_isChangeWiFiMode=!1,g_temp_select_WifiWorkingBand="",g_wlan_doubleSsidStatus=null,pinstatus_ret="",ssid5g="";function wlanadvanced_initChannel(e,i){if($("#select_WifiChannel").empty(),$("#5Gwifi_notes").empty(),$("#5Gwifi_notes_tr").hide(),$("#select_WifiChannel").append("<option value='0'>"+common_auto+"</option>"),i){var a=parseInt(i,10),n=parseInt(e,10),t=0;for(t=a;t<=n;t++)$("#select_WifiChannel").append("<option value="+t+">"+t+"</option>")}else{var o=0;for(o=1;o<=e;o++)$("#select_WifiChannel").append("<option value="+o+">"+o+"</option>")}}function wlanadvanced_addChannel(e,i){if($("#5Gwifi_notes").empty(),$("#5Gwifi_notes_tr").hide(),i){var a=parseInt(i,10),n=parseInt(e,10),t=0;for(t=a;t<=n;t++)$("#select_WifiChannel").append("<option value="+t+">"+t+"</option>")}else{var o=0;for(o=1;o<=e;o++)$("#select_WifiChannel").append("<option value="+o+">"+o+"</option>")}}function wlanadvanced_splitChannel(e){if(String(e).indexOf(",")<0)if(String(e).indexOf("-")<0)wlanadvanced_initChannel(e);else{var i=String(e).split("-");wlanadvanced_initChannel(i[1],i[0])}else{$("#select_WifiChannel").empty(),$("#select_WifiChannel").append("<option value='0'>"+common_auto+"</option>");var a=e.split(",");$.each(a,(function(e,i){if(String(i).indexOf("-")<0)wlanadvanced_addChannel(i,i);else{var a=String(i).split("-");wlanadvanced_addChannel(a[1],a[0])}}))}}function wlanadvanced_initChannel_2g(e,i){if($("#select_WifiChannel_2g").empty(),$("#select_WifiChannel_2g").append("<option value='0'>"+common_auto+"</option>"),i){var a=parseInt(i,10),n=parseInt(e,10),t=0;for(t=a;t<=n;t++)$("#select_WifiChannel_2g").append("<option value="+t+">"+t+"</option>")}else{var o=0;for(o=1;o<=e;o++)$("#select_WifiChannel_2g").append("<option value="+o+">"+o+"</option>")}}function wlan_initWifiMode_singleWorkingBand(){$("#select_WifiMode").empty(),$("#select_WifiMode").append('<option value="b/g/n">'+wlan_label_80211bgn+"</option>")}function wlan_initWifiMode_singleWorkingBand_2g(){$("#select_WifiMode_2g").empty(),$("#select_WifiMode_2g").append('<option value="b/g/n">'+wlan_label_80211bgn+"</option>")}function wlan_initWifiMode_singleWorkingBand_5g(){$("#select_WifiMode_5g").empty(),"1"==g_featureSwitch.acmode_enable?$("#select_WifiMode_5g").append('<option value="a/n/ac">'+wlan_label_80211anac+"</option>"):$("#select_WifiMode_5g").append('<option value="a/n">'+AN_MODE+"</option>")}function wlan_initWifiMode(e){$("#select_WifiMode").empty(),WIFI5G_ON==g_featureSwitch.wifi5g_enabled&&WORKINGBAND_5G==e?"1"==g_featureSwitch.acmode_enable?$("#select_WifiMode").append('<option value="a/n/ac">'+wlan_label_80211anac+"</option>"):$("#select_WifiMode").append('<option value="a/n">'+AN_MODE+"</option>"):$("#select_WifiMode").append('<option value="b/g/n">'+wlan_label_80211bgn+"</option>")}function wlanadvanced_wifi5G_initChannel(e){$("#select_WifiChannel").empty(),$("#5Gwifi_notes").empty(),$("#5Gwifi_notes_tr").hide(),$("#select_WifiChannel").append("<option value='0'>"+common_auto+"</option>"),wlanadvance_wifi5G_countryChannel(e)}function wlanadvanced_wifi5G_initChannel_5g(e){$("#select_WifiChannel_5g").empty(),$("#select_WifiChannel_5g").append("<option value='0'>"+common_auto+"</option>"),wlanadvance_wifi5G_countryChannel_5g(e)}function wlanadvanced_support2Band_initChannel(e,a){if($("#select_WifiWorkingBand").empty(),$("#select_WifiWorkingBand").append('<option value = "2.4">'+IDS_wlan_fre_0+"<\/script></option>"),$("#select_WifiWorkingBand").append('<option value = "5">'+IDS_wlan_fre_1+"<\/script></option>"),$.browser.msie&&6==$.browser.version)if(setTimeout((function(){$("#select_WifiWorkingBand").val(g_currentWorkingBand)}),1),wlan_initWifiMode(g_currentWorkingBand),setTimeout((function(){$("#select_WifiMode").val(g_currentWifiMode)}),5),WORKINGBAND_5G==g_currentWorkingBand)for(i=0;i<a.length;i++)$("#select_WifiChannel").append("<option value="+a[i]+">"+a[i]+"</option>");else setTimeout((function(){wifiCountry_channel(e)}),1);else if($("#select_WifiWorkingBand").val(g_currentWorkingBand),wlan_initWifiMode(g_currentWorkingBand),setTimeout((function(){$("#select_WifiMode").val(g_currentWifiMode)}),5),WORKINGBAND_5G==g_currentWorkingBand)for(i=0;i<a.length;i++)$("#select_WifiChannel").append("<option value="+a[i]+">"+a[i]+"</option>");else wifiCountry_channel(e)}function wlanadvanced_support2Band_initChannel_5g(e,a){for(i=0;i<a.length;i++)$("#select_WifiChannel_5g").append("<option value="+a[i]+">"+a[i]+"</option>")}function wlanadvance_wifi5G_countryChannel(e){var i=0;for(i=0;i<countryArray.length;i++){if(countryArray[i][0]==e){if(WIFI5G_CHANNEL_MODE0==countryArray[i][3]){if($("#select_WifiWorkingBand").empty(),$("#select_WifiWorkingBand").append('<option value = "2.4">'+IDS_wlan_fre_0+"<\/script></option>"),String(countryArray[i][1]).indexOf("-")<0)wlanadvanced_initChannel(countryArray[i][1]);else{var a=String(countryArray[i][1]).split("-");wlanadvanced_initChannel(a[1],a[0])}$("#select_WifiWorkingBand").val(WORKINGBAND_2_4G),wlan_initWifiMode(WORKINGBAND_2_4G)}var n=2;for(n=2;n<modeLength;n++)n==countryArray[i][3]&&wlanadvanced_support2Band_initChannel(e,g_modeArray[n]);break}"AUTO"==e&&($("#select_WifiWorkingBand").empty(),$("#select_WifiWorkingBand").append('<option value = "2.4">'+IDS_wlan_fre_0+"<\/script></option>"),wlan_initWifiMode(WORKINGBAND_2_4G),$("#select_WifiMode").val("b/g/n"))}}function wlanadvance_wifi5G_countryChannel_5g(e){var i=0;for(i=0;i<countryArray.length;i++)if(countryArray[i][0]==e){var a=2;for(a=2;a<modeLength;a++)a==countryArray[i][3]&&wlanadvanced_support2Band_initChannel_5g(e,g_modeArray[a]);break}}function wifiCountry_channel(e){$.each(countryArray,(function(i,a){a[0]!=e||wlanadvanced_splitChannel(a[1])}))}function wifiCountry_channel_2g(e){$.each(countryArray,(function(i,a){if(a[0]!=e);else{if(String(a[1]).indexOf("-")<0)wlanadvanced_initChannel_2g(a[1]);else{var n=String(a[1]).split("-");wlanadvanced_initChannel_2g(n[1],n[0])}$("#select_WifiChannel_2g").val()>a[1]&&setTimeout((function(){$("#select_WifiChannel_2g").val(WLAN_CHANNEL_AUTO)}),2)}}))}function wlanadvanced_initCountry(){$("#select_WifiChannel").unbind("click"),$("#select_WifiCountry").empty(),null==g_featureSwitch&&$("#select_WifiCountry").append("<option value='AUTO'>"+common_auto+"</option>"),g_wifi_unsupportedCountry=g_countryChannel.unsupport_wifi_country_list;var e=0;for(e=0;e<countryArray.length;e++)-1==g_wifi_unsupportedCountry.indexOf(countryArray[e][0].toLowerCase())&&$("#select_WifiCountry").append("<option value="+countryArray[e][0]+">"+countryArray[e][2]+"</option>")}function wlanadvanced_initCountry_for_Idevice(){var e=$("#select_WifiCountry_for_Idevice")[0].options;$.each(countryArray,(function(i,a){-1==g_wifi_unsupportedCountry.indexOf(a[0].toLowerCase())&&e.add(new Option(a[2],a[0]))}))}function wlanadvanced_ifWifioffenable(e){"0"==e?$("#select_WifiAutooffTime").attr("disabled","disabled"):$("#select_WifiAutooffTime").removeAttr("disabled")}function setDataToComponentIE6(){setTimeout((function(){$("#select_WifiChannel").val(g_wlan_dataInfo.WifiChannel),$("#5Gwifi_notes").empty(),$("#5Gwifi_notes_tr").hide();for(var e=0;e<=g_indoorOnlyChannel.length;e++)g_indoorOnlyChannel[e]==$("#select_WifiChannel").val()&&($("#5Gwifi_notes_tr").show(),$("#5Gwifi_notes").html(wlan_label_5gWifi_indoor));$("#select_WifiChannel").val()>=100&&$("#select_WifiChannel").val()<=140&&($("#5Gwifi_notes_tr").show(),$("#5Gwifi_notes").html(wlan_label_5gWifi_check))}),1),setTimeout((function(){$("#select_WifiMode").val(g_wlan_dataInfo.WifiMode)}),1),g_module.multi_ssid_enabled||null!=g_featureSwitch?setTimeout((function(){$("#select_WifiIsolate_between").val(g_ap_isolation)}),1):setTimeout((function(){$("#select_WifiIsolate_between").val(g_wlan_dataInfo.WifiIsolate)}),1),setTimeout((function(){$("#select_WifiAutooffStatus").val(g_wlan_dataInfo.Wifioffenable)}),1),setTimeout((function(){$("#select_WifiAutooffTime").val(g_wlan_dataInfo.Wifiofftime)}),1),setTimeout((function(){$("#select_wifiBandWidth").val(g_wlan_dataInfo.wifibandwidth)}),1),setTimeout((function(){wlanadvanced_ifWifioffenable(g_wlan_dataInfo.Wifioffenable)}),1),$("input[name='radio_autocountry'][value='"+g_wlan_dataInfo.wifiautocountryswitch+"']").attr("checked",!0)}function change2MixWifiMode(){null!=g_featureSwitch&&WIFI5G_ON!=g_featureSwitch.wifi5g_enabled&&"b/g/n"!=g_wlan_dataInfo.WifiMode&&(g_wlan_dataInfo.WifiMode="b/g/n",g_isChangeWiFiMode=!0)}function wlanadvanced_initPage(){null!=g_featureSwitch&&("1"==g_featureSwitch.wifi_country_enable?$.browser.ipad?($("#select_WifiCountry_for_Idevice").show(),wlanadvanced_initCountry_for_Idevice()):($("#select_WifiCountry").show(),$("#select_WifiCountry").children().size()<=1&&wlanadvanced_initCountry()):"0"==g_featureSwitch.wifi_country_enable?($("#autoCountry").remove(),$("#wlan_country").hide()):void 0===g_featureSwitch.wifi_country_enable&&g_featureSwitch.isdoublechip!=DOUBLE_CHIP&&($.browser.ipad?($("#select_WifiCountry_for_Idevice").show(),wlanadvanced_initCountry_for_Idevice()):($("#select_WifiCountry").show(),$("#select_WifiCountry").children().size()<=1&&wlanadvanced_initCountry())));var e="api/wlan/basic-settings";(g_module.multi_ssid_enabled||null!=g_featureSwitch)&&(e=DOUBLE_CHIP==g_featureSwitch.isdoublechip?"api/wlan/multi-security-settings-ex":"api/wlan/multi-security-settings"),(null!=g_featureSwitch||g_module.multi_ssid_enabled)&&getAjaxData("api/wlan/multi-basic-settings",(function(e){var i=xml2object(e);wlan_basicData=CreateArray(i.response.Ssids.Ssid),ssid5g=wlan_basicData.length/2,$(wlan_basicData).each((function(e){if(delete wlan_basicData[e].WifiWpapsk,delete wlan_basicData[e].MixWifiWpapsk,delete wlan_basicData[e].WifiWep128Key1,delete wlan_basicData[e].WifiWep128Key2,delete wlan_basicData[e].WifiWep128Key3,delete wlan_basicData[e].WifiWep128Key4,delete wlan_basicData[e].WifiWepKey1,delete wlan_basicData[e].WifiWepKey2,delete wlan_basicData[e].WifiWepKey3,delete wlan_basicData[e].WifiWepKey4,1==wlan_basicData[e].WifiIsolate)return g_ap_isolation=1,void(ap_isalation_flag=!0)}))}),{sync:!0}),null!=g_featureSwitch&&DOUBLE_CHIP!=g_featureSwitch.isdoublechip?getAjaxData(e,(function(e){var i=xml2object(e);if("response"==i.type){if(g_wlan_dataInfo=i.response,g_currentWorkingBand="a/n"==g_wlan_dataInfo.WifiMode||"a/n/ac"==g_wlan_dataInfo.WifiMode?WORKINGBAND_5G:WORKINGBAND_2_4G,change2MixWifiMode(g_wlan_dataInfo.WifiMode),$.browser.ipad){setTimeout((function(){$("#select_WifiCountry_for_Idevice").val(g_wlan_dataInfo.WifiCountry)}),1);var a=g_wlan_dataInfo.WifiCountry;null!=g_featureSwitch&&WIFI5G_ON==g_featureSwitch.wifi5g_enabled?wlanadvanced_wifi5G_initChannel(a):(wlan_initWifiMode_singleWorkingBand(),wifiCountry_channel(a),$("#select_WifiCountry").removeAttr("disabled")),$("#select_WifiCountry_for_Idevice").bind("change",(function(){wifiCountry_channel(a=$("#select_WifiCountry_for_Idevice").val()),button_enable("apply_button","1")}))}else{var n=0;if(setTimeout((function(){$("#select_WifiCountry").val(g_wlan_dataInfo.WifiCountry)}),1),null!=g_featureSwitch&&WIFI5G_ON==g_featureSwitch.wifi5g_enabled)wlanadvanced_wifi5G_initChannel(g_wlan_dataInfo.WifiCountry);else for($("#select_WifiCountry").removeAttr("disabled"),$("#select_WifiWorkingBand").hide(),wlan_initWifiMode_singleWorkingBand(),n=0;n<countryArray.length;n++)if(countryArray[n][0]==g_wlan_dataInfo.WifiCountry){$("#select_WifiChannel").show(),wlanadvanced_splitChannel(countryArray[n][1]);break}}void 0===g_countryChannel.indoor_only_channel_list&&""==g_countryChannel.indoor_only_channel_list.trim()||(isNaN(g_countryChannel.indoor_only_channel_list)?g_indoorOnlyChannel=g_countryChannel.indoor_only_channel_list.split(","):g_indoorOnlyChannel.push(g_countryChannel.indoor_only_channel_list)),$.browser.msie&&6==$.browser.version?setDataToComponentIE6():(setTimeout((function(){$("#select_WifiChannel").val(g_wlan_dataInfo.WifiChannel),$("#5Gwifi_notes").empty(),$("#5Gwifi_notes_tr").hide();for(var e=0;e<=g_indoorOnlyChannel.length;e++)if(g_indoorOnlyChannel[e]==$("#select_WifiChannel").val()){$("#5Gwifi_notes_tr").show(),$("#5Gwifi_notes").html(wlan_label_5gWifi_indoor);break}$("#select_WifiChannel").val()>=100&&$("#select_WifiChannel").val()<=140&&($("#5Gwifi_notes_tr").show(),$("#5Gwifi_notes").html(wlan_label_5gWifi_check)),$("#select_WifiMode").val(g_wlan_dataInfo.WifiMode)}),1),g_module.multi_ssid_enabled||null!=g_featureSwitch?$("#select_WifiIsolate_between").val(g_ap_isolation):$("#select_WifiIsolate_between").val(g_wlan_dataInfo.WifiIsolate),$("#select_WifiAutooffStatus").val(g_wlan_dataInfo.Wifioffenable),$("#select_WifiAutooffTime").val(g_wlan_dataInfo.Wifiofftime),"0"!=g_wlan_dataInfo.wifibandwidth&&"20"!=g_wlan_dataInfo.wifibandwidth&&"40"!=g_wlan_dataInfo.wifibandwidth?setTimeout((function(){$("#select_wifiBandWidth").val("0")}),3):(g_wlan_dataInfo.wifibandwidth,setTimeout((function(){$("#select_wifiBandWidth").val(g_wlan_dataInfo.wifibandwidth)}),3)),$("input[name='radio_autocountry'][value='"+g_wlan_dataInfo.wifiautocountryswitch+"']").attr("checked",!0),wlanadvanced_ifWifioffenable(g_wlan_dataInfo.Wifioffenable)),g_autoSwitch=$("input[name='radio_autocountry']:checked").val(),$("#select_WifiCountry").removeAttr("disabled"),$("#select_WifiWorkingBand").removeAttr("disabled"),$("#select_WifiMode").removeAttr("disabled"),$("#select_WifiChannel").removeAttr("disabled"),$("#select_WifiAutooffStatus").removeAttr("disabled"),$("#select_wifiBandWidth").removeAttr("disabled"),null!=g_featureSwitch&&WIFI_AUTOCOUNTRY_ON==g_featureSwitch.wifiautocountry_enabled&&("1"==g_autoSwitch?setTimeout((function(){$("#select_WifiCountry").attr("disabled","disabled")}),5):$("#select_WifiCountry").removeAttr("disabled")),g_isChangeWiFiMode&&setTimeout((function(){ifWifioffenable_apply(!0)}),1e3),getStatus(),null!=g_featureSwitch&&"1"==g_featureSwitch.wifi_dfs_enable&&WIFI5G_ON==g_featureSwitch.wifi5g_enabled&&WORKINGBAND_5G==g_currentWorkingBand?($("#autoCountry_turn_on").attr("disabled","disabled"),$("#autoCountry_turn_off").attr("disabled","disabled"),$("#select_WifiCountry").attr("disabled","disabled"),$("#autoCountry_turn_on").attr("checked",!0)):($("#autoCountry_turn_on").removeAttr("disabled"),$("#autoCountry_turn_off").removeAttr("disabled"),null!=$("#autoCountry_turn_off").attr("checked")&&$("#select_WifiCountry").removeAttr("disabled")),null==g_featureSwitch||"1"!=g_featureSwitch.wifi_dfs_enable||255!=G_MonitoringStatus.response.SimStatus&&1!=G_MonitoringStatus.response.SimlockStatus&&2!=G_MonitoringStatus.response.cellroam&&260!=pinstatus_ret.SimState&&261!=pinstatus_ret.SimState?WORKINGBAND_2_4G==g_currentWorkingBand&&($("#select_WifiWorkingBand").removeAttr("disabled"),"901"==G_MonitoringStatus.response.WifiConnectionStatus?$("#select_WifiChannel").attr("disabled","disabled"):$("#select_WifiChannel").removeAttr("disabled"),$("#autoCountry_turn_on").removeAttr("disabled"),$("#autoCountry_turn_off").removeAttr("disabled"),null!=$("#autoCountry_turn_off").attr("checked")&&$("#select_WifiCountry").removeAttr("disabled")):($("#select_WifiWorkingBand").attr("disabled","disabled"),$("#select_WifiChannel").attr("disabled","disabled"),$("#autoCountry_turn_on").attr("disabled","disabled"),$("#autoCountry_turn_off").attr("disabled","disabled"),$("#select_WifiCountry").attr("disabled","disabled"),$("#select_WifiWorkingBand").val("2.4"),$("#select_WifiChannel").append("<option value='0'>"+common_auto+"</option>"),$("#autoCountry_turn_on").attr("checked",!0))}}),{sync:!0}):getAjaxData(e,(function(e){var i=xml2object(e);g_wlan_dataInfo_ex=CreateArray(i.response.ssids.ssid),$(g_wlan_dataInfo_ex).each((function(e){null!=g_featureSwitch?ap_isalation_flag?$("#select_WifiIsolate_band").val(g_ap_isolation):$("#select_WifiIsolate_band").val(0):$("#select_WifiIsolate_band").val(g_wlan_dataInfo_ex[e].WifiIsolationBetween);var i=g_wlan_dataInfo_ex[e].WifiCountry;"a/n"==g_wlan_dataInfo_ex[e].WifiMode&&"a"==g_wlan_dataInfo_ex[e].WifiMode&&"a/n/ac"==g_wlan_dataInfo_ex[e].WifiMode||1!=is_24G_first?"a/n"!=g_wlan_dataInfo_ex[e].WifiMode&&"a"!=g_wlan_dataInfo_ex[e].WifiMode&&"a/n/ac"!=g_wlan_dataInfo_ex[e].WifiMode||1!=is_5G_first||(is_5G_first=!1,wlan_initWifiMode_singleWorkingBand_5g(),null!=g_featureSwitch&&1!=g_featureSwitch.acmode_enable&&$("#select_WifiMode_5g option[value='a/n/ac']").remove(),setTimeout((function(){$("#select_WifiMode_5g").val(g_wlan_dataInfo_ex[e].WifiMode)}),3),wlanadvanced_wifi5G_initChannel_5g(i),setTimeout((function(){$("#select_WifiChannel_5g").val(g_wlan_dataInfo_ex[e].WifiChannel)}),3),"0"!=g_wlan_dataInfo_ex[e].wifibandwidth&&"20"!=g_wlan_dataInfo_ex[e].wifibandwidth&&"40"!=g_wlan_dataInfo_ex[e].wifibandwidth?setTimeout((function(){$("#select_wifiBandWidth_5g").val("0")}),3):(g_wlan_dataInfo_ex[e].wifibandwidth,setTimeout((function(){$("#select_wifiBandWidth_5g").val(g_wlan_dataInfo_ex[e].wifibandwidth)}),3))):(is_24G_first=!1,wlan_initWifiMode_singleWorkingBand_2g(),setTimeout((function(){$("#select_WifiMode_2g").val(g_wlan_dataInfo_ex[e].WifiMode)}),3),wifiCountry_channel_2g(i),setTimeout((function(){$("#select_WifiChannel_2g").val(g_wlan_dataInfo_ex[e].WifiChannel)}),3),"0"!=g_wlan_dataInfo_ex[e].wifibandwidth&&"20"!=g_wlan_dataInfo_ex[e].wifibandwidth&&"40"!=g_wlan_dataInfo_ex[e].wifibandwidth?setTimeout((function(){$("#select_wifiBandWidth_2g").val("0")}),3):(g_wlan_dataInfo_ex[e].wifibandwidth,setTimeout((function(){$("#select_wifiBandWidth_2g").val(g_wlan_dataInfo_ex[e].wifibandwidth)}),3)))})),getStatus_5g()}))}function refresh_5G(){null!=G_MonitoringStatus&&null==$("#select_WifiWorkingBand").attr("disabled")&&(255!=G_MonitoringStatus.response.SimStatus&&1!=G_MonitoringStatus.response.SimlockStatus&&2!=G_MonitoringStatus.response.cellroam&&260!=pinstatus_ret.SimState&&261!=pinstatus_ret.SimState||refresh())}function wlanadvanced_changeChannel(){var e=0,i=$.trim($("#select_WifiCountry").val());for(e=0;e<countryArray.length;e++)if(countryArray[e][0]==i){wlanadvanced_splitChannel(countryArray[e][1]);break}}function ifWifioffenable_apply(e){if(e||isButtonEnable("apply_button"))if(null!=g_featureSwitch&&"0"==g_featureSwitch.wifi_country_enable?($("#autoCountry").remove(),$("#wlan_country").hide()):(null!=g_featureSwitch&&"1"==g_featureSwitch.wifi_country_enable||void 0===g_featureSwitch.wifi_country_enable&&null!=g_featureSwitch&&DOUBLE_CHIP!=g_featureSwitch.isdoublechip)&&($.browser.ipad?g_wlan_dataInfo.WifiCountry=$("#select_WifiCountry_for_Idevice").val():g_wlan_dataInfo.WifiCountry=$("#select_WifiCountry").val()),null!=g_featureSwitch&&DOUBLE_CHIP!=g_featureSwitch.isdoublechip){if(g_wlan_dataInfo.WifiChannel=$("#select_WifiChannel").val(),null!=g_featureSwitch&&WIFI5G_ON==g_featureSwitch.wifi5g_enabled){if($("#select_WifiWorkingBand").children().size()>=1)var i=$("#select_WifiWorkingBand").val();"5"==i?"1"==g_featureSwitch.acmode_enable?g_wlan_dataInfo.WifiMode="a/n/ac":g_wlan_dataInfo.WifiMode="a/n":g_wlan_dataInfo.WifiMode="b/g/n","1"==g_featureSwitch.wifi_dfs_enable&&($("#wlan_country").show(),$("#wlan_channel").show())}else g_wlan_dataInfo.WifiMode="b/g/n";if(g_wlan_dataInfo.Wifioffenable=$("#select_WifiAutooffStatus").val(),g_ap_isolation=$("#select_WifiIsolate_between").val(),g_module.multi_ssid_enabled||null!=g_featureSwitch?g_wlan_dataInfo.WifiIsolationBetween=g_ap_isolation:g_wlan_dataInfo.WifiIsolate=g_ap_isolation,g_wlan_dataInfo.Wifiofftime=$("#select_WifiAutooffTime").val(),g_wlan_dataInfo.wifibandwidth=$("#select_wifiBandWidth").val(),g_wlan_dataInfo.wifiautocountryswitch=$("[name='radio_autocountry']:checked").val(),g_module.multi_ssid_enabled||null!=g_featureSwitch)if($(wlan_basicData).each((function(e){wlan_basicData[e].WifiIsolate=g_ap_isolation,wlan_basicData[e].WifiSsid=wifiSsidResolveCannotParseChar(wlan_basicData[e].WifiSsid)})),!e){var a=object2xml("request",{Ssids:{Ssid:wlan_basicData},WifiRestart:0});saveAjaxData("api/wlan/multi-basic-settings",a,(function(e){var i=xml2object(e);isAjaxReturnOK(i)?button_enable("apply_button","0"):(wlanadvanced_initPage(),button_enable("apply_button","0"),i.error.code==ERROR_SYSTEM_BUSY?showInfoDialog(common_system_busy):showInfoDialog(common_fail))}),{sync:!0})}var n="api/wlan/basic-settings";(g_module.multi_ssid_enabled||null!=g_featureSwitch)&&(n="api/wlan/multi-security-settings"),g_wlan_dataInfo.WifiRestart=1;var t=object2xml("request",g_wlan_dataInfo);button_enable("apply_button","0"),g_ap_isolation=0,saveAjaxData(n,t,(function(i){var a=xml2object(i);isAjaxReturnOK(a)?e?g_isChangeWiFiMode=!1:(wlanadvanced_initPage(),button_enable("apply_button","0"),showInfoDialog(common_success)):(e?g_isChangeWiFiMode=!1:(wlanadvanced_initPage(),button_enable("apply_button","0")),a.error.code==ERROR_SYSTEM_BUSY?e?g_isChangeWiFiMode=!1:showInfoDialog(common_system_busy):e?g_isChangeWiFiMode=!1:showInfoDialog(common_fail))}))}else{var o=$("#select_WifiIsolate_band").val(),l=$("#select_WifiChannel_2g").val(),_=$("#select_wifiBandWidth_2g").val(),d="";d="1"==g_featureSwitch.acmode_enable?"a/n/ac":"a/n";var s=$("#select_WifiChannel_5g").val(),f=$("#select_wifiBandWidth_5g").val();if($(g_wlan_dataInfo_ex).each((function(e){"a/n"!=g_wlan_dataInfo_ex[e].WifiMode&&"a/n/ac"!=g_wlan_dataInfo_ex[e].WifiMode?(g_wlan_dataInfo_ex[e].WifiIsolationBetween=o,g_wlan_dataInfo_ex[e].WifiMode="b/g/n",g_wlan_dataInfo_ex[e].WifiChannel=l,g_wlan_dataInfo_ex[e].wifibandwidth=_):(g_wlan_dataInfo_ex[e].WifiIsolationBetween=o,g_wlan_dataInfo_ex[e].WifiMode=d,g_wlan_dataInfo_ex[e].WifiChannel=s,g_wlan_dataInfo_ex[e].wifibandwidth=f)})),g_module.multi_ssid_enabled||null!=g_featureSwitch){$(wlan_basicData).each((function(e){wlan_basicData[e].WifiIsolate=g_ap_isolation,wlan_basicData[e].WifiSsid=wifiSsidResolveCannotParseChar(wlan_basicData[e].WifiSsid)}));var r=object2xml("request",{Ssids:{Ssid:wlan_basicData},WifiRestart:0});saveAjaxData("api/wlan/multi-basic-settings",r,(function(e){var i=xml2object(e);isAjaxReturnOK(i)?button_enable("apply_button","0"):(wlanadvanced_initPage(),button_enable("apply_button","0"),void 0!==i.error&&i.error.code==ERROR_SYSTEM_BUSY?showInfoDialog(common_system_busy):showInfoDialog(common_fail))}),{sync:!0});var c={ssids:{ssid:g_wlan_dataInfo_ex},WifiRestart:1};button_enable("apply_button","0");var u=object2xml("request",c);saveAjaxData("api/wlan/multi-security-settings-ex",u,(function(e){var i=xml2object(e);isAjaxReturnOK(i)?(wlanadvanced_initPage(),button_enable("apply_button","0"),showInfoDialog(common_success)):(wlanadvanced_initPage(),button_enable("apply_button","1"),void 0!==i.error&&i.error.code==ERROR_SYSTEM_BUSY?showInfoDialog(common_system_busy):showInfoDialog(common_fail))}),{sync:!0})}}}function setDisplay(){DOUBLE_CHIP!=g_featureSwitch.isdoublechip&&(g_feature.battery_enabled?($("#wifiAutooffStatus").show(),$("#wifiAutooffTime").show()):($("#wifiAutooffStatus").hide(),$("#wifiAutooffTime").hide()))}function getStatus(){getGMonitoringStatus(),"response"==G_MonitoringStatus.type&&(null==g_featureSwitch||"1"!=g_featureSwitch.wifi_dfs_enable||255!=G_MonitoringStatus.response.SimStatus&&1!=G_MonitoringStatus.response.SimlockStatus&&2!=G_MonitoringStatus.response.cellroam&&260!=pinstatus_ret.SimState&&261!=pinstatus_ret.SimState?"901"==G_MonitoringStatus.response.WifiConnectionStatus?($("#select_WifiCountry").attr("disabled","disabled"),$("#select_WifiChannel").attr("disabled","disabled"),$("#select_WifiMode").removeAttr("disabled"),$("#select_WifiIsolate_between").removeAttr("disabled"),$("#select_WifiAutooffStatus").removeAttr("disabled"),WORKINGBAND_2_4G==g_currentWorkingBand&&($("#select_WifiWorkingBand").removeAttr("disabled"),$("#autoCountry_turn_on").removeAttr("disabled"),$("#autoCountry_turn_off").removeAttr("disabled"),null!=$("#autoCountry_turn_off").attr("checked")&&$("#select_WifiCountry").removeAttr("disabled"))):(null!=g_featureSwitch&&WIFI_AUTOCOUNTRY_ON==g_featureSwitch.wifiautocountry_enabled&&"1"==$("[name='radio_autocountry']:checked").val()?$("#select_WifiCountry").attr("disabled","disabled"):"1"!=g_featureSwitch.wifi_dfs_enable&&$("#select_WifiCountry").removeAttr("disabled"),$("#select_WifiChannel").removeAttr("disabled"),$("#select_WifiMode").removeAttr("disabled"),$("#select_WifiIsolate_between").removeAttr("disabled"),$("#select_WifiAutooffStatus").removeAttr("disabled"),WORKINGBAND_2_4G==g_currentWorkingBand&&($("#select_WifiWorkingBand").removeAttr("disabled"),$("#autoCountry_turn_on").removeAttr("disabled"),$("#autoCountry_turn_off").removeAttr("disabled"))):($("#select_WifiWorkingBand").attr("disabled","disabled"),$("#select_WifiChannel").attr("disabled","disabled"),$("#autoCountry_turn_on").attr("disabled","disabled"),$("#autoCountry_turn_off").attr("disabled","disabled"),$("#select_WifiCountry").attr("disabled","disabled"),$("#select_WifiWorkingBand").val("2.4"),$("#select_WifiChannel").append("<option value='0'>"+common_auto+"</option>"),$("#autoCountry_turn_on").attr("checked",!0),$("#select_WifiMode").removeAttr("disabled"),$("#select_WifiIsolate_between").removeAttr("disabled"),$("#select_WifiAutooffStatus").removeAttr("disabled"))),null!=g_featureSwitch||g_module.multi_ssid_enabled?0==wlan_basicData[0].WifiEnable&&($("select:not(#lang)").attr("disabled","disabled"),$("input:not(#lang)").attr("disabled","disabled")):0==g_wlan_dataInfo_ex[0].WifiEnable&&($("select:not(#lang)").attr("disabled","disabled"),$("input:not(#lang)").attr("disabled","disabled"))}function getStatus_5g(){getGMonitoringStatus(),"response"==G_MonitoringStatus.type&&("901"==G_MonitoringStatus.response.WifiConnectionStatus?($("#select_WifiChannel_2g").attr("disabled","disabled"),$("#select_WifiMode_2g").removeAttr("disabled"),$("#select_WifiChannel_5g").attr("disabled","disabled"),$("#select_WifiMode_5g").removeAttr("disabled")):($("#select_WifiChannel_2g").removeAttr("disabled"),$("#select_WifiMode_2g").removeAttr("disabled"),$("#select_WifiChannel_5g").removeAttr("disabled"),$("#select_WifiMode_5g").removeAttr("disabled"))),"1"==g_wifiFeatureSwitch.wifi24g_switch_enable?0==wlan_basicData[0].WifiEnable&&1==wlan_basicData[ssid5g].WifiEnable?($("#select_WifiChannel_2g").attr("disabled","disabled"),$("#select_wifiBandWidth_2g").attr("disabled","disabled")):1==wlan_basicData[0].WifiEnable&&0==wlan_basicData[ssid5g].WifiEnable?($("#select_WifiChannel_5g").attr("disabled","disabled"),$("#select_wifiBandWidth_5g").attr("disabled","disabled")):(0==wlan_basicData[0].WifiEnable&&0==wlan_basicData[ssid5g].WifiEnable||0==wlan_basicData[0].wifitotalswitch)&&($("select:not(#lang)").attr("disabled","disabled"),$("input:not(#lang)").attr("disabled","disabled")):0==wlan_basicData[0].WifiEnable?($("select:not(#lang)").attr("disabled","disabled"),$("input:not(#lang)").attr("disabled","disabled")):1==wlan_basicData[0].WifiEnable&&0==wlan_basicData[ssid5g].WifiEnable&&($("#select_WifiChannel_5g").attr("disabled","disabled"),$("#select_wifiBandWidth_5g").attr("disabled","disabled"))}function main_executeBeforeDocumentReady(){getConfigData("config/wifi/configure.xml",(function(e){g_WifiFeature=_xml2feature(e)}),{sync:!0})}function wifiadvancedisable(){null!=g_wifiFeatureSwitch&&g_featureSwitch.isdoublechip==DOUBLE_CHIP?"1"==g_wifiFeatureSwitch.wifi24g_switch_enable?0==wlan_basicData[0].WifiEnable&&1==wlan_basicData[ssid5g].WifiEnable?($("#select_WifiChannel_2g").attr("disabled","disabled"),$("#select_wifiBandWidth_2g").attr("disabled","disabled")):1==wlan_basicData[0].WifiEnable&&0==wlan_basicData[ssid5g].WifiEnable?($("#select_WifiChannel_5g").attr("disabled","disabled"),$("#select_wifiBandWidth_5g").attr("disabled","disabled")):(0==wlan_basicData[0].WifiEnable&&0==wlan_basicData[ssid5g].WifiEnable||0==wlan_basicData[0].wifitotalswitch)&&(showInfoDialog(IDS_wlan_off),$("select:not(#lang)").attr("disabled","disabled"),$("input:not(#lang)").attr("disabled","disabled")):0==wlan_basicData[0].WifiEnable?(showInfoDialog(IDS_wlan_off),$("select:not(#lang)").attr("disabled","disabled"),$("input:not(#lang)").attr("disabled","disabled")):1==wlan_basicData[0].WifiEnable&&0==wlan_basicData[ssid5g].WifiEnable&&($("#select_WifiChannel_5g").attr("disabled","disabled"),$("#select_wifiBandWidth_5g").attr("disabled","disabled")):null!=g_featureSwitch||g_module.multi_ssid_enabled?0==wlan_basicData[0].WifiEnable&&(showInfoDialog(IDS_wlan_off),$("select:not(#lang)").attr("disabled","disabled"),$("input:not(#lang)").attr("disabled","disabled")):0==g_wlan_dataInfo_ex[0].WifiEnable&&(showInfoDialog(IDS_wlan_off),$("select:not(#lang)").attr("disabled","disabled"),$("input:not(#lang)").attr("disabled","disabled"))}main_executeBeforeDocumentReady(),$(document).ready((function(){if(1==g_WifiFeature.wifiBandWidthenable?$("#wifiBandWidth").show():$("#wifiBandWidth").hide(),getAjaxData("api/wlan/wifi-feature-switch",(function(e){var i=xml2object(e);"response"==i.type&&(g_featureSwitch=i.response)}),{sync:!0}),getAjaxData("api/wlan/multi-switch-settings",(function(e){var i=xml2object(e);"response"==i.type&&(g_wlan_doubleSsidStatus=i.response)}),{sync:!0}),getAjaxData("api/pin/status",(function(e){var i=xml2object(e);"response"==i.type&&(pinstatus_ret=i.response)}),{sync:!0}),getAjaxData("api/device/information",(function(e){var i=xml2object(e);"response"==i.type&&(i.response.Classify,DOUBLE_CHIP!=g_featureSwitch.isdoublechip?($("#select_wifiBandWidth").append('<option value = "0">'+common_auto+" "+common_default+"<\/script></option>"),$("#select_wifiBandWidth").append('<option value = "20">20MHz<\/script></option>'),$("#select_wifiBandWidth").append('<option value = "40">40MHz<\/script></option>')):($("#select_wifiBandWidth_2g").append('<option value = "0">'+common_auto+" "+common_default+"<\/script></option>"),$("#select_wifiBandWidth_2g").append('<option value = "20">20MHz<\/script></option>'),$("#select_wifiBandWidth_2g").append('<option value = "40">40MHz<\/script></option>'),$("#select_wifiBandWidth_5g").append('<option value = "0">'+common_auto+" "+common_default+"<\/script></option>"),$("#select_wifiBandWidth_5g").append('<option value = "20">20MHz<\/script></option>'),$("#select_wifiBandWidth_5g").append('<option value = "40">40MHz<\/script></option>')))}),{sync:!0}),null!=g_featureSwitch&&g_featureSwitch.isdoublechip!=DOUBLE_CHIP?($("#advanced_2g").hide(),$("#advanced_5g").hide(),$("#wlan_list_ap").hide(),$("#wlan_singlechip").show(),$("#work_band_2g").hide(),$("#work_band_5g").hide(),1==g_WifiFeature.wifiBandWidthenable?$("#wifiBandWidth").show():$("#wifiBandWidth").hide()):($("#advanced_2g").show(),$("#advanced_5g").show(),$("#wlan_singlechip").hide(),1==g_WifiFeature.wifiBandWidthenable?($("#wifiBandWidth_2g").show(),$("#wifiBandWidth_5g").show()):($("#wifiBandWidth_2g").hide(),$("#wifiBandWidth_5g").hide())),$("#main_content_change").hide(),wlanadvanced_initPage(),setTimeout((function(){$("#main_content_change").show()}),1),1==g_module.wifioffload_enable&&(null!=g_featureSwitch&&g_featureSwitch.isdoublechip==DOUBLE_CHIP?addStatusListener("getStatus_5g()"):addStatusListener("getStatus()")),button_enable("apply_button","0"),$("input").bind("change input paste cut keydown",(function(e){MACRO_KEYCODE!=e.keyCode&&button_enable("apply_button","1")})),$("#select_WifiCountry").change((function(){button_enable("apply_button","1");var e=$.trim($("#select_WifiCountry").val());null!=g_featureSwitch&&WIFI5G_ON==g_featureSwitch.wifi5g_enabled?($("#select_WifiWorkingBand").children().size()>=1&&(g_currentWorkingBand=$("#select_WifiWorkingBand").val()),g_currentWifiMode=$("#select_WifiMode").val(),$("#select_WifiWorkingBand").empty(),wlanadvanced_wifi5G_initChannel(e),$("#select_WifiChannel").val(WLAN_CHANNEL_AUTO)):wlanadvanced_changeChannel(),$("#select_WifiWorkingBand").children().size()>=1&&(g_currentWorkingBand=$("#select_WifiWorkingBand").val()),g_currentWifiMode=$("#select_WifiMode").val()})),$("#select_WifiIsolate_band,#select_WifiMode_2g, #select_WifiMode_5g, #select_WifiChannel_2g, #select_WifiChannel_5g, #select_wifiBandWidth_2g, #select_wifiBandWidth_5g, #select_WifiChannel, #select_WifiMode, #select_WifiIsolate_between, #select_WifiAutooffTime, #select_WifiRate,#select_wifiBandWidth, #select_WifiWorkingBand").live("change",(function(){button_enable("apply_button","1")})),$("#select_WifiAutooffStatus").change((function(){button_enable("apply_button","1"),wlanadvanced_ifWifioffenable(this.value)})),$("#select_WifiWorkingBand").change((function(){var e=$("#select_WifiCountry").val();if($("#select_WifiWorkingBand").children().size()>=1&&(g_currentWorkingBand=$.trim($("#select_WifiWorkingBand").val())),0==g_featureSwitch.doubleap5g_enable&&2==g_featureSwitch.maxapnum&&1==g_wlan_doubleSsidStatus.multissidstatus&&WORKINGBAND_5G==g_currentWorkingBand&&0==g_featureSwitch.isdoublechip)return showInfoDialog(IDS_doubleSsid_5G),void $("#select_WifiWorkingBand").val(g_temp_select_WifiWorkingBand);null!=g_featureSwitch&&"1"==g_featureSwitch.wifi_dfs_enable?WORKINGBAND_5G==g_currentWorkingBand?(wlanadvanced_wifi5G_initChannel(e),wlan_initWifiMode(WORKINGBAND_5G),setTimeout((function(){$("#select_WifiMode").val(g_wlan_dataInfo.WifiMode)}),2),$("#autoCountry_turn_on").attr("disabled","disabled"),$("#autoCountry_turn_off").attr("disabled","disabled"),$("#select_WifiCountry").attr("disabled","disabled"),$("#autoCountry_turn_on").attr("checked",!0),$("#wlan_country").hide(),$("#wlan_channel").hide()):(wlan_initWifiMode(WORKINGBAND_2_4G),setTimeout((function(){$("#select_WifiMode").val("b/g/n")}),2),wifiCountry_channel(e),$("#autoCountry_turn_on").removeAttr("disabled"),$("#autoCountry_turn_off").removeAttr("disabled"),null!=$("#autoCountry_turn_off").attr("checked")&&$("#select_WifiCountry").removeAttr("disabled"),$("#autoCountry_turn_off").click((function(){$("#select_WifiCountry").removeAttr("disabled")})),$("#wlan_country").show(),$("#wlan_channel").show()):WORKINGBAND_5G==g_currentWorkingBand?(wlanadvanced_wifi5G_initChannel(e),wlan_initWifiMode(WORKINGBAND_5G),setTimeout((function(){$("#select_WifiMode").val(g_wlan_dataInfo.WifiMode)}),2)):(wlan_initWifiMode(WORKINGBAND_2_4G),setTimeout((function(){$("#select_WifiMode").val("b/g/n")}),2),wifiCountry_channel(e))})),$("#select_WifiChannel").change((function(){$("#5Gwifi_notes").empty(),$("#5Gwifi_notes_tr").hide();for(var e=0;e<=g_indoorOnlyChannel.length;e++)if(g_indoorOnlyChannel[e]==$("#select_WifiChannel").val())return $("#5Gwifi_notes_tr").show(),void $("#5Gwifi_notes").html(wlan_label_5gWifi_indoor);$("#select_WifiChannel").val()>=100&&$("#select_WifiChannel").val()<=140&&($("#5Gwifi_notes_tr").show(),$("#5Gwifi_notes").html(wlan_label_5gWifi_check))})),"1"!=g_featureSwitch.wifi_dfs_enable||"1"==g_featureSwitch.wifi_dfs_enable&&WORKINGBAND_2_4G==g_currentWorkingBand){$("#select_WifiCountry").val();$("#select_WifiWorkingBand").children().size()>=1&&(g_currentWorkingBand=$.trim($("#select_WifiWorkingBand").val())),$("#autoCountry_turn_on").click((function(){$("#autoCountry_turn_off").removeAttr("checked"),$("#select_WifiCountry").attr("disabled","disabled")})),$("#autoCountry_turn_off").click((function(){$("#autoCountry_turn_on").removeAttr("checked"),"response"==G_MonitoringStatus.type&&G_MonitoringStatus.response.WifiConnectionStatus==WIFI_CONNECTED?$("#select_WifiCountry").attr("disabled","disabled"):$("#select_WifiCountry").removeAttr("disabled")}))}setDisplay(),null!=g_featureSwitch&&(WIFI_AUTOCOUNTRY_ON==g_featureSwitch.wifiautocountry_enabled?$("#autoCountry").show():$("#autoCountry").hide(),WIFI5G_ON==g_featureSwitch.wifi5g_enabled?$("#wifi_workingBand").show():$("#wifi_workingBand").hide()),"0"==g_WifiFeature.wifiap_isolation_enable&&($("#wifi_APIsolate").hide(),$("#wlan_list_ap").hide()),$("#select_WifiWorkingBand").children().size()>=1&&(g_temp_select_WifiWorkingBand=$.trim($("#select_WifiWorkingBand").val())),null!=g_featureSwitch&&"1"==g_featureSwitch.wifi_dfs_enable&&setInterval((function(){refresh_5G()}),1e4),wifiadvancedisable()}));
