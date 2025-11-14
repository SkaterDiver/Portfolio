"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  const { ref, isVisible } = useInView()
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [emailCopied, setEmailCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/manaykqp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("pszymbor@uwaterloo.ca")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const contactLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/philip-szymborski07",
      href: "https://www.linkedin.com/in/philip-szymborski07/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SkaterDiver",
      href: "https://github.com/SkaterDiver",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Let's Connect!</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm excited to explore co-op opportunities where I can learn, contribute, and grow as an engineer. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <button
              onClick={handleCopyEmail}
              className="p-6 bg-background border border-border rounded-lg hover:border-primary/30 hover:shadow-md transition-all duration-300 group text-left"
            >
              <Mail className="w-8 h-8 mb-3 text-primary" />
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {emailCopied ? "Email Copied!" : "Email"}
              </h3>
              <p className="text-sm text-muted-foreground">pszymbor@uwaterloo.ca</p>
            </button>
            {contactLinks.map((link, idx) => {
              const IconComponent = link.icon
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-background border border-border rounded-lg hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <IconComponent className="w-8 h-8 mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </a>
              )
            })}
          </div>

          {/* Quick Contact Form */}
          <div className="p-8 bg-background border border-border rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-lg text-muted-foreground mb-4">
              <span className="text-primary font-semibold text-xl">Currently seeking:</span>
              <br />
              <span className="text-xl">
                First co-op position for Spring/Summer 2026 where I can apply my technical skills and passion for learning to real-world engineering challenges.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

