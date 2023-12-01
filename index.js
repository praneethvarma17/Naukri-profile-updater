const puppeteer = require('puppeteer');
const { CronJob } = require('cron');
const argv = require('minimist')(process.argv.slice(2));

const job = new CronJob(
  '58 9 * * 1,2,3,4,5',
  (async function () {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--remote-debugging-port=9222'],
        headless: false,
        devtools: false,
        timeout: 10000,
      });
    const page = await browser.newPage();
  
    await page.setViewport({width: 1366, height: 768});

    // Navigate the page to a URL
    await page.goto('https://www.naukri.com/mnjuser/homepage', {waitUntil: 'networkidle0'});
  
    console.log('resolved');
    // Set screen size

    const [response2] = await Promise.all([
      page.waitForNavigation(), // The promise resolves after navigation has finished
      await page.type('input#usernameField', argv.username || argv.u), // Clicking the link will indirectly cause a navigation
      await page.type('input#passwordField', argv.password || argv.p), // Clicking the link will indirectly cause a navigation
      await page.click('button.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform')
    ]);

    const [response3] = await Promise.all([
      page.waitForNavigation(),
      await page.click('div.view-profile-wrapper > a'),
    ]);

    const [response5] = await Promise.all([
      // await page.evaluate(() => {
      //   const divToScroll = document.querySelector('#lazyResumeHead > div > div > div.widgetHead'); // Selector for your specific div
      //   divToScroll.scrollIntoView();
      // }),
  
      await page.waitForSelector('#lazyResumeHead > div > div > div.widgetHead > span.edit.icon'), // Replace 'your-span-selector' with the selector for your specific span
      await page.click('#lazyResumeHead > div > div > div.widgetHead > span.edit.icon'),
    ]);


    const [response4] = await Promise.all([
      page.waitForNavigation(),
      await page.type('#resumeHeadlineTxt', 'I\'m an '),
      // await page.evaluate(() => {
      //   const input = document.querySelector('textarea#resumeHeadlineTxt.resumeHeadlineTxt.materialize-textarea');
      //   input.value = 'Im an Enthusiastic Professional full stack developer with knowledge in Angular, Node, Python, GO, Kubenetes and docker looking forward to contribute my expertise in web and software development. ';
      // }),
      await page.click('body > div.ltCont > div.lightbox.profileEditDrawer.resumeHeadlineEdit.model_open.flipOpen > div:nth-child(2) > form > div.row.form-actions > div > button'),
    ]);
    
    // await new Promise((resolve, reject) => { setTimeout(()=>{resolve()},10000) })

    console.info("Execution complete !!!")
    await browser.close();
  }),
  console.log("Completed Executing the code at "+ new Date())
)

job.start()
