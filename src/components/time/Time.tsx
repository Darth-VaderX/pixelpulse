import React from 'react';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import handleOpenModal from '../../utils/handleOpenModal';
import getZero from '../../utils/getZero';
import { IAppContext } from '../../interfaces/interface';
import styles from './Time.module.scss';

interface ITime {
    time: Date;
}

const Time = ({ time }: ITime): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    return (
        <div className={styles.time}>
            <Button
                className={styles.time__credits}
                onClick={() => handleOpenModal(contextApp?.setCredits, contextApp?.isMedium!)}
                textContent="Credits"
            />
            <div className={styles.server}>
                <span className={styles.server__time_span}>server time:</span> 8:42
            </div>

            <div className={styles.local}>
                <span className={styles.local__time_span}>local time:</span>{' '}
                {`${time.getHours()}:${getZero(time.getMinutes())}`}
            </div>
        </div>
    );
};

export default Time;
