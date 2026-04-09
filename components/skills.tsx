import { Card } from '@/components/ui/card'
import { 
  Layout, Braces, Palette, Database, Wrench, Beaker
} from 'lucide-react'

const skillCategories = [
  {
    category: 'Frontend Frameworks',
    icon: Layout,
    skills: ['React', 'Next.js'],
  },
  {
    category: 'Languages',
    icon: Braces,
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Styling',
    icon: Palette,
    skills: ['Tailwind CSS', 'SCSS', 'CSS-in-JS', 'Design Systems'],
  },
  {
    category: 'State Management',
    icon: Database,
    skills: ['Redux', 'Context API', 'Zustand', 'Jotai'],
  },
  {
    category: 'Tools & Build',
    icon: Wrench,
    skills: ['Vite', 'Git', 'Docker', 'Webpack'],
  },
  {
    category: 'Testing',
    icon: Beaker,
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Vitest'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card 
                key={category.category} 
                className="p-6 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card text-card-foreground"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}