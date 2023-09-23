import "../css/main.css";

function Main() {

    return (
        <main>
            <section>
                <div className="busquedaCuadro">
                    <h3><label htmlFor="busqueda">Busca una universidad/carrera</label></h3>
                    <input type="text" id="busqueda" placeholder="Ingeniería en Software" name="busqueda"></input>
                    <button id="btnBuscar">Buscar</button>
                </div>
                <div id="resultados">

                </div>
                <div id="carouselExampleAutoplaying" className="carousel slide carrusel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../src/assets/laCuencaDelPlata.jpg" className="d-block w-100" alt="La cuenca del plata"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="../src/assets/siglo21.png" className="d-block w-100" alt="Siglo 21"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="../src/assets/UNAF.jpg" className="d-block w-100" alt="UNAF"></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev btn-next " type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next btn-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
            <aside>
                <div className="universidadesDestacadas" id="univDest">

                </div>

            </aside>
        </main>
    );
}

export default Main;
