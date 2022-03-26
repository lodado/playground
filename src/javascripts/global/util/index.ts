export function isEmpty(object) {
  if (object === 0) throw new Error('programmer fault');
  if (!object) return false;
  return Object.keys(object).length === 0;
}

export function calDist(distance: number) {
  if (distance >= 10000) {
    return `${Math.round(distance / 10000)}만`;
  }

  if (distance >= 1000) {
    return `${Math.round(distance / 1000)}천`;
  }

  return distance;
}
