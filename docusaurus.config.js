module.exports = {
  title: 'Desarrollo Frontend',
  tagline: 'Programa',
  url: 'https://ada.com.ar',
  baseUrl: '/',
  favicon: 'img/ada-favicon.png',
  organizationName: 'AdaIt', // Usually your GitHub org/user name.
  projectName: 'adadocs', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/palenight'),
    },
    navbar: {
      title: 'Ada',
      logo: {
        alt: 'My Site Logo',
        src: 'img/iso_blanco.svg',
      },
      items: [
        { to: 'docs/modulo-1/clase-01', label: 'Clases', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Frontend',
              to: 'https://frontend.adaitw.org/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/school/ada-itw/',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/adaitw',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/adaitw/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ada Itw.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
