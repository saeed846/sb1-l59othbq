export const TURKISH_CITIES = [
  'Istanbul',
  'Ankara',
  'Izmir',
  'Antalya',
  'Bursa',
  'Bodrum',
  'Alanya',
  'Fethiye',
  'Marmaris',
  'Kusadasi'
] as const;

export const NEIGHBORHOODS: Record<string, string[]> = {
  'Istanbul': ['Besiktas', 'Kadikoy', 'Sisli', 'Beyoglu', 'Uskudar', 'Sariyer', 'Bakirkoy'],
  'Ankara': ['Cankaya', 'Kizilay', 'Bahcelievler', 'Yenimahalle', 'Kecioren'],
  'Izmir': ['Karsiyaka', 'Bornova', 'Alsancak', 'Konak', 'Buca'],
  'Antalya': ['Konyaalti', 'Lara', 'Muratpasa', 'Kepez'],
  'Bursa': ['Nilufer', 'Osmangazi', 'Yildirim'],
  'Bodrum': ['Merkez', 'Gumusluk', 'Yalikavak', 'Turgutreis'],
  'Alanya': ['Mahmutlar', 'Oba', 'Kestel', 'Tosmur'],
  'Fethiye': ['Calis', 'Hisaronu', 'Ovacik', 'Karagozler'],
  'Marmaris': ['Icmeler', 'Armutalan', 'Beldibi', 'Siteler'],
  'Kusadasi': ['Ladies Beach', 'Marina', 'Centrum', 'Davutlar']
};