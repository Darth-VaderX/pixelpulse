import React from 'react';
import { ContextApp } from '../app/App';
import scroll from '../../classes/Scroll';
import { BooleanState } from '../../interfaces/interface';
import styles from './Cross.module.scss';

interface ICross {
    setModalState: BooleanState;
    scrollStatus: 'on' | 'off';
}

const Cross = ({ setModalState, scrollStatus }: ICross): React.JSX.Element => {
    const contextApp = React.useContext(ContextApp);

    const handleCross = (): void => {
        contextApp?.handleSoundModal();
        setModalState(false);

        if (scrollStatus === 'off') {
            scroll.off();
            return;
        }

        scroll.on();
    };

    return (
        <div className={styles.cross_box} onClick={handleCross}>
            <svg
                className={styles.cross}
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
                    fill="white"
                />
                <clipPath id="clip0_1_1891">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </svg>
        </div>
    );
};

export default Cross;
