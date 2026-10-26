// Days page content (src/pages/days.astro): "A day in Stone and Iron" timeline.

export const daysIntro = {
  label: 'Days :',
  headline: 'A DAY IN\nSTONE AND IRON',
  text: ['バリスタが淹れるコーヒーから', 'スタートする、', '石と鉄での特別な一日。'],
};

export const dayIntro = ['昔と現在が行き来する小樽。', '貴方の楽しみ方を探してみて下さい。'];

export interface TimelineEntry {
  time: string;
  image: string;
  text: string;
}

export const timeline: TimelineEntry[] = [
  { time: '07:02', image: '/images/days/0702.jpg', text: '昔と現在が行き来する小樽。\n貴方の楽しみ方を探してみて下さい。' },
  { time: '07:49', image: '/images/days/0749.jpg', text: '100年の歴史ある石蔵で目覚める、\n特別な朝。' },
  { time: '09:10', image: '/images/days/0910.jpg', text: '淹れたてのStone and Ironオリジナルコーヒーで1日をスタート。' },
  { time: '10:20', image: '/images/days/1020.jpg', text: '小樽貴賓館1Fホールには北海道ゆかりの日本画家による豪華な天井画の競演がご覧頂ます。' },
  { time: '13:50', image: '/images/days/1350.jpg', text: 'ランチに一息しにSTONE and IRONに戻って、地元の食材をお楽しみください。' },
  { time: '15:04', image: '/images/days/1504.jpg', text: '小樽には魅力的なカフェがたくさんあります。コーヒーを片手に歩き回るも良し。ゆっくりカフェで寛ぐのも良し。' },
  { time: '17:10', image: '/images/days/1710.jpg', text: '言わずと知れた小樽運河ですが、夕方はまた少し違うロマンチックな姿を見せてくれます。' },
  { time: '18:46', image: '/images/days/1846.jpg', text: '小樽ならではの地元の美味しい食材を、ゆっくりとお楽しみください。' },
  { time: '20:22', image: '/images/days/2022.jpg', text: '北海道三大夜景の一つにもなっている小樽天狗山。山頂から見下ろす景色は日中も夜も素敵な景観です。' },
  { time: '21:06', image: '/images/days/2106.jpg', text: 'バーでゆっくりと美味しい地元のお酒を嗜む、大人な時間。' },
  { time: '22:23', image: '/images/days/2223.jpg', text: 'お部屋やラウンジで、一人でゆっくり寛ぐも良し。友達と談笑するも良し。\n石蔵の中で過ごす特別な夜。' },
];
