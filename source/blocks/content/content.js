    var myChart = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif";
    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontColor = '#428DCA';
    Chart.defaults.global.animation.duration = 4000;
    // Chart.defaults.doughnut.cutoutPercentage = 50
    // Chart.defaults.global.elements.doughnut.cutoutPercentage = 50;

    var massPopChart = new Chart(myChart, {
        type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['1-4', '6-4', '11-4', '16-4', '21-4', '26-4'],
            datasets: [{
                label: 'Population',
                data: [
                    594,
                    1945,
                    960,
                    1419,
                    262,
                    172
                ],
                //backgroundColor:'green',
                backgroundColor: [
                    'rgba(59, 170, 255, 0.3)'
                ],
                borderWidth: 0.1,
                borderColor: '#428DCA',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }, {
                label: 'Population',
                data: [
                    594,
                    1045,
                    2060,
                    519,
                    162,
                    2072
                ],

                //backgroundColor:'green',

                backgroundColor: [

                    'rgba(88, 181, 252, 1)',

                ],

                borderWidth: 2,

                borderColor: '# 777 ',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }]
        },
        options: {
            // title: {
            //     display: true,
            //     text: 'TOTAL SALES',
            //     fontSize: 25,
            //     position: 'top'
            // },

            legend: {
                display: true,
                // position: 'right',
                labels: {
                    fontColor: '#fff',
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: "normal"
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true
            }
        }
    });



    var myChart2 = document.getElementById('myChart2').getContext('2d');
    // Global Options

    var massPopChart2 = new Chart(myChart2, {
        type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['1-4', '6-4', '11-4', '16-4', '21-4', '26-4'],
            datasets: [{
                label: 'Population',
                data: [
                    594,
                    1945,
                    960,
                    1419,
                    262,
                    172
                ],
                //backgroundColor:'green',
                backgroundColor: [
                    'rgba(59, 170, 255, 0.3)'
                ],
                borderWidth: 0.1,
                borderColor: '#428DCA',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }, {
                label: 'Population',
                data: [
                    594,
                    1045,
                    2060,
                    519,
                    162,
                    2072
                ],

                //backgroundColor:'green',

                backgroundColor: [

                    'rgba(121, 101, 241, 1)',

                ],

                borderWidth: 2,

                borderColor: '#777 ',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }]
        },
        options: {
            // title: {
            //     display: true,
            //     text: 'TOTAL SALES',
            //     fontSize: 25,
            //     position: 'top'
            // },

            legend: {
                display: true,
                // position: 'right',
                labels: {
                    fontColor: '#fff',
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: "normal"
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true
            }
        }
    });




    var myChart3 = document.getElementById('myChart3').getContext('2d');
    // Global Opt
    var massPopChart3 = new Chart(myChart3, {
        labelAlign: 'center',
        type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['60% lunch', '40% Dinner'],
            datasets: [{
                label: 'Population',
                data: [
                    400,
                    600
                ],
                //backgroundColor:'green',
                backgroundColor: [
                    'rgba(254, 200, 108, 1)',
                    'rgba(239,102,117, 1)'
                ],
                borderWidth: 0.1,
                borderColor: '#fff',
                hoverBorderWidth: 1,
                hoverBorderColor: '#000'
            }]
        },
        options: {
            elements: {
                center: {
                    text: '50%',
                }
            },
            cutoutPercentage: 75,

            legend: {
                display: false
            }
        }
    });

    Chart.pluginService.register({
        beforeDraw: function(chart) {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var text = "75%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    });