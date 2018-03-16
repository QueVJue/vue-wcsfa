<template>
    <div class="">
      <div id="content_warp">
        <div id="content_pin">
          <In-Show></In-Show>
          <In-ScfBox></In-ScfBox>
          <In-Award></In-Award>
          <In-FounDation></In-FounDation>
        </div>
      </div>
    </div>
</template>

<script>
  import Show from './index/show.vue'
  import ScfBox from './index/scfbox.vue'
  import Award from './index/award.vue'
  import FounDation from './index/foundation'
  import bus from '../assets/js/test.js'


    export default {
        name: '',
        data: function () {
            return {
              withCredentials:true,
              uname:''

            }
        },
      components:{
        "In-Show":Show,
        "In-ScfBox":ScfBox,
        "In-Award":Award,
        "In-FounDation":FounDation
    },
      mounted:function(){
        this.$nextTick(function(){
          this.islogin();
        });

      },
      methods:{
        islogin:function(){
          this.$axios.get("http://127.0.0.1:3000/islogin",{
            withCredentials:true
          }).then(data=>{
            this.uname=data.data.uname;
            bus.bus.$emit('add',this.uname);
//            console.log(this.uname)
          })
//          console.log(1);
        }
      }

  }
</script>

<style scoped>

</style>
