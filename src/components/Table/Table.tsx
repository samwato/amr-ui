import React, { useMemo, useState } from 'react'
import classnames from 'classnames'
import styles from './Table.module.css'
import { TableType } from '../Table'
import { textSizeType } from '../globalTypes'

import { IconButton } from '../IconButton'
import { Text } from '../Text'

import {
  useTable,
  useSortBy,
  useFilters,
  usePagination,
  useRowSelect,
  useResizeColumns,
  useFlexLayout,
} from 'react-table'

type TableProps = {
  data: TableType;
  textSize: textSizeType;
  resizable?: boolean;
}

export const Table = ({
  data,
  textSize = 'sm',
  resizable = false,
}: TableProps) => {
  
  
  const DefaultColumnFilter = ({ column: { Header, filterValue, setFilter } }) => {    
    return (
      <input
        className={styles.filterInput}
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        placeholder={Header}
      />
    )
  }
  
  const TableHeaderCell = ({ column }) => {
    
    const [showFilter, setShowFilter] = useState(false)
    
    const filterOptionClasses = classnames({
      [styles.isOption]: showFilter,
    })
    const sortOptionClasses = classnames({
      [styles.isOption]: column.isSorted,
    })
    return (
      
      <div {...column.getHeaderProps()} className={styles.headerCell}>
        <div>
        {!showFilter ? 
          <Text size={textSize} weight="600">
            {column.render('Header')}
          </Text>
        : 
          <div className={styles.filterOption}>
            {column.render('Filter')}
            <div className={styles.filterClose}>
              <IconButton
                icon="XIcon"
                iconStyle="solid"
                size="xs"
                variant="plain"
                onClick={() => {
                  column.setFilter(undefined)
                  setShowFilter(false)
                }}
              />
            </div>
          </div>
        }
        </div>
        <div className={styles.headerOptions}>
          <div className={filterOptionClasses}>
            {!showFilter ? 
              <IconButton
                icon="SearchIcon"
                iconStyle="solid"
                variant="primary"
                size="sm"
                onClick={() => {
                  setShowFilter(true)
                }}
              /> : null }
          </div>
          <div
            className={sortOptionClasses}
            {...column.getSortByToggleProps()}
          >
            <span>
            {column.isSortedDesc ? 
              <IconButton
                icon="ArrowSmDownIcon"
                iconStyle="solid"
                variant="primary"
                size="sm"
              /> :
              <IconButton
                icon="ArrowSmUpIcon"
                iconStyle="solid"
                variant="primary"
                size="sm"
              />
            }
            </span>
          </div>
        </div>
      </div>
    )
  }
  
    
  const memoizedHeaders = useMemo(() => {
    return data.columns
  }, [data])
  
  const memoizedFields = useMemo(() => {
    return data.data
  }, [data])
  
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }), [])
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns: memoizedHeaders,
      data: memoizedFields,
      defaultColumn,
    },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    useResizeColumns,
    useFlexLayout,
  )
       
  return (
    <div className={styles.wrapper}>
    
      <div {...getTableProps()} className={styles.table}>
        <div>
          {headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps()} className={styles.header}>
              {headerGroup.headers.map(column => (
                TableHeaderCell({ column })
              ))}
            </div>
          ))}
        </div>

        <div {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className={styles.row}>
                {row.cells.map(cell => (
                  <div {...cell.getCellProps()} className={styles.rowCell}>
                    <Text size={textSize}>
                      {cell.render('Cell')}
                    </Text>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}
