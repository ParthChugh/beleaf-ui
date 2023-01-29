export const newMitra = {

  title: {
    "Mitra Data": "Add New Internal Farm",
    "Location & Facilities": "Farm Location and Facilities",
    "Features Governance": "Features Governance",
    "Products & Production": "Products & Production",
  },
  tabs: {
    "Mitra Data": {
      "Mitra Data": [
        {
          type: "switch",
          name: "Ownership",
          left: 'Company',
          right: 'Employee',
          width: '100%',
          value: "Company",
          required: true,
          height: 41
        },
        {
          type: "input",
          name: "Company Name",
          // value: props["Company Name"] || "",
          width: '100%',
          required: true,
          height: '9px',
          dependant: "Ownership.Company"
        },
        {
          type: "input",
          name: "Farm Name",
          // value: props["Farm Name"] || "",
          width: '100%',
          required: true,
          height: '9px'
        },
        {
          type: "input",
          name: "Farm Contact",
          // value: props["Farm Contact"] || "",
          width: '330px',
          required: true,
          height: '9px'
        },
        {
          type: "input",
          name: "Contact Number",
          // value: props["Contact Number"] || "",
          width: '431px',
          required: true,
          height: '9px'
        },
        // {
        //   type: "date",
        //   name: "Creation Date",
        //   // value: props["Creation Date"] || "",
        //   width: '431px',
        //   required: true,
        //   height: '9px'
        // },
      ]
    },

    "Location & Facilities": {
      "Location & Facilities": [
        {
          type: "dropdown",
          name: "Select Province",
          // value: props[" Select Province"] || "",
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
    "Feature Governance": {
      "Feature Governance": [
        {
          type: "dropdown",
          name: "Farm Function",
          optionUrl: '/rest/metadata',
          optionMainVariable: "farmFunctions",
          optionVariable: "function",
          width: '293px',
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
          width: '293px',
          // value: props["Batch Tracking Method"] || "",
          required: true,
          height: 41
        },
      ]
    },
    "Historic Yields": {
      "Historic Yields": [
        {
          type: "multi-inputs",
          name: "Products",
          rows: [
            {
              name: "Product",
              width: "185.46px",
              height: 9
            },
            {
              name: "Method",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmTypes",
              optionVariable: "farm_type_name",
              width: "185.46px",
              height: 41
            },
            {
              name: "Quantity",
              width: "98px",
              height: 9
            },
            {
              name: "UOM",
              width: "96.11px",
              height: 41,
              type: "dropdown",
              options: [
                "Kg",
                "Ton"
              ],
            },
            {
              name: "Frequency",
              width: "132.74px",
              height: 41,
              type: "dropdown",
              options: [
                "Week",
                "Month",
                "Week"
              ],
            },
            {
              name: "Area",
              width: "117px",
              height: 9
            },
            {
              name: "UNIT",
              width: "117px",
              height: 9
            },
          ],
          value: [
            {
              Product: "",
              Method: "",
              Quantity: "",
              UOM: "",
              Frequency: "",
              Area: "",
              UNIT: ""
            }
          ]
        }
      ],
      "Contracted Products": [
        {
          type: "multi-inputs",
          name: "Product Price",
          rows: [
            {
              name: "Product",
              width: "185.46px",
            },
            {
              name: "Method",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmTypes",
              optionVariable: "farm_type_name",
              width: "185.46px",
            },
            {
              name: "PRICE",
              width: "185.46px",
            },
            {
              name: "Min. Yield",
              width: "151px"
            },
            {
              name: "UOM",
              type: "dropdown",
              options: [
                "Kg",
                "Ton"
              ],
              width: "96.11px"
            }
          ],
          value: [
            {
              Product: '',
              Method: '',
              PRICE: '',
              "Min. Yield": "",
              "UOM": ''
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