export type Theme = 'light' | 'dark';

// REMEMBER TO UPDATE MAP GEN
// ON STANDARD AT NEW LEAGUE START
export enum League {
  Ancestor = 'Ancestor',
  'SSF Ancestor' = 'SSF Ancestor',
  'Hardcore Ancestor' = 'Hardcore Ancestor',
  'HC SSF Ancestor' = 'HC SSF Ancestor',
  Standard = 'Standard',
  'Solo Self-Found' = 'Solo Self-Found',
}

export enum Currency {
  'Mirror of Kalandra' = 'Mirror of Kalandra',
  'Divine Orb' = 'Divine Orb',
}

export const leagueToPoeNinjaLeague = {
  [League.Ancestor]: 'challenge',
  [League['SSF Ancestor']]: 'challenge',
  [League['Hardcore Ancestor']]: 'challengehc',
  [League['HC SSF Ancestor']]: 'challengehc',
  [League.Standard]: 'standard',
  [League['Solo Self-Found']]: 'standard',
};

export type PriceObject = { n: string; c: number; l: string; i: string };