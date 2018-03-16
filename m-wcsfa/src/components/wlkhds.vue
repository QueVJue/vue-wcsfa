<template>
  <div class="b1">
    <div class="bg-wraper">
      <img src="../assets/img/bg.jpg" tppabs="http://www.wcsfa.com/themes/images/bg.jpg">
    </div>
    <div class="list-logo">
      <img src="themes/images/w-logo.png" tppabs="http://www.wcsfa.com/themes/images/w-logo.png">
    </div>
    <div class="organizers">
      <img src="themes/images/organizers.png" tppabs="http://www.wcsfa.com/themes/images/organizers.png">
    </div>
    <div class="list">
      <div class="w1000">

        <In-Left></In-Left>

        <div class="right"> <a class="sub rad5" href="javascript:alert('本次征文投稿已经截止!')" target="_blank">我要投稿</a> <a class="more" href="news-85.html" tppabs="http://www.wcsfa.com/news-85.html" target="_blank">活动说明</a>
          <ul class="top10">
            <p>本周TOP 10</p>
            <li><a href="wlkhds_detail.php-id=52.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=52" target="_blank">违规文章-别闹了，D先生</a></li>
            <li><a href="wlkhds_detail.php-id=221.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=221" target="_blank">地下</a></li>
            <li><a href="wlkhds_detail.php-id=88.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=88" target="_blank">2048-大上海之魇</a></li>
            <li><a href="wlkhds_detail.php-id=173.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=173" target="_blank">分裂</a></li>
            <li><a href="wlkhds_detail.php-id=118.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=118" target="_blank">心理日记</a></li>
            <li><a href="wlkhds_detail.php-id=67.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=67" target="_blank">囚狱时光</a></li>
            <li><a href="wlkhds_detail.php-id=57.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=57" target="_blank">道</a></li>
            <li><a href="wlkhds_detail.php-id=171.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=171" target="_blank">万物生</a></li>
            <li><a href="wlkhds_detail.php-id=254.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=254" target="_blank">《七天环游地球》</a></li>
            <li><a href="wlkhds_detail.php-id=311.htm" tppabs="http://www.wcsfa.com/wlkhds_detail.php?id=311" target="_blank">蚂蚁上帝</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/css/wlkhds.style.css';
  import Left from './wlkhds/wlkhds-1.vue'
    export default {
        name: '',
      components:{
        "In-Left":Left
      }
    }
</script>

<style scoped>


.b1{
    font-family: 'Microsoft YaHei',Arial,Helvetica;
    background-color:#000;font-size:14px;}
</style>
