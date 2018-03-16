import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import Index from '@/components/index'
import register from '@/components/login/register'
import login from '@/components/login/login'
import List from '@/components/list'
import list1 from '@/components/list/list-1'
import list2 from '@/components/list/list-2'
import list3 from '@/components/list/list-3'
import list4 from '@/components/list/list-4'
import list5 from '@/components/list/list-5'
import Foundation from '@/components/foundation'
import foundation1 from '@/components/foundation/foundation-1'
import foundation2 from '@/components/foundation/foundation-2'
import foundation3 from '@/components/foundation/foundation-3'
import Wlkhds from '@/components/wlkhds'


//import footer from '@/components/Footer'
//import header from '@/components/Header'


Vue.use(Router)

export default new Router({
  routes:
    [
      {path: '/index',component: Index},
      {path:'/register',component:register},
      {path:'/login',component:login},
      {path:'/list',component:List,
        children:[
          {path:'/list-1',component:list1},
          {path:'/list-2',component:list2},
          {path:'/list-3',component:list3},
          {path:'/list-4',component:list3},
          {path:'/list-5',component:list3}
        ]
      },
      {path:'/foundation',component:Foundation,
        children:[
          {path:'/foundation-1',component:foundation1},
          {path:'/foundation-2',component:foundation2},
          {path:'/foundation-3',component:foundation3}
        ]
      },
      {path:'/wlkhds',component:Wlkhds}

    ]
})
