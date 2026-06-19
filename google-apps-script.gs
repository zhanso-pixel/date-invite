/**
 * Date-invite → Google Sheet
 * Paste this into Extensions ▸ Apps Script of your Google Sheet,
 * then Deploy ▸ New deployment ▸ Web app (see SETUP.md).
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Add a header row the first time
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted at", "Food", "Date", "Time", "Place"]);
    }

    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.food || "",
      data.date || "",
      data.time || "",
      data.address || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the web-app URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput("It's alive 💖");
}
