"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: "GitHub", href: "https://github.com/SkaterDiver" },
    { icon: "LinkedIn", href: "https://www.linkedin.com/in/philip-szymborski07/" },
    { icon: "Email", href: "mailto:pszymbor@uwaterloo.ca" },
  ]

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">
              {currentYear} Philip Szymborski
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Nanotechnology Engineering @ University of Waterloo
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

