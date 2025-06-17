import React from 'react';
import Layout from '@theme/Layout';

export default function CuttingEdge() {
  return (
    <Layout title="Cutting Edge">
      <main
        style={{
          padding: '25px',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Page title */}
        <h1
          style={{
            fontWeight: 600,
            fontSize: '2rem',
            borderBottom: '2px solid #5ED1A5',
            paddingBottom: '16px',
            marginBottom: '1.5rem',
            color: '#1A202C',
            textAlign: 'center',
          }}
        >
          AI-Enhanced Extras
        </h1>

{/* Centered Heading Above Flex Layout */}
<h2 style={{ textAlign: 'center', fontWeight: 400 }}>
  Conversion Optimization for AI Search
</h2>

        {/* FLEX ROW: CRO + IMAGE */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0px',
          }}
        >
          {/* Text Column */}
          <div style={{ flex: '1 1 60%' }}>
            <p style={{ marginBottom: '35px', textAlign: 'left' }}>
            I offer conversion-focused suggestions rooted in search behavior and audience
            psychology. My focus is analyzing how users arrive via AI-generated answers or search
            summaries, I identify friction points and opportunities. I also use               <a href="http://johnpottergr.com/blog/6-6-2025-use-GPT4o-vision-capabilities">AI
            vision models</a> and a custom tool called <a href="https://crosignals.com">CRO Signals</a> to evaluate layout clarity,
            page flow, and behavioral patterns from past high-converting sessions.
            </p>
          </div>

          {/* Image Column */}
          <div style={{ flex: '0 0 200px' }}>
            <img
              src="/img/signals3.png"
              alt="CRO Signals"
              style={{
                width: '100%',
                maxWidth: '200px',
                height: 'auto',
                marginTop: '10px',
                paddingLeft: '10px',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Back to normal layout flow */}
        <h2 style={{ textAlign: 'center', fontWeight: 400 }}>
          Predictive Content Intelligence
        </h2>
        <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          Instead of only looking at what’s already happened, I focus on what’s
          likely next. Using tools like BigQuery, Plausible, and GPT-based models, I
          forecast which content will rank, which users might bounce, and which CTAs
          are likely to perform best. I also experiment with tools like <a href="https://www.canirank.com/">CanIRank</a> to
          layer traditional performance data with machine-learned predictors.
        </p>

        <h2 style={{ textAlign: 'center', fontWeight: 400 }}>
          Semantic Creator Matching
        </h2>
        <p style={{ marginBottom: '35px', textAlign: 'left' }}>
          I help brands find creators who match more than just keywords. Using
          semantic search powered by vector embeddings and GPT tools, I surface
          micro-influencers whose tone, audience intent, and brand resonance
          align deeply with your positioning. It's a smarter way to build
          partnership pipelines—especially for thought leadership, niche
          audiences, or brand authenticity campaigns.
        </p>
      </main>
    </Layout>
  );
}
