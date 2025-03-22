import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ src, technologies, title, subtitle, githubLink, youtubeLink }) => {
  return (
    <div className="bg-[#3a225c] text-white rounded-lg shadow-lg p-4 max-w-xs">
      <div className="relative w-full h-48 mb-4">
        <Image 
          src={src} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />
      </div>
      <p className="text-sm text-gray-300 mb-2">{technologies}</p>
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-md mb-4">{subtitle}</p>
      <Link href={githubLink} className="block text-center bg-[#7127BA] text-white py-2 px-4 rounded-full hover:bg-[#5A1E96] transition"
          target="_blank" 
          rel="noopener noreferrer">          
          Ver no GitHub       
      </Link>
      {youtubeLink && (
        <Link 
          href={youtubeLink} 
          className="block text-center bg-[#7127BA] text-white py-2 px-4 rounded-full hover:bg-[#5A1E96] transition mt-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Ver Vídeo no YouTube
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;