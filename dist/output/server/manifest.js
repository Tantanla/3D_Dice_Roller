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
		client: {"start":"_app/immutable/entry/start.CLoZh6Kb.js","app":"_app/immutable/entry/app.Bym1xUvp.js","imports":["_app/immutable/entry/start.CLoZh6Kb.js","_app/immutable/chunks/entry.Dt8v8L-A.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.Bym1xUvp.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BufXLbuI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
