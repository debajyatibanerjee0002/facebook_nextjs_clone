import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div
      className="relative h-14 w-14 md:h-20 md:w-20
    lg:h-44 lg:w-36 cursor-pointer overflow-x p-3
    transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
    >
      <Image
        className="h-8 w-8 absolute opacity-0 lg:opacity-100 rounded-full z-50 top-4"
        src={profile}
        width={40}
        height={40}
        fixed="true"
        style={{ objectFit: "cover" }}
        alt=""
      />
      <Image
        className="object-cover fliter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        fill
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
