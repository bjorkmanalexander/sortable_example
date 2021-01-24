class Component {
    constructor(props) {
        const { 
            children = null, 
            className,
            text = null 
        } = props;
        this.children = children;
        this.className = className;
        this.text = text;
    }

    setChildren() {
        if (typeof(this.children) === 'string') { return this.children; }
        return this.children.join(' ');
    }

    setTitle(text) {
        const { type, message } = text;
        return `<${type}>${message}</${type}>`;
    }

    render() {
        return `
            <div class="${this.className}">
                ${this.text ? this.setTitle(this.text) : ''}
                ${this.children ? this.setChildren() : ''}
            </div>
            `
    }
}

module.exports = {
    Component
}