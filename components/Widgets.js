import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  VideoCameraIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import Contact from "./Contact";

const contacts = [
  { name: "Elon Mask", src: "https://links.papareact.com/kxk", online: true },
  { name: "Jeff Bezoz", src: "https://links.papareact.com/k2j", online: false },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/snf",
    online: false,
  },
  { name: "Bill Gates", src: "https://links.papareact.com/zvy", online: true },
  {
    name: "Harry Potter",
    src: "https://links.papareact.com/d0c",
    online: false,
  },
  { name: "James Bond", src: "https://links.papareact.com/r57", online: true },
  { name: "The Queen", src: "https://links.papareact.com/6gg", online: true },
];
const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact
          key={contact.src}
          name={contact.name}
          src={contact.src}
          online={contact.online}
        />
      ))}
    </div>
  );
};

export default Widgets;
