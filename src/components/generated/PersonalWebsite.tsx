import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutSection } from './AboutSection';
import { AwardsSection } from './AwardsSection';
import { PublicationsSection } from './PublicationsSection';
import { BlogsSection } from './BlogsSection';
import { MediaSection } from './MediaSection';
import { NotesSection } from './NotesSection';
type Note = {
  id: string;
  title: string;
  content: React.ReactNode;
};

// Content
const NOTES: Note[] = [{
  id: 'about',
  title: 'About me',
  content: <AboutSection />
}, {
  id: 'publications',
  title: 'Publications',
  content: <PublicationsSection />
}, {
  id: 'awards',
  title: 'Awards',
  content: <AwardsSection />
}, {
  id: 'blogs',
  title: 'Blogs',
  content: <BlogsSection />
}, {
  id: 'media',
  title: 'Media',
  content: <MediaSection />
}, {
  id: 'notes',
  title: 'Notes and projects',
  content: <NotesSection />
}];

// @component: PersonalWebsite
export const PersonalWebsite = () => {
  const [activeNoteId, setActiveNoteId] = useState<string>('about');
  const activeNote = NOTES.find(n => n.id === activeNoteId) || NOTES[0];

  // Render About me with additional section links
  const renderContent = () => {
    if (activeNote.id === 'about') {
      return <>
          {activeNote.content}
          <div className="mt-12 pt-6 space-y-1">
            {NOTES.filter(n => n.id !== 'about').map(note => <div key={note.id}>
                <button onClick={() => setActiveNoteId(note.id)} className="text-gray-500 hover:text-gray-900 transition-colors text-left text-sm">
                  {note.title}
                </button>
              </div>)}
          </div>
        </>;
    }
    return activeNote.content;
  };

  // @return
  return <div className="flex h-screen w-full bg-white overflow-hidden font-sans text-gray-900">
      {/* Sidebar */}
      <div className="w-40 border-r border-gray-100 flex flex-col">
        <div className="px-4 py-5">
          <h1 className="text-sm font-normal text-gray-900">Jessica Mustali</h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          {NOTES.map(note => <button key={note.id} onClick={() => setActiveNoteId(note.id)} className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 transition-colors ${activeNoteId === note.id ? 'text-gray-900' : 'text-gray-400'}`}>
              {note.title}
            </button>)}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={activeNote.id} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.12
        }} className="flex-1 overflow-y-auto">
            <div className="max-w-xl mx-auto px-6 py-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {activeNote.title}
                </h2>
                {activeNote.id === 'about' && <div className="flex items-center gap-4 text-xs">
                    <a href="https://www.linkedin.com/in/jessica-mustali/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://x.com/JessicaMustali" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline transition-colors">
                      X
                    </a>
                  </div>}
                {activeNote.id === 'publications' && <div className="text-xs">
                    <a href="https://scholar.google.com/citations?user=g5BOUx0AAAAJ&hl=it" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline transition-colors">
                      Google Scholar
                    </a>
                  </div>}
              </div>
              <div className="text-gray-700 leading-relaxed text-sm">
                {renderContent()}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>;
};