<template>
    <div id="index" class="section bg_space active">
      <div class="index">
        <ul class="pathway">
          <li class="show_today"  v-for="(car,num) in carousel"
              :class="[{'active':num==l},car.class]" @mouseover="overShow(num)"

            >
            <router-link :to="car.href" :title="car.title">{{car.title}}
            <em v-if="car.text!=''" v-html="car.text">{{car.text}}</em>
              <img :src="require('../../'+car.img)" :alt="car.title" :title="car.title">
           </router-link>
          </li>
          <!--<li class="nav_award show_today" >-->
            <!--<router-link to="/wlkhds" title="未来科幻大师奖" target="_blank">未来科幻大师奖-->
              <!--<img src="../../assets/img/index/sfbox.png" alt="未来科幻大师奖" title="未来科幻大师奖">-->
           <!--</router-link>-->
          <!--</li>-->
          <!--<li class="nav_foundation show_today" >-->
            <!--<router-link to="/foundation" title="基地">基地-->
              <!--<em>原创作品分享-->
                <!--<br>-->
                <!--关注科幻作家最新动态-->
              <!--</em>-->
              <!--<img src="../../assets/img/index/sfbox.png" alt="基地" title="基地">-->
            <!--</router-link>-->
          <!--</li>-->
        </ul>
        <div class="index_show">
          <div class="index_show_warp"
               style="width: 1125px; position: relative;
               transition: all 0.3s linear ;" :style="{left:left+'px'}">

            <div class="today" v-for="(showbox,j) in showBox">
              <div class="today_first">
                <a target="_blank" :title="showbox">{{showbox}}</a>
              </div>
              <ul>
              </ul>
              <li v-for="boxs in box[j]">
                <a target="_blank" :title="boxs">{{boxs}}</a>
              </li>
              <!--<li>-->
              <!--<a href="" target="_blank" title="未来科幻大师奖说明">{{box[2]}}</a>-->
              <!--</li>-->
              <!--<li>-->
              <!--<a href="" target="_blank" title="第五届未来科幻大师奖投稿须知">{{box[3]}}</a>-->
              <!--</li>-->
              <a class="today_more" title="MOTF AWARD" target="_blank">MOTF AWARD</a>
            </div>
            <!--<div class="today">-->
              <!--<div class="today_first">-->
                <!--<a href="" target="_blank" title="刘慈欣：这套周边好，大家都来买一">刘慈欣：这套周边好，大家都来买一</a>-->
              <!--</div>-->
              <!--<ul>-->
                <!--<li>-->
                  <!--<a href="" target="_blank" title="赛凡科幻空间这周末有什么活动？">赛凡科幻空间这周末有什么活动？</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="" target="_blank" title="2016轻年计划复赛名单公布！">2016轻年计划复赛名单公布！</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="" target="_blank" title="送你免费去NASA总部要不要？">送你免费去NASA总部要不要？</a>-->
                <!--</li>-->
              <!--</ul>-->
              <!--<a href="#scfbox" class="today_more" title="SF BOX">SF BOX</a>-->
            <!--</div>-->


            <!--<div class="today">-->
              <!--<div class="today_first">-->
                <!--<a href="" target="_blank" title="刘慈欣：这套周边好，希望大家都来买一买">刘慈欣：这套周边好，希望大家都来</a>-->
              <!--</div>-->
              <!--<ul>-->
                <!--<li>-->
                  <!--<a href="" target="_blank" title="墨熊：科幻圈的单口相声">墨熊：科幻圈的单口相声</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="" target="_blank" title="阿缺：从深山到星空">阿缺：从深山到星空</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="" target="_blank" title="字幕组长来清华给你讲DC">字幕组长来清华给你讲DC</a>-->
                <!--</li>-->
                <!--<a href="#foundation" class="today_more" title="FOUNDATION">FOUNDATION</a>-->
              <!--</ul>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
      data:function(){
        return{
          showBox:[],         //遍历主页图标内容
          box:[],             //遍历主页图标对应内容
          i:null,             //循环i
          k:null,             //循环k
          page:null,          //传送nodejs页数
          pagesize:null,      //传送nodejs显示数量
          carousel:[],
          l:0,                //active的class样式判断
          left:0              //style样式

        }
      },
      mounted:function(){
        this.$nextTick(function(){
          this.show_box(); //调用信息发送后台
        });
      },
      methods:{
        show_box:function(){
          this.page=0;          //固定0
          this.pagesize=4;      //固定显示4个
//          this.CarouselClass=[this.nav_scfbox,this.nav_award,this.nav_foundation];
//          console.log(this.CarouselClass)
          this.$axios.get("http://127.0.0.1:3000/showbox?page="
          +this.page+"&pagesize="+this.pagesize)
            .then(data=>{
//            console.log(this.showBox);

            let i = this.i;
            let k = this.k;
            let box = this.box;
            let showBox=this.showBox;

            for(i=0;i<data.data.length;i++)
            {
              showBox.push(data.data[i][0]);   //把每组数据下标为0的拿出来做主页图标内容
            }

            for(i=0;i<data.data.length;i++){
              box[i]=[];
              for(k=1;k<data.data[i].length;k++){
                box[i].push(data.data[i][k]);  //把剩下数据拿出来做主页图标对应内容
              }
            }


          })

          this.$axios.get("http://127.0.0.1:3000/SBox")
            .then(data=>{
            this.carousel=data.data;
          })
        },
        //为active添加样式
        overShow:function(num){
          this.l=num;

          if(num==0){
            this.left=0
          }if(num==1){
            this.left=-375
          }if(num==2){
            this.left=-750
          }
        }

      }

    }
</script>

<style scoped>
.today_first{
  width: 375px;
  text-overflow: clip;overflow: hidden;
}
.today_first>a{
  width: 410px;
  }
</style>
