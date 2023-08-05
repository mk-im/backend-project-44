install:
		npm ci

brain-games:
		node src/index.js

publish:
		npm publish --dry-run

lint:
		npx eslint
