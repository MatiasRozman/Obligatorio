import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


class Final extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div id="box">
                        <Container>
                            <Row>
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Col md={10}>
                                        <a className="navbar-brand"><img className="first-logo" src="/images/logo.png"
                                            title="MetMe" /></a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                    </Col>
                                    <Col md={2}>
                                        <div className="collapse navbar-collapse">
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
                                    </Col>
                                </nav>
                            </Row>
                        </Container>
                    </div>
                    <div id="imagen">
                        <Container>
                            <Row className="justify-content-center">
                                <div id="primer">
                                    <div alt="Diseno grafico, diseno web">
                                        <Col>
                                            <h4>Mi nombre es Matias Rozman</h4>
                                            <h2>Diseño gráfico - Diseño web - Marketing</h2>
                                            <p id="sub"><u>Por más inforación, por favor contactame</u></p>
                                            <div id="social">
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
                                            <div id="button-email">
                                                <button type="button" className="btn btn-primary">Enviar e-mail</button>
                                            </div>
                                        </Col>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </header >
                <Container>
                    <Row id="curriculum">
                        <Col md={6}>
                            <img className="img-fluid" src="images/MatiasRozman.jpg" title="Matias Rozman" alt="Matias Rozman" />
                        </Col>
                        <Col md={6}>
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
                                <Row id="list-inside">
                                    <Col md={2}><span id="text-list-two">Nombre</span></Col>
                                    <Col md={1}><span id="text-list-two">:</span></Col>
                                    <Col md={3}><span id="text-list">Matias Rozman</span></Col>
                                </Row>
                                <Row id="list-inside">
                                    <Col md={2}><span id="text-list-two">Edad</span></Col>
                                    <Col md={1}><span id="text-list-two">:</span></Col>
                                    <Col md={3}><span id="text-list">27 años</span></Col>
                                </Row>
                                <Row id="list-inside">
                                    <Col md={2}><span id="text-list-two">Experiencia</span></Col>
                                    <Col md={1}><span id="text-list-two">:</span></Col>
                                    <Col md={3}><span id="text-list">4 años</span></Col>
                                </Row>
                                <Row id="list-inside">
                                    <Col md={2}><span id="text-list-two">País</span></Col>
                                    <Col md={1}><span id="text-list-two">:</span></Col>
                                    <Col md={3}><span id="text-list">Uruguay</span></Col>
                                </Row>
                                <Row id="list-inside">
                                    <Col md={2}><span id="text-list-two">Localidad</span></Col>
                                    <Col md={1}><span id="text-list-two">:</span></Col>
                                    <Col md={3}><span id="text-list">Montevideo</span></Col>
                                </Row>
                                <Row id="list-inside">
                                    <Col md={2}><span id="text-list-two">Email</span></Col>
                                    <Col md={1}><span id="text-list-two">:</span></Col>
                                    <Col md={3}><span id="text-list">hola@gmail.com</span></Col>
                                </Row>
                                <Row id="list-inside">
                                    <Col md={2}><span id="text-list-two">Celular</span></Col>
                                    <Col md={1}><span id="text-list-two">:</span></Col>
                                    <Col md={3}><span id="text-list">091234567</span></Col>
                                </Row>
                            </div>
                            <Row id="final-list-buttom">
                                <Col md={5}>
                                    <button type="button" className="btn btn-primary" id="final-list-text">Descargar resumen</button>
                                </Col>
                                <Col md={5}>
                                    <button type="button" className="btn btn-danger" id="final-list-text">Contactame</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div id="container-cards">
                    <Container>
                        <Row className="justify-content-center">
                            <Col>
                                <h3>¿Qué hago?</h3>
                                <div className="card-group">
                                    <div className="card">
                                        <img src="images/coding.png" className="rounded mx-auto d-block" id="card-img-top" alt="Front end developer" />
                                        <div className="card-body">
                                            <h5 className="card-title">Front-end developer</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="images/inspiration.png" className="rounded mx-auto d-block" id="card-img-top" alt="Graphic desgin" />
                                        <div className="card-body">
                                            <h5 className="card-title">Diseño gráfico</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="images/target.png" className="rounded mx-auto d-block" id="card-img-top" alt="Busisness branding" />
                                        <div className="card-body">
                                            <h5 className="card-title">Marketing</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="images/telephone.png" className="rounded mx-auto d-block" id="card-img-top" alt="Consultacys" />
                                        <div className="card-body">
                                            <h5 className="card-title">Consultoría</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <div className="container-line-time">
                        <Row>
                            <Col md={6} id="border">
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
                            </Col>
                            <Col md={6} id="border">
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
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div id="image-grid">
                    <Container>
                        <Row className="justify-content-center" id="title-grid">
                            <span>Mis trabajos</span>
                        </Row>
                        <Row className="justify-content-center">
                            <div className="col" id="button-grid">
                                <button type="button" className="btn btn-primary" id="button-content">Todos</button>
                                <button type="button" className="btn btn-primary" id="button-content">Diseño</button>
                                <button type="button" className="btn btn-primary" id="button-content">Desarrollo</button>
                                <button type="button" className="btn btn-primary" id="button-content">Marketing</button>
                            </div>
                        </Row>
                        <Row className="justify-content-center" id="image-grid-cotent">
                            <Col md={4} id="grid-row-one">
                                <img src="images/img-1.jpg" alt="grid-1" id="img-content" />
                            </Col>
                            <Col md={4} id="grid-row-one">
                                <img src="images/img-2.jpg" alt="grid-2" id="img-content" />
                            </Col>
                            <Col md={4} id="grid-row-one">
                                <img src="images/img-3.jpg" alt="grid-3" id="img-content" />
                            </Col>
                            <Col md={4} id="grid-row-one">
                                <img src="images/img-4.jpg" alt="grid-1" id="img-content" />
                            </Col>
                            <Col md={4} id="grid-row-one">
                                <img src="images/img-5.jpg" alt="grid-2" id="img-content" />
                            </Col>
                            <Col md={4} id="grid-row-one">
                                <img src="images/img-6.jpg" alt="grid-3" id="img-content" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id="project-all">
                    <Container>
                        <Row className="justify-content-center" id="project-row">
                            <Col md={3} id="conteiner-project">
                                <img src="images/support.png" alt="PROJECT WORKING" id="img-project" />
                                <h2>250</h2>
                                <p id="project-text">PROYECTOS ACTUALMENTE</p>
                            </Col>
                            <Col md={3} id="conteiner-project">
                                <img src="images/muscle.png" alt="PROJECT DONE" id="img-project" />
                                <h2>950</h2>
                                <p id="project-text">PROYECTOS HECHOS</p>
                            </Col>
                            <Col md={3} id="conteiner-project">
                                <img src="images/trophy.png" alt="AWARDS RECEIVED" id="img-project" />
                                <h2>150</h2>
                                <p id="project-text">PREMIOS GANADOS</p>
                            </Col>
                            <Col md={3} id="conteiner-project">
                                <img src="images/heart.png" alt="HAPPY CLIENT" id="img-project" />
                                <h2>299</h2>
                                <p id="project-text">CLIENTES FELICES</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row className="justify-content-center" id="all-form">
                        <div id="container-form">
                            <Row id="table">
                                <Col md={6}>
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
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <p id="contact-title">Dirección de contacto</p>
                                    </div>
                                    <div className="conteiner-adress">
                                        <Row>
                                            <Col md={3}><img src="images/chincheta.jpg" alt="Ubicacion" id="img-adress" />
                                            </Col>
                                            <Col md="auto"></Col>
                                            <p id="text-adress">Punta Carretas, Montevideo</p>
                                        </Row>
                                        <Row>
                                            <Col md={3}><img src="images/email.jpg" alt="Email" id="img-adress" />
                                            </Col>
                                            <Col md="auto"></Col>
                                            <p id="text-adress">hola@gmail.com</p>
                                        </Row>
                                        <Row>
                                            <Col md={3}><img src="images/phone.jpg" alt="Telefono" id="img-adress" />
                                            </Col>
                                            <Col md="auto"></Col>
                                            <p id="text-adress">091234567</p>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Col md="auto" id="mapa">
                                <img src="images/mapa.png" alt="Mapa" id="img-map" />
                            </Col>
                        </div>
                    </Row>
                </Container>
                <footer>
                    <Container>
                        <Row>
                            <Col>
                                <Col id="social-footer">
                                    <img className="img-social" src="/images/facebook.png" href="https://www.facebook.com/pablomatias13"
                                        title="Facebook" />
                                    <img className="img-social" src="images/instagram.png"
                                        href="https://www.instagram.com/matirozman13/?hl=es-la" title="Instagram" />
                                    <img className="img-social" src="images/linkedin.png"
                                        href="https://www.linkedin.com/in/mat%C3%ADas-rozman-812b47149/" title="Linkedin" />

                                    <img className="img-social" src="images/google.png" href="#" title="Google" />
                                    <img className="img-social" src="images/twitter.png" href="https://twitter.com/pmrozman"
                                        title="Twitter" />
                                </Col>
                                <Col>
                                    <p>Copyright © 2019 UIdeck Todos los derechos reservados</p>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div >);
    }
}

ReactDOM.render(<Final />, document.getElementById("root"));