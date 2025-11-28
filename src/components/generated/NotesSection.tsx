import React, { useState } from 'react';
import { ADMEPKSection } from './ADMEPKSection';

export const NotesSection = () => {
  const [showADMEPK, setShowADMEPK] = useState(false);

  if (showADMEPK) {
    return <div className="space-y-3">
        <button 
          onClick={() => setShowADMEPK(false)} 
          className="text-gray-500 hover:text-gray-900 transition-colors text-xs mb-4"
        >
          ← Back
        </button>
        <ADMEPKSection />
      </div>;
  }

  return <div className="space-y-3">
      <p>
        <button 
          onClick={() => setShowADMEPK(true)} 
          className="text-left underline hover:text-gray-500 transition-colors cursor-pointer"
        >
          The ADME/PK optimization challenge
        </button>
      </p>
      <p>
        Putting down here some of the notes from my times in university. Before the next Thanksgiving.
      </p>
    </div>;
};