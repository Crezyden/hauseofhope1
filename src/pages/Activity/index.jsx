import { useState } from 'react';
import styles from './activity.module.css';
import ContentHeaderLinks from '../../components/ContentHeaderLinks';
const Activity = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <section className="content-header">
                <div className="flex full-block">
                    <img src="https://houseoflv.herokuapp.com/static/img/activity/afterbuttonimg.png" alt="" />
                </div>
                <ContentHeaderLinks />
            </section>
            <div className="block">
                <h1 className="left">Activity</h1>
                <section className="flex block textcontent-left">
                    <p>Text</p>
                    <img src="https://houseoflv.herokuapp.com/static/img/activity/img1.png" alt="" />
                </section>
                <section className="tabs">
                    <ul className="tabs">
                        <li onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''}>
                            <img src="https://houseoflv.herokuapp.com/static/img/activity/mamclub.png" alt="" />
                            <h2>Mom club</h2>
                        </li>
                        <li onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'active' : ''}>
                            <img src="https://houseoflv.herokuapp.com/static/img/activity/activity.png" alt="" />
                            <h2>Activity</h2>
                        </li>
                        <li onClick={() => setActiveTab(3)} className={activeTab === 3 ? 'active' : ''}>
                            <img src="https://houseoflv.herokuapp.com/static/img/activity/creativityweek.png" alt="" />
                            <h2>Creativity week</h2>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Activity;