export const masterData = (props) => {
  return {
    "Basic Data": [
      {
        type: "dropdown",
        name: "Ownership",
        options: [
          'Company',
          'Employee'
        ],
        width: '259px',
        value: props["Ownership"] || "",
        required: true,
        height: 41
      },
      {
        type: "input",
        name: "Company Name",
        value: props["Company Name"] || "",
        width: '412px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "Farm Name",
        value: props["Farm Name"] || "",
        width: '704px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "Farm Contact",
        value: props["Farm Contact"] || "",
        width: '330px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "Contact Number",
        value: props["Contact Number"] || "",
        width: '330px',
        required: true,
        height: '9px'
      },
      {
        type: "date",
        name: "Creation Date",
        value: props["Creation Date"] || "",
        width: '167px',
        required: true,
        height: '9px'
      },
    ],
    "Location & Facilities": [
      {
        type: "dropdown",
        name: "Province",
        optionUrl: '/rest/provinces',
        optionVariable: "province",
        value: props["Province"] || "",
        width: '245px',
        required: true,
        height: '41px'
      },
      {
        type: "input",
        name: "District",
        value: props["District"] || "",
        width: '245px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "Farm Address",
        value: props["Farm Address"] || "",
        width: '518px',
        required: true,
        // multiline: 2,
        height: '9px'
      },
      {
        type: "location",
        name: "Lat/Long",
        value: props["Lat/Long"] || "",
        width: '371px',
        required: true,
        showMap: true,
        height: '9px'
      },
    ],
    "Hydroponics": [
      {
        type: "multi-inputs",
        name: "Greenhouse",
        rows: [
          {
            name: "Greenhouse Name",
            width: "228px",
            height: 9
          },
          {
            name: "Floor Area",
            width: "144px",
            height: 9
          },
          {
            name: "Number of Holes",
            width: "132px",
            height: 9
          },
          {
            name: "Dosing",
            width: "167px",
            height: 9
          }
        ],
        value: [
          {
            "Greenhouse Name": "",
            "Floor Area": "",
            "Number of Holes": "",
            "Dosing": ""
          }
        ],
      }
    ],
    "Open Field": [
      {
        type: "multi-inputs",
        name: "Open Field",
        rows: [
          {
            name: "Farmable Land Area",
            width: "228px"
          },
          {
            name: "Farmed Land Area",
            width: "144px"
          },
          {
            name: "Irrigation",
            width: "132px"
          },
          {
            name: "Land Area Irrigated",
            width: "167px"
          }
        ],
        value: [
          {
            "Farmable Land Area": "",
            "Farmed Land Area": "",
            "Irrigation": "",
            "Land Area Irrigated": ""
          }
        ]
      }
    ],
    "Soilless": [
      {
        type: "multi-inputs",
        name: "Soilless",
        rows: [
          {
            name: "Greenhouse Name",
            width: "228px"
          },
          {
            name: "Floor Area",
            width: "144px"
          },
          {
            name: "Number of Holes",
            width: "132px"
          },
          {
            name: "Dosing",
            width: "167px"
          }
        ],
        value: [
          {
            "Greenhouse Name": "",
            "Floor Area": "",
            "Number of Holes": "",
            "Dosing": ""
          }
        ],
      }
    ],
    "Feature Governance": [
      {
        type: "dropdown",
        name: "Farm Function",
        optionUrl: '/rest/metadata',
        optionMainVariable: "farmFunctions",
        optionVariable: "function",
        width: '293px',
        value: props["Farm Function"] || "",
        required: true,
        height: 41
      },
      {
        type: "dropdown",
        name: "Batch Tracking Method",
        optionUrl: '/rest/metadata',
        optionMainVariable: "batchTrackingMethods",
        optionVariable: "method_name",
        width: '293px',
        value: props["Batch Tracking Method"] || "",
        required: true,
        height: 41
      },
    ]
  }
}