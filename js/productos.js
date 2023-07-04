const { createApp } = Vue

createApp({
    data() {
        return {
            productos: [],
            url: "http://127.0.0.1:5000/productos",
            cargando: true,
            error: false
        }
    },
    methods: {
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;
                console.log(data);
            })
            .catch(err => {
                console.log(err);
                this.error = true;
            })
        }

    },
    created() {
        this.fetchData(this.url);
    }
}).mount('#app')