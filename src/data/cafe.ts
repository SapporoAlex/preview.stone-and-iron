// Café Bar page content (src/pages/cafe-bar.astro).

export const cafeIntro = {
  headline: 'CASUAL\nCAFE BAR\nWHERE\nEVERYONE\nMEETS.',
  eat: [
    '小樽の100年もの歴史のある石蔵を改装したカフェバーです。',
    '地元の食材を使った朝食に始まり、カフェランチ夜はバルとして。',
    '小樽の食材を使ったお料理で新しい食文化の発見をしに来てください。',
  ],
};

export const openingNote = '日によって異なります。最新情報はインスタをご確認ください。';

export interface ServiceTime {
  title: string;
  hours: string;
  text: string[];
  image: string;
}

export const serviceTimes: ServiceTime[] = [
  {
    title: 'Good Afternoon :',
    hours: '11:30-17:00',
    text: ['気軽にランチしに、', '観光の合間に休憩に。', 'ホッと一息つきに来てください。'],
    image: '/images/cafe/afternoon.jpg',
  },
  {
    title: 'Good Evening :',
    hours: '17:00-22:00',
    text: ['１人でゆっくりと、', '友達と楽しく、', '地元のお酒と美味しい料理を。'],
    image: '/images/cafe/evening.jpg',
  },
];

export const space = [
  'お店の名前の由来でもある小樽の歴史のある石蔵と、',
  '北海道で初めて通った鉄道である小樽の鉄道の「鉄」の',
  'アイアン調を基調としたインダストリアルで',
  '異国の雰囲気を感じる空間づくりにこだわりました。',
  'カフェのみのご利用も可能です。お気軽にお立ち寄りください。',
];

export const cafeSlides = Array.from({ length: 12 }, (_, i) => `/images/cafe/slides/${String(i + 1).padStart(2, '0')}.jpg`);

export const ownerChef = [
  '地元の食材やお酒を気軽に楽しんで頂きたい気軽に様々な人が交わえる空間にしたいとの想いから',
  'あえてレストランにはしませんでした。',
  'バリスタが入れる一杯のコーヒーから小樽地鶏を使った様々な料理、小樽・余市を中心としたワインをお楽しみ下さい。',
];
