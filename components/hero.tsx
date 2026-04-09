import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center bg-linear-to-br from-background via-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4">
                Hi, I&apos;m Pulkit Gautam
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A passionate Front End Developer crafting beautiful, responsive, and user-centric web applications. Specialized in React, TypeScript, and modern web technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="gap-2">
                  View My Work <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/Pulkit7668"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pulkit-gautam-ab81a8267/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:pulkitpandit12345@gmail.com"
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
              <div className="text-center">
                <div className="w-96 h-96 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden shadow-gray-600 shadow-2xl">
                  <img 
                    src="/images/mypic_.png"
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
          </div>       
        </div>
      </div>
    </section>
  )
}
