import itemRouter from './router/Item.js';

function routers(app) {
    app.use('/api/item', itemRouter);
    app.get('/',(req,res)=>{
        res.send('CTSE-Assignment-2 Group-14')
    })
}

export default routers;