const input = document.querySelector("#CSVFile");

input.addEventListener("change", function (e) {
    Papa.parse(input.files[0], {
        complete: function (results) {
            SetToFile(results);
        },
        header: true,
        dynamicTyping: true,
    });
});

function SetToFile(parsedCSV) {
    document.getElementById("output").innerHTML = JSON.stringify(parsedCSV.data, null, 4);
    console.log(parsedCSV.data);
}

function SetToText() {
    document.getElementById("output").innerHTML = document.getElementById(
        "CSVText"
    ).value;
}
