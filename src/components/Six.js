import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker,faBed,faHome,faShower ,faRuler} from '@fortawesome/free-solid-svg-icons';
function Six(){
    return(
    <div className="property-card">
       <div className="six img-container">
       </div>
       <div className='details-container'>
        <p className='location'><FontAwesomeIcon icon={faMapMarker} className='l-icon'/>8558 Pecan St</p>
        <h4 className='heading'>Dollar General-5416 Rock Quarry Rd,Raleigh,NC 27610</h4>
        <div className='feature-container'>
            <div className='icons-box'><FontAwesomeIcon icon={faHome} className='icon'/><p className='icon'>3 Room</p></div>
            <div className='icons-box'><FontAwesomeIcon icon={faBed} className='icon'/><p className='icon'>4 Bed</p></div>
            <div className='icons-box'> <FontAwesomeIcon icon={faShower} className='icon'/><p className='icon'>1 Bath</p></div>
            <div className='icons-box'><FontAwesomeIcon icon={faRuler} className='icon'/><p className='icon'>732 ft</p></div>
        </div>
        <div className='card-bottom'>
           <h5 className='text-primary'>$7,255<span>/month</span></h5>
           <button className='btn btn-outline-primary'>Read More</button>
        </div>
       </div>
    </div>
    )
}
export default Six;