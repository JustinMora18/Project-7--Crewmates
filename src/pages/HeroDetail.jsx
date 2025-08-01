import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../supabase/client';
import './HeroDetail.css';

export default function HeroDetail({ heroes, fetchHeroes }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const hero = heroes.find((h) => h.id === id || h.id === parseInt(id));
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(hero || {});

    if (!hero) return <p>Hero not found.</p>;

    const handleDelete = async () => {
        const { error } = await supabase.from('heroes').delete().eq('id', hero.id);
        if (!error) {
            fetchHeroes();
            navigate('/gallery');
        }
    };
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('heroes')
            .update(formData)
            .eq('id', hero.id);
            
            if (!error) {
                setIsEditing(false);
                fetchHeroes();
            }
        };
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: name === 'speed' ? Number(value) : value,
            }));
        };    

    return (
        <div className="hero-detail-page">
            <button className="back-button" onClick={() => navigate('/gallery')}>← Back to Gallery</button>

            <h2>{isEditing ? 'Edit Hero' : hero.name}</h2>

            <img
                src={hero.imageSrc}
                alt={hero.name}
                style={{
                    border: `6px solid ${hero.auraColor}`,
                    borderRadius: '1rem',
                    maxWidth: '300px',
                }}
            />

            {isEditing ? (
                <form onSubmit={handleUpdate} className="edit-form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                    />
                    </label>
            
                    <label>
                        Power:
                        <input
                            type="text"
                            name="power"
                            value={formData.power}
                            onChange={handleChange}
                        />
                    </label>
                
                    <label>
                        Speed:
                        <input
                            type="range"
                            name="speed"
                            min="0"
                            max="100"
                            value={formData.speed}
                            onChange={handleChange}
                        />
                    </label>
                
                    <label>
                        Aura Color:
                        <input
                            type="color"
                            name="auraColor"
                            value={formData.auraColor}
                            onChange={handleChange}
                        />
                    </label>
                
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
                ) : (
                <div className="hero-info">
                    <p><strong>Gender:</strong> {hero.gender}</p>
                    <p><strong>Category:</strong> {hero.category}</p>
                    <p><strong>Power:</strong> {hero.power}</p>
                    <p><strong>Speed:</strong> {hero.speed}</p>
                    <p><strong>Aura:</strong> <span style={{ color: hero.auraColor }}>{hero.auraColor}</span></p>
                    
                    <div className="actions">
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}
    </div>
    );    
}
