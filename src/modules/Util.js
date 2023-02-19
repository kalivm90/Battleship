export const createElements = (type, attr=null, innerHTML=null) => {
    const element = document.createElement(type);
    attr ? Object.keys(attr).forEach(i => {
        element.setAttribute(i, attr[i])
    }) : {};
    innerHTML ? element.innerHTML = innerHTML : {};
    return element
}

export const randomNumber = (range=10) => {
    return Math.floor(Math.random() * range);
}