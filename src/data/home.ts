// Home page: full-screen background slideshow.
// Desktop and phone use different crops, as on the original site.

export const heroSlides = {
  desktop: [
    '/images/home/slide-01.jpg',
    '/images/home/slide-02.jpg',
    '/images/home/slide-03.jpg',
    '/images/home/slide-04.jpg',
    '/images/home/slide-05.jpg',
    '/images/home/slide-06.jpg',
    '/images/home/slide-07.jpg',
  ],
  mobile: [
    '/images/home/sp/slide-01.jpg',
    '/images/home/sp/slide-07.jpg',
    '/images/home/sp/slide-02.jpg',
    '/images/home/sp/slide-03.jpg',
    '/images/home/sp/slide-04.jpg',
    '/images/home/sp/slide-05.jpg',
    '/images/home/sp/slide-06.jpg',
  ],
  // Seconds each slide is shown (fade + slow Ken Burns zoom).
  interval: 6,
};

export const heroLinks = [
  { label: 'Café Bar', href: '/cafe-bar/' },
  { label: 'Stay', href: '/stay/' },
];
