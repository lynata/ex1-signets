import './Signet.scss';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Signet(props) {
    return (
        <li className="Signet">
            <div className="drag">
                <button><DragHandleIcon/></button>
            </div>
            <div className="image">
                <img src={"image-signet/" + props.id + ".webp"} alt={props.titre}/>
            </div>
            <div className="info">
                <h2>{props.titre}</h2>
                <p>Modifié : {props.date}</p>
            </div>
            <div className="points">
                <button><MoreVertIcon/></button>
            </div>
        </li>
    );
}