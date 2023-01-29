export const products = (props) => {
  return {
    "Historic Yields": [
      {
        type: "multi-inputs",
        name: "Products",
        rows: [
          {
            name: "product",
            width: "185.46px",
            headerName: "Product",
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
            options: [
              "Kg",
              "Ton"
            ],
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
        value: props["Historic Yields"] || [
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
            options: [
              "Kg",
              "Ton"
            ],
            width: "96.11px"
          }
        ],
        value: props["Contracted Products"] || [
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
  }
}