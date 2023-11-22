import { PoeNinjaPriceType } from '../../types/PoeNinja';
import localFont from 'next/font/local';
import { capitalize } from 'radash';
import Enlighten from '../../assets/images/crafting/Enlighten.webp';
import RegradingLens from '../../assets/images/crafting/RegradingLens.webp';
import AulBoss from '../../assets/images/farming/AulBoss.png';
import ChayulaBreachstone from '../../assets/images/farming/ChayulaBreachstone.webp';
import CowardsTrial from '../../assets/images/farming/CowardsTrial.webp';
import ExpeditionBoss from '../../assets/images/farming/ExpeditionBoss.webp';
import HeistLocker from '../../assets/images/farming/HeistLocker.webp';
import LegionEmblem from '../../assets/images/farming/LegionEmblem.webp';
import MapDevice from '../../assets/images/farming/MapDevice.webp';
import MavenWrit from '../../assets/images/farming/MavenWrit.webp';
import Sanctum from '../../assets/images/farming/Sanctum.webp';
import Simulacrum from '../../assets/images/farming/Simulacrum.png';
import Abyss from '../../assets/images/leagueMechanics/Abyss.webp';
import AlvasMemory from '../../assets/images/leagueMechanics/AlvasMemory.webp';
import BalanceTerror from '../../assets/images/leagueMechanics/BalanceTerror.webp';
import Bestiary from '../../assets/images/leagueMechanics/Bestiary.webp';
import Betrayal from '../../assets/images/leagueMechanics/Betrayal.webp';
import Beyond from '../../assets/images/leagueMechanics/Beyond.webp';
import BlackScythe from '../../assets/images/leagueMechanics/BlackScythe.webp';
import Blight from '../../assets/images/leagueMechanics/Blight.webp';
import BlightRavagedMap from '../../assets/images/leagueMechanics/BlightRavagedMap.png';
import BlightedMap from '../../assets/images/leagueMechanics/BlightedMap.png';
import BossMaps from '../../assets/images/leagueMechanics/BossMaps.png';
import Breach from '../../assets/images/leagueMechanics/Breach.webp';
import CofferRelic from '../../assets/images/leagueMechanics/CofferRelic.png';
import Deception from '../../assets/images/leagueMechanics/Deception.webp';
import Delirium from '../../assets/images/leagueMechanics/Delirium.webp';
import Delve from '../../assets/images/leagueMechanics/Delve.webp';
import DivineOrb from '../../assets/images/leagueMechanics/DivineOrb.webp';
import DruidsCircle from '../../assets/images/leagueMechanics/DruidsCircle.webp';
import EinharsMemory from '../../assets/images/leagueMechanics/EinharsMemory.webp';
import Essence from '../../assets/images/leagueMechanics/Essence.webp';
import Expedition from '../../assets/images/leagueMechanics/Expedition.webp';
import FlawlessBreachstone from '../../assets/images/leagueMechanics/FlawlessBreachstone.webp';
import GildedChalice from '../../assets/images/leagueMechanics/GildedChalice.webp';
import Harbinger from '../../assets/images/leagueMechanics/Harbinger.webp';
import Harvest from '../../assets/images/leagueMechanics/Harvest.webp';
import Heist from '../../assets/images/leagueMechanics/Heist.webp';
import HourDivinity from '../../assets/images/leagueMechanics/HourDivinity.webp';
import Incursion from '../../assets/images/leagueMechanics/Incursion.webp';
import Kirac from '../../assets/images/leagueMechanics/Kirac.webp';
import KiracsMemory from '../../assets/images/leagueMechanics/KiracsMemory.webp';
import KnightsSun from '../../assets/images/leagueMechanics/KnightsSun.webp';
import Labyrinth from '../../assets/images/leagueMechanics/Labyrinth.webp';
import Legion from '../../assets/images/leagueMechanics/Legion.webp';
import MavenInvite from '../../assets/images/leagueMechanics/MavenInvite.webp';
import Metamorph from '../../assets/images/leagueMechanics/Metamorph.webp';
import NikosMemory from '../../assets/images/leagueMechanics/NikosMemory.webp';
import OrderChalice from '../../assets/images/leagueMechanics/OrderChalice.webp';
import OriginalSin from '../../assets/images/leagueMechanics/OriginalSin.webp';
import OscillatingSceptre from '../../assets/images/leagueMechanics/OscillatingSceptre.webp';
import Ritual from '../../assets/images/leagueMechanics/Ritual.webp';
import RogueExile from '../../assets/images/leagueMechanics/RogueExile.webp';
import SandstormVisage from '../../assets/images/leagueMechanics/SandstormVisage.webp';
import Shrine from '../../assets/images/leagueMechanics/Shrine.webp';
import TemperingOrb from '../../assets/images/leagueMechanics/TemperingOrb.webp';
import ThiefsTrinket from '../../assets/images/leagueMechanics/ThiefsTrinket.webp';
import TomeRelic from '../../assets/images/leagueMechanics/TomeRelic.png';
import UberBoss from '../../assets/images/leagueMechanics/UberBoss.webp';
import UrnRelic from '../../assets/images/leagueMechanics/UrnRelic.png';
import VaalSideArea from '../../assets/images/leagueMechanics/VaalSideArea.webp';
import XophBreachstone from '../../assets/images/leagueMechanics/XophBreachstone.webp';

import {
  getPoeNinjaAbyssUnique,
  getPoeNinjaAsphyxiasWrath,
  getPoeNinjaVoices,
  isNotFoil,
  isValidBlueprint,
  isValidContract,
  isValidLogbook,
  isValidMapTier,
  isValidTome,
} from '../getValidItem';

export const DAY = 60 * 60 * 24 * 1000;
export const TWENTY_EIGHT_DAYS = DAY * 28;
export const ONE_YEAR = DAY * 365;

export const PLANETSCALE_ROW_LIMIT = 100000;

export const MAX_SYNCABLE_TABS = 15;

export const DEFAULT_TABS_TO_SYNC = [
  'BlightStash',
  'CurrencyStash',
  'DeliriumStash',
  'DelveStash',
  'DivinationCardStash',
  'EssenceStash',
  'FragmentStash',
  'GemStash',
  'MetamorphStash',
  'MapStash',
];

export const farmingStrategies = [
  {
    src: MapDevice,
    label: 'Mapping',
    tags: [
      // masters
      {
        name: 'Bestiary',
        icon: Bestiary,
      },
      {
        name: 'Betrayal',
        icon: Betrayal,
      },
      {
        name: 'Delve',
        icon: Delve,
      },
      {
        name: 'Incursion',
        icon: Incursion,
      },
      {
        name: 'Kirac',
        icon: Kirac,
      },
      // leagues
      { name: 'Abyss', icon: Abyss },
      { name: 'Beyond', icon: Beyond },
      { name: 'Blight', icon: Blight },
      { name: 'Boss maps', icon: BossMaps },
      { name: 'Breach', icon: Breach },
      { name: 'Delirium', icon: Delirium },
      { name: 'Essence', icon: Essence },
      { name: 'Expedition', icon: Expedition },
      { name: 'Harbinger', icon: Harbinger },
      { name: 'Harvest', icon: Harvest },
      { name: 'Heist', icon: Heist },
      { name: 'Labyrinth', icon: Labyrinth },
      { name: 'Legion', icon: Legion },
      { name: 'Metamorph', icon: Metamorph },
      { name: 'Ritual', icon: Ritual },
      { name: 'Rogue Exile', icon: RogueExile },
      { name: 'Shrine', icon: Shrine },
      { name: 'Torment', icon: '👻' },
      { name: 'Vaal Side Areas', icon: VaalSideArea },
    ],
  },
  {
    src: MavenWrit,
    label: 'Bossing',
    tags: [
      { name: "Maven invite's", icon: MavenInvite },
      { name: 'Uber boss', icon: UberBoss },
    ],
  },
  {
    src: Sanctum,
    label: 'Sanctum',
    tags: [
      { name: '+2 Merchant', icon: UrnRelic },
      { name: '+2 Room', icon: TomeRelic },
      { name: '+ Relic quantity', icon: CofferRelic },
      { name: 'Dupe 4 offer', icon: GildedChalice },
      { name: 'Dupe 2 offer', icon: HourDivinity },
      { name: 'Sandstorm Visage', icon: SandstormVisage },
      { name: 'Original Sin', icon: OriginalSin },
      { name: 'Balance of Terror ', icon: BalanceTerror },
    ],
  },
  {
    src: ExpeditionBoss,
    label: 'Expedition',
    tags: [
      { name: 'Knights of the Sun', icon: KnightsSun },
      { name: 'Black Scythe Mercenaries', icon: BlackScythe },
      { name: 'Order of the Chalice', icon: OrderChalice },
      { name: 'Druids of the Broken Circle', icon: DruidsCircle },
    ],
  },
  {
    src: Blight,
    label: 'Blight',
    tags: [
      { name: 'Blighted map', icon: BlightedMap },
      { name: 'Blight-Ravaged map', icon: BlightRavagedMap },
    ],
  },
  {
    src: EinharsMemory,
    label: 'Memories',
    tags: [
      { name: "Alva's Memory", icon: AlvasMemory },
      { name: "Einhar's Memory", icon: EinharsMemory },
      { name: "Kirac's Memory", icon: KiracsMemory },
      { name: "Niko's Memory", icon: NikosMemory },
    ],
  },
  {
    src: Simulacrum,
    label: 'Simulacrum',
  },
  {
    src: HeistLocker,
    label: 'Heist',
    tags: [
      { name: 'Chaos to Divine trinket', icon: DivineOrb },
      { name: 'Deception', icon: Deception },
      { name: 'Enchanted Armaments', icon: TemperingOrb },
      { name: "Thieves' Trinkets or Currency", icon: ThiefsTrinket },
      { name: 'Unusual Gems', icon: RegradingLens },
      { name: 'Replicas or Experimented Items', icon: OscillatingSceptre },
    ],
  },
  {
    src: Labyrinth,
    label: 'Labyrinth',
    tags: [],
  },
  {
    src: ChayulaBreachstone,
    label: 'Breach',
    tags: [
      { name: 'Regular', icon: XophBreachstone },
      { name: 'Flawless', icon: FlawlessBreachstone },
    ],
  },
  {
    src: AulBoss,
    label: 'Delve',
    tags: [
      { name: '200+', icon: '' },
      { name: '500+', icon: '' },
      { name: '1000+', icon: '' },
      { name: '2000+', icon: '' },
    ],
  },
  {
    src: LegionEmblem,
    label: 'Legion',
    tags: [
      { name: '4-Way', icon: '' },
      { name: '5-Way', icon: '' },
    ],
  },
  {
    src: CowardsTrial,
    label: 'Unique maps',
  },
];

export const craftingStrategies = [
  { src: Enlighten, label: 'Gem leveling' },
  { src: RegradingLens, label: 'Regrading lens' },
];

export const TAB_TO_NEVER_SYNC = 'UniqueStash';

export const fontinFont = localFont({
  src: '../../assets/fonts/Fontin-Regular.ttf',
  display: 'swap',
});

export const fontinFontBold = localFont({
  src: '../../assets/fonts/Fontin-Bold.ttf',
  display: 'swap',
});

export const uniqueMapMap: any = {
  'Maze Map': "Doryani's Machinarium",
  'Engraved Ultimatum': 'The Tower of Ordeals',
  'Cursed Crypt Map': "The Coward's Trial",
  'Museum Map': 'The Putrid Cloister',
  'Moon Temple Map': 'The Twilight Temple',
  'Courtyard Map': 'The Vinktar Square',
  'Underground River Map': "Caer Blaidd, Wolfpack's Den",
  'Necropolis Map': 'Death and Taxes',
  'Temple Map': "Poorjoy's Asylum",
  'Cemetery Map': 'Hallowed Ground',
  'Shore Map': 'Mao Kun',
  'Underground Sea Map': "Oba's Cursed Trove",
  'Overgrown Shrine Map': "Acton's Nightmare",
  'Atoll Map': 'Maelström of Chaos',
  'Dunes Map': 'Pillars of Arun',
  'Vaal Pyramid Map': 'Vaults of Atziri',
  'Strand Map': 'Whakawairua Tuahu',
  'Promenade Map': 'Hall of Grandmasters',
  'Bone Crypt Map': "Olmec's Sanctum",
};

export const influencedMapMap: any = {
  "Map contains Al-Hezmin's Citadel\nItem Quantity increases amount of Rewards Al-Hezmin drops by 20% of its value":
    "Al-hezmin's Map",
  "Map contains Veritania's Citadel\nItem Quantity increases amount of Rewards Veritania drops by 20% of its value":
    "Veritania's Map",
  "Map contains Baran's Citadel\nItem Quantity increases amount of Rewards Baran drops by 20% of its value":
    "Baran's Map",
  "Map contains Drox's Citadel\nItem Quantity increases amount of Rewards Drox drops by 20% of its value":
    "Drox's Map",
  'Map is occupied by The Purifier': "Purifier's Map",
  'Map is occupied by The Constrictor': "Constrictor's Map",
  'Map is occupied by The Enslaver': "Enslaver's Map",
  'Map is occupied by The Eradicator': "Eradicator's Map",
};

export const influencedMapMapStashMap: any = {
  'Al-Hezmin, The Hunter': "Al-hezmin's Map",
  'Veritania, The Redeemer': "Veritania's Map",
  'Baran, The Crusader': "Baran's Map",
  'Drox, The Warlord': "Drox's Map",
  'The Purifier': "Purifier's Map",
  'The Constrictor': "Constrictor's Map",
  'The Enslaver': "Enslaver's Map",
  'The Eradicator': "Eradicator's Map",
};

export const poeNinjaPriceTypes: PoeNinjaPriceType[] = [
  {
    nameKey: 'currencyTypeName',
    chaosKey: 'chaosEquivalent',
    overviewType: 'currencyoverview',
    typeParam: 'Currency',
    itemDetailURLPrefix: 'currency',
  },
  {
    nameKey: 'currencyTypeName',
    chaosKey: 'chaosEquivalent',
    overviewType: 'currencyoverview',
    typeParam: 'Fragment',
    itemDetailURLPrefix: 'fragments',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Tattoo',
    itemDetailURLPrefix: 'tattoos',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Omen',
    itemDetailURLPrefix: 'omens',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'DivinationCard',
    itemDetailURLPrefix: 'divination-cards',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Artifact',
    itemDetailURLPrefix: 'artifacts',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Oil',
    itemDetailURLPrefix: 'oils',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Incubator',
    itemDetailURLPrefix: 'incubators',
  },
  {
    nameFn: (item) =>
      isNotFoil(item) &&
      `${item.name} ${item.links ? `${item.links}L` : ''}`.trim(),
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'UniqueWeapon',
    itemDetailURLPrefix: 'unique-weapons',
  },
  {
    nameFn: (item) =>
      isNotFoil(item) &&
      (getPoeNinjaAsphyxiasWrath(item) ||
        getPoeNinjaAbyssUnique(item) ||
        `${item.name} ${item.links ? `${item.links}L` : ''}`.trim()),
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'UniqueArmour',
    itemDetailURLPrefix: 'unique-armours',
  },
  {
    nameFn: (item) => isNotFoil(item) && item.name,
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'UniqueAccessory',
    itemDetailURLPrefix: 'unique-accessories',
  },
  {
    nameFn: (item) => isNotFoil(item) && item.name,
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'UniqueFlask',
    itemDetailURLPrefix: 'unique-flasks',
  },
  {
    nameFn: (item) => isNotFoil(item) && (getPoeNinjaVoices(item) || item.name),
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'UniqueJewel',
    itemDetailURLPrefix: 'unique-jewels',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'UniqueRelic',
    itemDetailURLPrefix: 'unique-relics',
  },
  {
    nameFn: (item) =>
      `${item.name} - ${item.gemLevel}/${item.gemQuality || '0'} ${
        item.corrupted ? 'corrupted' : ''
      }`.trim(),
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'SkillGem',
    itemDetailURLPrefix: 'skill-gems',
  },
  {
    nameFn: (item) =>
      `${item.name} ${item.variant.replace(/\D/g, '')}p/${item.levelRequired}`,
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'ClusterJewel',
    itemDetailURLPrefix: 'cluster-jewels',
  },
  {
    nameFn: (item) => isValidMapTier(item) && item.name,
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Map',
    itemDetailURLPrefix: 'maps',
  },
  {
    nameFn: (item) => isValidMapTier(item) && item.name,
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'BlightedMap',
    itemDetailURLPrefix: 'blighted-maps',
  },
  {
    nameFn: (item) => isValidMapTier(item) && item.name,
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'BlightRavagedMap',
    itemDetailURLPrefix: 'blight-ravaged-maps',
  },
  {
    nameFn: (item) => isValidMapTier(item) && item.name,
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'UniqueMap',
    itemDetailURLPrefix: 'unique-maps',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'DeliriumOrb',
    itemDetailURLPrefix: 'delirium-orbs',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Invitation',
    itemDetailURLPrefix: 'invitations',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Scarab',
    itemDetailURLPrefix: 'scarabs',
  },
  // base types hidden
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Fossil',
    itemDetailURLPrefix: 'fossils',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Resonator',
    itemDetailURLPrefix: 'resonators',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'HelmetEnchant',
    itemDetailURLPrefix: 'helmet-enchants',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Beast',
    itemDetailURLPrefix: 'beasts',
  },
  {
    nameKey: 'name',
    chaosKey: 'chaosValue',
    overviewType: 'itemoverview',
    typeParam: 'Essence',
    itemDetailURLPrefix: 'essences',
  },
  // vials hidden
];

export const poeStackPriceTypes = [
  {
    tag: 'compass',
    parseFn: (item: any, league: string) => ({
      n: `${item.itemGroup?.displayName} - ${item.itemGroup?.properties[0]?.value} uses`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
  {
    tag: 'compass',
    offSet: 100,
    parseFn: (item: any, league: string) => ({
      n: `${item.itemGroup?.displayName} - ${item.itemGroup?.properties[0]?.value} uses`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
  {
    tag: 'compass',
    offSet: 200,
    parseFn: (item: any, league: string) => ({
      n: `${item.itemGroup?.displayName} - ${item.itemGroup?.properties[0]?.value} uses`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
  {
    tag: 'atlas memory',
    parseFn: (item: any, league: string) => ({
      n: `${item.itemGroup?.key
        .split(' ')
        .map((word: string) => (word.length > 3 ? capitalize(word) : word))
        .join(' ')}`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
  {
    tag: 'map',
    searchString: "'s",
    parseFn: (item: any, league: string) => ({
      n: `${item.itemGroup?.key
        .split(' ')
        .map((word: string) => (word.length > 2 ? capitalize(word) : word))
        .join(' ')}`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
  {
    tag: 'logbook',
    parseFn: (item: any, league: string) => ({
      n:
        isValidLogbook(item) &&
        `${item.itemGroup?.key
          .split(' ')
          .map((word: string) =>
            word != 'of' && word != 'the' ? capitalize(word) : word,
          )
          .join(' ')}`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
  {
    tag: 'artifacts',
    parseFn: (item: any, league: string) => ({
      n: `${item.itemGroup?.key.split(' ').map(capitalize).join(' ')}`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
  {
    tag: 'contract',
    parseFn: (item: any, league: string) => ({
      n:
        isValidContract(item) &&
        `${item.itemGroup?.key.split(' ').map(capitalize).join(' ')}`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
  {
    tag: 'blueprint',
    parseFn: (item: any, league: string) => ({
      n:
        isValidBlueprint(item) &&
        `${item.itemGroup?.key
          .split(' ')
          .map((word: string) =>
            word != 'or' && word != 'the' ? capitalize(word) : word,
          )
          .join(' ')} - ${
          item.itemGroup?.properties[2]?.value
            ? item.itemGroup?.properties[1]?.value
            : '1'
        }/${item.itemGroup?.properties[1]?.value}`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
  {
    tag: '',
    searchString: 'Forbidden Tome',
    parseFn: (item: any, league: string) => ({
      n:
        isValidTome(item) &&
        `${item.itemGroup?.key.split(' ').map(capitalize).join(' ')}`,
      c: item.valuation?.value,
      l: `https://poestack.com/pricing/${item.itemGroup.hashString}?league=${league}`,
      i: item.itemGroup.icon,
    }),
  },
];