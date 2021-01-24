const { Sortable, MultiDrag } = require('sortablejs');

const sortable = () => {
    Sortable.mount(new MultiDrag());
    const lists = document.querySelectorAll('.list');
    console.log(lists);
    for (let i = 0; i < lists.length; ++i) {
        new Sortable(lists[i], {
            animation: 150,
            fallbackTolerance: 3,
            ghostClass: 'ghost',
            group: 'shared',
            multiDrag: true,
            multiDragKey: 'ctrl',
            selectedClass: 'selected'
        });
    }
}

module.exports = {
    sortable
}