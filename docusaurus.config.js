  // @ts-check
  // `@type` JSDoc annotations allow editor autocompletion and type checking
  // (when paired with `@ts-check`).
  // There are various equivalent ways to declare your Docusaurus config.
  // See: https://docusaurus.io/docs/api/docusaurus-config

  import { themes as prismThemes } from 'prism-react-renderer';

  // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Technical Content Writer', // Updated title
    tagline: 'Technical Writing for Fintech, Blockchain, and More', // Updated tagline
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://johnpottergr.com', // Update this to your actual domain
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'johnpottergr', // Updated to your GitHub username
    projectName: 'johnpottergr', // Updated to your repo name
    trailingSlash: false, // Recommended for GitHub Pages

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: './sidebars.js',
            // Update this to your repo
            editUrl: 'https://github.com/johnpottergr',
          },
          blog: {
            showReadingTime: true,
            routeBasePath: 'blog', // this makes your blog accessible at /blog
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            // Update this to your repo
            editUrl: 'https://github.com/johnpottergr.github.io',
            // Useful options to enforce blogging best practices
            onInlineTags: 'warn',
            onInlineAuthors: 'warn',
            onUntruncatedBlogPosts: 'warn',
          },
          theme: {
            customCss: './src/css/custom.css',
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false, // Enable the toggle
          respectPrefersColorScheme: true, // Optional: sync with user's system theme
        },
        // Replace with your project's social card
        // Remove logo entirely:
        // logo: {
        //   alt: 'John Potter Logo',
        // }

        navbar: {

          items: [
            { to: '/', label: 'Welcome', position: 'left' }, // Moved to first position
            { to: '/portfolio', label: 'Portfolio', position: 'left' }, // Moved to second position
            { href: '/resume3.pdf', label: 'Resume', position: 'left', external: true },            { to: '/blog', label: 'Blog', position: 'left' },
            { href: 'https://github.com/johnpottergr', label: 'GitHub', position: 'left' },
          ],
        },

        footer: {
          style: 'dark',
          links: [
            {
              title: 'Pages',
              items: [
                {
                  label: 'Welcome',
                  to: '/',
                },
                {
                  label: 'Resume',
                  href: '/resume3.pdf',
                },
                {
                  label: 'Portfolio',
                  to: '/portfolio',
                },
                {
                  label: 'Blog',
                  to: '/blog',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {

                  label: 'X',
                  href: 'https://x.com/johnpottergr', // Update this to your X handle
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/johnpottergr', // Update this to your GitHub URL
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} John Potter. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
  };

  export default config;
