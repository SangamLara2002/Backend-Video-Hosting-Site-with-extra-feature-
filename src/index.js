import express from 'express'
const app = express();
const port = 3000;
app.get('/',(req,res) =>{
    res.send("ncsdncsjo");
})
app.listen(port,()=>{
    console.log(`Srever is listening on port ${port}`);
});