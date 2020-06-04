// from data.js
var tdata = data;
var tbody = d3.select("tbody");
function BuildData(data) {
    tbody.html("");
    data.forEach((filter) => {
        var row = tbody.append("tr");
        Object.entries(filter).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
});
}
BuildData(tdata) 

function clickData() {
    var datetimeInput = d3.select("#datetime").property("value")
    var datetimeFilter = tdata.filter(row => row.datetime === datetimeInput);
    BuildData(datetimeFilter);
    console.log(datetimeFilter);
    console.log(datetimeInput)
};

d3.selectAll("#filter-btn").on("click", clickData)



// table variables
//var filterButton = d3.select("#filter-btn");
//var tbody = d3.select("#results");
//var datetimeInput = d3.select("#datetime");
//var cityInput = d3.select("#city");
//var stateInput = d3.select("#state");
//var countryInput = d3.select("#country");
//var shapeInput = d3.select("#shape");

//filter

//on submit function
//filterButton.on("click", function(){
  //  tbody.html("");
    //d3.event.preventDefault();
    //var datetimeInput = d3.select("#datetime");
    //var datetimeElement = datetimeInput.property("value");
    //var datetimeArray = tdata.filter(first = first.datetime === datetimeInput);

// });

// //table display
// tdata.forEach((filter) => {
// var row = tbody.append("tr");
// Object.entries(filter).forEach(([key, value]) => {
// var cell = row.append("td");
// cell.text(value);
// });
// });
