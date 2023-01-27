export const products = (props) => {
  return {
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
            width: "177px",
            height: 9
          },
        ],
        value: props["Historic Yields"] || [
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
        value: props["Contracted Products"] || [
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
  }
}