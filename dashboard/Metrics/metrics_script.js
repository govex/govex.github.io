$("#go").click(function(e){
  console.log("Getting site metrics");

  // Get user inputs
  var url_array = [];
  var dataObj = [];
  startdate = document.getElementById("start")[0].value;
  start = new Date (startdate);

  enddate = document.getElementById("end")[0].value;
  end = new Date (enddate);

  interval = document.getElementById("interval")[0].value;
  int = Number (interval * 1000);

  range = []

  // Create unix timestamps for user's time selection

  for (var i=start.getTime(); i  < end.getTime();i=i+int) {

  range.push(i)
  }

  var portal = document.getElementById("portal")[0].value;
  var length = range.length - 1;

  //Create Socrata API endpint URLs

  range.forEach(function(item, i)
  {
    var url = {
      endpoint : ("https://" + portal + "/api/site_metrics.json?start=" + range[i] + "&end=" + range[i+1]),
      iteration : i
              }
    console.log(url)
    url_array.push(url)
  })

  //Get JSON data from Socrata API endpint URLs

url_array.forEach(function(myUrl){
      $.ajax({
          url: myUrl.endpoint,
          type: "GET",
          dataObj: [],
          iter: myUrl.iteration

      }).done(function(data, status, jqXHR) {
        var socrataData = jqXHR.responseJSON;

        //Add variable to identify which time span the row describes

        socrataData.interval = myUrl.iteration + 1;
        // console.log(socrataData);

        // Display JSON data on page

        dataObj.push(socrataData);
        var dataTextObj = JSON.stringify(dataObj);
        $('#displayData').text(dataTextObj);

        // Convert JSON to CSV


      }).fail(function(xhr, status, err) {
          console.log('fail', status, err);
          });
        });
});
