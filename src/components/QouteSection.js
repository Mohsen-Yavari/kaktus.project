import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function QouteSection(){
    return(
       <div className="section qoute">
           <p className="qoust-text">
               <FontAwesomeIcon icon={faQuoteLeft} />
                 Lorem ipsum dolor, sit amet
                consectetur adipisicing eli
                umquam doloribus officia di
                stinctio. Nesciunt voluptat
                corrupti culpa, modi laudant
                liquid deleniti, recusandae 
                illum, corporis cum qui!
           </p>
           <p className="qoute-auther">
               - iquid deleniti
           </p>

       </div> 
    )
}