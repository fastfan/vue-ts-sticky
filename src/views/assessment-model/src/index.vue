<!--
 * @Author: fastfan
 * @Date: 2021-03-22 10:37:35
 * @LastEditors: fastfan
 * @LastEditTime: 2021-03-26 14:59:09
 * @Description: 模板考核
-->
<template>
  <div class="assessment-model">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <el-form
          :model="ruleForm"
          :rules="rules"
          :inline="true"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second"
        >{{ countChange }}
        <el-button class="btn" @click="addCcountChange"
          >计算属性：add</el-button
        >
        <leftBar :config="buttonList" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form } from "element-ui";
import leftBar from "@/components/letterBar.vue";
import { getNumber } from "@/utils/date.js";
class ItemVo {
  private date: string = "hello";
  private name: string;
  private address: string;
  constructor(_date: string, _name: string, _address: string) {
    this.date = _date;
    this.name = _name;
    this.address = _address;
  }
}

class buttonArray {
  private label: string;
  private value: string;
  private type: string;
  private buttonStyle: Record<string, unknown> = {};
  private option: Record<string, unknown> = {};
  constructor(
    _label: string,
    _value: string,
    _type: string,
    _buttonStyle: Record<string, unknown>,
    _option: Record<string, unknown>
  ) {
    this.label = _label;
    this.value = _value;
    this.type = _type;
    this.buttonStyle = _buttonStyle;
    this.option = _option;
  }
}
const buttonStyle = {
  color: "#4d81e1",
  fontSize: "14px",
  fontWeight: 400,
  border: "1px solid #4d81e1",
};

@Component({
  components: {
    leftBar,
  },
})
export default class AssessmentModel extends Vue {
  //注意点：3.public是公用的意思，可省略;没有data,return,直接放要绑定的值
  activeName: string = "first";
  count: number = 0;
  get countChange(): number {
    return this.count;
  }
  set countChange(val: number) {
    this.count = val + 1;
  }
  addCcountChange(): number {
    return this.countChange++;
  }
  ruleForm: Record<string, unknown> = {
    name: "",
    region: "",
  };
  rules: Record<string, unknown> = {
    name: [
      { required: true, message: "请输入活动名称", trigger: "blur" },
      { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
    ],
    region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
  };
  buttonList: Array<buttonArray> = [
    new buttonArray("123", "123", "Pophover", buttonStyle, {
      type: "Array",
      data: getNumber(),
    }),
    new buttonArray("+", "+", "String", buttonStyle, {}),
    new buttonArray("-", "-", "String", buttonStyle, {}),
    new buttonArray("*", "*", "String", buttonStyle, {}),
    new buttonArray("/", "/", "String", buttonStyle, {}),
    new buttonArray("(", "(", "String", buttonStyle, {}),
    new buttonArray(")", ")", "String", buttonStyle, {}),
    new buttonArray("", "", "Svg", buttonStyle, { svgName: "deleteIcon" }),
  ];
  // buttonList: any[] = [
  //   {
  //     label: "123",
  //     value: "123",
  //     type: "Pophover",
  //     buttonStyle: {
  //       color: "#4d81e1",
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       border: "1px solid #4d81e1",
  //     },
  //     option: {
  //       type: "Array",
  //       data: getNumber(),
  //     },
  //   },
  //   {
  //     label: "+",
  //     value: "+",
  //     type: "String",
  //     buttonStyle: {
  //       color: "#4d81e1",
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       border: "1px solid #4d81e1",
  //     },
  //     option: {},
  //   },
  //   {
  //     label: "-",
  //     value: "-",
  //     type: "String",
  //     buttonStyle: {
  //       color: "#4d81e1",
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       border: "1px solid #4d81e1",
  //     },
  //     option: {},
  //   },
  //   {
  //     label: "*",
  //     value: "*",
  //     type: "String",
  //     buttonStyle: {
  //       color: "#4d81e1",
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       border: "1px solid #4d81e1",
  //     },
  //     option: {},
  //   },
  //   {
  //     label: "/",
  //     value: "/",
  //     type: "String",
  //     buttonStyle: {
  //       color: "#4d81e1",
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       border: "1px solid #4d81e1",
  //     },
  //     option: {},
  //   },
  //   {
  //     label: "(",
  //     value: "(",
  //     type: "String",
  //     buttonStyle: {
  //       color: "#4d81e1",
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       border: "1px solid #4d81e1",
  //     },
  //     option: {},
  //   },
  //   {
  //     label: ")",
  //     value: ")",
  //     type: "String",
  //     buttonStyle: {
  //       color: "#4d81e1",
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       border: "1px solid #4d81e1",
  //     },
  //     option: {},
  //   },
  //   {
  //     label: "",
  //     value: "",
  //     type: "Svg",
  //     buttonStyle: {
  //       color: "#4d81e1",
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       border: "1px solid #4d81e1",
  //     },
  //     option: {
  //       svgName: "deleteIcon",
  //     },
  //   },
  // ];
  tableData: Array<ItemVo> = [
    new ItemVo("2016-05-02", "王小虎", "上海市普陀区金沙江路 1518 弄"),
    new ItemVo("2016-05-03", "王小虎2", "上海市普陀区金沙江路 1517 弄"),
    new ItemVo("2016-05-04", "王小虎3", "上海市普陀区金沙江路 1516 弄"),
    new ItemVo("2016-05-05", "王小虎4", "上海市普陀区金沙江路 1515 弄"),
    new ItemVo("2016-05-06", "王小虎5", "上海市普陀区金沙江路 1514 弄"),
  ];
  //   方法也是直接写到外层
  handleClick(name: string): void {
    console.log("name:::::", name);
  }
  submitForm(formName: string): void {
    const FormName = this.$refs[formName] as Form;
    FormName.validate((valid: boolean) => {
      if (valid) {
        alert("submit!");
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }
  resetForm(formName: string): void {
    const FormName = this.$refs[formName] as any;
    FormName.resetFields();
  }
  mounted(): void {
    console.log("mounted:::::");
  }
}
</script>

<style lang="scss">
.demo-ruleForm {
  text-align: left;
  .el-form-item {
    width: 320px;
  }
  .el-input,
  .el-input__inner {
    width: 220px;
  }
}
</style>
