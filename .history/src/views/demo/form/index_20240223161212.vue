<template>
  <a-form model="formModel">
    <a-row v-for="item in formItems" :key="item.id" gutter="20">
      <!-- 单选框列 -->
      <a-col :span="2">
        <a-form-item>
          <a-radio-group v-model="formModel[item.radioModel]" @change="handleRadioChange(item.id)">
            <a-radio :value="true">{{ item.radioLabel }}</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>
      <!-- 输入框列 -->
      <a-col :span="22">
        <a-form-item :label="`输入${item.id}`">
          <a-input v-model="formModel[item.model]" />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { Form, Input, Radio, Row, Col } from 'ant-design-vue';
  export default defineComponent({
    name: 'DemoPage',
    setup() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
