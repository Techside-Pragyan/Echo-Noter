"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, Brain, Sparkles, CheckCircle, Youtube } from "lucide-react";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl) return;
    // Route to generation page or open modal
    console.log("Generating notes for", videoUrl);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">EchoNoter</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-white text-gray-300 transition-colors">Log in</button>
            <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Next-Generation AI Learning Assistant
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Turn Any YouTube Video Into <br className="hidden md:block" />
            <span className="text-gradient">Smart AI Notes</span> Instantly
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Save time and learn faster. Our AI extracts transcripts, understands context, and generates highly structured, beautiful study notes, summaries, and flashcards.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleGenerate}
            className="max-w-2xl mx-auto relative flex items-center"
          >
            <div className="absolute left-4 text-gray-500">
              <Youtube className="w-6 h-6" />
            </div>
            <input 
              type="url" 
              required
              placeholder="Paste YouTube Video URL here..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-40 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity neon-btn flex items-center gap-2"
            >
              Generate <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </section>

      {/* Features Showcase */}
      <section id="features" className="py-24 bg-black/50 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Supercharge Your Learning</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to digest hours of content in minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-purple-400" />,
                title: "Smart Structured Notes",
                description: "Get organized bullet points, topic summaries, and key takeaways generated automatically from the transcript."
              },
              {
                icon: <Brain className="w-6 h-6 text-pink-400" />,
                title: "AI Concept Simplified",
                description: "Our AI breaks down complex technical topics into easy-to-understand, student-friendly explanations."
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-green-400" />,
                title: "Instant Flashcards & Quizzes",
                description: "Test your knowledge immediately with automatically generated Q&A flashcards from the video content."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
