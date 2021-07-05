import SvgIcon from "./index.vue"

/* istanbul ignore next */
SvgIcon.install = function (Vue) {
    Vue.component(SvgIcon.name, SvgIcon)
};

export default SvgIcon;