
//the document which is a div that will hold the cards of posts
const parentDiv = document.getElementById('posts-div');
const button = document.getElementById('test-button');
var arrayOfData = [];

window.onload = async function(){
    try {
        const res = await axios.get('/posts/Night-Club');
        for(let i = 0; i < res.data.length; i++){
            arrayOfData.push(res.data[i])
            //console.log(arrayOfData[i])
        }
        console.log(arrayOfData);
        console.log(arrayOfData.length);
        for(let i = 0; i < arrayOfData.length; i++){
            listCards(arrayOfData[i].title, arrayOfData[i].message, arrayOfData[i].selectedFile);
        }
    }
    catch (error) {
        console.error(error)
    }
}

function listCards(hdr, prgrph, imgsrc){
    const colParent = document.createElement('div');
    colParent.classList.add("col-md-4")

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card")
    cardDiv.id = "card-no1";

    const cardImg = document.createElement("img")
    cardImg.classList.add("card-img-top");
    cardImg.src = imgsrc;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    const header = document.createElement("h4");
    header.classList.add("card-title");
    header.style = "color: #fff;"
    header.innerHTML= hdr;

    const paragraph = document.createElement("p");
    paragraph.classList.add("card-text");
    paragraph.style = "color: #fff;"
    paragraph.innerText = prgrph;

    const space1 = document.createElement("br");
    const space2 = document.createElement("br");

    const href1 = document.createElement("a");
    href1.classList.add("btn","btn-info");
    href1.innerText = "Learn More"
    href1.href="#"
    
    cardBody.appendChild(header);
    cardBody.appendChild(paragraph);
    cardBody.appendChild(space1);
    cardBody.appendChild(space2);
    cardBody.appendChild(href1);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardBody);
    colParent.appendChild(cardDiv);
    parentDiv.appendChild(colParent);
};

//parentDiv.addEventListener("load", getData);
