import Link from "next/link";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { Project } from "@/content/projects";

export default function NextProjectTeaser({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block bg-ink text-white">
      <div className="container-rccl py-12 md:py-16 grid md:grid-cols-[1fr_auto] items-center gap-8">
        <div>
          <span className="block text-xs uppercase tracking-[0.14em] text-white/50 mb-3">Next project</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] group-hover:text-signal transition-colors duration-300">
            {project.name}
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/60">{project.serviceLabel} &middot; {project.location}</p>
        </div>
        <div className="hidden md:block w-64 shrink-0">
          <PhotoPlaceholder
            label={project.name}
            aspect="aspect-[4/3]"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </Link>
  );
}
