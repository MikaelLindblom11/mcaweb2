"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const clientLogos = [
  {
    name: "Marriott International",
    industry: "Hospitality",
    logo: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80",
  },
  {
    name: "Edition Hotels",
    industry: "Luxury Hospitality",
    logo: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80",
  },
  {
    name: "Dirac",
    industry: "Technology",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
  },
  {
    name: "Probi",
    industry: "Healthcare",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
  },
  {
    name: "Sonepar",
    industry: "Industrial",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  },
  {
    name: "ARaymond",
    industry: "Manufacturing",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  },
  {
    name: "Ricoh",
    industry: "Technology",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
  },
  {
    name: "Swift",
    industry: "Financial Technology",
    logo: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80",
  },
  {
    name: "Muse Group",
    industry: "Software",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    name: "L'Oréal Paris",
    industry: "Beauty & Cosmetics",
    logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80",
  },
  {
    name: "Shangri-La Hotels",
    industry: "Luxury Hospitality",
    logo: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
  },
  {
    name: "Johnson & Johnson",
    industry: "Healthcare",
    logo: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80",
  },
  {
    name: "Yves Rocher",
    industry: "Beauty & Cosmetics",
    logo: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&q=80",
  },
  {
    name: "National University of Singapore",
    industry: "Education",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
  },
]

export function LogoSlider() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align: "start",
    },
    
    
  )

  return (
    <div className="w-full overflow-hidden">
      <div className="container text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted by Leading
          <span className="gradient-text block mt-2">Global Brands</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how we help top global brands scale in APAC with our data-driven strategies.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-8 py-12">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className={cn(
                  "flex-none w-[200px] group cursor-pointer",
                  "transition-all duration-300 ease-in-out transform hover:scale-105"
                )}
              >
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-muted/30 backdrop-blur-sm border border-border/50 hover:border-primary/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:from-muted/60 group-hover:to-muted/40">
                    <div className="w-32 h-16 flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-primary/10 to-transparent">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <p className="font-medium text-sm text-foreground">{client.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{client.industry}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}