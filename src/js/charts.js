/* eslint-disable no-unused-vars */
import Chart from "chart.js";
import * as Papa from "papaparse";

export default function makeCharts(rawCSV) {
    Papa.parse(rawCSV, {
        complete: (results) => {
            const csv = results.data;
            const keys = results.meta.fields;

            genChart(csv, keys[0], keys[1], document.querySelector("#chart1"));
            genChart(csv, keys[0], keys[2], document.querySelector("#chart2"));
            genChart(csv, keys[0], keys[3], document.querySelector("#chart3"));
            genChart(csv, keys[0], keys[4], document.querySelector("#chart4"));
            genChart(csv, keys[0], keys[5], document.querySelector("#chart5"));
            genChart(csv, keys[0], keys[6], document.querySelector("#chart6"));
            genChart(csv, keys[0], keys[7], document.querySelector("#chart7"));
            genChart(csv, keys[0], keys[8], document.querySelector("#chart8"));
            genChart(csv, keys[0], keys[9], document.querySelector("#chart9"));
            genChart(
                csv,
                keys[0],
                keys[10],
                document.querySelector("#chart10")
            );
            genChart(
                csv,
                keys[0],
                keys[11],
                document.querySelector("#chart11")
            );
        },
        dynamicTyping: true,
        worker: true,
        skipEmptyLines: true,
        header: true,
    });
}

function toDataPoints(data, keyX, keyY) {
    let points = [];
    data.forEach((dataObj) => {
        let xVal = dataObj[keyX];
        let yVal = dataObj[keyY];
        points.push({
            x: xVal,
            y: yVal,
        });
    });
    console.log(points);
    return points;
}

function genChart(csv, xLabel, yLabel, canvasID) {
    new Chart(canvasID, {
        data: {
            datasets: [
                {
                    label: yLabel,
                    data: toDataPoints(csv, xLabel, yLabel),
                    backgroundColor: `#${Math.floor(
                        Math.random() * 16777215
                    ).toString(16)}`,
                },
            ],
        },
        type: "scatter",
        options: {
            scales: {
                xAxes: [
                    {
                        scaleLabel: xLabel,
                        display: true,
                        type: "linear",
                        position: "bottom",
                    },
                ],
                yAxes: [{ scaleLabel: yLabel, display: true }],
            },
        },
    });
}
