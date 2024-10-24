interface Price {
  EUR: number;
  USD: number;
  GBP: number;
}

interface Hotspot {
  id: string;
  name: string;
}

interface Length {
  meters: string;
  feet: string;
}

export interface Yacht {
  id: string;
  permalink: string;
  name: string;
  coverImage: {
    url: string;
  };
  hidePrice: boolean;
  buyPrice: Price;
  charterSummerPrice: Price;
  charterSummerHotspots: Hotspot[];
  charterWinterPrice: Price;
  charterWinterHotspots: Hotspot[];
  guestsNumber: number;
  cabinsNumber: number;
  length: Length;
}

export interface YachtData {
  meta: {
    total: number;
    page: number;
    totalPages: number;
  };
  data: Yacht[];
}
