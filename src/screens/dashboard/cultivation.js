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
            options: [
              "Annual",
              "Biennial",
              "Perennial"
            ],
            height: 41
          },
          {
            name: "Harvest class",
            width: "115px",
            type: "dropdown",
            options: [
              "Single",
              "Multi",
            ],
            height: 41
          },
          {
            name: "Grow Media",
            width: "120px",
            type: "dropdown",
            options: [
              "Soil",
              "Rockwool",
              "Cocopeat"
            ],
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
            name: "Maturity",
            width: "81px",
            height: 9
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
            options: [
              "Annual",
              "Biennial",
              "Perennial"
            ],
            height: 41
          },
          {
            name: "Harvest class",
            width: "115px",
            type: "dropdown",
            options: [
              "Single",
              "Multi",
            ],
            height: 41
          },
          {
            name: "Grow Media",
            width: "120px",
            type: "dropdown",
            options: [
              "Soil",
              "Rockwool",
              "Cocopeat"
            ],
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
            name: "Maturity",
            width: "81px",
            height: 9
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
            options: [
              "Annual",
              "Biennial",
              "Perennial"
            ],
            height: 41
          },
          {
            name: "Harvest class",
            width: "115px",
            type: "dropdown",
            options: [
              "Single",
              "Multi",
            ],
            height: 41
          },
          {
            name: "Grow Media",
            width: "120px",
            type: "dropdown",
            options: [
              "Soil",
              "Rockwool",
              "Cocopeat"
            ],
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
            name: "Maturity",
            width: "81px",
            height: 9
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