import { useParams, Link } from 'react-router-dom';

export default function HeroDetail({ heroes }) {
  const { id } = useParams();
  const hero = heroes.find((h) => h.id === parseInt(id));

  if (!hero) return <p>Hero not found</p>;

  return (
    <div className="hero-detail-page">
      <h2>{hero.name}</h2>
      <img src={hero.imageSrc} alt={hero.name} style={{ width: '200px' }} />
      <ul>
        <li><strong>Gender:</strong> {hero.gender}</li>
        <li><strong>Category:</strong> {hero.category}</li>
        <li><strong>Power:</strong> {hero.power}</li>
        <li><strong>Speed:</strong> {hero.speed}</li>
        <li><strong>Aura Color:</strong> <span style={{ color: hero.auraColor }}>{hero.auraColor}</span></li>
      </ul>

      <p className="hero-comment">This hero seems {hero.speed > 70 ? 'fast and powerful' : 'strategic but fragile'}...</p>

      <Link to="/gallery">⬅ Back to Gallery</Link>
    </div>
  );
}
