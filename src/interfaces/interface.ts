import { ICommitLog } from './interface.github';
import { UseAudioPlayer } from '../hooks/useAudioPlayer';

type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type IAppContext = {
    commits: ICommitLog[];
    creations: boolean;
    errorGithub: boolean;
    isLarge: boolean;
    isLoadingGithub: boolean;
    isMedium: boolean;
    isPressCoinBtn: boolean;
    mainMusic: UseAudioPlayer;
    modalProject: number;
    music: boolean;
    navigationMobile: boolean;
    projectImages: string[];
    handleSoundClick: () => Promise<void> | null;
    handleSoundModal: () => Promise<void> | null;
    setAvailability: BooleanState;
    setChallenge: BooleanState;
    setCreations: BooleanState;
    setCredits: BooleanState;
    setIsPressCoinBtn: BooleanState;
    setModalProject: React.Dispatch<React.SetStateAction<number>>;
    setMusic: BooleanState;
    setNavigationMobile: BooleanState;
    setProjectImages: React.Dispatch<React.SetStateAction<string[]>>;
    setSetting: BooleanState;
    setSocial: BooleanState;
    setSounds: BooleanState;
    sounds: boolean;
    styles: Record<string, string>;
    TRANSITION_TIME: number;
};

export { BooleanState, IAppContext, Page };
