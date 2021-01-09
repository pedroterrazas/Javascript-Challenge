// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Displaying the entire dataset...

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Selecting the submit button...
var submit = d3.select("#filter-btn");

//Click event of datetime filter
submit.on("click", function() {

// Removing existing table
d3.select("tbody").html("");

// Preventing the page from refreshing
d3.event.preventDefault();

// Getting the value property of the input element
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Filter reports
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

// Displaying the filtered dataset...
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});