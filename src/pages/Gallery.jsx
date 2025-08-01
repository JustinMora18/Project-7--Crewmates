import { Link } from 'react-router-dom';
import './Gallery.css';

export default function Gallery({ heroes, onEdit, onDelete }) {
    return (
        <div className="gallery-page">
            <h2>Your Heroes</h2>
            <p>Click on a character to see more information and modify it.</p>
            <div className="gallery-grid">
                {heroes.length === 0 ? (
                    <p>No heroes created yet.</p>
                    ) : (
                    heroes.map((hero) => (
                        <Link to={`/hero/${hero.id}`} key={hero.id} className="hero-link">
                            <div className="hero-card">
                                <div
                                    className="hero-image"
                                    style={{ borderColor: hero.auraColor }}
                                >
                                    <img src={hero.imageSrc} alt={hero.name} style={{backgroundColor: hero.auraColor}} />
                                </div>
                                <h3>{hero.name}</h3>
                                <p><strong>Power:</strong> {hero.power}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
