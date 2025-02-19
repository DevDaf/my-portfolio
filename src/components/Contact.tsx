import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex items-center">
              <MailIcon className="w-6 h-6 text-blue-500 mr-2" />
              <a href="mailto:john@example.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                Dafiinaa@hotmail.com
              </a>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-6 h-6 text-blue-500 mr-2" />
              <a href="tel:+1234567890" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                +46 72 941 92 81
              </a>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-6 h-6 text-blue-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Sweden, Malmö</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

