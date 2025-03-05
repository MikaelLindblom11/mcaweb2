import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Globe, LineChart, MessageSquare, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="APAC business landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive digital marketing solutions tailored for the APAC market. From market entry strategies to performance optimization, we deliver measurable results that drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid gap-12">
            <ServiceSection
              title="Digital Strategy & Market Entry"
              description="Navigate the complex APAC market with confidence. Our strategic approach combines local insights with global best practices to create winning market entry strategies."
              image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              features={[
                "Market research & competitor analysis",
                "Go-to-market strategy development",
                "Brand localization & positioning",
                "Channel strategy & partnerships"
              ]}
              icon={Globe}
            />

            <ServiceSection
              title="Performance Marketing"
              description="Data-driven campaigns that deliver measurable ROI across multiple channels and platforms in the APAC region."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              features={[
                "PPC & paid social campaigns",
                "Programmatic advertising",
                "Campaign optimization & scaling",
                "Cross-channel attribution"
              ]}
              icon={LineChart}
              reverse
            />

            <ServiceSection
              title="SEO & Organic Growth"
              description="Boost your visibility in APAC search engines with our comprehensive SEO strategies tailored for regional success."
              image="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80"
              features={[
                "Technical SEO optimization",
                "Content strategy & creation",
                "Local SEO for APAC markets",
                "Link building & authority development"
              ]}
              icon={Search}
            />

            <ServiceSection
              title="Social Media & Content"
              description="Engage your audience across APAC's diverse social media landscape with platform-specific strategies and compelling content."
              image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
              features={[
                "Social media strategy & management",
                "Influencer marketing campaigns",
                "Content creation & distribution",
                "Community management"
              ]}
              icon={MessageSquare}
              reverse
            />

            <ServiceSection
              title="Data & Analytics"
              description="Turn data into actionable insights with our comprehensive analytics and tracking solutions."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              features={[
                "Analytics setup & tracking",
                "Performance reporting & insights",
                "Conversion optimization",
                "Customer journey analysis"
              ]}
              icon={BarChart}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Modern APAC business district"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-12 text-muted-foreground">
              Book a free strategy consultation to discuss how we can help you achieve your growth objectives in APAC.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceSection({
  title,
  description,
  image,
  features,
  icon: Icon,
  reverse = false
}: {
  title: string
  description: string
  image: string
  features: string[]
  icon: any
  reverse?: boolean
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
      <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
        <Icon className="absolute bottom-6 left-6 h-12 w-12 text-primary" />
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-8">{description}</p>
        <ul className="grid gap-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="mt-8" variant="outline" asChild>
          <Link href="/contact">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}