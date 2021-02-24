module.exports = {
    "plugins": {
        "postcss-pxtorem": {
            rootValue: 37.5, //vant官方字体大小37.5
            propList: ["*"],
            selectorBlackList: [".norem"] //过滤.norem-开头的class，不进行rem转换
        }
    }
}