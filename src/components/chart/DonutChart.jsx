import { useEffect, useState, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

const DonutChart = ({ data, handleLegendClick, checkedIndex }) => {
  const legendFontSize = '1.5rem';
  const dataLabelFontSize = '1.25rem';
  const tooltipFontSize = '1.25rem';
  const chartRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        const width = chartRef.current.offsetWidth;
        setChartWidth(width); // chartWidth를 실제 너비로 설정
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const options = {
    chart: {
      type: 'pie',
      width: chartWidth,
    },
    title: {
      text: '',
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
      enabled: true,
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
    accessibility: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 1100, // 차트 너비가 1100px 이하일 때 아래 옵션 적용
          },
          chartOptions: {
            legend: {
              enabled: false, // 범례를 숨깁니다.
            },
          },
        },
        {
          condition: {
            maxWidth: 800, // 차트 너비가 800px 이하일 때 아래 옵션 적용
          },
          chartOptions: {
            plotOptions: {
              pie: {
                padding: 0,
                distance: 0,
                dataLabels: {
                  format: `<b style='font-size: 1rem'>{point.name}: {point.percentage:.1f} %</b>`, // 데이터 레이블 폰트 사이즈를 0.75rem으로 조정
                },
              },
            },
            tooltip: {
              padding: 8,
              formatter: function () {
                return (
                  `<span style='color:${this.point.color}; width: 20px; height: 20px; display: inline-block; border-radius: 50%; text-align: center; line-height: 20px; margin-right: 5px; font-size: 20px; font-weight: bold;'>\u25CF</span>` +
                  `<b style='font-size: 1rem'>${
                    this.point.name
                  }: ${Highcharts.numberFormat(this.y, 0, ',', ',')}원</b>`
                );
              },
            },
          },
        },
        {
          condition: {
            maxWidth: 500, // 차트 너비가 500px 이하일 때 아래 옵션 적용
          },
          chartOptions: {
            plotOptions: {
              pie: {
                dataLabels: {
                  distance: -30,
                  format: `<b style='font-size: 0.75rem'>{point.name}</b>`, // 데이터 레이블 폰트 사이즈를 0.75rem으로 조정
                  color: 'white',
                },
              },
              tooltip: {
                style: {
                  fontSize: '0.75rem',
                },
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="w-full flex justify-center" ref={chartRef}>
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
