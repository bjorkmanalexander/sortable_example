const { sortable } =  require('./functions');
const { Component } = require('./components/base.component'); 

const render = app => {
    const listItems = [];
    for (let i = 0; i < 5; ++i) {
        const listItem = new Component({ className: 'list--item', text: { title: `derp ${[i+1]}`, type: 'p' } }).render();
        listItems.push(listItem)
    }
    const list = new Component({ children: listItems, className: 'list'}).render();
    for (let i = 0; i < 3; ++i) {
        const container = new Component({ children: list, className: 'container', text: { title: `List ${[i+1]}`, type: 'h3' } }).render();
        app.insertAdjacentHTML('beforeend', container);
    }
    sortable();
}

module.exports = {
    render
}