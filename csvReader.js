
function OpenFile(FilePath) {
    window.open(FilePath); // Wow The worst wrapper in history
}

function OpenInput() {
    var file = document.getElementById("CSVFile").files[0];
    console.log(file instanceof Blob)
    //var file = filesInput.files.item(0);
    //var file = filesInput.item(0);
    var reader = new FileReader();
    reader.onload = function (event) {
        //csvReader(event.target.result);
        document.getElementById("demo").innerHTML = event.target.result;
    }
    reader.readAsText(file);
}

function csvReader(CSVText) {
    var csvArray = CSVText.split("\n");
    var i = 0;
    for (i = 0; i < csvArray.length; i++) {
        csvArray[i] = csvArray[i].split(",");
    }
}

function SetToFile() {
  document.getElementById("demo").innerHTML = OpenInput(csvReader);
}

function SetToText() {
  document.getElementById("demo").innerHTML = document.getElementById("CSVText").value;
}