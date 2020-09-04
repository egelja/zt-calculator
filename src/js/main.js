const input = document.querySelector("#CSVFile");

input.addEventListener("change", function (e) {
    Papa.parse(input.files[0], {
        complete: function (results) {
            setToFile(results);
        },
        dynamicTyping: true,
        worker: true,
    });
});

function setToFile(parsedCSV) {
    document.getElementById("output").innerHTML = JSON.stringify(
        parsedCSV.data,
        null,
        4
    );
    console.log(parsedCSV.data);
}

function setToText() {
    Papa.parse(document.getElementById("CSVText").value, {
        complete: function (results) {
            document.getElementById("output").innerHTML = JSON.stringify(
                results.data,
                null,
                4
            );
            console.log(results.data);
        },
        dynamicTyping: true,
        worker: true,
    });
}
