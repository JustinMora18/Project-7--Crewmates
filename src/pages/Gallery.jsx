import './Gallery.css';
import { Link } from 'react-router-dom';

export default function Gallery({ heroes, onEdit, onDelete }) {
    return (
        <div className="gallery-page">
            <h2>Your Heroes</h2>
            <div className="gallery-grid">
                {heroes.length === 0 ? (
                <p>No heroes created yet.</p>
                ) : (
                heroes.map((hero) => (
                <div key={hero.id} className="hero-card">
                    <Link to={`/hero/${hero.id}`} className="hero-link">
                    <div
                        className="hero-image"
                        style={{
                            borderColor: hero.auraColor,
                            color: hero.auraColor
                    }}
                    >
                        <img src={hero.imageSrc} alt={hero.name} />
                    </div>
                    <h3>{hero.name}</h3>
                    <p><strong>Power:</strong> {hero.power}</p>
                    </Link>

                <div className="hero-actions">
                    <button onClick={() => onEdit(hero.id)}>Edit</button>
                    <button onClick={() => onDelete(hero.id)}>Delete</button>
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  );
}
