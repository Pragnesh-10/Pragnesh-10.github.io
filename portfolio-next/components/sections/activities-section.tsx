export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 text-sm font-mono tracking-[0.2em] text-emerald-400 uppercase">04 · Activities</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Beyond the Classroom.</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-400 bg-slate-800 bg-opacity-50 p-6 rounded-lg hover:border-emerald-400 transition-all">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Apple Swift Student Challenge</h3>
            <p className="text-sm font-mono text-emerald-400 mb-1">Participant</p>
            <p className="text-xs font-mono text-gray-500 mb-3">2026</p>
            <p className="text-gray-300 leading-relaxed">Participated in Apple's Swift Student Challenge, showcasing innovative iOS app development skills and creative problem-solving abilities through Swift programming.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
