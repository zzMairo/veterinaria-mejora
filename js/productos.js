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
                    this.cargando = false;
                    console.log(data[0]);
                })
                .catch(err => {
                    console.log(err);
                    this.error = true;
                })
        },


        Eliminar(id) {
            const url = "http://mario12.pythonanywhere.com/productos/" + id;
            let options = {
                method: 'DELETE'
            }
            fetch(url, options)  /* envia la url y el metodo "DELETE" para eliminar en app.py */
                .then(response => response.json())
                .then(data => {
                    location.reload();  /* recarga el html */
                })
                .catch(err => {
                    console.log(err)
                })
        }


    },
    created() {
        this.fetchData(this.url);
    }
}).mount('#app')