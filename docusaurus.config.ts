import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FarmGPU',
  tagline: 'Your Gateway to AI Infrastructure',
  favicon: 'img/fgpu_green.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FarmGPU', // Update this with your GitHub org/user name
  projectName: 'farmgpu-docs', // Updated project name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ai-datacenter',
        path: 'ai-datacenter',
        routeBasePath: 'ai-datacenter',
        sidebarPath: require.resolve('./sidebars-ai-datacenter.ts'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FarmGPU',
      logo: {
        alt: 'FarmGPU Logo',
        src: 'img/fgpu_green.svg',
        srcDark: 'img/fgpu_white.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Executive_Summary',
          docsPluginId: 'default',
          position: 'left',
          label: 'Company Docs',
        },
        {
          type: 'doc',
          docId: 'overview',
          docsPluginId: 'ai-datacenter',
          position: 'left',
          label: 'AI Datacenters',
        },
        {
          href: 'https://github.com/your-org/ai-datacenter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/farmgpu',
            },
            {
              label: 'X',
              href: 'https://x.com/LebanonJon',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jmhands/ai-datacenter',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FarmGPU, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
      options: {
        maxTextSize: 1000,
      },
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
