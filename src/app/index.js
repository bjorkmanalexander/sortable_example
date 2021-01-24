const { sortable } =  require('./functions');
const { Component } = require('./components/base.component'); 

const render = app => {
    for (let i = 0; i < 3; ++i) {
        const listItems = [];
        for (let j = 0; j < 10; ++j) {
            const listItem = new Component({ className: 'list--item', text: { message: `${[i+1]}.${j}`, type: 'p' } }).render();
            listItems.push(listItem)
        }
        const list = new Component({ children: listItems, className: 'list'}).render();
        const container = new Component({ children: list, className: 'container', text: { message: `List ${[i+1]}`, type: 'h3' } }).render();
        app.insertAdjacentHTML('beforeend', container);
    }
    sortable();
    document.title = 'SortableJS App';
}

module.exports = {
    render
}