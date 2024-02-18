'use client';

import ProjectCard from "@/components/Cards/ProjectCard.component";
import Header from "@/components/Home/Header.component";
import ProjectModal from "@/components/ProjectModal.component";
import { useState } from "react";

const projects = [
  {
    id: "c8456gf1",
    title: "Beautiful Nature",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    technologies: ["React", "Tailwind", "Next"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "c8456gf1",
    title: "Beautiful Nature",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    technologies: ["React", "Tailwind", "Next"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "c8456gf1",
    title: "Beautiful Nature",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    technologies: ["React", "Tailwind", "Next"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "c8456gf1",
    title: "Beautiful Nature",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    technologies: ["React", "Tailwind", "Next"],
    github: "https://github.com",
    demo: "https://demo.com",
  }
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContentId, setModalContentId] = useState<string>("");

  // Modal handler
  const openModal = () => {
    setIsModalOpen(true);

    // Set modal content
    setModalContentId("c8456gf1");
  }

  return (
    <>
      <Header />
      <div id="projects" className="flex flex-col gap-6 my-12">
        <h2 className="text-4xl font-bold text-center text-white">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={openModal} />
            ))
          }
        </div>
      </div>

      {/* Modal */}
      {(isModalOpen && modalContentId !== "") &&
        <ProjectModal id={modalContentId} projects={projects} setIsModalOpen={setIsModalOpen} setModalContentId={setModalContentId} />
      }
    </>
  );
}
