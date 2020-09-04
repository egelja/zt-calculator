const input = document.querySelector("#CSVFile");

input.addEventListener("change", function (e) {
    Papa.parse(input.files[0], {
        complete: function (results) {
            setToFile(results);
        },
        header: true,
        dynamicTyping: true,
        worker: true,
    });
});

function setToFile(parsedCSV) {
    document.getElementById("output").innerHTML = JSON.stringify(parsedCSV.data, null, 4);
    console.log(parsedCSV.data);
}

function setToText() {
    document.getElementById("output").innerHTML = document.getElementById(
        "CSVText"
    ).value;
}
