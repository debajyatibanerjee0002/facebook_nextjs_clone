import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        height={400}
        width={400}
        src="https://links.papareact.com/t4i"
        alt="Facebook"
        content="true"
        priority
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:bg-blue-700"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
