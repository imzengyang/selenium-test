// 1. 安装 模块 
/** node.js  node package manager
 *  1  chromedriver --> 命令行模式下执行 
 *      npm install chromedriver --save
 *  2  selenium-webdriver 
 *     npm install selenium-webdriver --save
 */

require('chromedriver');
var webdriver =  require("selenium-webdriver");

var driver = new webdriver.Builder().forBrowser('chrome').build();  //创建一个chrome 浏览器

driver.get("http://www.baidu.com");  // 打开百度首页
driver.findElement({id: "kw"}).sendKeys("test");
driver.findElement({id: "su"}).click();
// driver.quit();


driver.get("http://www.bing.com/?mkt=zh-CN&mkt=zh-CN");

driver.findElement({css: "#sb_form_q"}).sendKeys("testcase")
driver.findElement({css: "#sb_form_go"}).click();

driver.quit();
