function menu(elem){
    // console.log(elem.parentElement.nodeName)
    const parent = elem.parentElement
    // console.log(parent.childNodes[3])
    const list = parent.childNodes[3];
    if(list.classList.contains("hidden")){
        list.classList.remove("hidden")
    }
    else if(!list.classList.contains("hidden")){
        list.classList.add("hidden")
    }
    list.removeAttribute("style");
}