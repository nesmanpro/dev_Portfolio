import memoji1 from "@/assets/images/memo1.png";
import memoji2 from "@/assets/images/memo2.png";
import memoji3 from "@/assets/images/memo3.png";
import memoji4 from "@/assets/images/memo4.png";
import memoji5 from "@/assets/images/memo5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import grainImg from "@/assets/images/grain.webp";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @OzHami",
    text: "Working with Lucas was an excellent experience. His focus on user experience and attention to detail made our product stand out both visually and functionally.",
    avatar: memoji1,
  },
  {
    name: "María González",
    position: "Product Owner @Flowize",
    text: "Lucas brought great value to the team. His frontend skills, especially with React and GSAP animations, significantly improved the quality of our deliverables.",
    avatar: memoji3,
  },
  {
    name: "Thomas Becker",
    position: "CTO @Malt",
    text: "Lucas is a developer with a strong sense of both aesthetics and technical precision. He was always eager to contribute ideas and improve existing workflows in our platform.",
    avatar: memoji2,
  },
  {
    name: "Carla Moreira",
    position: "UX/UI Designer @Addcomm",
    text: "Collaborating with Lucas was very smooth. He perfectly understands how to translate designs into clean, pixel-perfect code. Highly recommended!",
    avatar: memoji4,
  },
  {
    name: "David Romero",
    position: "CEO @Nesmanpro Studio",
    text: "Lucas was a key player in the design and development of our web projects. His rare combination of technical and creative skills is a huge asset.",
    avatar: memoji5,
  },
];

export const Testimonials = () => {
  return (
    <div className="container px-6 mt-14 py-16 lg:mt-28 lg:py-24">
      <SectionHeader
        eyebrow="Happy Partners"
        title="What Clients & Workmates Say About me"
        description="Don't just take my word for it. See what my clients and workmate
        have to say about my work."
        className=""
      />
      <div className="mt-16 md:mt-24 flex overflow-x-clip w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 flex-none">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="max-w-xs md:max-w-md p-6 md:p-8"
            >
              <div className="flex gap-4 items-center">
                <div className="size-20 bg-gray-700 flex items-center justify-center rounded-full flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="max-h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/40">
                    {testimonial.position}
                  </div>
                </div>
              </div>
              <p className="mt-4 md:mt-6 text-sm md:text-base">
                {testimonial.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
