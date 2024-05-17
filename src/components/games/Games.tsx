import React from 'react';
import { ContextApp } from '../app/App';
import Frame from '../frame/Frame';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import GameSnake from '../gameSnake/GameSnake';
import { IAppContext } from '../../interfaces/interface';
import ArcanoidImg from '../../assets/images/arcanoid.jpg';
import SnakeImg from '../../assets/images/snake.jpg';
import styles from './Games.module.scss';

type Game = 'snake' | 'arcanoid' | 'mini games';

const Games = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const [game, setGame] = React.useState<Game>('mini games');

    return (
        <main className={styles.games}>
            <Frame className={styles.frame} />
            <Heading className={styles.games__title} textContent={game} level="2" />

            {game === 'mini games' && (
                <div className={styles.content}>
                    <div className={styles.game_description}>
                        <Paragraph
                            className={styles.game_description__text}
                            textContent="Here you will see a few mini games I implemented in React or in Canvas."
                        />
                        <Paragraph className={styles.game_description__text} textContent="Have fun!" />
                    </div>

                    <div className={styles.content__games}>
                        <figure className={styles.content__item}>
                            <img src={ArcanoidImg} alt="Arcanoid" draggable={false} />
                            <figcaption className={styles.content__description}>
                                <Heading className={styles.content__title} textContent="arcanoid" level="3" />
                                <Paragraph className={styles.content__text} textContent="destroy the bricks game" />
                            </figcaption>
                        </figure>

                        <figure
                            className={styles.content__item}
                            onClick={() => {
                                setGame('snake');
                                contextApp?.handleSoundClick();
                            }}
                        >
                            <img src={SnakeImg} alt="Snake" draggable={false} />
                            <figcaption className={styles.content__description}>
                                <Heading className={styles.content__title} textContent="snake" level="3" />
                                <Paragraph className={styles.content__text} textContent="classic snake game" />
                            </figcaption>
                        </figure>
                    </div>
                </div>
            )}

            {game === 'snake' && <GameSnake />}
        </main>
    );
};

export default Games;
