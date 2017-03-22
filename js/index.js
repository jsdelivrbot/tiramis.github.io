// ID of the Google Spreadsheet
 var spreadsheetID = "1ltYLzmbRbMnJ-2m8e-gt4b2cSjHPm0aB9jUsI33AQb4";
 
 // Make sure it is public or set to Anyone with link can view 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
 
// make JSON call to Google Data API
$.getJSON(url, function(data) {

  // set global html variable
  var html = '';

  // build table headings
  html += '<table cellpadding=10 cellspacing=0 border=1>';
  html += '<tr>';
  html += '<th>no</th>';
  html += '<th>title</th>';
  html += '<th>date</th>';
  html += '</tr>';
  
  // loop to build html output for each row
  var entry = data.feed.entry;
  /**
  ** Change to descending order
  ** for (var i = entry.length - 1; i >= 0; i -= 1) {
   */
  for (var i = 0; i < entry.length; i++) {
    html += '<tr>';
    html += '<td>' + entry[i]['gsx$no']['$t'] + '</td>';
    html += '<td>' + entry[i]['gsx$title']['$t'] + '</td>';
    html += '<td>' + entry[i]['gsx$date']['$t'] + '</td>';
    html += '</tr>';
  }
  html += '</table>';

  // output html
  $('.console').html(html);
});

// loading animation
var loading = $('.loading');
loading.hide();
$(document)
  .ajaxStart(function() {
    loading.show();
  })
  .ajaxStop(function() {
    loading.hide();
  });
