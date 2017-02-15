CC := lessc
DIR := ./src/less/
SOURCE := style.less
OBJ := ./bin/style.min.css
PLUGIN := clean-css

compile:
	$(CC) --$(PLUGIN) $(DIR)$(SOURCE) $(OBJ)
