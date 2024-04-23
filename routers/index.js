import adminRouter from './router/Admin.js';
import itemRouter from './router/Item.js';


function routers(app) {
    app.use('/api/admin', adminRouter);
    app.use('/api/item', itemRouter);
}

export default routers;