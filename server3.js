const http = require('http');
const fs = require('fs');

http.createServer(function(req,res,next){
    console.log('数据来了'+req.url);

                var url = req.url=="/"?'/index':req.url; //这里前端了下，如果是 / ？就让它成为 index : 否则 就是 当前路径

                //console.log('这是没有条件转换之前的路由样子'+'wwww'+req.url+'.html');
                //console.log('这是条件转换之后的路由样子'+'wwww'+url+'.html');

                fs.readFile('wwww'+url+'.html',function(err,data){
                   if(err){
                       res.write('404');
                   }else{
                       res.write(data);

                   }
                    res.end();



                });


}).listen(8181,function(){
    console.log('打开端口： localhost:8181')
})