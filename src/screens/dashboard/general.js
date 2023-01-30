export const general = (props) => {
  return {
    getServerDetails: '/rest/admin/products?production_code=',
    fields: {
      "General": [
        {
          type: "attach-image",
          name: "product_image",
          headerName: "Image",
          width: '272.05px',
          height: 240,
          value: props["Image"] || "",
          required: true,
        },
        {
          type: "input",
          name: "product_name",
          headerName: "Product Name",
          value: props["Product Name"] || "",
          width: '460px',
          required: true,
          height: '9px'
        },
        {
          type: "input",
          name: "production_code",
          headerName: "Product Code",
          value: props["Product Code"] || "",
          width: '464px',
          required: true,
          height: '9px'
        },
        {
          type: "dropdown",
          name: "category_id",
          headerName: "Category",
          value: props["Category"] || "",
          width: '464px',
          optionUrl: '/rest/metadata',
          serverVaraible: "category",
          optionMainVariable: "cropCategories",
          optionVariable: "category_name",
          required: true,
          height: '41px'
        },
        {
          type: "input",
          name: "variant_name",
          headerName: "Variant",
          value: props["Variant"] || "",
          width: '464px',
          required: true,
          height: '9px'
        },
        {
          type: "dropdown",
          name: "maturity_id",
          headerName: "Maturity",
          value: props["Maturity"] || "",
          serverVaraible: "maturity",
          optionUrl: '/rest/metadata',
          optionMainVariable: "cropMaturities",
          optionVariable: "maturity_type",
          width: '464px',
          required: true,
          height: '41px'
        },
      ],
    }
  }
}