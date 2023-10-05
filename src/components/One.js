import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker,faBed,faHome,faShower ,faRuler} from '@fortawesome/free-solid-svg-icons';
function One(){
    return(
    <div className="property-card">
       <div className="one img-container">
       </div>
       <div className='details-container'>
        <p className='location'><FontAwesomeIcon icon={faMapMarker} className='l-icon'/>8558 Pecan St</p>
        <h4 className='heading'>RCE Theaters-907 S Beck Dr,Henderson ,NC 27536</h4>
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
export default One;