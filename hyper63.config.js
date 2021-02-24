const express = require('@hyper63/app-express')
const pouchdb = require('@hyper63/adapter-pouchdb')
const memory = require('@hyper63/adapter-memory')
const jwt = require('./plugins/jwt')

module.exports = {
  app: express,
  adapters: [
    { port: 'cache', plugins: [memory()]},
    { port: 'data', plugins: [pouchdb({dir: process.env.DATA })] }
  ],
  middleware: [jwt]

}

