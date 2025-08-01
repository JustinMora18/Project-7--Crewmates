import { Link } from 'react-router-dom';
import './Gallery.css';

export default function Gallery({ heroes, onEdit, onDelete }) {
    return (
        <div className="gallery-page">
            <h2>Your Heroes</h2>
            <p>Click on a character to see more information and modify it.</p>
            <div className="crew-stats">
                <h3>Crew Summary</h3>
                <ul>
                    <li><strong>Total Heroes:</strong> {heroes.length}</li>
                    <li><strong>Warriors:</strong> {heroes.filter(h => h.category === 'Warrior').length}</li>
                    <li><strong>Mages:</strong> {heroes.filter(h => h.category === 'Mage').length}</li>
                    <li><strong>Rogues:</strong> {heroes.filter(h => h.category === 'Rogue').length}</li>
                    <li><strong>Average Speed:</strong> {heroes.length > 0 ? Math.round(heroes.reduce((sum, h) => sum + h.speed, 0) / heroes.length) : 0}</li>
                    <li><strong>% with "Flight":</strong> {heroes.length > 0 ? Math.round(heroes.filter(h => h.power === 'Flight').length / heroes.length * 100) : 0}%</li>
                </ul>
</div>
            <div className="gallery-grid">
                {heroes.length === 0 ? (
                    <p>No heroes created yet.</p>
                ) : (
                    heroes.map((hero) => {
                        const isSuccess = hero.speed > 80 && hero.power === 'Flight';
                        return (
                            <Link to={`/hero/${hero.id}`} key={hero.id} className="hero-link">
                                <div className={`hero-card ${isSuccess ? 'success-hero' : ''}`}>
                                    <div
                                        className="hero-image"
                                        style={{ borderColor: hero.auraColor }}
                                    >
                                        <img src={hero.imageSrc} alt={hero.name} style={{ backgroundColor: hero.auraColor }} />
                                    </div>
                                    <h3>{hero.name}</h3>
                                    <p><strong>Power:</strong> {hero.power}</p>
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>
        </div>
    );
}
