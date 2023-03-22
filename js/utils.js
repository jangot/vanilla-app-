function el(name, content = '') {
    const element = document.createElement(name);
    element.innerHTML = content;

    return element;
}
