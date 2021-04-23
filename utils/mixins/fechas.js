import moment from 'moment'

const fechas = {
    methods: {
        formatearFecha: function(fecha) {
            return moment(fecha).format("DD MMM YYYY")
        }
    }
}

export default fechas
