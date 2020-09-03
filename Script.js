function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}


function OpenInput(csvReader){
var filesInput = document.getElementById("CSVFile").value;
var file = filesInput.files.item(0);
var reader = new FileReader();
reader.onload = function() {
    csvReader(reader.result);
  }
csvText = reader.readAsText(file);
}

function csvReader(CSVText){
  var csvArray = CSVText.split("\n");
  var i=0;
  for (i=0;i<csvArray.length; i++){
    csvArray[i] = csvArray[i].split(",");
  }
}