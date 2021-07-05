/*
 * @Author: fastfan
 * @Date: 2020-09-08 09:59:54
 * @Description: 提供当前年份前、后n年数组，月数组，季度数组，半年度数组，数组对象排序方法，数组对象去重方法
 * @getDate(number) {Number} number 获取number前后年份数组
 */


export function compare(property) { //数组对象排序
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2
  }
}

export function arrayToDistinct(array) { //数组对象去重
  let obj = {};
  array = array.reduce((cur, next) => {
    obj[next.value] ? "" : obj[next.value] = true && cur.push(next);
    return cur;
  }, []); //设置cur默认类型为数组,并且初始值为空的数组
  return array;
}

export function getDate(number) {
  let nowdate = new Date();
  let arr = [];
  for (let i = 0; i < number + 1; i++) {
    arr.push({
      label: nowdate.getFullYear() - i + '年',
      value: nowdate.getFullYear() - i
    })
    arr.push({
      label: nowdate.getFullYear() + i + '年',
      value: nowdate.getFullYear() + i
    })
  }
  let returnDate = arrayToDistinct(arr);
  let returnDate2 = returnDate.sort(compare("value"))
  return returnDate2;
}

export function getMonthly(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push({
      label: (i + 1) + '月',
      value: (i + 1)
    })
  }
  return arr;
}

export const qarterly = [{
    label: '一季度',
    value: '1'
  },
  {
    label: '二季度',
    value: '2'
  },
  {
    label: '三季度',
    value: '3'
  },
  {
    label: '四季度',
    value: '4'
  },
]

export const yearly = [{
    label: '上半年',
    value: '1'
  },
  {
    label: '下半年',
    value: '2'
  },
]

export function getLetter() { //获取英文字母A到Z
  let arr = [];
  for (let i = 0; i < 26; i++) {
    arr.push({
      label: String.fromCharCode(65 + i),
      value: String.fromCharCode(65 + i),
      color: "rgba(0,0,0,0.25)",
      activeColor: false,
      disabled: true,
    })
  }
  return arr;
}


export function getNumber() { //获取数字
  let arr = [];
  // 48
  for (let i = 0; i < 10; i++) {
    arr.push({
      label: String.fromCharCode(48 + i),
      value: Number(String.fromCharCode(48 + i)),
      type: 'Number'
    })
  }
  arr.push({
    label: String.fromCharCode(46),
    value: Number(String.fromCharCode(46)),
    type: 'Number'
  })
  return arr;
}