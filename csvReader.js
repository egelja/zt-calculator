<<<<<<< HEAD
function OpenFile(FilePath) {
    window.open(FilePath); // Wow The worst wrapper in history
}

function OpenInput(csvReader, filesInput) {
    var filesInput = document.getElementById("CSVFile").value;
    var file = filesInput.files.item(0);
    var reader = new FileReader();
    reader.onload = function () {
        csvReader(reader.result);
    }
    csvText = reader.readAsText(file);
    return csvText;
}

function csvReader(CSVText) {
    var csvArray = CSVText.split("\n");
    var i = 0;
    for (i = 0; i < csvArray.length; i++) {
        csvArray[i] = csvArray[i].split(",");
    }
=======
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function OpenInput(csvReader) {
    var filesInput = document.getElementById("CSVFile").value;
    var file = filesInput.files.item(0);
    var reader = new FileReader();
    reader.onload = function () {
        csvReader(reader.result);
    };
    csvText = reader.readAsText(file);
}

function csvReader(CSVText) {
    var csvArray = CSVText.split("\n");
    var i = 0;
    for (i = 0; i < csvArray.length; i++) {
        csvArray[i] = csvArray[i].split(",");
    }
>>>>>>> ca6677e64c99ffee9280e3c9336afe292054d407
}

function ChangeContent(params) {
  document.getElementById("demo").innerHTML = OpenInput(csvReader, OpenInput);
}