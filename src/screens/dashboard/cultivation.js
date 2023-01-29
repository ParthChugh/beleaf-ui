export const cultivation = (props) => {
  return {
    "Hydroponics": [
      {
        type: "multi-inputs",
        name: "name",
        headerName: "Product",
        rows: [
          {
            name: "status",
            headerName: "Status",
            width: "116px",
            type: "dropdown",
            options: [
              "Active",
              "Inactive"
            ],
            height: 41
          },
          {
            name: "annual",
            headerName: "Annual",
            width: "112px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropTypes",
            optionVariable: "crop_type_name",
            height: 41
          },
          {
            name: "harvest_class",
            headerName: "Harvest class",
            width: "115px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropHarvestClasses",
            optionVariable: "class_name",
            height: 41
          },
          {
            name: "grow_media",
            headerName: "Grow Media",
            width: "120px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropGrowingMedia",
            optionVariable: "media_type",
            height: 41
          },
          {
            name: "germination",
            headerName: "Germination",
            width: "81px",
            height: 9
          },
          {
            name: "juvenile",
            headerName: "Juvenile",
            width: "81px",
            height: 9
          },
          {
            name: "vegetative",
            headerName: "Vegetative",
            width: "81px",
            height: 9
          },
          {
            name: "generative",
            headerName: "Generative",
            width: "81px",
            height: 9
          },
          {
            type: "dropdown",
            name: "maturity",
            headerName: "Maturity",
            width: "160px",
            height: 41,
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropMaturities",
            optionVariable: "maturity_type",
          },
          {
            name: "duration",
            headerName: "duration (Days)",
            width: "81px",
            height: 9
          },
        ],
        value: props["Add Greenhouse"] || [
          {
            status: "",
            annual: "",
            "harvest_class": "",
            "grow_media": "",
            "germination": "",
            juvenile: "",
            vegetative: "",
            generative: "",
            maturity: "",
            "duration": ""
          }

        ],
      }
    ],
    "Open Field": [
      {
        type: "multi-inputs",
        headerName: "Product",
        name: "product",
        rows: [
          {
            name: "status",
            headerName: "Status",
            width: "116px",
            type: "dropdown",
            options: [
              "Active",
              "Inactive"
            ],
            height: 41
          },
          {
            name: "annual",
            headerName: "Annual",
            width: "112px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropTypes",
            optionVariable: "crop_type_name",
            height: 41
          },
          {
            name: "harvest_class",
            headerName: "Harvest class",
            width: "115px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropHarvestClasses",
            optionVariable: "class_name",
            height: 41
          },
          {
            name: "grow_media",
            headerName: "Grow Media",
            width: "120px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropGrowingMedia",
            optionVariable: "media_type",
            height: 41
          },
          {
            name: "germination",
            headerName: "Germination",
            width: "81px",
            height: 9
          },
          {
            name: "juvenile",
            headerName: "Juvenile",
            width: "81px",
            height: 9
          },
          {
            name: "vegetative",
            headerName: "Vegetative",
            width: "81px",
            height: 9
          },
          {
            name: "generative",
            headerName: "Generative",
            width: "81px",
            height: 9
          },
          {
            type: "dropdown",
            name: "maturity",
            headerName: "Maturity",
            width: "160px",
            height: 41,
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropMaturities",
            optionVariable: "maturity_type",
          },
          {
            name: "duration",
            headerName: "duration (Days)",
            width: "81px",
            height: 9
          },
        ],
        value: props["Add Greenhouse"] || [
          {
            status: "",
            annual: "",
            "harvest_class": "",
            "grow_media": "",
            "germination": "",
            juvenile: "",
            vegetative: "",
            generative: "",
            maturity: "",
            "duration": ""
          }

        ],
      }
    ],
    "Soilless": [
      {
        type: "multi-inputs",
        name: "Product",
        headerName: "product",
        rows: [
          {
            name: "status",
            headerName: "Status",
            width: "116px",
            type: "dropdown",
            options: [
              "Active",
              "Inactive"
            ],
            height: 41
          },
          {
            name: "annual",
            headerName: "Annual",
            width: "112px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropTypes",
            optionVariable: "crop_type_name",
            height: 41
          },
          {
            name: "harvest_class",
            headerName: "Harvest class",
            width: "115px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropHarvestClasses",
            optionVariable: "class_name",
            height: 41
          },
          {
            name: "grow_media",
            headerName: "Grow Media",
            width: "120px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropGrowingMedia",
            optionVariable: "media_type",
            height: 41
          },
          {
            name: "germination",
            headerName: "Germination",
            width: "81px",
            height: 9
          },
          {
            name: "juvenile",
            headerName: "Juvenile",
            width: "81px",
            height: 9
          },
          {
            name: "vegetative",
            headerName: "Vegetative",
            width: "81px",
            height: 9
          },
          {
            name: "generative",
            headerName: "Generative",
            width: "81px",
            height: 9
          },
          {
            type: "dropdown",
            name: "maturity",
            headerName: "Maturity",
            width: "160px",
            height: 41,
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropMaturities",
            optionVariable: "maturity_type",
          },
          {
            name: "duration",
            headerName: "duration (Days)",
            width: "81px",
            height: 9
          },
        ],
        value: props["Soilless"] || [
          {
            status: "",
            annual: "",
            "harvest_class": "",
            "grow_media": "",
            "germination": "",
            juvenile: "",
            vegetative: "",
            generative: "",
            maturity: "",
            "duration": ""
          }

        ],
      }
    ]
  }
}