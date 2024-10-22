

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CIInXJRi.js","_app/immutable/chunks/scheduler.CZZ0BjDO.js","_app/immutable/chunks/index.jV1qgJSt.js","_app/immutable/chunks/entry.CcFfdZhg.js"];
export const stylesheets = [];
export const fonts = [];
