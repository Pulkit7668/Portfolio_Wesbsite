import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Innovations Inc.',
    content: 'Pulkit is an exceptional frontend developer. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. His work significantly improved our user experience metrics.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Digital Solutions Co.',
    content: 'Working with Pulkit has been a pleasure. He has a deep understanding of modern frontend architecture and best practices. His contributions helped us scale our platform efficiently.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'StartUp Labs',
    content: 'Pulkit brought our designs to life beautifully. He was collaborative, responsive to feedback, and delivered pixel-perfect implementations. Highly recommended for any project.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and clients I&apos;ve worked with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 grow">
                &quot;{testimonial.content}&quot;
              </p>

              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
