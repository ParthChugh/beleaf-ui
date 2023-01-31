export const internalFarm = {
  title: {
    "Mitra Data": "Add New Internal Farm",
    "Location & Facilities": "Farm Location and Facilities",
    "Features Governance": "Features Governance"
  },
  // getKeyInformation: {
  //   url: '/rest/metadata',
  //   optionMainVariable: "farmTypes",
  //   optionVariable: "farm_type_name",
  //   typeInfo: 'facility'
  // },
  // getServerDetails: {
  //   url: "/rest/admin/farm/",
  //   isFormData: false,
  //   method: "PUT",
  //   headers: {
  //     mitra: false
  //   }
  // },
  // serverDetails: {
  //   "Form Data": {
  //     url: "/rest/admin/new_farm",
  //     method: "POST",
  //     mitra: false
  //   },
  // },
  tabs: {
    "Form Data": {
      "Form Data": [
        {
          type: "input",
          name: "company_name",
          headerName: "Company Name",
          width: '100%',
          // value: props["Company Name"] || "",
          required: false,
          height: 9,
          placeholder: "PT Beleaf Farms"
        },
        {
          type: "input",
          name: "farm_name",
          headerName: "Farm Name",
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
          type: "dropdown",
          name: "district",
          headerName: "Select District",
          // value: props[" Select District"] || "",
          optionUrl: '/rest/districts?province=:province',
          optionVariable: "district",
          width: '100%',
          required: true,
          height: '41px',
          detectedFields: {
            optionUrl: '/rest/provinces',
            optionVariable: "province",
            valueToTake: "abv"
          }
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
          name: "Hydroponics",
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
          name: "Open Field",
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
          name: "Soilless",
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