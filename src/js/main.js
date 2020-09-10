import * as Papa from "papaparse";
import "../css/styles.css";

const uploadCSVButton = document.querySelector("#CSVFile");
const pasteCSVButton = document.querySelector("#setCSVPaste");

// eslint-disable-next-line no-unused-vars
uploadCSVButton.addEventListener("change", (_e) => {
    Papa.parse(uploadCSVButton.files[0], {
        complete: (results) => {
            console.log(results.data);
            const numResults = cleanCSV(results.data);

            if (numResults.length) {
                console.log(numResults);
                setToFile(numResults);
            } else {
                window.alert("Invalid CSV!");
            }
        },
        dynamicTyping: true,
        worker: true,
        skipEmptyLines: true,
    });
});

// eslint-disable-next-line no-unused-vars
pasteCSVButton.addEventListener("click", (_e) => {
    setToText();
});

function setToFile(parsedCSV) {
    document.getElementById("output").innerHTML = JSON.stringify(
        parsedCSV.slice(0, 3),
        null,
        4
    );
    console.log(parsedCSV.data);
}

// eslint-disable-next-line no-unused-vars
function setToText() {
    Papa.parse(document.getElementById("CSVText").value, {
        complete: (results) => {
            const numResults = cleanCSV(results.data);

            if (numResults.length) {
                document.getElementById("output").innerHTML = JSON.stringify(
                    numResults.slice(0, 3),
                    null,
                    4
                );
                console.log(numResults);
            } else {
                window.alert("Invalid CSV!");
            }
        },
        dynamicTyping: true,
        worker: true,
        skipEmptyLines: false,
    });
}

function cleanCSV(parsedCSV) {
    // Empty list for clean CSV and error row listing:
    let numericResults = [];
    let errorRows = [];

    // Check for header row:
    if (parsedCSV[0].some(isNaN)) {
        parsedCSV.slice(1).forEach((row, index) => {
            if (!row.some(isNaN) && row.length === 4) {
                numericResults.push(row);
            } else {
                errorRows.push(index);
            }
        });
    } else {
        parsedCSV.forEach((row, index) => {
            if (!row.some(isNaN) && row.length === 4) {
                numericResults.push(row);
            } else {
                errorRows.push(index);
            }
        });
    }

    if (errorRows.length && numericResults.length) {
        window.alert(
            `You have errors on rows:\n${errorRows
                .map((element) => element + 1)
                .join(", ")}.\nThese rows have now been pruned from the CSV.`
        );
    }
    return numericResults;
}
