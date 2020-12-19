import numeral from 'numeral'
import { date } from 'quasar'
import _ from 'lodash'
import commonUtil from 'src/utils/commonUtil'

const visitData = {
  icon: 'visibility',
  dayVisitCount: '5,848',
  dayForCompare: '12.5%',
  weekForCompare: '5.0%',
  visitTotal: '280 万'
}
const saleData = {
  icon: 'attach_money',
  saleMoney: '12,000',
  saleForCompare: '60',
  saleTotal: '68 万'
}
const orderData = {
  icon: 'reorder',
  dayOrderCount: '1,680',
  dayForCompare: '12.5%',
  weekForCompare: '8.0%',
  conversionRate: '60 %'
}
const userData = {
  icon: 'people_alt',
  dayIncrease: '128',
  users: [
    {
      head:
        'https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar',
      name: 'Yue Han'
    },
    {
      head:
        'https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar',
      name: 'Jony'
    },
    {
      head:
        'https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar',
      name: 'Qiao Zhi'
    },
    {
      head:
        'https://dev-file.iviewui.com/xrzbBR99F6tYsDJPLNrvwhllowbuL7Gw/avatar',
      name: 'Xiao Xiao'
    },
    {
      head:
        'https://dev-file.iviewui.com/bgrngoUb9A6UQ2kAwBFtnSNzhrh2qj1O/avatar',
      name: 'Si Jun'
    },
    {
      head:
        'https://dev-file.iviewui.com/bgrngoUb9A6UQ2kAwBFtnSNzhrh2qj1O/avatar',
      name: 'Woney'
    },
    {
      head:
        'https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar',
      name: 'Hellen'
    }
  ],
  userTotal: '10800'
}
const linkData = [
  {
    icon: 'group',
    desc: '用户',
    textColor: 'primary'
  },
  {
    icon: 'leaderboard',
    desc: '分析',
    textColor: 'green'
  },
  {
    icon: 'shopping_cart',
    desc: '商品',
    textColor: 'orange'
  },
  {
    icon: 'assignment',
    desc: '订单',
    textColor: 'purple'
  },
  {
    icon: 'card_travel',
    desc: '票据',
    textColor: 'yellow'
  },
  {
    icon: 'email',
    desc: '消息',
    textColor: 'info'
  },
  {
    icon: 'bookmarks',
    desc: '标签',
    textColor: 'accent'
  },
  {
    icon: 'design_services',
    desc: '配置',
    textColor: 'deep-orange'
  }
]

const visitRankData = []
for (let index = 1; index < 8; index++) {
  const visitRankDataTemp = {
    rank: index,
    desc: '东直门 ' + index + ' 号',
    visitNum: _.random(1000, 20000)
  }
  visitRankData.push(visitRankDataTemp)
}
const hotSearchData = {
  columns: [
    {
      name: 'rank',
      required: true,
      label: '排名',
      align: 'left',
      field: 'rank',
      sortable: true
    },
    {
      name: 'searchKey',
      align: 'left',
      label: '搜索关键词',
      field: 'searchKey',
      sortable: true
    },
    {
      name: 'userCount',
      align: 'left',
      label: '用户数',
      field: 'userCount',
      sortable: true
    },
    {
      name: 'zhangfu',
      align: 'right',
      label: '周涨幅',
      field: 'zhangfu',
      sortable: true
    }
  ],
  data: [
    {
      rank: 1,
      searchKey: '搜索关键词-0',
      userCount: numeral(257).format('0,0'),
      zhangfu: '31%'
    },
    {
      rank: 2,
      searchKey: '搜索关键词-1',
      userCount: numeral(2527).format('0,0'),
      zhangfu: '22%'
    },
    {
      rank: 3,
      searchKey: '搜索关键词-2',
      userCount: numeral(2527).format('0,0'),
      zhangfu: '25%'
    },
    {
      rank: 4,
      searchKey: '搜索关键词-3',
      userCount: numeral(3257).format('0,0'),
      zhangfu: '40%'
    },
    {
      rank: 5,
      searchKey: '搜索关键词-4',
      userCount: numeral(4257).format('0,0'),
      zhangfu: '20%'
    }
  ]
}

const eLineData = {
  height: 100,
  option: {
    xAxis: {
      show: false,
      data: []
    },
    yAxis: {
      show: false
    },
    series: {
      name: '访问来源',
      data: []
    },
    grid: {
      right: '1%',
      top: '30%',
      left: '-6%',
      containLabel: true
    }
  }
}

const eBarData = {
  height: 260,
  option: {
    xAxis: {
      data: []
    },
    grid: {
      top: '15%',
      margin: '5%'
    },
    series: {
      name: '访问来源',
      data: []
    }
  }
}

function buildViewItemsForEbar(items, format, eBarData) {
  const optionData = buildViewItems(items, format)
  eBarData.option.xAxis.data = optionData.xAxisData
  eBarData.option.series.data = optionData.seriesData
}

function buildViewItems(items, format) {
  const option = {
    xAxisData: [],
    seriesData: []
  }
  for (let i = 0; i < items.length; i++) {
    const nameFormat = date.formatDate(items[i].date, format)
    option.xAxisData.push(nameFormat)
    option.seriesData.push({
      name: nameFormat,
      value: items[i].number
    })
  }
  return option
}

function buildEbarItems(startDate, endDate, barType, eBarData) {
  let format = 'YYYY/MM/DD'
  let unit = 'days'
  if (barType === 'currentYear') {
    format = 'YYYY/MM'
    unit = 'months'
  }
  let dateDiff = date.getDateDiff(startDate, endDate, unit)
  if (dateDiff < 0) {
    dateDiff = -dateDiff
  }
  const barItemDatas = []
  for (let i = 0; i < dateDiff; ++i) {
    let dateTemp = date.addToDate(startDate, { days: i })
    if (barType === 'currentYear') {
      dateTemp = date.addToDate(startDate, { month: i })
    }
    const data = {
      date: dateTemp,
      number: commonUtil.getRandomFloorInt(1000)
    }
    barItemDatas.push(data)
  }
  buildViewItemsForEbar(barItemDatas, format, eBarData)
}

export default {
  visitData,
  saleData,
  orderData,
  userData,
  linkData,
  visitRankData,
  hotSearchData,
  eLineData,
  eBarData,
  buildEbarItems,
  buildViewItems,
  buildViewItemsForEbar
}
