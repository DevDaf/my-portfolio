import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Website",
    description: "A fully responsive e-commerce site built with Next.js and Stripe integration.",
    image: "/ecommerce.jpg",
    link: "https://github.com/yourusername/ecommerce-project",
  },
  {
    title: "Bookstore Application",
    description: "An online bookstore with a vast catalog and user review system.",
    image: "/bookstore.jpg",
    link: "https://github.com/yourusername/bookstore-project",
  },
  {
    title: "Portfolio Website",
    description: "A customizable portfolio template for developers, built with Next.js and Tailwind CSS.",
    image: "/portfolio.jpg",
    link: "https://github.com/yourusername/portfolio-project",
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Previous Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  View on GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

