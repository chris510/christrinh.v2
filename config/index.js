module.exports = {
  siteTitle: 'Chris Trinh | Software Engineer',
  siteDescription:
    'Christopher Trinh is a software engineer based in San Francisco, CA who specializes in full stack web development',
  siteKeywords:
    'Christopher Trinh, Chris, Christopher, Trinh, chris510, software engineer, front-end engineer, web developer, javascript, san francisco, React ',
  siteUrl: 'https://github.com/chris510',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Christopher Trinh',
  location: 'California, Ca',
  email: 'christrinh5@gmail.com',
  github: 'https://github.com/chris510',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/chris510',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/trinh-christopher/',
    },
    {
      name: 'Mail',
      url: 'mailto:christrinh5@gmail.com',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'History',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};