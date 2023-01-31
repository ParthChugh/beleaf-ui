export const products = (props) => {
  return {
    getServerDetails: '/rest/admin/farm/',
    getKeyInformation: {
      fieldType: "products"
    },
    fields: {
      "Historic Yields": [
        {
          type: "multi-inputs",
          name: "historic_yield",
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
                "Month"
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
          name: "contracted_products",
          headerName: "Product Price",
          rows: [
            {
              name: "product",
              headerName: "Product",
              width: "185.46px",
            },
            {
              name: "farm_type",
              headerName: "Method",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmTypes",
              optionVariable: "farm_type_name",
              width: "185.46px",
            },
            {
              name: "agreed_price",
              headerName: "PRICE",
              width: "185.46px",
            },
            {
              name: "agreed_min_yield",
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
          value: props["Contracted Products"] || [
            {
              product: '',
              farm_type: '',
              agreed_price: '',
              "agreed_min_yield": "",
              "uom": ''
            }
          ],
        }
      ],
    }

  }
}