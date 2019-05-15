function latlong() {
    return pev
};

var jsonpev = JSON.parse(pev);

var eventlabel = [];

var eventcarga = [];

for (i = 0; i < jsonpev.length; i++ ){
    eventlabel.push(jsonpev[i].data)
};

for (i = 0; i < jsonpev.length; i++ ){
    eventcarga.push(jsonpev[i].carga)
};

var ctx = document.getElementById('myChart');
var LineChart = new Chart(ctx, {
    type: 'line',
    data:{
        labels: eventlabel,
        datasets: [{
            label: "PEV 1",
            backgroundColor: 'rgb(157, 232, 168)',
            borderColor: 'rgb(112, 178, 122)',
            data: eventcarga,
            borderWidth: 5,
            pointBorderColor: "rgb(74, 109, 79)"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


