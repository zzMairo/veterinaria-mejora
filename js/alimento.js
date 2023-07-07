/* let links = document.querySelectorAll('a[data-value]');
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    let clave = this.getAttribute('data-value');
    console.log(clave); 
  });
}); */




const { createApp, ref } = Vue

const app = createApp({ 
  data() {
    return {
      productos: [],
      url: "https://mario12.pythonanywhere.com/productos",
      cargando: true,
      error: false,
      clave: ''
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
      return this.productos.filter(dato => dato.categoria === this.clave);
    }
  },
  created() {
    this.fetchData(this.url);
  }
});

const appInstance = app.mount('#app'); // Monta la aplicación y almacena la instancia en una variable

var links = document.querySelectorAll('a[data-value]');
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var value = this.getAttribute('data-value');
    appInstance.clave = value; // Asigna el valor a la propiedad 'clave' de la instancia Vue
  });
});
