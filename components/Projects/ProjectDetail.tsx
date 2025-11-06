"use client";
import Link from "next/link";
import type { ProjectItem } from "@/constant/constant";
import Image from "next/image";

export default function ProjectDetail({ project }: { project: ProjectItem }) {
  return (
    <main className="container mx-auto px-4 md:px-6 lg:px-8 pt-28 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="pt-12 pb-8">
          <Link
            href="/#projects"
            className="underline underline-offset-4 hover:text-primary"
          >
            ← Back to Projects
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold">{project.title}</h1>

        {project.cover && (
          <Image
            src={project.cover}
            alt={project.title}
            width={1200}
            height={675}
            className="mt-6 rounded-lg"
          />
        )}

        {/* Overview */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="mt-3 text-muted-foreground">{project.overview}</p>
        </section>

        {/* Main Features */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Main Features</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="inline-block bg-gray-100 text-gray-500 text-xs font-medium px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Improvements */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Improvements</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            {project.improvements.map((imp, i) => (
              <li key={i}>
                <span className="font-medium">Improvements</span>
                {imp}
              </li>
            ))}
          </ul>
        </section>

        {/* My Role */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">My Role</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            {project.role.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold">Links</h2>
            <div className="mt-3 flex flex-wrap gap-4">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
