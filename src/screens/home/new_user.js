export const newUser = {
  title: {
    "Product": "Add New User",
  },
  tabs: {
    "User": {
      "User": [
        {
          type: "switch",
          name: "staff_type_id",
          headerName: "Staff Status",
          width: '100%',
          required: true,
          height: 41,
          optionUrl: '/rest/metadata',
          optionMainVariable: "userStaffTypes",
          optionVariable: "staff_type",
          value: "Private"
        },
        {
          type: "input",
          name: "production_code",
          headerName: "Production Code",
          // value: props["Company Name"] || "",
          placeholder: "XX-XXX-XX-XX",
          width: '100%',
          required: true,
          height: '9px',
        },
        {
          type: "input",
          name: "user_name",
          headerName: "Name",
          placeholder: "John Doe",
          width: '100%',
          height: "9px",
          required: true
        },
        {
          type: "input",
          name: "contact_number",
          headerName: "Contact Number",
          placeholder: "0878803033399",
          width: '100%',
          height: "9px",
          required: true
        },
        {
          type: "input",
          name: "nik",
          headerName: "NIK",
          placeholder: "301287800190001",
          width: '431px',
          height: "9px",
          required: true
        },
        {
          type: "dropdown",
          name: "role_id",
          headerName: "Role",
          width: '431px',
          options: [
            'Owner',
            'Farm Manager',
            'Worker'
          ],
          required: true,
          height: 41
        },
        {
          type: "input",
          name: "farm_id",
          headerName: "Farm Name",
          placeholder: "Kutani Farms",
          width: '100%',
          height: "9px",
          required: true
        },
      ]
    },
  }
}