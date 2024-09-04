"use client";
import { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

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
  button: string;
}

const ReferencesCards: React.FC<ReferencesCardsProps> = ({
  projects,
  button,
}) => {
  const [visibleCount, setVisibleCount] = useState(6); // Initial number of visible projects

  const loadMore = () => {
    setVisibleCount(visibleCount + 4); // Increase the number of visible projects
  };

  const locale = useLocale();

  return (
    <div>
      <div className="containers grid grid-cols-1 gap-6 py-6 md:grid-cols-2">
        {projects
          .slice(0, visibleCount)
          .map((project: Project, index: number) => (
            <div
              key={index}
              className="flex h-full items-start justify-start p-4"
            >
              <div className="h-full flex items-start justify-center w-28 min-w-24">
                <Image
                  src={project.img}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  style={{ height: "auto", width: "auto" }}
                />
              </div>
              <div
                className={` ${
                  locale === "ar" ? "pr-2" : "pl-2"
                } h-full w-[80%] flex flex-col items-start justify-start `}
              >
                <h1 className="w-full font-bold text-base mb-1">
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
            {button}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReferencesCards;
