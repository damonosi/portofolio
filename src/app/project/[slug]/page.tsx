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
    <div className="min-h-screen flex flex-col gap-12  items-center w-full py-8 ">
      <h1 className="text-8xl py-16">{proiect.numeProiect}</h1>
      <div className="border-4 rounded-full p-8 bg-white backdrop-blur-xl rounded-b-md px-32">
        <span className="text-xl  ">{proiect.descriere}</span>
      </div>
      <div className="border-2 transition-all hover:rounded-sm  duration-1000 ease-in-out rounded-t-md rounded-full overflow-hidden">
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
