import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import Snake from '../../classes/Snake';
import Joystick from '../joystick/Jouystick';
import styles from './GameSnake.module.scss';

const GameSnake = (): React.JSX.Element => {
    const [score, setScore] = React.useState(0);
    const [bestScore, setBestScore] = useLocalStorage(0, 'best-score');
    const snake = React.useRef<null | Snake>(null);
    const canvas = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        if (canvas.current) {
            snake.current = new Snake(canvas.current);
        }

        const eventKeyboard = (event: KeyboardEvent): void => {
            if (snake.current) {
                snake.current.eventKeyboard(event);
            }
        };

        window.addEventListener('keydown', eventKeyboard);

        setInterval(() => {
            const updateScore: number = snake.current!.score;

            if (updateScore > bestScore) setBestScore(updateScore);
            setScore(updateScore);
        }, 100);

        if (snake.current) {
            snake.current?.gameLoop();
        }

        return () => {
            window.removeEventListener('keydown', eventKeyboard);
            clearInterval(snake.current?.intervalId!);
        };
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <Joystick
                    className={styles.joystick}
                    down={() => snake.current?.setVectorSnake(0, 1, 'y')}
                    left={() => snake.current?.setVectorSnake(-1, 0, 'x')}
                    right={() => snake.current?.setVectorSnake(1, 0, 'x')}
                    up={() => snake.current?.setVectorSnake(0, -1, 'y')}
                />
                <div className={styles.score}>
                    <span>score:{score}</span>
                    <span>best score:{bestScore}</span>
                </div>
                <canvas className={styles.canvas} width="300" height="300" ref={canvas}></canvas>
                <a className={styles.back} href="">
                    back to all games<span className={styles.back__quotes}>&#xBB;</span>
                </a>
            </div>
        </>
    );
};

export default GameSnake;
