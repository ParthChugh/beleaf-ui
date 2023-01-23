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
        type: "input",
        name: "Province",
        value: props["Province"] || "",
        width: '245px',
        required: true,
        height: '9px'
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
        multiline: 2,
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
            width: "317.07px",
            height: 9
          },
          {
            name: "Floor Area",
            width: "200.09px",
            height: 9
          },
          {
            name: "Number of Holes",
            width: "184.7px",
            height: 9
          },
          {
            name: "Dosing",
            width: "232.41px",
            height: 9
          }
        ],
        value: props["Add Greenhouse"] || [
          {
            "Greenhouse Name": "Greenhouse A",
            "Floor Area": "1000 Meters",
            "Number of Holes": "1000",
            "Dosing": "Automatic"
          },
          {
            "Greenhouse Name": "Greenhouse B",
            "Floor Area": "1000 Meters",
            "Number of Holes": "1000",
            "Dosing": "Automatic"
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
            width: "317.07px"
          },
          {
            name: "Farmed Land Area",
            width: "200.09px"
          },
          {
            name: "Irrigation",
            width: "184.7px"
          },
          {
            name: "Land Area Irrigated",
            width: "232.41px"
          }
        ],
        value: props["Open Field"] || [],
      }
    ],
    "Soilless": [
      {
        type: "multi-inputs",
        name: "Soilless",
        rows: [
          {
            name: "Greenhouse Name",
            width: "317.07px"
          },
          {
            name: "Floor Area",
            width: "200.09px"
          },
          {
            name: "Number of Holes",
            width: "184.7px"
          },
          {
            name: "Dosing",
            width: "232.41px"
          }
        ],
        value: props["Soilless"] || [],
      }
    ],
    "Feature Governance": [
      {
        type: "dropdown",
        name: "Farm Function",
        options: [
          'Consolidator',
          'Producer'
        ],
        width: '293px',
        value: props["Farm Function"] || "",
        required: true,
        height: 41
      },
      {
        type: "dropdown",
        name: "Batch Tracking Method",
        options: [
          'Direct Batch',
          'Time'
        ],
        width: '293px',
        value: props["Batch Tracking Method"] || "",
        required: true,
        height: 41
      },
    ]
  }
}