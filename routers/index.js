import itemRouter from './router/Item.js';

function routers(app) {
    app.use('/api/item', itemRouter);
}

export default routers;