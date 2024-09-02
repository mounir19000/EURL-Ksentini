import Image from "next/image";

interface Activity {
  text: string;
  icon: string;
}

interface HomePageSliderProps {
  activities: Activity[];
}

const ourActivities: React.FC<HomePageSliderProps> = ({ activities }) => {
  return (
    <div className="containers flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-evenly">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="w-full md:w-[45%] lg:w-[25%] pr-0 md:pr-7 py-3 md:py-6 flex flex-col justify-start items-center gap-4"
          >
            <div className="bg-orange-400 rounded-[50%] w-28 h-28 p-6">
              <Image
                src={activity.icon}
                alt={activity.text}
                width={100}
                height={100}
              />
            </div>
            <p className="text-center font-semibold text-xl max-w-[70%]">
              {activity.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ourActivities;
