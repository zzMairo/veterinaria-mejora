document.getElementById('header').innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="index.html">Veterinaria La Tortuga</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link active" href="index.html" aria-current="page">Inicio <span class="visually-hidden">(current)</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="sobre_nosotros.html">Sobre nosotros</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="servicios.html">Servicios</a>
          </li>
          
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tienda</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="productos.html">Admin</a>
                  <a class="dropdown-item" href="alimentos.html" data-value="ALIMENTO">Alimento</a>
                  <a class="dropdown-item" href="alimentos.html" data-value="SALUD">Salud</a>
                  <a class="dropdown-item" href="alimentos.html" data-value="ROPA">Ropa</a>
                  <a class="dropdown-item" href="alimentos.html" data-value="JUGUETE">Juguetes</a>
                  <a class="dropdown-item" href="alimentos.html" data-value="ACCESORIOS">Accesorios</a>
              </div>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="contacto.html">Contactenos</a>
          </li>
      </ul>
      <form class="d-flex my-2 my-lg-0">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
  </div>
</div>
</nav>`;
document.getElementById('footer').innerHTML = `<div class="container">
            <div class="row">
              <div class="col-md-6">
                <h5>Información de contacto</h5>
                <p>Teléfono: 123-456-789</p>
                <p>Email: info@example.com</p>
              </div>
              <div class="col-md-6">
                <h5>Enlaces útiles</h5>
                <ul class="list-unstyled">
                  <li><a href="index.html">Inicio</a></li>
                  <li><a href="sobre_nosotros.html">Sobre nosotros</a></li>
                  <li><a href="servicio.html">Servicios</a></li>
                  <li><a href="contacto.html">Contacto</a></li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center">
                <p>&copy; 2023 Veterinari Tortuga. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>` 