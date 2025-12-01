import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Block Ballot',
    description: 'Blockchain-based voting system with facial recognition authentication. Immutable voting records ensure election integrity.',
    tech: ['React', 'MongoDB', 'ThirdWeb SDK', 'Face-Api.js'],
    features: ['Audit Trail', 'Blockchain Security', 'Facial Recognition', 'Scalable Architecture'],
    period: 'Aug 2023 - Apr 2024',
  },
  {
    title: 'Friends App',
    description: 'Real-time chat application with instant messaging, user presence tracking, and secure JWT authentication.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    features: ['Real-time Chat', 'Online Status', 'Secure Auth', 'Responsive UI'],
    period: 'Jan 2024 - Feb 2024',
  },
  {
    title: 'Care Orphans',
    description: 'Mobile application enabling community support for orphanages through donations and event coordination.',
    tech: ['Android Studio', 'Java', 'Firebase'],
    features: ['Donation System', 'Event Management', 'Real-time Updates', 'User Friendly'],
    period: 'Feb 2023 - May 2023',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <p className="text-blue-600 font-semibold text-lg">Portfolio Showcase</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group h-full flex flex-col bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-1 p-8 flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.period}</p>
                </div>

                <p className="text-gray-600 flex-grow">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold">
                  <Github size={18} />
                  Code
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold">
                  <ExternalLink size={18} />
                  Live
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
