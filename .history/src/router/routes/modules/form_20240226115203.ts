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
    icon: 'ant-design:meh-outlined',
    title: 'demo',
  },
  children: [
    {
      path: 'form',
      name: 'formdemopage',
      component: () => import('/@/views/demo/form/index.vue'),
      meta: {
        title: 'FormDemo',
        icon: 'ant-design:info-outlined',
        hideMenu: true,
      },
    },
    {
      path: 'sb',
      name: 'sbsbsbsbsb',
      component: () => import('/@/views/demo/sb/index.vue'),
      meta: {
        title: 'SBdemo',
        icon: 'ant-design:info-outlined',
        hideMenu: true,
      },
    },
  ],
}

export default setup
