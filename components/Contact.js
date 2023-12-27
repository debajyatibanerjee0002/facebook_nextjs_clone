import Image from "next/image";

const Contact = ({ src, name, online }) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="w-11 h-11 rounded-full bg-slate-500"
        src={src}
        alt={name}
        width={50}
        height={50}
        fixed="true"
        style={{ objectFit: "cover" }}
      />
      <p>{name}</p>
      {online && (
        <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
      )}
    </div>
  );
};

export default Contact;
