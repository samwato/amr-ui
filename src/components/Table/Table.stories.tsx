import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table, TableType } from '../Table'

export default {
  title: 'Data/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

const tableData: TableType = {
  columns: [
    {
      Header: 'Meter Name',
      accessor: 'meter_name',
    },
    {
      Header: 'Meter Protocol',
      accessor: 'meter_protocol',
    },
    {
      Header: 'Device ID',
      accessor: 'device_id',
      sortType: 'number',
    },
  ],
  data: [
    {
      meter_name: 'MSSB-1',
      meter_protocol: 'bacnet',
      device_id: '1000',
    },
    {
      meter_name: 'MSB-NMI-2',
      meter_protocol: 'modbus',
      device_id: '2',
    },
    {
      meter_name: 'DB-3',
      meter_protocol: 'bacnet',
      device_id: '1300',
    },
  ]
}


export const Default = Template.bind({})
Default.args = {
  data: tableData,
}

export const Sizes = Template.bind({})
Sizes.args = {
  ...Default.args,
  textSize: 'xs',
}
