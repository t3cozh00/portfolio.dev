const AboutMe = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-8 md:px-12 lg:px-20 xl:px-32 pt-15 relative"
    >
      <div className="pt-16 pb-16">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-12 text-center">
          {" "}
          About <span className="text-primary"> Me </span>
        </h2>
        <div className="mx-auto w-full rounded-xl border border-border bg-card shadow-sm px-6 py-8 md:px-10 md:py-10">
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              My name is Congying Zhao. I&apos;m a third-year Information
              Technology student at Oulu University of Applied Sciences in
              Finland, focusing on full-stack software development. During my
              studies, I&apos;ve worked on several team-based and
              cross-university projects, including an Erasmus+ collaboration in
              the Netherlands. These experiences have strengthened my skills in
              communication, documentation, and working in diverse,
              international teams.
            </p>
            <p>
              I&apos;m a quick learner with a strong academic record and a
              self-driven learning attitude. I enjoy exploring new technologies
              and am passionate about solving real-world problems through code.
              I&apos;ve also completed extra credits, which gives me a flexible
              schedule to focus on projects and continuous learning.
            </p>
            <p>
              I&apos;m open to internship, part-time, and project opportunities
              where I can contribute, grow, and keep learning while building
              meaningful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
