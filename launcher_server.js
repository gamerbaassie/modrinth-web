// Local bridge: lets a GitHub Pages frontend request a Windows Minecraft launch.
// Run with: node server.js
const http=require('http');const {exec}=require('child_process');
const PORT=47521;
const server=http.createServer((req,res)=>{
 res.setHeader('Access-Control-Allow-Origin','*');res.setHeader('Access-Control-Allow-Headers','Content-Type');res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
 if(req.method==='OPTIONS'){res.writeHead(204);return res.end()}
 if(req.method==='GET'&&req.url==='/health'){res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify({ok:true}))}
 if(req.method==='POST'&&req.url==='/launch'){
  let body='';req.on('data',d=>body+=d);req.on('end',()=>{let data={};try{data=JSON.parse(body)}catch{}
   const command=(data.command||'minecraft://').trim();
   // Safe default: open the registered Minecraft URI. For a custom executable,
   // set the command in the website settings and review it before use.
   const toRun=command==='minecraft://'?'start "" "minecraft://"':command;
   exec(toRun,{windowsHide:false},err=>{res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:!err,message:err?'Could not start Minecraft. Check the command in Settings.':`Launch requested for ${data.name||'Minecraft'}.`}))});
  });return;
 }
 res.writeHead(404);res.end('Not found');
});
server.listen(PORT,'127.0.0.1',()=>console.log(`Minecraft bridge listening on http://127.0.0.1:${PORT}`));
