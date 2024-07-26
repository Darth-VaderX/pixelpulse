import { Page } from './interface';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { Rarity } from './interface.achievements';

interface IAboutElement {
    title: string;
    text: string;
}

interface ICross {
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    scrollStatus: 'on' | 'off';
}

interface IFrame {
    className?: string;
}

interface IClipPathBorder {
    className: string;
}

interface IStatistics {
    styles: Record<string, string>;
}

interface IJouystick {
    className: string;
    down: () => void;
    left: () => void;
    right: () => void;
    up: () => void;
}

interface IButton {
    className: string;
    delayEvent: boolean;
    handleButton: () => void;
    image?: () => React.ReactNode;
    isValid?: boolean;
    textContent: string;
    type: 'submit' | 'button';
}

interface ILogsElement {
    className: string;
    date: string | undefined;
    textContent: string;
}

interface IModalBoxButton {
    handleEnter: () => void;
    handleEscape: () => void;
    isValid?: boolean;
    textEnter: string;
    textEsc: string;
    typeEnter: 'submit' | 'button';
}

interface ICreditItem {
    title: string;
    text: string | string[];
}

interface IModalSendState {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
    status: boolean;
}

interface ILayout {
    children: React.JSX.Element;
}

interface INavigation {
    styles: Record<string, string>;
}

interface INavigationElement {
    pageName: Page;
}

interface IProfileElement {
    adjacent: {
        image?: string;
        text: string;
        type: string;
    };
    header: {
        text: string;
    };
}

interface IQuestElement {
    className: {
        header: string;
        text: string;
    };
    hexagon: boolean;
    text: string;
    textTitle: string;
}

interface IRange {
    changeSettingValue: (event: React.ChangeEvent<HTMLInputElement>, variableName: 'hue' | 'size') => void;
    color?: 'hue';
    inputTarget: 'color' | 'size';
    max: number;
    min: number;
    textContent: string;
    initValue: number;
}

interface ISelectChallenge {
    register: UseFormRegister<FieldValues>;
    selectValue: Rarity;
    setSelectValue: React.Dispatch<React.SetStateAction<Rarity>>;
}

interface ISetting {
    className: Record<string, string>;
}

interface ISettingElement {
    audioClassName?: string;
    className: string;
    image: string;
    onClick?: () => void;
    textContent: string;
}

export {
    IAboutElement,
    ICross,
    IFrame,
    IClipPathBorder,
    IButton,
    IStatistics,
    IJouystick,
    ILogsElement,
    IModalBoxButton,
    ICreditItem,
    IModalSendState,
    ILayout,
    INavigation,
    INavigationElement,
    IProfileElement,
    IQuestElement,
    IRange,
    ISelectChallenge,
    ISetting,
    ISettingElement,
};