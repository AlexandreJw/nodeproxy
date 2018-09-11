const {Builder, By, Key, until} = require('selenium-webdriver');
/**
 * @desc 写得自己很想笑 肯定不这么写的
 */
(async function example () {
  let driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('http://127.0.0.1:3000/index/index')
    await driver.wait(driver.findElement(By.id('button')).click(),1000)
    await driver.findElement(By.id('buttonText')).getText().then(text => {
      log(`button点赞一次span${text}`)
    })
    await driver.wait(driver.findElement(By.id('button2')).click(),3000)
    await driver.findElement(By.id('button2Text')).getText().then(text => {
      log(`button2取消一次span${text}`)
    })
    await driver.wait(driver.findElement(By.id('button3')).click(),4000)
    await driver.findElement(By.id('button3Text')).getText().then(text => {
      log(`button3点赞一次span${text}`)
    })
    await driver.wait(driver.findElement(By.id('button3')).click(),5000)
    await driver.findElement(By.id('button3Text')).getText().then(text => {
      log(`button3取消一次span${text}`)
    })
  } finally {
    await driver.quit()
  }
})()
function log(str) {
  console.log(`·点赞功能测试================${str}`)
}