// Eviction Notices per HOLC Areas
// labels along the x-axis
var years = [2015,2016,2017,2018,2019];
// For drawing the lines
var best = [0.61, 0.61, 0.23, 1.2, 1.6];
var desirable = [3.6, 5.2, 6.5, 7, 8.9];
var declining = [6.8, 11.2, 13.7, 14.2, 16.9];
var hazardous = [17.2, 19.6, 22.5, 19.2, 31.6];


// Chart.defaults.global.legend.labels.usePointStyle = true;
var ctx = document.getElementById("notices");
var lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: best,
        label: "Best",
        borderColor: "green",
        backgroundColor: "green",
        fill: false
      },
      {
        data: desirable,
        label: "Desirable",
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false
      },
      {
        data: declining,
        label: "Declining",
        borderColor: "yellow",
        backgroundColor: "yellow",
        fill: false
      },
      {
        data: hazardous,
        label: "Hazardous",
        borderColor: "red",
        backgroundColor: "red",
        fill: false
      }
    ]
  },
  options: {
         scales: {
                xAxes: [{gridLines: { color: "#131c2b" }}],
                yAxes: [{gridLines: { color: "#131c2b" }},
                       // {scaleLabel: {display:true, labelString: "Percent of Homes Served Notices", fontColor: "white"}}
                     ]
                },
         legend:{labels: {usePointStyle: true, fontColor: "white"}}
      }
    });




// Number of buyouts
var grades = ["Best", "Desirable", "Declining", "Hazardous"];
var buy_rate = [1.2, 6.5, 16.7, 24.8]


var ctx = document.getElementById("buyouts");
var buyouts = new Chart(ctx, {
  type: 'bar',
  data: {
        labels: grades,
        datasets: [
          {
            label: "Percent of homes that had a buyout",
            backgroundColor: ["Green", "blue", "yellow", "red"],
            data: buy_rate,
            // hoverBorderColor:"#000000"
          }
        ]
      },
      options: {
        scales: {
               yAxes: [{gridLines: { color: "#131c2b" }},
                      // {scaleLabel: {display:true, labelString: "Percent of Homes Served Notices", fontColor: "white"}}]
               ]},
        legend: { display: false },
        }
      });
