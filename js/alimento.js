const { createApp } = Vue

createApp({ 
    data() {
        return {
            productos: [],
            url: "http://mario12.pythonanywhere.com/productos",
            cargando: true,
            error: false
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    console.log(this.productos);
                })
                .catch(err => {
                    console.log(err);
                    this.error = true;
                })
        }
    },

    computed: {
        datosFiltrados() {
            const clave = 'JUGUETE';
            return this.productos.filter(dato => dato.categoria === clave);
        }
    },

    created() {
        this.fetchData(this.url);
    }

}).mount('#app')

  