import React from 'react';
import Layout from '@theme/Layout';

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', color: '#222' }}>
        <h1 style={{
             fontWeight: 600,
             fontSize: '2rem',
             borderBottom: '2px solid #5ED1A5',
             paddingBottom: '16px',
             marginBottom: '1.5rem',
             color: '#1A202C',
             textAlign: 'center',
        }}>My Portfolio</h1>

        {/* Featured Articles Section */}
        <p>
          My published articles primarily focus on data engineering, quantum computing, marketing, and cryptocurrency.
          The quality has improved over time, thanks to guidance from Anthony Garone at Edify Content.
          You can browse all my articles <a href="/technical-articles-by-industry.pdf" target="_blank" rel="noopener noreferrer">here</a>, or jump straight to a curated list of data migration guides <a href="/Data%20Migration%20Guides.pdf" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://johnpottergr.com/portfolio#ai--machine-learning" style={{ color: '#008000', fontWeight: '400', textDecoration: 'none' }}>
              AI/Machine Learning
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#blockchain-technology" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Blockchain Technology
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#business-compliance" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Business Compliance
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#business-operations" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Business Operations
            </a>
          </li>

          <li>
            <a href="https://johnpottergr.com/portfolio#cryptography" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Cryptography
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#cybersecurity" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Cybersecurity
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#data-engineering" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Data Engineering
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#it-infrastructure" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              IT Infrastructure
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#kubernetes" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Kubernetes
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#marketing" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Marketing
            </a>
          </li>
          <li>
            <a href="https://johnpottergr.com/portfolio#quantum-computing" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Quantum Computing
            </a>
          </li>

          <li>
            <a href="https://johnpottergr.com/portfolio#stock-analysis" style={{ color: '#008000', fontWeight: '400',  textDecoration: 'none' }}>
              Stock Analysis
            </a>
          </li>
        </ul>

        {/* AI / Machine Learning Section */}
        <h3 id="ai--machine-learning" style={{ color: '#222', marginTop: '40px' }}>AI / Machine Learning</h3>
        <ul style={{ lineHeight: '1.6' }}>
        <li>
            <a href="https://www.coderabbit.ai/blog/maximizing-efficiency-pairing-code-generators-with-ai-code-reviewers" style={{ color: '#008000', textDecoration: 'none' }}>
              Maximizing Efficiency: Pairing Code Generators with AI Code Reviewers
            </a>
          </li>
          <li>
            <a href="https://revelate.co/blog/machine-learning-data-catalogs-enhance-data-discoverability/" style={{ color: '#008000', textDecoration: 'none' }}>
              Machine Learning Data Catalogs Enhance Data Discoverability
            </a>
          </li>
          <li>
            <a href="htts://revelate.co/blog/how-ai-is-revolutionizing-data-collaboration/#:~:text=Think%20of%20AI%20in%20data,AI%20breaks%20down%20those%20barriers." style={{ color: '#008000', textDecoration: 'none' }}>
              How AI is Revolutionizing Data Collaboration
            </a>
          </li>
          <li>
            <a href="https://revelate.co/blog/data-for-ai-the-fuel-that-supercharges-machine-learning/" style={{ color: '#008000', textDecoration: 'none' }}>
              Data for AI: The Fuel that Supercharges Machine Learning
            </a>
          </li>
          <li>
            <a href="https://www.coderabbit.ai/blog/top-5-ai-code-generation-tools" style={{ color: '#008000', textDecoration: 'none' }}>
              Top 5 AI Code Generation Tools
            </a>
          </li>
          <li>
            <a href="https://www.coderabbit.ai/blog/static-code-analyzers-vs-ai-code-reviewers-which-is-best" style={{ color: '#008000', textDecoration: 'none' }}>
              Static Code Analyzers vs AI Code Reviewers: Which is Best?
            </a>
          </li>
        </ul>
        {/* Blockchain Technology Section */}
        <h3 id="blockchain-technology" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px' }}>Blockchain Technology</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://blog.comdex.one/comdex-integrates-cosmwasm-e819b4502deb" style={{ color: '#008000', textDecoration: 'none' }}>
              Comdex integrates CosmWasm
            </a>
          </li>
          <li>
            <a href="https://www.pressreader.com/uk/crypto-magazine/20230629/282419878686631" style={{ color: '#008000', textDecoration: 'none' }}>
              Meme Chains Take Meme Coins to the Next Level
            </a>
          </li>
          <li>
            <a href="https://blog.dogechain.dog/2022/08/04/polygon-edge-providing-blockchain-sovereignty-to-dogechain/" style={{ color: '#008000', textDecoration: 'none' }}>
              Polygon Edge: Providing Blockchain Sovereignty To Dogechain
            </a>
          </li>
          <li>
            <a href="https://blog.dogechain.dog/2022/07/12/the-power-of-cross-chain-bridges/" style={{ color: '#008000', textDecoration: 'none' }}>
              The Power of Cross-Chain Bridges
            </a>
          </li>
          <li>
            <a href="https://www.benzinga.com/markets/cryptocurrency/21/09/22864242/how-can-value-investors-profit-in-the-crypto-ecosystem" style={{ color: '#008000', textDecoration: 'none' }}>
              How Can Value Investors Profit in the Crypto Ecosystem?
            </a>
          </li>
        </ul>

         {/* Business Compliance Section */}
         <h3  id="business-compliance" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px'  }}>Business Compliance</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.compliancecow.com/compliance/sarbanes-oxley-it/" style={{ color: '#008000', textDecoration: 'none' }}>
            Navigating Sarbanes-Oxley: A Guide to IT Compliance Essentials
            </a>
          </li>
          <li>
            <a href="https://www.compliancecow.com/compliance/the-8-rights-of-the-ccpa-what-are-they/" style={{ color: '#008000', textDecoration: 'none' }}>
            The 8 Rights of the CCPA: What are they?
            </a>
          </li>
          <li>
            <a href="https://www.compliancecow.com/compliance/understanding-the-7-core-principles-of-gdpr/" style={{ color: '#008000', textDecoration: 'none' }}>
            Understanding the 7 Core Principles of GDPR
            </a>
          </li>
          <li>
            <a href="https://www.compliancecow.com/compliance/corporate-compliance-test-of-design-vs-test-of-effectiveness-in-internal-controls/" style={{ color: '#008000', textDecoration: 'none' }}>
            Corporate Compliance: Test of Design vs. Test of Effectiveness in Internal Controls
            </a>
          </li>
        </ul>

        {/* Business Operations Section */}
        <h3  id="business-operations" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px'  }}>Business Operations</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.gocanvas.com/blog/mastering-inspection-dispatch-scheduling-technology" style={{ color: '#008000', textDecoration: 'none' }}>
              Mastering Inspection Dispatch and Scheduling With Technology
            </a>
          </li>
          <li>
            <a href="https://www.gocanvas.com/blog/simplify-inspections-form-templates-data-compliance" style={{ color: '#008000', textDecoration: 'none' }}>
              Simplify Inspections: Inspection Reporting Software for Data and Compliance
            </a>
          </li>
          <li>
            <a href="https://www.gocanvas.com/blog/work-order-apps-advance-shift-to-digital" style={{ color: '#008000', textDecoration: 'none' }}>
              Work Order Apps Advance the Shift to Digital
            </a>
          </li>
          <li>
            <a href="https://www.gocanvas.com/blog/construction-management-software-transforms-jobsite-efficiency" style={{ color: '#008000', textDecoration: 'none' }}>
              How Construction Management Software Is Transforming Jobsite Efficiency
            </a>
          </li>
          <li>
            <a href="https://www.gocanvas.com/blog/the-evolution-of-work-orders-and-maintenance-management" style={{ color: '#008000', textDecoration: 'none' }}>
              The Evolution of Work Orders and Maintenance Management
            </a>
          </li>
        </ul>



        {/* Cryptography Section */}
        <h3  id="cryptography" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px' }}>Cryptography</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.insidequantumtechnology.com/news-archive/quantum-computing-the-cause-of-the-next-crypto-crash/" style={{ color: '#008000', textDecoration: 'none' }}>
              Quantum Computing: The Cause of the Next Crypto Crash
            </a>
          </li>
          <li>
            <a href="https://finance.yahoo.com/news/breaking-bitcoin-ecdsa-vs-xmss-203407645.html" style={{ color: '#008000', textDecoration: 'none' }}>
              Breaking Bitcoin: ECDSA vs XMSS
            </a>
          </li>
          <li>
            <a href="https://finance.yahoo.com/news/bitcoin-btc-safe-grovers-algorithm-151737053.html" style={{ color: '#008000', textDecoration: 'none' }}>
              Is Bitcoin (BTC) Safe from Grover's Algorithm?
            </a>
          </li>
          <li>
            <a href="https://finance.yahoo.com/news/scalpels-qubits-story-worlds-first-131800504.html" style={{ color: '#008000', textDecoration: 'none' }}>
              From Scalpels to Qubits: The Story of the World's First Post-Quantum Blockchain
            </a>
          </li>
          <li>
            <a href="https://medium.com/quantum-resistance-journal/making-quantum-security-accessible-7ddad6869fab" style={{ color: '#008000', textDecoration: 'none' }}>
              Making Quantum Security More Accessible
            </a>
          </li>
          <li>
            <a href="https://medium.com/quantum-resistance-journal/the-moving-target-defense-storage-level-90f2dc09d3ac" style={{ color: '#008000', textDecoration: 'none' }}>
              The Moving Target Defense at Storage Level
            </a>
          </li>
        </ul>

        {/* Cybersecurity Section */}
        <h3 id="cybersecurity" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px' }}>Cybersecurity</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.compliancecow.com/compliance/navigating-cmmc-certification-a-guide-for-dod-contractors" style={{ color: '#008000', textDecoration: 'none' }}>
              Navigating CMMC Certification: A Guide for DoD Contractors
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1q88yiuHj2-vtJudOGhDxCB6nrgycRTKztyt0An301zU/edit?usp=sharing" style={{ color: '#008000', textDecoration: 'none' }}>
              Zero Trust Security: The New Standard for Robust Cyber Protection
            </a>
          </li>
          <li>
            <a href="https://www.compliancecow.com/compliance/vulnerability-cve-epss/" style={{ color: '#008000', textDecoration: 'none' }}>
              Mastering Vulnerability Management: A Guide to CVE and EPSS
            </a>
          </li>
          <li>
            <a href="https://www.compliancecow.com/compliance/security-assurance/" style={{ color: '#008000', textDecoration: 'none' }}>
              Mastering Security Assurance through Hardening, Testing, and Vulnerability Management
            </a>
          </li>
          <li>
            <a href="https://www.compliancecow.com/compliance/security-audit/" style={{ color: '#008000', textDecoration: 'none' }}>
              Revolutionizing Security Audits: Streamlining Evidence Collection for Efficiency and Cost-Effectiveness
            </a>
          </li>
        </ul>

        {/* Data Engineering Section */}
        <h3  id="data-engineering" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px' }}>Data Engineering</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.fivetran.com/learn/postgres-to-snowflake" style={{ color: '#008000', textDecoration: 'none' }}>
            Postgres to Snowflake: A Definitive Guide
            </a>
          </li>
          <li>
            <a href="https://www.datafold.com/blog/simplify-sql-server-database-migration" style={{ color: '#008000', textDecoration: 'none' }}>
              SQL Server Migration Made Easy
            </a>
          </li>
          <li>
            <a href="https://www.datafold.com/blog/optimize-etl-processes-with-dbt" style={{ color: '#008000', textDecoration: 'none' }}>
              Optimize ETL Processes with dbt
            </a>
          </li>
          <li>
            <a href="https://www.datafold.com/blog/mongodb-to-bigquery-data-replication" style={{ color: '#008000', textDecoration: 'none' }}>
              Replicating MongoDB to BigQuery: A Practical Guide
            </a>
          </li>
          <li>
            <a href="https://revelate.co/blog/how-data-marketplaces-shape-modern-data-products/" style={{ color: '#008000', textDecoration: 'none' }}>
              How Data Marketplaces Shape Modern Data Products
            </a>
          </li>
        </ul>

 {/* IT Infrastructure Section */}
 <h3 style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px' }}>IT Infrastructure</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://docs.gruntwork.io/" style={{ color: '#008000', textDecoration: 'none' }}>Infrastructure Docs,</a>
            <a href="https://github.com/EdifyContent" style={{ color: '#008000', textDecoration: 'none' }}>
              (see my GitHub work)
            </a>
          </li>
        </ul>

        {/* Kubernetes Section */}
        <h3 id="kubernetes" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px' }}>Kubernetes</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.compliancecow.com/compliance/kubernetes-compliance-with-iso-27001-a-strategic-imperative/" style={{ color: '#008000', textDecoration: 'none' }}>
              Kubernetes Compliance with ISO 27001: A Strategic Imperative
            </a>
          </li>
          <li>
            <a href="https://www.aptible.com/blog/kubernetes-challenges-container-orchestration-and-scaling" style={{ color: '#008000', textDecoration: 'none' }}>
              Kubernetes Challenges: Container Orchestration and Scaling
            </a>
          </li>
          <li>
            <a href="https://dev.to/johnpottergr/kubernetes-on-bare-metal-how-and-why-to-run-kubernetes-without-virtualization-p77" style={{ color: '#008000', textDecoration: 'none' }}>
            Kubernetes on Bare Metal: How and why to Run Kubernetes without Virtualization
             </a>
          </li>
          <li>
            <a href="https://dev.to/johnpottergr/kubernetes-for-machine-learning-how-to-build-your-first-ml-pipeline-2040" style={{ color: '#008000', textDecoration: 'none' }}>
              Kubernetes for Machine Learning: How to Build Your First ML Pipeline
            </a>
          </li>
        </ul>

        {/* Marketing Section */}
        <h3  id="marketing" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px' }}>Marketing</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://postie.com/blog/unlock-success-with-incrementality-testing-techniques/" style={{ color: '#008000', textDecoration: 'none' }}>
              Mastering Incrementality Across Marketing Channels
            </a>
          </li>
          <li>
            <a href="https://postie.com/blog/level-up-your-lookalike-audiences/" style={{ color: '#008000', textDecoration: 'none' }}>
              Level Up Your Lookalike Audiences
            </a>
          </li>
          <li>
            <a href="https://postie.com/blog/why-personalized-direct-mail-boosts-customer-engagement/" style={{ color: '#008000', textDecoration: 'none' }}>
            Why Personalized Direct Mail Boosts Customer Engagement
            </a>
          </li>
          <li>
            <a href="https://postie.com/blog/exploring-the-growth-of-retail-media-networks/" style={{ color: '#008000', textDecoration: 'none' }}>
              The Rise of Retail Media Networks
            </a>
          </li>
          <li>
            <a href="https://postie.com/blog/the-power-of-algorithms-in-direct-mail-marketing/" style={{ color: '#008000', textDecoration: 'none' }}>
              The Power of Algorithms in Direct Mail Marketing
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1wLrWHzGcxx6GJzSHAKSPl0jH-edcOQcvlXFRQILzieI/edit?usp=sharing" style={{ color: '#008000', textDecoration: 'none' }}>
              When Direct Mail Meets Deep Learning: A Perfect Match
            </a>
          </li>
        </ul>

        {/* Quantum Computing Section */}
        <h3 id="quantum-computing" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px'}}>Quantum Computing</h3>
        <ul style={{ lineHeight: '1.6' }}>
        <li>
            <a href="            https://www.iotworldtoday.com/transportation-logistics/nvidia-rolls-royce-classiq-tap-quantum-for-jet-engine-design" style={{ color: '#008000', textDecoration: 'none' }}>
            Nvidia, Rolls-Royce, Classiq Tap Quantum for Jet Engine Design
            </a>
          </li>
          <li>
            <a href="https://www.iotworldtoday.com/quantum/nord-quantique-unveils-new-technique-for-scalable-qubit-error-correction" style={{ color: '#008000', textDecoration: 'none' }}>
              Nord Quantique Unveils New Technique for Scalable Qubit Error Correction
            </a>
          </li>
          <li>
            <a href="https://www.iotworldtoday.com/quantum/researchers-develop-cameras-to-visualise-quantum-states" style={{ color: '#008000', textDecoration: 'none' }}>
              Researchers Develop Cameras to Visualise Quantum States
            </a>
          </li>
          <li>
            <a href="https://www.iotworldtoday.com/quantum/accenture-sandboxaq-collaborate-on-quantum-ai-cybersecurity" style={{ color: '#008000', textDecoration: 'none' }}>
              Accenture, SandboxAQ Collaborate on Quantum-AI Cybersecurity
            </a>
          </li>
          <li>
            <a href="https://thequantuminsider.com/2023/05/12/10-enterprises-experimenting-with-quantum-technology-in-2023/" style={{ color: '#008000', textDecoration: 'none' }}>
              10 Enterprises Experimenting with Quantum Technology in 2023
            </a>
          </li>
          <li>
            <a href="https://thequantuminsider.com/2023/05/16/4-countries-that-began-funding-quantum-initiatives-in-2022/" style={{ color: '#008000', textDecoration: 'none' }}>
              4 Countries That Began Funding Quantum Initiatives in 2022
            </a>
          </li>
        </ul>

        {/* Stock Analysis Section */}
        <h3 id="stock-analysis" style={{ color: '#222', marginTop: '40px', scrollMarginTop: '100px'}}>Stock Analysis</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>
            <a href="https://www.tipranks.com/news/can-digitalocean-nasdaqdocn-keep-up-its-high-growth" style={{ color: '#008000', textDecoration: 'none' }}>
              Can Digital Ocean Keep Up Its Strong Growth
            </a>
          </li>
          <li>
            <a href="https://www.tipranks.com/news/powered-by-ai-uipath-nysepath-is-becoming-stronger" style={{ color: '#008000', textDecoration: 'none' }}>
              Powered by AI, UiPath Is Gaining Strength
            </a>
          </li>
          <li>
            <a href="https://www.tipranks.com/news/snowflake-stock-nasdaqsnow-now-attractive-after-tumbling" style={{ color: '#008000', textDecoration: 'none' }}>
              Snowflake Stock Now Attractive After 30% Tumble
            </a>
          </li>
          <li>
            <a href="https://www.tipranks.com/news/article/arista-networks-nyseanet-betting-on-innovation-to-outpace-rival" style={{ color: '#008000', textDecoration: 'none' }}>
              Arista Networks Betting On Innovation to Outpace Rivals
            </a>
          </li>
          <li>
            <a href="https://www.tipranks.com/news/crowdstrike-stock-nasdaqcrwd-skyrocketing-arr-strategic-alliances-fuel-growth" style={{ color: '#008000', textDecoration: 'none' }}>
              Crowdstrike Stock Skyrocketing ARR, Strategic Alliances Fuel Growth
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

