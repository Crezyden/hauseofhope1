import { useState } from 'react';
import ContentHeaderLinks from '../../components/ContentHeaderLinks';
import styles from './whoweare.module.css';
const WhoWeAre = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <section className="content-header">
                <div className="flex full-block">
                    <img src="https://houseoflv.herokuapp.com/static/img/whoweare/afterbuttonimg.png" alt="" />
                </div>
                <ContentHeaderLinks />
            </section>
            <div className="block">
                <h1 className="left">Who we are</h1>
                <section className={`flex textcontent-left ${styles.whoweare}`}>
                    <p>HOUSE OF HOPE SEEKS TO HELP TEENAGERS AND YOUTH TO LEARN VALUABLE SKILLS AND BECOME MORE EDUCATION-FOCUSED IN ORDER TO IMPROVE THEIR ABILITY TO LIVE FULFILLING LIVES
WE INVEST IN CHILDREN AND YOUTH BELIEVING THAT CHILDREN AND YOUTH  ARE NOT ONLY OUR FUTURE, BUT ALSO OUR PRESENT. WE CANNOT SAVE THE WHOLE WORLD, BUT WE CAN SAVE SOMEONE’S WHOLE WORLD FOREVER. WE ARE COMMITTED TO INCREASE THE WELLBEING OF EACH YOUTH AND CHILD. WE BELIEVE IN EQUAL RIGHTS AND OPPORTUNITIES FOR EVERY INDIVIDUAL. DON'T YOU?</p>
                    <img src="https://houseoflv.herokuapp.com/static/img/whoweare/img1.png" alt="" />
                </section>
                <section className="tabs">
                    <ul className="tabs">
                        <li onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : ''}>
                            <img src="https://houseoflv.herokuapp.com/static/img/whoweare/tabbutton/mission.png" alt="" />
                            <h2>MISSION & VISION</h2>
                        </li>
                        <li onClick={() => setActiveTab(2)} className={activeTab === 2 ? "active" : ''}>
                            <img src="https://houseoflv.herokuapp.com/static/img/whoweare/tabbutton/partners.png" alt="" />
                            <h2>PARTNERS & SUPPORTERS</h2>
                        </li>
                        <li onClick={() => setActiveTab(3)} className={activeTab === 3 ? "active" : ''}>
                            <img src="https://houseoflv.herokuapp.com/static/img/whoweare/tabbutton/history.png" alt="" />
                            <h2>HISTORY & AWARDS</h2>
                        </li>
                        <li onClick={() => setActiveTab(4)} className={activeTab === 4 ? "active" : ''}>
                            <img src="https://houseoflv.herokuapp.com/static/img/whoweare/tabbutton/team.png" alt="" />
                            <h2>TEAMS</h2>
                        </li>
                    </ul>
                    <ul className="tabs tab-content" hidden={activeTab !== 1}>
                        <li>
                            <img src="https://houseoflv.herokuapp.com/static/img/whoweare/mission.png" alt="" />
                            <h1 className="center">MISSION</h1>
                            <p>TO PROVIDE EDUCATIONAL, EMOCIONAL, PHYSICAL, AND SPIRITUAL SUPPORT FOR TEENAGERS, YOUTH, AND FAMILIES IN NEED, IN ORDER TO IMPROVE THEIR FUTURE OPPORTUNITIES AND DECREASE THE RATE OF CRIME IN LIEPAJA.</p>
                        </li>
                        <li>
                            <img src="https://houseoflv.herokuapp.com/static/img/whoweare/Vision.png" alt="" />
                            <h1 className="center">VISSION</h1>
                            <p>TO BECOME A STABLE AND SUCCESSFUL PLATFORM FOR FAMILIES, TEENAGERS AND YOUTH AT RISK TO HELP THEM BREAK THE CYCLE OF POVERTY, SOCIAL DISCRIMINATION AND LACK OF EDUCATION.</p>
                        </li>
                    </ul>
                    <ul className="tabs tab-content" hidden={activeTab !== 2}>
                        content
                    </ul>
                    <div style={{ textAlign: 'center' }} hidden={activeTab !== 3}>
                        <img src="https://houseoflv.herokuapp.com/static/img/whoweare/historyimg.jpg" alt="" />
                    </div>
                </section>
                <section className={styles.inform}>
                    <ul className={`tabs ${styles['inform-ul']}`}>
                        <li>
                            <img src="https://houseoflv.herokuapp.com/static/img/whoweare/puzzle.png" alt="" />
                            <p>WE OFFER ACTIVITIES TO IMPROVE LIFE SKILLS, SUCH AS LANGUAGE LESSONS, COOKING AND SEWING WORKSHOPS, MOVIE EVENINGS AND MORE</p>
                        </li>
                        <li>
                            <img src="https://houseoflv.herokuapp.com/static/img/whoweare/education%201.png" alt="" />
                            <p>WE PROVIDE GROUP COUNSELING SERVICES AS WELL AS ONE-ON-ONE MENTORING TO YOUTH</p>
                        </li>
                        <li>
                            <img src="https://houseoflv.herokuapp.com/static/img/whoweare/presentation%201.png" alt="" />
                            <p>TRAINING, INDIVIDUALIZED COACHING AND SUPPORT, AND NUMEROUS GROUP ACTIVITIES TO SUPPLEMENT THE ONE-TO-ONE SUPPORT AS WELL AS NUMEROUS FREE TIME ACTIVITIES THAT INCREASES THEIR QUALITY OF LIFE.</p>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default WhoWeAre;