import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, SquarePen, Search, MoreHorizontal, Share, Folder, Trash2, Paperclip, CheckCircle2, Mic, Camera, PenTool } from 'lucide-react';
type Note = {
  id: string;
  title: string;
  preview: string;
  date: string;
  folder: string;
  content: React.ReactNode;
};

// Mock Data
const NOTES: Note[] = [{
  id: 'intro',
  title: 'Hello World 👋',
  preview: 'A bit about who I am and what I do...',
  date: 'Just now',
  folder: 'Personal',
  content: <div className="space-y-6" data-magicpath-id="0" data-magicpath-path="PersonalWebsite.tsx">
        <p className="text-lg leading-relaxed text-gray-800" data-magicpath-id="1" data-magicpath-path="PersonalWebsite.tsx">
          Hi, I'm a creative developer and UI designer based in the cloud. I build digital products that feel good to use.
        </p>
        <p className="text-lg leading-relaxed text-gray-800" data-magicpath-id="2" data-magicpath-path="PersonalWebsite.tsx">
          This website is designed to look like my personal notes app because that's where all my best ideas start. It's raw, minimal, and focuses entirely on the content.
        </p>
        <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100 my-6" data-magicpath-id="3" data-magicpath-path="PersonalWebsite.tsx">
          <p className="font-medium text-yellow-800 mb-2" data-magicpath-id="4" data-magicpath-path="PersonalWebsite.tsx">My Core Philosophy:</p>
          <ul className="list-disc list-inside space-y-2 text-yellow-900/80" data-magicpath-id="5" data-magicpath-path="PersonalWebsite.tsx">
            <li data-magicpath-id="6" data-magicpath-path="PersonalWebsite.tsx">Simplicity is the ultimate sophistication</li>
            <li data-magicpath-id="7" data-magicpath-path="PersonalWebsite.tsx">Functionality should drive aesthetics</li>
            <li data-magicpath-id="8" data-magicpath-path="PersonalWebsite.tsx">Code is just a tool for expression</li>
          </ul>
        </div>
      </div>
}, {
  id: 'work',
  title: 'Selected Projects 🚀',
  preview: 'A collection of things I\'ve shipped recently.',
  date: 'Yesterday',
  folder: 'Work',
  content: <div className="space-y-8" data-magicpath-id="9" data-magicpath-path="PersonalWebsite.tsx">
        <p className="text-gray-500 italic text-sm text-center mb-8" data-magicpath-id="10" data-magicpath-path="PersonalWebsite.tsx">Tap any project to see details (simulated)</p>
        
        <div className="group cursor-pointer" data-magicpath-id="11" data-magicpath-path="PersonalWebsite.tsx">
          <div className="flex items-center gap-3 mb-2" data-magicpath-id="12" data-magicpath-path="PersonalWebsite.tsx">
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold" data-magicpath-id="13" data-magicpath-path="PersonalWebsite.tsx">V</div>
            <div data-magicpath-id="14" data-magicpath-path="PersonalWebsite.tsx">
              <h3 className="font-semibold text-xl" data-magicpath-id="15" data-magicpath-path="PersonalWebsite.tsx">Venture UI</h3>
              <span className="text-xs text-gray-500 uppercase tracking-wider" data-magicpath-id="16" data-magicpath-path="PersonalWebsite.tsx">Design System</span>
            </div>
          </div>
          <p className="text-gray-600 pl-[3.25rem]" data-magicpath-id="17" data-magicpath-path="PersonalWebsite.tsx">A comprehensive React component library built for speed and accessibility.</p>
        </div>

        <div className="h-px bg-gray-200 w-full pl-[3.25rem]" data-magicpath-id="18" data-magicpath-path="PersonalWebsite.tsx" />

        <div className="group cursor-pointer" data-magicpath-id="19" data-magicpath-path="PersonalWebsite.tsx">
          <div className="flex items-center gap-3 mb-2" data-magicpath-id="20" data-magicpath-path="PersonalWebsite.tsx">
            <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold" data-magicpath-id="21" data-magicpath-path="PersonalWebsite.tsx">A</div>
            <div data-magicpath-id="22" data-magicpath-path="PersonalWebsite.tsx">
              <h3 className="font-semibold text-xl" data-magicpath-id="23" data-magicpath-path="PersonalWebsite.tsx">AutoScale</h3>
              <span className="text-xs text-gray-500 uppercase tracking-wider" data-magicpath-id="24" data-magicpath-path="PersonalWebsite.tsx">SaaS Platform</span>
            </div>
          </div>
          <p className="text-gray-600 pl-[3.25rem]" data-magicpath-id="25" data-magicpath-path="PersonalWebsite.tsx">AI-powered infrastructure scaling for startups. Helped grow from 0 to 10k users.</p>
        </div>

        <div className="h-px bg-gray-200 w-full pl-[3.25rem]" data-magicpath-id="26" data-magicpath-path="PersonalWebsite.tsx" />

        <div className="group cursor-pointer" data-magicpath-id="27" data-magicpath-path="PersonalWebsite.tsx">
          <div className="flex items-center gap-3 mb-2" data-magicpath-id="28" data-magicpath-path="PersonalWebsite.tsx">
            <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold" data-magicpath-id="29" data-magicpath-path="PersonalWebsite.tsx">M</div>
            <div data-magicpath-id="30" data-magicpath-path="PersonalWebsite.tsx">
              <h3 className="font-semibold text-xl" data-magicpath-id="31" data-magicpath-path="PersonalWebsite.tsx">Mono</h3>
              <span className="text-xs text-gray-500 uppercase tracking-wider" data-magicpath-id="32" data-magicpath-path="PersonalWebsite.tsx">Mobile App</span>
            </div>
          </div>
          <p className="text-gray-600 pl-[3.25rem]" data-magicpath-id="33" data-magicpath-path="PersonalWebsite.tsx">Minimalist habit tracker featured on the App Store "Apps We Love".</p>
        </div>
      </div>
}, {
  id: 'stack',
  title: 'Tech Stack ⚡️',
  preview: 'Tools I use on a daily basis.',
  date: 'Monday',
  folder: 'Tech',
  content: <div className="space-y-6" data-magicpath-id="34" data-magicpath-path="PersonalWebsite.tsx">
        <h3 className="font-bold text-gray-900 text-xl" data-magicpath-id="35" data-magicpath-path="PersonalWebsite.tsx">Frontend</h3>
        <div className="grid grid-cols-2 gap-4" data-magicpath-id="36" data-magicpath-path="PersonalWebsite.tsx">
          {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Three.js'].map(tech => <div key={tech} className="flex items-center gap-2" data-magicpath-id="37" data-magicpath-path="PersonalWebsite.tsx">
              <CheckCircle2 size={18} className="text-yellow-500" data-magicpath-id="38" data-magicpath-path="PersonalWebsite.tsx" />
              <span data-magicpath-id="39" data-magicpath-path="PersonalWebsite.tsx">{tech}</span>
            </div>)}
        </div>
        
        <h3 className="font-bold text-gray-900 text-xl mt-8" data-magicpath-id="40" data-magicpath-path="PersonalWebsite.tsx">Design</h3>
        <div className="grid grid-cols-2 gap-4" data-magicpath-id="41" data-magicpath-path="PersonalWebsite.tsx">
          {['Figma', 'Blender', 'Spline', 'Rive'].map(tech => <div key={tech} className="flex items-center gap-2" data-magicpath-id="42" data-magicpath-path="PersonalWebsite.tsx">
              <CheckCircle2 size={18} className="text-yellow-500" data-magicpath-id="43" data-magicpath-path="PersonalWebsite.tsx" />
              <span data-magicpath-id="44" data-magicpath-path="PersonalWebsite.tsx">{tech}</span>
            </div>)}
        </div>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-500 font-mono" data-magicpath-id="45" data-magicpath-path="PersonalWebsite.tsx">
          // Currently learning
          <br data-magicpath-id="46" data-magicpath-path="PersonalWebsite.tsx" />
          const learning = ['Rust', 'WebGPU', 'Shaders'];
        </div>
      </div>
}, {
  id: 'thoughts',
  title: 'Shower Thoughts 🚿',
  preview: 'Random musings about the future of web.',
  date: 'Sunday',
  folder: 'Personal',
  content: <div className="space-y-4" data-magicpath-id="47" data-magicpath-path="PersonalWebsite.tsx">
        <p className="text-lg" data-magicpath-id="48" data-magicpath-path="PersonalWebsite.tsx">
          The best interfaces are the ones you don't notice.
        </p>
        <p className="text-lg" data-magicpath-id="49" data-magicpath-path="PersonalWebsite.tsx">
          We're moving towards a "spatial web" faster than we think, but it won't look like Ready Player One. It will look like information seamlessly overlaid on reality.
        </p>
        <p className="text-lg" data-magicpath-id="50" data-magicpath-path="PersonalWebsite.tsx">
          Why do we still use pagination? Infinite scroll is natural, but we need better markers for "where we are".
        </p>
        <br data-magicpath-id="51" data-magicpath-path="PersonalWebsite.tsx" />
        <p className="font-handwriting text-2xl text-blue-600 -rotate-1 opacity-80" style={{
      fontFamily: 'cursive'
    }} data-magicpath-id="52" data-magicpath-path="PersonalWebsite.tsx">
          Make it simple, but significant.
        </p>
      </div>
}];
const SidebarItem = ({
  note,
  active,
  onClick
}: {
  note: Note;
  active: boolean;
  onClick: () => void;
}) => <button onClick={onClick} className={`w-full text-left p-4 border-b border-gray-200 hover:bg-white/50 transition-colors ${active ? 'bg-white shadow-sm rounded-lg border-transparent mx-2 w-auto my-1' : 'bg-transparent'}`} data-magicpath-id="53" data-magicpath-path="PersonalWebsite.tsx">
    <h3 className={`font-bold truncate ${active ? 'text-gray-900' : 'text-gray-900'}`} data-magicpath-id="54" data-magicpath-path="PersonalWebsite.tsx">{note.title}</h3>
    <div className="flex items-baseline gap-2 mt-1" data-magicpath-id="55" data-magicpath-path="PersonalWebsite.tsx">
      <span className="text-sm text-gray-400 font-medium whitespace-nowrap" data-magicpath-id="56" data-magicpath-path="PersonalWebsite.tsx">{note.date}</span>
      <span className="text-sm text-gray-500 truncate" data-magicpath-id="57" data-magicpath-path="PersonalWebsite.tsx">{note.preview}</span>
    </div>
    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400" data-magicpath-id="58" data-magicpath-path="PersonalWebsite.tsx">
      <Folder size={12} data-magicpath-id="59" data-magicpath-path="PersonalWebsite.tsx" />
      <span data-magicpath-id="60" data-magicpath-path="PersonalWebsite.tsx">{note.folder}</span>
    </div>
  </button>;

// @component: PersonalWebsite
export const PersonalWebsite = () => {
  const [activeNoteId, setActiveNoteId] = useState<string | null>('intro');
  const [isMobileListVisible, setIsMobileListVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Determine active view for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileListVisible(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const activeNote = NOTES.find(n => n.id === activeNoteId) || NOTES[0];
  const handleNoteSelect = (id: string) => {
    setActiveNoteId(id);
    if (window.innerWidth < 768) {
      setIsMobileListVisible(false);
    }
  };
  const handleBack = () => {
    setIsMobileListVisible(true);
    setActiveNoteId(null);
  };
  const filteredNotes = NOTES.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.preview.toLowerCase().includes(searchQuery.toLowerCase()));

  // @return
  return <div className="flex h-screen w-full bg-[#F2F2F7] overflow-hidden font-sans text-gray-900" data-magicpath-id="61" data-magicpath-path="PersonalWebsite.tsx">
      
      {/* Sidebar (List View) */}
      <div className={`
          flex-col bg-[#F2F2F7] border-r border-gray-300 h-full
          md:w-[320px] md:flex z-20
          ${isMobileListVisible ? 'flex w-full absolute inset-0' : 'hidden md:flex relative'}
        `} data-magicpath-id="62" data-magicpath-path="PersonalWebsite.tsx">
        {/* Sidebar Header */}
        <div className="pt-4 pb-2 px-4 bg-[#F2F2F7]/95 backdrop-blur z-10" data-magicpath-id="63" data-magicpath-path="PersonalWebsite.tsx">
          <div className="flex justify-between items-end mb-4" data-magicpath-id="64" data-magicpath-path="PersonalWebsite.tsx">
            <h1 className="text-3xl font-bold tracking-tight" data-magicpath-id="65" data-magicpath-path="PersonalWebsite.tsx">All Notes</h1>
            <div className="p-2 text-yellow-500 hover:bg-gray-200/50 rounded-full transition-colors cursor-pointer" data-magicpath-id="66" data-magicpath-path="PersonalWebsite.tsx">
              <MoreHorizontal size={20} data-magicpath-id="67" data-magicpath-path="PersonalWebsite.tsx" />
            </div>
          </div>
          
          <div className="relative group" data-magicpath-id="68" data-magicpath-path="PersonalWebsite.tsx">
            <Search className="absolute left-2.5 top-2 text-gray-500 w-4 h-4" data-magicpath-id="69" data-magicpath-path="PersonalWebsite.tsx" />
            <input type="text" placeholder="Search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full bg-[#E3E3E8] pl-9 pr-4 py-1.5 rounded-lg text-sm focus:outline-none focus:bg-white/80 transition-all placeholder:text-gray-500" data-magicpath-id="70" data-magicpath-path="PersonalWebsite.tsx" />
            <Mic className="absolute right-2.5 top-2 text-gray-500 w-4 h-4 opacity-60" data-magicpath-id="71" data-magicpath-path="PersonalWebsite.tsx" />
          </div>
        </div>

        {/* Notes List */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-20" data-magicpath-id="72" data-magicpath-path="PersonalWebsite.tsx">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider" data-magicpath-id="73" data-magicpath-path="PersonalWebsite.tsx">Pinned</div>
          <div className="bg-white/0 space-y-[1px]" data-magicpath-id="74" data-magicpath-path="PersonalWebsite.tsx">
            {filteredNotes.map(note => <SidebarItem key={note.id} note={note} active={activeNoteId === note.id} onClick={() => handleNoteSelect(note.id)} data-magicpath-id="75" data-magicpath-path="PersonalWebsite.tsx" />)}
          </div>
          
          {filteredNotes.length === 0 && <div className="flex flex-col items-center justify-center h-40 text-gray-400" data-magicpath-id="76" data-magicpath-path="PersonalWebsite.tsx">
              <p data-magicpath-id="77" data-magicpath-path="PersonalWebsite.tsx">No notes found</p>
            </div>}
        </div>

        {/* Sidebar Footer */}
        <div className="h-12 bg-[#F2F2F7] border-t border-gray-300 flex items-center justify-between px-4 text-xs text-gray-500 shrink-0" data-magicpath-id="78" data-magicpath-path="PersonalWebsite.tsx">
          <div className="flex items-center gap-1" data-magicpath-id="79" data-magicpath-path="PersonalWebsite.tsx">
            <span className="font-medium" data-magicpath-id="80" data-magicpath-path="PersonalWebsite.tsx">{filteredNotes.length} Notes</span>
          </div>
          <SquarePen className="text-yellow-500 w-6 h-6 cursor-pointer hover:text-yellow-600" data-magicpath-id="81" data-magicpath-path="PersonalWebsite.tsx" />
        </div>
      </div>

      {/* Main Content (Detail View) */}
      <div className={`
          flex-1 flex flex-col bg-white h-full relative z-10
          ${!isMobileListVisible ? 'flex absolute inset-0 w-full' : 'hidden md:flex'}
        `} data-magicpath-id="82" data-magicpath-path="PersonalWebsite.tsx">
        <AnimatePresence mode="wait" data-magicpath-id="83" data-magicpath-path="PersonalWebsite.tsx">
          {activeNote && <motion.div key={activeNote.id} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.2
        }} className="flex flex-col h-full w-full" data-magicpath-id="84" data-magicpath-path="PersonalWebsite.tsx">
              {/* Note Header / Toolbar */}
              <header className="h-14 flex items-center justify-between px-4 border-b border-gray-100 shrink-0" data-magicpath-id="85" data-magicpath-path="PersonalWebsite.tsx">
                <div className="flex items-center text-yellow-500 font-medium" data-magicpath-id="86" data-magicpath-path="PersonalWebsite.tsx">
                  {/* Mobile Back Button */}
                  <button onClick={handleBack} className="md:hidden flex items-center pr-4 -ml-2" data-magicpath-id="87" data-magicpath-path="PersonalWebsite.tsx">
                    <ChevronLeft size={26} data-magicpath-id="88" data-magicpath-path="PersonalWebsite.tsx" />
                    <span className="text-lg" data-magicpath-id="89" data-magicpath-path="PersonalWebsite.tsx">Notes</span>
                  </button>
                  <span className="hidden md:flex text-gray-400 text-xs gap-1 items-center" data-magicpath-id="90" data-magicpath-path="PersonalWebsite.tsx">
                    <Folder size={12} data-magicpath-id="91" data-magicpath-path="PersonalWebsite.tsx" /> {activeNote.folder}
                  </span>
                </div>

                <div className="flex items-center gap-6 text-yellow-500" data-magicpath-id="92" data-magicpath-path="PersonalWebsite.tsx">
                  <button className="hover:bg-yellow-50 p-1.5 rounded-full transition-colors" data-magicpath-id="93" data-magicpath-path="PersonalWebsite.tsx">
                    <Share size={20} strokeWidth={1.5} data-magicpath-id="94" data-magicpath-path="PersonalWebsite.tsx" />
                  </button>
                  <button className="hover:bg-yellow-50 p-1.5 rounded-full transition-colors" data-magicpath-id="95" data-magicpath-path="PersonalWebsite.tsx">
                    <PenTool size={20} strokeWidth={1.5} data-magicpath-id="96" data-magicpath-path="PersonalWebsite.tsx" />
                  </button>
                </div>
              </header>

              {/* Note Content */}
              <main className="flex-1 overflow-y-auto" data-magicpath-id="97" data-magicpath-path="PersonalWebsite.tsx">
                <div className="max-w-3xl mx-auto px-6 py-8 md:px-12 md:py-12" data-magicpath-id="98" data-magicpath-path="PersonalWebsite.tsx">
                  <div className="text-center mb-8" data-magicpath-id="99" data-magicpath-path="PersonalWebsite.tsx">
                    <span className="text-xs text-gray-400 font-medium block mb-1" data-magicpath-id="100" data-magicpath-path="PersonalWebsite.tsx">
                      {activeNote.date} at 10:42 AM
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight" data-magicpath-id="101" data-magicpath-path="PersonalWebsite.tsx">
                      {activeNote.title}
                    </h1>
                  </div>

                  <div className="prose prose-lg prose-gray max-w-none text-gray-800" data-magicpath-id="102" data-magicpath-path="PersonalWebsite.tsx">
                    {activeNote.content}
                  </div>
                </div>
                
                {/* Simulated Bottom Space */}
                <div className="h-20" data-magicpath-id="103" data-magicpath-path="PersonalWebsite.tsx" /> 
              </main>

              {/* Mobile Only: Bottom Toolbar */}
              <div className="md:hidden h-12 border-t border-gray-100 flex items-center justify-between px-6 text-gray-400 bg-white" data-magicpath-id="104" data-magicpath-path="PersonalWebsite.tsx">
                <CheckCircle2 size={22} strokeWidth={1.5} data-magicpath-id="105" data-magicpath-path="PersonalWebsite.tsx" />
                <Camera size={22} strokeWidth={1.5} />
                <Paperclip size={22} strokeWidth={1.5} data-magicpath-id="106" data-magicpath-path="PersonalWebsite.tsx" />
                <PenTool size={22} strokeWidth={1.5} data-magicpath-id="107" data-magicpath-path="PersonalWebsite.tsx" />
              </div>
            </motion.div>}
        </AnimatePresence>
        
        {/* Empty State (Desktop only) */}
        {!activeNote && <div className="flex-1 flex items-center justify-center text-gray-300" data-magicpath-id="108" data-magicpath-path="PersonalWebsite.tsx">
            <div className="text-center" data-magicpath-id="109" data-magicpath-path="PersonalWebsite.tsx">
              <SquarePen size={48} className="mx-auto mb-4 opacity-50" data-magicpath-id="110" data-magicpath-path="PersonalWebsite.tsx" />
              <p data-magicpath-id="111" data-magicpath-path="PersonalWebsite.tsx">Select a note to view</p>
            </div>
          </div>}
      </div>
    </div>;
};