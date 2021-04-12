import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHome, faPhoneAlt, faDonate } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ContentHeaderLinks from '../../components/ContentHeaderLinks';
import styles from './contacts.module.css';
const Contacts = () => {
    return (
        <>
            <section className="content-header">
                <div className="flex block">
                    <img src="https://houseoflv.herokuapp.com/static/img/contacts.png" alt="" />
                </div>
                <ContentHeaderLinks />
            </section>
            <section className={`flex block ${styles['contact-us']}`}>
                <div>
                    <h1 className="left">Contacts</h1>
                    <ul className={styles['ca-ul']}>
                        <li>
                            <p><FontAwesomeIcon icon={faEnvelope} size="lg" fixedWidth color="var(--yellow)" pull="left" />houseofhope.lv@gmail.com</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faHome} size="lg" fixedWidth color="var(--yellow)" pull="left" />Rīgas 67, Liepāja <br />LV3401, LATVIA</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faPhoneAlt} size="lg" fixedWidth color="var(--yellow)" pull="left" />+371 29897601</p>
                        </li>
                    </ul>
                    <h1 className="left">Social media</h1>
                    <ul className={styles['ca-ul']}>
                        <li>
                            <p><FontAwesomeIcon icon={faFacebookF} size="lg" fixedWidth color="var(--yellow)" pull="left" />House of Hope/Karosta Kids</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth color="var(--yellow)" pull="left" />houseofhope_lv</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="left">Get in touch</h1>
                    <section className={styles['input-area']}>
                        <p className={styles['name-email']}>
                            <input type="text" name="" id="" placeholder="Your name" />
                            <input type="email" name="" id="" placeholder="E-mail" />
                        </p>
                        <p className={styles.subject}>
                            <input type="text" name="" id="" placeholder="Subject" />
                        </p>
                        <p>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        </p>
                        <p>
                            <button>Submit</button>
                        </p>
                    </section>
                </div>
            </section>
            <section className="full-block">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2200.7549223441324!2d21.014330815960605!3d56.52364788076658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46faa63a2482465b%3A0x3ff86f46a67cf138!2zUsSrZ2FzIGllbGEgNjcsIExpZXDEgWphLCBMVi0zNDAx!5e0!3m2!1sen!2slv!4v1617840211007!5m2!1sen!2slv" style={{width: '100%', border: 0}} height="400"  loading="lazy"></iframe>
            </section>
        </>
    );
}

export default Contacts;