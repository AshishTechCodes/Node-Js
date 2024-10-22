const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
app.use(express.json());
const Verification =[
    {
        "ID":"ab1234",
        "AssetId":1234,
        "VerificationDate":Date(),
        "Location":"Mumbai",
        "Status":"Passed",
        "Comment":"Safe Material",
        "VerificationMethod":"visual inspection",
        "timestamp":Date(),
    }
]
app.get('/',(req,res)=>{
    res.json(Verification);
});
app.get('/Verification/:ID',(req,res)=>{
    const VerificationID = parseInt(req.params.ID);
    const Verification = Verification.find(v => v.id === VerificationID);
    if(!Verification){
        return res.status(404).send('Verification is not done');
    }
    res.json(Verification);
});
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});