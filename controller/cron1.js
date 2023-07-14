const User = require('../model/users.model');
const cron = require('node-cron');
const admin = require('firebase-admin');
const serviceAccount  = require('../stonks-b66d4-be8791d7d5c7.json');

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24,
    };

cron.schedule('* * * * *',async () =>{
    try{
        // console.log('c1');
        let tokens = []
        const date = moment().format('DD-MM-YYYY')
        const savedUser =  await User.find({
            SubscriptionEndDate:date,
        });
        // console.log(savedUser);
        if (savedUser.length !== 0) {
            for(user of savedUser){

                if (user.firebaseToken == undefined) {
                    continue;
                }
    
                await User.findByIdAndUpdate(user._id,{
                    isBlocked:true,
                    SubscriptionId:'00b00c0000bd0a000f000000',
                    SubscriptionEndDate:'-'
                })
                tokens.push(user.firebaseToken)
                
                
            }
            await savedUser
            const message= {
                notification: {
                    title: 'Nifty Level Tracker',
                    body: 'Subscription End.! ',
                    sound: 'default',
                    image:'https://api.niftyleveltracker.in/public/1689314621436.jpeg'
                    },
                    data: { key1: 'value1', key2: 'value2' }
                }
            
            const  registrationToken = tokens
            const options =  notification_options
            admin.messaging().sendToDevice(registrationToken,message, options)
            .then( response => {
            console.log({msg: "Notification sent successfully"});
            })
            .catch( error => {
                console.log({msg: error});
            });
        }
        console.log(' user Not found');
    }catch(error){
        console.log(error);
    }
})
