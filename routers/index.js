import itemRouter from './router/Item.js';

function routers(app) {
    app.use('/api/item', itemRouter);
    app.get('/',(req,res)=>{
        res.send('CTSE Assignment 2 - Group 14\nMicroservice Running Successfully')
    })
    app.get('/info',(req,res)=>{
        const info = {
            id: 'AWS CONFIGURATIONS',
            conf: {
                VPC: {
                    id: "ctse-nat-vpc",
                    conf: "2 private and public subnets with 1 NAT Gateway",
                    nat_gateway: "ap-south-1a",
                    subnets: "ap-south-1a pub, ap-south-1b pub, ap-south-1a priv, ap-south-1b priv"
                },
                CLUSTER: {
                    vpc: "ctse-nat-vpc",
                    conf: "Created cluster with all subnets of above vpc",
                    asg_conf: "Launch template updated. Network updated to only instantiate from ap-south-1b private"
                },
                SERVICE: {
                    conf: "Assigned subnets have private subnet of the asg_conf and public NAT gateway",
                    vpc: "ctse-nat-vpc",
                    subnets: "ap-south-1b priv, ap-south-1a pub"
                }
            }
        }
        res.json(info).status(200)
    })
}

export default routers;