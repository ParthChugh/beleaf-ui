export const masterData = (props) => {
  return {
    getServerDetails: '/rest/admin/farm/',
    getKeyInformation: {
      url: '/rest/metadata',
      optionMainVariable: "farmTypes",
      optionVariable: "farm_type_name",
      fieldType: "facility",
      typeInfo: 'facility_info'
    },
    updateServerDetails: {
      url: '/rest/admin/farm/',
      isFormData: false,
    },
    fields: {
      "Basic Data": [
        {
          type: "dropdown",
          name: "ownership",
          headerName: "Ownership",
          serverVaraible: "ownership",
          optionUrl: '/rest/metadata',
          optionMainVariable: "farmOwnershipTypes",
          optionVariable: "ownership_type",
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
          required: false,
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
          name: "contact_name",
          headerName: "Farm Contact Name",
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
        // {
        //   type: "date",
        //   name: "creation_date",
        //   headerName: "Creation Date",
        //   value: props["Creation Date"] || "",
        //   width: '167px',
        //   required: true,
        //   height: '9px'
        // },
      ],
      "Location & Facilities": [
        {
          type: "dropdown",
          name: "farm_loc_province",
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
          name: "farm_loc_district",
          headerName: "District",
          value: props["District"] || "",
          width: '245px',
          required: true,
          height: '9px'
        },
        {
          type: "input",
          name: "farm_loc_address",
          headerName: "Farm Address",
          value: props["Farm Address"] || "",
          width: '518px',
          required: true,
          // multiline: 2,
          height: '9px'
        },
        {
          type: "location",
          name: "lat_long",
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
          name: "Hydroponics",
          headerName: "Hydroponics",
          rows: [
            {
              name: "farmable_area",
              headerName: "Farmable Land Area",
              width: "228px"
            },
            {
              name: "farmed_area",
              headerName: "Farmed Land Area",
              width: "144px"
            },
            {
              name: "irrigation",
              headerName: "Irrigation",
              width: "132px",
              type: "dropdown",
              serverVaraible: "irrigation",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmIrrigationTypes",
              optionVariable: "type_name",
            },
            {
              name: "irrigated_area",
              headerName: "Land Area Irrigated",
              width: "167px"
            }
          ],
          value: [
            {
              "farmable_area": "",
              "farmed_area": "",
              "irrigation": "",
              "irrigated_area": ""
            }
          ]
        }
      ],
      "Open Field": [
        {
          type: "multi-inputs",
          name: "Open Field",
          headerName: "Open Field",
          rows: [
            {
              name: "farmable_area",
              headerName: "Farmable Land Area",
              width: "228px"
            },
            {
              name: "farmed_area",
              headerName: "Farmed Land Area",
              width: "144px"
            },
            {
              name: "irrigation",
              headerName: "Irrigation",
              type: "dropdown",
              width: "132px",
              serverVaraible: "irrigation",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmIrrigationTypes",
              optionVariable: "type_name",
            },
            {
              name: "irrigated_area",
              headerName: "Land Area Irrigated",
              width: "167px"
            }
          ],
          value: [
            {
              "farmable_area": "",
              "farmed_area": "",
              "irrigation": "",
              "irrigated_area": ""
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
              name: "greenhouse_holes",
              headerName: "Number of Holes",
              width: "132px"
            },
            {
              type: "dropdown",
              name: "dosing",
              headerName: "Dosing",
              serverVaraible: "dosing",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmDosingTypes",
              optionVariable: "type_name",
              // value: props["Dosing"] || "",
              required: true,
              headerName: "Dosing",
              width: "167px"
            }
          ],
          value: [
            {
              "greenhouse_name": "",
              "floor_area": "",
              "greenhouse_holes": "",
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
          serverVaraible: "farm_function",
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
          serverVaraible: "batch_tracking_method",
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
}