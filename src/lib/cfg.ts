type TCfg = {
    BASE_URL: string;
    RESUME_FILE: string;
    SITEMAP_FILE: string;
    SITEMAP_PATH: string;
    LINKEDIN_URL: string;
    GITHUB_URL: string;
    WEBSITE_URL: string;
    TWITTER_URL: string;
    TWITTER_HANDLE: string;
    EMAIL_ADDRESS: string;
}

export const cfg: TCfg = {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://remcos.cv',
    WEBSITE_URL: 'https://remcostoeten.nl',
    RESUME_FILE: 'resume-remco-stoeten.pdf',
    SITEMAP_FILE: 'sitemap.xml',
    SITEMAP_PATH: 'https://remcos.cv/{SITEMAP_FILE}',
    LINKEDIN_URL: 'https://linkedin.com/in/remco-stoeten',
    GITHUB_URL: 'https://github.com/remcostoeten',
    TWITTER_URL: 'https://twitter.com/yowremco',
    TWITTER_HANDLE: '@remcostoeten',
    EMAIL_ADDRESS: 'stoetenremco.rs@gmail.com'
} as const;


