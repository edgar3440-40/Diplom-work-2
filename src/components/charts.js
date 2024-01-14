const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Red',
            'Green',
            'Blue',
            'Yellow',
            'Orange',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [200, 130, 78.26, 143.72,  290],
            backgroundColor: [
                '#DC3545',
                '#20C997',
                '#0D6EFD',
                '#FFC107',
                '#FD7E14',

            ],
            hoverOffset: 4,
            offset: .5
        }]
    },
    options: {
        rotation: -80
    }

});

const ctx2 = document.getElementById('myChart2')
const options = {
    rotation: 20 * (Math.PI / 180),
}
new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: [
            'Red',
            'Yellow',
            'Green',
            'Orange',
            'Blue'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [50, 200, 300, 100, 150],
            backgroundColor: [
                '#DC3545',
                '#FFC107',
                '#20C997',
                '#FD7E14',
                '#0D6EFD'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        rotation: -160
    }

});

ctx2.removeAttribute('width');

ctx2.setAttribute('width', '500');