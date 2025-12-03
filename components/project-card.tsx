"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  details: string
  githubUrl?: string
  liveUrl?: string
  certId?: string
}

export default function ProjectCard({ title, description, image, tags, category, details, githubUrl, liveUrl, certId }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)
  const scrollPositionRef = useRef<number>(0)

  const handleCopyCertId = () => {
    if (certId) {
      navigator.clipboard.writeText(certId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isModalOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY
      // Lock body scroll using overflow instead of fixed position
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px' // Prevent layout shift from scrollbar

      return () => {
        // Restore body scroll
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    }
  }, [isModalOpen])

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-background rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
        style={{ 
          animation: 'fadeInScale 0.3s ease-out',
          margin: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-foreground mb-2">{title}</h2>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="ml-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="h-[17rem] bg-secondary/30 rounded-lg overflow-hidden relative">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Project Details</h3>
            <p className="text-muted-foreground leading-relaxed">{details}</p>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
              Technologies & Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/30 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Certification ID */}
          {certId && (
            <div className="bg-secondary/30 border border-border rounded-lg p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-semibold">Certification ID</p>
                  <p className="text-sm font-mono text-foreground">{certId}</p>
                </div>
                <button
                  onClick={handleCopyCertId}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 text-sm whitespace-nowrap"
                >
                  {copied ? "Copied!" : "Copy ID"}
                </button>
              </div>
            </div>
          )}

          {/* Project Links */}
          {(githubUrl || liveUrl) && (
            <div className="flex gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-secondary/50 border border-border text-foreground rounded-lg font-medium hover:bg-secondary hover:border-primary/30 transition-all duration-200 text-center"
                >
                  View on GitHub →
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 text-center"
                >
                  View Live Site →
                </a>
              )}
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="group overflow-hidden rounded-lg border border-border bg-background hover:border-primary/30 transition-all duration-300 hover-lift">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-secondary/30">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-medium">{category}</p>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 bg-primary/5 text-primary rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full px-4 py-2.5 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
          >
            Learn More →
          </button>
        </div>
      </div>

      {mounted && isModalOpen && createPortal(modalContent, document.body)}
    </>
  )
}

