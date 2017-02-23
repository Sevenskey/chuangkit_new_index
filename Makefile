CC := lessc
DIR := ./src/less/
SOURCE := main.less
OBJ := ./bin/chuangkit.index.style.min.css
PLUGIN := clean-css

css:
	$(CC) --$(PLUGIN) $(DIR)$(SOURCE) $(OBJ)

es5:	js_bundle
	babel ./bin/chuangkit.index.bundle.js --out-file ./bin/chuangkit.index.bundle.js

js_bundle:
	webpack
