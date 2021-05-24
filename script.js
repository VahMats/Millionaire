let harc=document.querySelector(".harc");
let mek=document.querySelector(".arajin")
let erku=document.querySelector(".erkrord")
let ereq=document.querySelector(".errord")
let chors=document.querySelector(".chorord")
let body=document.querySelector("body")

let htext=["В какой стране появился и получил своё развитие жанр аниме?", "Что такое манга?", "Как называют фанатов аниме и манги?"]
let pat1=["Вьетнам", "девушка в аниме", "отаку"]
let pat2=["Китай", "национальный японский костюм", "додзинси"]
let pat3=["Япония","рассказ о детстве героев" , "бурито" ]
let pat4=["США","комиксы, по которым снимают аниме" ,"наруто" ]

let h1=document.createTextNode(htext[0])
harc.appendChild(h1)
let p1=document.createTextNode(pat1[0])
mek.appendChild(p1)
let p2=document.createTextNode(pat2[0])
erku.appendChild(p2)
let p3=document.createTextNode(pat3[0])
ereq.appendChild(p3)
let p4=document.createTextNode(pat4[0])
chors.appendChild(p4)


function wrong() {
    crtverj=document.createElement("div");
    crtverj.style="position: absolute;z-index: 10;width: 100%;height: 100%;left: 0;top: 0;background-color: tomato;"
    body.appendChild(crtverj);
}

function win() {
    crtwin=document.createElement("div");
    crtwin.style="position: absolute;z-index: 10;width: 100%;height: 100%;left: 0;top: 0;background-color: green;"
    body.appendChild(crtwin);
}

mek.addEventListener("click",wrong)
erku.addEventListener("click",wrong)
chors.addEventListener("click",wrong)
ereq.addEventListener("click",()=>{
    let h2=document.createTextNode(htext[1])
    harc.appendChild(h2)
    let pp1=document.createTextNode(pat1[1])
    mek.appendChild(pp1)
    let pp2=document.createTextNode(pat2[1])
    erku.appendChild(pp2)
    let pp3=document.createTextNode(pat3[1])
    ereq.appendChild(pp3)
    let pp4=document.createTextNode(pat4[1])
    chors.appendChild(pp4)
    harc.removeChild(h1)
    mek.removeChild(p1)
    erku.removeChild(p2)
    ereq.removeChild(p3)
    chors.removeChild(p4)
    mek.removeEventListener("click",wrong)
    erku.removeEventListener("click",wrong)
    chors.removeEventListener("click",wrong)
    mek.appendChild(pp1)
    erku.appendChild(pp2)
    ereq.appendChild(pp3)
    chors.appendChild(pp4)
    
    mek.addEventListener("click",wrong)
    erku.addEventListener("click",wrong)
    ereq.addEventListener("click",wrong)
    chors.addEventListener("click",()=>{
        let h3=document.createTextNode(htext[2])
        harc.appendChild(h3)
        let ppp1=document.createTextNode(pat1[2])
        mek.appendChild(ppp1)
        let ppp2=document.createTextNode(pat2[2])
        erku.appendChild(ppp2)
        let ppp3=document.createTextNode(pat3[2])
        ereq.appendChild(ppp3)
        let ppp4=document.createTextNode(pat4[2])
        chors.appendChild(ppp4)
        
        chors.appendChild(ppp4)
        harc.removeChild(h2)
        mek.removeChild(pp1)
        erku.removeChild(pp2)
        ereq.removeChild(pp3)
        chors.removeChild(pp4)
        mek.removeEventListener("click",wrong)
        erku.removeEventListener("click",wrong)
        ereq.removeEventListener("click",wrong)
        mek.appendChild(ppp1)
        erku.appendChild(ppp2)
        ereq.appendChild(ppp3)
        chors.appendChild(ppp4)

        
        erku.addEventListener("click",wrong)
        ereq.addEventListener("click",wrong)
        chors.addEventListener("click",wrong)
        mek.addEventListener("click", win);

    })

})










