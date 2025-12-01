const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'XML'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TailwindCSS', 'Material UI', 'Responsive Design', 'Next.js', 'UI/UX'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'RESTful APIs', 'GraphQL'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'Firebase', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git/GitHub', 'Docker', 'VS Code', 'Postman', 'Power BI', 'Android Studio'],
  },
  {
    category: 'Specializations',
    skills: ['IoT Integration', 'Real-time Communication', 'Data Visualization', 'Blockchain', 'Mobile Dev'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <p className="text-blue-600 font-semibold text-lg">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-medium text-sm hover:border-blue-600 hover:text-blue-600 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-gray-700"><span className="font-semibold text-blue-600">Full Stack Development:</span> End-to-end web application development from database design to responsive UI</p>
              <p className="text-gray-700"><span className="font-semibold text-blue-600">Real-time Systems:</span> Experience with Socket.io, MQTT, and WebSocket implementations</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700"><span className="font-semibold text-blue-600">Data Management:</span> Complex database architecture, optimization, and visualization</p>
              <p className="text-gray-700"><span className="font-semibold text-blue-600">IoT Integration:</span> Secure device connectivity, protocol management, and embedded systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
