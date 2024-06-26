import React from 'react';
import Button from '../button/Button';
import CreationsAbout from '../creationsAbout/CreationsAbout';
import CreationsDetails from '../creationsDetails/CreationsDetails';
import CreationsTechnologies from '../creationsTechnologies/CreationsTechnologies';
import { ContextApp } from '../app/App';
import Heading from '../heading/Heading';
import Xplorer from '../creationsXplorer/CreationsXplorer';
import { IProject, XplorerState } from '../../interfaces/interface.credits';
import projects from '../../assets/json/projects.json';
import styles from './Creations.module.scss';

const projectDefault: IProject = {
    about: [
        'The site design is made in the style of a computer game. It describes my achievements and skills, information about my life and goals.',
    ],
    brief: 'reflects growth in educational or professional achievements',
    images: [''],
    link: '',
    name: 'pixelpulse',
    technologies: ['webpack', 'ts', 'react', 'nodeJS', 'mysql'],
};

const Creations = (): React.JSX.Element => {
    const contextApp = React.useContext(ContextApp);
    const [xplorerState, setXplorerState] = React.useState<XplorerState>('projects');

    return (
        <main className={styles.creations}>
            <>
                <Heading className={styles.creations__title} level="2" textContent="creations" />

                <div className={styles.creations__inner}>
                    <div className={styles.creations__details_block}>
                        <CreationsDetails
                            projectDefault={projectDefault}
                            projects={projects}
                            xplorerState={xplorerState}
                        />
                        <CreationsTechnologies
                            projectDefault={projectDefault}
                            projects={projects}
                            xplorerState={xplorerState}
                        />
                        <CreationsAbout
                            projectDefault={projectDefault}
                            projects={projects}
                            xplorerState={xplorerState}
                        />
                    </div>

                    <div className={styles.xplorer_block}>
                        <Xplorer projects={projects} setXplorerState={setXplorerState} xplorerState={xplorerState} />
                        <div className={styles.box_button}>
                            <Button
                                className={styles.box_button__back}
                                delayEvent={false}
                                handleButton={() => {
                                    setXplorerState('projects');
                                    contextApp?.handleSoundClick();
                                }}
                                textContent="Back to all projects"
                                type="button"
                            />
                        </div>
                    </div>
                </div>
            </>
        </main>
    );
};

export default Creations;
