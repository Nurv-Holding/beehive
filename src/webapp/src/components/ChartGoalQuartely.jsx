import moment from "moment";
import StockChart from "./chart"

const ChartGoalQuartely = ({ items = [], title = "" }) => {
  const historyDate = items.map(x => moment(x.updatedAt).format('DD/MM'))
  historyDate.unshift(moment(items[0]?.createdAt).format('DD/MM'))

  const historyPercentage = items.map(x => x.quaPercentage)
  historyPercentage.push(100)
  historyPercentage.unshift(0)

  const data = {
    // stockFullName: "SW Limited.",
    // stockShortName: "ASX:SFW",
    // price: {
    //   current: 2.32,
    //   open: 2.23,
    //   low: 2.215,
    //   high: 2.325,
    //   cap: 93765011,
    //   ratio: 20.1,
    //   dividend: 1.67,
    // },
    chartData: {
      labels: historyDate,
      data: historyPercentage,

    },
  };

  return (
    <>
      <StockChart info={data} title={title} />
    </>
  )
}

export default ChartGoalQuartely