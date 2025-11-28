import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
type Note = {
  id: string;
  title: string;
  content: React.ReactNode;
};

// Mock Data
const NOTES: Note[] = [{
  id: 'intro',
  title: 'About',
  content: <div className="space-y-4" data-magicpath-id="0" data-magicpath-path="PersonalWebsite.tsx">
        <p data-magicpath-id="1" data-magicpath-path="PersonalWebsite.tsx">Hi, I'm a creative developer and designer.</p>
        <p data-magicpath-id="2" data-magicpath-path="PersonalWebsite.tsx">I build digital products that feel good to use.</p>
        <p data-magicpath-id="3" data-magicpath-path="PersonalWebsite.tsx">This website looks like my notes app because that's where all my best ideas start.</p>
      </div>
}, {
  id: 'work',
  title: 'Work',
  content: <div className="space-y-6" data-magicpath-id="4" data-magicpath-path="PersonalWebsite.tsx">
        <div data-magicpath-id="5" data-magicpath-path="PersonalWebsite.tsx">
          <h3 className="font-semibold" data-magicpath-id="6" data-magicpath-path="PersonalWebsite.tsx">Venture UI</h3>
          <p className="text-gray-600 text-sm mt-1" data-magicpath-id="7" data-magicpath-path="PersonalWebsite.tsx">A React component library built for speed and accessibility.</p>
        </div>

        <div data-magicpath-id="8" data-magicpath-path="PersonalWebsite.tsx">
          <h3 className="font-semibold" data-magicpath-id="9" data-magicpath-path="PersonalWebsite.tsx">AutoScale</h3>
          <p className="text-gray-600 text-sm mt-1" data-magicpath-id="10" data-magicpath-path="PersonalWebsite.tsx">AI-powered infrastructure scaling for startups. Grew from 0 to 10k users.</p>
        </div>

        <div data-magicpath-id="11" data-magicpath-path="PersonalWebsite.tsx">
          <h3 className="font-semibold" data-magicpath-id="12" data-magicpath-path="PersonalWebsite.tsx">Mono</h3>
          <p className="text-gray-600 text-sm mt-1" data-magicpath-id="13" data-magicpath-path="PersonalWebsite.tsx">Minimalist habit tracker featured on the App Store.</p>
        </div>
      </div>
}, {
  id: 'stack',
  title: 'Stack',
  content: <div className="space-y-6" data-magicpath-id="14" data-magicpath-path="PersonalWebsite.tsx">
        <div data-magicpath-id="15" data-magicpath-path="PersonalWebsite.tsx">
          <h3 className="font-semibold mb-2" data-magicpath-id="16" data-magicpath-path="PersonalWebsite.tsx">Frontend</h3>
          <p className="text-gray-600 text-sm" data-magicpath-id="17" data-magicpath-path="PersonalWebsite.tsx">React, TypeScript, Tailwind CSS, Next.js, Framer Motion</p>
        </div>
        
        <div data-magicpath-id="18" data-magicpath-path="PersonalWebsite.tsx">
          <h3 className="font-semibold mb-2" data-magicpath-id="19" data-magicpath-path="PersonalWebsite.tsx">Design</h3>
          <p className="text-gray-600 text-sm" data-magicpath-id="20" data-magicpath-path="PersonalWebsite.tsx">Figma, Blender, Spline</p>
        </div>

        <div data-magicpath-id="21" data-magicpath-path="PersonalWebsite.tsx">
          <h3 className="font-semibold mb-2" data-magicpath-id="22" data-magicpath-path="PersonalWebsite.tsx">Learning</h3>
          <p className="text-gray-600 text-sm" data-magicpath-id="23" data-magicpath-path="PersonalWebsite.tsx">Rust, WebGPU, Shaders</p>
        </div>
      </div>
}, {
  id: 'contact',
  title: 'Contact',
  content: <div className="space-y-3" data-magicpath-id="24" data-magicpath-path="PersonalWebsite.tsx">
        <p data-magicpath-id="25" data-magicpath-path="PersonalWebsite.tsx">Email: hello@example.com</p>
        <p data-magicpath-id="26" data-magicpath-path="PersonalWebsite.tsx">Twitter: @example</p>
        <p data-magicpath-id="27" data-magicpath-path="PersonalWebsite.tsx">GitHub: github.com/example</p>
      </div>
}];

// @component: PersonalWebsite
export const PersonalWebsite = () => {
  const [activeNoteId, setActiveNoteId] = useState<string>('intro');
  const activeNote = NOTES.find(n => n.id === activeNoteId) || NOTES[0];

  // @return
  return <div className="flex h-screen w-full bg-white overflow-hidden font-sans text-gray-900" data-magicpath-id="28" data-magicpath-path="PersonalWebsite.tsx">
      {/* Sidebar */}
      <div className="w-48 border-r border-gray-200 flex flex-col" data-magicpath-id="29" data-magicpath-path="PersonalWebsite.tsx">
        <div className="p-4 border-b border-gray-200" data-magicpath-id="30" data-magicpath-path="PersonalWebsite.tsx">
          <h1 className="text-lg font-semibold" data-magicpath-id="31" data-magicpath-path="PersonalWebsite.tsx">Notes</h1>
        </div>

        <div className="flex-1 overflow-y-auto" data-magicpath-id="32" data-magicpath-path="PersonalWebsite.tsx">
          {NOTES.map(note => <button key={note.id} onClick={() => setActiveNoteId(note.id)} className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 transition-colors ${activeNoteId === note.id ? 'bg-gray-50' : ''}`} data-magicpath-id="33" data-magicpath-path="PersonalWebsite.tsx">
              {note.title}
            </button>)}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white h-full overflow-hidden" data-magicpath-id="34" data-magicpath-path="PersonalWebsite.tsx">
        <AnimatePresence mode="wait" data-magicpath-id="35" data-magicpath-path="PersonalWebsite.tsx">
          <motion.div key={activeNote.id} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.15
        }} className="flex-1 overflow-y-auto" data-magicpath-id="36" data-magicpath-path="PersonalWebsite.tsx">
            <div className="max-w-2xl mx-auto px-8 py-12" data-magicpath-id="37" data-magicpath-path="PersonalWebsite.tsx">
              <h2 className="text-2xl font-semibold mb-6" data-magicpath-id="38" data-magicpath-path="PersonalWebsite.tsx">{activeNote.title}</h2>
              <div className="text-gray-800 leading-relaxed" data-magicpath-id="39" data-magicpath-path="PersonalWebsite.tsx">{activeNote.content}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>;
};