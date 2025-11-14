"use client"

import { useInView } from "@/hooks/use-in-view"

export default function SkillsSection() {
  const { ref, isVisible } = useInView()

  const skillCategories = [
    {
      category: "Core Strengths",
      skills: ["Problem Solving", "Critical Thinking", "Communication", "Adaptability", "Teamwork", "Leadership", "Hard-Working"],
    },
    {
      category: "Lab & Fabrication",
      skills: ["Composite Layup", "Soldering", "Micropipette", "3D Printing", "Machine Shop"],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Skills</h2>
          <p className="text-muted-foreground mb-12">Core competencies across engineering disciplines</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 bg-secondary/30 rounded-lg border border-border hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-background border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

