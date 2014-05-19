!function(){

	var   Class 		= require('ee-class')
		, SOATransport 	= require('ee-soa-transport')
		, log 			= require('ee-log');



	module.exports = new Class({
		inherits: SOATransport

		, init: function init() {
			init.super.call(this, 'local');
		}


		, request: function(request, response) {
			request.setDiscovery('discovered');

			process.nextTick(function(){
				this.emit('request', request, response);
			}.bind(this));
		}
	});
}();
