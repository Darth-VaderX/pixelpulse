import React from 'react';
import styles from './Cross.module.scss';
import type { ICross } from '../../interfaces/interface.component';

const Cross = (props: ICross): React.JSX.Element => {
    const { handler } = props;

    return (
        <div className={styles.cross_box} onClick={handler}>
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

export { Cross };
