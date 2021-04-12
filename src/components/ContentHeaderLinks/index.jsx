import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContentHeaderLinks = () => {
    return (
        <>
            <a href="no" className="inst"><FontAwesomeIcon icon={faInstagram} size="lg" color="white" /></a>
            <a href="no" className="fb"><FontAwesomeIcon icon={faFacebookF} size="lg" color="white" /></a>
            <a href="no" className="donate"><FontAwesomeIcon icon={faDonate} size="lg" color="white" /></a>
        </>
    );
}

export default ContentHeaderLinks;