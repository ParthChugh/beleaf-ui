export const cultivation = (props) => {
  return {
    "Hydroponics": [
      {
        type: "multi-inputs",
        name: "Product",
        rows: [
          {
            name: "Status",
            width: "116px",
            type: "dropdown",
            options: [
              "Active",
              "Inactive"
            ],
            height: 41
          },
          {
            name: "Annual",
            width: "112px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropTypes",
            optionVariable: "crop_type_name",
            height: 41
          },
          {
            name: "Harvest class",
            width: "115px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropHarvestClasses",
            optionVariable: "class_name",
            height: 41
          },
          {
            name: "Grow Media",
            width: "120px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropGrowingMedia",
            optionVariable: "media_type",
            height: 41
          },
          {
            name: "Germination",
            width: "81px",
            height: 9
          },
          {
            name: "Juvenile",
            width: "81px",
            height: 9
          },
          {
            name: "Vegetative",
            width: "81px",
            height: 9
          },
          {
            name: "Generative",
            width: "81px",
            height: 9
          },
          {
            type: "dropdown",
            name: "Maturity",
            width: "160px",
            height: 41,
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropMaturities",
            optionVariable: "maturity_type",
          },
          {
            name: "duration (Days)",
            width: "81px",
            height: 9
          },
        ],
        value: props["Add Greenhouse"] || [
          {
            Status: "",
            Annual: "",
            "Harvest class": "",
            "Grow Media": "",
            "Germination": "",
            Juvenile: "",
            Vegetative: "",
            Generative: "",
            Maturity: "",
            "duration (Days)": ""
          }

        ],
      }
    ],
    "Open Field": [
      {
        type: "multi-inputs",
        name: "Product",
        rows: [
          {
            name: "Status",
            width: "116px",
            type: "dropdown",
            options: [
              "Active",
              "Inactive"
            ],
            height: 41
          },
          {
            name: "Annual",
            width: "112px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropTypes",
            optionVariable: "crop_type_name",
            height: 41
          },
          {
            name: "Harvest class",
            width: "115px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropHarvestClasses",
            optionVariable: "class_name",
            height: 41
          },
          {
            name: "Grow Media",
            width: "120px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropGrowingMedia",
            optionVariable: "media_type",
            height: 41
          },
          {
            name: "Germination",
            width: "81px",
            height: 9
          },
          {
            name: "Juvenile",
            width: "81px",
            height: 9
          },
          {
            name: "Vegetative",
            width: "81px",
            height: 9
          },
          {
            name: "Generative",
            width: "81px",
            height: 9
          },
          {
            type: "dropdown",
            name: "Maturity",
            width: "160px",
            height: 41,
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropMaturities",
            optionVariable: "maturity_type",
          },
          {
            name: "duration (Days)",
            width: "81px",
            height: 9
          },
        ],
        value: props["Add Greenhouse"] || [
          {
            Status: "",
            Annual: "",
            "Harvest class": "",
            "Grow Media": "",
            "Germination": "",
            Juvenile: "",
            Vegetative: "",
            Generative: "",
            Maturity: "",
            "duration (Days)": ""
          }

        ],
      }
    ],
    "Soilless": [
      {
        type: "multi-inputs",
        name: "Product",
        rows: [
          {
            name: "Status",
            width: "116px",
            type: "dropdown",
            options: [
              "Active",
              "Inactive"
            ],
            height: 41
          },
          {
            name: "Annual",
            width: "112px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropTypes",
            optionVariable: "crop_type_name",
            height: 41
          },
          {
            name: "Harvest class",
            width: "115px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropHarvestClasses",
            optionVariable: "class_name",
            height: 41
          },
          {
            name: "Grow Media",
            width: "120px",
            type: "dropdown",
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropGrowingMedia",
            optionVariable: "media_type",
            height: 41
          },
          {
            name: "Germination",
            width: "81px",
            height: 9
          },
          {
            name: "Juvenile",
            width: "81px",
            height: 9
          },
          {
            name: "Vegetative",
            width: "81px",
            height: 9
          },
          {
            name: "Generative",
            width: "81px",
            height: 9
          },
          {
            type: "dropdown",
            name: "Maturity",
            width: "160px",
            height: 41,
            optionUrl: '/rest/metadata',
            optionMainVariable: "cropMaturities",
            optionVariable: "maturity_type",
          },
          {
            name: "duration (Days)",
            width: "81px",
            height: 9
          },
        ],
        value: props["Soilless"] || [
          {
            Status: "",
            Annual: "",
            "Harvest class": "",
            "Grow Media": "",
            "Germination": "",
            Juvenile: "",
            Vegetative: "",
            Generative: "",
            Maturity: "",
            "duration (Days)": ""
          }

        ],
      }
    ]
  }
}