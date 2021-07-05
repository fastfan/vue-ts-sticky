/*
 * @Author: fastfan
 * @Date: 2021-03-26 10:03:22
 * @LastEditors: fastfan
 * @LastEditTime: 2021-03-26 14:17:36
 * @Description: your description
 */
import Vue from "vue";
import SvgIcon from "@/components/SvgIcon"; // svg component

// register globally
Vue.component("svg-icon", SvgIcon);


const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)

const re = /[^-]+/g
const icons = requireAll(req).map(i => {
    return i.default.id.match(re)[1]
})

export default icons