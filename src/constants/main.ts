import { ZodiacDetails } from 'types/main';

export const API_URL = process.env.REACT_APP_API_LINK;

export const ZODIACS: ZodiacDetails[] = [
  {
    sign: 'aries',
    dateRange: '21 Mar - 19 Apr',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2648.png',
  },
  {
    sign: 'taurus',
    dateRange: '20 Apr - 20 May',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2649.png',
  },
  {
    sign: 'gemini',
    dateRange: '21 May - 20 Jun',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/264a.png',
  },
  {
    sign: 'cancer',
    dateRange: '21 Jun - 22 Jul',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/264b.png',
  },
  {
    sign: 'leo',
    dateRange: '23 Jul - 22 Aug',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/264c.png',
  },
  {
    sign: 'virgo',
    dateRange: '23 Aug - 22 Sep',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/264d.png',
  },
  {
    sign: 'libra',
    dateRange: '23 Sep - 22 Oct',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/264e.png',
  },
  {
    sign: 'scorpio',
    dateRange: '23 Oct - 21 Nov',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/264f.png',
  },
  {
    sign: 'sagittarius',
    dateRange: '22 Nov - 21 Dec',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2650.png',
  },
  {
    sign: 'capricorn',
    dateRange: '22 Dec - 19 Jan',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2651.png',
  },
  {
    sign: 'aquarius',
    dateRange: '20 Jan - 18 Feb',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2652.png',
  },
  {
    sign: 'pisces',
    dateRange: '19 Feb - 20 Mar',
    iconSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2653.png',
  },
];
