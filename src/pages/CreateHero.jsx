import { useState } from 'react';
import './CreateHero.css';


export default function CreateHero() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');

    const getImageSrc = () => {
        if (gender === 'Male') return '/male-hero.png';
        if (gender === 'Female') return '/female-hero.png';
        if (gender === 'Creature') return '/creature-hero.png';
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Supabase conection hereeeee
        console.log({ name, gender, category });
    };
    
    return (
        <div className="create-hero-page">
            <h2>Create Your Hero</h2>

            <form onSubmit={handleSubmit} className="hero-form">
                <label>
                    Hero Name:
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>

                <label>
                    Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">-- Select --</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Creature">Creature</option>
                    </select>
                </label>

                <label>
                    Class / Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="">-- Select --</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Mage">Mage</option>
                        <option value="Rogue">Rogue</option>
                    </select>
                </label>
                {gender && (
                    <div style={{ border: '4px solid gray', display: 'inline-block', marginTop: '1rem' }}>
                        <img src={getImageSrc()} alt="Hero Preview" width="180" />
                    </div>
                )}
                <button type="submit" style={{ display: 'block', marginTop: '1rem' }}>
                    Create Hero
                </button>
            </form>
        </div>
    );
}