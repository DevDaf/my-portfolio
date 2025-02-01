import type React from "react"

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          <p className="mb-4">
            Hello! I'm Dafina, a passionate web developer with experience in creating beautiful and functional
            websites. I specialize in front-end development using React and Next.js, with a keen eye for design and user
            experience.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying a good cup of tea while solving coding challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

