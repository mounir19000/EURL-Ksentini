import type { Metadata } from "next";
import OurActivities from "@/components/ourActivities";

export const metadata: Metadata = {
  title: "Eurl Ksentini",
  description:
    "Explore the core activities of EURL Ksentini, including engineering studies, electrical substation assembly, railway electrification, and more.",
  keywords:
    "engineering studies, electrical assembly, railway electrification, HV/MV/LV substations, public lighting, Algeria",
};

import data from "@/Json/en.json";

const Activities = () => {
  const activities = data["Activities2"].map((activity) => ({
    text: activity.text,
    icon: activity.icon,
  }));

  return (
    <div className="w-full bg-white">
      {/* First part of the activities page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto  md:max-w-[50vw]">
              {data["PagesTitles"].activities}
            </h1>
          </div>
        </div>
      </div>

      {/* Second part of the activities page */}
      <div className="pb-6 pt-6">
        <OurActivities activities={activities} />
      </div>
    </div>
  );
};

export default Activities;
