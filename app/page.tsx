import Image from 'next/image'
import { FaLeaf, FaLaptopCode, FaUsers, FaGlobeAfrica, FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

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
            <a href="#about" className="hover:text-green-300 transition">About</a>
            <a href="#team" className="hover:text-green-300 transition">Our Team</a>
            <a href="#impact" className="hover:text-green-300 transition">Impact</a>
            <a href="#get-involved" className="hover:text-green-300 transition">Get Involved</a>
            <a href="#contact" className="hover:text-green-300 transition">Contact</a>
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
            &ldquo;green skills&rdquo; into &ldquo;green jobs.&rdquo;
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
                  With over 70% of Ethiopia&apos;s population under the age of 30, the future of our coffee
                  heritage depends on the energy and creativity of our youth. Eco Arabica bridges the gap
                  between traditional farming and the modern, regulated global market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Eco-Arabica Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            About Eco-Arabica
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
            <p>
              Ethiopia is the birthplace of Arabica coffee, yet most of its production comes from smallholder
              farmers who remain exposed to structural challenges within global markets, including price
              volatility, unequal bargaining power, and limited access to value-based trade. Eco-Arabica was
              created to engage with these realities by working across different points of the coffee value
              chain, with a focus on transparency, quality, and sustainability.
            </p>
            <p>
              Sustainability at Eco-Arabica is understood as a system, not a label. It encompasses
              environmental responsibility, efficient use of resources, transparency in operations, and critical
              awareness of how global market structures shape local livelihoods. The initiative recognises that
              long-term impact requires both practical action and a deeper understanding of the international
              coffee economy.
            </p>
            <p>
              Eco-Arabica collaborates with farmers, youth, and international partners who share a
              commitment to ethical engagement, learning, and long-term value creation. Through continuous
              improvement, dialogue, and responsible representation of origin, Eco-Arabica seeks to
              contribute to a more equitable and resilient coffee sector.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hermela */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src="/hermela.jpeg"
                  alt="Hermela Gebremedhin"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-green-900">Hermela Gebremedhin</h3>
                <p className="text-green-700 font-semibold mb-3">CEO & Founder</p>
                <p className="text-gray-700">
                  Eco-Arabica was founded by Hermela Gebremedhin, CEO, whose direct experience in
                  Ethiopia&apos;s coffee export sector revealed critical gaps in sustainability and ethical practices. While
                  sourcing coffee from smallholder farmers, she observed that key challenges—climate
                  vulnerability, unequal value distribution, and the lack of structural support for producers—were
                  often addressed only superficially, if at all.
                </p>
              </div>
            </div>

            {/* Aniso */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src="/aniso.jpeg"
                  alt="Aniso Kilas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-green-900">Aniso Kilas</h3>
                <p className="text-green-700 font-semibold mb-3">Chief Technology Officer</p>
                <p className="text-gray-700">
                  Aniso serves as the Chief Technology Officer of Eco Arabica, where she leads the technical
                  strategy and system architecture of the initiative. Her expertise spans data science, software
                  engineering, and applied analytics, with a focus on building scalable, data-driven platforms for
                  traceability, sustainability monitoring, and decision support. She has hands-on experience in
                  AI-assisted systems, data pipelines, and product development, and is currently strengthening
                  her technical depth through formal training in Computer Engineering at Queen&apos;s College.
                </p>
              </div>
            </div>

            {/* Rediet */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square relative bg-gray-200">
                <Image
                  src="/rediet.jpeg"
                  alt="Rediet Zeray"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-green-900">Rediet Zeray</h3>
                <p className="text-green-700 font-semibold mb-3">Chief Operating Officer</p>
                <p className="text-gray-700">
                  Alongside Hermela Gebremedhin, Rediet Zeray serves as Chief Operating Officer (COO), a
                  climate enthusiast with over three years of professional experience in climate change–related
                  fields. Rediet brings a strong sustainability and operational perspective to Eco-Arabica, ensuring
                  that day-to-day operations align with environmental responsibility and long-term resilience.
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
            Our &ldquo;Youth Empowerment&rdquo; Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLeaf className="text-3xl text-green-600 mr-3" />
                <h3 className="text-xl font-bold">Green Skills for a Sustainable Future</h3>
              </div>
              <p className="mb-4 text-gray-700">We equip young professionals and farmers with the competencies needed for a climate-resilient economy.</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li><strong>Agroforestry & Biodiversity:</strong> Training on shade-grown coffee techniques that protect the Ethiopian highlands.</li>
                <li><strong>Climate-Smart Agriculture:</strong> Teaching data-driven methods to manage soil health and water conservation.</li>
                <li><strong>EUDR Compliance:</strong> Empowering youth to lead the charge in meeting international environmental standards.</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-3xl text-green-600 mr-3" />
                <h3 className="text-xl font-bold">The Eco Arabica Hackathon Series</h3>
              </div>
              <p className="mb-4 font-semibold text-gray-700">Where Tech Meets the Bean</p>
              <p className="mb-4 text-sm text-gray-700">Our hackathons invite young developers and innovators to solve real-world supply chain problems.</p>
              <p className="mb-2 text-sm text-gray-700"><strong>The Challenge:</strong> How do we track coffee from a remote forest to a European port?</p>
              <p className="text-sm text-gray-700"><strong>The Impact:</strong> Participants build prototypes for mobile traceability apps, offline data collection tools, and blockchain solutions, gaining mentorship from industry experts.</p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaUsers className="text-3xl text-green-600 mr-3" />
                <h3 className="text-xl font-bold">Webinars & Interactive Workshops</h3>
              </div>
              <p className="mb-4 text-gray-700">We leverage digital platforms to make expert knowledge accessible across Ethiopia.</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li><strong>Digital Literacy:</strong> Training young cooperative leaders on how to use GPS mapping and digital record-keeping.</li>
                <li><strong>Entrepreneurship:</strong> Workshops on &ldquo;Coffee-Preneurship&rdquo;—moving from primary production into value-add services like roasting, cupping, and digital marketing.</li>
                <li><strong>Global Access:</strong> Our webinars connect Ethiopian youth directly with international buyers and sustainability experts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Impact Section */}
      <section id="sustainability" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Sustainability & Impact
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
            <p>
              Eco-Arabica integrates <strong>digital skills and green technology approaches</strong> as part of a broader
              effort to promote sustainability across the coffee production and supply chain, with a particular
              focus on engaging youth as drivers of innovation and change.
            </p>
            <p>
              Our Digital tools play a key role in improving transparency, efficiency, and environmental
              responsibility. By adopting <strong>data-driven management systems, digital record-keeping, and
              traceability tools</strong>. These practices contribute to environmental sustainability and better
              supply-chain coordination.
            </p>
            <div className="bg-green-50 p-6 rounded-lg my-8">
              <p className="mb-4">
                As part of its sustainability framework, Eco-Arabica explores the use of <strong>QR codes,
                Satellite-supported monitoring and traceability and Geo-location</strong> to link coffee lots to
                information on origin, processing methods, and quality evaluation. This approach strengthens
                transparency for buyers and partners while creating opportunities to communicate the social
                and environmental context of production. In the longer term, <strong>blockchain-based traceability</strong> is
                considered a tool to enhance data integrity, trust, and accountability across the value chain.
              </p>
            </div>
            <p>
              Eco-Arabica also emphasises the role of <strong>youth and digital literacy</strong> in advancing sustainable
              coffee systems. Eco-Arabica <strong>organises webinars and hands-on workshops</strong>, providing
              practical training, knowledge-sharing, and mentorship opportunities that empower youth to apply
              digital and sustainable practices in real-world contexts.
            </p>
            <p>
              By combining <strong>sustainability-oriented thinking, green technology principles, and digital
              innovation</strong>, Eco-Arabica aims to contribute to a more transparent, inclusive, and
              environmentally responsible coffee sector that reflects both local realities and global
              expectations.
            </p>
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
              &ldquo;Before the Eco Arabica workshop, I saw coffee as my father&apos;s hard labor.
              Now, I see it as a digital business. I am learning to map our farm to meet
              EU standards, ensuring our coffee stays on the world stage.&rdquo;
            </blockquote>
            <p className="mt-4 text-right">— Amanuel, 22, Agricultural Graduate & Workshop Participant</p>
          </div>
        </div>
      </section>

      {/* Webinar & Workshop Section */}
      <section id="webinar" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Webinar & Workshop
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-8 text-gray-700">
              Join our upcoming webinars and workshops to learn about sustainable coffee practices,
              digital innovation, and green technology in the coffee sector.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-900">Register for Our Next Session</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500">
                  <option>Select Workshop/Webinar</option>
                  <option>Green Skills Training</option>
                  <option>Digital Literacy Workshop</option>
                  <option>Coffee-Preneurship Webinar</option>
                  <option>EUDR Compliance Training</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition text-lg font-semibold"
                >
                  Register Now
                </button>
              </form>
            </div>
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

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <FaEnvelope className="text-2xl" />
                <a href="mailto:info@ecoarabica1671.com" className="text-xl hover:text-green-300 transition">
                  info@ecoarabica1671.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaWhatsapp className="text-2xl" />
                <div className="text-xl">
                  <a href="https://wa.me/251929367608" className="hover:text-green-300 transition">+251929367608</a>
                  {' / '}
                  <a href="https://wa.me/251927444862" className="hover:text-green-300 transition">+251927444862</a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-6 mt-8">
                <a href="#" className="hover:text-green-300 transition" aria-label="Instagram">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-green-300 transition" aria-label="LinkedIn">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
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