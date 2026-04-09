import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experience = [
  {
    id: 1,
    role: 'Front End Developer',
    company: 'Techizons',
    period: 'Oct 2024 - Apr 2025',
    description: 'Developed and maintained responsive web applications with modern frontend technologies, collaborating with cross-functional teams to deliver high-quality user interfaces and optimize application performance.',
    achievements: [
      'Built and deployed responsive web applications using React.js, ensuring 100% mobile responsiveness',
      'Improved website performance by 40% through code splitting, lazy loading, and image optimization techniques',
      'Collaborated with backend team to integrate RESTful APIs, reducing data fetch time by 25%',
      'Implemented reusable component library cutting development time by 30% across multiple projects',
      'Fixed UI/UX bugs and cross-browser compatibility issues across Chrome, Firefox, and Safari',
      'Worked with Git/GitHub for version control, following Agile methodology with 2-week sprint cycles'
    ],
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments in frontend development
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-primary font-medium">
                    {job.company}
                  </p>
                </div>
                <Badge variant="outline" className="whitespace-nowrap">
                  {job.period}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4">
                {job.description}
              </p>

              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
