<!--
 * @Author: fastfan
 * @Date: 2021-03-26 09:50:17
 * @LastEditors: fastfan
 * @LastEditTime: 2021-03-26 14:17:54
 * @Description: your description
-->

<script>
import svgIcon from "@/components/SvgIcon";
export default {
  name: "testComp",
  components: {
    svgIcon,
  },
  props: {
    config: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {},
  data() {
    return {
      listButton: this.config,
    };
  },
  methods: {
    clickLetter(item) {
      this.$root.$emit("letterInfo", item);
    },
    clickDelete(item) {
      this.$root.$emit("letterDelete", item);
    },
  },
  mounted() {
    console.log();
  },
  render(h) {
    return (
      <div class="letter-bar">
        {this._l(this.listButton, (item, index) => {
          return (
            <div>
              {item.type === "String" ? (
                <div
                  onclick={this.clickLetter.bind(this, item)}
                  style={item.buttonStyle}
                  class="letter-bar-letter"
                >
                  {item.label}
                </div>
              ) : item.type === "Pophover" && item.option ? (
                <el-popover
                  class="letter-bar-popover"
                  placement="letter"
                  width="200"
                  trigger="click"
                >
                  {item.option.type === "Array"
                    ? this._l(item.option.data, (items, index) => {
                        return (
                          <div
                            onclick={this.clickLetter.bind(this, items)}
                            class="letter-bar-popover-letter"
                          >
                            {items.label}
                          </div>
                        );
                      })
                    : null}
                  <div
                    style={item.buttonStyle}
                    class="letter-bar-popover-btn"
                    slot="reference"
                  >
                    {item.label}
                  </div>
                </el-popover>
              ) : item.type === "Svg" ? (
                <div
                  onclick={this.clickDelete.bind(this, item)}
                  style={item.buttonStyle}
                  class="letter-bar-letter"
                >
                  <svgIcon iconClass={item.option.svgName} class="block-svg" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  },
};
</script>
<style scoped lang="scss">
.letter-bar {
  width: 40px;
  display: flex;
  flex-direction: column;
  &-letter {
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 16px;
    .block-svg {
      width: 16px;
      height: 16px;
      margin-right: 0;
    }
  }
  &-popover {
    font-size: 20px;
    &-btn {
      height: 40px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      margin-bottom: 16px;
    }
    &-letter {
      float: left;
      width: 25%;
      margin: 16px 0 0 0;
      text-align: center;
      cursor: pointer;
    }
    &-letter:nth-child(4n) {
      text-align: center;
    }
    &-letter:nth-child(1),
    &-letter:nth-child(2),
    &-letter:nth-child(3),
    &-letter:nth-child(4) {
      margin: 12px 0 0px 0;
    }
    &-letter:nth-child(25) {
      margin: 16px 0 16px 0;
    }
  }
}
</style>
