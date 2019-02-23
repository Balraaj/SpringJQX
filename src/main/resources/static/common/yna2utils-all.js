try{(function(name,context,definition){if(typeof define==="function"&&define.amd){define(['jquery',"knockout"],definition);}else{context[name]=definition(jQuery,context['knockout']);}})("jqxknockoututil",this,function(k,c){c.jqwidgets=c.jqwidgets||{};c.jqwidgets.knockout=function(J){var K=this;var L={},I=J.name;L.init=function(Q,R,N,P){var M=c.utils.unwrapObservable(R());var T=c.toJS(M);if(J.reset){J.reset()}if(k.data(Q)[I]==undefined){var O=[];k(Q)[I]();widget=k.data(Q)[I].instance;k.each(J,function(V,W){if(widget.hasOwnProperty(V)&&T.hasOwnProperty(V)){if(!widget.koupdating){widget.koupdatingFromObservable=true;try{var X=false;if(J.serialize){if(J.serialize(widget,V)){if(c.toJSON(T[V])!=c.toJSON(J.serialize(widget,V))){J.setProperty(widget,V,widget[V],T[V])}X=true}}if(!X){if(c.toJSON(T[V])!=c.toJSON(widget[V])){J.setProperty(widget,V,widget[V],T[V])}}}catch(U){J.setProperty(widget,V,widget[V],T[V])}O[V]=V;widget.koupdatingFromObservable=false}}});var S={};k.each(T,function(U,V){if(O[U]==undefined){S[U]=T[U]}});widget.host[I](S)}widget=k.data(Q)[I].instance;widget.koupdatingFromObservable=false;widget.koupdating=false;if(J.events){k.each(J.events,function(){var U=this;k(Q).on(U+"."+Q.id,function(W){widget=k.data(Q)[I].instance;if(!widget.koupdatingFromObservable){var V=widget;V.koupdating=true;var Y=R();var X=J.getProperty(widget,W,U,M);if(X!=undefined){if(Y.hasOwnProperty(X.name)&&k.isFunction(Y[X.name])){if(c.isObservable(Y[X.name])&&Y[X.name].push){R(X.value)}else{Y[X.name](X.value)}}else{if(Y[X.name]){R(X.value)}}}V.koupdating=false}})})}};L.update=function(Q,R,O,P,N){var M=c.utils.unwrapObservable(R());var S=c.toJS(M);widget=k.data(Q)[I].instance;if(widget.koupdating){return}k.each(J,function(T,U){if(widget.hasOwnProperty(T)&&S.hasOwnProperty(T)){if(!widget.koupdating){widget.koupdatingFromObservable=true;var V=false;if(J.serialize){if(J.serialize(widget,T)){if(c.toJSON(S[T])!=c.toJSON(J.serialize(widget,T))){J.setProperty(widget,T,widget[T],S[T])}V=true}}if(!V){if(c.toJSON(S[T])!=c.toJSON(widget[T])){J.setProperty(widget,T,widget[T],S[T])}}widget.koupdatingFromObservable=false}}})};c.bindingHandlers[J.name]=L};var D=new c.jqwidgets.knockout({name:"jqxGauge",disabled:false,min:0,max:220,value:0,reset:function(){this.value=0;this.max=220;this.min=0;this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxGauge({disabled:L})}if(J=="min"){I.host.jqxGauge({min:L})}if(J=="max"){I.host.jqxGauge({max:L})}if(J=="value"){I.host.jqxGauge({value:L})}}});var f=new c.jqwidgets.knockout({name:"jqxLinearGauge",disabled:false,min:0,max:220,value:0,reset:function(){this.value=0;this.max=220;this.min=0;this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxLinearGauge({disabled:L})}if(J=="min"){I.host.jqxLinearGauge({min:L})}if(J=="max"){I.host.jqxLinearGauge({max:L})}if(J=="value"){I.host.jqxLinearGauge({value:L})}}});var A=new c.jqwidgets.knockout({name:"jqxSlider",disabled:false,min:0,max:10,value:0,reset:function(){this.value=0;this.max=10;this.min=0;this.disabled=false},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:K.args.value}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxSlider({disabled:L})}if(J=="min"){I.host.jqxSlider({min:parseFloat(L)})}if(J=="max"){I.host.jqxSlider({max:parseFloat(L)})}if(J=="value"){I.host.jqxSlider({value:parseFloat(L)})}}});var s=new c.jqwidgets.knockout({name:"jqxScrollBar",disabled:false,min:0,max:10,value:0,reset:function(){this.value=0;this.max=10;this.min=0;this.disabled=false},events:["valueChanged"],getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:parseInt(K.currentValue)}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxScrollBar({disabled:L})}if(J=="min"){I.host.jqxScrollBar({min:parseFloat(L)})}if(J=="max"){I.host.jqxScrollBar({max:parseFloat(L)})}if(J=="value"){I.host.jqxScrollBar({value:parseFloat(L)})}}});var a=new c.jqwidgets.knockout({name:"jqxProgressBar",disabled:false,value:0,reset:function(){this.value=0;this.disabled=false},events:["valueChanged"],getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:parseInt(K.currentValue)}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxProgressBar({disabled:L})}if(J=="value"){I.host.jqxProgressBar({value:parseFloat(L)})}}});var g=new c.jqwidgets.knockout({name:"jqxButton",disabled:false,reset:function(){this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxButton({disabled:L})}}});var j=new c.jqwidgets.knockout({name:"jqxCheckBox",checked:false,disabled:false,reset:function(){this.checked=false;this.disabled=false},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"checked",value:K.args.checked}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxCheckBox({disabled:L})}if(J=="checked"){if(K!=L){I.host.jqxCheckBox({checked:L})}}}});var E=new c.jqwidgets.knockout({name:"jqxRadioButton",checked:false,disabled:false,reset:function(){this.checked=false;this.disabled=false},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"checked",value:K.args.checked}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxRadioButton({disabled:L})}if(J=="checked"){if(K!=L){I.host.jqxRadioButton({checked:L})}}}});var r=new c.jqwidgets.knockout({name:"jqxDateTimeInput",value:null,disabled:false,reset:function(){this.value=null;this.disabled=false},events:["valueChanged"],getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:K.args.date}}},setProperty:function(I,J,K,L){if(J=="value"){I.setDate(L)}if(J=="disabled"){I.host.jqxDateTimeInput({disabled:L})}}});var G=new c.jqwidgets.knockout({name:"jqxCalendar",value:null,disabled:false,reset:function(){this.value=null;this.disabled=false},events:["valueChanged"],getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:K.args.date}}},setProperty:function(I,J,K,L){if(J=="value"){I.setDate(L)}if(J=="disabled"){I.host.jqxCalendar({disabled:L})}}});var u=new c.jqwidgets.knockout({name:"jqxNumberInput",value:null,events:["valueChanged"],disabled:false,reset:function(){this.value=null;this.disabled=false},getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:J.val()}}},setProperty:function(I,J,K,L){if(J=="value"){I.host.jqxNumberInput("val",L)}if(J=="disabled"){I.host.jqxNumberInput({disabled:L})}}});var m=new c.jqwidgets.knockout({name:"jqxMaskedInput",value:null,events:["valueChanged"],disabled:false,reset:function(){this.value=null;this.disabled=false},getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:J.val()}}},setProperty:function(I,J,K,L){if(J=="value"){I.host.jqxMaskedInput("val",L)}if(J=="disabled"){I.host.jqxMaskedInput({disabled:L})}}});var d=new c.jqwidgets.knockout({name:"jqxListBox",source:null,disabled:false,selectedIndex:-1,reset:function(){this.disabled=false;this.selectedIndex=-1;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){this.selectedIndex=J.selectedIndex;return{name:"selectedIndex",value:J.selectedIndex}}},setProperty:function(I,J,L,M){if(J=="source"){I.source=M;I.refresh()}if(J=="disabled"){I.disabled=M;I._renderItems()}if(J=="selectedIndex"){var K=I.disabled;I.disabled=false;I.selectIndex(M);I.disabled=K;if(K){I._renderItems()}}}});var w=new c.jqwidgets.knockout({name:"jqxDropDownList",source:null,disabled:false,selectedIndex:-1,reset:function(){this.disabled=false;this.selectedIndex=-1;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"selectedIndex",value:J.selectedIndex}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxDropDownList({source:L})}if(J=="disabled"){I.host.jqxDropDownList({disabled:L})}if(J=="selectedIndex"){I.host.jqxDropDownList({selectedIndex:L})}}});var l=new c.jqwidgets.knockout({name:"jqxComboBox",source:null,disabled:false,selectedIndex:-1,reset:function(){this.disabled=false;this.selectedIndex=-1;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"selectedIndex",value:J.selectedIndex}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxComboBox({source:L})}if(J=="disabled"){I.host.jqxComboBox({disabled:L})}if(J=="selectedIndex"){I.host.jqxComboBox({selectedIndex:L})}}});var y=new c.jqwidgets.knockout({name:"jqxInput",source:null,disabled:false,value:"",reset:function(){this.disabled=false;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:J.host.val()}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxInput({source:L})}if(J=="disabled"){I.host.jqxInput({disabled:L})}if(J=="value"){I.host.jqxInput({value:L})}}});var v=new c.jqwidgets.knockout({name:"jqxComplexInput",source:null,disabled:false,value:"",reset:function(){this.disabled=false;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:J.host.val()}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxComplexInput({source:L})}if(J=="disabled"){I.host.jqxComplexInput({disabled:L})}if(J=="value"){I.host.jqxComplexInput({value:L})}}});var e=new c.jqwidgets.knockout({name:"jqxFormattedInput",source:null,disabled:false,value:"",reset:function(){this.disabled=false;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:J.host.val()}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxFormattedInput({source:L})}if(J=="disabled"){I.host.jqxFormattedInput({disabled:L})}if(J=="value"){I.host.jqxFormattedInput({value:L})}}});var H=new c.jqwidgets.knockout({name:"jqxPasswordInput",source:null,disabled:false,value:"",reset:function(){this.disabled=false;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:J.host.val()}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxPasswordInput({source:L})}if(J=="disabled"){I.host.jqxPasswordInput({disabled:L})}if(J=="value"){I.host.jqxPasswordInput({value:L})}}});var F=new c.jqwidgets.knockout({name:"jqxTree",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxTree({source:L})}if(J=="disabled"){I.host.jqxTree({disabled:L})}}});var h=new c.jqwidgets.knockout({name:"jqxTabs",disabled:false,reset:function(){this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxTabs({disabled:L})}}});var t=new c.jqwidgets.knockout({name:"jqxWindow",disabled:false,content:"",title:"",reset:function(){this.disabled=false;this.title="";this.content=""},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxWindow({disabled:L})}else{if(J=="content"){I.host.jqxWindow("setContent",L)}else{if(J=="title"){I.host.jqxWindow({title:L})}}}}});var x=new c.jqwidgets.knockout({name:"jqxNavigationBar",disabled:false,reset:function(){this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){if(L!=this.disabled){this.disabled=L;I.host.jqxNavigationBar({disabled:L})}}}});var q=new c.jqwidgets.knockout({name:"jqxMenu",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxMenu({source:L})}if(J=="disabled"){I.host.jqxMenu({disabled:L})}}});var z=new c.jqwidgets.knockout({name:"jqxChart",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxChart({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxChart({disabled:L})}}});var b=new c.jqwidgets.knockout({name:"jqxDataTable",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxDataTable({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxDataTable({disabled:L})}}});var p=new c.jqwidgets.knockout({name:"jqxTreeGrid",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxTreeGrid({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxTreeGrid({disabled:L})}}});var C=new c.jqwidgets.knockout({name:"jqxKnob",value:0,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="value"){this.value=L;I.host.jqxKnob({value:L})}if(J=="disabled"){this.disabled=L;I.host.jqxKnob({disabled:L})}}});var B=new c.jqwidgets.knockout({name:"jqxScheduler",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxScheduler({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxScheduler({disabled:L})}}});var o=new c.jqwidgets.knockout({name:"jqxKanban",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxKanban({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxKanban({disabled:L})}}});var n=new c.jqwidgets.knockout({name:"jqxGrid",source:null,disabled:false,selectedRowIndex:-1,reset:function(){this.disabled=false;this.source=null;this.selectedRowIndex=-1},serialize:function(J,I){if(I=="source"){if(J.source&&J.source._source){return J.source.records}}return false},events:["cellvaluechanged","cellselect","rowselect"],getProperty:function(M,K,O,N){if(O=="cellvaluechanged"){var L=M.host.jqxGrid("getrowid",K.args.rowindex);var S=M.host.jqxGrid("getrowdata",L);var J=N.source;if(J!=undefined){var R={};var I={};var Q=false;var P=false;if(J()[L]){k.each(J()[L],function(T,U){R[T]=U;I[T]="";if(c.isObservable(U)&&!c.isComputed(U)){Q=true;U(S[T])}if(c.isObservable(U)&&c.isComputed(U)){P=true}})}if(!Q){R=S;if(J.replace){J.replace(J()[L],I);J.replace(J()[L],R)}}else{R=S;if(J.replace){J.replace(J()[L],R)}}if(P){M.host.jqxGrid("updaterow",L,c.toJS(J)[L])}return{name:"source",value:J}}}},setProperty:function(L,S,R,J){if(S=="selectedRowIndex"){L.host.jqxGrid("selectrow",J)}if(S=="source"){if(this.source==null||J==null){if(this.source!=J){this.source=J;var I={localdata:J,datatype:"local"};var Q=new k.jqx.dataAdapter(I);L.host.jqxGrid({source:Q})}}else{var I={localdata:J,datatype:"local"};var Q=new k.jqx.dataAdapter(I);Q.dataBind();if(!R.records||!Q.records){return}var U=Math.max(R.records.length,Q.records.length);var P=Math.abs(R.records.length-Q.records.length);if(P==0){if(U>10){L.host.jqxGrid({source:Q});return}}if(P>1){L.host.jqxGrid("beginupdate")}var T=new Array();for(var N=0;N<U;N++){var O=Q.records[N];if(O==undefined){var K=L.host.jqxGrid("getrowid",N);T.push(K)}else{var M=R.records[N]!=undefined;if(M){if(c.toJSON(O)!=c.toJSON(R.records[N])){if(R.records[N].uid!=undefined){O.uid=R.records[N].uid;if(c.toJSON(O)==c.toJSON(R.records[N])){continue}}var K=L.host.jqxGrid("getrowid",N);L.host.jqxGrid("updaterow",K,O)}}else{L.host.jqxGrid("addrow",null,O)}}}if(T.length>0){L.host.jqxGrid("deleterow",T)}if(P>1){L.host.jqxGrid("endupdate")}}}if(S=="disabled"){L.host.jqxGrid({disabled:J})}}});var i=new c.jqwidgets.knockout({name:"jqxBulletChart",pointer:{value:0},target:{value:0},disabled:false,reset:function(){this.pointer.value=0;this.target.value=0;this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="pointer"){I.host.jqxBulletChart({pointer:L})}if(J=="target"){I.host.jqxBulletChart({target:L})}if(J=="disabled"){I.host.jqxBulletChart({disabled:L})}}})})}catch(error){var er=error};(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(['jquery', 'jqueryi18n'], definition);
	} else {
		context[name] = definition(jQuery);
	}
})("messageutil", this, function($) {
	'use strict';
	var initialied = false;
	return {
		init: function(){
			$.i18n.properties({
				name: ['pjMessageResource','commonResource','base'], 
				path:contextPath+'/resources/messages/',
				mode:'map',
				language: clientLang.replace(new RegExp("_","gm"),"-")
			}); 
			initialied = true;
		},
		prop : function() {
			if (!initialied) this.init();
			return $.i18n.prop.apply(this, Array.prototype.slice.apply(arguments)); 
		}
	}
});/*
 * Globalize Culture
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {
'use strict';

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "en", "default", {
	name: "en",
	englishName: "English (United States)",
	dropdownlist: {
		choosestring : 'Please Choose:'
	}
});


Globalize.addCultureInfo( "ja", "default", {
	name: "ja",
	englishName: "Japanese (Japan)",
	nativeName: "日本語 (日本)",
	language: "ja",
	numberFormat: {
		"NaN": "NaN (非数値)",
		negativeInfinity: "-∞",
		positiveInfinity: "+∞",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-$n","$n"],
			decimals: 0,
			symbol: "¥"
		}
	},
	dropdownlist: {
		choosestring : '選択してください:'
	},
	calendars: {
		standard: {
			days: {
				names: ["日","月","火","水","木","金","土"],
				namesAbbr: ["日","月","火","水","木","金","土"],
				namesShort: ["日","月","火","水","木","金","土"]
			},
			months: {
				names: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["午前","午前","午前"],
			PM: ["午後","午後","午後"],
			eras: [{"name":"西暦","start":null,"offset":0}],
			patterns: {
				d: "yyyy/MM/dd",
				D: "yyyy'年'M'月'd'日'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "yyyy'年'M'月'd'日' H:mm",
				F: "yyyy'年'M'月'd'日' H:mm:ss",
				M: "M'月'd'日'",
				Y: "yyyy'年'M'月'"
			}
		},
		Japanese: {
			name: "Japanese",
			days: {
				names: ["日","月","火","水","木","金","土"],
				namesAbbr: ["日","月","火","水","木","金","土"],
				namesShort: ["日","月","火","水","木","金","土"]
			},
			months: {
				names: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["午前","午前","午前"],
			PM: ["午後","午後","午後"],
			eras: [{"name":"平成","start":null,"offset":1867},{"name":"昭和","start":-1812153600000,"offset":1911},{"name":"大正","start":-1357603200000,"offset":1925},{"name":"明治","start":60022080000,"offset":1988}],
			twoDigitYearMax: 99,
			patterns: {
				d: "gg y/M/d",
				D: "gg y'年'M'月'd'日'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "gg y'年'M'月'd'日' H:mm",
				F: "gg y'年'M'月'd'日' H:mm:ss",
				M: "M'月'd'日'",
				Y: "gg y'年'M'月'"
			}
		}
	},
	grid:{
		'/' : '/',
		':' : ':',
		firstDay : 0,
		days : {
			names: ["日","月","火","水","木","金","土"],
			namesAbbr: ["日","月","火","水","木","金","土"],
			namesShort: ["日","月","火","水","木","金","土"]
		},
		months : {
			names: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],
			namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
		},
		AM : ["午前","午前","午前"],
		PM : ["午後","午後","午後"],
		eras: [{"name":"西暦","start":null,"offset":0}],
		twoDigitYearMax : 2029,
		patterns : {
			d : "yyyy/MM/dd",
			D : "yyyy'年'M'月'd'日'",
			t : "H:mm",
			T : "H:mm:ss",
			f : "yyyy'年'M'月'd'日' H:mm",
			F : "yyyy'年'M'月'd'日' H:mm:ss",
			M : "M'月'd'日'",
			Y : "yyyy'年'M'月'",
			S : 'yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss',
			ISO : 'yyyy-MM-dd hh:mm:ss',
			ISO2 : 'yyyy-MM-dd HH:mm:ss',
			d1 : 'dd.MM.yyyy',
			d2 : 'dd-MM-yyyy',
			d3 : 'dd-MMMM-yyyy',
			d4 : 'dd-MM-yy',
			d5 : 'H:mm',
			d6 : 'HH:mm',
			d7 : 'HH:mm tt',
			d8 : 'dd/MMMM/yyyy',
			d9 : 'MMMM-dd',
			d10 : 'MM-dd',
			d11 : 'MM-dd-yyyy'
		},
		percentsymbol : '%',
		currencysymbol : '￥',
		currencysymbolposition : '前',
		decimalseparator : '.',
		thousandsseparator : ',',
		pagergotopagestring : 'ページング:',
		pagershowrowsstring : '表示件数:',
		pagerrangestring : ' 目/ ',
		pagerpreviousbuttonstring : '前へ',
		pagernextbuttonstring : '次へ',
		pagerfirstbuttonstring : '先頭へ',
		pagerlastbuttonstring : '最後へ',
		groupsheaderstring : '列タイトルをここにドラッグ＆ドロップすると、一覧表がグループ集計されます',
		sortascendingstring : '昇順',
		sortdescendingstring : '降順',
		sortremovestring : '並べ替えを削除',
		groupbystring : '列で集計',
		groupremovestring : '削除',
		filterclearstring : 'クリア',
		filterstring : 'フィールト',
		filtershowrowstring : '選択値のデータを表示:',
		filtershowrowdatestring : '選択日のデータを表示:',
		filterorconditionstring : '或は',
		filterandconditionstring : 'かつ',
		filterselectallstring : '（全選択）',
		filterchoosestring : '選択してください:',
		filterstringcomparisonoperators : [
			'データなし',
			'データあり',
			'含む',
			'含む（大文字小文字判断）',
			'含まない',
			'含まない（大文字小文字判断）',
			'先頭一致',
			'先頭一致（大文字小文字判断）',
			'末尾一致',
			'末尾一致（大文字小文字判断）',
			'一致',
			'一致（大文字小文字判断）',
			'データなし',
			'データあり'
		],
		filternumericcomparisonoperators : [
			'一致',
			'不一致',
			'未満',
			'以下',
			'より大きい',
			'以上',
			'データなし',
			'データあり'
		],
		filterdatecomparisonoperators : [
			'一致',
			'不一致',
			'未満',
			'以下',
			'より大きい',
			'以上',
			'データなし',
			'データあり'
		],
		filterbooleancomparisonoperators : [
			'一致',
			'不一致',
		],
		validationstring : 'データが正しくないです。',
		emptydatastring : 'データがありません ',
		filterselectstring : 'フィルター',
		loadtext : 'ロードしています...',
		clearstring : 'クリア',
		todaystring : '当日',
		addrowstring : '追加',
		udpaterowstring : '更新',
		deleterowstring : '削除',
		resetrowstring : 'リセット',
		everpresentrowplaceholder : '確定 '
	}
});


Globalize.addCultureInfo( "zh", "default", {
	name: "zh",
	englishName: "Chinese (Simplified, PRC)",
	nativeName: "中文(中华人民共和国)",
	language: "zh-CHS",
	numberFormat: {
		"NaN": "非数字",
		negativeInfinity: "负无穷大",
		positiveInfinity: "正无穷大",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["$-n","$n"],
			symbol: "¥"
		}
	},
	dropdownlist: {
		choosestring : '请选择:'
	},
	calendars: {
		standard: {
			days: {
				names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
				namesAbbr: ["周日","周一","周二","周三","周四","周五","周六"],
				namesShort: ["日","一","二","三","四","五","六"]
			},
			months: {
				names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
				namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
			},
			AM: ["上午","上午","上午"],
			PM: ["下午","下午","下午"],
			eras: [{"name":"公元","start":null,"offset":0}],
			patterns: {
				d: "yyyy/M/d",
				D: "yyyy'年'M'月'd'日'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "yyyy'年'M'月'd'日' H:mm",
				F: "yyyy'年'M'月'd'日' H:mm:ss",
				M: "M'月'd'日'",
				Y: "yyyy'年'M'月'"
			}
		}
	},
	grid:{
		'/' : '/',
		':' : ':',
		firstDay : 0,
		days: {
			names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
			namesAbbr: ["周日","周一","周二","周三","周四","周五","周六"],
			namesShort: ["日","一","二","三","四","五","六"]
		},
		months: {
			names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
			namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
		},
		AM: ["上午","上午","上午"],
		PM: ["下午","下午","下午"],
		eras: [{"name":"公元","start":null,"offset":0}],
		twoDigitYearMax : 2029,
		patterns : {
			d : "yyyy/M/d",
			D : "yyyy'年'M'月'd'日'",
			t : "H:mm",
			T : "H:mm:ss",
			f : "yyyy'年'M'月'd'日' H:mm",
			F : "yyyy'年'M'月'd'日' H:mm:ss",
			M : "M'月'd'日'",
			Y : "yyyy'年'M'月'",
			S : 'yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss',
			ISO : 'yyyy-MM-dd hh:mm:ss',
			ISO2 : 'yyyy-MM-dd HH:mm:ss',
			d1 : 'dd.MM.yyyy',
			d2 : 'dd-MM-yyyy',
			d3 : 'dd-MMMM-yyyy',
			d4 : 'dd-MM-yy',
			d5 : 'H:mm',
			d6 : 'HH:mm',
			d7 : 'HH:mm tt',
			d8 : 'dd/MMMM/yyyy',
			d9 : 'MMMM-dd',
			d10 : 'MM-dd',
			d11 : 'MM-dd-yyyy'
		},
		percentsymbol : '%',
		currencysymbol : '￥',
		currencysymbolposition : '前',
		decimalseparator : '.',
		thousandsseparator : ',',
		pagergotopagestring : '当前页:',
		pagershowrowsstring : '显示件数:',
		pagerrangestring : ' / ',
		pagerpreviousbuttonstring : '上一页',
		pagernextbuttonstring : '下一页',
		pagerfirstbuttonstring : '第一页',
		pagerlastbuttonstring : '最后一页',
		groupsheaderstring : 'Drag a column and drop it here to group by that column',
		sortascendingstring : '升序',
		sortdescendingstring : '降序',
		sortremovestring : '並べ替えを削除',
		groupbystring : '按列集计',
		groupremovestring : '清除集计',
		filterclearstring : '清除',
		filterstring : '过滤',
		filtershowrowstring : '显示这些:',
		filtershowrowdatestring : '显示这些日期:',
		filterorconditionstring : '或',
		filterandconditionstring : '与',
		filterselectallstring : '全选',
		filterchoosestring : '请选择:',
		filterstringcomparisonoperators : [
			'empty',
			'not empty',
			'contains',
			'contains(match case)',
			'does not contain',
			'does not contain(match case)',
			'starts with',
			'starts with(match case)',
			'ends with',
			'ends with(match case)',
			'equal',
			'equal(match case)',
			'null',
			'not null'
		],
		filternumericcomparisonoperators : [
			'equal',
			'not equal',
			'less than',
			'less than or equal',
			'greater than',
			'greater than or equal',
			'null',
			'not null'
		],
		filterdatecomparisonoperators : [
			'equal',
			'not equal',
			'less than',
			'less than or equal',
			'greater than',
			'greater than or equal',
			'null',
			'not null'
		],
		filterbooleancomparisonoperators : [
			'equal',
			'not equal'
		],
		validationstring : '数据不正确。',
		emptydatastring : '数据不存在 ',
		filterselectstring : '选择过滤',
		loadtext : '读取中...',
		clearstring : '清除',
		todaystring : '今天',
		addrowstring : '增加',
		udpaterowstring : '更新',
		deleterowstring : '删除',
		resetrowstring : '重置',
		everpresentrowplaceholder : '确定 '
	}
});

}( this ));
(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(["globalize", "globalizeculture"],definition);
	} else {
		context[name] = definition();
	}
})("jqxlanguageutil", this, function () {
	return Globalize.culture(clientLang.split("-")[0]);
});(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(["jquery"],definition);
	} else {
		context[name] = definition(jQuery);
	}
})("jqnotymanager", this, function($) {
	'use strict';
	// private properties
	var NOTY_TYPE_ALERT = 'alert',
		NOTY_TYPE_INFORMATION = 'information',
		NOTY_TYPE_ERROR = 'error',
		NOTY_TYPE_WARNING = 'warning',
		NOTY_TYPE_NOTIFICATION = 'notification',
		NOTY_TYPE_SUCCESS = 'success',
		NOTY_TYPE_CONFIRM = 'confirm',
		NOTY_FRIST_TIME_CLOSE_DELAY = 5000,
		_autoClose = true,
		_positionSelector = '.messageTable',
		_aopAfterMethodName = 'jailErrors_modifyErrorPanelInternal',
		_srcMsgSelector = '#success_message',
		_srcErrorMsgSelector = '#error_message > li',
		_msgPanelId = 'notyMessagePanel',
		_msgContainerId = 'notyMessageContainer',
		_msgControlBarId = 'notyMessageControlBar',
		_msgPanelHtml = '<div id="' + _msgPanelId + '" class="notyMessagePanel"></div>',
		_msgContainerHtml = '<div id="' + _msgContainerId + '" class="notyMessageContainer"></div>',
		_msgControlBarHtml = '<div id="' + _msgControlBarId + '" class="notyMessageControlBar"></div>',
		_$msgPanel = $(_msgPanelHtml),
		_$msgContainer = $(_msgContainerHtml),
		_$msgControlBar = $(_msgControlBarHtml),
		_timeoutResult = [],
	// private methods
	_initMsgPanel = function () {
		var _msgPanel = document.getElementById(_msgPanelId);
		if (_msgPanel) {
			_$msgPanel = $(_msgPanel);
			_$msgContainer = _$msgPanel.find('#' + _msgContainerId);
			_$msgControlBar = _$msgPanel.find('#' + _msgControlBarId);
		} else {
			_$msgPanel.append(_$msgContainer)
					  .append(_$msgControlBar);
			$(_positionSelector, document).before(_$msgPanel);
		}
		// bind click event to message control bar
		_$msgControlBar.unbind('click')
					.click(function () {
						if (_autoClose) {
							_clearTimeoutMission();
						}
						var msgNumber = _getMessageNumber();
						if (msgNumber > 0) {
							_closeMessage();
						} else {
							_showMessage();
						}
					});
		_$msgContainer.unbind('mouseover')
					.unbind('mouseout')
					.mouseover(function () {
						if (_autoClose) {
							_clearTimeoutMission();
						}
					})
					.mouseout(function () {
						_pushFnToTimeout(_closeMessage, NOTY_FRIST_TIME_CLOSE_DELAY);
					});
	},
	_clearTimeoutMission = function () {
		for (var i = 0, len = _timeoutResult.length; i < len; i++ ) {
			clearTimeout(_timeoutResult[i]);
		}
		_timeoutResult = []; // empty the array
	},
	_generate = function (text, type) {
		_$msgControlBar.show();
		var n = _$msgContainer.noty({
			text: text,
			type: type
		});
		return n;
	},
	_generateMessage = function () {
		_initMsgPanel();
		var notyInstance = null;
		// Process error messages
		var _$errorLiElements = $(_srcErrorMsgSelector);
		var errorMessageArray = new Array();
		_$errorLiElements.each(function() {
			errorMessageArray.push( $(this).text() );
		});
		var errorMessage = errorMessageArray.join('</div><div>');
		var successMessage = $(_srcMsgSelector).text();
		if ('' != errorMessage) {
			notyInstance = _error(errorMessage);
		} else if ('' != successMessage) { // Process success messages
			notyInstance = _success(successMessage);
		}
		if (_autoClose) {
			_pushFnToTimeout(_closeMessage, NOTY_FRIST_TIME_CLOSE_DELAY);
		}
		if (null == notyInstance) {
			_hidePanel();
		} else {
			_showPanel();
		}
	},
	_pushFnToTimeout = function (fn, delay) {
		var _timeout = setTimeout(function() {
			fn();
		}, delay);
		_timeoutResult.push(_timeout);
	},
	_error = function (text) {
		_$msgControlBar.hasClass('success') && _$msgControlBar.removeClass('success');
		!_$msgControlBar.hasClass('error') && _$msgControlBar.addClass('error');
		return _generate(text, NOTY_TYPE_ERROR);
	},
	_success = function (text) {
		_$msgControlBar.hasClass('error') && _$msgControlBar.removeClass('error');
		!_$msgControlBar.hasClass('success') && _$msgControlBar.addClass('success');
		return _generate(text, NOTY_TYPE_SUCCESS);
	},
	_closeMessage = function () {
		$.noty.closeAll();
	},
	_showMessage = function () {
		_generateMessage();
	},
	_hidePanel = function () {
		_$msgPanel.hide();
	},
	_showPanel = function () {
		_$msgPanel.show();
	},
	_setOperation = function (operation) {
	},
	_getMessageNumber = function () {
		var result = 0;
		$.each($.noty.store, function (id, noty) {
			result++;
		});
		return result;
	};
	
	// public API
	return {
		generateMessage: _generateMessage,
		setOperation: function(operation) {
			_setOperation(operation);
		}
	}
});(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(["jquery"],definition);
	} else {
		context[name] = definition(jQuery);
	}
})("jqxnotificationmanager", this, function($) {
	'use strict';

	var NOTY_TYPE_ALERT = 'alert',
		NOTY_TYPE_INFORMATION = 'info',
		NOTY_TYPE_ERROR = 'error',
		NOTY_TYPE_WARNING = 'warning',
		NOTY_TYPE_NOTIFICATION = 'notification',
		NOTY_TYPE_SUCCESS = 'success',
		NOTY_TYPE_CONFIRM = 'confirm',
		_autoOpen = false,
		_autoClose = true,
		_animationOpenDelay = 800,
		_autoCloseDelay = 5000,
		_position = 'top-left',
		_opacity = 1,
		_browserBoundsOffset = 50,
		_notifiWidth = 'auto',
		_positionSelector = '.messageTable',
		_aopAfterMethodName = 'jailErrors_modifyErrorPanelInternal',
		_srcMsgSelector = '#success_message',
		_srcErrorMsgSelector = '#error_message > li',
		_msgPanelId = 'notyMessagePanel',
		_msgContainerId = 'notyMessageContainer',
		_msgPanelHtml = '<div id="' + _msgPanelId + '" ></div>',
		_msgContainerHtml = '<div id="' + _msgContainerId + '" ></div>',
		_$msgPanel = $(_msgPanelHtml),
		_$msgContainer = $(_msgContainerHtml),
		_initMsgPanel = function () {
			var _msgPanel = document.getElementById(_msgPanelId);
			if (_msgPanel) {
				$(_msgPanel).jqxNotification("destroy");
				_$msgPanel = $(_msgPanelHtml);
			}
			_$msgPanel.append(_$msgContainer);
			$(_positionSelector, document).before(_$msgPanel);
			_$msgPanel.jqxNotification({opacity: _opacity
									 , autoOpen: _autoOpen
									 , animationOpenDelay: _animationOpenDelay
									 , autoClose: _autoClose
									 , autoCloseDelay: _autoCloseDelay
									 , template: NOTY_TYPE_INFORMATION
									 , browserBoundsOffset: _browserBoundsOffset
									 , position: _position
									 , width: _notifiWidth
			});
		},
		_generateMessage = function () {
			_initMsgPanel();
			var _$errorLiElements = $(_srcErrorMsgSelector);
			var errorMessageArray = new Array();
			_$errorLiElements.each(function() {
				errorMessageArray.push( $(this).text() );
			});
			var errorMessage = errorMessageArray.join('<div>');
			var successMessage = $(_srcMsgSelector).text();
			if ('' != errorMessage) {
				_showError(errorMessage);
			} else if ('' != successMessage) {
				_showSuccess(successMessage);
			}
		},
		_showSuccess = function(messageContent) {
			_$msgPanel.jqxNotification({template: NOTY_TYPE_SUCCESS});
			_open(messageContent);
		},
		_showError = function(messageContent) {
			_$msgPanel.jqxNotification({template: NOTY_TYPE_ERROR});
			_open(messageContent);
		},
		_open = function(messageContent) {
			_$msgContainer.html(messageContent);
			_$msgPanel.jqxNotification("open");
		},
		_close = function() {
			_$msgPanel.jqxNotification("close");
		},
		_setOperation= function(operation) {
			_autoOpen = operation.autoOpen||_autoOpen,
			_autoClose = operation.autoClose||_autoClose,
			_animationOpenDelay = operation.animationOpenDelay||_animationOpenDelay,
			_autoCloseDelay = operation.autoCloseDelay||_autoCloseDelay,
			_position = operation.position||_position,
			_opacity = operation.opacity||_opacity,
			_browserBoundsOffset = operation.browserBoundsOffset||_browserBoundsOffset,
			_notifiWidth = operation.width||_notifiWidth;
			
			_initMsgPanel();
		};
	
	return {
		generateMessage: _generateMessage,
		setOperation: function(operation) {
			_setOperation(operation);
		}
	}
});(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(['jquery','jqnotymanager','jqxnotificationmanager'], definition);
	} else {
		context[name] = definition(jQuery, context['jqnotymanager'], context['jqxnotificationmanager']);
	}
})("notyutil", this, function($,jqnotymanager,jqxnotificationmanager) {
	'use strict';

	var DATA_FORM_FRAME = "[data-form]",
		DATA_FORM = "data-form",
		
		_messageManagerObjs = {"jqxnoty":jqxnotificationmanager
							  ,"jqnoty":jqnotymanager},
		
		_messageManagerObj = jqnotymanager,
	
		_getMessageManager= function(selector) {
			_messageManagerObj = _messageManagerObjs[selector]||jqnotymanager;
		},
		
		_clearMessage = function() {
			$("#success_message").html("");
			$("#error_message").html("");
		},
		focusErrWidget = function(dataField){
			var jqxObj = $.data($('#'+dataField)[0], "jqxWidget");
			if(jqxObj != undefined && !jqxObj.disabled){
				if (jqxObj) {
					switch (jqxObj.widgetName) {
						case  "jqxDateTimeInput" :
							$('#'+dataField).jqxDateTimeInput('focus');
							break;
						case  "jqxInput" :
							$('#'+dataField).jqxInput('focus');
							break;
						case "jqxComboBox" :
							$('#'+dataField).jqxComboBox('focus');
							break;
						case "jqxButtonGroup" :
							$('#'+dataField).jqxButtonGroup('focus');
							break;
					}
				}
			}
		},
		showErrMsgForCondition = function(dataField, message){
			var validationpopup = $("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;cursor: pointer;'></div>");
			var validationpopuparrow = $("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");
			validationpopup.html(message);
			validationpopuparrow.addClass('jqx-grid-validation-arrow-up');
			validationpopup.addClass('jqx-grid-validation');
			validationpopup.addClass('jqx-rc-all');
			validationpopup.prependTo($('#'+dataField));
			validationpopuparrow.prependTo($('#'+dataField));
			var topposition = parseInt($('#'+dataField).position().top) + $('#'+dataField).height() + 5;
			validationpopup.css('top', topposition + 'px');
			validationpopuparrow.css('top', topposition - 12);
			var leftposition = parseInt($('#'+dataField).position().left);
			validationpopup.css('left', leftposition);
			validationpopuparrow.css('left', leftposition + 20);
			setTimeout(function(){
				$('.jqx-grid-validation-arrow-up').remove();
				$('.jqx-grid-validation-arrow-down').remove();
				$('.jqx-grid-validation').remove();
			},2000);
		},
		showErrMsg = function(jqxGridObj, argsDataField, argsRowId, message){
			if (jqxGridObj._validationCells[argsDataField]) {
				if (jqxGridObj._validationCells[argsDataField].rowId.indexOf(parseInt(argsRowId)) != -1) {
					var rowIndex = jqxGridObj._validationCells[argsDataField].rowId.indexOf(argsRowId);
					jqxGridObj.selectrow(argsRowId);
					jqxGridObj.ensurerowvisible(argsRowId);

					var editcell = jqxGridObj.getcell(argsRowId,argsDataField);
					var scrollRow = parseInt(jqxGridObj.scrollposition().top/jqxGridObj.rowsheight);
					var tableRowId = argsRowId;
					if (jqxGridObj.pageable) {
						tableRowId = argsRowId%jqxGridObj.pagesize;
						if (row > jqxGridObj.pagesize && scrollRow > 0) scrollRow--;
					}
					tableRowId = tableRowId-scrollRow;
					var cellElement = jqxGridObj.table[0].rows[tableRowId].cells[jqxGridObj.getcolumnindex(argsDataField)];
					var validationpopup = $("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;cursor: pointer;'></div>");
					var validationpopuparrow = $("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");
					validationpopup.html(message);
					validationpopuparrow.addClass(jqxGridObj.toThemeProperty('jqx-grid-validation-arrow-up'));
					validationpopup.addClass(jqxGridObj.toThemeProperty('jqx-grid-validation'));
					validationpopup.addClass(jqxGridObj.toThemeProperty('jqx-rc-all'));
					validationpopup.prependTo(jqxGridObj.table);
					validationpopuparrow.prependTo(jqxGridObj.table);
					var hScrollInstance = jqxGridObj.hScrollInstance;
					var horizontalscrollvalue = hScrollInstance.value;
					var left = parseInt(horizontalscrollvalue);
					var topposition = parseInt($(cellElement).position().top) + jqxGridObj.rowsheight*(tableRowId*1+1) + 5;
					validationpopup.css('top', topposition + 'px');
					validationpopuparrow.css('top', topposition - 11);
					if (topposition >= jqxGridObj._gettableheight()) {
						validationpopuparrow.removeClass(jqxGridObj.toThemeProperty('jqx-grid-validation-arrow-up'));
						validationpopuparrow.addClass(jqxGridObj.toThemeProperty('jqx-grid-validation-arrow-down'));
						topposition = parseInt($(cellElement).position().top) + jqxGridObj.rowsheight*(tableRowId*1-1) - 11;
						validationpopup.css('top', topposition + 'px');
						validationpopuparrow.css('top', topposition + validationpopup.outerHeight() - 9);
					}
					var leftposition = -left + parseInt($(cellElement).position().left);
					validationpopuparrow.css('left', left + leftposition + 30);
					var width = validationpopup.width();
					if (width + leftposition > jqxGridObj.host.width() - 20) {
						var offset = width + leftposition - jqxGridObj.host.width() + 40;
						leftposition -= offset;
					}
					validationpopup.css('left', left + leftposition);
					
					setTimeout(function(){
						$('.jqx-grid-validation-arrow-up').remove();
						$('.jqx-grid-validation-arrow-down').remove();
						$('.jqx-grid-validation').remove();
					},2000);
				}
			}
		},
		_showJqxGridValidationCells = function(gridId, rowId, datafield, message){
			var gridObj = $("#"+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			
			if (!jqxGridObj._validationCells) {
				jqxGridObj._validationCells = {};
			}
			
			if ($("#error_message").html()=="") {
				for (var _dataField in jqxGridObj._validationCells) {
					jqxGridObj._validationCells[_dataField]={};
					jqxGridObj._validationCells[_dataField].rowId = [];
					jqxGridObj._validationCells[_dataField].message = [];
				}
			}
			
			if (!jqxGridObj._validationCells[datafield]) {
				jqxGridObj._validationCells[datafield]={};
				jqxGridObj._validationCells[datafield].rowId = [];
				jqxGridObj._validationCells[datafield].message = [];
			}
			
			jqxGridObj._validationCells[datafield].rowId.push(rowId*1);
			jqxGridObj._validationCells[datafield].message.push(message);
			
			var oldcellclassname = jqxGridObj.getcolumn(datafield).cellclassname;
			var oldclass="";
			
			var errorcellclass = function (row, columnfield, value) {
				var rowId = jqxGridObj.getrowid(row);
				if (oldcellclassname) {
					if (typeof oldcellclassname == "string") {
						oldclass = oldcellclassname;
					} else {
						oldclass = oldcellclassname(row, columnfield, value);
					}
				}
				if(oldclass != null){
					oldclass = oldclass.replace("cell-flag-error","");
				}
				if (jqxGridObj._validationCells[columnfield].rowId.indexOf(rowId) != -1) {
					return 'cell-flag-error ' + oldclass;
				}
				return oldclass;
			}
			
			jqxGridObj.getcolumn(datafield).cellclassname = errorcellclass;
			jqxGridObj.rendergridcontent(false,true);
			showErrMsg(jqxGridObj, datafield, rowId, message);

			gridObj.on('cellbeginedit', function (event) {
				var args = event.args;
				var argsRowId = args.rowindex;
				var argsDataField = args.datafield;
				showErrMsg(jqxGridObj, argsDataField, argsRowId, message);
			});
			
			gridObj.on('cellendedit', function (event) {
				var args = event.args;
				var argsDataField = args.datafield;
				if (jqxGridObj._validationCells[argsDataField]) {
					$('.jqx-grid-validation-arrow-up').remove();
					$('.jqx-grid-validation-arrow-down').remove();
					$('.jqx-grid-validation').remove();
				}
				
			});
		},
		_setJqxGridValidationCells = function(gridId, rowId, datafield, message){
			var gridObj = $("#"+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			
			if (!jqxGridObj._validationCells) {
				jqxGridObj._validationCells = {};
			}
			
			if ($("#error_message").html()=="") {
				for (var _dataField in jqxGridObj._validationCells) {
					jqxGridObj._validationCells[_dataField]={};
					jqxGridObj._validationCells[_dataField].rowId = [];
					jqxGridObj._validationCells[_dataField].message = [];
				}
			}
			
			if (!jqxGridObj._validationCells[datafield]) {
				jqxGridObj._validationCells[datafield]={};
				jqxGridObj._validationCells[datafield].rowId = [];
				jqxGridObj._validationCells[datafield].message = [];
			}
			
			jqxGridObj._validationCells[datafield].rowId.push(rowId*1);
			jqxGridObj._validationCells[datafield].message.push(message);
			
			var oldcellclassname = jqxGridObj.getcolumn(datafield).cellclassname;
			var oldclass="";
			
			var errorcellclass = function (row, columnfield, value) {
				var rowId = jqxGridObj.getrowid(row);
				if (oldcellclassname) {
					if (typeof oldcellclassname == "string") {
						oldclass = oldcellclassname;
					} else {
						oldclass = oldcellclassname(row, columnfield, value);
					}
				}
				if(oldclass != null){
					oldclass = oldclass.replace("cell-flag-error","");
				}
				if (jqxGridObj._validationCells[columnfield].rowId.indexOf(rowId) != -1) {
					return 'cell-flag-error ' + oldclass;
				}
				return oldclass;
			}
			
			jqxGridObj.getcolumn(datafield).cellclassname = errorcellclass;
			jqxGridObj.rendergridcontent(false,true);

			gridObj.on('cellbeginedit', function (event) {
				var args = event.args;
				var argsRowId = args.rowindex;
				var argsDataField = args.datafield;
				if (jqxGridObj._validationCells[argsDataField]) {
					if (jqxGridObj._validationCells[argsDataField].rowId.indexOf(argsRowId) != -1) {
						var rowIndex = jqxGridObj._validationCells[argsDataField].rowId.indexOf(argsRowId);
						var message = jqxGridObj._validationCells[argsDataField].message[rowIndex];
						jqxGridObj.selectrow(argsRowId);
						jqxGridObj.ensurerowvisible(argsRowId);

						var editcell = jqxGridObj.getcell(argsRowId,argsDataField);
						var scrollRow = parseInt(jqxGridObj.scrollposition().top/jqxGridObj.rowsheight);
						var tableRowId = argsRowId;
						if (jqxGridObj.pageable) {
							tableRowId = argsRowId%jqxGridObj.pagesize;
							if (row > jqxGridObj.pagesize && scrollRow > 0) scrollRow--;
						}
						tableRowId = tableRowId-scrollRow;
						var cellElement = jqxGridObj.table[0].rows[tableRowId].cells[jqxGridObj.getcolumnindex(argsDataField)];
						var validationpopup = $("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;cursor: pointer;'></div>");
						var validationpopuparrow = $("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");
						validationpopup.html(message);
						validationpopuparrow.addClass(jqxGridObj.toThemeProperty('jqx-grid-validation-arrow-up'));
						validationpopup.addClass(jqxGridObj.toThemeProperty('jqx-grid-validation'));
						validationpopup.addClass(jqxGridObj.toThemeProperty('jqx-rc-all'));
						validationpopup.prependTo(jqxGridObj.table);
						validationpopuparrow.prependTo(jqxGridObj.table);
						var hScrollInstance = jqxGridObj.hScrollInstance;
						var horizontalscrollvalue = hScrollInstance.value;
						var left = parseInt(horizontalscrollvalue);
						var topposition = parseInt($(cellElement).position().top) + jqxGridObj.rowsheight*(tableRowId*1+1) + 5;
						validationpopup.css('top', topposition + 'px');
						validationpopuparrow.css('top', topposition - 11);
						if (topposition >= jqxGridObj._gettableheight()) {
							validationpopuparrow.removeClass(jqxGridObj.toThemeProperty('jqx-grid-validation-arrow-up'));
							validationpopuparrow.addClass(jqxGridObj.toThemeProperty('jqx-grid-validation-arrow-down'));
							topposition = parseInt($(cellElement).position().top) + jqxGridObj.rowsheight*(tableRowId*1-1) - 11;
							validationpopup.css('top', topposition + 'px');
							validationpopuparrow.css('top', topposition + validationpopup.outerHeight() - 9);
						}
						var leftposition = -left + parseInt($(cellElement).position().left);
						validationpopuparrow.css('left', left + leftposition + 30);
						var width = validationpopup.width();
						if (width + leftposition > jqxGridObj.host.width() - 20) {
							var offset = width + leftposition - jqxGridObj.host.width() + 40;
							leftposition -= offset;
						}
						validationpopup.css('left', left + leftposition);
						
						setTimeout(function(){
							$('.jqx-grid-validation-arrow-up').remove();
							$('.jqx-grid-validation-arrow-down').remove();
							$('.jqx-grid-validation').remove();
						},2000);
					}
				}
			});
			
			gridObj.on('cellendedit', function (event) {
				var args = event.args;
				var argsDataField = args.datafield;
				if (jqxGridObj._validationCells[argsDataField]) {
					$('.jqx-grid-validation-arrow-up').remove();
					$('.jqx-grid-validation-arrow-down').remove();
					$('.jqx-grid-validation').remove();
				}
				
			});
		}
		
	return {
		init:function(selector){
			_getMessageManager(selector);
		},
		
		setOperation:function(operation) {
			_messageManagerObj.setOperation(operation);
		},
		
		showMessage:function(data, msgFlg) {
			_clearMessage();
			if (msgFlg === 'error') {
				var errorLi = $('<li></li>');
				errorLi.html(data);
				$("#error_message").append(errorLi);
			} else {
				$("#success_message").html(data);
			}
			_messageManagerObj.generateMessage();
		},

		showErrForCondition:function(dataField, message) {
			showErrMsgForCondition(dataField, message);
		},

		showSuccessMessage:function(data) {
			_clearMessage();
			var messages = data.messages
			var showMessage="";
			if (messages) {
				for (var i=0,j=messages.length; i<j; i++) {
					showMessage = messages[i].message + " " + showMessage;
				}
			}
			$("#success_message").html(showMessage);
			_messageManagerObj.generateMessage();
		},

		showErrorMessageDirect:function(data) {
			_clearMessage();
			var errorLi = $('<li></li>');
			errorLi.html(data);
			$("#error_message").append(errorLi);
			_messageManagerObj.generateMessage();
		},
		showErrorMsg:function(xhr, parameterJson) {
			_clearMessage();
			var errorInfoJSON = xhr.responseJSON;
			if (xhr.responseText){
				try{
					errorInfoJSON = JSON.parse(xhr.responseText);
				}catch(e){}
			}
			if (errorInfoJSON) {
				var messages = errorInfoJSON.errors
				if (messages) {
					for (var i=0,j=messages.length; i<j; i++) {
						var errorLi = $('<li></li>');
						var args = messages[i].arguments;
						if (args.length>2) {
							var gridId    = args[0];
							var rowId     = args[1];
							var datafield = args[2];
							var errorMsg  = messages[i].code;
							
							_showJqxGridValidationCells(gridId, rowId, datafield, errorMsg);
							_clearMessage();
							errorLi.html(errorMsg);
							$("#error_message").append(errorLi);
							continue;
						} else if(args.length>0){
							//showErrMsgForCondition(args[0], messages[i].code);
							focusErrWidget(args[0]);
							debugger;
							//document.getElementsByClassName('noty_bar noty_type_error').item(0).parentNode.removeChild(document.getElementsByClassName('noty_bar noty_type_error').item(0));
							errorLi.html(messages[i].code);
							$("#error_message").append(errorLi);
						}else {
							$("#"+args).focus();
							_clearMessage();
							errorLi.html(messages[i].code);
							$("#error_message").append(errorLi);
						}
					}
				} else {
					var errorLi = $('<li></li>');
					errorLi.html(eval('('+xhr.responseText+')').message);
					$("#error_message").append(errorLi);
				}
				_messageManagerObj.generateMessage();
			}
		},
		showErrorMessage:function(xhr, parameterJson) {
			_clearMessage();
			var errorInfoJSON = xhr.responseJSON;
			if (xhr.responseText){
				try{
					errorInfoJSON = JSON.parse(xhr.responseText);
				}catch(e){}
			}
			if (errorInfoJSON) {
				var messages = errorInfoJSON.messages
				if (messages) {
					for (var i=0,j=messages.length; i<j; i++) {
						var errorLi = $('<li></li>');
						var errorField = messages[i].field;
						if (errorField.split("[").length>1) {
							var errorGrid;
							var gridRowId;
							var gridCellId = errorField.split(".")[1];
							if (parameterJson) {
								if (parameterJson[errorField.split("[")[0]]) {
									gridRowId = parameterJson[errorField.split("[")[0]][errorField.split("[")[1].split("]")[0]].uid;
								}
							} else {
								gridRowId = errorField.split("[")[1].split("]")[0];
							}
							$(DATA_FORM_FRAME).each(function(){
								if ($(this).attr(DATA_FORM) === errorField.split("[")[0]) {
									errorGrid = $(this);
									return false;
								}
							});
							if (typeof errorGrid === "undefined") return false;
							_setJqxGridValidationCells(errorGrid[0].id, gridRowId, gridCellId, messages[i].message);
							errorLi.html(messages[i].message);
							$("#error_message").append(errorLi);
							continue;
						} else {
							$("#"+errorField).addClass("jqx-validator-error-element");
							errorLi.html(messages[i].message);
							$("#error_message").append(errorLi);
							setTimeout(function(){
								$("#"+errorField).removeClass("jqx-validator-error-element");
							},5000);
						}
					}
				} else {
					var errorLi = $('<li></li>');
					errorLi.html(eval('('+xhr.responseText+')').message);
					$("#error_message").append(errorLi);
				}
				_messageManagerObj.generateMessage();
			}
		},
		
	}
});(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(['jquery', "notyutil", "ajaxQueue"], definition);
	} else {
		context[name] = definition(jQuery, context['notyutil']);
	}
})("ajaxutil", this, function($, notyutil) {
	'use strict';
	
	return {
		doAjaxQueue: function(parameterData, urlStr, doneFun, methodType){
			function readParameterData() {
				var returnValue;
				try {
					returnValue = JSON.parse(parameterData);
				} catch (e) {
					returnValue = null;
				}
				
				return returnValue;
			}
			
			return $.ajaxQueue({
				contentType: 'application/json',
				method: methodType||'post',
				data: parameterData,
				url: urlStr,
				dataType: 'json',
			}).done(function(data, textStatus, xhr, options) {
				if (typeof(doneFun) === "function") {
					doneFun(data, textStatus, xhr, options);
				}
			}).fail(function(xhr, textStatus, errorThrown) {
				var parameterJson = readParameterData();
				notyutil.showErrorMessage(xhr, parameterJson);
			}).always(function(xhr, textStatus) {
			});
		},
		doAjax: function(parameterData, urlStr, doneFun, methodType){
			function readParameterData() {
				var returnValue;
				try {
					returnValue = JSON.parse(parameterData);
				} catch (e) {
					returnValue = null;
				}
				
				return returnValue;
			}
			
			return $.ajax({
				contentType: 'application/json',
				method: methodType||'post',
				data: parameterData,
				url: urlStr,
				dataType: 'json',
			}).done(function(data, textStatus, xhr, options) {
				if (typeof(doneFun) === "function") {
					doneFun(data, textStatus, xhr, options);
				}
			}).fail(function(xhr, textStatus, errorThrown) {
				var parameterJson = readParameterData();
				notyutil.showErrorMessage(xhr, parameterJson);
			}).always(function(xhr, textStatus) {
			});
		}
	}
});(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(["jquery","blockui"],definition);
	} else {
		context[name] = definition(jQuery);
	}
})("loaderutil", this, function($) {
	'use strict';
	
	var _defaultOptions = {
		  blockFlg: true
		, blockElement: null
		, disableElement: null
	}

	var _generalExtend = function(){
		
		if (typeof(loaderOptions) === 'object' ){
			$.extend(_defaultOptions,loaderOptions);
		}
	}
	
	var _findDivTag = function(selector) {
		var selectorElement = selector[0];
		if (selectorElement.tagName === 'DIV') {
			return selector;
		} else {
			return _findDivTag(selector.parent());
		}
	}

	var _removeScreenLoader=function(iframeObj) {
		if (iframeObj) {
			$(".hiddenDiv", iframeObj.contentWindow.document).removeClass("hiddenDiv");
		}
		$(".hiddenDiv").removeClass("hiddenDiv");
		$(".screen_loader", top.window.document).remove();
		
		if (_defaultOptions.blockFlg) {
			$("body", top.window.document).unblock();
		}
	}

	var _createScreenLoader=function(iframeObj){
		var loaderImg = $('<div class="screen-loader"></div>');
		var loaderDiv = $('<div class="screen_loader loader-style"></div>');

		loaderDiv.append(loaderImg);
		loaderDiv.append("Screen Loading…");
		$("body", top.window.document).append(loaderDiv);
		
		if (_defaultOptions.blockFlg) {
			$("body", top.window.document).block({
				message: null
			});
		}
		
		$(".screen_loader", top.window.document).on('click', function(){
			_removeScreenLoader(iframeObj);
		});
	}

	var _removeDataLoader=function(dataOptions){
		
		if (typeof(dataOptions) === 'object' ){
			$.extend(_defaultOptions,dataOptions);
		}
		
		var blocker,blockElement = _defaultOptions.blockElement;
		var disabler, disableElement = _defaultOptions.disableElement;
		
		if ($(blockElement).length === 1 && _defaultOptions.blockFlg) {
			blocker = _findDivTag($(blockElement));
		} else {
			blocker = $('body');
		}
		
		if ($(disableElement).length > 0) {
			disabler = $(disableElement);
			var jqxObj;
			if (jqxObj = $.data(disabler[0], "jqxWidget")) {
				$.jqx.jqxWidgetProxy(jqxObj.widgetName, disabler[0], ["disabled", false]);
			} else {
				disabler.attr("disabled", false);
			}
		}
		
		if (_defaultOptions.blockFlg) {
			blocker.unblock();
		}
		
		$(".data_loader", top.window.document).remove();
	}

	var _createDataLoader=function(dataOptions){
		
		if (typeof(dataOptions) === 'object' ){
			$.extend(_defaultOptions,dataOptions);
		}
		
		var blocker,blockElement = _defaultOptions.blockElement;
		var disabler, disableElement = _defaultOptions.disableElement;
		
		if ($(blockElement).length === 1 && _defaultOptions.blockFlg) {
			blocker = _findDivTag($(blockElement));
			blocker.block({
				message: '<div class="data-loader"></div>',
				centerX:false ,
				css: { border:'0px', backgroundColor: '#fff', opacity: '0.6', width: '20px', height: '20px', left:'5%'},
				overlayCSS: { backgroundColor: '#fff' }
			});
		} else {
			var loaderImg = $('<div class="data-loader"></div>');
			var loaderDiv = $('<div class="data_loader loader-style"></div>');

			loaderDiv.append(loaderImg);
			loaderDiv.append("&nbsp;Data Loading…");
			$("body", top.window.document).append(loaderDiv);
			
			if (_defaultOptions.blockFlg) {
				blocker = $('body');
				blocker.block({
					message:null
				}); 
			}
		}
		
		if ($(disableElement).length === 1) {
			disabler = $(disableElement);
			var jqxObj;
			if (jqxObj = $.data(disabler[0], "jqxWidget")) {
				$.jqx.jqxWidgetProxy(jqxObj.widgetName, disabler[0], ["disabled", true]);
			} else {
				disabler.attr("disabled", true);
			}
		}

		$(".data_loader").on('click', function(){
			_removeDataLoader(dataOptions);
		});
	}
	
	var _iframeScreenLoad=function(iframeObj, urlStr) {
		_generalExtend();
		_createScreenLoader(iframeObj);
		
		var loadTimer = setInterval(function() {
			try {
				var iframeDOM = iframeObj.contentWindow.document;
				if (iframeDOM.URL.indexOf(urlStr) !== -1 && iframeDOM.readyState === "complete") {
					clearInterval(loadTimer);
					setTimeout(function(){
						_removeScreenLoader(iframeObj);
					},0);
				}
			} catch (e){
				clearInterval(loadTimer);
				_removeScreenLoader(iframeObj);
			}
		},0)
	}
	
	var _screenLoad=function() {
		_generalExtend();
		
		Pace.once("start", function() {
			_removeDataLoader();
			_removeScreenLoader();
			_createScreenLoader();
		});
		
		Pace.once("hide", function() {
			_removeScreenLoader();
		});
		
		Pace.restart();
	}
	
	var _dataLoad=function(dataOptions) {
		_generalExtend();
		
		Pace.once("start", function() {
			_removeScreenLoader();
			_removeDataLoader();
			_createDataLoader(dataOptions);
		});
		
		Pace.once("hide", function() {
			_removeDataLoader(dataOptions);
		});
		
		Pace.restart();
	}
	
	var _progressLoad=function() {
		
		Pace.once("hide", function() {
			$(".hiddenDiv").removeClass("hiddenDiv");
		});
		
		Pace.restart();
	}

	return {
		iframeScreenLoad: _iframeScreenLoad,
		screenLoad: _screenLoad,
		dataLoad: _dataLoad,
		progressLoad: _progressLoad
	}
});(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(["jquery"],definition);
	} else {
		context[name] = definition(jQuery);
	}
})("commonutil", this, function($) {
	'use strict';
	
	$(document).ajaxSend(function(e, xhr, options) {
		var csrfHeaderObjs = $("meta[name='_csrf_header']");
		var csrfObjs = $("meta[name='_csrf']");
		if (csrfHeaderObjs.length>0 && csrfObjs.length>0) {
			var header = csrfHeaderObjs.attr('content');
			var token = csrfObjs.attr('content');
			xhr.setRequestHeader(header, token);
		}
	});
 
	String.prototype.ltrim = function() {
		return this.replace(/^\s+/, "");
	}
	String.prototype.rtrim = function() {
		return this.replace(/\s+$/, "");
	}
	//清除空格
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, "");
	}
	String.prototype.isBlank = function() {
		return this.replace(/^\s+|\s+$/g, "")==="";
	}
	//替换全部
	String.prototype.replaceAll = function(s1, s2) {
		return this.replace(new RegExp(s1, "gm"), s2)
	}
	//判断是否以某个字符串开头
	String.prototype.startWith = function (s) {
		return this.indexOf(s) == 0
	}
	//判断是否以某个字符串结束
	String.prototype.endWith = function (s) {
		var d = this.length - s.length;
		return (d >= 0 && this.lastIndexOf(s) == d)
	}
	//拼字符串
	// var a= "I Love {0}, and You Love {1},Where are {0}!";   a.template("You","Me");  　 
	// resutl:I Love You, and You Love Me,Where are You!
	String.prototype.format = function()	{
		var args = arguments;
		return this.replace(/\{(\d+)\}/g,
			function(m,i){
				return args[i];
			});
	}
	
	var DATA_FORM_FRAME = "[data-form]",
		DATA_FORM = "data-form",
		DEFAULT_STANDARD_DATE_FORMAT = 'yyyyMMddHHmmssfff',
		DEFAULT_DATE_FORMAT_MAP = { 'yyyy/MM/dd HH:mm:ss.fff':'yyyyMMddHHmmssfff'
								  , 'yyyy/MM/dd HH:mm:ss':'yyyyMMddHHmmss'
								  , 'yyyy/MM/dd':'yyyyMMdd'
								  , 'yyyy/MM':'yyyyMM'
								  , 'dd':'dd'
								  , 'HH:mm':'HHmm'
								  , 'HH:mm:ss':'HHmmss'
								},
	
	_clearAll = function(paternalId) {
		var validatorObj = $.data($('body')[0], "jqxWidget");
		var hasValidatior = false;
		if (validatorObj && validatorObj.widgetName == "jqxValidator") hasValidatior = true;
		var bodyObjs=[];
		if ($("#"+paternalId).length>0) {
			bodyObjs = $("#"+paternalId).find(DATA_FORM_FRAME);
		} else {
			bodyObjs = $("body").find(DATA_FORM_FRAME);
		}
		
		if (hasValidatior) validatorObj.destroy();
		
		for (var i=0,j=bodyObjs.length; i<j; i++) {
			var jqxObj;
			if (jqxObj = $.data(bodyObjs[i], "jqxWidget")) {
				switch (jqxObj.widgetName) {
					case  "jqxGrid" :
						jqxObj.clear();
						break;
					case "jqxComboBox" :
						jqxObj.val("");
					case  "jqxDropDownList" :
						jqxObj.clearSelection();
						jqxObj.renderSelection();
						break;
					case "jqxCheckBox" :
						jqxObj.val(false);
						break;
					case "jqxRadioButton" :
						jqxObj.val(false);
						break;
					case "jqxButtonGroup" :
						jqxObj.clearSelection();
						break;
					default :
						jqxObj.val("");
						break;
				}
			} else {
				$(bodyObjs[i]).val("");
			}
		}
		
		if (hasValidatior) validatorObj.createInstance();
	},
	
	_valueListDefineFunc = function(funName) {
		
		if(typeof(funName) !=='function'){
			throw new Error("the first params must be a function.");
		}
		var aryParams = [].slice.call(arguments,1);
		var params = [funName].concat(aryParams[0]);  
		return params;
	},
	
	_setButtonGroupValue = function (id) {
		var btnGroupMode = $("#" + id).jqxButtonGroup('mode');
		var btnGroupValue;
		switch (btnGroupMode) {
			case "checkbox" :
				btnGroupValue=[];
				for (var i=1,j=arguments.length;i<j;i++){
					btnGroupValue.push(arguments[i]);
				}
				var selectionButton = $("#" + id).jqxButtonGroup('getSelection');
				var buttonObjs = $("#" + id).find("[role='button']");
				for (var i=0,j=buttonObjs.length;i<j;i++) {
					if (btnGroupValue[i] == $(buttonObjs[i]).val()) {
						if (selectionButton.indexOf(i) == -1) {
							$("#" + id).jqxButtonGroup('setSelection', i);
						}
					} else {
						if (selectionButton.indexOf(i) > -1) {
							$("#" + id).jqxButtonGroup('setSelection', i);
						}
					}
				}
				break;
			case "radio" :
				btnGroupValue=arguments[1];
				var buttonObjs = $("#" + id).find("[role='radio']");
				for (var i=0,j=buttonObjs.length;i<j;i++) {
					if (btnGroupValue == $(buttonObjs[i]).val()) {
						$("#" + id).jqxButtonGroup('setSelection', i);
						break;
					}
				}
				break;
			default :
				break;
		}
	},
	
	_getButtonGroupValue = function (id) {
		var btnGroupMode = $("#" + id).jqxButtonGroup('mode');
		var btnGroupValue="";
		switch (btnGroupMode) {
			case "checkbox" :
				btnGroupValue=[];
				var selectionButton = $("#" + id).jqxButtonGroup('getSelection');
				var buttonObjs = $("#" + id).find("[role='button']");
				for (var i=0,j=buttonObjs.length;i<j;i++) {
					if (selectionButton.indexOf(i) > -1) {
						btnGroupValue.push($(buttonObjs[i]).val());
					} else {
						btnGroupValue.push("");
					}
				}
				break;
			case "radio" :
				var selectionButton = $("#" + id).jqxButtonGroup('getSelection');
				var buttonObjs = $("#" + id).find("[role='radio']");
				btnGroupValue = $(buttonObjs[selectionButton]).val();
				break;
			default :
				break;
		}
		return btnGroupValue;
	},
	
	_setDropDownButtonTreeValue = function (dropDownBtnId,id,name) {
		
		$.data($("#"+dropDownBtnId)[0], "jqxWidget").item.id = id;
		$.data($("#"+dropDownBtnId)[0], "jqxWidget").item.label = name;
		var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + name + '</div>';
		$("#"+dropDownBtnId).jqxDropDownButton('setContent', dropDownContent);
	},
	
	_getDropDownButtonTreeItem = function (dropDownBtnId) {
		
		return $.data($("#"+dropDownBtnId)[0], "jqxWidget").item;
	},
	
	_setRadioButtonValue = function (path, value) {
		var radioAry = document.getElementsByName(path);
		for (var i=0,j=radioAry.length;i<j;i++) {
			if (radioAry[i].value == value.toString()) {
				$(radioAry[i]).jqxRadioButton("checked", true);
				break;
			}
		}
	},
	
	_getRadioButtonValue = function (path) {
		var radioAry = document.getElementsByName(path);
		for (var i=0,j=radioAry.length;i<j;i++) {
			if ($(radioAry[i]).jqxRadioButton("checked")) {
				return radioAry[i].value;
			}
		}
		return null;
	},
	
	_setDisableAreaBySelector = function(selector, disableSign) {
		if (typeof(disableSign) == "undefined") disableSign=true;
		var jqxObj;
		$(selector).find(DATA_FORM_FRAME).each(function(){
			if (jqxObj = $.data($(this)[0], "jqxWidget")) {
				$.jqx.jqxWidgetProxy(jqxObj.widgetName, $(this)[0], ["disabled",disableSign]);
			} else {
				$(this).attr("disabled", disableSign);
			}
		});
	},
	
	_setDateValueFromStandardFormat = function(dateTimeInputId, value) {
		var jQDateTimeInput=$("#"+dateTimeInputId);
		var dateTimeInputObj = $.data(jQDateTimeInput[0], "jqxWidget");
		if (dateTimeInputObj && dateTimeInputObj.widgetName == "jqxDateTimeInput") {
			var displayFormat = jQDateTimeInput.jqxDateTimeInput("formatString");
			var standardFormat = DEFAULT_DATE_FORMAT_MAP[displayFormat]||DEFAULT_STANDARD_DATE_FORMAT;
			jQDateTimeInput.jqxDateTimeInput("formatString", standardFormat);
			dateTimeInputObj.val(value);
			jQDateTimeInput.jqxDateTimeInput("formatString", displayFormat);
		}
	},
	
	_getDateValueToStandardFormat = function(dateTimeInputId) {
		var dateValue="";
		var jQDateTimeInput=$("#"+dateTimeInputId);
		var dateTimeInputObj = $.data(jQDateTimeInput[0], "jqxWidget");
		if (dateTimeInputObj && dateTimeInputObj.widgetName == "jqxDateTimeInput") {
			var displayFormat = jQDateTimeInput.jqxDateTimeInput("formatString");
			var standardFormat = DEFAULT_DATE_FORMAT_MAP[displayFormat]||DEFAULT_STANDARD_DATE_FORMAT;
			jQDateTimeInput.jqxDateTimeInput("formatString", standardFormat);
			dateValue = dateTimeInputObj.val();
			jQDateTimeInput.jqxDateTimeInput("formatString", displayFormat);
		}
		return dateValue;
	},

	_setValue = function (id, value) {
		var obj = $("#" + id);
		var jqxObj;
		if (jqxObj = $.data(obj[0], "jqxWidget")) {
			switch (jqxObj.widgetName) {
				case  "jqxDateTimeInput" :
					_setDateValueFromStandardFormat(id, value);
					break;
				case  "jqxButtonGroup" :
					_setButtonGroupValue(id, value);
					break;
				case  "jqxComboBox" :
					if (jqxObj.multiSelect) {
						$.jqx.jqxWidgetProxy(jqxObj.widgetName, obj[0], ["selectedItems",value]);
						$.jqx.jqxWidgetProxy(jqxObj.widgetName, obj[0], ["doMultiSelect"]);
					} else {
						jqxObj.val(value);
					}
					break;
				default :
					jqxObj.val(value);
					break;
			}
		} else {
			obj.val(value);
		}
	},
	
	_getValue = function (id) {
		var obj = $("#" + id);
		var resultValue = obj.val();
		var jqxObj;
		if (jqxObj = $.data(obj[0], "jqxWidget")) {
			switch (jqxObj.widgetName) {
				case  "jqxDateTimeInput" :
					resultValue=_getDateValueToStandardFormat(id);
					break;
				case  "jqxInput" :
					resultValue = jqxObj.val().label||jqxObj.val();
					break;
				case  "jqxComboBox" :
					if (jqxObj.multiSelect) {
						resultValue = jqxObj.selectedItems;
					}
					break;
				case  "jqxButtonGroup" :
					resultValue = _getButtonGroupValue(id);
					break;
				default :
					resultValue = jqxObj.val();
					break;
			}
		}
		
		return resultValue;
	},
	
	_getJsonFromPaternal = function(paternalId, oldJson, jsonPaternalName) {

		var jsonObj = {};
		var jsonPaternalObj = {};
		var childObjs = $("#"+paternalId).find(DATA_FORM_FRAME);
		for (var i=0,j=childObjs.length; i<j; i++) {
			var childObj = $(childObjs[i]).attr(DATA_FORM)
			var jqxObj;
			var objValue = $(childObjs[i]).val();
			if (jqxObj = $.data(childObjs[i], "jqxWidget")) {
				switch (jqxObj.widgetName) {
					case  "jqxDateTimeInput" :
						objValue=_getDateValueToStandardFormat(childObjs[i].id);
						break;
					case  "jqxInput" :
						objValue = $(childObjs[i]).val().label||$(childObjs[i]).val();
						break;
					case "jqxComboBox" :
						if (jqxObj.multiSelect) {
							objValue = jqxObj.selectedItems;
						}
						break;
					case "jqxButtonGroup" :
						objValue = _getButtonGroupValue(childObjs[i].id);
						break;
					case "jqxDropDownButton" :
						objValue = _getDropDownButtonTreeItem(childObjs[i].id).id;
						break;
					case "jqxRadioButton" :
						if (jsonObj[childObj]) {
							objValue = jsonObj[childObj];
							break;
						}
						
						if($(childObjs[i]).jqxRadioButton('checked')) {
							objValue = $(childObjs[i]).val();
						} else {
							objValue = "";
						}
						break;
					case "jqxCheckBox" :
						objValue = jsonObj[childObj] || [];
						
						if($(childObjs[i]).jqxCheckBox('checked')) {
							objValue.push($(childObjs[i]).val());
						}
						
						if ($('#'+paternalId).find('['+DATA_FORM+'='+childObj+']').length == 1) {
							if (objValue.length == 0) {
								objValue = "";
							}
							if (objValue.length == 1) {
								objValue = objValue[0];
							}
						}
						
						break;
					default :
						break;
				}
			}
			jsonObj[childObj] = objValue;
		}
		
		if (typeof(oldJson) === "string") {
			oldJson = JSON.parse(oldJson);
		}
		
		var newJson = oldJson||{};
		
		if (jsonPaternalName) {
			jsonPaternalObj[jsonPaternalName] = jsonObj;
			$.extend(true, newJson, jsonPaternalObj);
		} else {
			$.extend(true, newJson, jsonObj);
		}
		
		return JSON.stringify(newJson);
	},
	
	_setJsonToPaternal = function(paternalId, jsonObj) {
		
		if (typeof jsonObj === "string") {
			jsonObj = JSON.parse(jsonObj);
		}
		
		if (typeof jsonObj !== 'object') {
			return false;
		}
		
		
		$("#"+paternalId).find(DATA_FORM_FRAME).each(function() {
			
			var dataForm = $(this).attr(DATA_FORM);
			var value = jsonObj[dataForm];
			var jqxObj = $.data(this, "jqxWidget")
			
			switch (jqxObj.widgetName) {
				case  "jqxCheckBox" :
					if (typeof value === "string") {
						if ($(this).val() === value) {
							jqxObj.host.jqxCheckBox('val', true);
						} else {
							jqxObj.host.jqxCheckBox('val', false);
						}
					} else {
						if ($.inArray($(this).val(), value) >= 0) {
							jqxObj.host.jqxCheckBox('val', true);
						} else {
							jqxObj.host.jqxCheckBox('val', false);
						}
					}
					break;
				case  "jqxRadioButton" :
					if (typeof value === "string") {
						if ($(this).val() === value) {
							jqxObj.host.jqxRadioButton('val', true);
						}
					}
					break;
				default :
					_setValue(this.id, value);
					break;
			}
		});
		
		return true;
	}
	
	return {
		valueListDefineFunc: function(funName) {
			var params = [].slice.call(arguments,1);  
			return _valueListDefineFunc(funName,params);
		},
		clearAll:_clearAll,
		setValue:_setValue,
		getValue:_getValue,
		setDateValueFromStandardFormat:_setDateValueFromStandardFormat,
		getDateValueToStandardFormat:_getDateValueToStandardFormat,
		setButtonGroupValue:_setButtonGroupValue,
		getButtonGroupValue:_getButtonGroupValue,
		setRadioButtonValue:_setRadioButtonValue,
		getRadioButtonValue:_getRadioButtonValue,
		getJsonFromPaternal:_getJsonFromPaternal,
		setJsonToPaternal:_setJsonToPaternal,
		setDropDownButtonTreeValue:_setDropDownButtonTreeValue,
		getDropDownButtonTreeItem:_getDropDownButtonTreeItem,
		setDisableAreaBySelector:_setDisableAreaBySelector
	}
});
(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(['jquery', 'notyutil','commonutil','jqxdata'], definition);
	} else {
		context[name] = definition(jQuery, context['notyutil'], context['commonutil']);
	}
})("jqxdatautil", this, function($, notyutil,commonutil) {
	'use strict';
	
	return {
		dataAdapterWithoutUrl: function (source, operation) {
				
			var newSource = $.extend({	datatype: "json",
										contentType: 'application/json',
										type: "POST",
										formatData:function(data) {
											return JSON.stringify(data);
										}
			}, source);
			delete newSource.url;
			delete newSource.data;
			
			return new $.jqx.dataAdapter(newSource, operation);
		},
		
		
		dataAdapter: function (source, operation) {
			
			var dataSource = {
								datatype: "json",
								contentType: 'application/json',
								type: "POST",
								formatData:function(data) {
									return JSON.stringify(data);
								}
							 };
			
			$.extend(dataSource, source);
			
			return new $.jqx.dataAdapter(dataSource, operation);
		},
		
		autoDataAdapter: function (source, operation) {
			var func = source.data;
			var dataSource = {
								datatype: "json",
								contentType: 'application/json',
								type: "POST",
								formatData:function(data) {
									return eval(func);
								}
							 };
			
			$.extend(dataSource, source);
			
			return new $.jqx.dataAdapter(dataSource, operation);
		},
		
		gridDataAdapter: function (gridId, data, initRowStateDataFun) {
			var dataSource = {
								datatype: "json",
								contentType: 'application/json',
								type: "POST",
								formatData:function(data) {
									data.timestamp = (new Date().getTime());
									return JSON.stringify(data);
								}
							 };
			var gridObj = $("#"+gridId);
			var source = gridObj.jqxGrid('_source');
			$.extend(dataSource, source);
			try{
				dataSource.data = eval('('+source.data+')');
				dataSource.data = $.parseJSON(dataSource.data);
				if(typeof(data) != 'undefined' && data!=null ){
					$.extend(dataSource.data, data);
				}
			}catch(e){}
			lockScreen();
			return new $.jqx.dataAdapter(dataSource, {
				loadComplete: function (data) {
					gridObj.jqxGrid('clearselection');
					data = data.data || data;
					gridObj.jqxGrid('source')._source.localdata = data;
					if(gridObj.jqxGrid('pageable')){
						if(typeof(data.size) != 'undefined'){gridObj.jqxGrid('pagesize',data.size);}
						gridObj.jqxGrid('selectrow', 0);
						if(typeof(data.totalPages) != 'undefined'){gridObj.jqxGrid('_pageInfoData').pagescount = data.totalPages;}
						if(typeof(data.number) != 'undefined'){gridObj.jqxGrid('_pageInfoData').pagenum = data.number;}
						if(typeof(data.totalElements) != 'undefined'){gridObj.jqxGrid('_pageInfoData').rowscount = data.totalElements;}
						if(typeof(data.size) != 'undefined'){gridObj.jqxGrid('_pageInfoData').pagesize = data.size;}
						if(gridObj.jqxGrid('sortable')){
							if(typeof(data.sort[0].direction) != 'undefined'){gridObj.jqxGrid('_pageInfoData').sortDirection = data.sort[0].ascending;}
							if(typeof(data.sort[0].property) != 'undefined'){gridObj.jqxGrid('_pageInfoData').sortProperty = data.sort[0].property;}
						}
					}
					if(gridObj.jqxGrid('_pageInfoData').sortFlag){
						gridObj.jqxGrid('updatebounddata','sort');
					}else{
						gridObj.jqxGrid('updatebounddata');
					}
					initRowStateDataFun(gridId);
					if(data.length > 0) {
						gridObj.jqxGrid('selectrow', 0);
						notyutil.showMessage(data.length + ' record retrieved');
					}else {
						notyutil.showMessage('No matched data');
						jqxgridutil.focusFirstWidget();
					}
					unlockScreen();
				},
				loadError: function (jqXHR, status, error) {
					//notyutil.showErrorMessage(eval('('+jqXHR.responseText+')').message);
					unlockScreen();
					notyutil.showErrorMsg(jqXHR,false);
				}
			});
		},

		getDataAdapterBySource: function (gridId,source) {
			var dataSource = {};
			
			var gridObj = $("#"+gridId);
			$.extend(dataSource, source);
			
			return new $.jqx.dataAdapter(dataSource, {
				loadComplete: function (data) {
					data = data.data || data;
					gridObj.jqxGrid('source')._source.localdata = data;
					gridObj.jqxGrid('updatebounddata');
				},
				loadError: function (jqXHR, status, error) {
					notyutil.showErrorMessage(jqXHR)
				},
				beforeSend: function (jqXHR) {
				}
			});
		}
	}
});(function (name,context,definition){
	if (typeof define === "function" && define.amd) {
		define(["jquery"
			  , "ajaxutil"
			  , "jqxdatautil"
			  , "commonutil"
			  , "messageutil"
			  , "jqxlanguageutil"
			  , "jqxgridaggregates"
			  , "jqxgridcolumnsreorder"
			  , "jqxgridcolumnsresize"
			  , "jqxgridedit"
			  , "jqxgridexport"
			  , "jqxgridfilter"
			  , "jqxgridgrouping"
			  , "jqxgridpager"
			  , "jqxgridselection"
			  , "jqxgridsort"
			  , "jqxgridstorage"
			  , "jqxmenu"],definition);
	} else {
		context[name] = definition(jQuery
								 , context['ajaxutil']
								 , context['jqxdatautil']
								 , context['commonutil']
								 , context['messageutil']
								 , context['jqxlanguageutil']);
	}
})("jqxgridutil", this, function($, ajaxutil, jqxdatautil, commonutil, messageutil, jqxlanguageutil) {
	'use strict';

	var ROW_STATE_NEW = '!NEW',
		ROW_STATE_NEW_MODIFY = '!NEWMODIFY',
		ROW_STATE_NOT_MODIFY = '!NOTMODIFY',
		ROW_STATE_DATA_MODIFY = '!DATAMODIFY',
		ROW_STATE_DELETE = '!DELETE',
		ROW_STATE_DISPLAY_DATA_FIELD = '_rowStatDisplay',
		ROW_STATE_IMAG_NEW = "+",
		ROW_STATE_IMAG_MODIFY = "#",
		ROW_STATE_IMAG_DELETE = "-",
		DISPLAY_ROW_STATE_FLG = false,

	_bindAddButton=function(gridId, addBtnId) {
		$("#"+addBtnId).on("click", function (event) {
			_defaultAddRowFun(gridId);
			var gridObj = $("#"+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			var rowscount = gridObj.jqxGrid('getdatainformation').rowscount;
			if (jqxGridObj._griddelbutton) {
				if (rowscount == 0) {
					$("#" + jqxGridObj._griddelbutton).attr("disabled",true);
				} else {
					$("#" + jqxGridObj._griddelbutton).attr("disabled",false);
				}
			}
		});
	},

	_showErrorMsg = function(jqxGridObj, argsDataField, argsRowId){
		if (jqxGridObj._validationCells[argsDataField]) {
			if (jqxGridObj._validationCells[argsDataField].rowId.indexOf(argsRowId) != -1) {
				var rowIndex = jqxGridObj._validationCells[argsDataField].rowId.indexOf(argsRowId);
				var message = jqxGridObj._validationCells[argsDataField].message[rowIndex];
				jqxGridObj.selectrow(argsRowId);
				jqxGridObj.ensurerowvisible(argsRowId);

				var editcell = jqxGridObj.getcell(argsRowId,argsDataField);
				var scrollRow = parseInt(jqxGridObj.scrollposition().top/jqxGridObj.rowsheight);
				var tableRowId = argsRowId;
				if (jqxGridObj.pageable) {
					tableRowId = argsRowId%jqxGridObj.pagesize;
					if (row > jqxGridObj.pagesize && scrollRow > 0) scrollRow--;
				}
				tableRowId = tableRowId-scrollRow;
				var cellElement = jqxGridObj.table[0].rows[tableRowId].cells[jqxGridObj.getcolumnindex(argsDataField)];
				var validationpopup = $("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;cursor: pointer;'></div>");
				var validationpopuparrow = $("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");
				validationpopup.html(message);
				validationpopuparrow.addClass(jqxGridObj.toThemeProperty('jqx-grid-validation-arrow-up'));
				validationpopup.addClass(jqxGridObj.toThemeProperty('jqx-grid-validation'));
				validationpopup.addClass(jqxGridObj.toThemeProperty('jqx-rc-all'));
				validationpopup.prependTo(jqxGridObj.table);
				validationpopuparrow.prependTo(jqxGridObj.table);
				var hScrollInstance = jqxGridObj.hScrollInstance;
				var horizontalscrollvalue = hScrollInstance.value;
				var left = parseInt(horizontalscrollvalue);
				var topposition = parseInt($(cellElement).position().top) + jqxGridObj.rowsheight*(tableRowId*1+1) + 5;
				validationpopup.css('top', topposition + 'px');
				validationpopuparrow.css('top', topposition - 11);
				if (topposition >= jqxGridObj._gettableheight()) {
					validationpopuparrow.removeClass(jqxGridObj.toThemeProperty('jqx-grid-validation-arrow-up'));
					validationpopuparrow.addClass(jqxGridObj.toThemeProperty('jqx-grid-validation-arrow-down'));
					topposition = parseInt($(cellElement).position().top) + jqxGridObj.rowsheight*(tableRowId*1-1) - 11;
					validationpopup.css('top', topposition + 'px');
					validationpopuparrow.css('top', topposition + validationpopup.outerHeight() - 9);
				}
				var leftposition = -left + parseInt($(cellElement).position().left);
				validationpopuparrow.css('left', left + leftposition + 30);
				var width = validationpopup.width();
				if (width + leftposition > jqxGridObj.host.width() - 20) {
					var offset = width + leftposition - jqxGridObj.host.width() + 40;
					leftposition -= offset;
				}
				validationpopup.css('left', left + leftposition);
				
				setTimeout(function(){
					$('.jqx-grid-validation-arrow-up').remove();
					$('.jqx-grid-validation-arrow-down').remove();
					$('.jqx-grid-validation').remove();
				},2000);
			}
		}
	},
	_showJqxGridValidationCells = function(gridId, rowId, datafield, message){
		var gridObj = $("#"+gridId);
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		
		if (!jqxGridObj._validationCells) {
			jqxGridObj._validationCells = {};
		}
		
		if ($("#error_message").html()=="") {
			for (var _dataField in jqxGridObj._validationCells) {
				jqxGridObj._validationCells[_dataField]={};
				jqxGridObj._validationCells[_dataField].rowId = [];
				jqxGridObj._validationCells[_dataField].message = [];
			}
		}
		
		if (!jqxGridObj._validationCells[datafield]) {
			jqxGridObj._validationCells[datafield]={};
			jqxGridObj._validationCells[datafield].rowId = [];
			jqxGridObj._validationCells[datafield].message = [];
		}
		
		jqxGridObj._validationCells[datafield].rowId.push(rowId*1);
		jqxGridObj._validationCells[datafield].message.push(message);
		
		var oldcellclassname = jqxGridObj.getcolumn(datafield).cellclassname;
		var oldclass="";
		
		var errorcellclass = function (row, columnfield, value) {
			var rowId = jqxGridObj.getrowid(row);
			if (oldcellclassname) {
				if (typeof oldcellclassname == "string") {
					oldclass = oldcellclassname;
				} else {
					oldclass = oldcellclassname(row, columnfield, value);
				}
			}
			if(oldclass != null){
				oldclass = oldclass.replace("cell-flag-error","");
			}
			if (jqxGridObj._validationCells[columnfield].rowId.indexOf(rowId) != -1) {
				return 'cell-flag-error ' + oldclass;
			}
			return oldclass;
		}
		
		jqxGridObj.getcolumn(datafield).cellclassname = errorcellclass;
		jqxGridObj.rendergridcontent(false,true);
		_showErrorMsg(jqxGridObj, datafield, rowId);

		gridObj.on('cellbeginedit', function (event) {
			var args = event.args;
			var argsRowId = args.rowindex;
			var argsDataField = args.datafield;
			_showErrorMsg(jqxGridObj, argsDataField, argsRowId);
		});
		
		gridObj.on('cellendedit', function (event) {
			var args = event.args;
			var argsDataField = args.datafield;
			if (jqxGridObj._validationCells[argsDataField]) {
				$('.jqx-grid-validation-arrow-up').remove();
				$('.jqx-grid-validation-arrow-down').remove();
				$('.jqx-grid-validation').remove();
			}
			
		});
	},
	_showErrorMsg = function(xhr, parameterJson) {
		_clearMessage();
		var errorInfoJSON = xhr.responseJSON;
		if (xhr.responseText){
			try{
				errorInfoJSON = JSON.parse(xhr.responseText);
			}catch(e){}
		}
		if (errorInfoJSON) {
			var messages = errorInfoJSON.errors
			if (messages) {
				for (var i=0,j=messages.length; i<j; i++) {
					var args = messages[i].arguments;
					var errorField = messages[i].field;
					if (args.length>2) {
						var gridId    = args[0];
						var rowId     = args[1];
						var datafield = args[2];
						var errorMsg  = messages[i].code;
						
						_showJqxGridValidationCells(gridId, rowId, datafield, errorMsg);
						errorLi.html(errorMsg);
						$("#error_message").append(errorLi);
						continue;
					}else if(args.length>0){
						$("#"+errorField).addClass("jqx-validator-error-element");
						errorLi.html(messages[i].code);
						$("#error_message").append(errorLi);
						setTimeout(function(){
							$("#"+errorField).removeClass("jqx-validator-error-element");
						},5000);
					}else {
						$("#"+args).focus();
						errorLi.html(messages[i].code);
						$("#error_message").append(errorLi);
					}
				}
			} else {
				var errorLi = $('<li></li>');
				errorLi.html(eval('('+xhr.responseText+')').message);
				$("#error_message").append(errorLi);
			}
			_messageManagerObj.generateMessage();
		}
	},

	_defaultAddRowFun=function(gridId,operation) {
		var gridObj = $("#"+gridId);
		var defaultRowPosition = "last";
		if(typeof(operation)!='undefined')
			defaultRowPosition = operation.rowPosition||"last";

		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		var addRow = $.extend(true, null, gridObj.jqxGrid('getrows')[-1]);
		if (jqxGridObj._displayRowStateFlg) {
			addRow[ROW_STATE_DISPLAY_DATA_FIELD] = ROW_STATE_IMAG_NEW;
		}
		gridObj.jqxGrid('beginupdate');
		gridObj.jqxGrid('addrow', jqxGridObj._rowStateData.length, addRow, defaultRowPosition);
		gridObj.jqxGrid('endupdate');
		var displayRowsNum = gridObj.jqxGrid('getdisplayrows');
		var lastRowIndex = displayRowsNum.length-1;
		if (defaultRowPosition=='last') {
			gridObj.jqxGrid('selectrow', lastRowIndex);
			gridObj.jqxGrid('ensurerowvisible',lastRowIndex);
		} else {
			gridObj.jqxGrid('selectrow', 0);
			gridObj.jqxGrid('ensurerowvisible',0);
		}
		_modifyRowState(gridId, addRow, ROW_STATE_NEW);
	},

	_bindInsertButton=function(gridId, insertBtnId) {
		$("#"+insertBtnId).on("click", function (event) {
			_defaultInsertRowFun(gridId);
			var gridObj = $("#"+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			var rowscount = gridObj.jqxGrid('getdatainformation').rowscount;
			if (jqxGridObj._griddelbutton) {
				if (rowscount == 0) {
					$("#" + jqxGridObj._griddelbutton).attr("disabled",true);
				} else {
					$("#" + jqxGridObj._griddelbutton).attr("disabled",false);
				}
			}
		});
	},


	_defaultInsertRowFun=function(gridId,operation) {
		var gridObj = $("#"+gridId);
		var selectedrowindex = gridObj.jqxGrid('getselectedrowindex');
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		var addRow = $.extend(true, {}, gridObj.jqxGrid('getrows')[-1]);
		if (jqxGridObj._displayRowStateFlg) {
			addRow[ROW_STATE_DISPLAY_DATA_FIELD] = ROW_STATE_IMAG_NEW;
		}
		gridObj.jqxGrid('beginupdate');
		gridObj.jqxGrid('addrow', jqxGridObj._rowStateData.length, addRow, selectedrowindex+1);
		gridObj.jqxGrid({ selectedrowindex: selectedrowindex+1});  
		gridObj.jqxGrid('endupdate');
		_modifyRowState(gridId, addRow, ROW_STATE_NEW);
	},

	_bindCopyButton=function(gridId, copyBtnId) {
		$("#"+copyBtnId).on("click", function (event) {
			_defaultCopyRowFun(gridId);
			var gridObj = $("#"+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			var rowscount = gridObj.jqxGrid('getdatainformation').rowscount;
			if (jqxGridObj._griddelbutton) {
				if (rowscount == 0) {
					$("#" + jqxGridObj._griddelbutton).attr("disabled",true);
				} else {
					$("#" + jqxGridObj._griddelbutton).attr("disabled",false);
				}
			}
		});
	},

	_defaultCopyRowFun=function(gridId) {
		var gridObj = $("#"+gridId);
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		var rowscount = gridObj.jqxGrid('getdatainformation').rowscount;
		var selectedrowindex = gridObj.jqxGrid('getselectedrowindex');
		if (selectedrowindex < 0 || selectedrowindex >= rowscount){
			selectedrowindex = 0
		}
		var copyRow = $.extend(true, {}, gridObj.jqxGrid('getrows')[selectedrowindex]);
		copyRow.uid = rowscount;
		if (jqxGridObj._displayRowStateFlg) {
			copyRow[ROW_STATE_DISPLAY_DATA_FIELD] = ROW_STATE_IMAG_NEW;
		}
		gridObj.jqxGrid('beginupdate');
		gridObj.jqxGrid('addrow', jqxGridObj._rowStateData.length, copyRow);
		gridObj.jqxGrid('endupdate');
		_modifyRowState(gridId, copyRow, ROW_STATE_NEW_MODIFY, true);
	},

	_bindDelButton=function(gridId, delBtnId) {
		$("#"+delBtnId).on("click", function (event) {
			_defaultDelRowFun(gridId);
			if ($("#"+gridId).jqxGrid('getdatainformation').rowscount == 0) {
				$("#" + delBtnId).attr("disabled",true);
			} else {
				$("#" + delBtnId).attr("disabled",false);
			}
		});
	},

	_defaultDelRowFun=function(gridId) {
		var gridObj = $("#"+gridId);
		var selectedrowindex = gridObj.jqxGrid('getselectedrowindex');

		_defaultDelRowFunDetail(gridId, selectedrowindex);
	},

	// Add start
	_bindDelMultiButton=function(gridId, delBtnId) {
		$("#" + delBtnId).on("click", function (event) {
			_defalutDelMultiRowFun(gridId, 'available');
			$("#" + delBtnId).attr("disabled",true);
		});
	},

	_defalutDelMultiRowFun=function(gridId, availableId) {
		var gridObj = $("#" + gridId);
		var len = gridObj.jqxGrid('getdatainformation').rowscount;
		for (var i = len-1; i >= 0; i--) {
			var available = gridObj.jqxGrid("getcellvalue", i, availableId);
			if (available) {
				_defaultDelRowFunDetail(gridId, i);
			}
		}
	},
	// Add end

	_defaultDelRowFunDetail=function(gridId, selectedrowindex) {
		var gridObj = $("#"+gridId);
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		var rowscount = gridObj.jqxGrid('getdatainformation').rowscount;
		if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
			var id = gridObj.jqxGrid('getrowid', selectedrowindex);
			if (id != null) {
				var delRow = gridObj.jqxGrid('getrowdata', selectedrowindex);
				if (jqxGridObj._displayRowStateFlg && delRow[ROW_STATE_DISPLAY_DATA_FIELD] != ROW_STATE_IMAG_NEW) {
					gridObj.jqxGrid('setcellvalue', selectedrowindex, ROW_STATE_DISPLAY_DATA_FIELD, ROW_STATE_IMAG_DELETE);
					for (var i=0,j=jqxGridObj.columns.records.length; i<j; i++) {
						var gridColumn = jqxGridObj.columns.records[i];
						if (gridColumn.cellbeginedit) {
							var cellbeginedit = gridColumn.cellbeginedit;
							var disableCellEdit = function (row, datafield, columntype, value) {
								if (gridObj.jqxGrid('getcellvalue', row, ROW_STATE_DISPLAY_DATA_FIELD) == ROW_STATE_IMAG_DELETE)
									return false;
								cellbeginedit(row, datafield, columntype, value);
							}
							gridColumn.cellbeginedit = disableCellEdit;
						} else {
							var disableCellEdit = function (row, datafield, columntype, value) {
								if (gridObj.jqxGrid('getcellvalue', row, ROW_STATE_DISPLAY_DATA_FIELD) == ROW_STATE_IMAG_DELETE)
									return false;
							}
							gridColumn.cellbeginedit = disableCellEdit;
						}
					}
				} else {
					gridObj.jqxGrid('beginupdate');
					gridObj.jqxGrid('deleterow', id);
					gridObj.jqxGrid('endupdate');
					var maxRowIndex=rowscount-1;
					maxRowIndex--;
					if (selectedrowindex >= maxRowIndex) {
						gridObj.jqxGrid('selectrow', maxRowIndex);
						gridObj.jqxGrid('ensurerowvisible', maxRowIndex);
					} else {
						gridObj.jqxGrid('selectrow', selectedrowindex);
						gridObj.jqxGrid('ensurerowvisible', selectedrowindex);
					}
				}
				_modifyRowState(gridId, delRow, ROW_STATE_DELETE);
			}
		}
	},

	_initRowStateData=function(gridId) {
		var gridObj = $("#"+gridId);
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		jqxGridObj._rowStateData = [];
		var rowscount = gridObj.jqxGrid('getdatainformation').rowscount;
		for (var i=0; i<rowscount; i++) {
			var rowObj = {};
			rowObj._rowstate = ROW_STATE_NOT_MODIFY;
			rowObj.data = gridObj.jqxGrid("getrowdata", i);
			jqxGridObj._rowStateData.push(rowObj);
			if(jqxGridObj._displayRowStateFlg){
				gridObj.jqxGrid('setcellvalue', i, ROW_STATE_DISPLAY_DATA_FIELD, '');
			}
		}

		jqxGridObj._modifyCells = {};
		jqxGridObj._validationCells = {};

		if (jqxGridObj._griddelmultibutton) {
			$("#" + jqxGridObj._griddelmultibutton).attr("disabled",true);
		}
		if (jqxGridObj._griddelbutton) {
			if (rowscount == 0) {
				$("#" + jqxGridObj._griddelbutton).attr("disabled",true);
			} else {
				$("#" + jqxGridObj._griddelbutton).attr("disabled",false);
			}
		}
	},

	_modifyRowState=function(gridId, rowData, rowState, copyFlg) {
		var gridObj = $("#"+gridId);
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		var rowStateData = jqxGridObj._rowStateData;
		var existFlg = false;
		for (var i=0, j=rowStateData.length; i<j; i++) {
			if (copyFlg) break;
			if (rowData == rowStateData[i].data){
				if (rowStateData[i]._rowstate.indexOf("NEW") == -1) {
					rowStateData[i]._rowstate = rowState;
				} else {
					if (ROW_STATE_DELETE == rowState) {
						rowStateData.splice(i,1);
					}
					if (ROW_STATE_DATA_MODIFY == rowState) {
						rowStateData[i]._rowstate = ROW_STATE_NEW_MODIFY;
					}
				}
				existFlg = true;
				break;
			}
		}
		if (!existFlg) {
			var rowObj = {}
			rowObj._rowstate = rowState;
			rowObj.data = rowData;
			rowStateData.push(rowObj);
		}
	},

/*	_getRowState=function(gridId, rowId) {
		if(rowId == null){
			return null;
		}else{
			var gridObj = $("#"+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			var rowStateData = jqxGridObj._rowStateData;
			if(rowStateData!=undefined && rowId!=undefined && rowStateData[rowId]!=undefined)
				return rowStateData[rowId]._rowstate;
			else 
				return "!NEWMODIFY"; 
		}
	},*/
	_getRowState=function(gridId, rowId) {
		var gridObj = $("#"+gridId);
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		var rowStateData = jqxGridObj._rowStateData;
		//return rowStateData[rowId]._rowstate;
		if(rowStateData!=undefined && rowId!=undefined && rowStateData[rowId]!=undefined)
			return rowStateData[rowId]._rowstate;
		else 
			return "!NEWMODIFY"; 
	},
	_getCellClass=function(row, columnfield, value, data) {
		if(data != undefined){
			var rowStatus = data.rowStatus;
			if (rowStatus == 'EXISTING') {
				return 'jqx-grid-cell-uneditable';
	        }
	        else return 'jqx-grid-cell-edit';
		}
		return null;
	},

	_modifyGridState=function(gridId, rowState) {
		var gridObj = $("#"+gridId);
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		jqxGridObj._gridState = rowState;
	},

	_getGridState=function(gridId) {
		var gridObj = $("#"+gridId);
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		return jqxGridObj._gridState;
	},

	_doSearchPageData=function(gridId,oldPageNumber,oldPageSize,newPageSize,sortDirection,sortProperty,sortFlag) {

		var gridObj = $('#'+gridId);

		try{
			var data_jsonArray = {};
			data_jsonArray.pageNumber = oldPageNumber;
			data_jsonArray.pageSize = newPageSize;
			data_jsonArray.oldPageSize = oldPageSize;
			data_jsonArray.selectRowIndex = gridObj.jqxGrid('getselectedrowindexes')[0];
			data_jsonArray.sortDirection = sortDirection;
			data_jsonArray.sortProperty = sortProperty;
			data_jsonArray.sortFlag = sortFlag;
			var gridDataAdapter = jqxdatautil.gridDataAdapter(gridId ,data_jsonArray ,_initRowStateData);
			gridDataAdapter.dataBind();
		}catch(e){}

	},

	_doSortSearchPageData=function(gridId,pageInfo) {

		var gridObj = $('#'+gridId);

		try{
			var data_jsonArray = {};
			data_jsonArray.pageNumber = pageInfo.pagenum;
			data_jsonArray.pageSize = pageInfo.pagesize;
			data_jsonArray.oldPageSize = pageInfo.pagesize;
			data_jsonArray.sortDirection = pageInfo.sortDirection;
			data_jsonArray.sortProperty = pageInfo.sortProperty;
			data_jsonArray.sortFlag = pageInfo.sortFlag;
			var gridDataAdapter = jqxdatautil.gridDataAdapter(gridId ,data_jsonArray ,_initRowStateData);
			gridDataAdapter.dataBind();
		}catch(e){}

	},

	_customsortfunc = function (column, direction) {
		var pageInfoData = $("#"+this._source.gridId).jqxGrid('_pageInfoData');

		if (direction == 'ascending') direction = true;
		if (direction == 'descending') direction = false;

		pageInfoData.sortDirection = direction;
		pageInfoData.sortProperty = column;
		pageInfoData.sortFlag = true;
		if(direction==null){
			pageInfoData.sortFlag = false;
		}

		_doSortSearchPageData(this._source.gridId,pageInfoData);
	},

	_pagerrenderer=function(){
		var gridId = this.element.id;
		var gridObj = $('#'+gridId);
		var datainfo = gridObj.jqxGrid('getdatainformation');
		var pageInfoData = gridObj.jqxGrid('_pageInfoData');
		var paginginfo = datainfo.paginginformation;
		var o = gridObj.jqxGrid('pagesizeoptions');

		var rightBtnObj = $('<div style="padding: 0px; margin-top: 0px; border:0px !important; background-color:#F5F5F5; margin-right: 3px; height: 20px; width: 27px; float: right; cursor: pointer;" '+
							' type="button" title="next" role="button" '+
							' class="jqx-rc-all jqx-rc-all-bootstrap jqx-button jqx-button-bootstrap jqx-widget jqx-widget-bootstrap jqx-fill-state-normal jqx-fill-state-normal-bootstrap" '+
							' aria-disabled="false">'+
							'	<div style="margin-left: 6px; width: 15px; height: 20px;" '+
							'	 class="jqx-icon-arrow-right jqx-icon-arrow-right-bootstrap">'+
							'   </div>'+
							'</div>');
		var leftBtnObj = $('<div style="padding: 0px; margin-top: 0px; margin-right: 3px; border:0px !important; background-color:#F5F5F5; height: 20px; width: 27px; float: right; cursor: pointer;" '+
						   ' type="button" title="previous" role="button" '+
						   ' class="jqx-rc-all jqx-rc-all-bootstrap jqx-button jqx-button-bootstrap jqx-widget jqx-widget-bootstrap jqx-fill-state-normal jqx-fill-state-normal-bootstrap" '+
						   ' aria-disabled="false">'+
						   ' 	<div style="margin-left: 6px; width: 15px; height: 20px;" class="jqx-icon-arrow-left jqx-icon-arrow-left-bootstrap"></div>'+
						   '</div>');
		rightBtnObj.click(function () {
			if(pageInfoData.pagenum+1>=pageInfoData.pagescount){
				return ;
			}
			_doSearchPageData(gridId,pageInfoData.pagenum+1,pageInfoData.pagesize,pageInfoData.pagesize,pageInfoData.sortDirection,pageInfoData.sortProperty,pageInfoData.sortFlag);
		});
		leftBtnObj.click(function () {
			if(pageInfoData.pagenum-1<0){
				return ;
			}
			_doSearchPageData(gridId,pageInfoData.pagenum-1,pageInfoData.pagesize,pageInfoData.pagesize,pageInfoData.sortDirection,pageInfoData.sortProperty,pageInfoData.sortFlag);
		});

		// update buttons states.
		var handleStates = function (event, button, className, add) {
			button.on(event, function () {
				if (add == true) {
					button.find('div').addClass(className);
				}
				else button.find('div').removeClass(className);
			});
		}

		handleStates('mousedown', rightBtnObj, 'jqx-icon-arrow-right-selected-' + "bootstrap", true);
		handleStates('mouseup', rightBtnObj, 'jqx-icon-arrow-right-selected-' + "bootstrap", false);
		handleStates('mousedown', leftBtnObj, 'jqx-icon-arrow-left-selected-' + "bootstrap", true);
		handleStates('mouseup', leftBtnObj, 'jqx-icon-arrow-left-selected-' + "bootstrap", false);

		handleStates('mouseenter', rightBtnObj, 'jqx-icon-arrow-right-hover-' + "bootstrap", true);
		handleStates('mouseleave', rightBtnObj, 'jqx-icon-arrow-right-hover-' + "bootstrap", false);
		handleStates('mouseenter', leftBtnObj, 'jqx-icon-arrow-left-hover-' + "bootstrap", true);
		handleStates('mouseleave', leftBtnObj, 'jqx-icon-arrow-left-hover-' + "bootstrap", false);

		var pageInfoObjId = gridId + '-pageInfoTextDiv';
		var pageInfoObj = $('<div id='+pageInfoObjId+' style="margin-right: 7px; float: right;">'+
							 (1 + pageInfoData.pagenum * pageInfoData.pagesize) + "-" + Math.min(pageInfoData.rowscount, (pageInfoData.pagenum + 1) * pageInfoData.pagesize) + gridObj.jqxGrid("gridlocalization").pagerrangestring + pageInfoData.rowscount +
							'</div>');

		var iIdx = 0;
		if(pageInfoData.pagesize > 0){
			iIdx = $.inArray((pageInfoData.pagesize+''), o);
			if(iIdx<0){
				o.splice(0,0,(pageInfoData.pagesize+''));
			}
		}
		var drawDownListObjId = gridId + '-pagerlist';
		var dropdownlistWrappergridpagerId = gridId + '-wrappergridpagerlist';
		var dropdownlistArrowgridpagerId = gridId + '-arrowgridpagerlist';
		var dropdownlistContentgridpagerId = gridId + '-contentgridpagerlist';
		var drawDownListObj = $('<div style="margin-top: 0px; margin-right: 7px; float: right; display: block; width: 39px; height: 20px;" id='+drawDownListObjId+
								' role="combobox" aria-autocomplete="both" aria-readonly="false" '+
								' class="jqx-widget jqx-widget-bootstrap jqx-dropdownlist-state-normal jqx-dropdownlist-state-normal-bootstrap jqx-rc-all jqx-rc-all-bootstrap jqx-fill-state-normal jqx-fill-state-normal-bootstrap" '+
								' aria-owns="listBoxgridpagerlistgrid" aria-haspopup="true" aria-expanded="false" aria-activedescendant="listitem1innerListBoxgridpagerlistgrid">'+
									'<div style="background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;">'+
										'<div style="overflow: hidden; outline: none; background-color: transparent; border: none; float: left; width:100%; height: 100%; position: relative;" '+
										' id='+dropdownlistWrappergridpagerId+'>'+
											'<div style="outline: medium none; background-color: transparent; border: medium none; float: left; position: relative; '+
											' margin-top: 2px; margin-bottom: 2px; width: auto; height: 20px; left: 0px; top: 0px;" unselectable="on" id='+dropdownlistContentgridpagerId +
											' class="jqx-dropdownlist-content jqx-dropdownlist-content-bootstrap jqx-disableselect jqx-disableselect-bootstrap">10'+
											'</div>'+
											'<div style="background-color: transparent; border: medium none; float: right; position: relative; width: 19px; height: 20px;" unselectable="on" '+
											' id='+dropdownlistArrowgridpagerId+'>'+
											'	<div unselectable="on" class="jqx-icon-arrow-down jqx-icon-arrow-down-bootstrap jqx-icon jqx-icon-bootstrap"></div>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<input type="hidden" value="10">'+
								'</div>');
		var drawDownLabelObj = $('<div style="margin-right: 7px; float: right; display: block;">'+gridObj.jqxGrid("gridlocalization").pagershowrowsstring+'</div>');
		if(!gridObj._showpagesize){
			drawDownLabelObj.css('display','none');
			drawDownListObj.css('display','none');
		}
		drawDownListObj.jqxDropDownList({rtl: this.rtl,disabled: this.disabled,source: o,enableBrowserBoundsDetection: true,keyboardSelection: false,autoDropDownHeight: true,width: "auto",height: 20 });
		if(pageInfoData.pagesize > 0){
			iIdx = $.inArray((pageInfoData.pagesize+''), o);
		}
		drawDownListObj.jqxDropDownList({selectedIndex: iIdx});
		var r = this.that;
		this.pagershowrowscombo = drawDownListObj;
		drawDownListObj.select(function(w) {
			if (w.args) {
				if (r.vScrollInstance) {
					r.vScrollInstance.setPosition(0)
				}
				if (r.editcell != null && r.endcelledit) {
					r.endcelledit(r.editcell.row, r.editcell.column, true, false)
				}
				var u = w.args.index;
				var x = r.dataview.pagenum * r.dataview.pagesize;
				var v = o[u];
				var y = r.pagesize;
				r.pagesize = parseInt(v);
				if (isNaN(r.pagesize)) {
					r.pagesize = 10
				}
				if (v >= 100) {
					r.pagershowrowscombo.jqxDropDownList({width: "auto"})
				} else {
					r.pagershowrowscombo.jqxDropDownList({width: 44})
				}
				r.dataview.pagesize = r.pagesize;
				var i = Math.floor(x / r.dataview.pagesize);
				r.prerenderrequired = true;
				r._requiresupdate = true;
				r._raiseEvent(10, {pagenum: i,oldpagesize: y,pagesize: r.dataview.pagesize});
				_doSearchPageData(gridId,pageInfoData.pagenum,pageInfoData.pagesize,parseInt(v),pageInfoData.sortDirection,pageInfoData.sortProperty,pageInfoData.sortFlag);
				if (r.autoheight && r._updatesizeonwindowresize) {
					r._updatesize(true);
					setTimeout(function() {
						r._updatesize(true)
					}, 500)
				}
			}
		});

		var jqxgridPageInputId = gridId + '-jqxgridPageInput';
		var inputObj = $('<div style="margin-right: 12px; width: 27px; height: 20px; float: right; display: block;">'+
						 ' <input type="text" id='+jqxgridPageInputId+' style="margin-top: 0px; text-align: right; height:20px; width: 27px;" '+
						 ' class="jqx-input jqx-input-bootstrap jqx-widget-content jqx-widget-content-bootstrap jqx-grid-pager-input jqx-grid-pager-input-bootstrap jqx-rc-all jqx-rc-all-bootstrap">'+
						 '</div>');
		var inputLabelObj = $('<div style="float: right; margin-right: 7px; display: block;">'+gridObj.jqxGrid("gridlocalization").pagergotopagestring+'</div>');
		inputObj.find("input").val(pageInfoData.pagenum + 1);
		inputObj.find("input").keydown(function(i) {
			if (i.keyCode >= 65 && i.keyCode <= 90) {
				return false
			}
			if (i.keyCode == "13") {
				var u = inputObj.find("input").val();
				u = parseInt(u);
				if (!isNaN(u)) {

					if(u>pageInfoData.pagescount || u<0){
						return ;
					}
					_doSearchPageData(gridId,u - 1,pageInfoData.pagesize,pageInfoData.pagesize,pageInfoData.sortDirection,pageInfoData.sortProperty,pageInfoData.sortFlag);
				}
				return false
			}
		});
		inputObj.find("input").change(function() {
			var i = inputObj.find("input").val();
			i = parseInt(i);
			if (!isNaN(i)) {

				if(i>pageInfoData.pagescount || i<0){
					return ;
				}
				_doSearchPageData(gridId,i - 1,pageInfoData.pagesize,pageInfoData.pagesize,pageInfoData.sortDirection,pageInfoData.sortProperty,pageInfoData.sortFlag);
			}
		});

		var element = $('<div style="line-height: 20px; width: 100%; height: 100%; position: relative;top: -3px;"></div>');
		rightBtnObj.appendTo(element);
		leftBtnObj.appendTo(element);
		pageInfoObj.appendTo(element);
		drawDownListObj.appendTo(element);
		drawDownLabelObj.appendTo(element);
		inputObj.appendTo(element);
		inputLabelObj.appendTo(element);
		return element;
	},

	_checkBoxCell = function(gridId,_datafield){
		var gridObj = $("#"+gridId);
		return {
					text: '', datafield: _datafield, columntype: 'checkbox', width: 50, cellsalign: 'center',
					align: 'center', checkboxes: true, menu: false, sortable: false,
					renderer: function () {
						var marginLeft = (this.width/2-10) + "px"
						return '<div style="margin-left: '+marginLeft+'; margin-top: 5px;"></div>';
					},
					rendered: function (element) {
						var checkbox = $(element).last();
						$(checkbox).jqxCheckBox({ width:5 });
						$(checkbox).on('change', function (event) {
							var checked = event.args.checked;
							if (checked == null) return;
							gridObj.jqxGrid('beginupdate');
							// update cells values.
							var startrow = 0;
							var endrow = gridObj.jqxGrid("getrows").length;
							for (var i = 0; i < endrow; i++) {
								var boundindex = gridObj.jqxGrid('getrowboundindex', i);
								gridObj.jqxGrid('setcellvalue', boundindex, _datafield, checked);
							}
							gridObj.jqxGrid('endupdate');
						});
						return true;
					}
			}
	},

	_parseColumns = function(gridId,columns){
		if (typeof(columns) == 'undefined') {
			return
		}
		for(var i=0;i<columns.length;i++){
			var cellObj = columns[i];
			if(cellObj.columntype == 'withoutLabelCheckbox'){
				columns.splice(i,1,_checkBoxCell(gridId,cellObj.datafield));
			}else if(cellObj.columntype == 'datetimeinput'){
				columns[i].cellsformat = columns[i].cellsformat || CONST_SYSTEM_DATE_FORMAT;
				columns[i].align = columns[i].align || 'center';
				columns[i].editable = columns[i].editable || true;

			}else if(cellObj.columntype == 'valuelist'){
				columns[i].columntype = 'text';
				if(columns[i].editable){
					columns[i].columntype = 'custom';
					if(typeof(columns[i].valuelistbuttonclick)=='undefined' || !(columns[i].valuelistbuttonclick instanceof Array)){
						throw new Error("valuelistbuttonclick is error.");
						return;
					}
					var _valueListBtnClick = columns[i].valuelistbuttonclick[0];
					var _valueListParams = [].slice.call(columns[i].valuelistbuttonclick,1);
					var colDatafiled = columns[i].datafield;
					var getBandFunc = function(param_obj,func_obj,celdatafiled){
						this.createEditorFunc=function(row, cellvalue, editor, celltext, cellwidth, cellheight){
							var btnObj =$('<div style="height: 100%; width: 23px; left: '+(cellwidth-22)+'px;" class="jqx-position-absolute jqx-action-button '+
									  'jqx-action-button-bootstrap jqx-fill-state-normal jqx-fill-state-normal-bootstrap jqx-rc-r jqx-rc-r-bootstrap">'+
									  '<div class="jqx-icon jqx-icon-bootstrap jqx-icon-search jqx-icon-calendar-bootstrap jqx-grid-column-valuelistbutton"></div></div>');
							btnObj.on('mouseenter', function () {
									$(this).addClass('jqx-grid-column-menubutton-mouseenter');
							});
							btnObj.on('mouseleave', function () {
								$(this).removeClass('jqx-grid-column-menubutton-mouseenter');
							});
							btnObj.addClass('jqx-'+celdatafiled+'-valuelist-button');
							btnObj.on('click', function () {
								var params = [].slice.call(param_obj,0);
								params.push(editor);
								func_obj.apply(this,params);
							});

							var editObj =$('<input style="padding-left: 3px; padding-right: 3px; width: '+(cellwidth-23)+'px; left: 0px; top: 0px; margin-top: 4px; '+
									   'text-align: left;" class="jqx-position-absolute jqx-reset jqx-reset-bootstrap jqx-clear jqx-clear-bootstrap '+
									   'jqx-input-content jqx-input-content-bootstrap jqx-widget-content jqx-widget-content-bootstrap jqx-rc-all '+
									   'jqx-rc-all-bootstrap" id="inputdatetimeeditorgridstartDate" autocomplete="off" type="textarea" placeholder="">');
							editObj.val(celltext);
							editObj.addClass('jqx-'+celdatafiled+'-valuelist-editor');

							editor.attr('class','jqx-widget jqx-widget-bootstrap jqx-datetimeinput jqx-datetimeinput-bootstrap '+
										'jqx-input jqx-input-bootstrap jqx-overflow-hidden jqx-overflow-hidden-bootstrap jqx-rc-all '+
										'jqx-rc-all-bootstrap jqx-reset jqx-reset-bootstrap jqx-clear jqx-clear-bootstrap jqx-widget-content '+
										'jqx-widget-content-bootstrap');
							var divObj = $('<div class="jqx-max-size jqx-position-relative">');
							divObj.append(editObj).append(btnObj);
							editor.append(divObj);
						}
					}


					columns[i].createeditor = new getBandFunc(_valueListParams,_valueListBtnClick,colDatafiled).createEditorFunc;

					columns[i].geteditorvalue = function (row, cellvalue, editor) {
						return editor.find('input').val();
					};
				}
			}
		}

		return columns;
	},

	_getsourcefiled = function (gridId,datafield) {
		var sourcefiled = null;
		var gridObj = $('#'+gridId);
		if (gridObj.jqxGrid('_source').datafields) {
			$.each(gridObj.jqxGrid('_source').datafields, function () {
				if (this.name == datafield) {
					sourcefiled = this;
				}
			});
		}
		return sourcefiled;
	},

	_converDateColValue = function (rowdata,colName,colMetaFormat) {
		for(var i=0;i<rowdata.length;i++){
			(rowdata[i])[colName] = $.jqx.formatDate((rowdata[i])[colName], colMetaFormat);
		}
		return rowdata;
	},

	_removeDelRowData = function(rowData){
		var newRowData = [];
		for(var i=0;i<rowData.length;i++){
			if(rowData[i]._rowstate != "!DELETE"){
				newRowData.push(rowData[i].data);
			}
		}
		return newRowData;
	}

	// Convert value from "date" type -> original type "String"
	var defaultDateStringColumnConvertor = function(oldValue, colMetaFormat) {
		if (oldValue==null) oldValue="";
		return $.jqx.formatDate(oldValue, colMetaFormat);
	}

	// Add start
	var defalutOption = function() {
		return {
			  width: "99%"
			, height: "100%"
			, sortable: true
			, altrows: true
			, editable: true
			, enabletooltips: true
			, columnsresize: true
			, localizestrings: {emptydatastring: ' '}
		};
	}

	var _cellclassreadonly = function (row, datafield, value, rowdata) {
			return 'jqxgrid-readonly';
	}

	var _defalutColumnsOption = function() {
		return {
			  text: ' '
			, align:'center'
			, cellsalign: 'left'
		};
	}

	var _defalutEditorDropDownListOption = function() {
		return {
			placeHolder: ' '
			, height: '24px'
			, autoDropDownHeight : true
		};
	}

	var _createColumns = function(specificOpt, opt){
		return $.extend(true
				, _defalutColumnsOption()
				, $.extend (true, specificOpt, opt));
	}

	var _getEssentialMark = function(required) {
		return (required == true ? "<font color='#ff0000'>(!)</font>" : "");
	}
	var _getVagueMark = function(vague) {
		return (vague == true ?"<font color='#ff0000'>(*)</font>" : "");
	}

	var _valueListEditor = function(row, cellvalue, editor, celltext, width, height) {
		var selectedrowindex = row;
		var id			   = this.datafield;
		var editCellValue	= cellvalue.yfc_trim();

		var btnId			= 'valueListBtn' + id;
		var textId		   = 'valueListText'+ id;
		var textMaxLangth	= '';
		var textWidth		= (width != null ? width : this.width - 30);

		$('#' + textId).val("");
		$('#' + textId).val(editCellValue);

		var element = '<div style="margin: 1px;">'
			+ '<input type="text"  maxlength="' + textMaxLangth + '" style="width:' + textWidth +'px; height:1.8em; left: 0px; top: 0px; margin-top: 0px; border: 0px solid #FFFFFF ;" id="' + textId + '" value="' + editCellValue + '"/>'
			+ '<input type="button" style="font-size: 1em; padding: 1px 5px; border-style: none; background-color: darkgray; color: dimgray; " '
			+ 'onClick="buttonclick(event)" class="gridButton" id="' + btnId + '" value="..."/>'
			+ '</div>';

		editor.append(element);
	}

	var _retrieveCodeValue = function(parameterData, cvopenmethod, retrieveDone) {
		var url = contextPath + "/codevalue/" + cvopenmethod + ".json";
		ajaxutil.doRetrieve(parameterData, urlStr, retrieveDone);
	}

	// Utility
	var _setValue = function(gridId, rowid, id, value) {
		$("#" + gridId).jqxGrid('setcellvalue', rowid, id, value);
	}
	var _setValueClear = function(gridId, rowid, id) {
		$("#" + gridId).jqxGrid('setcellvalue', rowid, id, '');
	}
	var _getValue = function(gridId, rowid, id) {
		return $("#" + gridId).jqxGrid('getcellvalue', rowid, id);
	}
	var _getEditorValue = function (row, cellvalue, editor) {
		return editor.find('input').val();
	}
	// Add end

	return {
		init: function(gridId, operation) {
			var gridObj = $("#"+gridId);

			if (operation.griddelmultibutton) {
				_bindDelMultiButton(gridId, operation.griddelmultibutton);
				operation.columns.splice(0, 0, this.createColumnsRowCheckbox({delrowbtn:operation.griddelmultibutton}));
			}

			if (operation.displayrowstate) {
				operation.columns.splice(0, 0, {text: 'ST', datafield: ROW_STATE_DISPLAY_DATA_FIELD, width: 25 , cellsAlign: 'center', editable: false});
				DISPLAY_ROW_STATE_FLG = true;
			}

			operation.columns = _parseColumns(gridId,operation.columns);

			if(operation.pageable && operation.pagermode == 'custom'){
				operation.source['sort'] = _customsortfunc;
			}

			operation.source.gridId = gridId;

			var loadsoruce = $.extend(true,{},operation.source);

			operation = $.extend(true, defalutOption(), operation);
			operation = $.extend(true, operation, { source:jqxdatautil.dataAdapterWithoutUrl(operation.source)});

			var jqxgridOperation = $.extend(true, {}, operation);

			delete jqxgridOperation.griddelmultibutton;
			delete jqxgridOperation.displayrowstate;
			delete jqxgridOperation.localizestrings;
			delete jqxgridOperation.gridaddbutton;
			delete jqxgridOperation.gridinsertbutton;
			delete jqxgridOperation.gridcopybutton;
			delete jqxgridOperation.griddelbutton;

			gridObj.jqxGrid(jqxgridOperation);

			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			jqxGridObj._source = loadsoruce;
			jqxGridObj._gridState = ROW_STATE_NOT_MODIFY;

			var _pageInfoData = {
					'rowscount' :0,
					'sortinformation' :'',
					'sortcolumn' :0,
					'sortdirection' :0,
					'paginginformation' :0,
					'pagenum' :0,
					'pagesize' :operation.pagesize,
					'pagescount' :0,
					'sortDirection':'',
					'sortProperty':'',
					'sortFlag':false
			};
			jqxGridObj._pageInfoData = _pageInfoData;
			jqxGridObj._showpagesize = operation.showpagesize || false;

			if (operation.showstatusbar) {
				gridObj.jqxGrid("statusbar").append($("#"+operation.gridstatusbar));
			}

			if (operation.gridaddbutton) {
				_bindAddButton(gridId, operation.gridaddbutton);
			}

			if (operation.gridinsertbutton) {
				_bindInsertButton(gridId, operation.gridinsertbutton);
			}

			if (operation.gridcopybutton) {
				_bindCopyButton(gridId, operation.gridcopybutton);
			}

			if (operation.griddelbutton) {
				_bindDelButton(gridId, operation.griddelbutton);
				jqxGridObj._griddelbutton = operation.griddelbutton;
			}

			if (operation.griddelmultibutton) {
				jqxGridObj._griddelmultibutton = operation.griddelmultibutton;
			}

			gridObj.jqxGrid('localizestrings', jqxlanguageutil.grid);

			if (operation.localizestrings) {
				gridObj.jqxGrid('localizestrings', operation.localizestrings);
			}

			if(operation.pagermode == 'custom'){
				gridObj.jqxGrid('pagerrenderer', _pagerrenderer);
			}

			if (DISPLAY_ROW_STATE_FLG) {
				var jqxGridObj = $.data(gridObj[0], "jqxWidget");
				jqxGridObj._displayRowStateFlg = true;
			}

			_initRowStateData(gridId);

			gridObj.on('cellendedit', function (event) {
				var args = event.args;
				var argsOldValue = "";
				var argsValue = "";
				if (args.oldvalue) {
					argsOldValue = args.oldvalue.value||args.oldvalue;
				}
				if (args.value) {
					argsValue = args.value.value||args.value;
				}
				if (argsOldValue.toString() != argsValue.toString()) {
					var rowIndex = args.rowindex;
					var rowdata = args.owner.getrowdata(rowIndex);
					if (jqxGridObj._displayRowStateFlg && rowdata[ROW_STATE_DISPLAY_DATA_FIELD] != ROW_STATE_IMAG_NEW) {
						gridObj.jqxGrid('setcellvalue', rowIndex, ROW_STATE_DISPLAY_DATA_FIELD, ROW_STATE_IMAG_MODIFY);
					}
					_modifyRowState(gridId, rowdata, ROW_STATE_DATA_MODIFY);
				}

				var argsRowIndex = args.rowindex;
				var argsRowId = jqxGridObj.getrowid(argsRowIndex);
				var argsDataField = args.datafield;
				var localRecords = jqxGridObj.source._source.localdata||[];
				var cacheValue = "";
				if (localRecords[argsRowIndex]) {
					cacheValue = localRecords[argsRowIndex][argsDataField]||"";
				}

				if (!jqxGridObj._modifyCells) {
					jqxGridObj._modifyCells = {};
				}

				if (!jqxGridObj._modifyCells[argsDataField]){
					jqxGridObj._modifyCells[argsDataField]={};
					jqxGridObj._modifyCells[argsDataField].rowId = [];
				}

				var argsFormatValue = argsValue.toString();
				if(args.columntype == "datetimeinput"){
					var sourceFieldFormat = _getsourcefiled(gridId,argsDataField).format;
					if(sourceFieldFormat){
						argsFormatValue = $.jqx.formatDate(argsValue, sourceFieldFormat);
					}
				}

				if (cacheValue.toString() != argsFormatValue) {
					if (jqxGridObj._modifyCells[argsDataField].rowId.indexOf(argsRowId) == -1){
						jqxGridObj._modifyCells[argsDataField].rowId.push(argsRowId);
					}
				} else {
					if (jqxGridObj._modifyCells[argsDataField].rowId.indexOf(argsRowId) != -1){
						var rowIndexOf = jqxGridObj._modifyCells[argsDataField].rowId.indexOf(argsRowId);
						jqxGridObj._modifyCells[argsDataField].rowId.splice(rowIndexOf,1);
					}
				}

				var oldcellclassname = jqxGridObj.getcolumn(argsDataField).cellclassname;
				var oldclass="";

				var modifycellclass = function (row, columnfield, value, data) {

					var rowId = jqxGridObj.getrowid(row);

					if (oldcellclassname) {
						if (typeof oldcellclassname == "string") {
							oldclass = oldcellclassname;
						} else {
							oldclass = oldcellclassname(row, columnfield, value, data);
						}
					}

					if(oldclass != null){
						oldclass = oldclass.replace("cell-flag-error","");
					}
					if (jqxGridObj._validationCells
					 && jqxGridObj._validationCells[columnfield]
					 && jqxGridObj._validationCells[columnfield].rowId
					 && jqxGridObj._validationCells[columnfield].rowId.indexOf(row) != -1) {
						return 'cell-flag-error ' + oldclass;
					}

					if(oldclass != null){
						oldclass = oldclass.replace("cell-flag-modify","");
					}
					if (jqxGridObj._modifyCells[columnfield] && jqxGridObj._modifyCells[columnfield].rowId.indexOf(rowId) != -1) {
						return 'cell-flag-modify ' + oldclass;
					}

					return oldclass;
				}
				jqxGridObj.getcolumn(argsDataField).cellclassname = modifycellclass;
				jqxGridObj.rendergridcontent(false,true);
			});

			gridObj.on("columnresized", function (event){
				// event arguments.
				var args = event.args;
				var newWidth = args.newwidth;
				var columnDataField = args.datafield;

				var editorWidth = (newWidth-2-23)+'px';
				var btnLeft = (newWidth-2-22)+'px';
				$(this).find('.jqx-'+columnDataField+'-valuelist-editor').css('width',editorWidth);
				$(this).find('.jqx-'+columnDataField+'-valuelist-button').css('left',btnLeft);
			});

			if(operation.pagermode == 'custom'){
				gridObj.on('pagechanged', function (event) {
					var args = event.args;
					var pagenum = args.pagenum;
					if(pagenum==0) return;
					var datainfo = gridObj.jqxGrid('getdatainformation');
					var paginginfo = datainfo.paginginformation;
					$('#'+pageInfoObjId).text(1 + pageInfoData.pagenum * pageInfoData.pagesize + "-" + Math.min(pageInfoData.rowscount, (pageInfoData.pagenum + 1) * pageInfoData.pagesize) + ' of ' + pageInfoData.rowscount);
					inputObj.find("input").val(pageInfoData.pagenum + 1);
				});
			}

			return {
				retrieve: function() {
					gridObj.jqxGrid('_pageInfoData').sortFlag = false;
					var data_jsonArray = {};
					data_jsonArray.pageSize = gridObj.jqxGrid('pagesize');
					var gridDataAdapter = jqxdatautil.gridDataAdapter(gridId, data_jsonArray, _initRowStateData);
					gridDataAdapter.dataBind();
					return this;
				}
			};
		},


		reBindData:function(gridId, dataSource) {
			var gridObj = $("#"+gridId);
			gridObj.jqxGrid('source')._source.localdata = dataSource;
			gridObj.jqxGrid('updatebounddata');
			_initRowStateData(gridId);
		},

		doTransformRow: function(row, rowTransFormerFuns) {
			var rowData = $.extend(true,{},row);

			for(var i=0; i<rowTransFormerFuns.length; i++) {
				var rowTransFormerFun = rowTransFormerFuns[i];
				if($.isFunction(rowTransFormerFun.colConvertorFun)) {
					rowData[rowTransFormerFun.colName] = rowTransFormerFun.colConvertorFun.call(rowData, rowData[rowTransFormerFun.colName], rowTransFormerFun.colFormat,rowTransFormerFun.colName);
				}else{
					switch (rowTransFormerFun.colConvertorFun){
						case 'YmcDate':
							rowData[rowTransFormerFun.colName] = defaultDateStringColumnConvertor(rowData[rowTransFormerFun.colName], rowTransFormerFun.colFormat);
							break;
					}
				}
			}

			return rowData;
		},

		getModifyData:function(gridId,columnConvertorAry) {
			var gridObj = $("#"+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			var rowStateDataAry = jqxGridObj._rowStateData;
			var modifyDataAry = [];

			if(typeof(columnConvertorAry)=='undefined'){columnConvertorAry=[];}
			var defaultConvertorCheck = function(columnName,columnConvertorAry){
				for(var i=0;i<columnConvertorAry.length;i++){
					if(columnConvertorAry[i].colName == columnName){
						return true;
					}
				}
				return false;
			}

			if (gridObj.jqxGrid('_source').datafields) {
				$.each(gridObj.jqxGrid('_source').datafields, function () {
					if(this.type=='date' && this.format && !defaultConvertorCheck(this.name,columnConvertorAry)){
						var columnConvertor = {};
						columnConvertor['colName'] = this.name;
						columnConvertor['colFormat'] = this.format;
						columnConvertor['colConvertorFun'] = 'YmcDate';
						columnConvertorAry.push(columnConvertor);
					}
				});
			}

			for (var i=0, j=rowStateDataAry.length; i<j; i++) {
				switch (rowStateDataAry[i]._rowstate) {
					case ROW_STATE_NEW_MODIFY:
					case ROW_STATE_DATA_MODIFY:
					case ROW_STATE_DELETE:
						var rowData = this.doTransformRow(rowStateDataAry[i].data,
														  columnConvertorAry
														 );
						rowData._rowstate = rowStateDataAry[i]._rowstate;
						modifyDataAry.push(rowData);
					case ROW_STATE_NOT_MODIFY:
					case ROW_STATE_NEW:
						continue;
				}
			}
			if (jqxGridObj._displayRowStateFlg) {
				for (var i=0, j=modifyDataAry.length; i<j; i++) {
					delete modifyDataAry[i][ROW_STATE_DISPLAY_DATA_FIELD];
				}
			}
			return modifyDataAry;
		},

		getDataByRowId:function(gridId,rowIdAry) {
			var gridObj = $("#"+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			var rowStateDataAry = jqxGridObj._rowStateData;
			var dataAry = [];
			for (var i=0, j=rowIdAry.length; i<j; i++) {
				var rowId = rowIdAry[i];
				switch (rowStateDataAry[rowId]._rowstate) {
				case ROW_STATE_NEW_MODIFY:
				case ROW_STATE_DATA_MODIFY:
				case ROW_STATE_DELETE:
					var rowData = rowStateDataAry[rowId].data;
					rowData._rowstate = rowStateDataAry[rowId]._rowstate;
					dataAry.push(rowData);
				case ROW_STATE_NOT_MODIFY:
				case ROW_STATE_NEW:
					continue;
				}
			}
			if (jqxGridObj._displayRowStateFlg) {
				for (var i=0, j=dataAry.length; i<j; i++) {
					delete dataAry[i][ROW_STATE_DISPLAY_DATA_FIELD];
				}
			}
			return dataAry;
		},

		getAllData:function(gridId) {
			var gridObj = $("#"+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			var rowStateDataAry = jqxGridObj._rowStateData;
			var dataAry = [];
			for (var i=0, j=rowStateDataAry.length; i<j; i++) {
				var rowData = rowStateDataAry[i].data;
				rowData._rowstate = rowStateDataAry[i]._rowstate;
				dataAry.push(rowData);
			}
			if (jqxGridObj._displayRowStateFlg) {
				for (var i=0, j=dataAry.length; i<j; i++) {
					delete dataAry[i][ROW_STATE_DISPLAY_DATA_FIELD];
				}
			}
			return dataAry;
		},

		defaultAddRowFun:function(gridId,operation){
			_defaultAddRowFun(gridId,operation);
		},

		defaultInsertRowFun:function(gridId,operation){
			_defaultInsertRowFun(gridId,operation);
		},

		defaultCopyRowFun:function(gridId){
			_defaultCopyRowFun(gridId);
		},

		defaultDelRowFun:function(gridId){
			_defaultDelRowFun(gridId);
		},

		setValidationCells:function(gridId, rowId, datafield, message){
			_setValidationCells(gridId, rowId, datafield, message);
		},

		clearGridRowState:function(gridId){
			var gridObj = $('#'+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");

			_initRowStateData(gridId);

			$('.cell-flag-modify').removeClass('cell-flag-modify');
			$('.cell-flag-error').removeClass('cell-flag-error');
		},

		reBindLocaldata:function(gridId){
			var gridObj = $('#'+gridId);
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			var rowStateData = jqxGridObj._rowStateData;
			var recordAry = _removeDelRowData(rowStateData);
			jqxGridObj.source._source.localdata = [];
			if(recordAry && recordAry.length > 0){
				var firstRecord = recordAry[0];
				for(var datafield in firstRecord){
					var sourcefiled = _getsourcefiled(gridId,datafield);
					if(sourcefiled && sourcefiled.type=='date' && sourcefiled.format){
						_converDateColValue(recordAry,sourcefiled.name,sourcefiled.format);
					}
				}
				jqxGridObj.source._source.localdata = recordAry;
			}
			gridObj.jqxGrid('updatebounddata');
		},

		getsourcefiled :function(gridId,datafield){
			_getsourcefiled(gridId,datafield);
		},

		modifyRowStateToDelete:function(gridId, rowData){
			_modifyRowState(gridId, rowData, ROW_STATE_DELETE);
		},

		modifyRowStateToDataModify:function(gridId, rowData){
			_modifyRowState(gridId, rowData, ROW_STATE_DATA_MODIFY);
		},

		modifyRowStateToNotModify:function(gridId, rowData){
			_modifyRowState(gridId, rowData, ROW_STATE_NOT_MODIFY);
		},

		modifyRowStateToNew:function(gridId, rowData){
			_modifyRowState(gridId, rowData, ROW_STATE_NEW);
		},

		modifyRowStateToNewModify:function(gridId, rowData){
			_modifyRowState(gridId, rowData, ROW_STATE_NEW_MODIFY);
		},

		modifyRowState:function(gridId, rowData, rowState){
			_modifyRowState(gridId, rowData, rowState);
		},

		modifyGridStateToDataModify:function(gridId){
			_modifyGridState(gridId, ROW_STATE_DATA_MODIFY);
		},

		modifyGridStateToNotModify:function(gridId){
			_modifyGridState(gridId, ROW_STATE_NOT_MODIFY);
		},

		getRowState:function(gridId, rowId){
			return _getRowState(gridId, rowId);
		},

		getCellClass:function(row, columnfield, value, data){
			return _getCellClass(row, columnfield, value, data);
		},

		getGridState:function(gridId){
			return _getGridState(gridId);
		},

		setCellEditable:function(gridId, rowId){
			var state = _getRowState(gridId, rowId);
			if(state != '!NEW' && state != '!NEWMODIFY'){
				return false
			}
		},

		focusFirstWidget:function() {
			var DATA_FORM_FRAME = "[data-form]";
			var DATA_FORM = "data-form";
			var childObjs = $("#searchConditionsPanel").find(DATA_FORM_FRAME);
			for (var i=0,j=childObjs.length; i<j; i++) {
				var childObj = $(childObjs[0]).attr(DATA_FORM);
				var jqxObj = $.data(childObjs[0], "jqxWidget");
				if(jqxObj != undefined && !jqxObj.disabled){
					if (jqxObj) {
						switch (jqxObj.widgetName) {
							case  "jqxDateTimeInput" :
								$("#" + childObjs[0].id).jqxDateTimeInput('focus');
								break;
							case  "jqxInput" :
								$("#" + childObjs[0].id).jqxInput('focus');
								break;
							case "jqxComboBox" :
								$("#" + childObjs[0].id).jqxComboBox('focus');
								break;
							case "jqxButtonGroup" :
								$("#" + childObjs[0].id).jqxButtonGroup('focus');
								break;
						}
						break;
					}
				}
			}
		}

		// Add start
		// Group
		, createColumnsGroup:function(opt) {
			opt['text'] = _getEssentialMark(opt['required']) + messageutil.prop(opt['text']) + _getVagueMark(opt['vague']);
			var specificOpt = {
					  align:'center'
					, text: ' '
					, name: ' '
			};
			return $.extend (true, specificOpt, opt);
		}
		// Hidden
		, createColumnsHidden:function(opt){
			var specificOpt = {
				hidden:true
			};
			return _createColumns(specificOpt, opt);
		}

		// Text
		, createColumnsText:function(opt){
			opt['text'] = _getEssentialMark(opt['required']) + messageutil.prop(opt['text']) + _getVagueMark(opt['vague']);
			var specificOpt = {
			};

			var codevalue		 = opt['codevalue'];
			var cvcodeobjary	  = opt['cvcodeobjary']
			var cvcontainerobjary = opt['cvcontainerobjary']
			var cvfieldstrary	 = opt['cvfieldstrary']
			var cvopenmethod	  = opt['cvopenmethod']

			// Codevalue is on
			if (codevalue) {
				specificOpt['cellendedit']
				= function (row, datafield, columntype, oldvalue, newvalue) {
					if (oldvalue != newvalue) {
						var gridId = this.owner.element.id;
						var selectedrowindex = row;
						var parameterData = {};
						var cvcodes = cvcodeobjary.split(',');  // Split connma
						for (var i = 0, len = cvcodes.length; i < len; i++) {
							if (datafield === cvcodes[i]) {
								parameterData[cvcodes[i]] = newvalue;
							} else {
								parameterData[cvcodes[i]] = $('#' + gridId).jqxGrid('getcellvalue', row, cvcodes[i]);
							}
						}

						var retrieveDone = function(data, textStatus, xhr, options) {
							var cvcontainers = cvcontainerobjary.split(',');  // Split connma
							var cvfields	 = cvfieldstrary.split(',');	  // Split connma

							for (var i = 0, len = cvcontainers.length; i < len; i++) {
								_setValue(gridId, selectedrowindex, cvcontainers[i], data[cvfields[i]]);
							}

						};

						_retrieveCodeValue(JSON.stringify(parameterData), cvopenmethod, retrieveDone);
					}
				};
			}

			return _createColumns(specificOpt, opt);
		}

		// Text(Readonly)
		, createColumnsTextReadonly:function(opt){
			opt['text'] = _getEssentialMark(opt['required']) + messageutil.prop(opt['text']) + _getVagueMark(opt['vague']);
			var specificOpt = {
				  editable: false
				, cellclassname: _cellclassreadonly
			};
			return _createColumns(specificOpt, opt);
		}

		// DropDownList
		, createColumnsDropDownList:function(opt, editorOpt){
			opt['text'] = _getEssentialMark(opt['required']) + messageutil.prop(opt['text']) + _getVagueMark(opt['vague']);
			var specificOpt = {
				  columntype: 'dropdownlist'
				, autoDropDownHeight: true
				, createeditor: function (row, value, editor){
					  editor.jqxDropDownList(
						  $.extend (true, _defalutEditorDropDownListOption(), editorOpt)
					  );
				  }
			};
			return _createColumns(specificOpt, opt);
		}

		// Text(ValueList)
		, createColumnsValueList:function(opt){
			var vlopenmethod = opt['vlopenmethod'] + "OpenValueList";
			opt['text'] = _getEssentialMark(opt['required']) + messageutil.prop(opt['text']) + _getVagueMark(opt['vague']);

			var specificOpt = {
				  columntype: 'custom'
				, initeditor: function(row, cellvalue, editor, celltext, width, height) {
					var selectedrowindex = row;
					var id			   = this.datafield;
					cellvalue=cellvalue||"";
					var editCellValue	= cellvalue.yfc_trim();

					var gridId		   = this.owner.element.id;
					var btnId			= 'valueListBtn' + id;
					var textId		   = 'valueListText'+ id;
					var textMaxLangth	= '';
					var textWidth		= (width != null ? width : this.width - 22);

					$('#' + textId).val("");
					$('#' + textId).val(editCellValue);

					var element = '<div style="margin: 1px;">'
						+ '<input type="text"  maxlength="' + textMaxLangth + '" style="width:' + textWidth +'px; height:1.8em; left: 0px; top: 0px; margin-top: 0px; border: 0px solid #FFFFFF ;" id="' + textId + '" value="' + editCellValue + '"/>'
						+ '<input type="button" style="font-size: 1em; padding: 1px 5px; border-style: none; background-color: darkgray; color: dimgray;" class="gridButton" id="' + btnId + '" value="..." />'
						+ '</div>';

					editor.append(element);

					$("#" + btnId).bind("click", function(event) {
						var parentselectedrowId = $('#' + gridId).jqxGrid('getselectedrowindex');
					   	$("#" + gridId).jqxGrid('endcelledit', parentselectedrowId, id , false);

					   	// Call value list window
					   	window[vlopenmethod](parentselectedrowId);
					});

				}
				, geteditorvalue: _getEditorValue
			};

			var codevalue		 = opt['codevalue'];
			var cvcodeobjary	  = opt['cvcodeobjary']
			var cvcontainerobjary = opt['cvcontainerobjary']
			var cvfieldstrary	 = opt['cvfieldstrary']
			var cvopenmethod	  = opt['cvopenmethod']

			// Codevalue is on
			if (codevalue) {
				specificOpt['cellendedit']
					= function (row, datafield, columntype, oldvalue, newvalue) {
						if (oldvalue != newvalue) {
							var gridId = this.owner.element.id;
							var selectedrowindex = row;
							var parameterData = {};
							var cvcodes = cvcodeobjary.split(',');  // Split connma
							for (var i = 0, len = cvcodes.length; i < len; i++) {
								if (datafield === cvcodes[i]) {
									parameterData[cvcodes[i]] = newvalue;
								} else {
									parameterData[cvcodes[i]] = $('#' + gridId).jqxGrid('getcellvalue', row, cvcodes[i]);
								}
							}

							var retrieveDone = function(data, textStatus, xhr, options) {
								var cvcontainers = cvcontainerobjary.split(',');  // Split connma
								var cvfields	 = cvfieldstrary.split(',');	  // Split connma

								for (var i = 0, len = cvcontainers.length; i < len; i++) {
									_setValue(gridId, selectedrowindex, cvcontainers[i], data[cvfields[i]]);
								}

							};

							_retrieveCodeValue(JSON.stringify(parameterData), cvopenmethod, retrieveDone);
						}
					};
			}

			return _createColumns(specificOpt, opt);
		}

		// Text(Row Checkbox)
		, createColumnsRowCheckbox:function(opt){
			var delRowId = opt['delrowbtn'];
			var specificOpt = {
				  columntype: 'checkbox'
				, datafield: 'available'
				, width:"2%"
				, checkboxcolumn: true
				, sortable: false
				, resizable: false
				, renderer: function () {
					  var marginLeft = (this.width/2-10) + "px";
					  return '<div id="titleAvailable" style="margin-left: '+ marginLeft + '; margin-top: 5px;"></div>';
				  }
				, rendered: function (element) {
					  var gridId = this.owner.element.id;
					  var checkbox = $(element).last();
					  $(checkbox).jqxCheckBox({});
					  $(checkbox).on('change', function (event) {
						  var checked = event.args.checked;
						  if (checked == null) return;
						  var startrow = 0;
						  var endrow = $("#" + gridId).jqxGrid("getrows").length;
						  if(!checked || endrow == 0){
							  $("#" + delRowId).attr("disabled",true);
						  } else {
							  $("#" + delRowId).attr("disabled",false);
						  }
						  $("#" + gridId).jqxGrid('beginupdate');
						  // update cells values.
						  for (var i = 0; i < endrow; i++) {
							  var boundindex = $("#grid").jqxGrid('getrowboundindex', i);
							  $("#" + gridId).jqxGrid('setcellvalue', boundindex, 'available', event.args.checked);
						  }
						  $("#" + gridId).jqxGrid('endupdate');
					  });
					  return true;
				  }
				, cellendedit: function (row, datafield, columntype, oldvalue, newvalue) {
					var gridId = this.owner.element.id;
					$("#" + delRowId).attr("disabled",true);
					var len = $("#" + gridId).jqxGrid('getdatainformation').rowscount;
					for (var i = 0; i < len; i++) {
						var available = $("#" + gridId).jqxGrid("getcellvalue", i, "available");
						if(available){
							$("#" + delRowId).attr("disabled",false);
							break;
						}
					}
				}
			};
			return _createColumns(specificOpt, opt);
		}

		// Text(No)
		, createColumnsNo:function(opt){
			opt['text'] = _getEssentialMark(opt['required']) + messageutil.prop(opt['text']) + _getVagueMark(opt['vague']);
			var specificOpt = {
				   editable: false
				,  groupable: false
				, draggable: false
				, resizable: false
				, columntype: 'number'
				, cellclassname: _cellclassreadonly
				, cellsrenderer: function (row, column, value) {
					  return "<div style='margin:4px;'>" + (value + 1) + "</div>";
				  }
			};
			return _createColumns(specificOpt, opt);
		}

		// Utility
		, setValue:function(gridId, rowid, id, value) {
			_setValue(gridId, rowid, id, value);
		}
		, setValueClear:function(gridId, rowid, id) {
			_setValueClear(gridId, rowid, id);
		}
		, getValue:function(gridId, rowid, id) {
			return _getValue(gridId, rowid, id)
		}
		, getEditorValue:function (row, cellvalue, editor) {
			return _getEditorValue(row, cellvalue, editor);
		}
		// Add end

		,clearOnVlaueListClose:function(dropdownbtnId,gridId){
			if(typeof(gridId)=='undefined'){
				commonutil.clearAll('dropDownButtonPopup'+dropdownbtnId);
				return;
			}
			commonutil.clearAll('dropDownButtonPopup'+dropdownbtnId);
			var pageInfoObjId = '#'+ gridId + '-pageInfoTextDiv';
			$(pageInfoObjId).html('0-0 / 0');

			$("#"+gridId).jqxGrid('_pageInfoData').pagenum = 0;
			$("#"+gridId).jqxGrid('_pageInfoData').pagescount = 0;

			var jqxgridPageInputId = '#' + gridId + '-jqxgridPageInput';
			$(jqxgridPageInputId).val('1');
		}
	}
});