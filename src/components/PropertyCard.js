import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker,faBed,faHome,faShower ,faRuler} from '@fortawesome/free-solid-svg-icons';
function PropertyCard(props) {
    const{buildings}=props
  return (
    <Link to={`/${buildings.id}`} className="property-card">
    <div >
       <div className={`${buildings.id} img-container`}>
       </div>
       <div className='details-container'>
        <p className='location'><FontAwesomeIcon icon={faMapMarker} className='l-icon'/>{buildings.location}</p>
        <h4 className='heading'>{buildings.address}</h4>
        <div className='feature-container'>
            <div className='icons-box'><FontAwesomeIcon icon={faHome} className='icon'/><p className='icon'>{buildings.feature1}</p></div>
            <div className='icons-box'><FontAwesomeIcon icon={faBed} className='icon'/><p className='icon'>{buildings.feature2}</p></div>
            <div className='icons-box'> <FontAwesomeIcon icon={faShower} className='icon'/><p className='icon'>{buildings.feature3}</p></div>
            <div className='icons-box'><FontAwesomeIcon icon={faRuler} className='icon'/><p className='icon'>{buildings.feature4}</p></div>
        </div>
        <div className='card-bottom'>
           <h5 className='text-primary'>${buildings.cost}<span>/month</span></h5>
           <button className='btn btn-outline-primary'>Read More</button>
        </div>
       </div>
    </div>
    </Link>
  );
}

export default PropertyCard;