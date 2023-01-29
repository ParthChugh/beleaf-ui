export function appUsers(props) {
  return {
    "App Users": [
      {
        type: "multi-inputs",
        name: "User",
        headerName: "User",
        rows: [
          {
            name: "user_id",
            headerName: "User ID",
            type: "link",
            href: "/:id",
            width: "185.46px",
            height: 9,
            disabled: true
          },
          {
            name: "name",
            headerName: "Name",
            width: "185.46px",
            type: "text",
            height: 9
          },
          {
            name: "contact_number",
            headerName: "Contact No.",
            width: "98px",
            type: "text",
            height: 9
          },
          {
            name: "role",
            headerName: "Role",
            width: "96.11px",
            type: "text",
            height: 9
          },
          {
            name: "app_status",
            headerName: "App Status",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "userAppStatus",
            optionVariable: "status",
            width: "132.74px",
            height: 41
          },
        ],
        value: props["App Users"] || [
          {
            "user_id": "LJBABGR001",
            name: "Neal Matthews",
            "contact_number": "087882233909",
            role: "Owner",
            "app_status": "Active"
          }
        ]
      }
    ]
  }
}