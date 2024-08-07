type Technologies = {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

interface IProject {
    about: string[];
    brief: string;
    images: string[];
    link: string;
    name: string;
    technologies: string[];
}

export type { IProject, Technologies };
