import Image from "next/image";

const ourActivities = () => {
  const activities = [
    {
      text: "Etudes d’Ingénierie",
      icon: "/activitiesIcons/1.png",
    },
    {
      text: "Conseil, Expertise et Formation",
      icon: "/activitiesIcons/2.png",
    },
    {
      text: "Réalisation des lignes aériennes et souterraines HTB/HTA/BT",
      icon: "/activitiesIcons/3.png",
    },
    {
      text: "L’éclairage public et déroulage des câbles OPGW",
      icon: "/activitiesIcons/4.png",
    },
    {
      text: "Montage et Installation des postes électriques HTB/HTA/BT",
      icon: "/activitiesIcons/5.png",
    },
    {
      text: "Fabrication des tableaux, armoires et coffrets électriques",
      icon: "/activitiesIcons/6.png",
    },
    {
      text: "Electrification ferroviaire",
      icon: "/activitiesIcons/7.png",
    },
    {
      text: "Contrôle, essais et mise en service des ouvrages électriques",
      icon: "/activitiesIcons/8.png",
    },
  ];

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
