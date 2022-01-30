import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreveiosSearches(){
    const searches = ['Bunny earse cactus','chin cuctus','saguro cactus','old lady cactus','star cuctus','Auster cactus','Christmas cactus'];

    return (
        <div className="provise-searches section">
              <h2>Provish Search</h2>
              <div className="provise-search-container">
                {searches.map((search, index) =>
                (<div key={index}
                 style={{animationDelay: index * .1 +"s"}} className="search-item">
                    {search}
                </div>))} 
              </div>
              <div className="search-box">
                   <input type="text" placeholder="Search..." />
                   <button className="btn">
                       <FontAwesomeIcon icon={faSearch} />
                   </button>
              </div>
          </div>
    )
}