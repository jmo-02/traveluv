import "./AboutUs.css";

const AboutUs = () => {
    return (
        <section className="about-us" id="about-us">
            <div className="image-about-us">
                <img src="/images/enfermera.svg" alt="Animación" />
            </div>
            <div className="content">
                <h3>
                    Acerca de Nosotros
                </h3>
                <p>
                Somos una plataforma innovadora diseñada para optimizar el transporte particular a través de una red social que conecta a conductores, pasajeros y remitentes de carga.
                Nuestra misión es hacer que la movilidad sea más eficiente, accesible y sostenible, reduciendo costos y maximizando el uso de los vehículos.
                    <br/>
                    <br/>
                    Utilizando un sistema intuitivo de publicación de viajes y carga, búsqueda avanzada, reservas seguras y pagos integrados, garantizamos una experiencia confiable para toda nuestra comunidad. Además, priorizamos la seguridad mediante la verificación de identidad y el seguimiento en tiempo real.
                    <br/>
                    <br/>
                    Creemos en un modelo de transporte colaborativo y ecológico que transforme la manera en que nos movemos y enviamos carga en el día a día. ¡Únete a nosotros y sé parte de esta revolución en la movilidad compartida! 
                </p>
            </div>
        </section>
    );
}

export default AboutUs