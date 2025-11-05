"use client";
import { cn } from "@/components/lib/utils";
import { skillList } from "@/constant/constant";

const categories = [
  { title: "Frontend", key: "frontend" },
  { title: "Backend", key: "backend" },
  { title: "Tools & Others", key: "tools" },
];

function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-2 rounded-full bg-gray-200/80">
      <div
        className="h-2 rounded-full bg-primary"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto px-4 md:px-6 lg:px-8 pt-15 relative"
    >
      <div className="pt-16 pb-16">
        <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground">
          Skills &amp; <span className="text-primary">Expertise</span>
        </h2>
        <p className="max-w-2xl mx-auto text-foreground/80 text-lg mt-4 text-center">
          Here are the technologies and tools I work with regularly.
        </p>

        <div className="space-y-12 mt-10">
          {categories.map(({ title, key }) => {
            const items = skillList.filter((s) => s.category === key);
            return (
              <div key={key}>
                <h3 className="text-2xl font-bold mb-8">{title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {items.map((skil) => (
                    <div
                      key={skil.name}
                      className={cn(
                        "bg-card border border-border rounded-lg p-4 shadow-xs dark:shadow-[0_1px_0_rgba(255,255,255,0.04)] card-hover flex flex-col items-center text-center"
                      )}
                    >
                      <div className="text-5xl text-foreground" aria-hidden>
                        {skil.icon}
                      </div>
                      <h4 className="font-bold tracking-tight text-foreground whitespace-nowrap m-3">
                        {skil.name}
                      </h4>
                      <Progress value={skil.percentage} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
