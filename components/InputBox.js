import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";

import { db, storage } from "@/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

async function addDataToFireStore({
  message,
  name,
  email,
  image,
  imageToPost,
}) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      message: message,
      name: name,
      email: email,
      image: image,
      timestamp: serverTimestamp(),
    });

    if (docRef) {
      const fileName = docRef.id + v4();
      if (imageToPost) {
        const imageRef = ref(storage, `posts/${fileName}`);
        uploadBytes(imageRef, imageToPost).then(() => {
          getDownloadURL(ref(storage, `posts/${fileName}`))
            .then((downloadUrl) => {
              const documentRef = doc(db, "posts", `${docRef.id}`);
              setDoc(documentRef, { postImage: downloadUrl }, { merge: true });
              return;
            })
            .then(() => {
              console.log("Successfully added image");
            });
        });
      }
    }

    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document", error);
    return false;
  }
}

const InputBox = () => {
  const { data: session, status } = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const [imageToShow, setImageToShow] = useState(null);

  const sendPostHandler = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value || !inputRef.current.value.trim()) {
      return;
    }

    const add = await addDataToFireStore({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      imageToPost: imageToPost,
    });

    if (add) {
      inputRef.current.value = "";
      removeImageHandler();
    }
  };

  const addImageToPostHandler = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(e.target.files[0]);
      setImageToShow(readerEvent.target.result);
    };
  };

  const removeImageHandler = () => {
    filepickerRef.current.value = null;
    setImageToPost(null);
    setImageToShow(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-md mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full bg-slate-500"
          src={session.user.image}
          width={40}
          height={40}
          fixed="true"
          alt=""
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPostHandler}>
            Submit
          </button>
        </form>
        {imageToShow && (
          <div
            onClick={removeImageHandler}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToShow} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPostHandler}
            type="file"
            hidden
          />
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Felling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
