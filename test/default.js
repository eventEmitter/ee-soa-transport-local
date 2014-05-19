
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert')
		, Request 		= require('ee-soa-request')
		, Response 		= require('ee-soa-response');



	var   Transport = require('../')
		, transport;



	describe('The Transport', function(){
		it('should not throw wenn instantiated', function(){
			transport = new Transport();
		});	

		it('should be able to process a request', function(done){
			transport.request(new Request(), new Response());

			transport.on('request', function(req, res){
				assert.equal(req.getDiscovery(), 'discovered');
				assert(res);
				done();
			});
		});	
	});
	