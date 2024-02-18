'use client';
import Image from "next/image";

interface Props {
    onClick: (id: string) => void;
    project: IProject;
}

export default function ProjectCard(props: Props) {
    return (
        <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <Image
                className="w-full h-56 object-cover object-center"
                src={props.project.image}
                width={720}
                height={400}
                alt="avatar"
            />
            <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-white">{props.project.title}</h1>
                <p className="py-2 text-gray-300">
                    {props.project.description}
                </p>
                <button
                    onClick={() => props.onClick(props.project.id)}
                    className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
                >
                    Consulter
                </button>
            </div>
        </div>
    )
}
