<template>
  <div class="w-3/5 h-60 absolute left-40 top-20">
    <a-form model="formModel">
      <a-row v-for="item in formItems" :key="item.id" gutter="20" class="mt-5">
        <!-- 单选框列 -->
        <a-col :span="1">
          <a-form-item>
            <a-radio-group
              v-model="formModel[item.radioModel]"
              @change="handleRadioChange(item.id)"
            >
              <a-radio :value="true">{{ item.radioLabel }}</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <!-- 输入框列 -->
        <a-col :span="10">
          <a-form-item :label="`输入${item.id}`">
            <a-input v-model="formModel[item.model]" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { Form, Input, Radio, Row, Col } from 'ant-design-vue'
  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ARadioGroup: Radio.Group,
      ARadio: Radio,
      ARow: Row,
      ACol: Col,
    },
    setup() {
      const formModel = reactive({
        radio1: false,
        input1: '',
        // 初始化其他字段...
      })

      const formItems = [
        { id: '1', model: 'input1', radioModel: 'radio1' },
        { id: '1', model: 'input1', radioModel: 'radio1' },
        { id: '1', model: 'input1', radioModel: 'radio1' },
        { id: '1', model: 'input1', radioModel: 'radio1' },
        // 定义其他表单项...
      ]

      const handleRadioChange = (id) => {
        // 重置其他所有单选框的值
        formItems.forEach((item) => {
          if (item.id !== id) formModel[item.radioModel] = false
        })
      }
      return { formModel, formItems, handleRadioChange }
    },
  })
</script>
<style lang="scss" scoped></style>
