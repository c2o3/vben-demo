import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const setup: AppRouteModule = {
  path: '/demo',
  name: 'TestDemo',
  component: LAYOUT,
  redirect: '/demo/form/index',
  meta: {
    orderNo: 100000,
    hideChildrenInMenu: true,
    icon: 'whh:to-top-outlined',
    title: 'demo',
  },
  children: [
    {
      path: '/demo/form/index',
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
