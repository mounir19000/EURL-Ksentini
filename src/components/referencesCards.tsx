"use client";
import { useState } from "react";
import Image from "next/image";

interface Project {
  img: string;
  alt: string;
  width: number;
  height: number;
  client: string;
  date: string;
  description: string;
}

interface ReferencesCardsProps {
  projects: Project[];
}

const ReferencesCards: React.FC<ReferencesCardsProps> = ({ projects }) => {
  const [visibleCount, setVisibleCount] = useState(6); // Initial number of visible projects

  const loadMore = () => {
    setVisibleCount(visibleCount + 4); // Increase the number of visible projects
  };

  return (
    <div>
      <div className="containers flex flex-wrap py-6">
        {projects
          .slice(0, visibleCount)
          .map((project: Project, index: number) => (
            <div key={index} className="flex h-full w-full md:w-[50%] pt-4">
              <div className="h-full flex items-start justify-center w-28 min-w-24">
                <Image
                  src={project.img}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  style={{ height: "80px", width: "auto" }}
                />
              </div>
              <div className="h-full w-full flex flex-col items-start justify-start pl-2">
                <h1 className="w-full font-medium text-base mb-1">
                  {project.description}
                </h1>
                <h3 className="w-full font-medium">{project.date}</h3>
                <p className="w-full text-sm">{project.client}</p>
              </div>
            </div>
          ))}
      </div>
      {visibleCount < projects.length && (
        <div className="w-full flex justify-center items-center">
          <button
            onClick={loadMore}
            className="font-semibold mt-4 mb-4 px-8 py-3 bg-orange-400 hover:bg-orange-600 text-white text-lg rounded-lg"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ReferencesCards;
