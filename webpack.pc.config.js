const webpack = require( 'webpack' );

const _ROOT_ = './';
const _BIN_ = 'bin/' ;
const _SRC_ = 'src/';

const _ENTRY_FILENAME_ = 'pc.entry.js';

const _ENTRY_ = _ROOT_ + _ENTRY_FILENAME_;
const _OBJ_PATH_ = _ROOT_ + _BIN_;
const _OBJ_ = 'chuangkit.index.pc.bundle.js';

module.exports = {
    entry : _ENTRY_,
    output : {
        path : _OBJ_PATH_,
        filename : _OBJ_
    },
};
