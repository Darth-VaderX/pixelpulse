import React from 'react';
import styles from './ModalLoader.module.scss';
import { Triangle } from 'react-loader-spinner';

const ModalLoader = (): React.JSX.Element => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader__inner}>
                <Triangle
                    ariaLabel="triangle-loading"
                    color=""
                    height="80"
                    visible={true}
                    width="80"
                    wrapperClass={styles.loader__triangle}
                    wrapperStyle={{}}
                />
            </div>
        </div>
    );
};

export { ModalLoader };
