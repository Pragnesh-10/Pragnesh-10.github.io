export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 text-sm font-mono tracking-[0.2em] text-emerald-400 uppercase">02 · Experience</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">My Journey.</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-400 bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:border-cyan-400 transition-all">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Research Intern</h3>
            <p className="text-sm font-mono text-emerald-400 mb-1">Forest Ecology Lab - SRM University, Amaravati</p>
            <p className="text-xs font-mono text-gray-500 mb-3">March 2026 – Present</p>
            <p className="text-gray-300 leading-relaxed">Conducting research in forest ecology, analyzing ecological data and contributing to environmental conservation efforts.</p>
          </div>

          <div className="border-l-4 border-emerald-400 bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:border-cyan-400 transition-all">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Member</h3>
            <p className="text-sm font-mono text-emerald-400 mb-1">Singularity Student Lab - SRM University, Amaravati</p>
            <p className="text-xs font-mono text-gray-500 mb-3">April 2026 – Present</p>
            <p className="text-gray-300 leading-relaxed">Collaborating on cutting-edge projects at the intersection of AI and emerging technologies, building innovative solutions.</p>
          </div>
          <div className="border-l-4 border-emerald-400 bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:border-cyan-400 transition-all">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Web Management & Development</h3>
            <p className="text-sm font-mono text-emerald-400 mb-1">Microsoft Student Community - SRM University, Amaravati</p>
            <p className="text-xs font-mono text-gray-500 mb-3">May 2026 – Present</p>
            <p className="text-gray-300 leading-relaxed">Worked on website management, frontend development, content updates, and improving the digital presence of the community through collaborative technical projects and event support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
