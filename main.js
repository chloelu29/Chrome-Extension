// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

  chrome.runtime.onInstalled.addListener(() => {
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

    chrome
  });

  chrome.contextMenus.onClicked.addListener(function(selection) {
    //selection is an object with menuItemId (the menu ids above), pageUrl (the tab's url that the selection was on), and selectionText (the selected text)
    console.log(selection);
    
    //if the menuItemIds match, create a new tab with the url
    if (selection.menuItemId === 'UDMenu') chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + selection.selectionText});
    if (selection.menuItemId === 'wikiMenu') chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + selection.selectionText + "&title=Special%3ASearch&go=Go"});
   })


  
 