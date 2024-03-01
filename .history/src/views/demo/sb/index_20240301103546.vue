<template>
  <a-form class="w-5/12" @submit.prevent="handleSubmit">
    <a-row>
      <a-checkbox-group v-model:value="selectedCheckboxIds" class="w-11/12">
        <a-col :span="24" v-for="item in formItems" :key="item.id" class="pt-3">
          <a-form-item :name="">
            <a-checkbox :value="item.id">{{ item.radioLabel }}</a-checkbox>
          </a-form-item>
          <a-input v-model:value="item.inputValue" style="width: 400px" />
        </a-col>
      </a-checkbox-group>
    </a-row>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
  </a-form>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import { Form, Input, Checkbox, CheckboxGroup, Row, Col, Button } from 'ant-design-vue'

  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ACheckbox: Checkbox,
      ACheckboxGroup: CheckboxGroup,
      ARow: Row,
      ACol: Col,
      AButton: Button,
    },
    setup() {
      const selectedCheckboxIds = ref([])

      const formItems = ref([
        { id: '1', radioLabel: '选项A：' },
        { id: '2', radioLabel: '选项B：' },
        { id: '3', radioLabel: '选项C：' },
        { id: '4', radioLabel: '选项D：' },
      ])
      const handleSubmit = () => {
        console.log(formItems.value, selectedCheckboxIds.value)
      }
      return { formItems, selectedCheckboxIds, handleSubmit }
    },
  })
</script>
