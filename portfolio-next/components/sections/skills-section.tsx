export function SkillsSection() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Python (Advanced)", "Swift (Intermediate)"]
    },
    {
      title: "Data Science & ML",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "EDA"]
    },
    {
      title: "Core CS",
      skills: ["OOP", "Problem Solving", "Algorithms", "Data Structures"]
    },
    {
      title: "Dev Tools",
      skills: ["Git", "GitHub", "Jupyter", "VS Code"]
    },
    {
      title: "Emerging Tech",
      skills: ["Generative AI", "LLMs"]
    },
    {
      title: "Professional",
      skills: ["Data Storytelling", "Tech Documentation", "Code Optimization", "Clean Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 text-sm font-mono tracking-[0.2em] text-emerald-400 uppercase">03 · Skills</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">My Toolkit.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="border border-emerald-400 border-opacity-30 bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:border-emerald-400 hover:border-opacity-100 transition-all">
              <h3 className="text-sm font-mono tracking-[0.15em] text-emerald-400 uppercase mb-4 flex items-center gap-2">
                <span>{"//"}</span> {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs font-mono px-3 py-1 bg-emerald-400 bg-opacity-10 border border-emerald-400 border-opacity-20 text-gray-300 rounded hover:bg-emerald-400 hover:bg-opacity-20 hover:text-emerald-400 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
