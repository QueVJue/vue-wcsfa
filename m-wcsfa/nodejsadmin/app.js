//1:加载对应模块
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");        //处理post请求
const cookieParser = require("cookie-parser");    //session
const expressSession = require("express-session");//session
const cors = require("cors");                      //cors
const pool = require("./pool");
//2:引用连接池
//3:创建express 对象
var app = express();
var server = http.createServer(app);
server.listen(3000);
//4:配置第三方模块
//4.1:配置跨域模块
//origin 允许来自哪个域名下跨域访问
app.use(cors({
    origin:["http://127.0.0.1:8080"],
    credentials:true
}));
//4.2:post  req.body.uname
app.use(bodyParser.urlencoded({extended:false}));
//4.3:cookie/session
app.use(cookieParser("teducn"));
app.use(expressSession({
    resave:true,           //每次请求是否重新设置session
    saveUninitialized:true,//每次请求是否设置cookie
    secret:"teducn",       //https加密码传输，密钥
    cookie:{maxAge:60 * 1000 * 30} //过期时间 毫秒
}));
//5:指定静态资源目录  public

//模块一:登录
//get /adminlogin   uname upwd
app.get("/login",(req,res)=>{
    //console.log(req.session.uid);
    //1:获取参数
    //resave=true;
    var u = req.query.uname;
    var p = req.query.upwd;
    //console.log(1);
    //console.log(u+"_"+p);
    //2:正则表达式验证
    var reg = /^[a-z0-9\u4E00-\u9FA5]{3,12}$/i;
    if(!reg.test(u)){
        //console.log(2);
        res.json({code:-1,msg:"用户名格式不正确"});
        return;
    }
    //console.log(3);
    if(!reg.test(p)){
        //console.log(4);
        res.json({code:-2,msg:"密码格式不正确"});
        return;
    }
    //console.log(5);
    //3:获取连接
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        //4:创建sql语句并且发送sql获取返回结果
        var sql = " SELECT uid FROM sf_user";
        sql +=    " WHERE uname = ? AND upwd = ?";
        conn.query(sql,[u,p],(err,result)=>{
            if(err)throw err;
            if(result.length>0){
                //获取uid值,保存session
                req.session.uid = result[0].uid;
                var uid = req.session.uid;
                res.json({code:1,msg:"登录成功"});
            }else{
                res.json({code:-3,msg:"用户名或密码有误"});
            }
          conn.release();
        });
        //5:返回 json
        //6如果登录保存 uid session

    });
});
//console.log(session.uid);

//模块二:用户分页显示
//get /userlist
//json pno:1,pageSize:8,pageCount:6,data:[...]
app.get("/userlist",(req,res)=>{
    //1:获取参数 pno  pageSize
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    //console.log(1);
    //console.log(pno+":"+pageSize);
    //2:验证正确参数
    var reg = /^[0-9]{1,}$/;
    if(!reg.test(pno)){
        //console.log(2);
        res.json({code:-1,msg:"页码参数不正确"});
        return;
    }
    if(!reg.test(pageSize)){
        //console.log(3);
        res.json({code:-2,msg:"页大小值不正确"});
        return;
    }
    //console.log(4);
    //console.log(pno+":"+pageSize);
    // 3:判断如果pno<1      初始值1
    //   判断如果pageSize<1 初始值8
    var process = 0; //二个数值获取到 ==100
    var output = {pno:pno,pageSize:pageSize};
    // 4:获取连接 总记录数     发送ok 0
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql = "SELECT count(uid) as c FROM sf_user";
        conn.query(sql,(err,result)=>{
            if(err)throw err;
            output.pageCount = Math.ceil(result[0].c/pageSize);
            process+= 50;        //当前进度值+50
            if(process==100){    //二条sql都执行完成
                res.json(output);//发送最终结果
            }
            conn.release();     //归还连接
        })
    });
    // 5:获取连接 当前页内容   发送ok
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var offset = parseInt((pno-1)*pageSize);
        pageSize = parseInt(pageSize );
        var sql = " SELECT uid,uname,phone,email FROM sf_user";
        sql += " LIMIT ?,?";
        conn.query(sql,[offset,pageSize],(err,result)=>{
            if(err)throw err;
            output.data = result;  //当前页内容
            process += 50;         //当前进度+50
            if(process==100){      //二条sql都执行完成
                res.json(output);  //发送
            }
            conn.release();        //归还连接
        });
    });
    // 6:发送 pno/pageSize/pageCount/data
});

//模块三:删除指定用户
//get /userdel
//1:获取get请求 /userdel
app.get("/userdel",(req,res)=>{
    //2:获取用户编号
    var uid = req.query.uid;
    var reg = /^[0-9]{1,}$/;
    if(!reg.test(uid)){
        res.json({code:-1,msg:"参数有误"});
        return;
    }
    //3:获取连接池中连接
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        uid = parseInt(uid);
        //4:创建sql语句  DELETE FROM xz_user WHERE uid=?
        var sql = "DELETE FROM sf_user WHERE uid=?";
        conn.query(sql,[uid],(err,result)=>{
            if(err)throw err;
            //5:判断结果是否正确 json
            if(result.affectedRows>0){
                res.json({code:1,msg:"删除成功"});
            }else{
                res.json({code:-1,msg:"删除失败"});
            }
        });
    });
});
//模块四:显示用户详细
//get /userdetail
app.get("/userdetail",(req,res)=>{
    //1:获取用户编号 uid
    var uid = req.query.uid;
    //2:创建正则表达式验证
    var reg = /^[0-9]{1,}$/;
    if(!reg.test(uid)){
        res.json({code:-1,msg:"参数有误"});
        return;
    }
    uid = parseInt(uid);
    //3:获取连接
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        //4:创建sql语句并且执行sql语句
        var sql = " SELECT uid,uname,phone,email,avatar";
        sql+= " FROM sf_user WHERE uid = ?";
        //5:获取返回结果
        conn.query(sql,[uid],(err,result)=>{
            if(err)throw err;
            //6:发送json
            res.json(result[0]);
        })
    })
});

//模块五:更新指定用户 密码
app.post("/userupdate",(req,res)=>{
    //1:获取参数 uid upwd
    var uid = req.body.uid;
    var upwd = req.body.upwd;
    //2:正则表达式验证
    var reguid = /^[0-9]{1,}$/;
    var regupwd = /^[a-z0-9]{3,12}$/i;
    if(!reguid.test(uid)){
        res.json({code:-1,msg:"用户编号参数不正确"});
        return;
    }
    if(!regupwd.test(upwd)){
        res.json({code:-1,msg:"密码参数不正确"});
        return;
    }
    //3:造型 uid
    uid = parseInt(uid);
    //4:获取连接
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql = "UPDATE sf_user SET upwd=? WHERE uid=?";
        //5:创建sql语句并且执行sql语句
        conn.query(sql,[upwd,uid],(err,result)=>{
            //6:判断并且获取返回结果
            if(err)throw err;
            if(result.affectedRows>0){
                res.json({code:1,msg:"更新成功"});
            }else{
                res.json({code:-1,msg:"更新失败"});
            }
            conn.release();
        });

    })
});

//用户搜索
//用户搜索  用户名称
app.get("/usersearch",(req,res)=>{
    //1:获取用户输入用户名
    var uname = req.query.uname;
    //2:正则表达式验证
    var reg = /^[a-z0-9]{1,12}$/i;
    if(!reg.test(uname)){
        res.json({code:-1,msg:"用户名参数有误"});
        return;
    }
    //3:创建sql语句 SELECT uid,uname,email FROM xz_user
    //              WHERE uname LIKE ?
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql =  " SELECT uid,uname,email";
        sql += " FROM sf_user WHERE uname LIKE ?";
        //4:发送sql语句
        conn.query(sql,[`%${uname}%`],(err,result)=>{
            //5:并且获取返回结果 json
            if(err)throw err;
            res.json(result);
            conn.release();
        });
    })
});


//验证注册账号是否存在
app.get("/exist",(req,res)=>{
    var u = req.query.uname;
    //var reg = /^(\+86|0086)?\s*1[34578]\d{9}$/;
    //console.log(req);
    //console.log(u);

  pool.getConnection((err,conn)=>{
        if(err)throw err;
        if(u){

            var sql = "SELECT * FROM sf_user WHERE uname=?";
          //console.log(sql)
            conn.query(sql,[u],function(err,result){
                //console.log(result);

                if(err) throw err;
                //console.log(u)
                //console.log(result);
                if(result==''){

                    res.json({code:-1,msg:"账号可用"});
                    return;
                }

                if(result[0].uname==u) {
                    res.json({code:1, msg:"账号已存在"});
                    return;
                }

                conn.release();
            });
        }
    })
});

//注册账号
app.get("/register",(req,res)=>{
  //console.log(req.query);
    let u = req.query.uname;
    let p = req.query.upwd;
    let e = req.query.email;

    //console.log(req.session);
pool.getConnection((err,conn)=>{
    if(err)throw err;
    var sql = "INSERT INTO sf_user VALUES(NULL,?,?,?,NULL,NULL,NULL,NULL)";
    //console.log(sql);
    conn.query(sql,[u,p,e],(err,result)=>{
      //console.log(result);
        if(err)throw err;
        if(result !==''){

          res.json({code:-1,msg:"ok"});
          return;
        }
        conn.release();
        })
    })
});

//账号登录状态
app.get("/islogin",(req,res)=>{

    var uid = req.session.uid;
 pool.getConnection((err,conn)=>{
        if(err)throw err;
        if(uid == undefined){
            //console.log(1+":"+uid);
            res.json({code:-1,msg:0});
            conn.release();
        }else{
            let sql = "SELECT uname FROM sf_user WHERE uid=?";
            conn.query(sql,[uid],(err,conn)=>{
              let row = conn[0].uname;
              console.log(row);

                //console.log(2+":"+uid);
              res.json({ok:1,uname:row});

            });
          conn.release();
        }

    })
});

//index主页焦点数据
app.get("/showbox",(req,res)=>{
  let page = parseInt(req.query.page);
  let pagesize = parseInt(req.query.pagesize);
  let box = [];
  let process = 0;

  pool.getConnection((err,conn)=>{
      //console.log(conn);
      if(err)throw err;
      let sql = " SELECT bdtitle FROM sf_base_dynamic";
      sql += " LIMIT ?,?";
      conn.query(sql,[page,pagesize],(err,result)=>{
        if(err)throw err;
        //box.push(result);

         //showBox = [],
         //let showBox = result[0];
        //console.log(showBox)
        box[0]=[]
        for(i=0; i<result.length; i++){
            box[0].push(result[i].bdtitle);
        }
        process +=50;
        if(process==150){
        res.json(box);
        }
        conn.release();
      })

    })
  pool.getConnection((err,conn)=>{

    if(err)throw err;
    let sql = " SELECT otitle FROM sf_other";
    sql += " LIMIT ?,?";
    conn.query(sql,[page,pagesize],(err,result)=>{
      if(err)throw err;

      box[1]=[]
      for(i=0; i<result.length; i++){
        box[1].push(result[i].otitle);
      }

      //box.push(result);
      process +=50;
      if(process==150){
        res.json(box);

      }

      conn.release();
    })

  })
  pool.getConnection((err,conn)=>{

    if(err)throw err;
    let sql = " SELECT ustitle FROM sf_unreal_smell";
    sql += " LIMIT ?,?";
    conn.query(sql,[page,pagesize],(err,result)=>{
      if(err)throw err;
      box[2]=[]
      for(i=0; i<result.length; i++){
        box[2].push(result[i].ustitle);
      }
      //box.push(result);
      process +=50;
      if(process==150){
          res.json(box);
        //console.log(box)
      }
      conn.release();
    })

  })

})

//index主页焦点数据
app.get("/SBox",(req,res)=>{

  pool.getConnection((err,conn)=>{
    if(err)throw err;
    let sql = "SELECT img,title,href,class,text FROM sf_index_carousel";
    conn.query(sql,(err,result)=>{
      if(err)throw err;
      res.json(result)
      conn.release();
    })

  })
})

//inde/scfbox科幻盒子轮播
app.get("/unreal",(req,res)=> {
  let page = parseInt(req.query.page);
  let pagesize = parseInt(req.query.pagesize);
  let box = [];
  let process = 0;
  let i = 0
  let j = 0

  pool.getConnection((err, conn)=> {
    if (err)throw err;
    let sql = "SELECT uspic,ustitle,ustext,ustime FROM sf_unreal_smell LIMIT ?,?";
    conn.query(sql, [page, pagesize], (err, result)=> {
      if (err)throw err;

      box[0] = []
      for (i = 0; i < result.length; i++) {
        box[0][i] = []
        box[0][i].push(
          result[i].uspic,
          result[i].ustitle,
          result[i].ustext,
          result[i].ustime);
      }

      process += 50;
      if (process == 250) {
        res.json(box);
      }
      conn.release();

    })
  })
  pool.getConnection((err, conn)=> {
    if (err)throw err;
    let sql = "SELECT cpic,ctitle,ctext,ctime FROM sf_comment LIMIT ?,?";
    conn.query(sql, [page, pagesize], (err, result)=> {
      if (err)throw err;
      box[1] = []
      for (i = 0; i < result.length; i++) {
        box[1][i] = []
        box[1][i].push(
          result[i].cpic,
          result[i].ctitle,
          result[i].ctext,
          result[i].ctime);

      }
      process += 50;
      if (process == 250) {
        res.json(box);
      }
      conn.release();

    })
  })
  pool.getConnection((err, conn)=> {
    if (err)throw err;
    let sql = "SELECT mpic,mtitle,mtext,mtime FROM sf_masterpiece LIMIT ?,?";
    conn.query(sql, [page, pagesize], (err, result)=> {
      if (err)throw err;

      box[2] = []
      for (i = 0; i < result.length; i++) {
        box[2][i] = []

        box[2][i].push(
          result[i].mpic,
          result[i].mtitle,
          result[i].mtext,
          result[i].mtime);
      }
      process += 50;
      if (process == 250) {
        res.json(box);
      }
      conn.release();
    })
  })
  pool.getConnection((err, conn)=> {
    if (err)throw err;
    let sql = "SELECT dimg,dtitle,dtext,dtime FROM sf_dissertation LIMIT ?,?";
    conn.query(sql, [page, pagesize], (err, result)=> {
      //console.log(result)

      box[3] = []
      for (i = 0; i < result.length; i++) {
        box[3][i] = []
        box[3][i].push(
          result[i].dimg,
          result[i].dtitle,
          result[i].dtext,
          result[i].dtime);
      }
      process += 50;
      if (process == 250) {
        res.json(box);
      }
      conn.release();
    })


  })
  pool.getConnection((err, conn)=> {
    if (err)throw err;
    let sql = "SELECT opic,otitle,otext,otime FROM sf_other LIMIT ?,?";
    conn.query(sql, [page, pagesize], (err, result)=> {
      //console.log(result)

      box[4] = []
      for (i = 0; i < result.length; i++) {
        box[4][i] = []
        box[4][i].push(
          result[i].opic,
          result[i].otitle,
          result[i].otext,
          result[i].otime);
      }
      process += 50;
      if (process == 250) {
        res.json(box);
      }
      conn.release();

    })

  })

})

//index/scfbox小轮播
app.get("/label",(req,res)=>{
  let box=[];
  let less = parseInt(req.query.less);
  let more = parseInt(req.query.more);

  pool.getConnection((err,conn)=>{
    if(err)throw err;
    let sql = "SELECT lname,lher FROM sf_label WHERE lid BETWEEN ? AND ?";
    conn.query(sql,[less,more],(err,result)=>{
      box=result;
      res.json(box);
      conn.release();
    })

  })
})


//index/foundation
app.get("/foundation",(req,res)=>{
  let box=[];
  let process = 0;
  let i = 0;
  let label = []
  pool.getConnection((err,conn)=>{
    if(err)throw err;
    let sql = "SELECT bopic,botitle,botext FROM sf_base_original LIMIT 0,4";
    conn.query(sql,(err,result)=>{
      box[0] = []
      for (i = 0; i < result.length; i++) {
        box[0][i] = []
        box[0][i].push(
          result[i].bopic,
          result[i].botitle,
          result[i].botext);
      }
      process += 50;
      if (process == 150) {
        res.json(box);
      }
      conn.release();
    })
  });
  pool.getConnection((err,conn)=>{
    if(err)throw err;
    let sql = "SELECT brimg,brtitle,brtext FROM sf_base_organization LIMIT 0,4";
    conn.query(sql,(err,result)=>{
      box[1] = []
      for (i = 0; i < result.length; i++) {
        box[1][i] = []
        box[1][i].push(
          result[i].brimg,
          result[i].brtitle,
          result[i].brtext);
      }
      process += 50;
      if (process == 150) {
        res.json(box);
      }
      conn.release();
    })
  });
  pool.getConnection((err,conn)=>{
    if(err)throw err;
    let sql = "SELECT bdpic,bdtitle,bdtext FROM sf_base_dynamic LIMIT 0,4";
    conn.query(sql,(err,result)=>{
      box[2] = []
      for (i = 0; i < result.length; i++) {
        box[2][i] = []
        box[2][i].push(
          result[i].bdpic,
          result[i].bdtitle,
          result[i].bdtext);
      }
      process += 50;
      if (process == 150) {
        res.json(box);
      }
      conn.release();
    })
  });

//
//  pool.getConnection((err,conn)=>{
//    if(err)throw err;
//
//    conn.query(sql,(err,result)=>{
//      box[3] = result
//      process += 50;
//      if (process == 200) {
//        res.json(box);
//      }
//      conn.release()
//    })
//  })
})
