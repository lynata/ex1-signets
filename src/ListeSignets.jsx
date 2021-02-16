import './ListeSignets.scss';
import Signet from './Signet';
import tabSignets from './data/signets.json';

export default function ListeSignets(props) {
    return (
        <div className="ListeSignets" >
            <ul>
                {tabSignets.map((sig) => <Signet id={sig.id} titre={sig.titre} couleur={sig.couleur} date={sig.date}/>)}
            </ul>
        </div>
    );
}