import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce site built with Next.js and Stripe integration.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A React-based task management application with drag-and-drop functionality.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A customizable portfolio template for developers, built with Gatsby and GraphQL.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

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
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:text-blue-600 font-medium">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

