import { getProjectData } from "@/utils/data";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const proiect = getProjectData(slug);

  if (!proiect) {
    return <div>No Project Page</div>;
  }
  return (
    <div className="min-h-screen flex flex-col   items-center w-full py-8 ">
      <h1 className="text-8xl py-16">{proiect.numeProiect}</h1>
      <div className="border-4 rounded-full flex justify-center text-center border-b-0 p-8 bg-white backdrop-blur-xl border-portocaliu rounded-b-md px-32">
        <span className="text-xl  ">{proiect.descriere}</span>
      </div>
      <div className=" transition-all hover:rounded-sm border-portocaliu border-4 border-t-0 duration-500 ease-in-out rounded-t-md rounded-full  overflow-hidden">
        <Image
          alt="Landing page PrintScreen"
          src={proiect.imaginePreview}
        />
      </div>
      <div>
        <span>github</span>
        <span>liveSite</span>
      </div>
    </div>
  );
}
