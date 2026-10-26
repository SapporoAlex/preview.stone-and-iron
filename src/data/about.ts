// About Us page content (src/pages/about-us.astro).

export const aboutUs = [
  '当時、北海道屈指の貿易港として栄えていた小樽。',
  '多くの人々、物が集まり、歴史と風土を創りあげてきました。',
  'そこには倉庫として使われていた石蔵が今でも残っていました。',
  '当店は約100年前に建てられた石蔵をリノベーションし「古き良きものに新しい価値を生み出したい」',
  '「国内外、様々な人たちに小樽らしさを感じつつ、新しい小樽の魅力を発信できるような場所でありたい」と想い込めてオープン致しました。',
  '一杯のコーヒーから宿泊まで… 様々なシーンに当店をご利用下さい。',
];

export interface Feature {
  label: string;
  headline: string;
  text: string[];
  link: { label: string; href: string };
  bandImage: string; // photo band shown above this block
}

export const aboutFeatures: Feature[] = [
  {
    label: 'Café Bar :',
    headline: 'NEW FOOD\nEXPERIENCE WITH\nLOCAL FOOD.',
    text: ['小樽の食材を使ったお料理で、', '新しい食文化の発見を。'],
    link: { label: 'Café Bar', href: '/cafe-bar/' },
    bandImage: '/images/about/band-1.jpg',
  },
  {
    label: 'Hostel :',
    headline: 'STAY IN 100 YEARS\nOLD STONE\nWAREHOUSE.',
    text: ['100年以上の歴史がある', '石蔵に泊まる', '特別な滞在を。'],
    link: { label: 'Stay', href: '/stay/' },
    bandImage: '/images/about/band-2.jpg',
  },
];
