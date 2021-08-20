export type TableColumnType = {
  Header: string;
  accessor: string;
  sortType?: string;
  disableFilters?: boolean;
}

export type TableDataType = {};

export type TableType = {
  columns: TableColumnType[];
  data: TableDataType[];
}
