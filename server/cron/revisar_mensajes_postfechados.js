const cron = require('node-cron');
const axios = require('axios');

// Ejecutar cada */# * * * * (5 * = minutos, */# = intervalo 0-59)
cron.schedule('*/30 * * * *', () => {
    

    
    axios.get('http://mej.com.devel/revisar_pendientes')
    .then(function (response) {
        var fecha = new Date();

        console.log(`Revisado el: ${fecha}`);
            
    })
    .catch(function (error) {
        console.log(error);
    })



});