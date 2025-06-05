import PortfolioProjectsType from "@/types/portfolioProjects";
import letsornotPic from "@/assets/images/portfolio/mb1.png";
import workaholicPic from "@/assets/images/portfolio/mb2.png";
import nonamePic from "@/assets/images/portfolio/mb3.png";
import Image from "next/image";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { ArrowDown } from "@/assets/icons/ArrowDown";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects: PortfolioProjectsType[] = [
  {
    company: "Letsornot",
    year: "2024",
    title: "Proyecto Circular",
    results: [
      {
        title: "Increased viewer engagement by 60%.",
      },
      {
        title: "Improved content reach on social media.",
      },
      {
        title: "Increase client visibility 40%.",
      },
    ],
    link: "https://vimeo.com/817269446",
    image: letsornotPic,
  },
  {
    company: "NoNameClub",
    year: "2024",
    title: "NNC LookBook 2024",
    results: [
      {
        title: "Boosted social engagement by 75%.",
      },
      {
        title: "Established consistent brand identity.",
      },
      { title: "Reduced bounce rate by 35%." },
    ],
    link: "https://www.youtube.com/watch?v=smnwExGEYRk",
    image: nonamePic,
  },
  {
    company: "WORKAHOLIC™",
    year: "2023",
    title: "Premium Handmade Workwear",
    results: [
      {
        title: "Increase brand recognition 50%.",
      },
      {
        title: "Improved perceived value & client retention.",
      },
      {
        title: "Improved site load time by 45%.",
      },
    ],
    link: "https://www.nesmanpro.com/portfolio-posts/workaholic/",
    image: workaholicPic,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-18 lg:pb-56">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformet concepts into engaging digital experiences."
        />

        <div className="flex flex-col items-center gap-14 mt-10 mx-6 lg:mx-auto md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 max-w-xl md:pt-12 md:pl-10 lg:flex lg:gap-6 lg:pr-0 lg:pt-16 lg:pl-20 lg:max-w-[98%] sticky"
              style={{
                top: `calc(64px + ${index * 50}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="lg:pb-16 lg:w-md">
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-6">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-6" />
                  <ul className="flex flex-col gap-4 my-4 md:my-5">
                    {project.results.map((res) => (
                      <li
                        key={res.title}
                        className="inline-flex items-center gap-2 text-sm text-white/45 md:text-base"
                      >
                        <CheckIcon className="size-4.5 md:size-5" />
                        <span className="">{res.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-10 w-full rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 mt-6 cursor-pointer md:w-auto md:px-4 ">
                      <span>View Live Site</span>
                      <ArrowDown className="size-5 -rotate-45" />
                    </button>
                  </a>
                </div>
                <div className="lg:relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-full object-cover object-left-top"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
