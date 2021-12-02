Migrating from Manifest 2 to Manifest 3

manifest.json
- background.page needs to be background.service_worker
- it also needs to point to a js file. It was originally pointing to background.html which just ran main.js, so now it just points to main.js

main.js
- chrome.contextmenu.create needs to have the key:value pair of id:'string'
- onclick in the contextmenu is now moved to a event listener chrome.contextMenus.onClicked.addListener() which is passed a paramenter which is an array of information



Other Stuff Added:
manifest.json
- I added default popup, default popup icons and and default icons as per https://developer.chrome.com/docs/extensions/mv3/getstarted/

popup.html
- this ran background.js before but that was empty (all commented out) so I changed it to popup.js. the html page will call popup.js every time it comes up!