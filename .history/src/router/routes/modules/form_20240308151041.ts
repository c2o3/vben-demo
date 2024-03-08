import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const setup: AppRouteModule = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/single',
  meta: {
    orderNo: 100000,
    icon: 'ant-design:code-sandbox-outlined',
    title: 'Demo',
  },
  children: [
    {
      path: 'single',
      name: 'Single',
      component: () => import('/@/views/demo/single/index.vue'),
      meta: {
        title: '单选题',
        icon: 'ant-design:check-circle-outlined',
      },
    },
    {
      path: 'multiple',
      name: 'Multiple',
      component: () => import('/@/views/demo/multiple/index.vue'),
      meta: {
        title: '多选题',
        icon: 'ant-design:check-square-outlined',
      },
    },
    {
      path: 'richtext',
      name: 'RichText',
      component: () => import('/@/views/demo/richtext/index.vue'),
      meta: {
        title: '富文本',
        icon: 'ant-design:file-text-outlined',
      },
    },
  ],
}

export default setup
