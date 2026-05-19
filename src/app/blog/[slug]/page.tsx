import BlogDetailComponent from "@/app/components/BlogDetailComponent";
import Image from "next/image";

export default async function BlogSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="flex items-center">
        <div className="flex gap-8 p-16">

        <Image
          alt="Blog image"
          height="100"
          src="https://i.pinimg.com/736x/52/a7/10/52a7109b6b1bfc1948119a574dcf60ae.jpg"
          width="400"
        />
        <div className="flex flex-col gap-8 p-8 justify-center">
        <h1 className="text-4xl">Blog Detail Page - {slug}</h1>
      <BlogDetailComponent id={slug} />
        </div>

        </div>

    </div>
  );
}