/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '11111r',
  component: Layout,
  hidden: true,
  children: [
    {
      path: '/user/system/user',
      component: () => import('@/views/system/user/index'),
      name: 'user',
      meta: { title: '用户信息' }
    },
    {
      path: '/user/system/role',
      component: () => import('@/views/system/role/index'),
      name: 'user',
      meta: { title: '角色信息' }
    }
  ]
}

export default chartsRouter
