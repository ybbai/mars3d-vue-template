/*!
 * Mars3D (MarsGIS for Cesium)三维地球平台  
 * 版本信息：v2.0.6, hash值: cd99a4d56c327a4486e6
 * 编译日期：2020-6-7 17:57:09     
 * 版权所有：Copyright by 火星科技 http://cesium.marsgis.cn
 * 
 */

 (function webpackUniversalModuleDefinition(root, factory) {
	var Cesium = require("cesium/Cesium")  //使用原生Cesium，通过npm安装
//    var Cesium = window.Cesium	//使用火星科技修改过的Cesium，通过index.html的head引入

	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(Cesium, require("@turf/turf"));
	else if(typeof define === 'function' && define.amd)
		define(["cesium/Cesium", "@turf/turf"], factory);
	else if(typeof exports === 'object')
		exports["mars3d"] = factory(Cesium, require("@turf/turf"));
	else
		root["mars3d"] = factory(root["Cesium"], root["turf"]);
})(window,mars3d_init);