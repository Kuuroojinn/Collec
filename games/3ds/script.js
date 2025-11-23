
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
	  if (item["Platform"]=="3DS") {
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
//fetch('https://kuuroojinn.github.io/Collec/data.json').then((response) => response.json()).then((data) => console.log(data));
async function getData() {
	const url = "https://kuuroojinn.github.io/Collec/data.json";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.log("Nope");
		}
		const result = await response.json();
		result.sort(function (a,b) {
			return a.Title < b.Title ? -1 : 1;
		});
		const container = document.getElementById('table-container');
		const table = generateTable(result);
		if (table) container.appendChild(table);
		console.log(result);


	} catch (error) {
		console.error(error.message);
	}
}
getData();
//const container = document.getElementById('table-container');
//const table = generateTable(data);
//if (table) container.appendChild(table);


