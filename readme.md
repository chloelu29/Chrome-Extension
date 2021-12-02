Migrating from Manifest 2 to Manifest 3

manifest.json
- background.page needs to be background.service_worker
- it also needs to point to a js file. It was originally pointing to background.html which just ran main.js, so now it just points to main.js
 - https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/

main.js
- chrome.contextmenu.create needs to have the key:value pair of id:'string'
 - https://stackoverflow.com/questions/67041151/chrome-89-0-4389-114-extension-permissions-manifest-v3
- onclick in the contextmenu is now moved to a event listener chrome.contextMenus.onClicked.addListener() which is passed a paramenter which is an array of information
 - https://stackoverflow.com/questions/44248143/cant-seem-to-get-chrome-contextmenus-onclicked-to-fire-in-chrome-extension



Other Stuff Added:
manifest.json
- I added default popup, default popup icons and and default icons
 - https://developer.chrome.com/docs/extensions/mv3/getstarted/

popup.html
- this ran background.js before but that was empty (all commented out) so I changed it to popup.js. the html page will call popup.js every time it comes up!