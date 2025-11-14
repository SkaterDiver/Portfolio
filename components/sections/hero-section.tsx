"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-background min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-balance text-foreground mb-6 leading-tight">
              <span className="text-primary">PHILIP SZYMBORSKI</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nanotechnology Engineering Student at the University of Waterloo. Passionate about learning and exploring the intersection of engineering, design, and innovation. Looking to gain hands-on experience in my first co-op!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary hover:text-primary transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Currently seeking first co-op position for Spring/Summer 2026 where I can apply my technical skills and passion for learning to real-world engineering challenges.
            </p>
          </div>

          {/* Right Side - Profile Image */}
          <div
            className={`hidden md:block transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative w-full aspect-square">
              {/* Geometric background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
              <div className="absolute top-12 right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-12 left-12 w-40 h-40 bg-accent/5 rounded-3xl blur-2xl" />

              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full h-full max-w-md max-h-md">
                  <Image
                    src="/profileheadshot.jpg"
                    alt="Philip Szymborski"
                    fill
                    className="object-cover rounded-3xl border-4 border-primary/10 shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

