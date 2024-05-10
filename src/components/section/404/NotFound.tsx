import { Link } from "react-router-dom";
import './styles.css'

export default function NotFound() {
    return (
        <section id="not-found" className="d-flex justify-content-center align-items-center">
            <div className="container text-center">
                <div className="row">
                    <h2>Pagina não encontrada</h2>
                    <p>
                        <Link to="/" className="button-submit">Ir para Home</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}