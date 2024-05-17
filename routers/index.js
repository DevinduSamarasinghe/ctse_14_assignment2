import itemRouter from './router/Item.js';

function routers(app) {
    app.use('/api/item', itemRouter);
    app.get('/',(req,res)=>{
        res.send('CTSE Assignment 2 - Group 14\nMicroservice Running Successfully')
    })
    app.get('/info',(req,res)=>{
        res.send('AWS Configurations:\nVPC: 2 Private and Public Subnets with One NAT Gateway\n\tNAT GATEWAY:ap-south-1a\nCLUSTER: Created Cluster with all subnets\n\tASG-CONFIG: Launch Template updated.Network updated to only instantiate from ap-south-1b\nService: Service Subnets private: ap-south-1b(same as ASG configuration) public: NAT gateway')
    })
}

export default routers;