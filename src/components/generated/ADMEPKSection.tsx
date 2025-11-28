import React from 'react';
export const ADMEPKSection = () => {
  return <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">The ADME/PK Optimization Challenge</h3>
        <span className="text-xs text-gray-400">March 2025</span>
      </div>
      <p>
        Achieving the right ADME (absorption, distribution, metabolism, and excretion) properties is fundamental to the clinical success of a drug candidate. Pharmacokinetics (PK), the study of how a drug moves through and interacts with the body, determines whether a molecule will become a life-saving drug. Early identification of the target potency-ADME landscape significantly increases the likelihood of clinical success and reduces attrition rates. Nearly half of drug discovery programs fail due to ADME/PK issues, despite years and millions spent on trial and error. Now imagine if, much like asking ChatGPT to fix bugs in our code, we could upload the structure of a molecule and receive an accurate report of predicted properties, with referenced insights and optimization strategies, within minutes. What if we could improve ADME properties without months of experimental testing?
      </p>
      <p>
        Our insight is that to be truly effective in the chemical domain, AI models need to "see" a much greater variety of molecules. While experimental data is limited, we have the ability to computationally generate billions of drug-like molecules. By pre-training our models on these massive datasets, we greatly exceed the scale of existing datasets, allowing our models to learn a richer representation of chemical space and extract maximum value from the data. Previous efforts in chemistry have used Transformer-based models to process molecular representations such as SMILES strings (e.g., IBM's MolFormer, Reverie Labs' ChemBERTa-2) or two-dimensional graphs (e.g., AWS' DGL-LifeSci, Microsoft's Graphormer). While these approaches have advanced the field, they overlook the depth of information contained in a molecule's three-dimensional and dynamic structure, as well as the quantum properties underlying chemical behavior—essential for accurately predicting molecular interactions and pharmacokinetics. Our solution goes beyond traditional methods with a physics-based, multimodal model grounded in molecular biochemistry. By integrating quantum-derived descriptors and 3D dynamic conformations, our models capture molecular behavior at a fundamental level, improving generalization beyond known chemical spaces. We believe that with superior molecular representation learning, we can unlock more powerful AI applications in chemical biology.
      </p>
      <p>
        <a href="https://www.papermark.com/view/cm42kvs04000otdpipi4pgo6v" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 transition-colors">
          Download Benchmarking Report →
        </a>
      </p>
      <p>
        As a first demonstration of the potential of our approach, we predicted in vitro ADME properties using Miso-pk and evaluated its performance in the context of the Therapeutics Data Commons (TDC) benchmark. We compared our results to the top entries on the TDC leaderboard, a baseline approach using available open-source algorithms, and a well-established commercial solution considered the industry leader. Our AI model, based on multimodal molecular representations and adaptive meta-learning, achieves state-of-the-art performance on core prediction tasks. In particular, we have achieved outstanding results for blood-brain barrier penetration with an area under the receiver operating characteristic curve (AUROC) of 0.926 ± 0.12 and for P-glycoprotein inhibition with an AUROC of 0.985 ± 0.03. This capability is particularly valuable for CNS drug development and we're excited that our platform will enable pharmaceutical companies to overcome the high clinical failure rate of neuroscience therapeutics. These results validate our hypothesis that physics-based representations combined with adaptive meta-learning have the potential to provide more accurate and reliable ADMET predictions.
      </p>
      <p>
        We are committed to developing technologies that provide R&D teams with a faster and more predictable path to life-saving medicines. Our work on ADMET predictive modeling, in close collaboration with scientists facing real-world optimization challenges, has underscored the importance of science-based, referenced insights in small molecule optimization. Decisions are only as good as the knowledge behind them, and ensuring that medicinal chemists have access to the right insights at the right time is critical to advancing drug discovery. We envision a future where an AI assistant ensures that no critical knowledge is left behind—developing intuition like a medicinal chemist and providing scientifically backed, referenced insights to guide drug hunters through the complexities of small molecule optimization. This is the future we're building.
      </p>
    </div>;
};

