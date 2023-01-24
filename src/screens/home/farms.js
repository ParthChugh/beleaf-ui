import Link from '@mui/material/Link'

export default {
  visibleFields: ['FARM ID', 'FARM NAME', 'FARM CONTACT', 'FARM TYPE', 'PROVINCE', 'DISTRICT', 'RELATION', 'FUNCTION'],
  columns: [
    {
      field: "id",
      headerName: "FARM ID",
      width: 150,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => (
        <Link className='tabs_cell__link' href={`/dashboard/farms/${params.id}`}>
          {params.id}
        </Link>
      ),
    },
    {
      field: "name",
      headerName: "FARM NAME",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "contact",
      headerName: "FARM CONTACT",
      width: 200,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "type",
      headerName: "FARM TYPE",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "province",
      headerName: "PROVINCE",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "district",
      headerName: "DISTRICT",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "relation",
      headerName: "RELATION",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "function",
      headerName: "FUNCTION",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
  ],
  rows: [
    {
      id: "LJBABGR001",
      name: "Kapesh Farm",
      contact: "Neal Matthews",
      type: "water,crop,sun",
      province: "West Java",
      district: "Semplak",
      relation: "Mitra",
      function: "Producer"
    },
    {
      id: "LJBABGR001",
      name: "Kapesh Farm",
      contact: "Neal Matthews",
      type: "water,crop,sun",
      province: "West Java",
      district: "Semplak",
      relation: "Mitra",
      function: "Producer"
    },
    {
      id: "LJBABGR001",
      name: "Kapesh Farm",
      contact: "Neal Matthews",
      type: "water,crop,sun",
      province: "West Java",
      district: "Semplak",
      relation: "Mitra",
      function: "Producer"
    },
  ]

}