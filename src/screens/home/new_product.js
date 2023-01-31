export const newProduct = {
  title: {
    "Product": "Add New Product",
  },
  getServerDetails: {
    url: '/rest/admin/new_product',
    isFormData: true,
  },
  tabs: {
    "Product": {
      "Product": [
        {
          type: "input",
          name: "product_name",
          headerName: "Product Name",
          width: '100%',
          value: "",
          required: true,
          height: 9
        },
        {
          type: "input",
          name: "production_code",
          headerName: "Production Code",
          // value: props["Company Name"] || "",
          placeholder: "XX-XXX-XX-XX",
          width: '100%',
          required: true,
          height: '9px',
        },
        {
          type: "input",
          name: "product_general_name",
          headerName: "Product",
          // value: props["Farm Name"] || "",
          width: '100%',
          height: "9px",
          required: true
        },
        {
          type: "attach-image",
          name: "product_picture",
          headerName: "Image",
          // value: props["Farm Name"] || "",
          width: '272.05px',
          height: 240,
          required: true
        },
        {
          type: "dropdown",
          name: "category_id",
          headerName: "Category",
          // value: props["Farm Contact"] || "",
          optionUrl: '/rest/metadata',
          optionMainVariable: "cropCategories",
          optionVariable: "category_name",
          width: '100%',
          required: true,
          height: '41px'
        },
        {
          type: "dropdown",
          name: "variant_name",
          headerName: "Variant",
          placeholder: 'Variant Name...',
          options: [
            'Green',
            'Red',
            'Purple',
            'Sweet',
            'Red Cayenne',
            'Cherry',
            'Rawit Green',
            'Rawit Red',
            'Acar',
            'Roma',
            'Beef',
            'Italian',
            'Thai'
          ],
          // value: props["Contact Number"] || "",
          width: '350px',
          required: true,
          height: '41px'
        },
        {
          type: "dropdown",
          placeholder: 'Select Maturity',
          headerName: "Maturity",
          width: '350px',
          required: true,
          height: '41px',
          type: "dropdown",
          name: "maturity_id",
          optionUrl: '/rest/metadata',
          optionMainVariable: "cropMaturities",
          optionVariable: "maturity_type",
        },
      ]
    },
  }
}