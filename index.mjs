import express from 'express'
import cors from 'cors'

let app = express();
let PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/api/data',(req,res) => {
  res.status(200).json({message : "Data is Fetched" })
})

app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`);
})