// Foundry 9: HALTLINE's only map, described as data.
export const MAP_NAME = 'Foundry 9';
export const BOUNDS = { minX: -26, maxX: 26, minZ: -35, maxZ: 33 };

const solids: any[] = [];
const decorations: any[] = [];

function solid(cx: number, cz: number, w: number, d: number, h: number, y0: number, tag: string) {
  solids.push({
    minX: cx - w / 2, maxX: cx + w / 2,
    minZ: cz - d / 2, maxZ: cz + d / 2,
    minY: y0, maxY: y0 + h,
    tag,
  });
}

function wallX(cx: number, cz: number, length: number, h: number, tag = 'concrete', y0 = 0, thickness = 0.8) {
  solid(cx, cz, thickness, length, h, y0, tag);
}
function wallZ(cx: number, cz: number, length: number, h: number, tag = 'concrete', y0 = 0, thickness = 0.8) {
  solid(cx, cz, length, thickness, h, y0, tag);
}

wallZ(0, -34.6, 52, 7, 'concrete');
wallZ(0, 32.6, 52, 6, 'concrete');
wallX(-25.6, 0, 68, 7, 'concrete');
wallX(25.6, 0, 68, 6.5, 'concrete');

wallZ(-8.9, 28, 10, 5, 'concreteDark');
wallZ(8.9, 28, 10, 5, 'concreteDark');
wallZ(-3.5, 23.2, 5, 4, 'concrete');
wallZ(3.5, 23.2, 5, 4, 'concrete');
solid(0, 30.5, 6, 2.4, 1.1, 0, 'crate');

wallZ(-15.5, 12, 19, 5, 'concrete');
wallZ(15.5, 12, 19, 5, 'concrete');
wallZ(-3.2, 12, 3.6, 5, 'concrete');
wallZ(3.2, 12, 3.6, 5, 'concrete');

solid(-13, 18.5, 5.5, 3.2, 2.7, 0, 'container');
solid(11.5, 19, 3.4, 3.4, 1.2, 0, 'crate');
solid(11.5, 19, 2.2, 2.2, 1.0, 1.2, 'crate');
solid(-2.5, 15.5, 2.4, 2.4, 1.0, 0, 'crate');
solid(19, 15, 3, 3, 2.2, 0, 'crate');

wallX(-6.5, 9.5, 5, 5, 'concrete');
wallX(-6.5, 0, 13, 5, 'concrete');
wallX(-6.5, -15.5, 5, 5, 'concrete');
wallX(-6.5, -18, 6, 5, 'concrete');

wallX(6.5, 9.5, 5, 5, 'concrete');
wallX(6.5, 0, 13, 5, 'concrete');
wallX(6.5, -15.5, 5, 5, 'concrete');

solid(-16, 4, 6, 1.1, 1.5, 0, 'concreteLight');
solid(-16, -6, 1.1, 5, 1.5, 0, 'concreteLight');
solid(16, 2, 6, 1.1, 1.5, 0, 'concreteLight');
solid(16, -8, 1.1, 5, 1.5, 0, 'concreteLight');
solid(0, 0, 2.6, 2.6, 2.4, 0, 'pillar');
solid(0, -9, 2.2, 2.2, 1.1, 0, 'crate');

wallZ(-15, -20, 19, 5, 'concrete');
wallZ(15, -20, 19, 5, 'concrete');
wallZ(-4, -20, 4, 5, 'concrete');
wallZ(4, -20, 4, 5, 'concrete');
wallZ(0, -20, 0.9, 5, 'concrete');

solid(19.5, -16, 3.2, 3.2, 1.1, 0, 'crate');
solid(19.5, -16, 2.0, 2.0, 1.0, 1.1, 'crate');
solid(13, -10, 1.2, 6, 1.6, 0, 'concreteLight');
solid(11.5, -17, 2.6, 2.6, 2.2, 0, 'container');
solid(21, -8.5, 2.2, 2.2, 1.1, 0, 'crate');

solid(-19.5, -16, 3.2, 3.2, 1.1, 0, 'crate');
solid(-19.5, -16, 2.0, 2.0, 1.0, 1.1, 'crate');
solid(-13, -10, 1.2, 6, 1.6, 0, 'concreteLight');
solid(-11.5, -17, 2.6, 2.6, 2.2, 0, 'container');
solid(-21, -8.5, 2.2, 2.2, 1.1, 0, 'crate');

wallZ(-7.9, -27, 9, 5, 'concreteDark');
wallZ(7.9, -27, 9, 5, 'concreteDark');
wallZ(-2.5, -22.5, 3, 4, 'concrete');
wallZ(2.5, -22.5, 3, 4, 'concrete');
solid(0, -30, 5, 2.2, 1.1, 0, 'crate');
solid(-13, -24, 2.6, 2.6, 1.2, 0, 'crate');
solid(13, -24, 2.6, 2.6, 1.2, 0, 'crate');

function decor(kind: string, x: number, y: number, z: number, extra: any = {}) {
  decorations.push({ kind, x, y, z, ...extra });
}
for (let i = 0; i < 7; i++) decor('lamp', -18 + i * 6, 5.6, -14 + (i % 2) * 26);
for (let i = 0; i < 5; i++) decor('lampCold', -12 + i * 6, 5.5, 2);
decor('pipe', 0, 4.2, 30, { length: 46, axis: 'x' });
decor('pipe', -24, 3.6, 0, { length: 62, axis: 'z' });
decor('pipe', 24, 4.4, 0, { length: 62, axis: 'z' });
decor('rail', 0, 0, 0);
decor('signA', 17, 3.2, -19.4, { text: 'A' });
decor('signB', -17, 3.2, -19.4, { text: 'B' });

export const SOLIDS = solids;
export const DECORATIONS = decorations;

export const ATTACK_SPAWN = { x: 0, z: 28.2 };
export const DEFEND_SPAWN = { x: 0, z: -28.6 };
export const SPAWN_RADIUS = 5.2;

export const SITES = [
  { id: 'A', name: 'Coolant Yard', x: 17, z: -13, radius: 4.6, y: 0, label: 'A' },
  { id: 'B', name: 'Smelter Hall', x: -17, z: -13, radius: 4.6, y: 0, label: 'B' },
];

export function siteById(id: string) {
  return SITES.find((s) => s.id === id) ?? SITES[0];
}

const nodeList = [
  { id: 's1', x: -4, z: 27 }, { id: 's2', x: 4, z: 27 },
  { id: 'y1', x: -12, z: 20 }, { id: 'y2', x: 12, z: 20 }, { id: 'y3', x: 0, z: 20 },
  { id: 'dW', x: -15.5, z: 13.5 }, { id: 'dM', x: 0, z: 13.5 }, { id: 'dE', x: 15.5, z: 13.5 },
  { id: 'w1', x: -16.5, z: 8 }, { id: 'w2', x: -16.5, z: 1 }, { id: 'w3', x: -16.5, z: -5 },
  { id: 'w4', x: -16.5, z: -11 }, { id: 'w5', x: -19.5, z: -14 },
  { id: 'wD', x: -6.5, z: 5.5 }, { id: 'wD2', x: -6.5, z: -10.5 },
  { id: 'm1', x: 0, z: 8 }, { id: 'm2', x: -3.6, z: 2 }, { id: 'm3', x: 3.6, z: 2 },
  { id: 'm4', x: 0, z: -4 }, { id: 'm5', x: 0, z: -14 }, { id: 'm6', x: 0, z: -18.5 },
  { id: 'mD', x: 6.5, z: 0.5 }, { id: 'mD2', x: 6.5, z: -13 },
  { id: 'e1', x: 16.5, z: 8 }, { id: 'e2', x: 16.5, z: 1 }, { id: 'e3', x: 16.5, z: -5 },
  { id: 'e4', x: 16.5, z: -11 }, { id: 'e5', x: 19.5, z: -14 },
  { id: 'aHold', x: 17, z: -13 }, { id: 'aDoor', x: 17, z: -20.5 },
  { id: 'bHold', x: -17, z: -13 }, { id: 'bDoor', x: -17, z: -20.5 },
  { id: 'n1', x: -13, z: -22.5 }, { id: 'n2', x: 0, z: -22.5 }, { id: 'n3', x: 13, z: -22.5 },
  { id: 'n4', x: -20, z: -24.5 }, { id: 'n5', x: 20, z: -24.5 },
  { id: 't1', x: -4, z: -27.5 }, { id: 't2', x: 4, z: -27.5 }, { id: 't3', x: 0, z: -24.5 },
];

const edgeList = [
  ['s1', 's2'], ['s1', 'y3'], ['s2', 'y3'], ['s1', 'y1'], ['s2', 'y2'],
  ['y1', 'y3'], ['y3', 'y2'], ['y1', 'dW'], ['y2', 'dE'], ['y3', 'dM'],
  ['dW', 'w1'], ['dM', 'm1'], ['dE', 'e1'],
  ['w1', 'w2'], ['w2', 'w3'], ['w3', 'w4'], ['w4', 'w5'],
  ['w2', 'wD'], ['wD', 'm2'], ['w4', 'wD2'], ['wD2', 'm4'],
  ['m1', 'm2'], ['m1', 'm3'], ['m2', 'm3'], ['m2', 'm4'], ['m3', 'm4'], ['m4', 'm5'], ['m5', 'm6'],
  ['m3', 'mD'], ['mD', 'e2'], ['m5', 'mD2'], ['mD2', 'e4'],
  ['e1', 'e2'], ['e2', 'e3'], ['e3', 'e4'], ['e4', 'e5'],
  ['e4', 'aHold'], ['aHold', 'aDoor'], ['aDoor', 'n5'], ['n5', 'n3'],
  ['w4', 'bHold'], ['bHold', 'bDoor'], ['bDoor', 'n4'], ['n4', 'n1'],
  ['m6', 'n2'], ['n1', 'n2'], ['n2', 'n3'], ['n1', 't3'], ['n3', 't3'],
  ['t3', 't1'], ['t3', 't2'], ['t1', 't2'],
  ['n4', 'n1'], ['n5', 'n3'], ['w5', 'bHold'], ['e5', 'aHold'],
];

export const NAV: any[] = nodeList.map((n) => ({ ...n, edges: [] }));
const byId = new Map(NAV.map((n) => [n.id, n]));

export function solidBoxOverlap(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number, out: any[]) {
  out.length = 0;
  for (let i = 0; i < solids.length; i++) {
    const s = solids[i];
    if (maxX <= s.minX || minX >= s.maxX) continue;
    if (maxZ <= s.minZ || minZ >= s.maxZ) continue;
    if (maxY <= s.minY || minY >= s.maxY) continue;
    out.push(s);
  }
  return out;
}

export function floorHeightAt(x: number, z: number, maxY = 8) {
  let best = 0;
  for (let i = 0; i < solids.length; i++) {
    const s = solids[i];
    if (x < s.minX || x > s.maxX || z < s.minZ || z > s.maxZ) continue;
    if (s.maxY <= maxY && s.maxY > best) best = s.maxY;
  }
  return best;
}

const slab = { t: 0, nx: 0, ny: 0, nz: 0 };
export function raycastSolids(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, maxDist: number, hit: any) {
  let best = maxDist;
  let found = false;
  for (let i = 0; i < solids.length; i++) {
    const s = solids[i];
    if (slabHit(s, ox, oy, oz, dx, dy, dz, best, slab)) {
      best = slab.t;
      found = true;
      if (hit) {
        hit.dist = slab.t; hit.x = ox + dx * slab.t; hit.y = oy + dy * slab.t; hit.z = oz + dz * slab.t;
        hit.nx = slab.nx; hit.ny = slab.ny; hit.nz = slab.nz; hit.solid = s;
      }
    }
  }
  return found ? best : -1;
}

function slabHit(s: any, ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, maxDist: number, out: any) {
  let tmin = 0; let tmax = maxDist; let nx = 0, ny = 0, nz = 0;
  if (Math.abs(dx) < 1e-8) { if (ox < s.minX || ox > s.maxX) return false; } else {
    let t1 = (s.minX - ox) / dx; let t2 = (s.maxX - ox) / dx; let sign = -1;
    if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; sign = 1; }
    if (t1 > tmin) { tmin = t1; nx = sign; ny = 0; nz = 0; }
    if (t2 < tmax) tmax = t2; if (tmin > tmax) return false;
  }
  if (Math.abs(dy) < 1e-8) { if (oy < s.minY || oy > s.maxY) return false; } else {
    let t1 = (s.minY - oy) / dy; let t2 = (s.maxY - oy) / dy; let sign = -1;
    if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; sign = 1; }
    if (t1 > tmin) { tmin = t1; nx = 0; ny = sign; nz = 0; }
    if (t2 < tmax) tmax = t2; if (tmin > tmax) return false;
  }
  if (Math.abs(dz) < 1e-8) { if (oz < s.minZ || oz > s.maxZ) return false; } else {
    let t1 = (s.minZ - oz) / dz; let t2 = (s.maxZ - oz) / dz; let sign = -1;
    if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; sign = 1; }
    if (t1 > tmin) { tmin = t1; nx = 0; ny = 0; nz = sign; }
    if (t2 < tmax) tmax = t2; if (tmin > tmax) return false;
  }
  if (tmin <= 0 || tmin > maxDist) return false;
  out.t = tmin; out.nx = nx; out.ny = ny; out.nz = nz; return true;
}

export function lineOfSight2D(x1: number, z1: number, x2: number, z2: number) {
  const dx = x2 - x1; const dz = z2 - z1; const len = Math.hypot(dx, dz);
  if (len < 1e-6) return true;
  return raycastSolids(x1, 1.2, z1, dx / len, 0, dz / len, len - 0.4, null) < 0;
}

const routeCache = new Map();
export function routeBetween(fromX: number, fromZ: number, toX: number, toZ: number) {
  const start = nearestNode(fromX, fromZ); const goal = nearestNode(toX, toZ);
  if (!start || !goal) return [];
  const key = `${start.id}>${goal.id}`;
  const cached = routeCache.get(key); if (cached) return cached;
  const prev = new Map(); const queue = [start.id]; const seen = new Set([start.id]);
  while (queue.length) {
    const id = queue.shift()!; if (id === goal.id) break;
    const node = byId.get(id);
    for (const next of node.edges) {
      if (seen.has(next)) continue;
      seen.add(next); prev.set(next, id); queue.push(next);
    }
  }
  if (!seen.has(goal.id)) return [];
  const path = []; let cur = goal.id;
  while (cur !== start.id) {
    path.push(byId.get(cur)); cur = prev.get(cur); if (cur === undefined) return [];
  }
  path.reverse(); routeCache.set(key, path); return path;
}

export function nearestNode(x: number, z: number, maxDist = 1e9) {
  let best = null; let bestD = maxDist * maxDist;
  for (const n of NAV) {
    const dx = n.x - x; const dz = n.z - z; const d = dx * dx + dz * dz;
    if (d < bestD) { bestD = d; best = n; }
  }
  return best;
}

export const RADAR = {
  bounds: { minX: -26, maxX: 26, minZ: -35, maxZ: 33 },
  blocks: [
    { x: 0, z: -34.6, w: 52, d: 1.2 }, { x: 0, z: 32.6, w: 52, d: 1.2 },
    { x: -25.6, z: 0, w: 1.2, d: 68 }, { x: 25.6, z: 0, w: 1.2, d: 68 },
    { x: 0, z: 23.2, w: 12, d: 1 }, { x: 0, z: 12, w: 52, d: 1 },
    { x: -6.5, z: 0, w: 1, d: 62 }, { x: 6.5, z: 0, w: 1, d: 62 },
  ],
};
