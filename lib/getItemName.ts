import compassMap from './constants/compass.json';
import { Item, MapStashItem } from '../types/PoeGGG';
import { group } from 'radash';
import {
  influencedMapMap,
  influencedMapMapStashMap,
  uniqueMapMap,
} from './constants';

export const getGemName = (item: Item) => {
  const getLevel = () => {
    return item.properties
      .find((property: any) => property.name === 'Level')
      ?.values[0]?.[0].toString()
      .replace(/\D/g, '');
  };

  const getQuality = () => {
    const quality = Number(
      (
        item.properties.find((property: any) => property.name === 'Quality')
          ?.values[0]?.[0] || '0'
      )
        .toString()
        .replace(/\D/g, ''),
    );

    return quality > 19 ? quality : quality > 10 ? 20 : 0;
  };

  const getCorrupted = () => {
    return item.corrupted ? 'corrupted' : '';
  };

  return {
    ...item,
    name: `${
      item.typeLine
    } - ${getLevel()}/${getQuality()} ${getCorrupted()}`.trim(),
  };
};

export const getCompassName = (item: Item) => {
  const getName = () => {
    return (
      // @ts-expect-error
      compassMap[`Sextant ${item.enchantMods?.slice(0, -1).join(' ')}`]
    );
  };

  const getUses = () => {
    const usesRemaining = Number(
      item.enchantMods?.slice(-1).toString().replace(/\D/g, ''),
    );

    return usesRemaining === 16
      ? 16
      : usesRemaining > 4
      ? '5-15'
      : usesRemaining === 4
      ? 4
      : '<4';
  };

  return {
    ...item,
    name: `${getName()} - ${getUses()} uses`,
  };
};

export const getMemoryName = (item: Item) => {
  return {
    ...item,
    name: item.typeLine,
  };
};

export const getEquipmentName = (item: Item) => {
  const getLinks = () => {
    const links = Math.max(
      ...Object.values(group(item.sockets ?? [], (socket) => socket.group)).map(
        (sockets) => sockets?.length ?? 0,
      ),
    );

    return links > 4 ? `${links}L` : '';
  };

  return {
    ...item,
    name: `${item.name} ${getLinks()}`.trim(),
  };
};

export const getBeastName = (item: Item) => {
  return {
    ...item,
    name: item.baseType,
  };
};

export const getMapName = (item: Item) => {
  if (item.frameType === 3) {
    if (item.typeLine === 'Harbinger Map') {
      return item;
    }
    if (item.typeLine === 'Synthesised Map') {
      return item;
    }

    return {
      ...item,
      name: uniqueMapMap[item.baseType] ?? '',
    };
  }

  if (item.ilvl < 80) {
    return item;
  }

  if (
    influencedMapMap[item.implicitMods?.[0]] ??
    influencedMapMap[item.implicitMods?.[1]]
  ) {
    return {
      ...item,
      name:
        influencedMapMap[item.implicitMods[0]] ??
        influencedMapMap[item.implicitMods[1]],
    };
  }

  return {
    ...item,
    name: item.baseType,
  };
};

export const getMapStashMapName = (item: MapStashItem) => {
  if (item.section === 'unique') {
    return {
      ...item,
      name: item.name,
    };
  }

  if (item.tier < 14) {
    return {
      ...item,
      name: '',
    };
  }

  if (influencedMapMapStashMap[item.name]) {
    return {
      ...item,
      name: influencedMapMapStashMap[item.name],
    };
  }

  if (item.section === 'special') {
    return {
      ...item,
      name: `${item.name} Map`,
    };
  }

  return {
    ...item,
    name: item.name,
  };
};

export const getLogbookName = (item: Item) => {
  if (item.ilvl < 81) {
    return {
      ...item,
      name: '',
    };
  }

  const getFaction = () => {
    const factions = item.logbookMods.map((mod: any) => mod.faction.name);

    return factions.includes('Knights of the Sun')
      ? 'Knights of the Sun'
      : factions.includes('Black Scythe Mercenaries')
      ? 'Black Scythe Mercenaries'
      : factions.includes('Order of the Chalice')
      ? 'Order of the Chalice'
      : 'Druids of the Broken Circle';
  };

  return {
    ...item,
    name: `${getFaction()} Logbook`,
  };
};

export const getClusterJewelName = (item: Item) => {
  if (item.name === 'Megalomaniac') {
    return item;
  }

  const getPassives = () => {
    return item.enchantMods?.[0].replace(/\D/g, '');
  };

  const getLevel = () => {
    if (item.ilvl >= 84) {
      return 84;
    } else if (item.ilvl >= 75) {
      return 75;
    } else if (item.ilvl >= 68) {
      return 68;
    } else if (item.ilvl >= 50) {
      return 50;
    }
    return 1;
  };

  const getType = () => {
    return (
      item.enchantMods
        .slice(-1)?.[0]
        ?.split(': ')?.[1]
        .split('\n')
        .join(', ') ?? ''
    );
  };

  return {
    ...item,
    name: `${getType()} ${getPassives()}p/${getLevel()}`,
  };
};

export const getHeistContractName = (item: Item) => {
  if (item.ilvl < 81) {
    return {
      ...item,
      name: '',
    };
  }

  const jobName = item.properties
    .find((property: any) => property.name.includes('Requires '))
    ?.values[1]?.[0].toString();

  return {
    ...item,
    name: `${jobName} Contract`,
  };
};

export const getHeistBlueprintName = (item: Item) => {
  if (item.ilvl < 81) {
    return {
      ...item,
      name: '',
    };
  }

  const targetName = item.properties.find((property: any) =>
    property.name.includes('Heist Target:'),
  )?.values[0]?.[0];

  const wingsRevealed = item.properties.find(
    (property: any) => property.name === 'Wings Revealed',
  )?.values[0]?.[0];

  return {
    ...item,
    name: `${targetName} Blueprint - ${wingsRevealed}`,
  };
};

export const getVoicesName = (item: Item) => {
  const passives = Number(
    item.explicitMods
      .find((mod: any) => mod.includes('which grant nothing'))
      ?.replace(/\D/g, ''),
  );

  return {
    ...item,
    name: `Voices - ${passives}p`,
  };
};

export const getAsphyxiasWrathName = (item: Item) => {
  return {
    ...item,
    name: `${item.name} ${item.baseType}`,
  };
};

export const getMavenInviteName = (item: Item) => {
  return {
    ...item,
    name: item.typeLine,
  };
};

export const getResonatorName = (item: Item) => {
  return {
    ...item,
    name: item.typeLine,
  };
};

export const getAbyssUniqueName = (item: Item) => {
  const sockets = item.explicitMods?.[0]?.replace(/\D/g, '');

  return {
    ...item,
    name: `${item.name} - ${sockets}s`,
  };
};

export const getItemName = (item: Item) => {
  return {
    ...item,
    name: item.name || item.baseType,
  };
};