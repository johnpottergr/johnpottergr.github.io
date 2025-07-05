import React from 'react';
import Layout from '@theme/Layout';

export default function Workflow() {
  return (
    <Layout title="Workflow">
      <div style={{ padding: '20px', maxWidth: '830px', margin: '0 auto', color: '#222' }}>
        <h1 style={{
             fontWeight: 600,
             fontSize: '2rem',
             borderBottom: '2px solid #5ED1A5',
             paddingBottom: '16px',
             marginBottom: '1.5rem',
             color: '#1A202C',
             textAlign: 'center',
        }}>My Marketing Background</h1>

       {/* Workflow Section */}
       <div style={{ position: 'relative', paddingTop: '10px' }}>

{/* Heading with underline */}

<div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginBottom: '1rem',
}}>
  <h2 style={{
    color: '#222',
    fontWeight: 400,
    margin: 0,
  }}>
  At Signals Stack
</h2>
 <img
    src="/img/signals.png"
    alt="Signals Logo"
    style={{
      height: '60px',
      marginTop: '10px',
      marginLeft: '40px', 
      flex: '0 0 auto',
    }}
  />
  </div>
        <p>
       My new venture is at <a href="https://llmvisibility.co">Signals</a>.
        While I still write technical content, my new focus is developing content strategies
        that highlight brands in AI conversations and prompts. My offerings primarily center around:
        </p>
        <ul style={{ maxWidth: '680px', paddingLeft: '20px' }}>
          <li>
            <strong>Content intelligence:</strong> Transforming content strategy by analyzing content embeddings
          </li>
          <li>
            <strong>Automated authority:</strong> Automating engagement across platforms to build credibility
          </li>
          <li>
          <strong>Performance insights:</strong> Automating measurement of social signals and user behavior
          </li>
        </ul>
<p>Additional, I employ AI to review historical site data to improve website conversion rate optimization.
  Internally, I can suggest n8n-powered brand workflows across channels to streamline operations and keep your brand consistent.
        </p>

<div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginBottom: '1rem',
}}>
  <h2 style={{
    color: '#222',
    fontWeight: 400,
    margin: 0,
  }}>
  At Edify Content
</h2>
 <img
    src="/img/edify.png"
    alt="Edify Logo"
    style={{
      height: '70px',
      marginTop: '10px',
      marginLeft: '40px',
      flex: '0 0 auto',
    }}
  />
  </div>
        <p>
        At <a href="https://edifycontent.com">Edify Content</a>,
        I produced around 15 long-form technical articles per month,
        typically targeting B2B, software, and data engineering audiences.
        Content followed SEO best practices such as internal linking, optimized headers,
        keyword grouping, meta descriptions to drive organic visibility.
</p>
<p>When clients didn’t have SEO direction, I employed SEMrush and related SEO tools to
identify low-competition, high-relevance keywords. This keyword strategy
helped deliver content that matched what users were searching for.
        </p>


<div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginBottom: '1rem',
}}>
  <h2 style={{
    color: '#222',
    fontWeight: 400,
    margin: 0,
  }}>
          At Corporate Conversions
        </h2>
  <img
    src="/img/corpconv.png"
    alt="Corporate Conversions Logo"
    style={{
      height: '60px',
      marginTop: '10px',
      flex: '0 0 auto',
    }}
  />
  </div>
<p>
As a startup, <a href="https://corpconversions.com">Corporate Conversions</a> required only a few
highly-skilled contractors to help it get off the ground. At the founder's request, I created
Competitive Prospects LLC to participate in this process. My role gave me
extensive hands-on experience with analytics-driven SEO reporting.</p>
        <p>Using Google Analytics, I created reports tying keyword performance to revenue over time. These reports
        uncovered trends in organic vs. paid traffic, tracked backlink quality, and compared SERP
        visibility across competitors—insights that helped clients adjust their content strategies and budget allocations.
        </p>
        </div>


        <p style={{
  background: '#ececec',
  padding: '1rem',
  borderLeft: '0px solid #5ED1A5',
  margin: '1.5rem 0',
  borderRadius: '6px',
}}>
 🔍 <a href="https://johnpottergr.github.io/analyticsexample.pdf">Sample Report</a> (PDF): Breakdown of
 multi-channel traffic and keyword revenue impact across
 time windows.
</p>
        <p>
        Offering to build a WordPress site for the company’s founder opened the door to broader web management responsibilities. Along the way, I became comfortable with assessing plugins, customizing themes, and improving site performance with tools like Cloudflare and WP Super Cache. I also used the Yoast plugin to run technical SEO audits and identify on-page improvements.</p>
        <p>
        That experience proved valuable when I was later asked to maintain product descriptions for a local industrial equipment company. Working hands-on gave me the confidence to troubleshoot most issues independently without relying on developers, which is a skill I still draw on today.
        </p>


        <h2 style={{ color: '#222', fontWeight: 400,  paddingTop: '10px',  marginBottom: '10px' }}>
          Freelance & Self-Directed Work
        </h2>
        <p>
        As Executive Director of GRAPE, a business-related nonprofit, I produced email marketing campaigns for lunch-and-learn events and other initiatives, managing a 10,000-member subscriber list. This involved segmenting audiences and running A/B tests to improve engagement and drive attendance. I also produced daily, targeted content optimized around the keyword phrase “business networking,” which helped the nonprofit’s website steadily climb in local search rankings.
        </p>
        <p>
        Separately, I supported a friend's small business by managing outreach through HubSpot, eventually earning a certification in outbound marketing. That experience deepened my understanding of CRM-driven campaign flows and sales enablement via automation. I also became familiar with Shopify’s CMS while running an anime-themed product business, primarily handling email communication and managing storefront content.
</p>

         <h2 style={{ color: '#222', fontWeight: 400,  paddingTop: '10px',  marginBottom: '10px' }}>
          Preparing for the AI-Driven Future of SEO
        </h2>
        <p>
        I’m especially interested in how AI agents and large language models are
        reshaping how people find information. SEO is evolving into
        Answer Engine Optimization (AEO)—structuring and tagging content for retrieval
        by AI systems, whether in Slack-based support agents or LLMs parsing structured web content.
        </p>
        <p>
        Lately, I’ve been exploring how content platforms like Mintlify MCP can make content more dynamic, reusable, and machine-readable.
        I'm also experimenting with adapting traditional SEO tactics like schema markup, topic clusters, and structured FAQs so they serve
        both organic search and AI-driven interfaces.
        </p>
      </div>
    </Layout>
  );
}
