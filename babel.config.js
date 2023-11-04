module.exports = function(api) {
	api.cache(true);

	const targets = {
		"esmodules": true
	};

	let presets;

	if (process.env.NODE_ENV === 'es') {
		presets = [
			[
				"@babel/preset-env",
				{
					"modules": false,
					"targets": targets
				}
			]
		];
	} else if (process.env.NODE_ENV === 'umd') {
		presets = [
			[
				"@babel/preset-env",
				{
					"targets": targets
				}
			]
		];
	}

	return {
		plugins: ['@babel/plugin-transform-object-assign'],
		presets
	};
};
