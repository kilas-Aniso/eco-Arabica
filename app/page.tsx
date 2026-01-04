import Image from 'next/image'
import { FaLeaf, FaLaptopCode, FaUsers, FaGlobeAfrica } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header Section */}
      <header className="bg-green-900 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpeg"
              alt="Eco Arabica Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold">Eco Arabica</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#why-youth" className="hover:text-green-300 transition">Why Youth?</a>
            <a href="#pillars" className="hover:text-green-300 transition">Our Pillars</a>
            <a href="#impact" className="hover:text-green-300 transition">Impact</a>
            <a href="#get-involved" className="hover:text-green-300 transition">Get Involved</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Youth & Green Innovation</h1>
          <h2 className="text-3xl mb-6">Empowering the Next Generation of Coffee Leaders</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We are transforming the Ethiopian coffee sector into a hub for youth-led green innovation.
            Through hands-on skills training and digital empowerment, Eco Arabica is turning
            "green skills" into "green jobs."
          </p>
        </div>
      </section>

      {/* Why Youth Section */}
      <section id="why-youth" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Why Youth? Why Now?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <FaGlobeAfrica className="text-4xl text-green-700 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  With over 70% of Ethiopia's population under the age of 30, the future of our
                  coffee heritage depends on the energy and creativity of our youth. Eco Arabica
                  bridges the gap between traditional farming and the modern, regulated global market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Empowerment Pillars */}
      <section id="pillars" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Our "Youth Empowerment" Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLeaf className="text-3xl text-green-600 mr-3" />
                <h3 className="text-2xl font-bold">Green Skills for a Sustainable Future</h3>
              </div>
              <p className="mb-4">We equip young professionals and farmers with the competencies needed for a climate-resilient economy.</p>
              <ul className="space-y-3">
                <li><strong>Agroforestry & Biodiversity:</strong> Training on shade-grown coffee techniques that protect the Ethiopian highlands.</li>
                <li><strong>Climate-Smart Agriculture:</strong> Teaching data-driven methods to manage soil health and water conservation.</li>
                <li><strong>EUDR Compliance:</strong> Empowering youth to lead the charge in meeting international environmental standards.</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-3xl text-green-600 mr-3" />
                <h3 className="text-2xl font-bold">The Eco Arabica Hackathon Series</h3>
              </div>
              <p className="mb-4 font-semibold">Where Tech Meets the Bean</p>
              <p className="mb-4">Our hackathons invite young developers and innovators to solve real-world supply chain problems.</p>
              <p className="mb-2"><strong>The Challenge:</strong> How do we track coffee from a remote forest to a European port?</p>
              <p><strong>The Impact:</strong> Participants build prototypes for mobile traceability apps, offline data collection tools, and blockchain solutions, gaining mentorship from industry experts.</p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaUsers className="text-3xl text-green-600 mr-3" />
                <h3 className="text-2xl font-bold">Webinars & Interactive Workshops</h3>
              </div>
              <p className="mb-4">We leverage digital platforms to make expert knowledge accessible across Ethiopia.</p>
              <ul className="space-y-3">
                <li><strong>Digital Literacy:</strong> Training young cooperative leaders on how to use GPS mapping and digital record-keeping.</li>
                <li><strong>Entrepreneurship:</strong> Workshops on "Coffee-Preneurship"—moving from primary production into value-add services like roasting, cupping, and digital marketing.</li>
                <li><strong>Global Access:</strong> Our webinars connect Ethiopian youth directly with international buyers and sustainability experts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section id="impact" className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Impact Story: From Classroom to Coffee Forest
          </h2>
          <div className="max-w-4xl mx-auto bg-green-700 p-8 rounded-lg">
            <blockquote className="text-xl italic">
              "Before the Eco Arabica workshop, I saw coffee as my father's hard labor.
              Now, I see it as a digital business. I am learning to map our farm to meet
              EU standards, ensuring our coffee stays on the world stage."
            </blockquote>
            <p className="mt-4 text-right">— Amanuel, 22, Agricultural Graduate & Workshop Participant</p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-green-900">Get Involved</h2>
          <p className="text-xl mb-12">Are you a young innovator, a student, or a local cooperative leader?</p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition text-lg font-semibold">
              Register for our next Green Skills Webinar
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition text-lg font-semibold">
              Apply for the 2026 Hackathon
            </button>
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition text-lg font-semibold">
              Join our Youth Mentorship Program
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2026 Eco Arabica. Empowering Youth, Transforming Coffee.</p>
        </div>
      </footer>
    </main>
  )
}