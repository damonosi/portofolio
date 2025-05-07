import getProjectsData, { Proiect } from "@/utils/data";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const proiecte: Proiect[] = getProjectsData();
  const { slug } = await params;
  console.log(slug);
  const filteredProjects = proiecte.filter(
    (proiect) => proiect.numeProiect === slug,
  );
  const project = filteredProjects[0];

  return (
    <div className="min-h-screen">
      <h1>{project.numeProiect}</h1>
    </div>
  );
}
