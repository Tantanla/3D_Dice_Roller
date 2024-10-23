export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bfzi1jYV.js","app":"_app/immutable/entry/app.Dz-J7eYC.js","imports":["_app/immutable/entry/start.Bfzi1jYV.js","_app/immutable/chunks/entry.COJHQhX4.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.Dz-J7eYC.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BufXLbuI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
