'use client';

import ProjectCard from "@/components/Cards/ProjectCard.component";
import Header from "@/components/Home/Header.component";
import ProjectModal from "@/components/ProjectModal.component";
import { useState } from "react";

import { projects } from "@/data/data";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContentId, setModalContentId] = useState<string>("");

  // Modal handler
  const openModal = (id: string) => {
    setIsModalOpen(true);

    // Set modal content
    setModalContentId(id);
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
