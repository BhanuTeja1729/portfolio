import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Application Developer',
    company: 'Tantragyaan Solutions',
    period: 'Aug 2024 - Present',
    highlights: [
      'Architected complex database structures with real-time data synchronization',
      'Integrated IoT devices with OpenRemote, Owncast, and MQTT protocols',
      'Built medical-grade applications for secure patient data management',
      'Developed data visualization dashboards for large-scale analytics',
    ],
  },
  {
    title: 'Application Engineer Intern',
    company: 'Tantragyaan Solutions',
    period: 'Mar 2024 - Jul 2024',
    highlights: [
      'Designed responsive billing and inventory management system',
      'Implemented role-based access control and real-time updates',
      'Optimized database queries for improved performance',
    ],
  },
  {
    title: 'Full Stack Web Development Intern',
    company: 'Varcon Technologies',
    period: 'Aug 2023 - Nov 2023',
    highlights: [
      'Developed fitness tracking application with real-time synchronization',
      'Implemented performance optimization techniques (caching, lazy loading)',
      'Integrated UI/UX best practices for seamless user experience',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <p className="text-blue-600 font-semibold text-lg">Professional Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{exp.title}</h3>
                  <p className="text-blue-600 font-semibold mt-1">{exp.company}</p>
                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
