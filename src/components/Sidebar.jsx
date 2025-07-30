import './Sidebar.css';

import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Hero Academy</h2>
            <nav>
                <Link to="/">🏠 Home</Link>
                <Link to="/createCharacter">🛠️ Create a Character</Link>
                <Link to="/gallery">🧑‍🚀 Characters Gallery</Link>
            </nav>
        </div>
    );
}
