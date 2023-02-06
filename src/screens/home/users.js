import Link from '@mui/material/Link'

export default {
  visibleFields: ['USER ID', 'NAME', 'CONTACT NO.', 'ROLE', 'FARM'],
  searchField: "user_name",
  getServerDetails: '/rest/admin/users',
  columns: [
    {
      field: "id",
      headerName: "USER ID",
      width: 200,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "user_name",
      headerName: "NAME",
      width: 200,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "contact_number",
      headerName: "CONTACT NO.",
      width: 200,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "role",
      headerName: "ROLE",
      width: 150,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => {
        return params.row.role.role
      },
    },
    {
      field: "farm",
      headerName: "FARM",
      width: 150,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => {
        return params.row.farm.farm_name
      },
    },
  ],
  rows: [
    {
      id: "LJBABGR001",
      name: "Neal Matthews 1",
      contact_number: "087882233901",
      role: "Owner",
      farm: "Kapesh Farm",
    },
    {
      id: "LJBABGR002",
      name: "Neal Matthews 2",
      contact_number: "087882233902",
      role: "Owner",
      farm: "Kapesh Farm",
    },
    {
      id: "LJBABGR003",
      name: "Neal Matthews 3",
      contact_number: "087882233909",
      role: "Owner",
      farm: "Kapesh Farm",
    },
  ]

}