export function appUsers(props) {
  return {
    getServerDetails: '',
    fields: {
      "App Users": [
        {
          type: "table",
          name: "App Users",
          headerName: "App Users",
          visibleFields: ['USER ID', 'NAME', 'CONTACT NO.', 'ROLE', 'FARM', 'Status'],
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
            {
              field: "app_status",
              headerName: "Status",
              width: 150,
              align: 'center',
              headerAlign: "center",
              renderCell: (params) => {
                return params.row.app_status.status
              },
            },
          ],
        }
      ]
    }
  }
}