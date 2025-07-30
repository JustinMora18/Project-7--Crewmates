import './Home.css';

export default function Home (){
    return (
        <div className="home-page">
            <h1>Welcome to <span>Hero Academy</span>!</h1>
            <p>
                Train your own custom team of powerful heroes.<br />
                Assign them unique abilities, weaknesses, and set their stats before sending them on missions!
            </p>

            <div className="hero-banner">
                <img src="/images/heroes-banner.jpg" alt="Marvel and DC heroes" />
            </div>
        </div>
    );
}