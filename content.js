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

function gotMessage(message,sender,sendresponse)
{
    console.log(message.txt);
    let paragraphs = document.getElementsByTagName("p");
    for(elt of paragraphs)
    {
        elt.style['background-color'] = "#00CED1";
    }

    // let divs = document.getElementsByTagName("table");
    // for (div of divs)
    // {
    //     div.style['background-color'] = '#FF0000';
    // }

    // Replace card numbers - numbers starting with 9480 or 9481
    document.body.innerHTML = document.body.innerHTML.replace(/948[0-1][0-9]+/g,'123456789');

    // Replace cross origin images with web acessible resources
    let fuelImg = chrome.runtime.getURL("images/fuel.jpeg");
    let signatureImg = chrome.runtime.getURL("images/signature.png");

    //let testurl = "http://alphabet.eid.co.nz/StoreManagerSignatureImage.ashx?signature=Test";

    document.body.innerHTML = document.body.innerHTML.replace(/https:\/\/image-personalisation.eid.co.nz\/FuelPointsBalance\/[a-zA-Z0-9]+/g, fuelImg);
    document.body.innerHTML = document.body.innerHTML.replace(/http:\/\/alphabet.eid.co.nz\/StoreManagerSignatureImage.ashx\?signature=.+fc=323232/g, signatureImg);

    //http://alphabet.eid.co.nz/StoreManagerSignatureImage.ashx?signature=Paul&bg=FFFFFF&fc=323232

    //console.log(fuelImg);
    //console.log(signatureImg);



    // let header = document.evaluate(
    //     "/html/body/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[position() < 3]"
    //     , document
    //     , null
    //     , XPathResult.FIRST_ORDERED_NODE_TYPE
    //     , null    
    // ).singleNodeValue;

    // let intro = document.evaluate(
    //     "/html/body/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[2]"
    //     , document
    //     , null
    //     , XPathResult.FIRST_ORDERED_NODE_TYPE
    //     , null    
    // ).singleNodeValue;

    let outroXPath = "/html/body/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[3]";
    let outro = getElementByXPath(outroXPath);

    // Hide outro
    if (outro != null) outro.style['display'] = "none";

    let headerCellXPath = "/html/body/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td/table/tbody/tr[1]/td";
    let headerCell = getElementByXPath(headerCellXPath);
    
    // Add styling back in that are not part of mainSection node
    headerCell.style['padding'] = '5px 0px 0px 0px';
    headerCell.style['background-color'] = "#125430";


    let mainSection = document.evaluate(
        "/html/body/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td/table/tbody"
        , document
        , null
        , XPathResult.FIRST_ORDERED_NODE_TYPE
        , null    
    ).singleNodeValue;

    //console.log(header);
    //console.log(intro);
    //console.log(outro);


    //let b = el.getBoundingClientRect();
    //console.log(b);


    // html2canvas(header).then(function (canvas) {
    //     document.body.appendChild(canvas);
    // });
    
    html2canvas(mainSection, 
        {
            allowTaing : true,
            useCORS : true
        }
        ).then(function (canvas) {
        document.body.appendChild(canvas);
    });





}

