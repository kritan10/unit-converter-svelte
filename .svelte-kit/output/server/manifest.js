export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e4c90ea6.js","imports":["_app/immutable/entry/start.e4c90ea6.js","_app/immutable/chunks/index.57679127.js","_app/immutable/chunks/singletons.f65e15b7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ead65483.js","imports":["_app/immutable/entry/app.ead65483.js","_app/immutable/chunks/index.57679127.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
