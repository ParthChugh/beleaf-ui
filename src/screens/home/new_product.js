export const newProduct = {

  title: {
    "Product": "Add New Product",
  },
  tabs: {
    "Product": {
      "Product": [
        {
          type: "input",
          name: "Product Name",
          width: '100%',
          value: "",
          required: true,
          height: 9
        },
        {
          type: "input",
          name: "Production Code",
          // value: props["Company Name"] || "",
          placeholder: "XX-XXX-XX-XX",
          width: '100%',
          required: true,
          height: '9px',
        },
        {
          type: "input",
          name: "Product",
          // value: props["Farm Name"] || "",
          width: '100%',
          height: "9px",
          required: true
        },
        {
          type: "attach-image",
          name: "Image",
          // value: props["Farm Name"] || "",
          width: '272.05px',
          height: 240,
          required: true
        },
        {
          type: "dropdown",
          name: "Category",
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
          name: "Variant",
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
          width: '350px',
          required: true,
          height: '41px',
          type: "dropdown",
          name: "Maturity",
          optionUrl: '/rest/metadata',
          optionMainVariable: "cropMaturities",
          optionVariable: "maturity_type",
        },
      ]
    },
  }
}