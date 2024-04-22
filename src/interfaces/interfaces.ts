type Page = 'welcome' | 'beginning' | 'about' | 'logs' | 'achievements' | 'creations' | 'games';

interface Settings {
    [key: string]: boolean;
}

interface SettingContext {
    settingStatuses: Settings;
    setSettingStatuses: React.Dispatch<React.SetStateAction<Settings>>;
}

type BooleanState = React.Dispatch<React.SetStateAction<boolean>>;

type IAppContext = {
    TRANSITION_TIME: number;
    setSocial: BooleanState;
    setAvailability: BooleanState;
    setCredits: BooleanState;
    setSetting: BooleanState;
    setPage: (page: Page) => void;
    setMusic: BooleanState;
    setSounds: BooleanState;
    setNavigationMobile: BooleanState;
    isMobile: boolean;
    music: boolean;
    navigationMobile: boolean;
    page: Page;
    sounds: boolean;
    styles: Record<string, string>;
};

interface GetWrapperClass {
    effects: boolean[];
    settingState: boolean;
    isMobile: boolean;
}

interface IUser {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
}

interface IAuthor {
    date: string;
    email: string;
    name: string;
}

interface ITree {
    sha: string;
    url: string;
}

interface IVerification {
    payload: null;
    reason: string;
    signature: null;
    verified: false;
}

interface ICommit {
    author: IAuthor;
    comment_count: number;
    committer: IAuthor;
    message: string;
    tree: ITree;
    url: string;
    verification: IVerification;
}

interface IParents extends ITree {
    html_url: string;
}

interface IGithubRespone extends ITree {
    author: IUser;
    comments_url: string;
    commit: ICommit;
    committer: IUser;
    html_url: string;
    node_id: string;
    parents: IParents;
}

interface ICommitLog {
    message: string;
    date: string;
}

export { IAppContext, SettingContext, BooleanState, Page, GetWrapperClass, IGithubRespone, ICommitLog, ICommit };
