import React from 'react';
export const PublicationsSection = () => {
  return <div className="space-y-3">
      <ul className="space-y-3 list-disc pl-4">
        <li>
          Seal, S., Huynh, D. L., Chelbi, M., Khosravi, S., Kumar, A., Thieme, M., ... & Spjuth,
          O. (2025). AI Agents in Drug Discovery. <em>arXiv preprint arXiv:2510.27130</em>. [
          <a href="https://arxiv.org/abs/2510.27130" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-500 transition-colors">
            link
          </a>
          ]
        </li>
        <li>
          Mustali, J., Yasuda, I., Hirano, Y., Yasuoka, K., Gautieri, A., & Arai, N. (2023).
          Unsupervised deep learning for molecular dynamics simulations: a novel analysis of
          protein–ligand interactions in SARS-CoV-2 M pro. <em>RSC advances</em>, 13(48),
          34249-34261. [
          <a href="https://pubs.rsc.org/en/content/articlehtml/2023/ra/d3ra06375e" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-500 transition-colors">
            link
          </a>
          ]
        </li>
        <li>MSc thesis [link to open the pdf link in the browser]</li>
        <li>BSc thesis (Italian) [</li>
      </ul>
    </div>;
};