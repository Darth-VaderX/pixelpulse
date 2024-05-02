import React from 'react';
import AchievementsLabel from '../achievementsLabel/AchievementsLabel';
import AchievementsProgress from '../achievementsProgress/AchievementsProgress';
import AchievementsRender from '../achievementsRender/AchievementsRender';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import { SwitchAchieved } from '../../interfaces/interface.achievements';
import styles from './Achievements.module.scss';

const Achievements = (): React.JSX.Element => {
    const [switchStatus, setSwitchStatus] = React.useState<SwitchAchieved>('all');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSwitchStatus(event.target.value as SwitchAchieved);
    };

    return (
        <main className={styles.achievements}>
            <Frame className={styles.frame} />
            <Heading className={styles.achievements__title} level="2" textContent="achievements" />
            <div className={styles.achievements__content}>
                <AchievementsProgress />
                <div className={styles.achievements__achievements}>
                    <AchievementsRender prefix={'achieved'} switchStatus={switchStatus} />
                    <AchievementsRender prefix={'in progress'} switchStatus={switchStatus} />
                </div>

                <div className={styles.switchers}>
                    <AchievementsLabel
                        checked={switchStatus === 'all'}
                        id="all"
                        onChange={handleChange}
                        textContent="all"
                        value={'all'}
                    />
                    <AchievementsLabel
                        checked={switchStatus === 'achieved'}
                        id="achieved"
                        onChange={handleChange}
                        textContent="achieved"
                        value={'achieved'}
                    />
                    <AchievementsLabel
                        checked={switchStatus === 'inProgress'}
                        id="inProgress"
                        onChange={handleChange}
                        textContent="in progress"
                        value={'inProgress'}
                    />
                </div>
            </div>
        </main>
    );
};

export default Achievements;
