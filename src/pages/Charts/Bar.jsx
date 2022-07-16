import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Category, Legend, ColumnSeries, DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components'

function Bar() {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-inherit dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Bar' title='Bar Chart' />
      <div className='w-full'>
        <ChartComponent
          id='bar-chart'
          height='420px'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea ={{border: {width: 0}}}
          tooltip = {{enable: true}}
          background = {currentMode === "Dark"? '#33373E': '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, DateTime, Tooltip, Category, Legend, DataLabel ]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item,index)=>(
              <SeriesDirective key={index} {...item} />
              ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar