<template>
  <div class="content" style="min-height: 519px;">
    <div class="content_title">
      <div class="warp crumbs clearfix">
        <h2><a href="index.htm#foundation" tppabs="http://www.wcsfa.com/#foundation">基地</a></h2>
        <em>&gt;</em><span>原创</span> </div>
    </div>
    <div class="clearfix warp">
      <router-view></router-view>


      <div class="r side">
        <div class="fix_bar">
          <ul class="side_menu">
            <li class=" active"><router-link to="/foundation-1">原创</router-link></li>
            <li class=""><router-link to="/foundation-1">动态</router-link></li>
            <li class="last"><router-link to="/foundation-1">机构</router-link></li>
          </ul>
        </div>
        <foundation-hot></foundation-hot>

        <div class="box_side">
          <h3><i class="icon_down"></i>手机客户端</h3>
          <div class="client_down">
            <ul>
              <li><a href="#"><img src="themes/images/icon_iphone.png" tppabs="http://www.wcsfa.com/themes/images/icon_iphone.png" title="iPhone" alt="iPhone"><span>iPhone</span></a></li>
              <li><a href="#"><img src="themes/images/icon_pad.png" tppabs="http://www.wcsfa.com/themes/images/icon_pad.png" title="iPad" alt="iPad"><span>iPad</span></a></li>
              <li><a href="#"><img src="themes/images/icon_android.png" tppabs="http://www.wcsfa.com/themes/images/icon_android.png" title="Android" alt="Android"><span>Android</span></a></li>
            </ul>
          </div>
        </div>
        <div class="box_side">
          <ul>
          </ul>
        </div>
        <div class="ads_side">  </div>
      </div>
    </div>
  </div>
</template>

<script>
  import fHot from './foundation/f-Hot.vue'
    export default {
        name: '',
      components:{
        "foundation-hot":fHot
      }
    }

</script>

<style>

</style>
