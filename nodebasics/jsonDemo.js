var async = require('async');
const excelToJson = require('convert-excel-to-json');
var fs = require('fs');
const result = excelToJson({
  source: fs.readFileSync('Json_exe.xls'), // fs.readFileSync return a Buffer  
  columnToKey: {
    A: 'stepNo',
    B: 'Stepdescription',
    C: 'Fieldtypes',
    D: 'Keyword'
  }
});
var json = JSON.stringify(result);
console.log('Reading the json file')
fs.writeFile('file.json', json, function (value) {
  
})
var obj = JSON.parse(json);
var Fieldtypes = obj.exe.map(({ Fieldtypes }) => Fieldtypes)
var keyword = obj.exe.map(({ Keyword }) => Keyword)
console.log(keyword[1])
var testcasecount = obj.exe.length
console.log('Json length ' + testcasecount)
console.log(Fieldtypes)
async.eachSeries(Fieldtypes, async function (fieldtype, callback) {
  var j = Fieldtypes.indexOf(fieldtype);
  var time = (2000 * (j + 1));
  if (time == 6000) {
    time = time + 1000
  }
  var time2 = time / 1000
  for (var i = 0; i < keyword.length; i++) {
    var json = JSON.stringify(result);
    var obj = JSON.parse(json);
    
    switch (keyword[i]){  
      case 'input':
         switch (fieldtype) {
          case 'combobox':
              return new Promise(resolve => {
                setTimeout(() => {
                  console.log('StpeNO: ' + obj.exe[j].stepNo + ' Keyword: ' + obj.exe[j].Keyword + ' Fieldtype: ' + obj.exe[j].Fieldtypes)
                  console.log('Inside ' + fieldtype + ' fieldtype')
                  console.log('<------combobox has been selected after ' + time2 + ' seconds------>')
                  console.log(fieldtype + ' fieldtype completed')
                  resolve();
                  callback();
                }, time);
              });         
          case 'Textbox':
            return new Promise(resolve => {
              setTimeout(() => {
                console.log('StpeNO: ' + obj.exe[j].stepNo + ' Keyword: ' + obj.exe[j].Keyword + ' Fieldtype: ' + obj.exe[j].Fieldtypes)     
                console.log('<------Text has been entered after ' + time2 + ' seconds------>')
                console.log(fieldtype + ' fieldtype completed')
                resolve();
                callback();
              }, time);
            });
          }
        }
            switch (keyword[i]){ 
              case 'isdisplayed':
            switch (fieldtype) {
          case 'Checkbox':
            return new Promise(resolve => {
              setTimeout(() => {
                console.log('StpeNO: ' + obj.exe[j].stepNo + ' Keyword: ' + obj.exe[j].Keyword + ' Fieldtype: ' + obj.exe[j].Fieldtypes)
                console.log('Inside ' + fieldtype + ' fieldtype')
                console.log('<------check has been clicked after ' + time2 + ' seconds------>')
                console.log(fieldtype + ' fieldtype completed')
                resolve();
                callback();
              }, time);
            });
          case 'asd':
            console.log("asd");
            break;
            case 'Button':
            return new Promise(resolve => {
              setTimeout(() => {
                console.log('StpeNO: ' + obj.exe[j].stepNo + ' Keyword: ' + obj.exe[j].Keyword + ' Fieldtype: ' + obj.exe[j].Fieldtypes)
                console.log('Inside ' + fieldtype + ' fieldtype')
                console.log('<------Button has been clicked after ' + time2 + ' seconds------>')
                console.log(fieldtype + ' fieldtype completed')
                resolve();
                callback();
              }, time);
            });
        }
      default:
        break;
    }
  }
  callback();
})

