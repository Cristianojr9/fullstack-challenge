import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const Table = ({ columns, rows, loading = false, onCellClick, pageSize = 5}) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onCellClick={({row}) => onCellClick(row)}
        columnBuffer={9}
        rowHeight={40}
        rows={rows}
        loading={loading}
        columns={columns}
        pageSize={pageSize}
      />
    </div>
  );
}

export { Table };