import React from 'react';
import { Hexagon } from '../svgIcon/SvgIcon';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { ICreationsBlock } from '../../interfaces/interface.credits';
import styles from './CreationsDetails.module.scss';

const CreationsDetails = ({ projectDefault, projects, xplorerState }: ICreationsBlock): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const getHexagon = (): React.JSX.Element => <Hexagon />;

    return (
        <div className={styles.details}>
            <Heading className={styles.details__title} level="3" textContent="details" image={getHexagon} />
            <Heading className={styles.details__subtitle} level="4" textContent="project name" />
            <span className={styles.details__text}>
                {xplorerState === 'projects' ? projectDefault.name : projects[contextApp.modalProject].name}
            </span>

            <div className={styles.decorative_line}></div>

            <Heading className={styles.details__subtitle} level="4" textContent="brief" />
            <Paragraph
                className={styles.details__text}
                textContent={
                    xplorerState === 'projects' ? projectDefault.brief : projects[contextApp.modalProject].brief
                }
            />
        </div>
    );
};

export default CreationsDetails;
