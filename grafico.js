const ctx = document.getElementById('meugrafico')

new Chart(ctx,{
    type: 'line',
    data:{
        labels: ['Red','Blue','Yellow','Green','Purple','Orange'],
        datasets: [{
            label:'Valor do Potenciômetro',
            data: [12,19,3,5,2,3],
            borderWidth: 1
        }]
    },
    options:{
        scales:{
            y:{
                beginAtZero: true
            }
        }
    }
})
