export interface Collection {
  id: number;
  jerseys: Jersey[];
}

export interface Jersey {
  id: number;
  team: string;
  type: JerseyType;
  country: string;
  season: string;
  image: string;
  player?: string;
  number?: number;
}

export type JerseyType = "home" | "away" | "third" | "special";
