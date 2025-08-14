import Link from "next/link";

interface JobCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function JobCard({ id, title, description, image }: JobCardProps) {
  return (
    <Link
      href={`/jobs/${id}`}
      className="no-underline text-black block ml-30 mr-[60px] mt-5 mb-10"
    >
      <div className="bg-white p-4 rounded-2xl shadow-md flex items-start gap-4">
        <img src={image} alt={title} className="w-24 h-24 object-cover rounded-xl" />
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-700 mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}