// const express = require('express')
import express from 'express';
// const path = require('path')
import configViewEngine from './configs/viewEngine';
const app = express()
const port = 3000

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('test/index.ejs')
})

app.get('/about', (req, res) => {
     res.send('I am Hung Vu')
})

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})