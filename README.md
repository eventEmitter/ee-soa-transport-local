# ee-soa-transport-local

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/ee-soa-transport-local.svg)](https://greenkeeper.io/)

Local (same process) transport for ee SOA

## installation

	npm install ee-soa-transport-local

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-transport-local.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-transport-local)


## usage

This module loops all input back to the caller, sets the discovered header on the request.

	var LocalTransport = require('ee-soa-transport-local');

	soa.use(new LocalTransport());