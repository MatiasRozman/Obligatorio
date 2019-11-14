import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class Final extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div id="box">
                        <div className="container">
                            <div className="row-md-auto">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <a className="navbar-brand" href="" id="logo"><img className="first-logo" src="/images/logo.png"
                                        title="MetMe" /></a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarText">
                                        <ul className="navbar-nav mr-auto">
                                        </ul>
                                        <span className="nav-item">
                                            <a className="nav-link" href="#" id="textmenu">HOME</a>
                                        </span>
                                        <span className="nav-item">
                                            <a className="nav-link" href="#" id="textmenu">ABOUT</a>
                                        </span>
                                        <span className="nav-item">
                                            <a className="nav-link" href="#" id="textmenu">SERVICIOS</a>
                                        </span>
                                        <span className="nav-item">
                                            <a className="nav-link" href="#" id="textmenu">RESUMEN</a>
                                        </span>
                                        <span className="nav-item">
                                            <a className="nav-link" href="#" id="textmenu">TRABAJOS</a>
                                        </span>
                                        <span className="nav-item">
                                            <a className="nav-link" href="#" id="textmenu">CONTACTO</a>
                                        </span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div id="imagen">
                        <div className="container">
                            <div id="primer">
                                <div alt="Diseno grafico, diseno web">
                                    <h4>Mi nombre es Matias Rozman</h4>
                                    <h2>Diseño gráfico - Diseño web - Marketing</h2>
                                    <p id="sub"><u>Por más inforación, por favor contactame</u></p>
                                    <div className="col" id="social">
                                        <img className="img-social" src="/images/facebook.png"
                                            href="https://www.facebook.com/pablomatias13" title="Facebook" />
                                        <img className="img-social" src="/images/instagram.png"
                                            href="https://www.instagram.com/matirozman13/?hl=es-la" title="Instagram" />
                                        <img className="img-social" src="images/linkedin.png"
                                            href="https://www.linkedin.com/in/mat%C3%ADas-rozman-812b47149/" title="Linkedin" />

                                        <img className="img-social" src="/images/google.png" href="#" title="Google" />
                                        <img className="img-social" src="/images/twitter.png" href="https://twitter.com/pmrozman"
                                            title="Twitter" />
                                    </div>
                                    <div className="col" id="button-email">
                                        <button type="button" className="btn btn-primary">Enviar e-mail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header >
                <div className="container">
                    <div className="row" id="curriculum">
                        <div className="col-6">
                            <img className="img-fluid" src="images/MatiasRozman.jpg" title="Matias Rozman" alt="Matias Rozman" />
                        </div>
                        <div className="col-6">
                            <span className="title">¡Hola!</span>
                            <br />
                            <span className="text">Soy estudiante de la Licenciatura de Diseño de Comunicación Visual en UdelaR.
                                En Senpai Academy estudié Analista en Marketing Digital y Front End; y en BIOS, Diseño Web y
                                Diseño
                                Gráfico.
                                Actualmente, y desde hace 4 años, trabajo en Siniestro como administrador de e-commerce dentro de
                                Mercado Libre.
                                Anteriormente trabajé en Mercado Libre en atención al cliente recibiendo reclamos y consultas.
                        </span>
                            <div id="list">
                                <div className="row" id="list-inside">
                                    <div className="col-2"><span id="text-list-two">Nombre</span></div>
                                    <div className="col-1"><span id="text-list-two">:</span></div>
                                    <div className="col-3"><span id="text-list">Matías Rozman</span></div>
                                </div>
                                <div className="row" id="list-inside">
                                    <div className="col-2"><span id="text-list-two">Edad</span></div>
                                    <div className="col-1"><span id="text-list-two">:</span></div>
                                    <div className="col-3"><span id="text-list">27 años</span></div>
                                </div>
                                <div className="row" id="list-inside">
                                    <div className="col-2"><span id="text-list-two">Experiencia</span></div>
                                    <div className="col-1"><span id="text-list-two">:</span></div>
                                    <div className="col-3"><span id="text-list">4 años</span></div>
                                </div>
                                <div className="row" id="list-inside">
                                    <div className="col-2"><span id="text-list-two">País</span></div>
                                    <div className="col-1"><span id="text-list-two">:</span></div>
                                    <div className="col-3"><span id="text-list">Uruguay</span></div>
                                </div>
                                <div className="row" id="list-inside">
                                    <div className="col-2"><span id="text-list-two">Localidad</span></div>
                                    <div className="col-1"><span id="text-list-two">:</span></div>
                                    <div className="col-3"><span id="text-list">Montevideo</span></div>
                                </div>
                                <div className="row" id="list-inside">
                                    <div className="col-2"><span id="text-list-two">Email</span></div>
                                    <div className="col-1"><span id="text-list-two">:</span></div>
                                    <div className="col-3"><span id="text-list">hola@gmail.com</span></div>
                                </div>
                                <div className="row" id="list-inside">
                                    <div className="col-2"><span id="text-list-two">Celular</span></div>
                                    <div className="col-1"><span id="text-list-two">:</span></div>
                                    <div className="col-3"><span id="text-list">091234567</span></div>
                                </div>
                            </div>
                            <div className="row" id="final-list-buttom">
                                <div className="col-5">
                                    <button type="button" className="btn btn-primary" id="final-list-text">Descargar resumen</button>
                                </div>
                                <button type="button" className="btn btn-danger" id="final-list-text">Contactame</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="container-cards">
                    <div className="container">
                        <div className="row justify-content-center" id="title-whats">
                            <span>¿Qué hago?</span>
                        </div>
                        <div className="row">
                            <div className="card-group">
                                <div className="card">
                                    <div className="row justify-content-center">
                                        <img src="images/coding.png" className="card-img-top" alt="Front end developer" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Front-end developer</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row justify-content-center">
                                        <img src="images/inspiration.png" className="card-img-top" alt="Graphic desgin" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Diseño gráfico</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row justify-content-center">
                                        <img src="images/target.png" className="card-img-top" alt="Busisness branding" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Marketing</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row justify-content-center">
                                        <img src="images/telephone.png" className="card-img-top" alt="Consultacys" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Consultoría</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="noseque">
                        <div className="row">
                            <div className="col-6" id="border">
                                <div className="text">
                                    <img src="images/mortarboard.png" className="card-line-top" alt="Mortarboard" />
                                    <span className="first-title-line">EDUCACIÓN</span>
                                </div>
                                <div id="time-line-boxes">
                                    <div className="text-time-b">
                                        <div className="radius">
                                        </div>
                                        <p className="text-line-time-title">Lic. Diseño de la Comunicación Visusal - UdelaR</p>
                                        <p className="card-text-mute"><small className="text-muted">2013 - act.</small></p>
                                        <p className="text-line-time-box">Expenses as material breeding insisted building to in.
                                            Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.
                                    </p>
                                    </div>
                                </div>
                                <div id="time-line-boxes">
                                    <div className="text-time-b">
                                        <div className="radius">
                                        </div>
                                        <p className="text-line-time-title">Analista en Marketing Digital - Senpai Academy</p>
                                        <p className="card-text-mute"><small className="text-muted">2017 - 2018</small></p>
                                        <p className="text-line-time-box">Expenses as material breeding insisted building to in.
                                            Continual
                                            so distrusts pronounce by
                                        unwilling listening. Thing do taste on we manor.</p>
                                    </div>
                                </div>
                                <div id="time-line-boxes">
                                    <div className="text-time-b">
                                        <div className="radius">
                                        </div>
                                        <p className="text-line-time-title">Arquitectura - UdelaR</p>
                                        <p className="card-text-mute"><small className="text-muted">2011 - 2012</small></p>
                                        <p className="text-line-time-box">Expenses as material breeding insisted building to in.
                                            Continual
                                            so distrusts pronounce by
                                        unwilling listening. Thing do taste on we manor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6" id="border">
                                <div className="text">
                                    <img src="images/portfolio.png" className="card-line-top" alt="Consultacys" />
                                    <span className="first-title-line">EXPERIENCIA</span>
                                </div>
                                <div id="time-line-boxes">
                                    <div className="text-time-b">
                                        <div className="radius">
                                        </div>
                                        <p className="text-line-time-title">Administrador de e-commerce - Siniestro</p>
                                        <p className="card-text-mute"><small className="text-muted">Feb. 2016 - Act.</small></p>
                                        <p className="text-line-time-box">Expenses as material breeding insisted building to in.
                                            Continual
                                            so distrusts pronounce by
                                        unwilling listening. Thing do taste on we manor.</p>
                                    </div>
                                </div>
                                <div id="time-line-boxes">
                                    <div className="text-time-b">
                                        <div className="radius">
                                        </div>
                                        <p className="text-line-time-title">Atención al usuario - Mercado Libre</p>
                                        <p className="card-text-mute"><small className="text-muted">Jun. 2014 - Feb. 2016</small></p>
                                        <p className="text-line-time-box">Expenses as material breeding insisted building to in.
                                            Continual
                                            so distrusts pronounce by
                                        unwilling listening. Thing do taste on we manor.</p>
                                    </div>
                                </div>
                                <div id="time-line-boxes">
                                    <div className="text-time-b">
                                        <div className="radius">
                                        </div>
                                        <p className="text-line-time-title">Empleado - Ferreteria del Parque</p>
                                        <p className="card-text-mute"><small className="text-muted">Feb. 2012 - Mar. 2014</small></p>
                                        <p className="text-line-time-box">Expenses as material breeding insisted building to in.
                                            Continual
                                            so distrusts pronounce by
                                        unwilling listening. Thing do taste on we manor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="image-grid">
                    <div className="container">
                        <div className="row justify-content-center" id="title-grid">
                            <span>Mis trabajos</span>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col" id="button-grid">
                                <button type="button" className="btn btn-primary" id="button-content">Todos</button>
                                <button type="button" className="btn btn-primary" id="button-content">Diseño</button>
                                <button type="button" className="btn btn-primary" id="button-content">Desarrollo</button>
                                <button type="button" className="btn btn-primary" id="button-content">Marketing</button>
                            </div>
                        </div>
                        <div className="row justify-content-center" id="image-grid-cotent">
                            <div className="col-4" id="grid-row-one">
                                <img src="images/img-1.jpg" alt="grid-1" id="img-content" />
                            </div>
                            <div className="col-4" id="grid-row-one">
                                <img src="images/img-2.jpg" alt="grid-2" id="img-content" />
                            </div>
                            <div className="col-4" id="grid-row-one">
                                <img src="images/img-3.jpg" alt="grid-3" id="img-content" />
                            </div>
                            <div className="col-4" id="grid-row-one">
                                <img src="images/img-4.jpg" alt="grid-1" id="img-content" />
                            </div>
                            <div className="col-4" id="grid-row-one">
                                <img src="images/img-5.jpg" alt="grid-2" id="img-content" />
                            </div>
                            <div className="col-4" id="grid-row-one">
                                <img src="images/img-6.jpg" alt="grid-3" id="img-content" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="project-all">
                    <div className="container">
                        <div className="row justify-content-center" id="project-row">
                            <div className="col-3" id="conteiner-project">
                                <img src="images/support.png" alt="PROJECT WORKING" id="img-project" />
                                <h2>250</h2>
                                <p id="project-text">PROYECTOS ACTUALMENTE</p>
                            </div>
                            <div className="col-3" id="conteiner-project">
                                <img src="images/muscle.png" alt="PROJECT DONE" id="img-project" />
                                <h2>950</h2>
                                <p id="project-text">PROYECTOS HECHOS</p>
                            </div>
                            <div className="col-3" id="conteiner-project">
                                <img src="images/trophy.png" alt="AWARDS RECEIVED" id="img-project" />
                                <h2>150</h2>
                                <p id="project-text">PREMIOS GANADOS</p>
                            </div>
                            <div className="col-3" id="conteiner-project">
                                <img src="images/heart.png" alt="HAPPY CLIENT" id="img-project" />
                                <h2>299</h2>
                                <p id="project-text">CLIENTES FELICES</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center" id="all-form">
                        <div id="conteiner-form">
                            <div className="row" id="table">
                                <div className="col-6">
                                    <div>
                                        <p id="contact-title">FORMULARIO DE CONTACTO</p>
                                    </div>
                                    <form>
                                        <div className="form-row" id="form-text">
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" id="name" placeholder="Nombre"></input>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="email" className="form-control" id="email" placeholder="E-mail"></input>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subjet" placeholder="Asunto"></input>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="message" rows="3"
                                                placeholder="Tu mensaje"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <p id="contact-title">Dirección de contacto</p>
                                    </div>
                                    <div className="conteiner-adress">
                                        <div className="row">
                                            <div className="col-2"><img src="images/chincheta.jpg" alt="Ubicacion" id="img-adress" />
                                            </div>
                                            <div className="col-md-auto"></div>
                                            <p id="text-adress">Punta Carretas, Montevideo</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-2"><img src="images/email.jpg" alt="Email" id="img-adress" />
                                            </div>
                                            <div className="col-md-auto"></div>
                                            <p id="text-adress">hola@gmail.com</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-2"><img src="images/phone.jpg" alt="Telefono" id="img-adress" />
                                            </div>
                                            <div className="col-md-auto"></div>
                                            <p id="text-adress">091234567</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-auto" id="mapa">
                                    {/* <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.6754763559295!2d-56.161410886770064!3d-34.922418366984644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8112546fcd5b%3A0xc567be2a177df913!2sSenpai%20Academy!5e0!3m2!1ses-419!2suy!4v1572108395870!5m2!1ses-419!2suy"
                                        width="880" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="col" id="social-footer">
                                    <img className="img-social" src="/images/facebook.png" href="https://www.facebook.com/pablomatias13"
                                        title="Facebook" />
                                    <img className="img-social" src="images/instagram.png"
                                        href="https://www.instagram.com/matirozman13/?hl=es-la" title="Instagram" />
                                    <img className="img-social" src="images/linkedin.png"
                                        href="https://www.linkedin.com/in/mat%C3%ADas-rozman-812b47149/" title="Linkedin" />

                                    <img className="img-social" src="images/google.png" href="#" title="Google" />
                                    <img className="img-social" src="images/twitter.png" href="https://twitter.com/pmrozman"
                                        title="Twitter" />
                                </div>
                                <div className="col">
                                    <p>Copyright © 2019 UIdeck Todos los derechos reservados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >);
    }
}

ReactDOM.render(<Final />, document.getElementById("root"));