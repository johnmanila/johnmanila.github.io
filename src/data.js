export const profile = {
  name: 'John Paul Caisido Manila',
  firstLine: 'John Paul',
  secondLine: 'Caisido Manila',
  role: 'Software Developer / Software Engineer / Game Developer',
  location: 'Pagbilao, Quezon, Philippines',
  locationShort: 'Pagbilao, Quezon',
  phone: '0930 579 1808',
  phoneHref: 'tel:+639305791808',
  email: 'jpcm.92n10@outlook.com',
  linkedin: 'https://www.linkedin.com/in/johnmanila/',
  github: 'https://github.com/JohnPaulManila',
  handle: 'JohnPaulManila',
  resume: `${import.meta.env.BASE_URL}Resume.pdf`,
  portrait: `${import.meta.env.BASE_URL}portrait.png`,
  resumeName: 'Resume.pdf',
  summary:
    'Software Developer with 8+ years of experience in game development, application maintenance, API integration, and web development. Experienced with JavaScript, TypeScript, Python, Lua, and Erlang, with additional exposure to C# and ASP.NET Core MVC through third-party API integration and Swagger/OpenAPI documentation. Experienced in developing game features, troubleshooting issues, supporting application releases, and building automation tools.',
}

export const nav = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const ticker = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Lua',
  'Erlang',
  'React.js',
  'Node.js',
  'Cocos Creator',
  'Roblox Studio',
  'REST APIs',
  'ASP.NET Core',
  'MongoDB',
]

export const focus = [
  {
    index: '01',
    title: 'Game development',
    text: 'Mobile game features, maintenance, and version migration in Cocos Creator and Cocos2d-x, plus Roblox Studio gameplay written in Lua.',
  },
  {
    index: '02',
    title: 'API integration',
    text: 'REST and third-party APIs, including C# / ASP.NET Core MVC endpoints documented with Swagger/OpenAPI and validated in Postman.',
  },
  {
    index: '03',
    title: 'Web development',
    text: 'Front-end support with React.js, Node.js, JavaScript, HTML5, CSS, and ES6.',
  },
  {
    index: '04',
    title: 'Automation',
    text: 'Python scripts for APK release workflows, and a Discord bot with automated commands plus an OpenAI conversational feature.',
  },
]

export const experience = [
  {
    company: 'Live700 Software Inc.',
    role: 'Software Developer / Software Engineer / Game Developer',
    dates: 'December 2024 — 2026',
    points: [
      'Maintained and updated mobile game projects using JavaScript and Cocos Creator 2.4.12.',
      'Migrated game projects from Cocos Creator 2.4.12 to Cocos Creator 3.8.7 using TypeScript.',
      'Used Python scripts to support APK release workflows and configured Android Studio environment variables.',
      'Supported front-end web development with React.js, Node.js, JavaScript, HTML5, CSS, and ES6.',
      'Integrated third-party APIs with application APIs using C# and ASP.NET Core MVC, and exposed endpoints through Swagger/OpenAPI for documentation, testing, and response validation.',
      'Used GitLab, SourceTree, and TortoiseSVN for source control and project collaboration.',
    ],
  },
  {
    company: 'Infinite Evolution Technology Incorporation',
    role: 'Software Developer (Front-End and Back-End) / System Developer',
    dates: 'April 2022 — August 2023',
    points: [
      'Developed front-end features for mobile games using Lua and Cocos2d-x / Cocos Studio.',
      'Developed server-side game APIs and application logic so other developers received accurate responses and data.',
      'Integrated third-party games through APIs and supported API testing with Postman.',
      'Worked with Erlang, MongoDB, Redis Desktop Manager, Navicat Premium, and PowerShell.',
      'Used GitLab and SourceTree to manage source code and version control.',
    ],
  },
  {
    company: 'Red Manta (Roblox)',
    role: 'Game Developer (Front-End) and Discord Bot Developer',
    dates: '2016 — 2020',
    points: [
      'Developed game functionality and scripts in Roblox Studio using Lua.',
      'Integrated Discord Webhooks with Roblox functionality.',
      'Developed Discord bot functionality in Python, including automated commands and event-driven features.',
      'Integrated a ChatGPT-style conversational feature into the Discord bot using the OpenAI API.',
      'Used GitHub for repository management and Hostinger VPS for hosting.',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Programming languages',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Lua',
      'Erlang',
      'Java',
      'C# (API integration)',
      'Visual Basic .NET',
    ],
  },
  {
    label: 'Web',
    items: ['React.js', 'Node.js', 'HTML5', 'CSS', 'ES6', 'Bootstrap'],
  },
  {
    label: 'Game development',
    items: ['Cocos Creator 2.4.12', 'Cocos Creator 3.8.7', 'Cocos2d-x', 'Roblox Studio'],
  },
  {
    label: 'APIs and backend',
    items: [
      'REST API integration',
      'Third-party API integration',
      'C# / ASP.NET Core MVC',
      'Swagger / OpenAPI',
      'Endpoint testing',
      'Postman',
      'Discord Webhooks',
      'OpenAI API',
    ],
  },
  {
    label: 'AI and automation',
    items: [
      'Cursor AI-assisted development',
      'Python automation',
      'Discord bot with OpenAI',
    ],
  },
  {
    label: 'Databases and tools',
    items: [
      'MongoDB',
      'MySQL',
      'SQL Server Management tools',
      'Navicat Premium',
      'Redis Desktop Manager',
    ],
  },
  {
    label: 'Version control and dev tools',
    items: [
      'GitLab',
      'GitHub',
      'SourceTree',
      'TortoiseSVN',
      'Android Studio',
      'PowerShell',
      'SecureCRT',
      'PhpStorm',
    ],
  },
]

export const education = [
  {
    credential: 'Bachelor of Science in Information Technology, Major in Digital Arts',
    school: 'S.T.I. Academic Center Lucena, Lucena City',
  },
  {
    credential: 'Consumer Electronics Services NC II',
    school: 'Quezon National Agriculture School, Malicboy, Pagbilao, Quezon',
  },
]

export const additionalSkills = [
  'Android Studio',
  'Eclipse',
  'Photo and video editing',
  'Adobe Illustrator',
  'Adobe Premiere',
  'Adobe Photoshop',
  '2D and 3D animation',
]
