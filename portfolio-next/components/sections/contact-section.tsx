'use client';

import React, { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Please fill all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      if (formData.experience) {
        Object.assign(payload, { experience: formData.experience });
      }

      const response = await fetch('https://formspree.io/f/mnjoyrpe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', experience: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Error sending message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 text-sm font-mono tracking-[0.2em] text-emerald-400 uppercase">05 · Contact</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's work<br />together.</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Actively seeking internship opportunities in Machine Learning, Data Science, and Software Engineering. Open to collaborations, projects, and conversations.
            </p>

            <div className="space-y-4">
              <a href="mailto:yedrunagapragnesh@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
                <span className="text-xl">✉</span>
                <span>yedrunagapragnesh@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/yedrunagapragnesh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
                <span className="text-xl font-bold">in</span>
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/Pragnesh-10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group">
                <span className="text-xl">⌥</span>
                <span>GitHub Portfolio</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
              />
            </div>

            <input
              type="text"
              name="experience"
              placeholder="Experience (optional)"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
            />

            <textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-emerald-400 text-black font-semibold rounded hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Sending...' : 'Send Message →'}
            </button>

            {status && (
              <div className={`text-sm font-mono ${status.includes('successfully') ? 'text-emerald-400' : 'text-red-400'}`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
