
function monthlyTotal() {
    //First, get to the active spreadsheet
    const activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  
    //Second, get to the active sheet.
    const activeSheet = activeSpreadSheet.getActiveSheet();
  
    if(activeSheet.getName() === 'Cash Payment Tracker'){
      const dateAndAmountColumns = activeSheet.getRange('A3:B').getValues().filter(v => !v.includes(''));
      for(let i = 1; i <= 12; i++){
        let sum = 0;
        let monthSetter = i > 0 && i < 10 ? `0${i}` : `${i}`;
  
        for(let j = 0; j < dateAndAmountColumns.length; j++){
          let getMnth = dateAndAmountColumns[j][0];
          let newDate = Utilities.formatDate(getMnth, Session.getScriptTimeZone(), 'MM-YYYY');
            if(newDate.substring(0, 2) == monthSetter){
              sum += parseInt(dateAndAmountColumns[j][1]);
            }
        }
  
        let cell = activeSheet.getRange(`${String.fromCharCode('F'.charCodeAt()+i)}4:${String.fromCharCode('F'.charCodeAt()+i)}4`);
        cell.setValue(sum);
  
      }
      
    }
  
  }

  function onEdit(e) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    //checks that we're on the correct sheet.
    if( sheet.getSheetName() == 'Timesheet Program' || 'Cash Payment Tracker') { 
      var selectedCell = ss.getActiveCell();
      //checks the column to ensure it is on the one we want to cause the date to appear.
      if( selectedCell.getColumn() == 2) { 
        var dateTimeCell1 = selectedCell.offset(0,1);
        dateTimeCell1.setValue(new Date());
        var dateTimeCell2 = selectedCell.offset(0,-1);
        dateTimeCell2.setValue(new Date());
        }
    }
  }
  
    
function printtheinput() {
  const name = document.getElementById('textt').value;
  document.getElementById("result").innerText = name;
}

function printtheinput2() {
  const name = document.getElementById('numberr').value;
  document.getElementById("result2").innerText = age;
}
