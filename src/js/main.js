import { Papa } from "papaparse";
import "../css/styles.css";

const input = document.querySelector("#CSVFile");

// eslint-disable-next-line no-unused-vars
input.addEventListener("change", (_e) => {
    Papa.parse(input.files[0], {
        complete: (results) => {
            console.log(results.data);
            let numResults = cleanCSV(results.data);

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

function setToFile(parsedCSV) {
    document.getElementById("output").innerHTML = JSON.stringify(
        parsedCSV.slice(0, 3),
        null,
        4
    );
    console.log(parsedCSV.data);
}

export function setToText() {
    Papa.parse(document.getElementById("CSVText").value, {
        complete: (results) => {
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
            `You have errors on rows:\n${errorRows.join(
                ", "
            )}.\nThese rows have now been pruned from the CSV.`
        );
    }
    return numericResults;
}
