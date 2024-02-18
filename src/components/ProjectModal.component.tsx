'use client';

import { useEffect, useState } from "react";

interface Props {
  id: string;
  projects: any[];
  setIsModalOpen: (value: boolean) => void;
  setModalContentId: (value: string) => void;
}

export default function ProjectModal(props: Props) {
  const { id, projects, setIsModalOpen, setModalContentId } = props;
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    const project = projects.find((project) => project.id === id);
    console.log(project);
    setProject(project);

  }, [id, projects]);


  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center`}>
      <div className="bg-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-black">{project?.title}</h1>
        <p className="text-black">{project?.description}</p>
        {/* Images carousel*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-1/2 mx-auto">
          {project?.images.map((image, index) => (
            <img key={index} src={image} alt="project" className="mx-auto w-32 h-32 object-cover object-center rounded-lg" />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {project?.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm font-medium mr-2">{tech}</span>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <a href={project?.github} target="_blank" rel="noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-gray-900 transition">Github</a>
          {project?.demo && <a href={project?.demo} target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-blue-600 transition ml-4">Demo</a>}
        </div>
        <button
          onClick={() => { setIsModalOpen(false); setModalContentId(""); }}
          className="mt-4 inline-block bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-blue-600 transition">Close</button>
      </div>
    </div>
  )
}
