import React from 'react';
import Layout from '@theme/Layout';

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', color: '#222222' }}>
        <h1 style={{ color: '#4A2C2A' }}>Portfolio</h1>

        {/* Featured Articles Section */}
        <h2 style={{ color: '#4A2C2A', borderBottom: '2px solid #4A2C2A', paddingBottom: '5px' }}>
          Featured Articles
        </h2>
        <p>
          Compiling this list was a trip down memory lane, revisiting the many different articles I’ve written. Most dive into data engineering, quantum computing breakthroughs, or cryptocurrency trends. But it's far from comprehensive.
          Over time, the quality improved, thanks to guidance from Anthony Garone at Edify Content.
          My full list of articles is <a href="https://github.com/johnpottergr/Technical-Article-Portfolio/blob/main/article-by-industry.md">here</a>.
        </p>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://johnpottergr.com/portfolio#ai--machine-learning" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              AI/Machine Learning
            </a>
          </li>

          <li>
            <a href="https://johnpottergr.com/portfolio#business-operations" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Business Operations
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#coding" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Coding
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#cryptocurrency" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Cryptocurrency
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#cryptography" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Cryptography
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#data-engineering" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Data Engineering
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#kubernetes" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Kubernetes
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#marketing" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Marketing
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#quantum-computing" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Quantum Computing
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#security" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Security
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#stock-analysis" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Stock Analysis
            </a>
          </li>
        </ul>

        {/* AI / Machine Learning Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>AI / Machine Learning</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://revelate.co/blog/machine-learning-data-catalogs-enhance-data-discoverability/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Machine Learning Data Catalogs Enhance Data Discoverability
            </a>, <em>Revelate</em>, 2023
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1eu7KduzGpK_DeEPWAafbzCvxkPbJc146Q1tlz17uHbs/edit?usp=sharing" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              The Commodification of LLMs
            </a>, <em>Unpublished</em>, 2024
          </li>
          <li>
            <a href="htts://revelate.co/blog/how-ai-is-revolutionizing-data-collaboration/#:~:text=Think%20of%20AI%20in%20data,AI%20breaks%20down%20those%20barriers." style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              How AI is Revolutionizing Data Collaboration
            </a>, <em>Revelate</em>, 2023
          </li>
          <li>
            <a href="https://revelate.co/blog/data-for-ai-the-fuel-that-supercharges-machine-learning/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Data for AI: The Fuel that Supercharges Machine Learning
            </a>, <em>Revelate</em>, 2023
          </li>

          <li>
            <a href="https://www.linkedin.com/pulse/how-generative-adversarial-networks-work-simulate-facial-potter/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              How Generative Adversarial Networks Work to Simulate Facial Aging
            </a>, <em>Self-Published</em>, 2022
          </li>
        </ul>
        {/* Business Operations Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Business Operations</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.gocanvas.com/blog/mastering-inspection-dispatch-scheduling-technology" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Mastering Inspection Dispatch and Scheduling With Technology
            </a>, <em>GoCanvas</em>, 2023
          </li>
          <li>
            <a href="https://www.gocanvas.com/blog/simplify-inspections-form-templates-data-compliance" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Simplify Inspections: Inspection Reporting Software for Data and Compliance
            </a>, <em>GoCanvas</em>, 2023
          </li>
          <li>
            <a href="https://www.gocanvas.com/blog/work-order-apps-advance-shift-to-digital" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Work Order Apps Advance the Shift to Digital
            </a>, <em>GoCanvas</em>, 2023
          </li>
          <li>
            <a href="https://www.gocanvas.com/blog/construction-management-software-transforms-jobsite-efficiency" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              How Construction Management Software Is Transforming Jobsite Efficiency
            </a>, <em>GoCanvas</em>, 2023
          </li>
          <li>
            <a href="https://www.gocanvas.com/blog/the-evolution-of-work-orders-and-maintenance-management" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              The Evolution of Work Orders and Maintenance Management
            </a>, <em>GoCanvas</em>, 2023
          </li>
        </ul>

        {/* Coding Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Coding</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.coderabbit.ai/blog/maximizing-efficiency-pairing-code-generators-with-ai-code-reviewers" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Maximizing Efficiency: Pairing Code Generators with AI Code Reviewers
            </a>, <em>CodeRabbit</em>, 2024
          </li>
          <li>
            <a href="https://www.coderabbit.ai/blog/optimize-issue-management-with-coderabbit" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Optimize Issue Management with CodeRabbit
            </a>, <em>CodeRabbit</em>, 2024
          </li>
          <li>
            <a href="https://www.coderabbit.ai/blog/top-5-ai-code-generation-tools" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Top 5 AI Code Generation Tools
            </a>, <em>CodeRabbit</em>, 2024
          </li>
          <li>
            <a href="https://www.coderabbit.ai/blog/static-code-analyzers-vs-ai-code-reviewers-which-is-best" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Static Code Analyzers vs AI Code Reviewers: Which is Best?
            </a>, <em>CodeRabbit</em>, 2024
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1Uw0cGjeiALqZ5dYrXxcwiEcwBhgSKC8jMDEH-BN_iz0/edit?usp=sharing" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              How CodeRabbit Learnings Work
            </a>, <em>Unpublished</em>, 2024
          </li>
        </ul>

        {/* Cryptocurrency Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Cryptocurrency</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.benzinga.com/markets/cryptocurrency/21/09/22864242/how-can-value-investors-profit-in-the-crypto-ecosystem" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              How Can Value Investors Profit in the Crypto Ecosystem?
            </a>, <em>Benzinga</em>, 2021
          </li>
          <li>
            <a href="https://www.pressreader.com/uk/crypto-magazine/20230629/282419878686631" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Memechainds Take Meme Coins to the Next Level
            </a>, <em>Crypto Magazine</em>, 2024
          </li>
          <li>
            <a href="https://blog.dogechain.dog/2022/08/04/polygon-edge-providing-blockchain-sovereignty-to-dogechain/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Polygon Edge: Providing Blockchain Sovereignty To Dogechain
            </a>, <em>Dogechain</em>, 2022
          </li>
          <li>
            <a href="https://blog.dogechain.dog/2022/07/12/the-power-of-cross-chain-bridges/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              The Power of Cross-Chain Bridges
            </a>, <em>Dogechain</em>, 2022
          </li>
        </ul>

        {/* Cryptography Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Cryptography</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.insidequantumtechnology.com/news-archive/quantum-computing-the-cause-of-the-next-crypto-crash/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Quantum Computing: The Cause of the Next Crypto Crash
            </a>, <em>Inside Quantum Technology</em>, 2021
          </li>
          <li>
            <a href="https://finance.yahoo.com/news/breaking-bitcoin-ecdsa-vs-xmss-203407645.html" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Breaking Bitcoin: ECDSA vs XMSS
            </a>, <em>Yahoo Finance</em>, 2021
          </li>
          <li>
            <a href="https://finance.yahoo.com/news/bitcoin-btc-safe-grovers-algorithm-151737053.html" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Is Bitcoin (BTC) Safe from Grover's Algorithm?
            </a>, <em>Yahoo Finance</em>, 2021
          </li>
          <li>
            <a href="https://finance.yahoo.com/news/scalpels-qubits-story-worlds-first-131800504.html" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              From Scalpels to Qubits: The Story of the World's First Post-Quantum Blockchain
            </a>, <em>Yahoo Finance</em>, 2021
          </li>
          <li>
            <a href="https://medium.com/quantum-resistance-journal/making-quantum-security-accessible-7ddad6869fab" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Making Quantum Security More Accessible
            </a>, <em>Self-published</em>, 2022
          </li>
          <li>
            <a href="https://medium.com/quantum-resistance-journal/the-moving-target-defense-storage-level-90f2dc09d3ac" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              The Moving Target Defense at Storage Level
            </a>, <em>Self-published</em>, 2022
          </li>
        </ul>

        {/* Data Engineering Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Data Engineering</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.fivetran.com/blog/what-is-the-modern-data-stack" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              What Is The Modern Data Stack?
            </a>, <em>Fivetran</em>, 2024
          </li>
          <li>
            <a href="https://www.datafold.com/blog/simplify-sql-server-database-migration" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              SQL Server Migration Made Easy
            </a>, <em>Datafold</em>, 2024
          </li>
          <li>
            <a href="https://www.datafold.com/blog/optimize-etl-processes-with-dbt" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Optimize ETL Processes with dbt
            </a>, <em>Datafold</em>, 2024
          </li>
          <li>
            <a href="https://www.datafold.com/blog/mongodb-to-bigquery-data-replication" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Replicating MongoDB to BigQuery: A Practical Guide
            </a>, <em>Datafold</em>, 2024
          </li>
          <li>
            <a href="https://revelate.co/blog/how-data-marketplaces-shape-modern-data-products/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              How Data Marketplaces Shape Modern Data Products
            </a>, <em>Revelate</em>, 2023
          </li>
        </ul>

        {/* Kubernetes Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Kubernetes</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.compliancecow.com/compliance/kubernetes-compliance-with-iso-27001-a-strategic-imperative/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Kubernetes Compliance with ISO 27001: A Strategic Imperative
            </a>, <em>ComplianceCow</em>, 2023
          </li>
          <li>
            <a href="https://www.aptible.com/blog/kubernetes-challenges-container-orchestration-and-scaling" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Kubernetes Challenges: Container Orchestration and Scaling
            </a>, <em>Aptible</em>, 2023
          </li>
          <li>
            <a href="https://dev.to/johnpottergr/kubernetes-for-machine-learning-how-to-build-your-first-ml-pipeline-2040" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Kubernetes for Machine Learning: How to Build Your First ML Pipeline
            </a>, <em>Self-Published</em>, 2024
          </li>
        </ul>

        {/* Markdown Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Markdown</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://github.com/EdifyContent" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              See my GitHub work
            </a>, <em>Gruntwork.io</em>, 2025
          </li>
        </ul>

        {/* Marketing Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Marketing</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://postie.com/blog/unlock-success-with-incrementality-testing-techniques/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Mastering Incrementality Across Marketing Channels
            </a>, <em>Postie</em>, 2024
          </li>
          <li>
            <a href="https://postie.com/blog/level-up-your-lookalike-audiences/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Level Up Your Lookalike Audiences
            </a>, <em>Postie</em>, 2024
          </li>
          <li>
            <a href="https://postie.com/blog/exploring-the-growth-of-retail-media-networks/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              The Rise of Retail Media Networks
            </a>, <em>Postie</em>, 2024
          </li>
          <li>
            <a href="https://postie.com/blog/the-power-of-algorithms-in-direct-mail-marketing/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              The Power of Algorithms in Direct Mail Marketing
            </a>, <em>Postie</em>, 2024
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1wLrWHzGcxx6GJzSHAKSPl0jH-edcOQcvlXFRQILzieI/edit?usp=sharing" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              When Direct Mail Meets Deep Learning: A Perfect Match
            </a>, <em>Postie</em>, 2024
          </li>
        </ul>

        {/* Quantum Computing Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Quantum Computing</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.iotworldtoday.com/quantum/nord-quantique-unveils-new-technique-for-scalable-qubit-error-correction" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Nord Quantique Unveils New Technique for Scalable Qubit Error Correction
            </a>, <em>Enter Quantum</em>, 2024
          </li>
          <li>
            <a href="https://www.iotworldtoday.com/quantum/researchers-develop-cameras-to-visualise-quantum-states" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Researchers Develop Cameras to Visualise Quantum States
            </a>, <em>Enter Quantum</em>, 2023
          </li>
          <li>
            <a href="https://www.iotworldtoday.com/quantum/accenture-sandboxaq-collaborate-on-quantum-ai-cybersecurity" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Accenture, SandboxAQ Collaborate on Quantum-AI Cybersecurity
            </a>, <em>Enter Quantum</em>, 2024
          </li>
          <li>
            <a href="https://thequantuminsider.com/2023/05/12/10-enterprises-experimenting-with-quantum-technology-in-2023/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              10 Enterprises Experimenting with Quantum Technology in 2023
            </a>, <em>The Quantum Insider</em>, 2023
          </li>
          <li>
            <a href="https://thequantuminsider.com/2023/05/16/4-countries-that-began-funding-quantum-initiatives-in-2022/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              4 Countries That Began Funding Quantum Initiatives in 2022
            </a>, <em>The Quantum Insider</em>, 2023
          </li>
        </ul>

        {/* Security Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Security</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.compliancecow.com/compliance/security-assurance/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Mastering Security Assurance through Hardening, Testing, and Vulnerability Management
            </a>, <em>ComplianceCow</em>, 2024
          </li>
          <li>
            <a href="https://www.compliancecow.com/compliance/security-audit/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Revolutionizing Security Audits: Streamlining Evidence Collection for Efficiency and Cost-Effectiveness
            </a>, <em>ComplianceCow</em>, 2024
          </li>
          <li>
            <a href="https://www.compliancecow.com/compliance/navigating-cmmc-certification-a-guide-for-dod-contractors" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Navigating CMMC Certification: A Guide for DoD Contractors
            </a>, <em>ComplianceCow</em>, 2024
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1q88yiuHj2-vtJudOGhDxCB6nrgycRTKztyt0An301zU/edit?usp=sharing" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Zero Trust Security: The New Standard for Robust Cyber Protection
            </a>, <em>Unpublished</em>, 2024
          </li>
          <li>
            <a href="https://www.compliancecow.com/compliance/vulnerability-cve-epss/" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Mastering Vulnerability Management: A Guide to CVE and EPSS
            </a>, <em>ComplianceCow</em>, 2024
          </li>
        </ul>

        {/* Stock Analysis Section */}
        <h3 style={{ color: '#4A2C2A', marginTop: '20px' }}>Stock Analysis</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.tipranks.com/news/can-digitalocean-nasdaqdocn-keep-up-its-high-growth" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Can Digital Ocean Keep Up Its Strong Growth
            </a>, <em>TipRanks</em>, 2024
          </li>
          <li>
            <a href="https://www.tipranks.com/news/powered-by-ai-uipath-nysepath-is-becoming-stronger" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Powered by AI, UiPath Is Gaining Strength
            </a>, <em>TipRanks</em>, 2024
          </li>
          <li>
            <a href="https://www.tipranks.com/news/snowflake-stock-nasdaqsnow-now-attractive-after-tumbling" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Snowflake Stock Now Attractive After 30% Tumble
            </a>, <em>TipRanks</em>, 2024
          </li>
          <li>
            <a href="https://www.tipranks.com/news/article/arista-networks-nyseanet-betting-on-innovation-to-outpace-rival" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Arista Networks Betting On Innovation to Outpace Rivals
            </a>, <em>TipRanks</em>, 2024
          </li>
          <li>
            <a href="https://www.tipranks.com/news/crowdstrike-stock-nasdaqcrwd-skyrocketing-arr-strategic-alliances-fuel-growth" style={{ color: '#2E7D32', textDecoration: 'underline' }}>
              Crowdstrike Stock Skyrocketing ARR, Strategic Alliances Fuel Growth
            </a>, <em>TipRanks</em>, 2024
          </li>
        </ul>
      </div>
    </Layout>
  );
}

