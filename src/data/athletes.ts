export interface Athlete {
  id: string;
  name: string;
  school: string;
  classYear: number;
  events: string[];
  keyStats: { label: string; value: string; note?: string }[];
  prs: { event: string; mark: string; note?: string }[];
  bio: string;
  quote?: string;
  collegeCommitment?: string;
  awards?: string[];
  mediaLinks?: { title: string; url: string }[];
  photo: string;
  featured: boolean;
  alumni: boolean;
  collegeDestination?: string;
}

export const athletes: Athlete[] = [
  {
    id: 'dillon-mitchell',
    name: 'Dillon Mitchell',
    school: 'C.E. King High School',
    classYear: 2028,
    events: ['60m', '100m', '200m'],
    keyStats: [
      { label: '60m', value: '6.59', note: 'World U18 Record' },
      { label: '100m', value: '9.88w', note: '3rd Fastest HS Ever' },
      { label: 'Football', value: '4-Star', note: '35+ D1 Offers' },
    ],
    prs: [
      { event: '60m', mark: '6.59', note: 'World U18 Record — USATF Indoors 2026' },
      { event: '100m', mark: '10.19', note: 'Legal PR — Bluebonnet Invitational' },
      { event: '100m', mark: '9.88', note: 'Wind-aided (+5.8) — 3rd fastest HS ever' },
      { event: '200m', mark: '20.87', note: 'Wind-assisted' },
    ],
    bio: "At just 16 years old, Dillon Mitchell is rewriting the record books. The C.E. King sophomore holds the World U18 60m record (6.59) and ran a wind-aided 9.88 in the 100m — the third fastest time in US high school history. A dual-sport star, he's also a 4-star football recruit with 35+ Division I offers including Texas A&M, Alabama, Georgia, and LSU. His goal: the 2028 Olympics in Los Angeles.",
    quote: "I've really just been living life. I don't let anything get to my head, it's just track.",
    awards: [
      'World U18 60m Record Holder (6.59)',
      'Nike Indoor Nationals 60m Champion',
      'ABC13 Athlete of the Week',
      '4-Star Football Recruit — 35+ D1 Offers',
    ],
    mediaLinks: [
      { title: 'Newsweek: 16-Year-Old Breaks World Record', url: 'https://www.newsweek.com/sports/16-year-old-american-dillon-mitchell-breaks-world-record-in-60m-race-11637922' },
      { title: 'EssentiallySports: Next Usain Bolt', url: 'https://www.essentiallysports.com/olympics-news-track-and-field-news-next-usain-bolt-texas-native-shocks-track-and-field-world-over-impossible-run/' },
      { title: 'VYPE: Fastest Kid in America', url: 'https://www.vype.com/Texas/Houston/the-fastest-kid-in-america-ce-king-s-dillon-mitchell-dual-sport-star-making-national-headlines' },
    ],
    photo: 'https://s3media.247sports.com/Uploads/Assets/117/347/13347117.png',
    featured: true,
    alumni: false,
  },
  {
    id: 'mia-maxwell',
    name: 'Mia Maxwell',
    school: 'Atascocita High School',
    classYear: 2026,
    events: ['60m', '100m', '200m', 'Triple Jump'],
    keyStats: [
      { label: '60m', value: '7.13', note: 'US HS Record (Tied)' },
      { label: '100m', value: '11.04', note: 'TX 6A State Record' },
      { label: 'Committed', value: 'TEXAS', note: 'University of Texas' },
    ],
    prs: [
      { event: '60m', mark: '7.13', note: 'Tied US HS National Record — USATF Indoors' },
      { event: '100m', mark: '11.04', note: 'Texas 6A State Record — UIL State' },
      { event: '200m', mark: '22.89', note: 'Texas Indoor Record' },
      { event: 'Triple Jump', mark: "43' 0.25\"", note: 'Nike Indoor Nationals Champion' },
    ],
    bio: "Mia Maxwell is the 2024-2025 Gatorade Texas Girls Track & Field Player of the Year. The Atascocita senior tied the US high school 60m national record (7.13) at the USATF Indoor Championships, holds the Texas 6A state record in the 100m (11.04), and won the triple jump at Nike Indoor Nationals with a clutch 5th-attempt leap. Committed to the University of Texas.",
    quote: "The work speaks for itself. Every day we're out here pushing each other.",
    collegeCommitment: 'University of Texas',
    awards: [
      'Gatorade Texas Girls Track & Field POY (2024-25)',
      'US HS 60m Record (Tied) — 7.13',
      'Nike Outdoor Nationals 100m Champion',
      'USATF U-20 200m National Champion',
      'UIL 6A State Champion (100m, Triple Jump)',
      'Nike Indoor Nationals Triple Jump Champion',
    ],
    mediaLinks: [
      { title: 'Gatorade TX Player of the Year', url: 'https://www.gatorade.com/athleteoftheyear' },
      { title: 'Track & Field News: Nike Indoor Nationals', url: 'https://trackandfieldnews.com' },
      { title: 'MileSplit TX: Atascocita Sprinters', url: 'https://tx.milesplit.com/teams/69060-apxp-speed-development' },
    ],
    photo: 'https://trackandfieldnews.com/wp-content/uploads/2026/03/mariah-mia-maxwell-04-26-feat.jpg',
    featured: true,
    alumni: false,
  },
  {
    id: 'mariah-maxwell',
    name: 'Mariah Maxwell',
    school: 'Atascocita High School',
    classYear: 2026,
    events: ['60m', '100m', '200m', '300m'],
    keyStats: [
      { label: '200m', value: '22.84', note: 'US #4 All-Time HS' },
      { label: '300m', value: '36.24', note: 'American HS Record' },
      { label: 'Committed', value: 'TEXAS', note: 'University of Texas' },
    ],
    prs: [
      { event: '60m', mark: '7.14', note: 'US #3 All-Time HS — USATF Indoors' },
      { event: '200m', mark: '22.84', note: 'US #4 All-Time HS — Nike Indoor Nationals Champion' },
      { event: '300m', mark: '36.24', note: 'American HS National Record — VA Showcase' },
      { event: '100m', mark: '11.52', note: 'New Balance Nationals Outdoor' },
    ],
    bio: "Mariah Maxwell set the American high school indoor 300m record (36.24) in her first-ever attempt at the distance — one hour after competing in the 60m at the VA Showcase. The Atascocita senior won the 200m at Nike Indoor Nationals (22.84, US #4 All-Time) and ran 7.14 in the 60m at USATF Indoors (US #3 All-Time). Committed to the University of Texas alongside twin sister Mia.",
    quote: "This was my first time running the 300m, like ever, and I didn't really know.",
    collegeCommitment: 'University of Texas',
    awards: [
      'American HS Indoor 300m Record (36.24)',
      'Nike Indoor Nationals 200m Champion',
      'US #3 All-Time HS 60m (7.14)',
      '2025 UIL 6A State 200m Champion',
    ],
    mediaLinks: [
      { title: 'FloTrack: 300m American HS Record', url: 'https://www.flotrack.org' },
      { title: 'Track & Field News: Nike Indoor Nationals 200m', url: 'https://trackandfieldnews.com' },
      { title: 'VYPE: Golden Girls of Atascocita', url: 'https://www.vype.com/Texas/Houston' },
    ],
    photo: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy82MDIxNDkwMi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTgwNDUzMzY3OX0.vfgwvz34pFqVpChP_Ec8A-InBmmt5ldKY-OVrBQg9_c/img.jpg?width=1200&height=600',
    featured: true,
    alumni: false,
  },
  {
    id: 'chinweoke-onwuchekwa',
    name: 'Chinweoke "Sam" Onwuchekwa',
    school: 'Cypress Springs High School',
    classYear: 2028,
    events: ['60m', '100m'],
    keyStats: [
      { label: '60m', value: '6.68', note: 'US #2 Ranked (Soph)' },
      { label: '100m', value: '10.31', note: 'Bluebonnet Invitational' },
    ],
    prs: [
      { event: '60m', mark: '6.68', note: '3rd at Nike Indoor Nationals' },
      { event: '100m', mark: '10.31', note: '2nd at Bluebonnet Invitational' },
    ],
    bio: "Training partner of Dillon Mitchell at APXP, Sam Onwuchekwa is making his own national mark. The Cypress Springs sophomore placed 3rd at Nike Indoor Nationals in the 60m (6.68) and broke the sophomore 60m record at the Wes Kittley Classic.",
    photo: 'https://images.unsplash.com/photo-1700914297819-5f36da8c83d7?w=600&h=800&fit=crop',
    featured: false,
    alumni: false,
  },
  {
    id: 'kayleigh-bowie',
    name: 'Kayleigh Bowie',
    school: 'TBD',
    classYear: 2025,
    events: ['100m', '200m', '400m'],
    keyStats: [
      { label: '100m', value: '12.19' },
      { label: '400m', value: '55.58' },
    ],
    prs: [
      { event: '100m', mark: '12.19' },
      { event: '200m', mark: '24.80' },
      { event: '400m', mark: '55.58' },
    ],
    bio: "Kayleigh Bowie is a versatile sprinter pursuing a full Division I scholarship. She plans to study Pathology and draws inspiration from Sydney McLaughlin-Levrone and Athing Mu.",
    photo: 'https://images.unsplash.com/photo-1667351391926-51a9460aeec9?w=600&h=800&fit=crop',
    featured: false,
    alumni: false,
  },
  {
    id: 'journie-franklin',
    name: 'Journie Franklin',
    school: 'Alumni',
    classYear: 2024,
    events: ['100m', '200m', '400m'],
    keyStats: [
      { label: '100m', value: '11.78', note: 'Sub-12 at Texas Relays' },
    ],
    prs: [
      { event: '100m', mark: '11.78' },
      { event: '200m', mark: '24.78' },
      { event: '400m', mark: '58.26' },
    ],
    bio: "First girl to run sub-12 at Texas Relays. Junior Olympic Qualifier (9th overall). Longhorn of the Year as a freshman. Career goal: sports medicine.",
    photo: 'https://images.unsplash.com/photo-1762010297288-ca543e4f0909?w=600&h=800&fit=crop',
    featured: false,
    alumni: true,
    collegeDestination: 'D1 Program',
  },
  {
    id: 'kalen-goodman',
    name: 'Kalen Goodman',
    school: 'Alumni',
    classYear: 2024,
    events: ['100mH', '300mH', '400m'],
    keyStats: [
      { label: '300mH', value: '43.77' },
      { label: '400m', value: '57.41' },
    ],
    prs: [
      { event: '100mH', mark: '15.34' },
      { event: '300mH', mark: '43.77' },
      { event: '400m', mark: '57.41' },
    ],
    bio: "2x Junior Olympic Qualifier specializing in 400m hurdles. Also works as a rodeo sideline reporter. Career goal: sports medicine.",
    photo: 'https://images.unsplash.com/photo-1766970096331-78c8af007a3b?w=600&h=800&fit=crop',
    featured: false,
    alumni: true,
    collegeDestination: 'D1 Program',
  },
  {
    id: 'evalyn-abdmoulaie',
    name: 'Evalyn Abdmoulaie',
    school: 'Alumni',
    classYear: 2024,
    events: ['400m'],
    keyStats: [
      { label: '400m', value: '57.53' },
    ],
    prs: [
      { event: '400m', mark: '57.53' },
    ],
    bio: "Now competing for the University of Louisiana at Lafayette Ragin' Cajuns track and field team.",
    photo: 'https://images.unsplash.com/photo-1623125654196-4216bc5de901?w=600&h=800&fit=crop',
    featured: false,
    alumni: true,
    collegeDestination: 'UL Lafayette',
  },
];

export const featuredAthletes = athletes.filter(a => a.featured);
export const currentRoster = athletes.filter(a => !a.alumni);
export const alumniRoster = athletes.filter(a => a.alumni);
