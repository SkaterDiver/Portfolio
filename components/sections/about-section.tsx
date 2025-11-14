"use client"

import { useInView } from "@/hooks/use-in-view"
import { Settings, Ruler, Code } from "lucide-react"

export default function AboutSection() {
  const { ref, isVisible } = useInView()

  const skills = [
    { icon: Settings, title: "Manufacturing", desc: "Machine Shop, 3D printing, CNC" },
    { icon: Ruler, title: "CAD Design", desc: "SolidWorks, AutoCad Inventor" },
    { icon: Code, title: "Software", desc: "Python, Java" },
  ]

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">About</h2>

          <div className="prose prose-invert max-w-none mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm an ambitious and hardworking first-year Nanotechnology Engineering student at the University of Waterloo with a passion for engineering at both the macro and nano scales. What excites me most about engineering is the opportunity to solve new problems every day, whether it's learning a new CAD technique, working hands-on with composite fabrication, or diving into webpage development.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through my experiences within my courses, side projects, and hands-on work with Waterloo Rocketry, I thrive solving real world problems and picking up new skills along the way. I'm eager to bring this enthusiasm and adaptability to my first co-op experience, where I can contribute while continuing to grow as an engineer.
                </p>
              </div>
            </div>
          </div>

          {/* Skill Domains */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={idx}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                >
                  <IconComponent className="w-8 h-8 mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

