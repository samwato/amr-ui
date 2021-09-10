import React, { useMemo, useState } from 'react'
import classnames from 'classnames'
import styles from './Table.module.css'

import { IconButton } from '../IconButton'
import { Text, TextSizeType } from '../Text'
import { TextField } from '../TextField'

import {
  useTable,
  useSortBy,
  useFilters,
  usePagination,
  useRowSelect,
  useResizeColumns,
  useFlexLayout,
} from 'react-table'

type TableColumnType = {
  Header: string;
  accessor: string;
  sortType?: string;
  disableFilters?: boolean;
}

type TableType = {
  columns: TableColumnType[];
  data: {};
}

interface TableProps {
  data: TableType;
  textSize: TextSizeType;
  resizable?: boolean;
}


export const Table = ({
  data,
  textSize = 'sm',
  resizable = false,
}: TableProps) => {
  
  const DefaultColumnFilter = ({ column, callback }) => {
    const { Header, filterValue, setFilter, toggleHidden } = column
    return (
      <TextField
        value={filterValue || ''}
        size="sm"
        type="search"
        placeholder={Header}
        onChange={e => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        onClear={() => {
          setFilter(undefined)
          callback()
        }}
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
          <Text size={textSize}>
            {column.render('Header')}
          </Text>
        : 
          <div className={styles.filterOption}>
            {column.render('Filter', {
              callback: () => setShowFilter(false)
            })}
          </div>
        }
        </div>
        <div className={styles.headerOptions}>
          <div className={filterOptionClasses}>
            <IconButton
              icon="SearchIcon"
              iconStyle="solid"
              variant="primary"
              size="sm"
              onClick={!showFilter ?
                () => setShowFilter(true)
                : () => {
                  column.setFilter(undefined)
                  setShowFilter(false)
                }
              }
            />
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
