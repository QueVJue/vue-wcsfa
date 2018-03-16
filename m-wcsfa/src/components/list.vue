<template>
    <div>
      <div class="content" style="min-height: 346px;">
        <div class="content_title">
          <div class="warp crumbs clearfix">
            <h2>
              <a href="./#scfbox">科幻盒子</a>
            </h2>
            <em>&gt;</em>
            <span>幻闻</span>
          </div>
        </div>
        <div class="clearfix warp">
          <router-view></router-view>
          <div class="r side">
            <div class="fix_bar">
              <ul class="side_menu">
                <li class=""><router-link to="/list-1">评论</router-link></li>
                <li class=""><router-link to="/list-2">佳作</router-link></li>
                <li class=" active"><router-link to="/list-3">幻闻</router-link></li>
                <li class=""><router-link to="/list-4">其它</router-link></li>
                <li class="last "><router-link to="/list-5">专题</router-link></li>
              </ul>
            </div>
            <list-hot></list-hot>
            <div class="box_side">
              <h3><i class="icon_down"></i>手机客户端</h3>
              <div class="client_down">
                <ul>
                  <li>
                    <a href="#">
                      <img src="../assets/img/index/icon_iphone.png" title="iPhone" alt="iPhone">
                      <span>iPhone</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/img/index/icon_pad.png" title="iPad" alt="iPad">
                      <span>iPad</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../assets/img/index/icon_android.png" title="Android" alt="Android">
                      <span>Android</span>
                    </a>
                  </li>
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
    </div>
</template>

<script>
  import lHot from './list/l-Hot.vue'
    export default {
        name: 'list',
      data: function () {
        return {}
      },
      components:{
        "list-hot":lHot
      }
    }
</script>

<style>

</style>
