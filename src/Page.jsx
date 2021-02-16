import './Page.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';


export default function Page(props) {
  return (
    <div className="Page">
        <Entete/>
        <section className="ListeSignets">
          <ListeSignets/>
        </section>
    </div>
  );
}
