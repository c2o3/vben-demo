import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const setup: AppRouteModule = {
  path: '/demo',
  name: 'TestDemo',
  component: LAYOUT,
  redirect: '/demo/form/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: 'demo',
  },
  children: [
    {
      path: 'index',
      name: 'formdemopage',
      component: () => import('/@/views/demo/form/index.vue'),
      meta: {
        title: 'FormDemo',
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
}

export default setup
