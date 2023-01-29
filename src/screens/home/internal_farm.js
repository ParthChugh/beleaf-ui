export const internalFarm = {
  title: {
    "Mitra Data": "Add New Internal Farm",
    "Location & Facilities": "Farm Location and Facilities",
    "Features Governance": "Features Governance"
  },
  tabs: {
    "Form Data": {
      "Form Data": [
        {
          type: "input",
          name: "Company Name",
          width: '100%',
          // value: props["Company Name"] || "",
          required: true,
          height: 9,
          placeholder: "PT Beleaf Farms"
        },
        {
          type: "input",
          name: "Farm Name",
          // value: props["Farm Name"] || "",
          width: '100%',
          required: true,
          height: 9,
          placeholder: "Bojong Farm"
        },
      ],
    },
    "Location & Facilities": {
      "Location & Facilities": [
        {
          type: "dropdown",
          name: "Select Province",
          optionUrl: '/rest/provinces',
          optionVariable: "province",
          width: '100%',
          required: true,
          height: '41px'
        },
        {
          type: "input",
          name: "Select District",
          // value: props[" Select District"] || "",
          width: '100%',
          required: true,
          height: '9px'
        },
        {
          type: "input",
          name: "Farm Address",
          // value: props["Farm Address"] || "",
          width: '518px',
          required: true,
          // multiline: 2,
          height: '9px'
        },
        {
          type: "location",
          name: "Latitude/Longitude",
          // value: props["Latitude/Longitude"] || "",
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
    },
    "Features Governance": {
      "Features Governance": [
        {
          type: "dropdown",
          name: "Farm Function",
          optionUrl: '/rest/metadata',
          optionMainVariable: "farmFunctions",
          optionVariable: "function",
          width: '100%',
          // value: props["Farm Function"] || "",
          required: true,
          height: 41
        },
        {
          type: "dropdown",
          name: "Batch Tracking Method",
          optionUrl: '/rest/metadata',
          optionMainVariable: "batchTrackingMethods",
          optionVariable: "method_name",
          width: '100%',
          // value: props["Batch Tracking Method"] || "",
          required: true,
          height: 41
        },
      ]
    }

  }

}