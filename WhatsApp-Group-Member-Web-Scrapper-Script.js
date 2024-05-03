
// Open a WA group and scroll down and then click on 'view all members'. Then run the below script

var valuesList = [];

function scrollElement(element) {
  var scrollStep = 100;
  var scrollInterval = 1000;

  var scrollIntervalId = setInterval(function() {
    var scrollHeight = element.scrollHeight;
    element.scrollBy(0, scrollStep);
    if (element.scrollTop + element.clientHeight >= scrollHeight) {
			downloadCSV();
      clearInterval(scrollIntervalId);
    }

    // Extract data and add to list
    extractValues();
  }, scrollInterval);
}

function extractValues() {
	var membersListBox = document.querySelector('.x1n2onr6.x1n2onr6.xyw6214.x78zum5.x1r8uery.x1iyjqo2.xdt5ytf.x6ikm8r.x1odjw0f.x1hc1fzr.x1tkvqr7')
  var elements = membersListBox.querySelectorAll('.x10l6tqk.xh8yej3.x1g42fcv');

  elements.forEach(function(element) {
    var childElement = element.querySelector('.x1iyjqo2.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft.x1rg5ohu._ao3e');
    if (childElement) {
      var value = childElement.textContent.trim();
      if (!valuesList.includes(value)) {
        valuesList.push(value);
      }
    }
  });
}

// Download as csv

function downloadCSV() {
  var csvContent = "data:text/csv;charset=utf-8,";

  // Add header
  csvContent += "Value\n";

  // Add values
  valuesList.forEach(function(value) {
    csvContent += value + "\n";
  });

  // Create and trigger download
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "values.csv");
  document.body.appendChild(link);
  link.click();
}

var allMembersElement = document.querySelector('.x1n2onr6.x1n2onr6.xyw6214.x78zum5.x1r8uery.x1iyjqo2.xdt5ytf.x6ikm8r.x1odjw0f.x1hc1fzr.x1tkvqr7');
scrollElement(allMembersElement);


