import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Spellbound Stories Bookstore",
    description:
      "A modern e-commerce bookstore built with React and Next.js, featuring a clean UI, shopping cart functionality, and user authentication.",
    image: "/bookstore.png", // Make sure this image is in your public folder
    link: "https://github.com/DevDaf/bookstore",
  },
  {
    title: "Task Management App",
    description: "A React-based task management application with drag-and-drop functionality and real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS, showcasing my projects and skills.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/yourusername/portfolio",
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Previous Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  View on GitHub
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

