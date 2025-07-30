import { useState } from 'react';
import './CreateHero.css';

export default function CreateHero() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [power, setPower] = useState('');
    const [speed, setSpeed] = useState(50);
    const [auraColor, setAuraColor] = useState('#00bfff');
    
    const getImageSrc = () => {
        if (gender === 'Male') return '/images/male-hero.png';
        if (gender === 'Female') return '/images/female-hero.png';
        if (gender === 'Creature') return '/images/creature-hero.png';
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const hero = {
            name,
            gender,
            category,
            power,
            speed,
            auraColor,
        };
    
        console.log('New Hero:', hero);
        // Supabase conection hereeeee
    };

    const powersList = [
        "Invisibility",
        "Teleportation",
        "Fireball",
        "Healing",
        "Super Strength",
        "Flight",
        "Telekinesis",
        "Time Control",
        "Shape Shifting",
    ];      

    return (
        <div className="create-hero-page">
            <h2>Create Your Hero</h2>
    
            <form onSubmit={handleSubmit} className="hero-form">

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
                    Hero Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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

                <label>
                    Special Power:
                    <select value={power} onChange={(e) => setPower(e.target.value)} required>
                        <option value="">-- Select --</option>
                        {powersList.map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Speed: {speed}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={speed}
                        onChange={(e) => setSpeed(Number(e.target.value))}
                    />
                </label>

                <label>
                    Aura Color:
                    <input
                        type="color"
                        value={auraColor}
                        onChange={(e) => setAuraColor(e.target.value)}
                    />
                </label>

                {gender && (
                    <div
                        className="hero-preview"
                        style={{ borderColor: auraColor }}
                    >
                        <img src={getImageSrc()} alt="Hero Preview" width="200" />
                    </div>
)}


                <button type="submit" className="submit-button">
                    Create Hero
                </button>
            </form>
        </div>
    );
}
