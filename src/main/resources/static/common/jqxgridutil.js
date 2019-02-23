(function (name,context,definition){
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
	
	_defaultAddRowFun=function(gridId,operation) {
		var gridObj = $("#"+gridId);
		var defaultRowPosition = "last";
		if(typeof(operation)!='undefined')
			defaultRowPosition = operation.rowPosition||"last";
		
		var jqxGridObj = $.data(gridObj[0], "jqxWidget");
		var addRow = $.extend(true, {}, gridObj.jqxGrid('getrows')[-1]);
		if (jqxGridObj._displayRowStateFlg) {
			addRow[ROW_STATE_DISPLAY_DATA_FIELD] = ROW_STATE_IMAG_NEW;
		}
		gridObj.jqxGrid('addrow', null, addRow, defaultRowPosition);
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
		gridObj.jqxGrid('addrow', null, copyRow);
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
					gridObj.jqxGrid('deleterow', id);
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
					function getBandFunc(param_obj,func_obj,celdatafiled){
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

			// Modify start
			operation = $.extend(true, defalutOption(), operation);
			// Modify end
			
			gridObj.jqxGrid({ source:jqxdatautil.dataAdapterWithoutUrl(operation.source)
							 // enables, or, disables, the, grid.
							 , disabled:operation.disabled||false
							 // sets, the, width.
							 , width:operation.width||600
							 // sets, the, height.
							 , height:operation.height||400
							 // sets, the, pager's, height.
							 , pagerheight:operation.pagerheight||28
							 // sets, the, group, header's, height.
							 , groupsheaderheight:operation.groupsheaderheight||34
							 // sets, the, default, page, size.
							 , pagesize:operation.pagesize||10
							 // sets, the, available, page, sizes.
							 , pagesizeoptions:operation.pagesizeoptions||['5', '10', '20','50','100']
							 // sets, the, rows, height.
							 , rowsheight:operation.rowsheight||25
							 // sets, the, columns, height.
							 , columnsheight:operation.columnsheight||25
							 // sets, the, columns, height.
							 , filterrowheight:operation.filterrowheight||31
							 // sets, the, group, indent, size., This, size, is, used, when, the, grid, is, grouped.
							 , groupindentwidth:operation.groupindentwidth||30
							 // enables, or, disables, row, details.
							 , rowdetails:operation.rowdetails||false
							 // indents, the, row's, details, with, the, sum, of, the, grouping, columns, and, row, details, column, indents.
							 , enablerowdetailsindent:operation.enablerowdetailsindent||true
							 // enables, or, disables, the, built-in, mouse-wheel, behavior.
							 , enablemousewheel:operation.enablemousewheel||true
							 // renders, the, row, details.
							 , initrowdetails:operation.initrowdetails||null
							 // updates, the, row, details, layout.
							 , layoutrowdetails:operation.layoutrowdetails||null
							 // enables, or, disables, editing.
							 , editable:operation.editable||false
							 // sets, the, edit, mode., -, click, dblclick, selectedcell, selectedrow, or, programmatic.
							 , editmode:operation.editmode||'selectedcell'
							 // enables, or, disables, paging.
							 , pageable:operation.pageable||false
							 , pagermode:operation.pagermode||"default"
							 , pagerbuttonscount:operation.pagerbuttonscount||5
							 // enables, or, disables, grouping.
							 , groupable:operation.groupable||false
							 // enables, or, disables, sorting.
							 , sortable:operation.sortable||false
							 // enables, or, disables, filtering.
							 , filterable:operation.filterable||false
							 , filtermode:operation.filtermode||"default"
							 // displays, the, filter, icon, only, when, the, column, is, filtered.
							 , autoshowfiltericon:operation.autoshowfiltericon||true
							 // displays, a, background, for, the, filtered, column.
							 , showfiltercolumnbackground:operation.showfiltercolumnbackground||true
							 // displays, a, background, for, the, pinned, column.
							 , showpinnedcolumnbackground:operation.showpinnedcolumnbackground||true
							 // displays, a, background, for, the, sort, column.
							 , showsortcolumnbackground:operation.showsortcolumnbackground||true
							 // enables, or, disables, alternating, rows.
							 , altrows:operation.altrows||false
							 // sets, the, alternating, rows, start.
							 , altstart:operation.altstart||1
							 // sets, the, alternating, rows, step.
							 , altstep:operation.altstep||1
							 // shows, or, hides, the, details, column.
							 , showrowdetailscolumn:operation.showrowdetailscolumn||true
							 // shows, or, hides, the, grid's, toolbar.
							 , showtoolbar:operation.showtoolbar||false
							 , toolbarheight:operation.toolbarheight||34
							 , showstatusbar:operation.showstatusbar||false
							 , statusbarheight:operation.statusbarheight||34
							 , enableellipsis:operation.enableellipsis||true
							 // adds, groups.
							 , groups:operation.groups||[]
							 // custom, groups, renderer.
							 , groupsrenderer:operation.groupsrenderer||null
							 // custom, renderer, for, the, grouping, columns, displayed, in, the, grouping, header.
							 , groupcolumnrenderer:operation.groupcolumnrenderer||null
							 // groups, default, expand, state.
							 , groupsexpandedbydefault:operation.groupsexpandedbydefault||false
							 // sets, the, pager, renderer.
							 , pagerrenderer:operation.pagerrenderer||null
							 , touchmode:operation.touchmode||'auto'
							 // sets, the, grid, columns.
							 , columns:operation.columns||[]
							 // selected, row, index.
							 , selectedrowindex:operation.selectedrowindex||-1
							 , selectedrowindexes:operation.selectedrowindexes||new Array()
							 , selectedcells:operation.selectedcells||new Array()
							 , autobind:operation.autobind||true
							 , selectedcell:operation.selectedcell||null
							 , tableZIndex:operation.tableZIndex||799
							 , headerZIndex:operation.headerZIndex||299
							 , updatefilterconditions:operation.updatefilterconditions||null
							 , showaggregates:operation.showaggregates||false
							 , showfilterrow:operation.showfilterrow||false
							 , showeverpresentrow:operation.showeverpresentrow||false
							 , everpresentrowposition:operation.everpresentrowposition||"top"
							 , everpresentrowactions:operation.everpresentrowactions||"add, reset"
							 , everpresentrowactionsmode:operation.everpresentrowactionsmode||"buttons"
							 , everpresentrowheight:operation.everpresentrowheight||30
							 , autorowheight:operation.autorowheight||false
							 , autokoupdates:operation.autokoupdates||true
							 , handlekeyboardnavigation:operation.handlekeyboardnavigation||null
							 , showsortmenuitems:operation.showsortmenuitems||true
							 , showfiltermenuitems:operation.showfiltermenuitems||true
							 , showgroupmenuitems:operation.showgroupmenuitems||true
							 , enablebrowserselection:operation.enablebrowserselection||false
							 , enablekeyboarddelete:operation.enablekeyboarddelete||true
							 , clipboard:operation.clipboard||true
							 , clipboardbegin:operation.clipboardbegin||null
							 , clipboardend:operation.clipboardend||null
							 , copytoclipboardwithheaders:operation.copytoclipboardwithheaders||false
							 , copytoclipboardhiddencolumns:operation.copytoclipboardhiddencolumns||false
							 , ready:operation.ready||null
							 , updatefilterpanel:operation.updatefilterpanel||null
							 , autogeneratecolumns:operation.autogeneratecolumns||false
							 , rowdetailstemplate:operation.rowdetailstemplate||null
							 , scrollfeedback:operation.scrollfeedback||null
							 , rendertoolbar:operation.rendertoolbar||null
							 , renderstatusbar:operation.renderstatusbar||null
							 , rendered:operation.rendered||null
							 , multipleselectionbegins:operation.multipleselectionbegins||null
							 , columngroups:operation.columngroups||null
							 , cellhover:operation.cellhover||null
							 // sets the grid data view.
							 , dataview:operation.dataview||null
							  // sets the rendering delay. 
							 , updatedelay:operation.updatedelay||null
							  // sets the auto height option. This option is appropriate when the grid's paging is enables or when the grid has quite a few rows.
							 , autoheight:operation.autoheight||false
							 , autowidth:operation.autowidth||false
							  // shows or hides the grid's columns header.
							 , showheader:operation.showheader||true
							  // shows or hides the grid's grouping header.
							 , showgroupsheader:operation.showgroupsheader||true
							  // enables or disables the grouping closing buttons.
							 , closeablegroups:operation.closeablegroups||true
							  // sets the scrollbars size.
							 , scrollbarsize:operation.scrollbarsize||$.jqx.utilities.scrollBarSize
							 , touchscrollbarsize:operation.touchscrollbarsize||$.jqx.utilities.touchScrollBarSize
							 //, scrollbarautoshow:operation.scrollbarautoshow||$.jqx.utilities.scrollBarAutoShow
							  // enables or disables the virtual scrolling.
							 , virtualmode:operation.virtualmode||false
							  // sets a custom sorting behavior.
							 , sort:operation.sort||null
							  // displays a dropdown button in each column.
							 , columnsmenu:operation.columnsmenu||true
							  // enables the resizing of grid columns.
							 , columnsresize:operation.columnsresize||false
							 , columnsautoresize:operation.columnsautoresize||true
							 , columnsreorder:operation.columnsreorder||false
							  // sets the width of the columns menu in each column.
							 , columnsmenuwidth:operation.columnsmenuwidth||15
							 , autoshowcolumnsmenubutton:operation.autoshowcolumnsmenubutton||true
							 , popupwidth:operation.popupwidth||'auto'
							 , popupheight:operation.popupheight||'auto'
							 , columnmenuopening:operation.columnmenuopening||null
							 , columnmenuclosing:operation.columnmenuclosing||null
							  // changes the sort state when the user clickes a column header.
							  // 0 - disables toggling.
							  // 1 - enables togging. Click on a column toggles the sort direction.
							  // 2 - enables remove sorting option.
							 , sorttogglestates:operation.sorttogglestates||2
							  // callback function invoked when the rows are rendered.
							 , rendergridrows:operation.rendergridrows||null
							  // enables or disables the grid animations - slide and fade effects.
							 , enableanimations:operation.enableanimations||true
							  // enables columns virtualization
							 , enablecolumnsvirtualization:operation.enablecolumnsvirtualization||true
							  // enables or disables the grid tooltips.
							 , enabletooltips:operation.enabletooltips||false
							  // enables or disables the selection.
							  // possible values: 'none', 'singlerow', 'multiplerows, 'multiplerowsextended, 'singlecell, 'multiplecells, 'multiplecellsextended', 'multiplecellsadvanced'
							 , selectionmode:operation.selectionmode||'singlerow'
							  // enables or disables the rows hover state.
							 , enablehover:operation.enablehover||true
							  // this message is displayed when the user tries to call a method before the binding complete.
							 , loadingerrormessage:operation.loadingerrormessage||"The data is still loading. When the data binding is completed, the Grid raises the 'bindingcomplete' event. Call this function in the 'bindingcomplete' event handler."
							  // vertical scroll step.
							 , verticalscrollbarstep:operation.verticalscrollbarstep||25
							  // vertical large step.
							 , verticalscrollbarlargestep:operation.verticalscrollbarlargestep||400
							  // horizontal step.
							 , horizontalscrollbarstep:operation.horizontalscrollbarstep||10
							  // horizontal large step.
							 , horizontalscrollbarlargestep:operation.horizontalscrollbarlargestep||50
							 , keyboardnavigation:operation.keyboardnavigation||true
							 , touchModeStyle:operation.touchModeStyle||'auto'
							 , autoshowloadelement:operation.autoshowloadelement||true
							 , showdefaultloadelement:operation.showdefaultloadelement||true
							 , showemptyrow:operation.showemptyrow||true
							 , autosavestate:operation.autosavestate||false
							 , autoloadstate:operation.autoloadstate||false
			});
			
			var jqxGridObj = $.data(gridObj[0], "jqxWidget");
			jqxGridObj._source = loadsoruce;
			
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
			
			gridObj.jqxGrid('selectrow', 0);
			
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

				var argsRowId = args.rowindex;
				var argsDataField = args.datafield;
				var localRecords = jqxGridObj.source._source.localdata||[];
				var cacheValue = "";
				if (localRecords[argsRowId]) {
					cacheValue = localRecords[argsRowId][argsDataField]||"";
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
				
				var modifycellclass = function (row, columnfield, value) {
					
					if (oldcellclassname) {
						if (typeof oldcellclassname == "string") {
							oldclass = oldcellclassname;
						} else {
							oldclass = oldcellclassname(row, columnfield, value);
						}
					}
					
					oldclass = oldclass.replace("cell-flag-error","");
					if (jqxGridObj._validationCells
					 && jqxGridObj._validationCells[columnfield]
					 && jqxGridObj._validationCells[columnfield].rowId
					 && jqxGridObj._validationCells[columnfield].rowId.indexOf(row) != -1) {
						return 'cell-flag-error ' + oldclass;
					}
					
					oldclass = oldclass.replace("cell-flag-modify","");
					if (jqxGridObj._modifyCells[columnfield] && jqxGridObj._modifyCells[columnfield].rowId.indexOf(row) != -1) {
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
			console.log(dataSource);
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
		
		defaultAddRowFun:function(gridId,operation){
			_defaultAddRowFun(gridId,operation);
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