export const isNotFoil = (item: any) =>
  item.detailsId.slice(-6) === '-relic' ? '' : item;

export const isValidMapTier = (item: any) =>
  (item.mapTier < 14 && item.baseType !== 'Synthesised Map') ||
  (item.variant && item.variant !== ', Gen-18') ||
  item.listingCount < 20
    ? ''
    : item;

export const isValidLogbook = (item: any) =>
  item.itemGroup.properties.find((property: any) => property.key === 'ilvl')
    ?.value === '83+' &&
  item.itemGroup.properties.find(
    (property: any) => property.key === 'corrupted',
  )?.value === false &&
  item.itemGroup.properties.find((property: any) => property.key === 'split')
    ?.value === false
    ? item
    : '';

export const isValidContract = (item: any) =>
  item.itemGroup.properties.find((property: any) => property.key === 'ilvl')
    ?.value === '83+'
    ? item
    : '';

export const isValidTome = (item: any) =>
  item.itemGroup.properties.find((property: any) => property.key === 'ilvl')
    ?.value === 83
    ? item
    : '';

export const isValidBlueprint = (item: any) =>
  item.itemGroup.properties.find((property: any) => property.key === 'ilvl')
    ?.value === '81+'
    ? item
    : '';

export const getPoeNinjaVoices = (item: any) => {
  if (item.name !== 'Voices') {
    return '';
  }

  if (item.variant) {
    return `Voices - ${item.variant.replace(/\D/g, '')}p`;
  }

  return 'Voices - 1p';
};

export const getPoeNinjaAsphyxiasWrath = (item: any) => {
  if (item.name !== "Asphyxia's Wrath") {
    return '';
  }

  return `${item.name} ${item.baseType}`;
};

export const getPoeNinjaAbyssUnique = (item: any) => {
  if (!item.variant?.includes(' Jewel')) {
    return '';
  }

  return `${item.name} - ${item.variant.replace(/\D/g, '')}s`;
};