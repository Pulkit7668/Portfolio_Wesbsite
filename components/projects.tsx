import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Job Portal',
    description: 'Career platform connecting job seekers with employers for recruitment and hiring.',
    image: '/images/job-portal.png',
    tags: [ 'React', 'Vite', 'JavaScript', 'Tailwind'],
    liveUrl: 'https://job-portal-nine-olive.vercel.app/',
    githubUrl: 'https://github.com/Pulkit7668/JobPortal.git',
  },
  {
    id: 2,
    title: 'Recruiter/Client Static Page',
    description: 'A smart hiring platform for recruiters to post jobs, track applications, and find the perfect candidates with AI-powered matching.',
    image: '/images/recruiter.png',
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind'],
    liveUrl: 'https://recruiter-static-page.vercel.app/recruiter',
    githubUrl: 'https://github.com/Pulkit7668/Recruiter_static_page.git',
  },
  {
    id: 3,
    title: 'The Tarzan Way',
    description: 'AI-powered travel planning platform that creates personalized itineraries with one-click bookings and 24/7 concierge support.',
    image: '/images/tarzan-way.png',
    tags: ['React', "JavaScript", "Tailwind"],
    liveUrl: 'https://travel-company-five.vercel.app/',
    githubUrl: 'https://github.com/Pulkit7668/TravelCompany.git',
  },
  {
    id: 4,
    title: 'TechVision Website',
    description: 'Fast, scalable, and beautiful web solutions for modern businesses.',
    image: '/images/agency.png',
    tags: ['React', 'tailwind', 'ShadcnUI', 'JavaScript', 'Next', 'TypeScript'],
    liveUrl: 'https://agency-website-frontend-omega.vercel.app/',
    githubUrl: 'https://github.com/Pulkit7668/Agency-website-Frontend-.git',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and excellent SEO.',
    image: '/images/portfolio.png',
    tags: ['Next.js', 'React', "TypeScript", "JavaScript", "Tailwind", 'Responsive Design'],
    liveUrl: 'https://portfolio-wesbsite.vercel.app/',
    githubUrl: 'https://github.com/Pulkit7668/Portfolio_Wesbsite.git',
  },
  {
    id: 6,
    title: 'Sneakers E‑commerce UI',
    description: 'A responsive sneakers product page built with HTML, CSS & JavaScript featuring Nike Air Force, size selector, and global shipping – clean UI for winter new arrivals.',
    image: '/images/sneakers.png',
    tags: ['HTML', 'CSS', 'JavaScript', "Responsive Design"],
    liveUrl: 'https://sneakers-website-mu.vercel.app/',
    githubUrl: 'https://github.com/Pulkit7668/Sneakers_website.git',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my expertise in modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-48 relative overflow-hidden bg-muted">
               <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
               />
              </div>

              <div className="p-6 flex-1 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="ghost" size="sm" className="w-full gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
