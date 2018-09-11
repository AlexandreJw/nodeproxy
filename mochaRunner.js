const Mocha = require('mocha')
const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './dosc/mochawesome-reporter',
    quiet: true
  }
})
mocha.addFile('./node/router.spec.js')
mocha.run(function(){
  console.log('done')
  process.exit()
})