// Site-wide settings: company details, links, navigation and footer content.

export const site = {
  name: '石と鉄 STONE and IRON',
  shortName: '石と鉄',
  brand: 'STONE and IRON',
  strap: 'Café Bar and Inn',
  tagline: '小樽のカフェバー＆一棟貸し石蔵の宿',
  description:
    '一杯のコーヒーから宿泊まで。石と鉄 STONE and IRONは、小樽に約100年前に建てられた石蔵をリノベーションしたカフェバー＆一棟貸しの宿です。',
  logo: '/images/brand/logo.png',
  contact: {
    postcode: '〒047-0031',
    address: '北海道小樽市色内2丁目2-8',
    phone: '0134-61-1214',
    phoneHref: 'tel:0134611214',
  },
  links: {
    booking: 'https://booking.stoneandiron.jp/?tripla_booking_widget_open=search',
    bookingCom: 'http://www.booking.com/Share-bCXQXH',
    instagram: 'https://www.instagram.com/stoneandiron.otaru/',
    instagramHotel: 'https://www.instagram.com/stoneandiron.otaru.hotel/',
    facebook: 'https://www.facebook.com/stoneandiron.otaru/',
    // The English version was not part of this rebuild. Set a URL here to
    // show the "EN" switch in the header again (e.g. '/en/').
    english: null as string | null,
  },
  // Footer legal items (plain text on the original — no pages exist yet).
  legal: ['利用規約・宿泊約款', '特定商取引法に関する表示', '会社概要'],
  copyright: 'Copyright©︎STONE and IRON All Rights Reserved',
};

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Same order as the original menu. Slugs match the original URLs.
export const mainNav: NavItem[] = [
  { label: 'Us', href: '/about-us/' },
  { label: 'Café Bar', href: '/cafe-bar/' },
  { label: 'Stay', href: '/stay/' },
  { label: 'Days', href: '/days/' },
  { label: 'Event', href: '/event/' },
  { label: 'Access', href: '/access/' },
  { label: 'Book Now', href: site.links.booking, external: true },
  { label: 'Contact', href: '/contact/' },
];

// Shared "Access :" block (appears on several pages).
export const access = {
  mapEmbed:
    'https://maps.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E5%B0%8F%E6%A8%BD%E5%B8%82%E8%89%B2%E5%86%85%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%92-8&t=m&z=16&output=embed&iwloc=near',
  intro: '小樽市総合博物館、小樽美術館、小樽三角市場などの人気スポットが近くにあります。',
  routes: ['小樽駅から徒歩8分', '札幌から車で約40分', '新千歳空港から車で約１時間'],
};

// "Recommendation :" slider — owner's recommended spots.
export const recommendedSpots = [
  {
    title: 'The Old Aoyama Villa',
    titleJa: '旧青山別邸',
    image: '/images/spots/aoyama-villa.jpg',
    url: 'http://www.otaru-kihinkan.jp/aoyama_about/',
  },
  {
    title: 'Otaru Tenguyama',
    titleJa: '小樽天狗山',
    image: '/images/spots/tenguyama.jpg',
    url: 'https://tenguyama.ckk.chuo-bus.co.jp',
  },
];

// FAQ popup (floating button on Stay and Café Bar).
export const faq = {
  title: 'WELCOME :',
  subtitle: 'よくある質問',
  items: [
    { question: 'レストランの予約', answer: '予約は電話でのみ受け付けしております。0134-61-1214にお電話ください。' },
    { question: 'アレルギー', answer: '可能な限りで対応しております。必ず事前にご予約頂き詳細連絡ください。' },
    {
      question: '宿予約',
      answer: '<a href="http://www.booking.com/Share-bCXQXH" target="_blank" rel="noopener">こちら</a>からご予約お願いします。',
    },
    {
      question: '駐車場',
      answer: '駐車場をご利用頂けます。但し、数に限りがございます。満車時は恐れ入りますが近隣のコインパーキングをお使いください。',
    },
    {
      question: 'コロナ対策について',
      answer: '換気、消毒清掃、スタッフのマスク着用を徹底しております。アクリルパネルの設置はございません。',
    },
    {
      question: '予約キャンセル',
      answer:
        'レストランの予約キャンセル時は3日前までに必ず電話でご連絡ください。宿の予約キャンセル時は、宿ではなく、ご予約サイトにてキャンセル処理お願いします。尚、キャンセル時は各予約サイトのキャンセルポリシーが適用されます。',
    },
  ],
};
