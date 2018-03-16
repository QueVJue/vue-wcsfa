<template>
    <div id="scfbox" class="section">
      <div class="section_warp">
        <div class="page">
          <div class="page_title">
            <div class="warp clearfix">
              <div class="l">
                <h2>科幻盒子</h2>
                <p>共享最新科幻新闻</p>
              </div>
              <div class="r">
                <ul class="scfbox">
                  <li :class="{'active':index==i}"
                      v-for="(l,index) in label"
                      @click="onSCF(index)">{{l.lname}}</li>
                  <!--<li>评论</li>-->
                  <!--<li>佳作</li>-->
                  <!--<li>专题</li>-->
                  <!--<li>其他</li>-->
                </ul>
              </div>
            </div>
          </div>


          <div class="page_content sfbox warp clearfix">
            <div class="page_list_warp scfbox"
                 style="width: 5610px; position: relative;
                 transition: all 0.5s linear ;"
                 :style="{left:Boxleft+'px'}">

              <div class="page_list" v-for="(item,B) in boxr">
                <div class="news_pic l">
                  <ul style="width: 1698px; position: relative;"
                      :style="{left: lunleft+'px'}">
                    <li v-for="iteml in boxl[B]" >s
                      <a target="_blank" :title="iteml[1]">
                        <img :src="iteml[0]" :alt="iteml[1]" :title="iteml[1]">
                        <span>{{iteml[1]}}</span>
                      </a>
                    </li>
                    <!--<li>-->
                      <!--<a target="_blank" title="如何科学的和人鱼嘿嘿嘿">-->
                        <!--<img src="" alt="如何科学的和人鱼嘿嘿嘿" title="如何科学的和人鱼嘿嘿嘿">-->
                        <!--<span>如何科学的和人鱼嘿嘿嘿</span>-->
                      <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a target="_blank" title="亚瑟•克拉克与艾萨克•阿西莫夫的世纪之战">-->
                        <!--<img src="" alt="亚瑟•克拉克与艾萨克•阿西莫夫的世纪之战" title="亚瑟•克拉克与艾萨克•阿西莫夫的世纪之战">-->
                        <!--<span>亚瑟•克拉克与艾萨克•阿西莫夫的世纪之战</span>-->
                      <!--</a>-->
                    <!--</li>-->
                  </ul>
                  <div class="news_pic_num">
                    <span :class="{'hover':num==k}"
                          v-for="(num,N) in boxl[B]"
                          @click="Num(N+1)"
                      >{{N+1}}</span>
                    <!--<span class="">2</span>-->
                    <!--<span class="">3</span>-->
                  </div>
                </div>
                <ul class="news_list r">
                  <li v-for="itemr in boxr[B]">
                    <span>
                      <em>07</em>{{itemr[3]}}
                    </span>
                    <h3>
                      <a target="_blank" :title="itemr[1]">{{itemr[1]}}</a>
                    </h3>
                    <p>{{itemr[2]}}</p>
                  </li>
                  <!--<li>-->
                    <!--<span><em>10</em>2016/11</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="赛凡科幻空间这周末有什么活动？">赛凡科幻空间这周末有什么活动？</a>-->
                    <!--</h3>-->
                    <!--<p>赛凡科幻空间10月11日-13日所有的活动都在这里了。</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<span><em>12</em>2016/06</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="2016轻年计划复赛名单公布！">2016轻年计划复赛名单公布！</a>-->
                    <!--</h3>-->
                    <!--<p>2016轻年计划复赛名单公布了！</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<span>-->
                        <!--<em>30</em>2016/05-->
                    <!--</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="送你免费去NASA总部要不要？">送你免费去NASA总部要不要？</a>-->
                    <!--</h3>-->
                    <!--<p>-->
                      <!--你说你爱科幻，脑洞穿越整个宇宙，送你去宇航局NASA总部要不要？-->
                    <!--</p>-->
                  <!--</li>-->
                </ul>
                <div class="page_list_foot">
                  <router-link :to="{path:Bmore.lher}"
                          class="btn_more"
                          v-for="(Bmore,index) in label"
                          v-if="index==i"
                    >
                    更多{{Bmore.lname}}
                  </router-link>
                </div>
              </div>

              <!-- 包裹数据-->
              <div>
              <!--<div class="page_list">-->
                <!--<div class="news_pic l">-->
                  <!--<ul style="width: 566px; position: relative; left: 0px;">-->
                    <!--<li>-->
                      <!--<a href="" target="_blank" title="你绝不应该错过的神秘博士">-->
                        <!--<img src="" alt="你绝不应该错过的神秘博士" title="你绝不应该错过的神秘博士">-->
                        <!--<span>你绝不应该错过的神秘博士</span>-->
                      <!--</a>-->
                    <!--</li>-->
                  <!--</ul>-->
                  <!--<div class="news_pic_num">-->
                    <!--<span class="hover">1</span>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<ul class="news_list r">-->
                  <!--<li>-->
                    <!--<span>-->
                        <!--<em>11</em>2016/04-->
                    <!--</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="东南亚作家刮起蒸汽朋克旋风">东南亚作家刮起蒸汽朋克旋风</a>-->
                    <!--</h3>-->
                    <!--<p>这本选集把蒸汽朋克当做一个批判性的、需要高巧才智的项目，而不单单是一种围绕着东南亚的有趣的审美方式</p>-->
                  <!--</li>-->
                  <!--<li>-->
                                        <!--<span>-->
                                            <!--<em>25</em>2016/02-->
                                        <!--</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="三休来了，三体还会远吗？">三休来了，三体还会远吗？</a>-->
                    <!--</h3>-->
                    <!--<p>《三休之火星归来》？《三体》+《火星救援》+《大圣归来》？究竟是什么样的超级大片才能这么炫酷？</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<span><em>01</em>2016/02</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="放弃人机对立：未来是双赢的时代">放弃人机对立：未来是双赢的时代</a>-->
                    <!--</h3>-->
                    <!--<p>放弃人机对立吧，人机协同才能推动社会发展。</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<span><em>15</em>2016/01</span>-->
                    <!--<h3><a href="" target="_blank" title="楚巴卡真的没有变老吗？">楚巴卡真的没有变老吗？</a></h3>-->
                    <!--<p>《星球大战：原力觉醒》中，楚巴卡不仅丝毫没有变老，反而更加面色红润显年轻了，我们似乎忽略了一些很重要的信息……</p>-->
                  <!--</li>-->
                <!--</ul>-->
                <!--<div class="page_list_foot">-->
                  <!--<a href="" class="btn_more">更多评论</a>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="page_list">-->
                <!--<div class="news_pic l">-->
                  <!--<ul style="width: 566px; position: relative; left: 0px;">-->
                    <!--<li>-->
                      <!--<a href="" target="_blank" title="宝树——老公爱我">-->
                        <!--<img src="" alt="宝树——老公爱我" title="宝树——老公爱我">-->
                        <!--<span>宝树——老公爱我</span></a>-->
                    <!--</li>-->
                  <!--</ul>-->
                  <!--<div class="news_pic_num">-->
                    <!--<span class="hover">1</span>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<ul class="news_list r">-->
                  <!--<li>-->
                                        <!--<span>-->
                                            <!--<em>22</em>2015/12-->
                                        <!--</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="柒武——喜丧（下）">柒武——喜丧（下）</a>-->
                    <!--</h3>-->
                    <!--<p>何谓喜丧之“喜”？既是离世者为之欣然，也是在世者为之欢喜，两者缺一不可。</p>-->
                  <!--</li>-->
                  <!--<li>-->
                                        <!--<span>-->
                                            <!--<em>22</em>2015/12-->
                                        <!--</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="柒武——喜丧（上）">柒武——喜丧（上）</a>-->
                    <!--</h3>-->
                    <!--<p>何谓喜丧之“喜”？既是离世者为之欣然，也是在世者为之欢喜，两者缺一不可。-->
                    <!--</p>-->
                  <!--</li>-->
                  <!--<li>-->
                                        <!--<span>-->
                                            <!--<em>21</em>2015/12-->
                                        <!--</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="薄暮——行星采集">薄暮——行星采集</a>-->
                    <!--</h3>-->
                    <!--<p>“那……那些走了的人还会回来么？我也想坐会飞的船到天上玩！”多多望着天空，出了神。 “一定会的。”</p>-->
                  <!--</li>-->
                  <!--<li>-->
                                        <!--<span>-->
                                            <!--<em>06</em>2015/11-->
                                        <!--</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="无奖——太空异闻录（下）">无奖——太空异闻录（下）</a>-->
                    <!--</h3>-->
                    <!--<p>我早该想到的：这里的星球在六亿年前被胖子一飞船撞散，可六亿年后的世界里我又好端端生活着——这本来就足够说明问题……</p>-->
                  <!--</li>-->
                <!--</ul>-->
                <!--<div class="page_list_foot">-->
                  <!--<a href="" class="btn_more">更多佳作</a>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="page_list">-->
                <!--<div class="news_pic l">-->
                  <!--<ul style="width: 2264px; position: relative; left: -1132px;">-->
                    <!--<li>-->
                      <!--<a href="" target="_blank" title="陈楸帆——未来病史">-->
                        <!--<img src="" alt="陈楸帆——未来病史" title="陈楸帆——未来病史">-->
                        <!--<span>陈楸帆——未来病史</span>-->
                      <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a href="" target="_blank" title="科幻电影之熊喷2015">-->
                        <!--<img src="" alt="科幻电影之熊喷2015" title="科幻电影之熊喷2015">-->
                        <!--<span>科幻电影之熊喷2015</span>-->
                      <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a href="" target="_blank" title="科幻电影之熊喷2014">-->
                        <!--<img src="" alt="科幻电影之熊喷2014" title="科幻电影之熊喷2014">-->
                        <!--<span>科幻电影之熊喷2014</span>-->
                      <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a href="" target="_blank" title="专题-梁清散散聊科幻">-->
                        <!--<img src="" alt="专题-梁清散散聊科幻" title="专题-梁清散散聊科幻">-->
                        <!--<span>专题-梁清散散聊科幻</span>-->
                      <!--</a>-->
                    <!--</li>-->
                  <!--</ul>-->
                  <!--<div class="news_pic_num">-->
                    <!--<span class="">1</span>-->
                    <!--<span class="">2</span>-->
                    <!--<span class="hover">3</span>-->
                    <!--<span class="">4</span>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<ul class="news_list r">-->
                  <!--<li>-->
                    <!--<span><em>26</em>2016/01</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="次元壁的漏洞">次元壁的漏洞</a>-->
                    <!--</h3>-->
                    <!--<p>再一次来到里加，我没能赶上拉脱维亚人幻想圈的野餐​，却赶上了俄罗斯人主办的Unicon，</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<span><em>08</em>2015/12</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="《无尽天空下》——英美短篇科幻市场巡礼之五">《无尽天空下》——英美短篇科幻市场巡礼之五</a>-->
                    <!--</h3>-->
                    <!--<p>安德鲁森自己创办了一份杂志《无尽天空下》，专门发奇幻小说</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<span><em>07</em>2015/12</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="《格兰特维尔公报》——英美短篇科幻市场巡礼之四">《格兰特维尔公报》——英美短篇科幻市场巡礼之四</a>-->
                    <!--</h3>-->
                    <!--<p>正是这部看似普通的穿越历史小说却在其后的十多年里传奇不断。除连出十多部官方续集外，还衍生出海量的同人创作，乃至发展出一份专业的同人杂志《格兰特维尔公报》</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<span><em>26</em>2015/11</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="科幻作家盛赞《火星救援》乐观光明">科幻作家盛赞《火星救援》乐观光明</a>-->
                    <!--</h3>-->
                    <!--<p>11月25日，IMAX在北京联合20世纪福斯电影和科幻星云网举行“太空科幻电影——IMAX3D《火星救援》观影交流会”。-->
                      <!--著名科幻作家吴岩、陈楸帆、阿缺与微博著名影评人“电子骑士”严蓬受科幻星云网之邀出席活动。-->
                    <!--</p>-->
                  <!--</li>-->
                <!--</ul>-->
                <!--<div class="page_list_foot">-->
                  <!--<a href="" class="btn_more">更多专题</a>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="page_list">-->
                <!--<div class="news_pic l">-->
                  <!--<ul style="width: 1698px; position: relative; left: -566px;">-->
                    <!--<li>-->
                      <!--<a href="" target="_blank" title="光剑拆解指南（附图纸）">-->
                        <!--<img src="" alt="光剑拆解指南（附图纸）" title="光剑拆解指南（附图纸）">-->
                        <!--<span>光剑拆解指南（附图纸）</span>-->
                      <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a href="" target="_blank" title="贵圈真乱：科幻作家何苦难为科幻作家">-->
                        <!--<img src="" alt="贵圈真乱：科幻作家何苦难为科幻作家" title="贵圈真乱：科幻作家何苦难为科幻作家">-->
                        <!--<span>贵圈真乱：科幻作家何苦难为科幻作家</span>-->
                      <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a href="" target="_blank" title="足够先进的科技与魔法无异">-->
                        <!--<img src="" alt="足够先进的科技与魔法无异" title="足够先进的科技与魔法无异">-->
                        <!--<span>足够先进的科技与魔法无异</span>-->
                      <!--</a>-->
                    <!--</li>-->
                  <!--</ul>-->
                  <!--<div class="news_pic_num">-->
                    <!--<span class="">1</span>-->
                    <!--<span class="hover">2</span>-->
                    <!--<span class="">3</span>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<ul class="news_list r">-->
                  <!--<li>-->
                    <!--<span><em>26</em>2016/04</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="比切尔诺贝利恐怖百倍：核弹丢了">比切尔诺贝利恐怖百倍：核弹丢了</a>-->
                    <!--</h3>-->
                    <!--<p>比切尔诺贝利事故还要恐怖的是，一颗360万吨当量的氢弹被“扔”在了美国……</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<span><em>14</em>2016/04</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="科幻奇幻作品中的泰坦尼克号">科幻奇幻作品中的泰坦尼克号</a>-->
                    <!--</h3>-->
                    <!--<p>科幻迷之间友谊的小船不会说翻就翻，但是科幻中所有的泰坦尼克一定会说翻就翻</p>-->
                  <!--</li>-->
                  <!--<li> <span><em>22</em>2016/01</span>-->
                    <!--<h3><a href="" target="_blank" title="欧比旺——一个专克飞船的绝地武士">欧比旺——一个专克飞船的绝地武士</a></h3>-->
                    <!--<p>一本正经的话说八道: 欧比旺绝对是克飞船的命。-->
                    <!--</p>-->
                  <!--</li>-->
                  <!--<li> <span><em>20</em>2016/01</span>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="光剑拆解指南（附图纸）">光剑拆解指南（附图纸）</a>-->
                    <!--</h3>-->
                    <!--<p>光剑，绝地武士和西斯的武器，优雅而强大，是每个星战迷都梦寐以求的武（deng）器（guan），如果，拆了呢？-->
                    <!--</p>-->
                  <!--</li>-->
                <!--</ul>-->
                <!--<div class="page_list_foot">-->
                  <!--<a href="" class="btn_more">更多其它</a>-->
                <!--</div>-->
              <!--</div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import  OnLabel from '../../assets/js/reusing.js'
  export default {
    name: 'ScfBox',
    data:function(){
      return{
        page:null,
        pagesize:null,
        i:0,
        k:1,
        boxr:[],
        boxl:[],
        label:[],
        Boxleft:null,    //大盒子
        lunleft:null     //大盒子里面的小轮播图
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.scfboxr();
        this.scfboxl();
        this.scflabel();
        this.a();
      });
    },
    methods:{
      //封装reusing.js 重用
      onSCF:function(e){
        var {Boxleft,i}=OnLabel.OnLabel(e)
        this.Boxleft=Boxleft
        this.i=i
      },

      //右边盒子
      scfboxr:function(){
        this.page=0;          //固定0
        this.pagesize=4;      //固定显示4个
        this.$axios.get("http://127.0.0.1:3000/unreal?page="
        +this.page+"&pagesize="+this.pagesize)
          .then(data=>{

          this.boxr=data.data;
        })

      },
      //左边盒子
      scfboxl:function(){
        this.page=3;          //固定0
        this.pagesize=3;      //固定显示4个
        this.$axios.get("http://127.0.0.1:3000/unreal?page="
        +this.page+"&pagesize="+this.pagesize)
          .then(data=>{
          this.boxl=data.data;

        })
      },
      //大盒子标签
      scflabel:function(){
        this.$axios.get("http://127.0.0.1:3000/label" +
        "?less=" +1+"&more="+5)
          .then(data=>{
          this.label=data.data;
        })
      },
      //大盒子标签点击
//      OnLabel:function(e,n){
//        this.i=e;
//        this.j=n;
//        if(e==0){
//          this.Boxleft=0;
//        }if(e==1){
//          this.Boxleft=-1122;
//        }if(e==2){
//          this.Boxleft=-2244;
//        }if(e==3){
//          this.Boxleft=-3366;
//        }if(e==4){
//          this.Boxleft=-4488;
//        }
//
//      },
      //小轮播
      Num:function(e){
        if(e==1){
          this.lunleft=0;
        }if(e==2){
          this.lunleft=-566;
        }if(e==3){
          this.lunleft=-1132;
        }
        console.log(e);
      },
      //
      a:function(){
        setInterval(()=>{
          console.log(1);
          if(this.lunleft<-567)
          {this.lunleft=0}else{
          this.lunleft+=-566}

        },3000)
      }

    }

  }
</script>

<style>

</style>
