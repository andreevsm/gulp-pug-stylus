/**
 * Global options for Chart
 */
Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#428DCA';
Chart.defaults.global.animation.duration = 4000;

var _totalSalesChart = document.getElementById('totalSales').getContext('2d');
var _newUsers = document.getElementById('newUsers').getContext('2d');
var _orderBreakdown = document.getElementById('orderBreakdown').getContext('2d');
var _couponUsage = document.getElementById('couponUsage').getContext('2d');

var totalSalesChart = new Chart(_totalSalesChart, {
    type: 'line',
    data: {
        labels: ['1-4', '6-4', '11-4', '16-4', '21-4', '26-4'],
        datasets: [{
            label: 'Total Sales',
            data: [
                594,
                1945,
                960,
                1419,
                262,
                172
            ],
            backgroundColor: 'rgba(59, 170, 255, 0.3)',
            borderWidth: 0.1,
            borderColor: '#428DCA',
            hoverBorderWidth: 1,
            hoverBorderColor: '#000'
        }, {
            label: 'Total Sales',
            data: [
                594,
                1045,
                2060,
                519,
                162,
                2072
            ],
            backgroundColor: 'rgba(88, 181, 252, 1)',
            borderWidth: 0.1,
            borderColor: '#777',
            hoverBorderWidth: 1,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: true
        }
    }
});

var newUsersChart = new Chart(_newUsers, {
    type: 'line',
    data: {
        labels: ['1-4', '6-4', '11-4', '16-4', '21-4', '26-4'],
        datasets: [{
            label: 'New Users',
            data: [
                594,
                945,
                960,
                1419,
                1762,
                172
            ],
            backgroundColor: 'rgba(59, 170, 255, 0.3)',
            borderWidth: 0.1,
            borderColor: '#428DCA',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }, {
            label: 'New Users',
            data: [
                594,
                1045,
                2060,
                519,
                162,
                372
            ],
            backgroundColor: 'rgba(121, 101, 241, 1)',
            borderWidth: 0.1,
            borderColor: '#777',
            hoverBorderWidth: 1,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: true
        }
    }
});

var orderBreakdownChart = new Chart(_orderBreakdown, {
    type: 'doughnut',
    data: {
        labels: ['60% lunch', '40% Dinner'],
        datasets: [{
            label: 'Total Order',
            data: [400, 600],
            backgroundColor: [
                'rgba(254, 200, 108, 1)',
                'rgba(239,102,117, 1)'
            ],
            borderWidth: 0.1,
            borderColor: '#fff',
            hoverBorderWidth: 1,
            hoverBorderColor: '#000',
        }]
    },
    options: {
        cutoutPercentage: 75,
        legend: {
            display: true
        }
    }
});

var couponUsageChart = new Chart(_couponUsage, {
    type: 'bar',
    data: {
        labels: ['65% Mon', '82% Tue', '87% Wed', '23% Thr', '68% Fri', '27% Sat', '65% Sun'],
        datasets: [{
            label: 'Population',
            data: [
                650,
                820,
                870,
                230,
                680,
                270,
                650
            ],
            backgroundColor: [
                'rgba(107, 202, 85, 1)',
                'rgba(107, 202, 85, 1)',
                'rgba(107, 202, 85, 1)',
                'rgba(107, 202, 85, 1)',
                'rgba(107, 202, 85, 1)',
                'rgba(107, 202, 85, 1)',
                'rgba(107, 202, 85, 1)'
            ],
            borderWidth: 0.1,
            borderColor: '#428DCA',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: true
        }
    }
});