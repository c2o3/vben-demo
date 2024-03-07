import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const setup: AppRouteModule = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/form',
  meta: {
    orderNo: 100000,
    icon: 'ant-design:meh-outlined',
    title: 'Demo',
  },
  children: [
    {
      path: 'single',
      name: '单选题',
      component: () => import('/@/views/demo/vali/index.vue'),
      meta: {
        title: 'Validemo',
        icon: 'ant-design:info-outlined',
      },
    },
    {
      path: 'multiple',
      name: '多选题',
      component: () => import('/@/views/demo/sb/index.vue'),
      meta: {
        title: 'SBdemo',
        icon: 'ant-design:info-outlined',
      },
    },
  ],
}

export default setup
