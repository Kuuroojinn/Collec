fetch('http://jsonplaceholder.typicode.com/users', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
  // use the json
});
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
const container = document.getElementById('table-container');
const table = generateTable(jsonData.data);
if (table) container.appendChild(table);

