"use client"

import { useInView } from "@/hooks/use-in-view"

export default function ExperienceSection() {
  const { ref, isVisible } = useInView()

  const experiences = [
    {
      role: "Undergraduate Nanotechnology Engineer",
      company: "University of Waterloo",
      date: "2025 - 2030",
      description:
        "Only accredited Undergraduate Nanotechnology program in Canada. Based on principles from biology, chemistry, electronics, and quantum physics to create advanced materials and components in the nano scale. Intersection of Electrical, Chemical and Materials Engineering. Confident in a large interdisciplinary skill set, from lab and manufacturing skills to CAD and programming.",
    },
    {
      role: "Airframe Project Lead",
      company: "Waterloo Rocketry",
      date: "2025 - Present",
      description:
        "Building reusable composite molds and rocket components using infusion and wet layup techniques. Learning advanced manufacturing processes for aerospace-grade parts. Collaborating with a multidisciplinary team to design and test rocket systems. Gaining hands-on experience with materials science, manufacturing and structural engineering.",
    },
    {
      role: "Frontend UI/UX Designer",
      company: "Pyko.app",
      date: "2024 - 2025",
      description:
        "Designed and implemented prototype landing and login pages using JavaScript and React. Worked with technology to translate product requirements into intuitive user interfaces. Collaborated with a startup team to deliver features under tight deadlines.",
    },
    {
      role: "Professional Tutor",
      company: "BookSmart Tutoring",
      date: "2025",
      description:
        "Delivered personalized tutoring sessions for K-8 students, both online and in-person. Built and adapted teaching strategies to meet individual learning styles. Developed patience and communication skills by explaining complex concepts clearly. Managed scheduling and progress tracking to meet learning objectives.",
    },
    {
      role: "Computer Club Head Executive",
      company: "St. Aloysius Gonzaga SS",
      date: "Grade 12, 2024 - 2025",
      description:
        "Led presentations and tutored club members in programming fundamentals. Introduced Grade 9-10 students to programming concepts, helping them explore coding before committing to a full course. Fostered an inclusive learning environment that made tech accessible to beginners. Organized workshops and coding challenges to build practical skills.",
    },
    {
      role: "DECA Regionals Competitor",
      company: "DECA",
      date: "Grade 11 & 12, 2023 - 2025",
      description:
        "Competed at the regional level, presenting an ethics case study to a panel of judges. Developed critical thinking and presentation skills under pressure. Analyzed complex business scenarios and articulated ethical solutions. Gained experience in professional communication and time-constrained problem-solving.",
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-6 pb-8 last:pb-0">
                {/* Timeline line */}
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5" />

                {/* Content */}
                <div className="p-6 bg-secondary/30 rounded-lg border border-border hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-primary font-medium">{exp.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

