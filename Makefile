test:
	./node_modules/.bin/mocha ./tests/test.js \
		--timeout 60000 \
		--reporter spec 

.PHONY: test