import Image from "next/image";

const SidebarRows = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 p-4 cursor-pointer">
      {src && (
        <Image
          className="rounded-full bg-slate-500"
          src={src}
          alt={title}
          height={30}
          width={30}
          fixed="true"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRows;
