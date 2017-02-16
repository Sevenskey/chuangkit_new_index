CC := lessc
DIR := ./src/less/
SOURCE := main.less
OBJ := ./bin/chuangkit.index.style.min.css
PLUGIN := clean-css

compile:
	$(CC) --$(PLUGIN) $(DIR)$(SOURCE) $(OBJ)
