const express = require('@hyper63/app-express')
const memory = require('@hyper63/adapter-memory')
const pouchdb = require('@hyper63/adapter-pouchdb')
const zmq = require('@hyper63/adapter-zmq')
const jwt = require('./plugins/jwt')

module.exports = {
  app: express,
  adapters: [
    { port: 'cache', plugins: [memory()]},
    { port: 'data', plugins: [pouchdb({dir: process.env.DATA})]},
    { port: 'queue', plugins: [zmq('7373')]
  ],
  middleware: [jwt]

}

