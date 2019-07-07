import Vue from 'vue'
import Login from '@/components/Login.vue'
// import hellow from '@/components/HelloWorld.vue' 
import Router from 'vue-router'
import home from '@/components/homeAdministration/homephone.vue'
import Cooperativpartner from '@/components/homeAdministration/Cooperativpartner.vue'
import CorporateQualifications from '@/components/homeAdministration/CorporateQualifications.vue'
import intellectualpropertyright from '@/components/homeAdministration/intellectualpropertyright.vue'

import contenthree from '@/components/contentAdministration/contenthree.vue'
import solution from '@/components/contentAdministration/solution.vue'
import successfulcases from '@/components/contentAdministration/successfulcases.vue'
import product from '@/components/contentAdministration/product.vue'
import projectimplementation from '@/components/contentAdministration/projectimplementation.vue'
import technology from '@/components/contentAdministration/technology.vue'
import usertechnology from '@/components/contentAdministration/usertechnology.vue'
import optionsevers from '@/components/contentAdministration/optionsevers.vue'
import consultingservice from '@/components/contentAdministration/consultingservice.vue'
import companyprofile from '@/components/contentAdministration/companyprofile.vue'
import corporateculture from '@/components/contentAdministration/corporateculture.vue'
import companynews from '@/components/contentAdministration/companynews.vue'
import industrydynamics from '@/components/contentAdministration/industrydynamics.vue'
import majorcompany from '@/components/contentAdministration/majorcompany.vue'
import joinus from '@/components/contentAdministration/joinus.vue'
import talentdevelopment from '@/components/contentAdministration/talentdevelopment.vue'
import employeecare from '@/components/contentAdministration/employeecare.vue'



// import contentwo from '@/components/contentTwoAdministration/contentwo.vue'
import honor from '@/components/honorAdminidtration/kehu.vue'
import hover from '@/components/honorAdminidtration/hover.vue'


Vue.use(Router)

export default new Router({
  // base:'/community/',
  routes: [
    {
      path: '/login',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      redirect: '/login'
    },
      {
        path: '/price',
        name: '图片管理',
        component: home
      },{
        path:'/Cooperativpartner',
        name:'合作伙伴',
        component:Cooperativpartner
      },{
        path:'/CorporateQualifications',
        name:'公司资质',
        component:CorporateQualifications
      },{
        path:'/intellectualpropertyright',
        name:'知识产权',
        component:intellectualpropertyright
      },
      {
        path:'/content',
        name:'内容管理',
        component:contenthree
      },{
        path:'/solution',
        name:'解决方案',
        component:solution
      },{
        path:'/successfulcases',
        name:'成功案例',
        component:successfulcases
      },{
        path:'/product',
        name:'产品',
        component:product
      },{
        path:'/projectimplementation',
        name:'技术中心/项目实施',
        component:projectimplementation
      },{
        path:'/technology',
        name:'技术中心/技术',
        component:technology
      },{
        path:'/usertechnology',
        name:'技术中心/服务能力-人员技术服务',
        component:usertechnology
      },{
        path:'/optionsevers',
        name:'技术中心/服务能力-运维服务',
        component:optionsevers
      },{
        path:'/consultingservice',
        name:'技术中心/服务能力-咨询服务',
        component:consultingservice
      },
      //关于我们
      {
        path:'/companyprofile',
        name:'关于我们/公司简介',
        component:companyprofile
      },{
        path:'/corporateculture',
        name:'关于我们/企业文化',
        component:corporateculture
      },{
        path:'/companynews',
        name:'关于我们/公司新闻',
        component:companynews
      },{
        path:'/industrydynamics',
        name:'关于我们/行业动态',
        component:industrydynamics
      },{
        path:'/majorcompany',
        name:'关于我们/公司重大事项',
        component:majorcompany
      },{
        path:'/joinus',
        name:'关于我们/加入我们',
        component:joinus
      },{
        path:"/talentdevelopment",
        name:'关于我们/人才发展',
        component:talentdevelopment
      },{
        path:'/employeecare',
        name:'关于我们/员工关怀',
        component:employeecare
      },
      {
        path:'/honor',
        name:'客户垂询数据',
        component:honor
      },{
        path:'/honor1',
        name:'12312',
        component:hover
      }
  ]
})
