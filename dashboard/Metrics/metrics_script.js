$("#go").click(function(e){
  console.log("Getting site metrics for" + document.getElementById("portal"));
  var url_array = [];
  var dataObj = [];
  startdate = document.getElementById("start")[0].value;
  start = new Date (startdate);

  enddate = document.getElementById("end")[0].value;
  end = new Date (enddate);

  interval = document.getElementById("interval")[0].value;
  int = Number (interval * 1000);

  range = []

  for (var i=start.getTime(); i  < end.getTime();i=i+int) {

  range.push(i)
  }

  var portal = document.getElementById("portal")[0].value;
  var length = range.length - 1;
  // var url_array = []

  range.forEach(function(item, i)
  {
    var url = {
      endpoint : ("https://" + portal + "/api/site_metrics.json?start=" + range[i] + "&end=" + range[i+1]),
      iteration : i
              }
    console.log(url)
    url_array.push(url)
  })

url_array.forEach(function(myUrl){
      $.ajax({
          url: myUrl.endpoint,
          type: "GET",
          dataObj: [],
          iter: myUrl.iteration

      }).done(function(data, status, jqXHR) {
        var socrataData = jqXHR.responseJSON;

        socrataData.interval = myUrl.iteration + 1;
        console.log(socrataData);

        dataObj.push(socrataData);
        var dataTextObj = JSON.stringify(dataObj);
        $('#displayData').text(dataTextObj);

      }).fail(function(xhr, status, err) {
          console.log('fail', status, err);
          });
        });
});

// Adapted from http://jsfiddle.net/hybrid13i/JXrwM/

$(document).ready(function(){
    $('button').click(function(){
        var data = $('displayData').val();
        if(data == '')
            return;

        JSONToCSVConvertor(data, "Portal Data", true);
    });
});

function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var CSV = '';
    //Set Report title in first row or line

    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);

        //append Label row with line break
        CSV += row + '\r\n';
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    //Generate a file name
    var fileName = "MyReport_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
