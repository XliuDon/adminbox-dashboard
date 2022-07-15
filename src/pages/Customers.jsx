import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Selection, Filter, Toolbar, Edit, Inject} from '@syncfusion/ej2-react-grids'

import {customersData, customersGrid} from '../data/dummy';
import { Header } from '../components';

function Customers() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="Page" title="Customers"></Header>
    <GridComponent
      id="gridcomp"
      dataSource={customersData}
      allowPaging
      allowSelection
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowDeleting:true, allowEditing:true}}
      width="auto"
    >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
    </GridComponent>
  </div>
  )
}

export default Customers