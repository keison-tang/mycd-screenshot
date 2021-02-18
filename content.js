chrome.runtime.onMessage.addListener(gotMessage);

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







}

