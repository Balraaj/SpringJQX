$(document).ready(function () {
            // prepare the data
            var data = new Array();
            var firstNames =
            [
                "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
            ];
            var lastNames =
            [
                "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
            ];
            var productNames =
            [
                "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
            ];
            var priceValues =
            [
                "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
            ];
            for (var i = 0; i < 100; i++) {
                var row = {};
                var productindex = Math.floor(Math.random() * productNames.length);
                var price = parseFloat(priceValues[productindex]);
                var quantity = 1 + Math.round(Math.random() * 10);
                row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
                row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
                row["productname"] = productNames[productindex];
                row["price"] = price;
                row["quantity"] = quantity;
                row["total"] = price * quantity;
                data[i] = row;
            }
            var source =
            {
                localdata: data,
                datatype: "array"
            };
            var dataAdapter = new $.jqx.dataAdapter(source, {
                loadComplete: function (data) { },
                loadError: function (xhr, status, error) { }      
            });
            $("#jqxgrid").jqxGrid(
            {
                source: dataAdapter,
                columns: [
                  { text: 'First Name', datafield: 'firstname', width: 100 },
                  { text: 'Last Name', datafield: 'lastname', width: 100 },
                  { text: 'Product', datafield: 'productname', width: 180 },
                  { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                  { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                  { text: 'Total', datafield: 'total', width: 100, cellsalign: 'right', cellsformat: 'c2' }
                ]
            });
            
            
            initDate();
            setListner();
        });


function initDate(){
	$("#jqxDate").jqxDateTimeInput({"width":"100","formatString":"yyyy-MM","showCalendarButton":false,"textAlign":"center"});
	$("#jqxDate").jqxDateTimeInput({"value":new Date()});
	 $("#numberInput").jqxNumberInput({
	     width: '250px',
	     height: '25px',
	     inputMode: 'simple',
	     decimalDigits: 3,
	     digits: 5
	 });
	 
	 $("#numberInput").keyup(function(){
		 
	 });
	 
	 $("#numberInput").val("asdf");
}

function setListner(){
	$("#getData").on("click",getDropDownData);
	$("#btnNull").on("click",function(){
		$("#jqxDate").jqxDateTimeInput({"value": null});
	});
	$("#getValue").on("click",function(){
		var value = $("#jqxDate").jqxDateTimeInput("value");
		alert($("#jqxDate").val());
	});
	
	$("#setDate").on("click",function(){
		var dateValue = $("#dateInput").val().trim();
		var dateObject = null;
		if((dateValue.length===6)&&(Number(dateValue))){
			dateObject = new Date();
			dateObject.setFullYear(Number(dateValue.substr(0,4)));
			dateObject.setMonth(Number(dateValue.substr(4,2)));
			dateObject.setDate(1);
		}
		$("#jqxDate").val(dateObject);
	});
	
	$("#jqxDate").on("focusin",function(){
		$("#jqxDate").jqxDateTimeInput({"formatString":"yyyyMM"});
	});
	
	$("#jqxDate").on("focusout",function(){
		$("#jqxDate").jqxDateTimeInput({"formatString":"yyyy-MM"});
	});
}

function getDropDownData(){
	$.ajax({
		  url: "http://localhost:9090/employeeHelper/getDropDownData/",
		})
		  .done(function( data ) {
		    if ( console && console.log ) {
		      console.log( "Sample of data:", data.slice( 0, 100 ) );
		      initDropDown(data);
		    }
		  });
}

function initDropDown(data){
	var source ={
	    datatype: "array",
	    datafields: [
	        { name: 'id' },
	        { name: 'name' }
	    ],
	    localdata: data
	};
	var dataAdapter = new $.jqx.dataAdapter(source);
	
	$("#jqxDropDown").jqxDropDownList({ 
		source: dataAdapter, 
		width: '200px', 
		height: '25px',
		displayMember: id,
		valueMember: name,
		renderer: function (index, label, value, a, b, c, d ,e, f) {
		    var datarecord = dataAdapter.records[index];
		    return datarecord.id + "    " + datarecord.name;
		},
		enableSelection:true
	});
}

