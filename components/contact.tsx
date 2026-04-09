'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'
import emailjs from 'emailjs-com'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false) // ✅ loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true) // start loading

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email sent', result.text)
          setSubmitted(true)
          setFormData({ name: '', email: '', message: '' })
          setLoading(false) // stop loading
          setTimeout(() => setSubmitted(false), 5000)
        },
        (error) => {
          console.log('Email error', error.text)
          setLoading(false) // stop loading even if error
        }
      )
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <a href="mailto:pulkitpandit12345@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                pulkitpandit12345@gmail.com
              </a>
            </div>
          </Card>

          <Card className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <a href="tel:+917668432641" className="text-muted-foreground hover:text-foreground transition-colors">
                +91 7668432641
              </a>
            </div>
          </Card>

          <Card className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Location</h3>
              <p className="text-muted-foreground">Khurja, Uttar Pradesh</p>
            </div>
          </Card>
        </div>

        <Card className="p-8 max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Message Sent Successfully!</h3>
              <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} value={formData.message} onChange={handleChange} required />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'} {/* ✅ show loading text */}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}