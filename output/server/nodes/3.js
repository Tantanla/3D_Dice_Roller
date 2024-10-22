import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/3.CXQfUkKp.js","_app/immutable/chunks/scheduler.CZZ0BjDO.js","_app/immutable/chunks/index.jV1qgJSt.js","_app/immutable/chunks/entry.CcFfdZhg.js"];
export const stylesheets = ["_app/immutable/assets/3.DOkkq0IA.css"];
export const fonts = [];
