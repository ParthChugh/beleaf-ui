export const masterData = (props) => {
  return {
    "Basic Data": [
      {
        type: "dropdown",
        name: "ownership",
        headerName: "Ownership",
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
        name: "company_name",
        headerName: "Company Name",
        value: props["Company Name"] || "",
        width: '412px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "farm_name",
        headerName: "Farm Name",
        value: props["Farm Name"] || "",
        width: '704px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "farm_contact",
        headerName: "Farm Contact",
        value: props["Farm Contact"] || "",
        width: '330px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "contact_number",
        headerName: "Contact Number",
        value: props["Contact Number"] || "",
        width: '330px',
        required: true,
        height: '9px'
      },
      {
        type: "date",
        name: "creation_date",
        headerName: "Creation Date",
        value: props["Creation Date"] || "",
        width: '167px',
        required: true,
        height: '9px'
      },
    ],
    "Location & Facilities": [
      {
        type: "dropdown",
        name: "province",
        headerName: "Province",
        optionUrl: '/rest/provinces',
        optionVariable: "province",
        value: props["Province"] || "",
        width: '245px',
        required: true,
        height: '41px'
      },
      {
        type: "input",
        name: "district",
        headerName: "District",
        value: props["District"] || "",
        width: '245px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "farm_address",
        headerName: "Farm Address",
        value: props["Farm Address"] || "",
        width: '518px',
        required: true,
        // multiline: 2,
        height: '9px'
      },
      {
        type: "location",
        name: "location",
        headerName: "Lat/Long",
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
        name: "greenhouse",
        headerName: "Greenhouse",
        rows: [
          {
            name: "greenhouse_name",
            headerName: "Greenhouse Name",
            width: "228px",
            height: 9
          },
          {
            name: "floor_area",
            headerName: "Floor Area",
            width: "144px",
            height: 9
          },
          {
            name: "holes",
            headerName: "Number of Holes",
            width: "132px",
            height: 9
          },
          {
            name: "dosing",
            headerName: "Dosing",
            width: "167px",
            height: 9
          }
        ],
        value: [
          {
            "greenhouse_name": "",
            "floor_area": "",
            "holes": "",
            "dosing": ""
          }
        ],
      }
    ],
    "Open Field": [
      {
        type: "multi-inputs",
        name: "open_field",
        headerName: "Open Field",
        rows: [
          {
            name: "farmable_land_area",
            headerName: "Farmable Land Area",
            width: "228px"
          },
          {
            name: "farmed_land_area",
            headerName: "Farmed Land Area",
            width: "144px"
          },
          {
            name: "irrigation",
            headerName: "Irrigation",
            width: "132px"
          },
          {
            name: "land_area_irrigated",
            headerName: "Land Area Irrigated",
            width: "167px"
          }
        ],
        value: [
          {
            "farmable_land_area": "",
            "farmed_land_area": "",
            "irrigation": "",
            "land_area_irrigated": ""
          }
        ]
      }
    ],
    "Soilless": [
      {
        type: "multi-inputs",
        name: "soilless",
        headerName: "Soilless",
        rows: [
          {
            name: "greenhouse_name",
            headerName: "Greenhouse Name",
            width: "228px"
          },
          {
            name: "floor_area",
            headerName: "Floor Area",
            width: "144px"
          },
          {
            name: "holes",
            headerName: "Number of Holes",
            width: "132px"
          },
          {
            name: "dosing",
            headerName: "Dosing",
            width: "167px"
          }
        ],
        value: [
          {
            "greenhouse_name": "",
            "floor_area": "",
            "holes": "",
            "dosing": ""
          }
        ],
      }
    ],
    "Feature Governance": [
      {
        type: "dropdown",
        name: "farm_function",
        headerName: "Farm Function",
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
        name: "batch_tracking_method",
        headerName: "Batch Tracking Method",
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