// from data.js
var tableData = data;

// check data
console.log(data)
// YOUR CODE HERE!
// Select the form and button 
var form = d3.select("#form");
var button = d3.select("#filter-btn")

// Create event handlers for pressing the enter key and clicking button
form.on("submit",runEnter);
button.on("click",runEnter);

// Create the function to run for events
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console (test)
    console.log(inputValue);
    
    //find data for datetime
    var filteredData = data.filter(data => data.datetime === inputValue);

    console.log(filteredData)
    
    // Clear current table body
    d3.select("tbody").text("");

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Append table with filtered results

      filteredData.forEach((ufoSighting) => {
          var row = tbody.append("tr");
          Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
      });

}