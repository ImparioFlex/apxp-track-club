export interface NewsItem {
  id: string;
  headline: string;
  blurb: string;
  date: string;
  tag: string;
  sourceUrl: string;
  sourceName: string;
  image: string;
  featured?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: 'dillon-988',
    headline: 'Dillon Mitchell Runs Wind-Aided 9.88 at 16 Years Old',
    blurb: 'The C.E. King sophomore clocked 9.88 (+5.8) at the Texas A&M Bluebonnet Invitational — the third fastest wind-aided time in US high school history. He also ran a legal 10.19 meet record in the finals.',
    date: 'March 6, 2026',
    tag: 'VIRAL',
    sourceUrl: 'https://www.essentiallysports.com/olympics-news-track-and-field-news-next-usain-bolt-texas-native-shocks-track-and-field-world-over-impossible-run/',
    sourceName: 'EssentiallySports',
    image: 'https://image-cdn.essentiallysports.com/wp-content/uploads/Dillon-Mitchell-1.jpg',
    featured: true,
  },
  {
    id: 'maxwell-twins-nike',
    headline: 'Maxwell Twins Go 1-2 in 200m at Nike Indoor Nationals',
    blurb: "Mariah Maxwell won with a 22.84 (US #4 All-Time HS, US 2026 leader) while twin sister Mia placed 2nd with 23.04. Mia also won the triple jump with a clutch 5th-attempt leap of 43' 0.25\".",
    date: 'March 14, 2026',
    tag: 'NATIONALS',
    sourceUrl: 'https://tx.milesplit.com/teams/69060-apxp-speed-development',
    sourceName: 'MileSplit',
    image: 'https://trackandfieldnews.com/wp-content/uploads/2026/03/mariah-mia-maxwell-04-26.jpg',
  },
  {
    id: 'mia-gatorade',
    headline: 'Mia Maxwell Named Gatorade Texas Girls Track & Field Player of the Year',
    blurb: 'The Atascocita senior earned the state\'s top individual honor after a season that included the Texas 6A 100m state record (11.04), Nike Outdoor Nationals 100m title, and USATF U-20 200m championship.',
    date: 'February 2026',
    tag: 'AWARD',
    sourceUrl: '#',
    sourceName: 'Gatorade',
    image: 'https://images.unsplash.com/photo-1766970096331-78c8af007a3b?w=800&h=500&fit=crop',
  },
  {
    id: 'dillon-world-record',
    headline: 'Dillon Mitchell Sets World U18 60m Record: 6.59',
    blurb: 'At the 2026 USATF Indoor Championships, the 16-year-old shattered the previous World U18 record by 0.05 seconds. Newsweek, SI, and ESPN covered the historic run.',
    date: 'March 1, 2026',
    tag: 'WORLD RECORD',
    sourceUrl: 'https://www.newsweek.com/sports/16-year-old-american-dillon-mitchell-breaks-world-record-in-60m-race-11637922',
    sourceName: 'Newsweek',
    image: 'https://cdn.abcotvs.com/dip/images/18625778_AOTW-JGL-dillon-mitchell.jpg?w=1600',
  },
  {
    id: 'mariah-300m-record',
    headline: 'Mariah Maxwell Sets American HS Indoor 300m Record in First-Ever Attempt',
    blurb: 'Running the 300m for the first time in her life — one hour after competing in the 60m — Mariah clocked 36.24 at the VA Showcase, shattering the American high school record.',
    date: 'January 17, 2026',
    tag: 'NATIONAL RECORD',
    sourceUrl: '#',
    sourceName: 'FloTrack',
    image: 'https://images.unsplash.com/photo-1667351391926-51a9460aeec9?w=800&h=500&fit=crop',
  },
  {
    id: 'usatf-indoors-sweep',
    headline: 'APXP Athletes Dominate USATF Indoor Championships',
    blurb: 'Dillon Mitchell (6.59 WR), Mia Maxwell (7.13, tied US HS record), and Mariah Maxwell (7.14, US #3 All-Time) all medaled in the 60m at the national championship meet.',
    date: 'March 1, 2026',
    tag: 'RESULTS',
    sourceUrl: '#',
    sourceName: 'USATF',
    image: 'https://images.unsplash.com/photo-1584868215080-18ca6d2e47de?w=800&h=500&fit=crop',
  },
  {
    id: 'sam-nike-indoors',
    headline: 'Chinweoke Onwuchekwa Takes 3rd at Nike Indoor Nationals 60m',
    blurb: 'The Cypress Springs sophomore ran 6.68 to finish 3rd in the 60m, proving APXP\'s sprint depth extends beyond their headliners.',
    date: 'March 13, 2026',
    tag: 'NATIONALS',
    sourceUrl: '#',
    sourceName: 'MileSplit',
    image: 'https://images.unsplash.com/photo-1700914297819-5f36da8c83d7?w=800&h=500&fit=crop',
  },
];

export const tickerItems = [
  { athlete: 'Dillon Mitchell', result: '60m World U18 Record — 6.59' },
  { athlete: 'Mia Maxwell', result: 'US HS 60m Record (Tied) — 7.13' },
  { athlete: 'Mariah Maxwell', result: '200m Nike Indoor Nationals Champion — 22.84' },
  { athlete: 'Mariah Maxwell', result: '300m American HS Record — 36.24' },
  { athlete: 'Dillon Mitchell', result: '100m 9.88w — 3rd Fastest HS Ever' },
  { athlete: 'Mia Maxwell', result: 'Gatorade TX Player of the Year' },
  { athlete: 'Dillon Mitchell', result: 'Nike Indoor Nationals 60m Champion — 6.67' },
  { athlete: 'Mia Maxwell', result: "Triple Jump Nike Indoor Champion — 43' 0.25\"" },
  { athlete: 'Chinweoke Onwuchekwa', result: 'Nike Indoor Nationals 60m — 6.68 (3rd)' },
];
