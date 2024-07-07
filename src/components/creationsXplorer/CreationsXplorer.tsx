import React from 'react';
import CreationsXplorerContent from '../creationsXplorerContent/CreationsXplorerContent';
import Frame from '../frame/Frame';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { IXplorer } from '../../interfaces/interface.creations';
import styles from './CreationsXplorer.module.scss';

const Xplorer = (props: IXplorer): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { projects, setXplorerState, xplorerState } = props;
    const path: string = `location: /projects${xplorerState === 'projectImages' ? '/' + projects[contextApp.modalProject].name : ''}`;

    return (
        <div className={styles.xplorer}>
            <h3 className={styles.xplorer__title}>file xplorer</h3>
            <h4 className={styles.xplorer__path}>{path}</h4>

            <CreationsXplorerContent
                projects={projects}
                setXplorerState={setXplorerState}
                xplorerState={xplorerState}
            />

            <Frame />
        </div>
    );
};

export default Xplorer;
