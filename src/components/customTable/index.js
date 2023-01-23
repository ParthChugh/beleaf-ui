import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridLinkOperator
} from '@mui/x-data-grid';
import './CustomTable.css'
import PaginationItem from '@mui/material/PaginationItem';
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';

function CustomPagination({totalItems}) {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Box className="custom_table__container">
      <Typography>Showing {page * 15 + 1} - {(page + 1) * 15} of {totalItems}</Typography>
      <Pagination
        // color="primary"
        count={pageCount}
        page={page + 1}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#fff",
            backgroundColor: "#3EB049"
            
          },
        }}
        renderItem={(item) => (
          <PaginationItem
            slots={{ first: KeyboardDoubleArrowLeft, previous: KeyboardArrowLeft, next: KeyboardArrowRight, last: KeyboardDoubleArrowRight, }}
            {...item}
          />
        )}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    </Box>
  );
}

export default function QuickFilteringCustomizedGrid(props) {
  const VISIBLE_FIELDS = props.visibleFields
  const totalItems = props.totalItems
  const farmDetails = props.data
  const columns = React.useMemo(
    () => farmDetails.columns.filter((column) => VISIBLE_FIELDS.includes(column.headerName)),
    [farmDetails.columns],
  );

  return (
    <Box sx={{
      height: 500,
      "& .MuiDataGrid-root .MuiDataGrid-columnHeader .MuiDataGrid-iconButtonContainer": {
        width: "auto",
        visibility: "visible"
      },
      "& .MuiDataGrid-root .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon": {
        opacity: 0.5
      }
    }}>
      <DataGrid
        {...farmDetails}
        columns={columns}
        pageSize={15}
        autoHeight
        sx={{
          '& .MuiDataGrid-columnHeaderTitle': {
            color: '#3EB049',
            align: 'center',
            fontFamily: 'Poppins',
            fontSize: 14
          },
          '& .MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
          '& .MuiDataGrid-cell': {
            fontFamily: 'Poppins',
            fontSize: 14
          }
        }}
        components={{
          ColumnUnsortedIcon: () => <ArrowDropDownIcon style={{ color: '#8A9099' }} />,
          Pagination: (props) => <CustomPagination {...props} totalItems={totalItems}  />,
        }}
        density='comfortable'
        disableColumnMenu
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterLogicOperator: GridLinkOperator.Or,
            },
          },
        }}
      />
    </Box>
  );
}