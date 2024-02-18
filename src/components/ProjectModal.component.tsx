import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  id: string;
  projects: any[];
  setIsModalOpen: (value: boolean) => void;
  setModalContentId: (value: string) => void;
}

export default function ProjectModal(props: Props) {
  const { id, projects, setIsModalOpen, setModalContentId } = props;
  const [project, setProject] = useState<any>();

  useEffect(() => {
    const project = projects.find((project) => project.id === id);
    setProject(project);
  }, [id, projects]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto z-50`}>
      <div className="bg-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-black mb-4">{project?.title}</h1>
        {/* <p className="text-black">{project?.description}</p> */}
        {/* Images carousel*/}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-xl z-10"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-xl z-10"
          >
            &gt;
          </button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out">
              {project?.images.map((image: string | StaticImageData, index: number) => (
                <div
                  key={index}
                  className={`${
                    // Display none for all images except the current one
                    index === currentIndex ? "block" : "hidden"
                  } transform ${
                    index === currentIndex ? "translate-x-0" : "translate-x-full"
                  } transition-transform duration-300 ease-in-out w-72 h-72 object-cover object-center rounded-lg mx-auto`}
                >
                  <Image
                    src={image}
                    alt={`project ${project?.title} image ${index}`}
                    className="mx-auto w-72 h-72 object-cover object-center rounded-lg"
                    width={400}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 flex-wrap">
          {project?.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm font-medium mr-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <a
            href={project?.github}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-gray-900 transition"
          >
            Github
          </a>
          {project?.demo && (
            <a
              href={project?.demo}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-blue-600 transition ml-4"
            >
              Demo
            </a>
          )}
        </div>
        <button
          onClick={() => {
            setIsModalOpen(false);
            setModalContentId("");
          }}
          className="mt-4 inline-block bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
