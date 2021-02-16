import './Entete.scss';

export default function Entete(props) {
    return (
        <header className="Entete">
            <div className="NomAppli">
                Signet
            </div>
            <ul className="compte">
                <li>Nom</li>
                <li><img src="image-profil/Kirby.jpg" alt="kirby"/></li>
            </ul>
        </header>
    );
}