import React from 'react';
import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
import type { IErrorPage } from '../../interfaces/interface.component';

const ErrorPage = (props: IErrorPage): React.JSX.Element => {
    const { status, detail } = props;
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container} data-text={status}>
                    <h1 className={`${styles.title} ${styles.glitch}`} data-text={status}>
                        {status}
                    </h1>
                    <p className={`${styles.description} ${styles.glitch}`} data-text={detail}>
                        {detail}
                    </p>
                    <Link className={styles.home} to="/beginning">
                        return home
                        <span className={`${styles.home__line} ${styles.top_left}`}></span>
                        <span className={`${styles.home__line} ${styles.top_right}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_left}`}></span>
                        <span className={`${styles.home__line} ${styles.bottom_right}`}></span>
                        <span className={styles.slick}></span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export { ErrorPage };
