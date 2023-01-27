export function appUsers(props) {
  return {
    "App Users": [
      {
        type: "multi-inputs",
        name: "User",
        rows: [
          {
            name: "User ID",
            type: "link",
            href: "/:id",
            width: "185.46px",
            height: 9,
            disabled: true
          },
          {
            name: "Name",
            width: "185.46px",
            type: "text",
            height: 9
          },
          {
            name: "Contact No.",
            width: "98px",
            type: "text",
            height: 9
          },
          {
            name: "Role",
            width: "96.11px",
            type: "text",
            height: 9
          },
          {
            name: "App Status",
            type: "dropdown",
            optionUrl: '/api/rest/metadata',
            optionMainVariable: "userAppStatus",
            optionVariable: "status",
            width: "132.74px",
            height: 41
          },
        ],
        value: props["App Users"] || [
          {
            "User ID": "LJBABGR001",
            Name: "Neal Matthews",
            "Contact No.": "087882233909",
            Role: "Owner",
            "App Status": "Active"
          }
        ]
      }
    ]
  }
}