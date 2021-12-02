// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

searchUrbanDict = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + query});
    // let test = document.createElement('list');
    // test.innerText='asdasda'
    // document.getElementById('body').appendChild(test)
  };
  searchWikipedia = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + query + "&title=Special%3ASearch&go=Go"});
  };

    chrome.contextMenus.create({
      id: "UDMenu",
      title: "Search in UrbanDictionary",
      contexts:["selection"]      
    });

    chrome.contextMenus.create({
      id: "wikiMenu",
      title: "Search in Wikipedia",
      contexts:["selection"]
    });

  chrome.contextMenus.onClicked.addListener(function(selection) {
    console.log(selection);
   })


  
 