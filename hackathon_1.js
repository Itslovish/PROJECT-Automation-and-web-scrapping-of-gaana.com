let request=require("request");
let cheerio=require("cheerio");
let path=require("path");
let fs=require("fs");
let url="https://gaana.com/playlist/gaana-dj-punjabi-top-50-1";

request(url,cb);
function cb(error,response,html){
if(error){
    console.log(error);
}else if(response.statuscode==404){
    console.log("page not found");
}else{
    dataExtractor(html);
}

function dataExtractor(html){
    let searchTool=cheerio.load(html);
    let anchorrep=searchTool('div._grp span.t_over');
    let music;

    console.log(anchorrep);
    console.log("Here is the list of top 50 punjabi songs from gaana.com scrapped for you");
    console.log("");
    for(let i=0;i<anchorrep.length;i++){
        if(i%2==0){
        let teamNameElem=searchTool(anchorrep[i]);
        let teamName=teamNameElem.text().trim();
       // fs.appendFileSync("gaana.txt",teamName+"\n");
    
     console.log(teamName);
        } 
}
console.log("");
console.log("enter song name from the top 5o songs in the youtube bar and play your song");
let input=process.argv.slice(2);
music=input;
const link="https://www.youtube.com/";

const puppeteer = require("puppeteer")

let browserStartPromise = puppeteer.launch({
    // visible 
    headless: false,
    // type 1sec // slowMo: 1000,
    defaultViewport: null,
    // browser setting 
    args: ["--start-maximized", "--disable-notifications"]
});
let page, browser;


browserStartPromise.then(function(browserObj){
    //console.log("browser opened");
    browser = browserObj
        let browserTabOpenPromise = browserObj.newPage();
        return browserTabOpenPromise;

}).then(function (newTab) {
    page = newTab
   // console.log("new tab opened ")
    let gPageOpenPromise = newTab.goto(link);
   // console.log(("youtube opened"));
    return gPageOpenPromise;
    
}).then(function () {
    let songWillBeEnterdPromise = page.type(".style-scope ytd-searchbox", music, { delay: 50 });
    return songWillBeEnterdPromise;
}).then(function () {
    let enterWillBeDonePromise = page.keyboard.press('Enter' , {delay: 100});
    //console.log("done");
            return enterWillBeDonePromise;
            
}).then(function(){
  let pictureWillBeClickedPromise= page.mouse.click(300 , 230, {button: 'left'});
  //console.log("done2");
 return pictureWillBeClickedPromise;
  
})
}

 }