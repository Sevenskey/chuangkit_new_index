;(function( window ) {
    var tools = {
        getData : getData,
        ajax : ajax,
        beAPlugin : beAPlugin,
    };

    function getData ({
        data = null, // 一般用于简易测试，string 与 object 均可
        url = null, // json 数据请求地址，该字段数据优先使用
    } = {}, callback = function(){} ) {
        if ( url )
            ajax ( url, 'GET' )
                .success ( function( data ) {
                    callback.call( this, JSON.parse( data ) );
                } )
                .error ( function() {
                    console.log( 'Request failed QAQ' );
                } );
        else if ( data && typeof data == 'object' )
            callback( data );
        else if ( data && typeof data == 'string' )
            callback( JSON.parse( data ) );
        else
            console.log( 'Invaild data or url QAQ' );
    }

    // A simple ajax function
    function ajax(url, type, data) { // data is optional
        var xhttp = new XMLHttpRequest();

        var success = function() {},
            error = function() {};

        var _data = data || null;

        xhttp.onreadystatechange = function() {
            if(xhttp.readyState == 4 && xhttp.status == 200) {
                success(xhttp.response);
            } else if(xhttp.readyState == 4) {
                error(xhttp.status);
            }
        };

        xhttp.open(type, url);
        xhttp.send(_data);

        return {
            success: function(f) {
                success = f || success;
                return this;
            },
            error: function(f) {
                error = f || success;
                return this;
            }
        };
    }

    // 该写法并不妥善。
    // 这种写法相当于重写了Vue中安装插件时所做的工作。因此使得每一个准插件类在调用此函数后都可以注册成为插件。相当于扩展了一种在一个页面重复使用一个插件的方法。
    // 但这只是基于这恰好与 Vue.use 阻止重复注册的实现相同，如果在Vue的未来版本中更换了实现，则该函数实现的功能失效。
    function beAPlugin ( plugin ) {
        plugin.installed = false;
        plugin.install = function ( externalVue, config ) {
            if ( plugin.installed )
                return ;
            else {
                plugin.installed = true;
                if ( config )
                    new plugin ( config, externalVue );
                else
                    new plugin ( externalVue );
            }
        }

        return plugin;
    }

    if ( typeof module != 'undefined' )
        module.exports = tools;
    else
        window.tools = tools;
})( window )

