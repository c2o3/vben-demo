<template>
  <div class="w-3/5 h-60 absolute left-40 top-20">
    <a-form :model="formModel">
      <a-row v-for="item in formItems" :key="item.id" class="mt-5">
        <!-- 单选框列 -->
        <a-col :span="2.5">
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
          <a-form-item label="选项">
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
        radio1: true,
        input1: '',
        radio2: false,
        input2: '',
        radio3: false,
        input3: '',
        radio4: false,
        input4: '',
        // 初始化其他字段...
      })

      const formItems = [
        { id: '1', model: 'input1', radioModel: 'radio1', radioLabel: '选项A:' },
        { id: '2', model: 'input2', radioModel: 'radio2', radioLabel: '选项B:' },
        { id: '3', model: 'input3', radioModel: 'radio3', radioLabel: '选项C:' },
        { id: '4', model: 'input4', radioModel: 'radio4', radioLabel: '选项D:' },
        // 定义其他表单项...
      ]
      const handleRadioChange = (id) => {
        // 仅更新当前被点击的单选按钮的模型值为true
        formItems.forEach((item) => {
          formModel[item.radioModel] = item.id === id
        })
      }
      return { formModel, formItems, handleRadioChange }
    },
  })
</script>
<style lang="scss" scoped></style>
