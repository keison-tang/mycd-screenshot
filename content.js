chrome.runtime.onMessage.addListener(gotMessage);


function getElementByXPath(xpath)
{
    return document.evaluate(
        xpath
        , document
        , null
        , XPathResult.FIRST_ORDERED_NODE_TYPE
        , null    
    ).singleNodeValue;
}

function generateImgFilename()
{
    let d = new Date();
    let s = 'mycd_km_screenshot_';

    s += d.getFullYear() 
        + '‐' + (d.getMonth() + 1).toString().padStart(2, '0')
        + '‐' + d.getDate().toString().padStart(2, '0')
        + '_'
        + d.getHours().toString().padStart(2, '0')
        + '‐' + d.getMinutes().toString().padStart(2, '0')
        + '‐' + d.getSeconds().toString().padStart(2, '0');

    return s;
}

function gotMessage(message,sender,sendresponse)
{
    console.log(message.txt);

    // Replace card numbers - numbers starting with 9480 or 9481
    document.body.innerHTML = document.body.innerHTML.replace(/948[0-1][0-9]+/g,'123456789');

    // Replace cross origin images with web acessible resources
    let fuelImg = chrome.runtime.getURL("images/fuel.jpeg");
    let signatureImg = chrome.runtime.getURL("images/signature.png");
    document.body.innerHTML = document.body.innerHTML.replace(/https:\/\/image-personalisation.eid.co.nz\/FuelPointsBalance\/[a-zA-Z0-9]+/g, fuelImg);
    document.body.innerHTML = document.body.innerHTML.replace(/http:\/\/alphabet.eid.co.nz\/StoreManagerSignatureImage.ashx\?signature=.+fc=323232/g, signatureImg);

    // Hide outro
    let outroXPath = "/html/body/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[3]";
    let outro = getElementByXPath(outroXPath);
    if (outro) 
    {
        outro.style['display'] = "none";
    }

    // Add styling back in that are not part of mainSection node
    let headerCellXPath = "/html/body/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[1]/td";
    let headerCell = getElementByXPath(headerCellXPath);
    if (headerCell) 
    {
        headerCell.style['padding'] = '5px 0px 0px 0px';
        headerCell.style['background-color'] = "#125430";
    }

    // Render main section to canvas
    let mainSectionXPath = "/html/body/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td/table/tbody";
    let mainSection = getElementByXPath(mainSectionXPath);
    
    if (mainSection)
    {
        html2canvas(mainSection,
            {
                allowTaint: true,
                useCORS: true,

                scrollX: -window.scrollX,
                scrollY: -window.scrollY,
                windowWidth: document.documentElement.offsetWidth,
                windowHeight: document.documentElement.offsetHeight
            }
        ).then(function(canvas) {
            //document.body.appendChild(canvas);

            image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
            let link = document.createElement('a');
            link.download = generateImgFilename() + '.png';
            link.href = image;
            link.click();
        });
    } else {
        alert("No message detected - ensure you have a myCountdown email open.");
    }
}