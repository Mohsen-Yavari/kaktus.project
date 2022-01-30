import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBacterium,faBroadcastTower,faInstagramSquare,faBacteria} from "@fortawesome/free-solid-svg-icons";


export default function EnginuerCard({enginer}){
    return (
        <div className="enguner-card">
            <img src={enginer.img} alt="" />
            <div className="enguner-card-info">
                <h3 className="enguner-card-name">{enginer.name}</h3>
                <p className="enguner-resipe-count">Recipes: <b>{enginer.resipeCount}</b></p>
                <p className="enguner-cuisine">cuisine: <b>{enginer.work}</b></p>
                <p className="enguner-icons">
                <FontAwesomeIcon icon={faBroadcastTower} />
                <FontAwesomeIcon icon={faBacteria} />
                <FontAwesomeIcon icon={faBacterium} />
                </p>
            </div>
        </div>
    )
}