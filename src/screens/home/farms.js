import Link from '@mui/material/Link'

export default {
  visibleFields: ['FARM ID', 'FARM NAME', 'FARM CONTACT', 'FARM TYPE', 'PROVINCE', 'DISTRICT', 'RELATION', 'FUNCTION'],
  getServerDetails: '/rest/admin/farms',
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
      field: "farm_name",
      headerName: "FARM NAME",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "contact_name",
      headerName: "FARM CONTACT",
      width: 200,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "farm_types",
      headerName: "FARM TYPE",
      width: 150,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => {
        console.log("params123123", )
        return (params?.row?.farm_types || [])?.map(el => el.farm_type_name)?.join(',')
      },
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
      field: "farm_function",
      headerName: "FUNCTION",
      width: 150,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => {
        console.log("params123123", params)
        return params?.row?.farm_function?.function
      },
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