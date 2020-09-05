const input = document.querySelector("#CSVFile");

input.addEventListener("change", function (e) {
    Papa.parse(input.files[0], {
        complete: function (results) {
            console.log(results.data);
            try {
            var numResults = [];
            for (let i = 0; i < results.data.length; i++) {
                const tableRow = results.data[i];
                var numRow = [];
                for (let j = 0; j < tableRow.length; j++) {
                    const tableCell = tableRow[j];
                    console.log(typeof (tableCell));
                    if (typeof tableCell === 'number') { numRow[j] = tableCell; }
                }
                if (numRow.length === 4) { numResults.push(numRow); }
            }
            console.log(numResults);
            setToFile(numResults);
            } catch (error) {
                document.getElementById("output").innerHTML = "Error: Make sure the csv is formatted correctly.";
            }
        },
        dynamicTyping: true,
        worker: true,
        skipEmptyLines: true,
    });
});

function setToFile(parsedCSV) {
    document.getElementById("output").innerHTML = JSON.stringify(
        parsedCSV.data.slice(0, 3),
        null,
        4
    );
    console.log(parsedCSV);
}

function setToText() {
    Papa.parse(document.getElementById("CSVText").value, {
        complete: function (results) {
            document.getElementById("output").innerHTML = JSON.stringify(
                results.data.slice(0, 3),
                null,
                4
            );
            console.log(results.data);
        },
        dynamicTyping: true,
        worker: true,
        skipEmptyLines: false,
    });
}


function calculateZT() {

}
