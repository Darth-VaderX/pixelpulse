import React from 'react';
import Paragraph from '../paragraph/Paragraph';
import Button from '../button/Button';
import { BooleanState } from '../../interfaces/interface';
import styles from './ModalSendState.module.scss';

interface IModalSendState {
    setError: BooleanState;
    setLoading: BooleanState;
    setSuccessfully: BooleanState;
    status: boolean;
}

const ModalSendState = (props: IModalSendState) => {
    const success: string = 'Your message has been send successfully!';
    const error: string = 'Connection error. \n Try again later.';

    const handleOK = () => {
        props.setError(false);
        props.setLoading(false);
        props.setSuccessfully(false);
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__content}>
                    <Paragraph className={styles.modal__text} textContent={props.status ? success : error} />
                    <Button
                        className={styles.modal__button}
                        delayEvent={false}
                        handleButton={handleOK}
                        textContent="ok"
                        type="button"
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalSendState;
