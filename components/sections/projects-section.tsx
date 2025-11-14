"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import ProjectCard from "@/components/project-card"

export default function ProjectsSection() {
  const { ref, isVisible } = useInView()

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const projects = [
    
    {
      title: "Metal Fin Cap Optimization",
      description:
        "Research on optimal design for rocket fin leading edges",
      image: "/placeholder.svg",
      tags: ["Materials Science", "CAD", "Manufacturing", "Research", "Aerospace"],
      category: "Engineering",
      details:
        "Conducting research and prototyping to determine the optimal design and manufacturing process for a new feature on our 2025-2026 rocket. Exploring materials selection, manufacturing techniques, and thermal considerations to improve rocket performance and durability. This project combines materials science, CAD design, and practical manufacturing knowledge.",
      githubUrl: "",
      liveUrl: "",
    },
    {
      title: "Composite Rocket Parts",
      description:
        "Aerospace-grade composite fabrication",
      image: "/placeholder.svg",
      tags: ["Composites", "Manufacturing", "Aerospace", "Materials Science"],
      category: "Engineering",
      details:
        "Building aerospace-grade composite structures for Waterloo Rocketry using infusion and wet layup techniques. Learning to create molds, work with carbon fiber and fiberglass, to produce lightweight, high-strength components for rocket airframes. Hands-on experience with advanced manufacturing processes used in the aerospace industry.",
      githubUrl: "",
      liveUrl: "",
    },
    {
      title: "Pyko.com Interface",
      description:
        "Startup landing page design",
      image: "/Pyko.png",
      tags: ["React", "JavaScript", "UI/UX", "HTML/CSS", "AI Tools & Automation","Software"],
      category: "Development",
      details:
        "Designed and implemented responsive and interactive prototype landing and login pages for a startup, focusing on user experience and visual appeal. Used AI-Assisted Development to vastly improve workflow. Collaborated with a fast-paced startup team to deliver features under tight deadlines.",
      githubUrl: "",
      liveUrl: "https://pyko.com", // Add actual URL if different
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Interactive portfolio built with Next.js and deployed on Cloudflare",
      image: "/portfolio-old.png",
      tags: ["React", "JavaScript", "HTML/CSS", "UI/UX", "AI Tools & Automation","Software","Cloudflare"],
      category: "Development",
      details:
        "Designed and developed a fully responsive personal portfolio website with AI collaboration from Claude Code to showcase my projects, experience, and skills. Built with Next.js 16 for modern React architecture and Tailwind CSS 4 for utility-first styling. Features include dynamic project filtering by category and skills, animated transitions, integrated contact form with Formspree, and certification ID copying functionality. Deployed to Cloudflare Pages with custom domain configuration and automatic GitHub deployment pipeline. This project demonstrates proficiency in modern web development, AI-assisted development workflows, and full-stack deployment strategies.",
      githubUrl: "https://github.com/SkaterDiver/Portfolio",
      liveUrl: "https://pszymbor.dev",
    },
    {
      title: "CSWA Certification",
      description:
        "Certified SolidWorks Associate in Mechanical Design",
      image: "/CSWA.png",
      tags: ["CAD", "Software"],
      category: "Certification",
      details:
        "Completed the Certified SolidWorks Associate (CSWA) certification. This industry-recognized credential validates competency in sketching, feature creation, assembly constraints, and design modifications. The CSWA showcases fundamental mechanical design skills essential for engineering and manufacturing workflows.",
      githubUrl: "",
      liveUrl: "",
      certId: "C-M65KPYNESD",
    },
    {
      title: "Reinforcement Learning Workshop",
      description:
        "Multi-day workshop teaching the basics of reinforcement learning",
      image: "/Half-Cheetah.gif",
      tags: ["AI Tools & Automation", "Python", "Software"],
      category: "Machine Learning",
      details:
        "Participated in a multi-day reinforcement learning workshop hosted by Waterloo Engineering focused on learning the basics of reinforcement learning strategies and algorithms. Projects included optimizing an agent's 2D pathfinding on a square grid obstacle course, training a simulated robot arm to optimally move blocks into a loading zone and teaching a robot cheetah to 'run' (pictured). All of these projects teach the agent through trial and error, rewarding optimal movement patterns. This hands-on learning experience provided insight into how AI agents learn to control physical systems and the practical challenges of reinforcement learning.",
      githubUrl: "",
      liveUrl: "",
    },
  ]

  const allSkills = Array.from(new Set(projects.flatMap((p) => p.tags))).sort()
  const allCategories = Array.from(new Set(projects.map((p) => p.category))).sort()

  const filteredProjects = projects.filter((project) => {
    const matchesSkill = selectedSkill === null || project.tags.includes(selectedSkill)
    const matchesCategory = selectedCategory === null || project.category === selectedCategory
    return matchesSkill && matchesCategory
  })

  const toggleSkill = (skill: string) => {
    setSelectedSkill((prev) => (prev === skill ? null : skill))
  }

  const toggleCategory = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category))
  }

  const clearAllFilters = () => {
    setSelectedSkill(null)
    setSelectedCategory(null)
  }

  return (
    <section id="projects" ref={ref} className="py-20 md:py-28 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground mb-8">Hands-on engineering work showcasing design and development</p>

          {/* Filters */}
          <div className="mb-8 space-y-6">
            {/* Category Filter */}
            {allCategories.length > 0 && (
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50 hover:bg-secondary"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Filter */}
            {allSkills.length > 0 && (
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Filter by Skills</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {allSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                        selectedSkill === skill
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50 hover:bg-secondary"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
                {(selectedSkill !== null || selectedCategory !== null) && (
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
                      {selectedCategory && (
                        <> in <span className="font-medium text-foreground">{selectedCategory}</span></>
                      )}
                      {selectedSkill && (
                        <> with <span className="font-medium text-foreground">{selectedSkill}</span></>
                      )}
                    </p>
                    <button
                      onClick={clearAllFilters}
                      className="text-xs text-primary hover:underline font-medium transition-colors duration-200"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-muted-foreground mb-4">No projects match the selected filters.</p>
              <button
                onClick={clearAllFilters}
                className="text-primary hover:underline font-medium transition-colors duration-200"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.title} className="transition-opacity duration-300">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
