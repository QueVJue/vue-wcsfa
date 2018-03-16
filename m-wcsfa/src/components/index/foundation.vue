<template>
    <div id="foundation" class="section">
      <div class="section_warp">
        <div class="page">
          <div class="page_title">
            <div class="warp clearfix">
              <div class="l">
                <h2>基地</h2>
                <p>关注科幻作家最新动态</p>
              </div>
              <div class="r">
                <ul>
                  <li :class="{'active':index==i}"
                      v-for="(iteml,index) in label"
                      @click="OnLabel(index,iteml.lname)"
                    >{{iteml.lname}}</li>
                  <!--<li>机构</li>-->
                  <!--<li class="active">动态</li>-->
                </ul>
              </div>
            </div>
          </div>
          <div class="page_content foundation warp" style="padding-bottom: 139.5px;">
            <div class="page_list_warp"
                 style="width: 3366px;position: relative;
                  transition: all 0.5s linear ;"
                 :style="{left: foleft+'px'}">
              <div class="page_list" v-for="(items,F) in FoDa">
                <ul class="news_list clearfix">
                  <li v-for="itemf of FoDa[F]">
                    <a href="" class="img" target="_blank" :title="itemf[1]">
                      <img src="" width="114px" height="114px" :alt="itemf[1]" :title="itemf[1]">
                    </a>
                    <h3>
                      <a href="" target="_blank" :title="itemf[1]">{{itemf[1]}}</a>
                    </h3>
                    <p>{{itemf[2]}}</p>
                  </li>
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="复 活">-->
                      <!--<img src="" width="114px" height="114px" alt="复 活" title="复 活">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="复 活">复 活</a>-->
                    <!--</h3>-->
                    <!--<p>翻看前面的记录，才了解​，原来我的身体细胞在逐渐癌变，这癌在此之前，从未有过范例，而且，至今的医学界，也只是我这一病例，</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="科幻短篇《高考》">-->
                      <!--<img src="" width="114px" height="114px" alt="科幻短篇《高考》" title="科幻短篇《高考》">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="科幻短篇《高考》">科幻短篇《高考》</a>-->
                    <!--</h3>-->
                    <!--<p></p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="贪婪秘器">-->
                      <!--<img src="" width="114px" height="114px" alt="贪婪秘器" title="贪婪秘器">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="贪婪秘器">贪婪秘器</a>-->
                    <!--</h3>-->
                    <!--<p>年仅29岁的和珅已经身兼朝中数个重要职位，他眯着眼睛觑望向朝阳那晃眼的万道金光，嘴角露出了一丝运筹帷幄的微笑。</p>-->
                  <!--</li>-->
                </ul>
                <div class="page_list_foot warp">
                  <router-link :to="{path:Bmore.lher}"
                               class="btn_more"
                               v-for="(Bmore,index) in label"
                               v-if="index==i">
                    更多{{Bmore.lname}}
                  </router-link>
                </div>
              </div>
              <!--<div class="page_list">-->
                <!--<ul class="news_list clearfix">-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="微像文化">-->
                      <!--<img src="" width="114px" height="114px" alt="微像文化" title="微像文化">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="微像文化">微像文化</a>-->
                    <!--</h3>-->
                    <!--<p>微像文化，-->
                      <!--专注好故事。-->
                      <!--提供微像拥有版权的优质故事内容；-->
                      <!--对故事产品化进行专业策划；对故事内容进行创意加工；-->
                    <!--</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="科幻世界">-->
                      <!--<img src="" width="114px" height="114px" alt="科幻世界" title="科幻世界">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="科幻世界">科幻世界</a>-->
                    <!--</h3>-->
                    <!--<p>《科幻世界》创刊于1979年，前身是《科学文艺》和《奇谈》，至今已有三十五年的历史，目前是中国最具影响力的专业科幻出版机</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="上海最世文化发展有限公司">-->
                      <!--<img src="" width="114px" height="114px" alt="上海最世文化发展有限公司" title="上海最世文化发展有限公司">-->
                    <!--</a>-->
                    <!--<h3><a href="" target="_blank" title="上海最世文化发展有限公司">上海最世文化发展有限公司</a></h3>-->
                    <!--<p>2010年7月，国内青春文学领军人物郭敬明正式成立“上海最世文化发展有限公司”，亲自担任该文化公司的董事长兼总经理。之前</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="新星出版社·幻象文库">-->
                      <!--<img src="" width="114px" height="114px" alt="新星出版社·幻象文库" title="新星出版社·幻象文库">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="新星出版社·幻象文库">新星出版社·幻象文库</a>-->
                    <!--</h3>-->
                    <!--<p>“幻象文库”旨在出版深受广大读者欢迎的诸如科幻、奇幻、玄幻等幻想类文学作品。自创立伊始，“幻象文库”便坚定了以经典作品为</p>-->
                  <!--</li>-->
                <!--</ul>-->
                <!--<div class="page_list_foot warp">-->
                  <!--<a href="" class="btn_more">更多机构</a>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="page_list">-->
                <!--<ul class="news_list clearfix">-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="刘慈欣：这套周边好，希望大家都来买一买">-->
                      <!--<img src="" width="114px" height="114px" alt="刘慈欣：这套周边好，希望大家都来买一买" title="刘慈欣：这套周边好，希望大家都来买一买">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="刘慈欣：这套周边好，希望大家都来买一买">刘慈欣：这套周边好，希望大家都来</a>-->
                    <!--</h3>-->
                    <!--<p>很喜欢赛凡做的周边衍生产品，这是属于三体粉丝自己的周边，希望三体粉丝能多多支持！——《三体》作者 刘慈欣</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="墨熊：科幻圈的单口相声">-->
                      <!--<img src="" width="114px" height="114px" alt="墨熊：科幻圈的单口相声" title="墨熊：科幻圈的单口相声">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="墨熊：科幻圈的单口相声">墨熊：科幻圈的单口相声</a>-->
                    <!--</h3>-->
                    <!--<p>科幻作家中最能“吹”的墨熊讲了科幻圈的单口相声~</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="阿缺：从深山到星空">-->
                      <!--<img src="" width="114px" height="114px" alt="阿缺：从深山到星空" title="阿缺：从深山到星空">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="阿缺：从深山到星空">阿缺：从深山到星空</a>-->
                    <!--</h3>-->
                    <!--<p>阿缺把自己的前二十几年的经历总结成了6个字“从深山到星空”，</p>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<a href="" class="img" target="_blank" title="字幕组长来清华给你讲DC">-->
                      <!--<img src="" width="114px" height="114px" alt="字幕组长来清华给你讲DC" title="字幕组长来清华给你讲DC">-->
                    <!--</a>-->
                    <!--<h3>-->
                      <!--<a href="" target="_blank" title="字幕组长来清华给你讲DC">字幕组长来清华给你讲DC</a>-->
                    <!--</h3>-->
                    <!--<p>4月9日19:00清华讲五教5101，来听字幕组长Lu小鱼讲DC，漫威和美漫</p>-->
                  <!--</li>-->
                <!--</ul>-->
                <!--<div class="page_list_foot warp">-->
                  <!--<a href="" class="btn_more">更多动态</a>-->
                <!--</div>-->
              <!--</div>-->

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Foda',
      data:function(){
        return{
          FoDa:[],
          label:[],
          i:0,
          j:'原创',
          foleft:0
        }
      },
      mounted:function(){
        this.$nextTick(function(){
          this.foundation();
          this.Label();
        })
      },
      methods:{
        foundation:function(){
          this.$axios.get("http://127.0.0.1:3000/foundation")
            .then(data=>{
            this.FoDa=data.data
            console.log(this.FoDa);
          })
        },
        Label:function(){
          this.$axios.get("http://127.0.0.1:3000/label" +
          "?less=" +6+"&more="+8)
            .then(data=>{
            this.label=data.data;
          })
        },
        OnLabel:function(e,n){
          this.i=e;
          this.j=n;
          if(e==0){
            this.foleft=0;
          }if(e==1){
            this.foleft=-1122;
          }if(e==2){
            this.foleft=-2244;
          }

        }
      }
    }
</script>

<style>

</style>
