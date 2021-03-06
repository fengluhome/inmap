 /**
  * 默认散点、围栏参数结构
  */

 export default {
     tooltip: {
         show: false,
         customClass: 'black', //是否自定义样式
         offsets: {
             top: 0, //上偏移
             left: 0 //左偏移
         }

     },
     legend: {
         show: false,
         toFixed: 2, //保留两位小数
     },

     style: {
         normal: {
             borderWidth: 0.1,
             backgroundColor: 'rgba(200, 200, 200, 0.5)',
             scale: 1,
             label: {
                 show: false,
                 color: '#fff',
                 fontSize: 12
             },
         },
         mouseOver: {
             scale: 1,
             label: {

             }
         },
         selected: {
             scale: 1,
             label: {

             }

         },
         colors: [

         ],
         splitList: [],

     },
     data: [],
     event: {
         multiSelect: true, //是否支持多选
         /*eslint-disable */
         onMouseClick: function (item, event) {

         }
         /*eslint-enable */
     }
 };