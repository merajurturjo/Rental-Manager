/**
 * Handles POST requests to save or delete data.
 */
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // ACTION 1: REGISTER NEW TENANT
  if (data.type === 'TENANT') {
    var sheetTenants = ss.getSheetByName("Tenants");
    // Columns: [Registration Date, Name, Mobile, Unit, Rent, Utility]
    sheetTenants.appendRow([data.date, data.name, data.mobile, data.flat, data.advance, data.fixedUtil]);
    return ContentService.createTextOutput("Tenant Registered Successfully");
  }

  // ACTION 2: SAVE RENT PAYMENT
  if (data.type === 'RENT') {
    var sheetRent = ss.getSheetByName("Rent");
    // Columns: [Date, Name, Unit, Total Bill, Paid, Due, Mobile, Billing Month]
    sheetRent.appendRow([data.date, data.name, data.unit, data.totalBill, data.paid, data.due, data.mobile, data.month]);
    return ContentService.createTextOutput("Payment Saved Successfully");
  }

  // ACTION 3: DELETE TENANT
  if (data.type === 'DELETE_TENANT') {
    var sheetTenants = ss.getSheetByName("Tenants");
    var values = sheetTenants.getDataRange().getValues();
    for (var i = 0; i < values.length; i++) {
      if (values[i][1] == data.name) {
        sheetTenants.deleteRow(i + 1);
        break;
      }
    }
    return ContentService.createTextOutput("Tenant Removed Successfully");
  }
}

/**
 * Handles GET requests to fetch data for the app.
 */
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // FETCH ALL TENANTS
  if (e.parameter.action == 'getTenants') {
    var sheet = ss.getSheetByName("Tenants");
    var data = sheet.getDataRange().getValues();
    var tenants = [];
    for (var i = 1; i < data.length; i++) {
      tenants.push({
        name: data[i][1], 
        mobile: data[i][2], 
        unit: data[i][3], 
        fixedRent: data[i][4],
        fixedUtil: data[i][5]
      });
    }
    return ContentService.createTextOutput(JSON.stringify({tenants: tenants}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // FETCH PAYMENT SUMMARY
  if (e.parameter.action == 'getSummary') {
    var sheet = ss.getSheetByName("Rent");
    var data = sheet.getDataRange().getValues();
    var logs = [];
    
    for (var i = 1; i < data.length; i++) {
      var rawMonth = data[i][7]; // Column H (Billing Month)
      var formattedMonth = rawMonth;

      // Check if the cell contains a Date object and format it to "Month, Year"
      if (rawMonth instanceof Date) {
        formattedMonth = Utilities.formatDate(rawMonth, Session.getScriptTimeZone(), "MMMM, yyyy");
      }

      logs.push({
        name: data[i][1], 
        paid: data[i][4], 
        due: data[i][5], 
        month: formattedMonth // This fixes the long date string issue
      });
    }
    return ContentService.createTextOutput(JSON.stringify({logs: logs}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}