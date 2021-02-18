# mycd-screenshot

Screenshots main message in online viewers of myCountdown emails 

Images in email have to be from same origin i.e onecard.onlineviewer.co.nz otherwise they won't show up in canvas render. Implement CORS proxy and enable in html2canvas options to load cross origin images.

Replaces card numbers with 123456789 to hide PII

method 1
- screenshot full page
- then crop element using dimensions

method 2
- render element to canvas
- export to image

ampersands & not working in regex for some reason

https://developer.chrome.com/docs/extensions/mv2/manifest/web_accessible_resources/

https://medium.com/fredwong-it/html2canvas-does-not-render-images-located-in-the-element-dedfbae3fac5