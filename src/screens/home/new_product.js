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
          dependant: "Ownership.Company"
        },
        {
          type: "input",
          name: "Product Image",
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
          options: [
            'Asian Greens',
            'Beans',
            'DIY Pot',
            'Fruits',
            'Fruity Vegetable',
            'Herbs',
            'Microgreens',
            'Root Vegetables',
            'Western Greens'
          ],
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
          name: "Maturity",
          placeholder: 'Select Maturity',
          options: [
            'Baby',
            'Mini',
            'Full Grown',
          ],
          // value: props["Contact Number"] || "",
          width: '350px',
          required: true,
          height: '41px'
        },
      ]
    },
  }
}