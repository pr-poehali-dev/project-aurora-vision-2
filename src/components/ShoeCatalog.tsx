import { useState, useEffect, useRef } from "react"
import { ShoppingBag } from "lucide-react"

const shoes = [
  {
    id: 1,
    title: "Travis Scott кроссовки",
    brand: "Nike × Travis Scott",
    description: "Air Jordan 1 Low OG SP — лимитированная коллаборация. Замша, кожа, перевёрнутый Swoosh.",
    price: 180000,
    tag: "Лимитка",
    sizes: ["40", "41", "42", "43", "44", "45"],
    image: "https://cdn.poehali.dev/projects/f1db1fc6-2eb6-419b-8d36-fc7b47c88444/bucket/4bd3bb9a-19f0-4406-8615-6d758c2771ec.jpeg",
  },
]

export function ShoeCatalog() {
  const [selectedSize, setSelectedSize] = useState<Record<number, string>>({})
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="shoe-catalog" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Эксклюзив</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Каталог обуви</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shoes.map((shoe, index) => (
            <div
              key={shoe.id}
              className={`group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative overflow-hidden bg-secondary/40 mb-5 aspect-square">
                <img
                  src={shoe.image}
                  alt={shoe.title}
                  className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-foreground text-primary-foreground text-xs tracking-widest uppercase px-3 py-1">
                  {shoe.tag}
                </span>
              </div>

              <div>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">{shoe.brand}</p>
                <h3 className="text-xl font-medium mb-2">{shoe.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{shoe.description}</p>

                <div className="mb-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Размер</p>
                  <div className="flex flex-wrap gap-2">
                    {shoe.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize((prev) => ({ ...prev, [shoe.id]: size }))}
                        className={`w-10 h-10 text-sm border transition-all duration-200 ${
                          selectedSize[shoe.id] === size
                            ? "bg-foreground text-primary-foreground border-foreground"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-medium">
                    {shoe.price.toLocaleString("ru-RU")} ₽
                  </span>
                  <button className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-5 py-3 text-sm tracking-wide hover:bg-foreground/80 transition-colors duration-300">
                    <ShoppingBag className="w-4 h-4" />
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
