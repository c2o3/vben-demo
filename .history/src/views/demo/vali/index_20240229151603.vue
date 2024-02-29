<template>
  <a-form class="w-5/12" :model="formState">
    <a-row>
      <a-radio-group v-model:value="selectedRadioId" class="w-11/12">
        <a-col :span="24" v-for="item in formItems" :key="item.id" class="pt-3">
          <a-form-item name="radio" :rules="[{ required: true, message: '请选择一个正确答案！' }]">
            <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
          </a-form-item>
          <a-form-item name="input">
            <a-input
              v-model:value="item.inputValue"
              style="width: 400px"
              :rules="[{ required: true, message: '请输入选项内容！' }]"
            />
          </a-form-item>
        </a-col>
      </a-radio-group>
    </a-row>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
    <a-button type="default" @click="resetForm">重置</a-button>
  </a-form>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'
  import { Form, Input, Radio, Row, Col, Button } from 'ant-design-vue'
  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ARadioGroup: Radio.Group,
      ARadio: Radio,
      ARow: Row,
      ACol: Col,
      AButton: Button,
    },
    setup() {
      const formState = reactive<Record<string, any>>({
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      })
      const selectedRadioId = ref([])

      const formItems = ref([
        { id: '1', radioLabel: '选项A：' },
        { id: '2', radioLabel: '选项B：' },
        { id: '3', radioLabel: '选项C：' },
        { id: '4', radioLabel: '选项D：' },
      ])
      const handleSubmit = () => {
        console.log(formItems.value, selectedRadioId.value)
      }
      return {
        formItems,
        selectedRadioId,
        handleSubmit,
        formState,
      }
    },
  })
</script>
