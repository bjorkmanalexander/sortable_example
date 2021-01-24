import './sass/styles.scss';
document.addEventListener('DOMContentLoaded', () => {
    const { render } = require('./app');
    const app = document.getElementById('app');
    render(app);
});