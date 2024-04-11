import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const Signup = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row">
        {/* left */}
        <div className="flex-1 font-mono">
          <Link to={"/"} className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white">
              Dev&apos;s
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">This is my simple blog project.</p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form action="" className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput type="email" placeholder="Email" id="email" />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone={"purpleToPink"} type="submit">
              Sign up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Have an Account?
              <Link to={"/sign-in"} className="text-blue-500">
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
