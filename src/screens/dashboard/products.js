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
              name: "product_id",
              width: "185.46px",
              headerName: "Product",
              height: 9,
            },
            {
              name: "farm_type",
              headerName: "Method",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmTypes",
              optionVariable: "farm_type_name",
              serverVaraible: "farm_type",
              width: "185.46px",
              height: 41,
            },
            {
              name: "quantity_produced",
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
              optionMainVariable: "productQtyUnits",
              optionVariable: "uom",
            },
            {
              name: "harvest_frequency",
              headerName: "Frequency",
              width: "132.74px",
              type: "dropdown",
              serverVaraible: "harvest_frequency",
              optionUrl: '/rest/metadata',
              optionMainVariable: "productHarvestFrequency",
              optionVariable: "frequency",
              height: 41
            },
            {
              name: "farmed_area",
              headerName: "Area",
              width: "117px",
              height: 9
            },
            {
              name: "farm_area_unit",
              headerName: "UNIT",
              width: "117px",
              type: "dropdown",
              height: 41,
              serverVaraible: "farm_area_unit",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmAreaUnits",
              optionVariable: "unit_name",
            },
          ],
          value: props["Historic Yields"] || [
            {
              product_id: "",
              method: "",
              quantity_produced: "",
              uom: "",
              harvest_frequency: "",
              farmed_area: "",
              farm_area_unit: ""
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
              name: "product_id",
              headerName: "Product",
              width: "185.46px",
              height: 9,
            },
            {
              name: "farm_type",
              headerName: "Method",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              serverVaraible: "farm_type",
              optionMainVariable: "farmTypes",
              optionVariable: "farm_type_name",
              width: "185.46px",
              height: 41,
            },
            {
              name: "agreed_price",
              headerName: "PRICE",
              width: "185.46px",
              height: 9,
            },
            {
              name: "agreed_min_yield",
              headerName: "Min. Yield",
              width: "151px",
              height: 9,
            },
            {
              name: "uom",
              headerName: "UOM",
              type: "dropdown",
              serverVaraible: "uom",
              optionUrl: '/rest/metadata',
              optionMainVariable: "productQtyUnits",
              optionVariable: "uom",
              width: "96.11px",
              height: 41,
            }
          ],
          value: props["Contracted Products"] || [
            {
              product_id: '',
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