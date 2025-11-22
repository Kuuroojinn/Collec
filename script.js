function get_json_data(){
            // Relative URL of external json file
            var json_url = 'https://raw.githubusercontent.com/Kuuroojinn/Collec/refs/heads/main/data.json';

            //Build the XMLHttpRequest (aka AJAX Request)
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() { 
                if (this.readyState == 4 && this.status == 200) {//when a good response is given do this

                    var data = JSON.parse(this.responseText); // convert the response to a json object
			                }
            }
            //set the request destination and type
            xmlhttp.open("POST", json_url, true);
            //set required headers for the request
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // send the request
            xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section
        }
// Function to generate the table
function generateTable(data) {
  if (!data || data.length === 0) return "No data available.";
  // Create the table element
  const table = document.createElement('table');
  
  // Generate table headers
  const headerRow = document.createElement('tr');
  const keys = Object.keys(data[0]); // Get keys from the first object
  keys.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize header
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  // Generate table rows
  data.forEach(item => {
	  if (item["platform"]=="PS3") {
    const row = document.createElement('tr');
    keys.forEach(key => {
      const td = document.createElement('td');
      td.textContent = item[key] || ""; // Fill empty fields with blank
      row.appendChild(td);
    });
    table.appendChild(row);
	  };
  });
  return table;
}
// Render the table
get_json_data();
const container = document.getElementById('table-container');
const table = generateTable(data);
if (table) container.appendChild(table);


