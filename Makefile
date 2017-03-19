LESSCC := lessc
ES5CC := babel

OBJ := ./bin/

PCCSS := $(OBJ)chuangkit.index.pc.style.css
PHONECSS := $(OBJ)chuangkit.index.phone.style.css
PCES5 := $(OBJ)chuangkit.index.pc.bundle.js
PHONEES5 := $(OBJ)chuangkit.index.phone.bundle.js

PCLESS := ./src/less/pc.entry.less
PHONELESS := ./src/less/phone.entry.less
LESSPLUGIN := clean-css


pccss:
	$(LESSCC) --$(LESSPLUGIN) $(PCLESS) $(PCCSS)

phonecss :
	$(LESSCC) --$(LESSPLUGIN) $(PHONELESS) $(PHONECSS)


pces5:	pces6
	$(ES5CC) $(PCES5) --out-file $(PCES5)

phonees5: phonees6
	$(ES5CC) $(PHONEES5) --out-file $(PHONEES5)

pces6:
	webpack --config webpack.pc.config.js 

phonees6:
	webpack --config webpack.phone.config.js
