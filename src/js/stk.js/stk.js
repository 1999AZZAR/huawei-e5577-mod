var g_STK_TIMEOUT=3e4,g_STK_AUTOBACKMAINTIMEOUT=5e3,g_stk_title="",g_stk_pageIndex=1,g_stk_pageIndexBak=1,g_stk_curTotalPage=0,g_stk_curMenuTotal=0,g_stk_curMenuLevel=255,g_stk_cmdTypeSDKReturnMenu=0,g_stk_cmdIndexSDKReturnMenu=0,g_stk_cmdTypeSDKReturnDialog=0,g_stk_cmdIndexSDKReturnDialog=0,g_stk_durationTime=3,g_stk_clearTime=0,g_stk_clearGetStatusTime=0,g_stk_getInputRspFormat="",g_stk_getInputMin=1,g_stk_getInputMax=1,g_stk_getInputPackMode="0",g_stk_getInkeyMin=1,g_stk_getInkeyMax=255,g_stk_getInkeyRspFormat="",g_stk_getInkeyPackMode="0",g_stk_cmdType=0,g_stk_cmdIndex=0,g_stk_result=1,g_stk_dataType=0,g_stk_data=0,g_stk_menuLevel=0,g_stk_pageIndexBack=1,g_stk_callDialogFlag=!1,g_stk_jumpPageFlag=!1,g_stk_showSightlessDialogFlag=!1,RspFormatGSM7MaxLen=289,RspFormatNumMaxLen=253,RspFormatUCS2MaxLen=126,RspFormatYesNoMaxLen=289,g_stk_menuListArray=[],g_stk_back_cmdType=[],g_stk_back_cmdIndex=[],g_stk_cmdTypeArray=[],g_stk_cmdIndexArray=[],g_stk_resultArray=[],g_stk_dataTypeArray=[],g_stk_dataArray=[],g_stk_menuLevelArray=[],g_stk_pageIndexArray=[],g_stk_MenuInfArray=[],g_stk_feature={page_size:0},g_stk_main_request={CmdType:0,CmdIndex:0,Result:15,DataType:0,Data:0,MenuLevel:g_stk_curMenuLevel,PageIndex:g_stk_pageIndex,ReadCount:g_stk_feature.page_size,IsJumpPage:0},g_stk_sub_request={CmdType:0,CmdIndex:0,Result:0,DataType:0,Data:0,MenuLevel:g_stk_curMenuLevel,PageIndex:g_stk_pageIndex,ReadCount:g_stk_feature.page_size,IsJumpPage:0},g_stk_cmd_type={StkTypeSetupMenu:0,StkTypeDisplayText:1,StkTypeGetInkey:2,StkTypeGetInput:3,StkTypeSetupCall:4,StkTypePlayTone:5,StkTypeSelItem:6,StkTypeRefresh:7,StkTypeSendSs:8,StkTypeSendSms:9,StkTypeSendUssd:10,StkTypeLaunchBrowser:11,StkTypeIdleModeText:12,StkTypeEndSession:99},g_stk_terminal_response={StkTerminalResponseEndSession:0,StkTerminalResponseOK:1,StkTerminalResponseHelp:2,StkTerminalResponseBack:3,StkTerminalResponseNotSupport:4,StkTerminalResponseNoMeaning:15},g_stk_data_type={StkDataTypeNumber:0,StkDataTypeString:1,StkDataTypeDataNoEffect:15},g_stk_cmd_timeout={CmdIsNotTimeout:0,CmdIsTimeout:1},g_stk_getInkey_rspFormat={GetInkeyRspFormatGSM7:0,GetInkeyRspFormatYesNo:1,GetInkeyRspFormatNum:2,GetInkeyRspFormatUCS2:3},g_stk_getInput_rspFormat={GetInputRspFormatGSM7:0,GetInputRspFormatNum:2,GetInputRspFormatUCS2:3};function stk_initPage(){stk_clearPage(),stk_showSightlessDialog(),stk_dataInit(),stk_getMain("enter_main")}function stk_getStkStatus(){stk_queryStatus(),g_stk_clearGetStatusTime=setTimeout((function(){stk_getStkStatus()}),g_STK_AUTOBACKMAINTIMEOUT)}function stk_dataInit(){var e=0,t=0;for(g_stk_title="",g_stk_pageIndex=1,g_stk_pageIndexBak=1,g_stk_curTotalPage=0,g_stk_curMenuTotal=0,g_stk_curMenuLevel=255,g_stk_cmdTypeSDKReturnMenu=0,g_stk_cmdIndexSDKReturnMenu=0,g_stk_cmdTypeSDKReturnDialog=0,g_stk_cmdIndexSDKReturnDialog=0,g_stk_durationTime=3,g_stk_clearTime=0,g_stk_getInputRspFormat="",g_stk_getInputMin=1,g_stk_getInputMax=1,g_stk_getInputPackMode="0",g_stk_getInkeyMin=1,g_stk_getInkeyMax=255,g_stk_getInkeyRspFormat="",g_stk_getInkeyPackMode="0",g_stk_cmdType=0,g_stk_cmdIndex=0,g_stk_result=1,g_stk_dataType=0,g_stk_data=0,g_stk_menuLevel=0,g_stk_pageIndexBack=1,RspFormatGSM7MaxLen=289,RspFormatNumMaxLen=253,RspFormatUCS2MaxLen=126,RspFormatYesNoMaxLen=289,g_stk_callDialogFlag=!1,g_stk_jumpPageFlag=!1,g_stk_showSightlessDialogFlag=!1,g_stk_menuListArray=[],g_stk_back_cmdType=[],g_stk_back_cmdIndex=[],g_stk_cmdTypeArray=[],g_stk_cmdIndexArray=[],g_stk_resultArray=[],g_stk_dataTypeArray=[],g_stk_dataArray=[],g_stk_menuLevelArray=[],g_stk_pageIndexArray=[],g_stk_MenuInfArray=[],e=0;e<255;e++)for(g_stk_MenuInfArray[e]=[],t=0;t<255;t++)g_stk_MenuInfArray[e].push("undefined");g_stk_main_request.CmdType=0,g_stk_main_request.CmdIndex=0,g_stk_main_request.Result=15,g_stk_main_request.DataType=0,g_stk_main_request.Data=0,g_stk_main_request.MenuLevel=g_stk_curMenuLevel,g_stk_main_request.PageIndex=g_stk_pageIndex,g_stk_main_request.ReadCount=g_stk_feature.page_size,g_stk_main_request.IsJumpPage=0,g_stk_sub_request.CmdType=0,g_stk_sub_request.CmdIndex=0,g_stk_sub_request.Result=0,g_stk_sub_request.DataType=0,g_stk_sub_request.Data=0,g_stk_sub_request.MenuLevel=g_stk_curMenuLevel,g_stk_sub_request.PageIndex=g_stk_pageIndex,g_stk_sub_request.ReadCount=g_stk_feature.page_size,g_stk_sub_request.IsJumpPage=0}function stk_clearPage(){$("#stk_head_inf").hide(),$("#list_stk_menu").empty(),$(".stk_pagination span").hide(),$("#stk_back_page").hide(),$(".status_title").hide(),$("#stk_unsupported").empty()}function stk_dataPackage(e,t,_,s,a,n,g){switch(e){case"back_main":case"enter_main":case"others_main":g_stk_main_request.CmdType=t,g_stk_main_request.CmdIndex=_,g_stk_main_request.Result=s,g_stk_main_request.DataType=a,g_stk_main_request.Data=n,g_stk_main_request.MenuLevel=g,g_stk_main_request.PageIndex=g_stk_pageIndex,g_stk_main_request.ReadCount=g_stk_feature.page_size,g_stk_main_request.IsJumpPage=0;break;case"jump_page_main":g_stk_main_request.CmdType=t,g_stk_main_request.CmdIndex=_,g_stk_main_request.Result=s,g_stk_main_request.DataType=a,g_stk_main_request.Data=n,g_stk_main_request.MenuLevel=g,g_stk_main_request.PageIndex=g_stk_pageIndex,g_stk_main_request.ReadCount=g_stk_feature.page_size,g_stk_main_request.IsJumpPage=1;break;case"back_sub":case"enter_sub":case"others_sub":g_stk_sub_request.CmdType=t,g_stk_sub_request.CmdIndex=_,g_stk_sub_request.Result=s,g_stk_sub_request.DataType=a,g_stk_sub_request.Data=n,g_stk_sub_request.MenuLevel=g,g_stk_sub_request.PageIndex=g_stk_pageIndex,g_stk_sub_request.ReadCount=g_stk_feature.page_size,g_stk_sub_request.IsJumpPage=0;break;case"jump_page_sub":g_stk_sub_request.CmdType=t,g_stk_sub_request.CmdIndex=_,g_stk_sub_request.Result=s,g_stk_sub_request.DataType=a,g_stk_sub_request.Data=n,g_stk_sub_request.MenuLevel=g,g_stk_sub_request.PageIndex=g_stk_pageIndex,g_stk_sub_request.ReadCount=g_stk_feature.page_size,g_stk_sub_request.IsJumpPage=1}}function stk_initBtnClick(){$("#pop_OK").live("click",(function(){if(isButtonEnable("pop_OK")){var e=g_stk_cmdTypeSDKReturnDialog,t=g_stk_cmdIndexSDKReturnDialog,_=g_stk_terminal_response.StkTerminalResponseOK,s=g_stk_data_type.StkDataTypeDataNoEffect,a=0,n=g_stk_curMenuLevel,g="",k="",r=/^[+*#0123456789][+*#0123456789]*$/;if(g_stk_cmd_type.StkTypeGetInkey==parseInt(e,10)){if(k=$("#stk_get_inkey_text").val(),g_stk_getInkeyMax<k.length)return 0==g_main_displayingPromptStack.length&&g_main_displayingPromptStack.push("pop_OK"),$("#stk_get_inkey_text").focus().select(),clearAllErrorLabel(),void showErrorUnderTextbox("stk_get_inkey_text",IDS_sms_hint_content_too_long);if(g_stk_getInkey_rspFormat.GetInkeyRspFormatNum!=g_stk_getInkeyRspFormat)s=g_stk_data_type.StkDataTypeString,a=g_stk_getInkeyRspFormat+g_stk_getInkeyPackMode+k,a=resolveXMLEntityReference(a);else{if(!k.match(r))return 0==g_main_displayingPromptStack.length&&g_main_displayingPromptStack.push("pop_OK"),$("#stk_get_inkey_text").focus().select(),clearAllErrorLabel(),void showErrorUnderTextbox("stk_get_inkey_text",stk_input_format_invalid);s=g_stk_data_type.StkDataTypeString,a=g_stk_getInkeyRspFormat+g_stk_getInkeyPackMode+k,a=resolveXMLEntityReference(a)}}else if(g_stk_cmd_type.StkTypeGetInput==parseInt(e,10)){if(g=$("#stk_get_input_text").val(),g_stk_getInputMax<g.length)return 0==g_main_displayingPromptStack.length&&g_main_displayingPromptStack.push("pop_OK"),$("#stk_get_input_text").focus().select(),clearAllErrorLabel(),void showErrorUnderTextbox("stk_get_input_text",IDS_sms_hint_content_too_long);if(g_stk_getInput_rspFormat.GetInputRspFormatNum!=g_stk_getInputRspFormat)s=g_stk_data_type.StkDataTypeString,a=g_stk_getInputRspFormat+g_stk_getInputPackMode+g,a=resolveXMLEntityReference(a);else{if(!g.match(r))return 0==g_main_displayingPromptStack.length&&g_main_displayingPromptStack.push("pop_OK"),$("#stk_get_input_text").focus().select(),clearAllErrorLabel(),void showErrorUnderTextbox("stk_get_input_text",stk_input_format_invalid);s=g_stk_data_type.StkDataTypeString,a=g_stk_getInputRspFormat+g_stk_getInputPackMode+g,a=resolveXMLEntityReference(a)}}else s=g_stk_data_type.StkDataTypeNumber,a=0;clearDialog(),clearTimeout(g_stk_clearTime),stk_showSightlessDialog(),g_stk_callDialogFlag=!1,255==n?(stk_dataPackage("others_main",e,t,_,s,a,n),stk_getMain("others_main")):(stk_dataPackage("others_sub",e,t,_,s,a,n),stk_getSub("others_sub"))}else 0==g_main_displayingPromptStack.length&&g_main_displayingPromptStack.push("pop_OK")})),$("#pop_Cancel").live("click",(function(){var e=g_stk_cmdTypeSDKReturnDialog,t=g_stk_cmdIndexSDKReturnDialog,_=g_stk_terminal_response.StkTerminalResponseEndSession,s=g_stk_data_type.StkDataTypeNumber,a=g_stk_curMenuLevel;clearDialog(),clearTimeout(g_stk_clearTime),stk_showSightlessDialog(),g_stk_callDialogFlag=!1,255==a?(stk_dataPackage("others_main",e,t,_,s,0,a),stk_getMain("others_main")):(stk_dataPackage("others_sub",e,t,_,s,0,a),stk_getSub("others_sub"))})),$(".dialog_close_btn").live("click",(function(){if(0!=g_stk_callDialogFlag){g_stk_callDialogFlag=!1;var e=g_stk_cmdTypeSDKReturnDialog,t=g_stk_cmdIndexSDKReturnDialog,_=g_stk_terminal_response.StkTerminalResponseEndSession,s=g_stk_data_type.StkDataTypeNumber,a=g_stk_curMenuLevel;clearTimeout(g_stk_clearTime),stk_showSightlessDialog(),255==a?(stk_dataPackage("others_main",e,t,_,s,0,a),stk_getMain("others_main")):(stk_dataPackage("others_sub",e,t,_,s,0,a),stk_getSub("others_sub"))}})),$("#list_stk_menu a").live("click",(function(){if(1!=g_stk_showSightlessDialogFlag){button_enable("stk_back_page","0"),clearTimeout(g_stk_clearTime);var e=g_stk_cmdTypeSDKReturnMenu,t=g_stk_cmdIndexSDKReturnMenu,_=g_stk_terminal_response.StkTerminalResponseOK,s=g_stk_data_type.StkDataTypeNumber,a=$(this).attr("value"),n=g_stk_curMenuLevel;g_stk_cmdType=e,g_stk_cmdIndex=t,g_stk_result=_,g_stk_dataType=s,g_stk_data=a,g_stk_menuLevel=n,g_stk_pageIndexBack=g_stk_pageIndex,g_stk_pageIndexBak=g_stk_pageIndex,g_stk_pageIndex=1,stk_showSightlessDialog(),stk_dataPackage("enter_sub",e,t,_,s,a,n),stk_getSub("enter_sub")}})),$("#stk_back_page").live("click",(function(){if(!(0>=g_stk_curMenuLevel)){clearTimeout(g_stk_clearTime);var e=g_stk_back_cmdType.pop(),t=g_stk_back_cmdIndex.pop(),_=g_stk_terminal_response.StkTerminalResponseBack,s=g_stk_data_type.StkDataTypeNumber,a=g_stk_curMenuLevel;g_stk_pageIndexBak=g_stk_pageIndex,g_stk_pageIndex=g_stk_pageIndexArray.pop(),g_stk_back_cmdType.push(e),g_stk_back_cmdIndex.push(t),g_stk_pageIndexArray.push(g_stk_pageIndex),stk_showSightlessDialog(),button_enable("stk_back_page","0"),1==a?(stk_dataPackage("back_main",e,t,_,s,0,a),stk_getMain("back_main")):(stk_dataPackage("back_sub",e,t,_,s,0,a),stk_getSub("back_sub"))}}))}function stk_getMain(e){var t,_="";t=object2xml("request",g_stk_main_request),saveAjaxData("api/stk/stk-get-main",t,(function(t){var s=xml2object(t);if("response"==s.type)switch(_=parseInt(s.response.CmdType,10)){case g_stk_cmd_type.StkTypeSetupMenu:case g_stk_cmd_type.StkTypeDisplayText:case g_stk_cmd_type.StkTypeGetInkey:case g_stk_cmd_type.StkTypeGetInput:case g_stk_cmd_type.StkTypeSelItem:case g_stk_cmd_type.StkTypeLaunchBrowser:case g_stk_cmd_type.StkTypeRefresh:case g_stk_cmd_type.StkTypeEndSession:stk_operateByCmdType(e,_,s)}else g_stk_pageIndex=g_stk_pageIndexBak,stk_clearSightlessDialog(),button_enable("stk_back_page","1"),showInfoDialog(common_failed)}),{timeout:g_STK_TIMEOUT,errorCB:function(){g_stk_pageIndex=g_stk_pageIndexBak,stk_clearSightlessDialog(),button_enable("stk_back_page","1"),showInfoDialog(common_failed)}})}function stk_getSub(e){var t,_="";t=object2xml("request",g_stk_sub_request),saveAjaxData("api/stk/stk-get-sub",t,(function(t){var s=xml2object(t);if("response"==s.type)switch(_=parseInt(s.response.CmdType,10)){case g_stk_cmd_type.StkTypeSetupMenu:case g_stk_cmd_type.StkTypeDisplayText:case g_stk_cmd_type.StkTypeGetInkey:case g_stk_cmd_type.StkTypeGetInput:case g_stk_cmd_type.StkTypeSelItem:case g_stk_cmd_type.StkTypeLaunchBrowser:case g_stk_cmd_type.StkTypeRefresh:case g_stk_cmd_type.StkTypeEndSession:stk_operateByCmdType(e,_,s)}else g_stk_pageIndex=g_stk_pageIndexBak,stk_clearSightlessDialog(),button_enable("stk_back_page","1"),showInfoDialog(common_failed)}),{enc:!0,timeout:g_STK_TIMEOUT,errorCB:function(){g_stk_pageIndex=g_stk_pageIndexBak,stk_clearSightlessDialog(),button_enable("stk_back_page","1"),showInfoDialog(common_failed)}})}function stk_operateByCmdType(e,t,_){switch(t=parseInt(t,10)){case g_stk_cmd_type.StkTypeSetupMenu:stk_setupMenu(e,_);break;case g_stk_cmd_type.StkTypeDisplayText:stk_displayText(e,_);break;case g_stk_cmd_type.StkTypeGetInkey:stk_getInkey(e,_);break;case g_stk_cmd_type.StkTypeGetInput:stk_getInput(e,_);break;case g_stk_cmd_type.StkTypePlayTone:break;case g_stk_cmd_type.StkTypeSelItem:stk_selItem(e,_);break;case g_stk_cmd_type.StkTypeRefresh:stk_refresh(e,_);break;case g_stk_cmd_type.StkTypeLaunchBrowser:stk_launchBrowser(e,_);break;case g_stk_cmd_type.StkTypeIdleModeText:break;case g_stk_cmd_type.StkTypeEndSession:stk_endSession(e,_)}}function stk_setupMenu(e,t){var _=0,s=0,a=!1;switch(g_stk_menuListArray=[],$.isArray(t.response.STKData.Field)?g_stk_menuListArray=t.response.STKData.Field:g_stk_menuListArray.push(t.response.STKData.Field),stk_clearPage(),g_stk_curMenuTotal=t.response.DataTotal,g_stk_cmdTypeSDKReturnMenu=t.response.CmdType,g_stk_cmdIndexSDKReturnMenu=t.response.CmdIndex,e){case"enter_main":case"others_main":0==g_stk_curMenuTotal?(g_stk_curMenuLevel=0,$("#stk_unsupported").html(resolveXMLEntityReference(stk_label_unsupported).replace(/\s/g,"&nbsp;")),clearTimeout(g_stk_clearTime),clearTimeout(g_stk_clearGetStatusTime)):(g_stk_curMenuLevel=0,$.each(g_stk_menuListArray,(function(e,t){g_stk_MenuInfArray[0][_]=t.Name,_++})),$(".status_title").show());break;case"back_main":for(_=0;_<255;_++)g_stk_MenuInfArray[g_stk_curMenuLevel][_]="undefined";g_stk_curMenuLevel--,g_stk_back_cmdType.pop(),g_stk_back_cmdIndex.pop(),g_stk_cmdTypeArray.pop(),g_stk_cmdIndexArray.pop(),g_stk_resultArray.pop(),g_stk_dataTypeArray.pop(),g_stk_dataArray.pop(),g_stk_menuLevelArray.pop(),g_stk_pageIndexArray.pop(),$(".status_title").show();break;case"jump_page_main":for(;"undefined"!=g_stk_MenuInfArray[0][_];)_++;$.each(g_stk_menuListArray,(function(e,t){if(0!=t.Value)for(s=0;s<_;s++)t.Name==g_stk_MenuInfArray[0][s]&&(a=!0)})),0==a&&$.each(g_stk_menuListArray,(function(e,t){g_stk_MenuInfArray[0][_]=t.Name,_++})),$(".status_title").show()}g_stk_pageIndexBak=g_stk_pageIndex,g_stk_jumpPageFlag=!1,stk_showMenuList(),stk_initPagination(),stk_initBackButton(),stk_clearSightlessDialog(),button_enable("stk_back_page","1")}function stk_selItem(e,t){var _=0,s=0,a=255,n=!1;switch(g_stk_menuListArray=[],$.isArray(t.response.STKData.Field)?g_stk_menuListArray=t.response.STKData.Field:g_stk_menuListArray.push(t.response.STKData.Field),stk_clearPage(),g_stk_curMenuTotal=t.response.DataTotal,g_stk_cmdTypeSDKReturnMenu=t.response.CmdType,g_stk_cmdIndexSDKReturnMenu=t.response.CmdIndex,e){case"enter_main":case"others_main":0==g_stk_curMenuTotal?(g_stk_curMenuLevel=0,$("#stk_unsupported").html(resolveXMLEntityReference(stk_label_unsupported).replace(/\s/g,"&nbsp;")),clearTimeout(g_stk_clearTime),clearTimeout(g_stk_clearGetStatusTime)):(g_stk_curMenuLevel=0,$.each(g_stk_menuListArray,(function(e,t){g_stk_MenuInfArray[0][_]=t.Name,_++})),$(".status_title").show());break;case"jump_page_main":case"jump_page_sub":for(;"undefined"!=g_stk_MenuInfArray[g_stk_curMenuLevel][_];)_++;$.each(g_stk_menuListArray,(function(e,t){if(0!=t.Value)for(s=0;s<_;s++)t.Name==g_stk_MenuInfArray[g_stk_curMenuLevel][s]&&(n=!0)})),0==n&&$.each(g_stk_menuListArray,(function(e,t){g_stk_MenuInfArray[g_stk_curMenuLevel][_]=t.Name,_++})),$(".status_title").show();break;case"others_sub":case"enter_sub":if(1==g_stk_jumpPageFlag){for(;"undefined"!=g_stk_MenuInfArray[g_stk_curMenuLevel][_];)_++;$.each(g_stk_menuListArray,(function(e,t){if(0!=t.Value)for(s=0;s<_;s++)t.Name==g_stk_MenuInfArray[g_stk_curMenuLevel][s]&&(n=!0)})),0==n&&$.each(g_stk_menuListArray,(function(e,t){g_stk_MenuInfArray[g_stk_curMenuLevel][_]=t.Name,_++}))}else if($.each(g_stk_menuListArray,(function(e,t){if(0!=t.Value)for(_=0;_<=g_stk_curMenuLevel;_++)for(s=0;s<255;s++)t.Name==g_stk_MenuInfArray[_][s]&&(a=_)})),_=0,s=0,a>g_stk_curMenuLevel)g_stk_curMenuLevel++,g_stk_back_cmdType.push(g_stk_cmdTypeSDKReturnMenu),g_stk_back_cmdIndex.push(g_stk_cmdIndexSDKReturnMenu),g_stk_cmdTypeArray.push(g_stk_cmdType),g_stk_cmdIndexArray.push(g_stk_cmdIndex),g_stk_resultArray.push(g_stk_result),g_stk_dataTypeArray.push(g_stk_dataType),g_stk_dataArray.push(g_stk_data),g_stk_menuLevelArray.push(g_stk_menuLevel),g_stk_pageIndexArray.push(g_stk_pageIndexBack),$.each(g_stk_menuListArray,(function(e,t){g_stk_MenuInfArray[g_stk_curMenuLevel][_]=t.Name,_++}));else for(s=g_stk_curMenuLevel;s>a;s--){for(_=0;_<255;_++)g_stk_MenuInfArray[g_stk_curMenuLevel][_]="undefined";g_stk_curMenuLevel--,g_stk_back_cmdType.pop(),g_stk_back_cmdIndex.pop(),g_stk_cmdTypeArray.pop(),g_stk_cmdIndexArray.pop(),g_stk_resultArray.pop(),g_stk_dataTypeArray.pop(),g_stk_dataArray.pop(),g_stk_menuLevelArray.pop(),g_stk_pageIndexArray.pop()}$(".status_title").show();break;case"back_main":case"back_sub":for(_=0;_<255;_++)g_stk_MenuInfArray[g_stk_curMenuLevel][_]="undefined";g_stk_curMenuLevel--,g_stk_back_cmdType.pop(),g_stk_back_cmdIndex.pop(),g_stk_cmdTypeArray.pop(),g_stk_cmdIndexArray.pop(),g_stk_resultArray.pop(),g_stk_dataTypeArray.pop(),g_stk_dataArray.pop(),g_stk_menuLevelArray.pop(),g_stk_pageIndexArray.pop(),$(".status_title").show()}g_stk_pageIndexBak=g_stk_pageIndex,g_stk_jumpPageFlag=!1,stk_showMenuList(),stk_initPagination(),stk_initBackButton(),button_enable("stk_back_page","1"),stk_clearSightlessDialog()}function stk_displayText(e,t){var _=resolveXMLEntityReference(t.response.STKData.TextInfo),s=(t.response.STKData.TextFormat,t.response.STKData.ClearMode),a="<div id='stk_text_info'>"+_+"</div>";if(g_stk_cmdTypeSDKReturnDialog=t.response.CmdType,g_stk_cmdIndexSDKReturnDialog=t.response.CmdIndex,g_stk_durationTime=t.response.STKData.DurationTime,1==s)return call_dialog(common_confirm,a,common_ok,"pop_OK",common_cancel,"pop_Cancel"),g_stk_callDialogFlag=!0,void button_enable("pop_OK","1");call_dialog(common_confirm,a,"","pop_OK",common_cancel,"pop_Cancel"),g_stk_callDialogFlag=!0,button_enable("pop_OK","1"),0==g_stk_durationTime&&(g_stk_durationTime=3),stk_setTextTimeout()}function stk_getInkey(e,t){var _=resolveXMLEntityReference(t.response.STKData.TextInfo);g_stk_getInkeyRspFormat=t.response.STKData.RspFormat,stk_GetInputOrInkeyCharacterNumber(g_stk_cmd_type.StkTypeGetInkey);var s="<div id='stk_inkey_text_info'>"+_+"</div><table id='stk_inkey_table'><tr><td><input type='text'class='stk_get_inkey' id='stk_get_inkey_text'maxlength='"+g_stk_getInkeyMax+"'</td></tr></table>";g_stk_cmdTypeSDKReturnDialog=t.response.CmdType,g_stk_cmdIndexSDKReturnDialog=t.response.CmdIndex,call_dialog(common_confirm,s,common_ok,"pop_OK",common_cancel,"pop_Cancel"),$("#stk_get_inkey_text").focus(),button_enable("pop_OK","0"),g_stk_callDialogFlag=!0,$("input").bind("change input paste cut keydown keyup",(function(){stk_checkButtonEnable(g_stk_getInkeyMin,"GetInkey")}))}function stk_getInput(e,t){var _=resolveXMLEntityReference(t.response.STKData.TextInfo);g_stk_getInputRspFormat=t.response.STKData.RspFormat,g_stk_getInputMax=t.response.STKData.SizeMax,g_stk_getInputMax=parseInt(g_stk_getInputMax,10),g_stk_getInputMin=t.response.STKData.SizeMin,g_stk_getInputMin=parseInt(g_stk_getInputMin,10),stk_GetInputOrInkeyCharacterNumber(g_stk_cmd_type.StkTypeGetInput);var s="";s+="<div id='stk_input_text_info'>"+_+"</div><table id='stk_input_table'><tr><td>","0"==t.response.STKData.EchoMode?s+="<input type='password'class='stk_get_input' autocomplete='off' id='stk_get_input_text'maxlength='"+g_stk_getInputMax+"'":s+="<input type='text'class='stk_get_input' id='stk_get_input_text'maxlength='"+g_stk_getInputMax+"'",s+="</td></tr></table>",g_stk_cmdTypeSDKReturnDialog=t.response.CmdType,g_stk_cmdIndexSDKReturnDialog=t.response.CmdIndex,g_stk_getInputPackMode=t.response.STKData.PackMode,call_dialog(common_confirm,s,common_ok,"pop_OK",common_cancel,"pop_Cancel"),$("#stk_get_input_text").focus(),button_enable("pop_OK","0"),g_stk_callDialogFlag=!0,$("input").bind("change input paste cut keydown keyup",(function(){stk_checkButtonEnable(g_stk_getInputMin,"GetInput")}))}function stk_GetInputOrInkeyCharacterNumber(e){g_stk_cmd_type.StkTypeGetInput==e?g_stk_getInput_rspFormat.GetInputRspFormatGSM7==g_stk_getInputRspFormat?(g_stk_getInputMax=g_stk_getInputMax/7*8,g_stk_getInputMax=parseInt(g_stk_getInputMax,10),g_stk_getInputMin=g_stk_getInputMin/7*8,g_stk_getInputMin=parseInt(g_stk_getInputMin,10),g_stk_getInputMax>RspFormatGSM7MaxLen&&(g_stk_getInputMax=RspFormatGSM7MaxLen),g_stk_getInputMin>RspFormatGSM7MaxLen&&(g_stk_getInputMin=RspFormatGSM7MaxLen)):g_stk_getInput_rspFormat.GetInputRspFormatNum==g_stk_getInputRspFormat?(g_stk_getInputMax=parseInt(g_stk_getInputMax,10),g_stk_getInputMin=parseInt(g_stk_getInputMin,10),g_stk_getInputMax>RspFormatNumMaxLen&&(g_stk_getInputMax=RspFormatNumMaxLen),g_stk_getInputMin>RspFormatNumMaxLen&&(g_stk_getInputMin=RspFormatNumMaxLen)):(g_stk_getInputMax/=2,g_stk_getInputMax=parseInt(g_stk_getInputMax,10),g_stk_getInputMin/=2,g_stk_getInputMin=parseInt(g_stk_getInputMin,10),0==g_stk_getInputMax&&(g_stk_getInputMax=1),0==g_stk_getInputMin&&(g_stk_getInputMin=1),g_stk_getInputMax>RspFormatUCS2MaxLen&&(g_stk_getInputMax=RspFormatUCS2MaxLen),g_stk_getInputMin>RspFormatUCS2MaxLen&&(g_stk_getInputMin=RspFormatUCS2MaxLen)):g_stk_getInkeyMax=g_stk_getInkey_rspFormat.GetInkeyRspFormatGSM7==g_stk_getInkeyRspFormat?RspFormatGSM7MaxLen:g_stk_getInkey_rspFormat.GetInkeyRspFormatYesNo==g_stk_getInkeyRspFormat?RspFormatYesNoMaxLen:g_stk_getInkey_rspFormat.GetInkeyRspFormatNum==g_stk_getInkeyRspFormat?RspFormatNumMaxLen:RspFormatUCS2MaxLen}function stk_checkButtonEnable(e,t){switch(t){case"GetInput":$("#stk_get_input_text").val().length>=e?button_enable("pop_OK","1"):button_enable("pop_OK","0");break;case"GetInkey":$("#stk_get_inkey_text").val().length>=e?button_enable("pop_OK","1"):button_enable("pop_OK","0")}}function stk_launchBrowser(e,t){var _=t.response.STKData.URL;if($.browser.safari){var s=$("<a href='"+_+"' target='_blank'></a>").get(0),a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0),s.dispatchEvent(a)}else window.open(_);g_stk_pageIndex=g_stk_pageIndexBak,stk_clearSightlessDialog(),button_enable("stk_back_page","1");stk_dataPackage("enter_sub",t.response.CmdType,t.response.CmdIndex,g_stk_terminal_response.StkTerminalResponseOK,g_stk_data_type.StkDataTypeString,"0",g_stk_curMenuLevel),stk_getSub("enter_sub")}function stk_refresh(e,t){g_stk_pageIndex=g_stk_pageIndexBak,stk_clearSightlessDialog(),button_enable("stk_back_page","1")}function stk_endSession(e,t){stk_showSightlessDialog(),stk_dataInit(),stk_getMain("enter_main")}function stk_showMenuList(){var e;$("#list_stk_menu").empty(),$.each(g_stk_menuListArray,(function(e,t){var _="<li href='%href%'><div><a value='%value%' title='%MenuTitle%'href='javascript:void(0);'>%MenuName%</a></div></li>";0==e?g_stk_title=t.Name:(_=(_=stk_replaceStkInf(_,t)).replace("%href%",e),$("#list_stk_menu").append(_))})),e=resolveXMLEntityReference(g_stk_title).replace(/\s/g,"&nbsp;"),$("#stk_head_inf").html(e),$("#stk_head_inf").show()}function stk_initPagination(){var e=0==g_stk_curMenuLevel?g_stk_main_request.ReadCount:g_stk_sub_request.ReadCount;g_stk_curMenuTotal>e&&(g_stk_curTotalPage=Math.ceil(g_stk_curMenuTotal/e),g_stk_pageIndex=Math.min(g_stk_pageIndex,g_stk_curTotalPage),stk_createPageNav(),$(".stk_pagination span").show())}function stk_createPageNav(){var e,t,_="";e=1==g_stk_pageIndex?"javascript:void(0);":"javascript:stk_pageNav('first')",t=g_stk_pageIndex>=g_stk_curTotalPage?"javascript:void(0);":"javascript:stk_pageNav('last')","ar_sa"==LANGUAGE_DATA.current_language||"he_il"==LANGUAGE_DATA.current_language||"fa_fa"==LANGUAGE_DATA.current_language?($("#pageBegin").attr("href",t),$("#pageLast").attr("href",e)):($("#pageBegin").attr("href",e),$("#pageLast").attr("href",t));var s,a;s=1==g_stk_pageIndex?"javascript:void(0);":"javascript:stk_pageNav('prePage')",a=g_stk_pageIndex>=g_stk_curTotalPage?"javascript:void(0);":"javascript:stk_pageNav('nextPage')","ar_sa"==LANGUAGE_DATA.current_language||"he_il"==LANGUAGE_DATA.current_language||"fa_fa"==LANGUAGE_DATA.current_language?($("#prePage").attr("href",a),$("#nextPage").attr("href",s)):($("#prePage").attr("href",s),$("#nextPage").attr("href",a));var n=0,g=0;(g_stk_pageIndex=parseInt(g_stk_pageIndex,10))+parseInt(2.5,10)>=g_stk_curTotalPage?n=(g=g_stk_curTotalPage)-5+1>1?g-5+1:1:g_stk_pageIndex<=parseInt(2.5,10)?g=(n=1)+5-1>g_stk_curTotalPage?g_stk_curTotalPage:n+5-1:(n=g_stk_pageIndex-parseInt(2.5,10)>1?g_stk_pageIndex-parseInt(2.5,10):1,g=g_stk_pageIndex+parseInt(2.5,10)>g_stk_curTotalPage?g_stk_curTotalPage:g_stk_pageIndex+parseInt(2.5,10));var k=0;if("ar_sa"==LANGUAGE_DATA.current_language||"he_il"==LANGUAGE_DATA.current_language||"fa_fa"==LANGUAGE_DATA.current_language)for(k=g;k>=n;k--)aHref=k==g_stk_pageIndex?' href="javascript:void(0);"':" href=\"javascript:stk_pageNav('"+k+'\')"  style="text-decoration:underline"',_+="<a "+aHref+">"+k+"</a>";else for(k=n;k<=g;k++)aHref=k==g_stk_pageIndex?' href="javascript:void(0);"':" href=\"javascript:stk_pageNav('"+k+'\')"  style="text-decoration:underline"',_+="<a "+aHref+">"+k+"</a>";$("#page_num").html(_)}function stk_pageNav(e){switch(e){case"first":g_stk_pageIndex=1;break;case"last":g_stk_pageIndex=g_stk_curTotalPage;break;case"prePage":g_stk_pageIndex--;break;case"nextPage":g_stk_pageIndex++;break;default:g_stk_pageIndex=e}$(document).scrollTop(0),stk_showSightlessDialog(),button_enable("stk_back_page","0"),g_stk_jumpPageFlag=!0,0==g_stk_curMenuLevel?(stk_dataPackage("jump_page_main",0,0,15,1,0,0),stk_getMain("jump_page_main")):(stk_dataPackage("jump_page_sub",g_stk_back_cmdType[g_stk_curMenuLevel-1],g_stk_back_cmdIndex[g_stk_curMenuLevel-1],g_stk_resultArray[g_stk_curMenuLevel-1],g_stk_dataTypeArray[g_stk_curMenuLevel-1],g_stk_dataArray[g_stk_curMenuLevel-1],g_stk_menuLevelArray[g_stk_curMenuLevel-1]),stk_getSub("jump_page_sub"))}function stk_initBackButton(){0<g_stk_curMenuLevel?$("#stk_back_page").show():$("#stk_back_page").hide()}function stk_replaceStkInf(e,t){var _=e;return _=t.Value?_.replace("%value%",t.Value):_.replace("%value%",""),_=t.Name?(_=_.replace("%MenuName%",resolveXMLEntityReference(t.Name).replace(/\s/g,"&nbsp;"))).replace("%MenuTitle%",resolveXMLEntityReference(t.Name).replace(/\s/g,"&nbsp;")):(_=_.replace("%MenuName%","")).replace("%MenuTitle%","")}function stk_setTextTimeout(){if(g_stk_clearTime=setTimeout((function(){stk_setTextTimeout()}),1e3),0!=g_stk_durationTime){var e=common_ok.replace(/(^\s*)|(\s*$)/g,"")+" = "+g_stk_durationTime;$("#pop_OK").val(e),g_stk_durationTime--}else $("#pop_OK").trigger("click")}function stk_showSightlessDialog(){$("#stk_div_wrapper").remove(),$(".stk_dialog").remove();var e="";$("#stk_div_wrapper").size()<1&&(e+="<div id='stk_div_wrapper'></div>"),e+="<div class='stk_dialog'></div>",$(".body_bg").before(e),reputPosition($(".stk_dialog"),$("#stk_div_wrapper")),g_stk_showSightlessDialogFlag=!0}function stk_clearSightlessDialog(){$(".stk_dialog").fadeOut((function(){$("#stk_div_wrapper").remove(),$(".stk_dialog").remove()})),g_stk_showSightlessDialogFlag=!1}function stk_queryStatus(){var e=g_stk_cmd_timeout.CmdIsNotTimeout;getAjaxData("api/stk/stk-query",(function(t){var _=xml2object(t);"response"==_.type&&(e=parseInt(_.response.IsTimeout,10),g_stk_cmd_timeout.CmdIsTimeout==e&&(clearDialog(),clearTimeout(g_stk_clearTime),stk_showSightlessDialog(),button_enable("stk_back_page","0"),stk_dataInit(),stk_getMain("enter_main")))}),{sync:!0,timeout:g_STK_TIMEOUT,errorCB:function(){}})}function stk_getConfig(){getConfigData("config/stk/config.xml",(function(e){var t=_xml2feature(e);$.extend(g_stk_feature,t)}),{sync:!0}),redirectOnCondition(null,"stk")}stk_getConfig(),$(document).ready((function(){stk_initPage(),stk_initBtnClick(),stk_getStkStatus()}));
