export const newUser = {
  title: {
    "Product": "Add New User",
  },
  tabs: {
    "User": {
      "User": [
        {
          type: "switch",
          name: "Staff Status",
          width: '100%',
          left: 'Beleaf',
          right: 'Mitra',
          value: "Mitra",
          required: true,
          height: 41
        },
        {
          type: "input",
          name: "Production Code",
          // value: props["Company Name"] || "",
          placeholder: "XX-XXX-XX-XX",
          width: '100%',
          required: true,
          height: '9px',
        },
        {
          type: "input",
          name: "Name",
          placeholder: "John Doe",
          width: '100%',
          height: "9px",
          required: true
        },
        {
          type: "input",
          name: "Contact Number",
          placeholder: "0878803033399",
          width: '100%',
          height: "9px",
          required: true
        },
        {
          type: "input",
          name: "NIK",
          placeholder: "301287800190001",
          width: '431px',
          height: "9px",
          required: true
        },
        {
          type: "dropdown",
          name: "Role",
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
          name: "Farm Name",
          placeholder: "Kutani Farms",
          width: '100%',
          height: "9px",
          required: true
        },
      ]
    },
  }
}