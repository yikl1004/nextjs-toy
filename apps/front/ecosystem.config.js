module.exports = {
	apps: [
		{
			name: 'app-front',
			// script: 'ts-node --project tsconfig.json server/server.ts',
			script: './server/index.js',
			args: '',
			exec_mode: 'cluster',
			instance: 0,
			autorestart: true,
			listen_timeout: 50000,
			kill_timeout: 5000,
			env_development: {
				PORT: 3100,
				NODE_ENV: 'development',
			},
			env_production: {
				PORT: 3100,
				NODE_ENV: 'production',
			},
		},
	],
}
