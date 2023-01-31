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
          name: "ownership",
          headerName: "Ownership",
          left: 'Company',
          right: 'Employee',
          width: '100%',
          value: "Company",
          required: true,
          height: 41
        },
        {
          type: "input",
          name: "company_name",
          headerName: "Company Name",
          // value: props["Company Name"] || "",
          width: '100%',
          required: true,
          height: '9px',
          dependant: "Ownership.Company"
        },
        {
          type: "input",
          name: "farm_name",
          headerName: "Farm Name",
          // value: props["Farm Name"] || "",
          width: '100%',
          required: true,
          height: '9px'
        },
        {
          type: "input",
          name: "farm_contact",
          headerName: "Farm Contact",
          // value: props["Farm Contact"] || "",
          width: '330px',
          required: true,
          height: '9px'
        },
        {
          type: "input",
          name: "contact_number",
          headerName: "Contact Number",
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
          name: "province",
          headerName: "Select Province",
          // value: props[" Select Province"] || "",
          optionUrl: '/rest/provinces',
          optionVariable: "province",
          width: '100%',
          required: true,
          height: '41px'
        },
        {
          type: "input",
          name: "district",
          headerName: "Select District",
          // value: props[" Select District"] || "",
          width: '100%',
          required: true,
          height: '9px'
        },
        {
          type: "input",
          name: "address",
          headerName: "Farm Address",
          // value: props["Farm Address"] || "",
          width: '518px',
          required: true,
          // multiline: 2,
          height: '9px'
        },
        {
          type: "location",
          name: "location",
          headerName: "Latitude/Longitude",
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
    },
    "Feature Governance": {
      "Feature Governance": [
        {
          type: "dropdown",
          name: "farm_function",
          headerName: "Farm Function",
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
          name: "batch_tracking_method",
          headerName: "Batch Tracking Method",
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
          name: "products",
          headerName: "Products",
          rows: [
            {
              name: "product",
              headerName: "Product",
              width: "185.46px",
              height: 9
            },
            {
              name: "method",
              headerName: "Method",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmTypes",
              optionVariable: "farm_type_name",
              width: "185.46px",
              height: 41
            },
            {
              name: "quantity",
              headerName: "Quantity",
              width: "98px",
              height: 9
            },
            {
              name: "uom",
              headerName: "UOM",
              width: "96.11px",
              height: 41,
              type: "dropdown",
              serverVaraible: "uom",
              optionUrl: '/rest/metadata',
              optionMainVariable: "uom",
              optionVariable: "uom",
            },
            {
              name: "frequency",
              headerName: "Frequency",
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
              name: "area",
              headerName: "Area",
              width: "117px",
              height: 9
            },
            {
              name: "unit",
              headerName: "UNIT",
              width: "117px",
              height: 9
            },
          ],
          value: [
            {
              product: "",
              method: "",
              quantity: "",
              uom: "",
              frequency: "",
              area: "",
              unit: ""
            }
          ]
        }
      ],
      "Contracted Products": [
        {
          type: "multi-inputs",
          name: "product_price",
          headerName: "Product Price",
          rows: [
            {
              name: "product",
              headerName: "Product",
              width: "185.46px",
            },
            {
              name: "method",
              headerName: "Method",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmTypes",
              optionVariable: "farm_type_name",
              width: "185.46px",
            },
            {
              name: "price",
              headerName: "PRICE",
              width: "185.46px",
            },
            {
              name: "yield",
              headerName: "Min. Yield",
              width: "151px"
            },
            {
              name: "uom",
              headerName: "UOM",
              type: "dropdown",
              serverVaraible: "uom",
              optionUrl: '/rest/metadata',
              optionMainVariable: "uom",
              optionVariable: "uom",
              width: "96.11px"
            }
          ],
          value: [
            {
              product: '',
              method: '',
              price: '',
              "yield": "",
              "uom": ''
            }
          ],
        }
      ],
    },
    "Features Governance": {
      "Features Governance": [
        {
          type: "dropdown",
          name: "farm_function",
          headerName: "Farm Function",
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
          name: "batch_tracking_method",
          headerName: "Batch Tracking Method",
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