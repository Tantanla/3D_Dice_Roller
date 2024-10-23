

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D4BLUyn_.js","_app/immutable/chunks/scheduler.CZZ0BjDO.js","_app/immutable/chunks/index.CAI26QMY.js","_app/immutable/chunks/entry.Do9ZI25Q.js"];
export const stylesheets = [];
export const fonts = [];
