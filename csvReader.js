
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
        var csvArray = csvReader(event.target.result);
        var textArray = [];
        for (let i = 0; i < csvArray.length; i++) {
            const element = csvArray[i];
            textArray[i] = element.join("\t");
        }
        text = textArray.join("\n");
        document.getElementById("output").innerHTML = text;
        console.log(text);
    }
    reader.readAsText(file);
}

function csvReader(CSVText) {
    var csvArray = CSVText.split("\n");
    var i = 0;
    for (i = 0; i < csvArray.length; i++) {
        csvArray[i] = csvArray[i].split(",");
    }
    return csvArray;
}

function SetToFile() {
  document.getElementById("output").innerHTML = OpenInput(csvReader);
}

function SetToText() {
  document.getElementById("output").innerHTML = document.getElementById("CSVText").value;
}