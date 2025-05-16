import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
      <header className="text-center py-20 bg-gradient-to-r from-slate-800 to-gray-900 animate-fade-in shadow-xl frost">
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg ">Karthik V</h1>
        <p className="text-pink-300 mt-4 text-lg italic">Game Developer | MLH Winner | CSE Student @ IARE</p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 animate-slide-in">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Interlude */}
          <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl frost hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-red-400">🚀 Interlude</h2>
            <p className="text-gray-300 mt-2">A space shooter game made in 24 hours for CodeDay 2.0. Battle enemy waves in deep space!</p>
            <iframe className="w-full h-64 mt-4 rounded-lg shadow-md" src="https://www.youtube.com/embed/dHsKdx9EZbs" title="Interlude Trailer" allowFullScreen></iframe>
            <a href="https://showcase.codeday.org/project/claxnqs0n1204021fgiftjsldqfi" target="_blank" className="fancy-button inline-block mt-4 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors font-semibold"><span>View on CodeDay Showcase</span></a>
          </div>

          {/* Geek'O'Wars */}
          <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl frost hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-blue-400">🧠 Geek'O'Wars</h2>
            <p className="text-gray-300 mt-2">Fight viruses inside your own laptop in this TPS survival game. Built for FrostHacks (MLH) — 3rd place!</p>
            <iframe className="w-full h-64 mt-4 rounded-lg shadow-md" src="https://www.youtube.com/embed/Ev9z2NhpzhQ" title="Geek'O'Wars Trailer" allowFullScreen></iframe>
            <a href="https://devpost.com/software/geek-o-wars" target="_blank" className="fancy-button inline-block mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"><span>View on Devpost</span></a>
          </div>

          {/* ByteOasis */}
          <div className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl frost hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-green-400 ">🏝️ ByteOasis</h2>
            <p className="text-gray-300 mt-2">A programmer crash-lands on an island and must solve code puzzles to escape. Built in 48 hours.</p>
            <iframe className="w-full h-64 mt-4 rounded-lg shadow-md" src="https://www.youtube.com/embed/N3iP3Src8uw" title="ByteOasis Trailer" allowFullScreen></iframe>
            <a href="https://drive.google.com/drive/folders/1VgsEXIlgDOYZEDbVNmD2cDnmNajDsa0n?usp=drive_link" target="_blank" className="fancy-button inline-block mt-4 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors font-semibold"><span>Download Game</span></a>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 bg-gray-900 text-gray-400 animate-fade-in mt-12 border-t border-gray-700">
        <p className="mb-2 text-lg font-medium">Connect with me:</p>
        <div className="space-x-6 text-pink-400">
          <a href="https://github.com/KarthikVeeranala" className="hover:underline" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" className="hover:underline" target="_blank">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="hover:underline">Email</a>
        </div>
        <p className="mt-4 text-sm">&copy; 2025 Karthik V. All rights reserved.</p>
      </footer>
    </div>
  );
}
