interface IProject {
    id: string;
    title: string;
    description: string;
    image: string | StaticImageData;
    images: string[] | StaticImageData[];
    technologies: string[];
    github: string;
    demo?: string;
}

type TProjects = IProject[];