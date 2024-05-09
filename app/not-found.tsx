import Link from "next/link";
import Image from "next/image";
import { Button } from "./components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red">
      <div className="container">
        <div className="flex flex-col items-start sm:items-center ">
          <p className="font-bold text-2xl mb-2 ">PAGE NOT FOUND</p>
          <h2 className="text-3xl md:text-4xl mb-5 ">
            Lets get you to a better place
          </h2>
          <Button href={"/"} className={"mb-3"} variant={"default"}>
            Go Home
          </Button>
          <Image
            alt="404 image"
            src="/notfound.png"
            width={500}
            height={300}
          ></Image>
        </div>
      </div>
    </div>
  );
}
