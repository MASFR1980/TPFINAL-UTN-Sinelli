import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        
            <section className="section has-text-centered">
                <h1 className="title is-1 has-text-danger">404</h1>
                <p className="subtitle is-4">Página no encontrada</p>
                <p>Lo sentimos, la página que buscas no existe.</p>
                <Link to="/" className="button is-primary mt-4">
                    Volver al inicio
                </Link>
            </section>
        
    );
};

export { NotFound };