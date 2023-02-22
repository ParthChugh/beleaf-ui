export const products = (props) => {
  return {
    getServerDetails: '/rest/admin/farm/',
    getKeyInformation: {
      fieldType: "products"
    },
    updateServerDetails: {
      url: '/rest/admin/farm/',
      isFormData: false,
    },
    fields: {
      "historic_yield": [
        {
          type: "multi-inputs",
          name: "historic_yield",
          headerName: "Products",
          rows: [
            {
              name: "product_id",
              width: "185.46px",
              headerName: "Product",
              optionUrl: '/rest/admin/products',
              type: "search_dropdown",
              searchField: "product",
              optionMainVariable: "data",
              optionVariable: "product_name",
              serverVaraible: "product",
              width: "185.46px",
              height: 41,
            },
            {
              name: "farm_type_id",
              headerName: "Method",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmTypes",
              optionVariable: "farm_type_name",
              serverVaraible: "farm_type",
              width: "185.46px",
              height: 41
            },
            {
              name: "quantity_produced",
              headerName: "Quantity",
              width: "98px",
              height: 9
            },
            {
              name: "uom_id",
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
              name: "harvest_frequency_id",
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
              name: "area_unit_id",
              headerName: "UNIT",
              width: "117px",
              type: "dropdown",
              height: 41,
              serverVaraible: "farm_area_unit",
              optionUrl: '/rest/metadata',
              optionMainVariable: "farmAreaUnits",
              optionVariable: "unit_name"
            },
          ],
          value: [
            {
              product_id: "",
              farm_type_id: "",
              quantity: "",
              uom_id: "",
              harvest_frequency_id: "",
              area: "",
              area_unit_id: ""
            }
          ]
        }
      ],
      "contracted_products": [
        {
          type: "multi-inputs",
          name: "contracted_products",
          headerName: "Product Price",
          rows: [
            {
              name: "product_id",
              width: "185.46px",
              headerName: "Product",
              type: "search_dropdown",
              optionUrl: '/rest/admin/products',
              searchField: "product",
              optionMainVariable: "data",
              optionVariable: "product_name",
              serverVaraible: "product",
              width: "185.46px",
              height: 41,
            },
            {
              name: "farm_type_id",
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
              width: "151px"
            },
            {
              name: "uom_id",
              headerName: "UOM",
              type: "dropdown",
              serverVaraible: "uom",
              optionUrl: '/rest/metadata',
              optionMainVariable: "productQtyUnits",
              optionVariable: "uom",
              width: "96.11px"
            }
          ],
          value: [
            {
              product_id: '',
              farm_type_id: '',
              agreed_price: '',
              "agreed_min_yield": "",
              "uom_id": ''
            }
          ],
        }
      ],
    }

  }
}