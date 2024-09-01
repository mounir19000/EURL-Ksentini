import OurActivities from "@/components/ourActivities";

const activities = () => {
  return (
    <div className="w-full bg-white">
      {/* First part of the activities page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto  md:max-w-[50vw]">
              Nos Activités Principales
            </h1>
          </div>
        </div>
      </div>

      {/* Second part of the activities page */}
      <div className="pb-14 pt-8">
        <OurActivities />
      </div>
    </div>
  );
};

export default activities;
