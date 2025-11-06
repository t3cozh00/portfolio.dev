import { FaGithub, FaArrowRight } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";
import { projectList } from "@/constant/constant";
import { cn } from "@/components/lib/utils";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 md:px-6 lg:px-8 pt-15 relative"
    >
      <div className="pt-16 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one is built with care and
          attention to detail.
        </p>
        <div className="grid  md:grid-cols-1 lg:grid-cols-2 gap-6">
          {projectList.map((project) => (
            <div
              key={project.id}
              className={cn(
                "relative bg-card border border-border rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              )}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Open ${project.title} details`}
              />
              <div className="h-48 overflow-hidden">
                <Image
                  src={project.cover || "/default-project-cover.jpg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg text-xl font-bold mb-2-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.overview}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={cn(
                        "inline-block bg-gray-100 text-gray-500 text-xs font-medium mr-2 px-2 py-1 rounded-full"
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={
                      project.links?.find((link) => link.label === "GitHub")
                        ?.url
                    }
                    target="_blank"
                    className={cn(
                      "flex items-center gap-1 text-sm hover:text-indigo-600 transition-colors"
                    )}
                  >
                    {" "}
                    <FaGithub size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={
                      project.links?.find((link) => link.label === "Demo")?.url
                    }
                    target="_blank"
                    className={cn(
                      "flex items-center gap-1 text-sm hover:text-indigo-600 transition-colors"
                    )}
                  ></a>{" "}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-1 text-sm hover:text-indigo-600 transition-colors"
                  >
                    <LuExternalLink size={16} />
                    <p>View Details</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/t3cozh00"
          >
            Check My Github <FaArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
