import React from 'react';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import Button from '../button/Button';
import requestForServer from '../../utils/requestForServer';
import handleIinitStatistics from '../../utils/handleInitStatistics';

interface IStatistics {
    className: Record<string, string>;
}

const HeaderStatistics = ({ className }: IStatistics): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const handleAddCoin = async (): Promise<void> => {
        try {
            if (!contextApp.isAddedCoinToday) {
                const fetchAddCoinStatus: boolean = await requestForServer<boolean>('/add_coin');

                if (fetchAddCoinStatus) {
                    await handleIinitStatistics(
                        contextApp.setLevel,
                        contextApp.setCoins,
                        contextApp.setIsAddedCoinToday,
                    );
                }
            }
        } catch (error) {
            console.error('Failed to add coin:', error);
        }
    };

    return (
        <div className={className.statistics}>
            <div className={className.level__box}>
                <span className={className.level__text}>{contextApp.level}</span> level
            </div>
            <div className={className.coins}>
                <div className={className.coins__add_box}>
                    <Button
                        className={`${className.coins__btn} ${!contextApp?.isAddedCoinToday ? className.coins__btn_pulse : ''}`}
                        delayEvent={false}
                        handleButton={handleAddCoin}
                        textContent="+"
                        type="button"
                    />
                    {!contextApp.isAddedCoinToday ? <div className={className.pulse}></div> : null}
                </div>

                <div className={className.coins__text_box}>
                    <span className={className.coins__text}>{contextApp.coins}</span> coins awarded
                </div>
            </div>
        </div>
    );
};

export default HeaderStatistics;
