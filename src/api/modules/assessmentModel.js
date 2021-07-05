import request from '@/api/request.js'
const baseUrl = '/cityscapeAi'
const baseUrl_2 = '/xscommand'

/**
 * * AUthor:fastfan
 * creatTime:2020.09.16
 * description: 获取考核指标配置-分组
 * @param {Object} params
 * @param {String} params.prefixLetter 指标前缀字母
 * @param {String} params.quotaName 指标名称
 * @param {String} params.appraisalType 考核类型 1、部门考核 2、个人考核
 * @param {String} params.quotaType 指标类型 1、基础指标 2、自定义指标
 */
export const queryAppraisalQuotaGroup = params => {
  return request.get(
    `${baseUrl}/appraisal/config/queryAppraisalQuotaGroup`,
    {
      prefixLetter:params.prefixLetter,
      quotaName:params.quotaName,
      appraisalType:params.appraisalType,
      quotaType:params.quotaType
    }
  )
}

/**
 * AUthor:fastfan
 * creatTime:2020.09.17
 * description: 保存/修改/删除 考核指标配置
 * @param {Object} params
 * @param {String/Number} params.appraisalType  考核类型 1、部门考核 2、个人考核
 * @param {String} params.calRule 自定义指标规则
 * @param {String} params.id 主键
 * @param {String} params.quotaMax 区间止
 * @param {String} params.quotaMin 区间起
 * @param {String} params.quotaName 指标名称
 * @param {String/Number} params.quotaType 指标类型 1、基础指标 2、自定义指标
 * @param {String} params.status  状态 0、失效 1、有效
 * @param {String} params.remark  备注
 */
export const saveAppraisalQuota = params => {
  return request.post(
    `${baseUrl}/appraisal/config/saveAppraisalQuota`,
    {
      appraisalType: params.appraisalType,
      calRule: params.calRule,
      calRuleShow: params.calRuleShow,
      id:params.id,
      quotaMax: params.quotaMax,
      quotaMin: params.quotaMin,
      quotaName: params.quotaName,
      quotaType: params.quotaType,
      status: params.status,
      remark: params.remark,
    }
  )
}

/**
 * * AUthor:fastfan
 * creatTime:2020.09.17
 * description: 获取中队（部门）
 * @param {Object} params
 *
 */
export const getDeptList = params => {
  return request.get(
    `${baseUrl_2}/commandEnum/getDeptList`,
     params
  )
}

/**
 * * AUthor:fastfan
 * creatTime:2020.09.17
 * description: 获取考核模板数据范围
 * @param {Object} params
 * @param {String} params.prefenumTypeixLetter 枚举类型
 *
 */
export const getEnumByEnumType = params => {
  return request.get(
    `${baseUrl_2}/commandEnum/getEnumByEnumType`,
    {
      enumType:params.enumType,
    }
  )
}

/**
 * * AUthor:fastfan
 * creatTime:2020.09.17
 * description: 查询考核模板-指标关系配置列表
 * @param {Object} params
 * @param {String} params.templateCode 模板代码
 *
 */
export const queryAppraisalTemplateLinkList = params => {
  return request.post(
    `${baseUrl}/appraisal/config/queryAppraisalTemplateLinkList?templateCode=${params.templateCode}`,{}
  )
}

/**
 * AUthor:fastfan
 * creatTime:2020.09.17
 * description: 保存/修改/删除 考核指标配置
 * @param {Object} params
 * @param {Array} params.linkDtoList  指标排序相关
 * @param {String} params.linkDtoList[m].id 指标id
 * @param {String} params.linkDtoList[m].quotaCode 指标code
 * @param {String} params.linkDtoList[m].showName 模板名称
 * @param {String} params.linkDtoList[m].sort 模板偶排序
 * @param {String} params.linkDtoList[m].templateCode 模板code
 * @param {Object} params.templateDto 模板相关
 * @param {Object} params.templateDto.appraisalCycle 考核周期 M 月；Q 季；H 半年；Y 年
 * @param {String} params.templateDto.appraisalType 考核类型 1、部门考核 2、个人考核
 * @param {String} params.templateDto.dataRange 数据范围
 * @param {String} params.templateDto.deptRange 部门范围
 * @param {String/Number} params.templateDto.id 主键
 * @param {String} params.templateDto.remark  状态 0、失效 1、有效
 * @param {String} params.templateDto.startMonth  核开始月度
 * @param {String} params.templateDto.status  模板状态 0、删除 1、启用 2、停用
 * @param {String} params.templateDto.templateCode  模板code
 * @param {String} params.templateDto.templateName  模板名称
 */
export const saveAppraisalTemplate = params => {
  return request.post(
    `${baseUrl}/appraisal/config/saveAppraisalTemplate`,
    {
      linkDtoList:params.linkDtoList,
      templateDto:params.templateDto
    }
  )
}

/**
 * AUthor:fastfan
 * creatTime:2020.09.22
 * description: 查询考核报表
 * @param {Object} params
 * @param {String} params.appraisalCycle 考核周期 M 月；Q 季；H 半年；Y 年
 * @param {String} params.appraisalReportName 考核名称
 * @param {String} params.appraisalTime  考核时间
 * @param {String} params.appraisalType 考核类型 1、部门考核 2、个人考核
 * @param {Object} params.deptId  登陆人部门
 *
 */
export const queryAppraisalReportList = params => {
  return request.post(
    `${baseUrl}/appraisal/report/queryAppraisalReportList`,
    {
      appraisalCycle:params.appraisalCycle,
      appraisalReportName:params.appraisalReportName,
      appraisalTime:params.appraisalTime,
      appraisalType:params.appraisalType,
      deptId:params.deptId,
    }
  )
}
