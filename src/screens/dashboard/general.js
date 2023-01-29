export const general = (props) => {
  return {
    "General": [
      {
        type: "attach-image",
        name: "image",
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
        name: "product_code",
        headerName: "Product Code",
        value: props["Product Code"] || "",
        width: '464px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "category",
        headerName: "Category",
        value: props["Category"] || "",
        width: '464px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "variant",
        headerName: "Variant",
        value: props["Variant"] || "",
        width: '464px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "maturity",
        headerName: "Maturity",
        value: props["Maturity"] || "",
        width: '464px',
        required: true,
        height: '9px'
      },
    ],
  }
}