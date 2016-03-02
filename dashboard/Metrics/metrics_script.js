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
          iter: myUrl.iteration,
          start: myUrl.start,
          end: myUrl.end

      }).done(function(data, status, jqXHR) {
        var socrataData = jqXHR.responseJSON;

        socrataData.startdate = start;
        socrataData.enddate = end;
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
