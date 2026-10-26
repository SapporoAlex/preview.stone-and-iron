// Stay page content (src/pages/stay.astro).

export const stayIntro = {
  label: 'Stone House Inn :',
  headline: "Wake up in\nOtaru's famous Stone House.",
  text: ['100年の歴史のある石蔵で過ごす、', '異国チックで特別な時間。'],
};

export const stayAbout = [
  '「石蔵に泊まる非日常空間」築100年の小樽軟石を使った石蔵です。',
  '１棟貸し切りなので思う存分家族や友達と時間を過ごすもよし、',
  'ゆっくりと流れる石蔵の趣を味わうもよし。',
  '小樽の魅力を伝えたい。そんな思いを宿のデザインに込めました。',
];

// Large image carousel (autoplay every 5s, as on the original).
export const staySlides = Array.from({ length: 21 }, (_, i) => `/images/stay/slides/${String(i + 1).padStart(2, '0')}.jpg`);

export const stayRental = {
  title: '一棟貸しの宿',
  text: '一棟丸々を最大８名様でご利用いただけます。ファミリー旅行やグループでの旅行などでもご利用いただけます。広々としたリビングルームにはソファやダイニングテーブルがあり、パーティーなどレクリエーションルームとしてご利用いただけます。レストランの食事をお部屋で楽しんで頂くことも可能です。',
};

export const stayRooms = [
  { heading: 'Capacity', items: ['定員8名'] },
  { heading: 'Bedroom', items: ['２名部屋　(シングル２台)', '６名部屋　(２段ベッド３台）'] },
  { heading: 'Living Room', items: ['ソファ', 'ダイニングテーブル', '簡易キッチン＆冷蔵庫', 'ネット閲覧用大型テレビ（地デジなし）'] },
];

export interface Amenity {
  icon: string;
  label: string;
}

export const facilities: Amenity[] = [
  { icon: '/images/stay/icons/restaurant.png', label: 'レストラン' },
  { icon: '/images/stay/icons/parking.png', label: '無料\n駐車場' },
  { icon: '/images/stay/icons/kitchen.png', label: 'キッチン' },
  { icon: '/images/stay/icons/wifi.png', label: '無料WiFi' },
  { icon: '/images/stay/icons/ac.png', label: 'A/C' },
  { icon: '/images/stay/icons/heating.png', label: '暖房' },
  { icon: '/images/stay/icons/bathroom.png', label: 'バス\nルーム' },
  { icon: '/images/stay/icons/locker.png', label: 'ロッカー' },
];

export const amenities: Amenity[] = [
  { icon: '/images/stay/icons/shampoo.png', label: 'シャンプー' },
  { icon: '/images/stay/icons/conditioner.png', label: 'コンディ\nショナー' },
  { icon: '/images/stay/icons/soap.png', label: '石鹸' },
  { icon: '/images/stay/icons/dryer.png', label: 'ドライヤー' },
  { icon: '/images/stay/icons/towel.png', label: 'タオル' },
  { icon: '/images/stay/icons/toothbrush.png', label: '歯ブラシ' },
];

export const stayGallery = Array.from({ length: 8 }, (_, i) => `/images/stay/gallery/${String(i + 1).padStart(2, '0')}.jpg`);

export const ownerHost = {
  label: 'Owner Host :',
  image: '/images/stay/owner.jpg',
  text: [
    '「石蔵に泊まる非日常空間」築100年の小樽軟石を使った石蔵です。',
    '小樽の歴史を感じながら、新しい小樽の魅力を発見してもらいたい。',
    '快適が全てではない、当時の雰囲気を感じてもらいながらここでしか出来ない体験を。',
  ],
};

// Introduction video on YouTube ("館内の紹介").
export const tourVideo = {
  title: '館内の紹介',
  youtubeId: 'fkUkVvz2tUA',
};

// Campaign button on the original page (the campaign ended in March 2022).
// Set `show` to false to hide the button.
export const campaign = {
  show: true,
  label: 'どうみん割プラン（北海道民限定/2021年12月6日～3月10日迄）はこちら',
  href: '/doumin-plan/',
};
