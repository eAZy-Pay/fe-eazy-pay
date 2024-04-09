import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

const DonutChart = ({ data, handleLegendClick, checkedIndex }) => {
  const legendFontSize = '20px';
  const dataLabelFontSize = '16px';
  const tooltipFontSize = '18px';
  const options = {
    chart: {
      type: 'pie',
      width: 1100,
    },
    title: {
      text: '월 평군 금액',
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: `<b style='font-size: ${dataLabelFontSize}'>{point.name}: {point.percentage:.1f} %</b>`,
        },
        showInLegend: true,
        point: {
          events: {
            legendItemClick: function () {
              handleLegendClick(this.index);
              var series = this.series;
              if (this.index === checkedIndex) {
                series.data[this.index].select(false, false);
                return false;
              }
              series.data[this.index].select(true, false);

              return false;
            },
            click: function () {
              handleLegendClick(this.index);
              var series = this.series;
              if (this.index === checkedIndex) {
                series.data[this.index].select(false, false);
                return false;
              }
              series.data[this.index].select(true, false);

              return false;
            },
          },
        },
      },
    },
    series: [
      {
        name: 'Categories',
        colorByPoint: true,
        data: data.map((item, index) => ({
          name: item.categoryName,
          y: item.useAmount,
          sliced: checkedIndex === index,
          selected: checkedIndex === index,
        })),
      },
    ],
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      symbolWidth: 20,
      symbolHeight: 20,
      symbolRadius: 0,
      itemMarginTop: 10,
      itemMarginBottom: 10,
      margin: 10,
      padding: 10,
      squareSymbol: false,
      itemStyle: {
        fontSize: legendFontSize,
        textAlign: 'center',
      },
      labelFormatter: function () {
        return (
          this.name +
          ' ' +
          Highcharts.numberFormat(this.percentage, 1) +
          '% | ' +
          Highcharts.numberFormat(this.y, 0, ',', ',') +
          '원'
        );
      },
    },
    tooltip: {
      padding: 10,
      formatter: function () {
        return (
          `<span style='color:${this.point.color}; width: 20px; height: 20px; display: inline-block; border-radius: 50%; text-align: center; line-height: 20px; margin-right: 5px; font-size: 20px; font-weight: bold;'>\u25CF</span>` +
          `<b style='font-size:${tooltipFontSize}'>${
            this.point.name
          }: ${Highcharts.numberFormat(this.y, 0, ',', ',')}원</b>`
        );
      },
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

DonutChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string.isRequired,
      useAmount: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleLegendClick: PropTypes.func.isRequired,
  checkedIndex: PropTypes.number.isRequired,
};

export default DonutChart;
