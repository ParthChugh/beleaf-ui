export const general = (props) => {
  return {
    "General": [
      {
        type: "attach-image",
        name: "Image",
        width: '272.05px',
        height: 240,
        value: props["Image"] || "",
        required: true,
      },
      {
        type: "input",
        name: "Product Name",
        value: props["Product Name"] || "",
        width: '460px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "Product Code",
        value: props["Product Code"] || "",
        width: '464px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "Category",
        value: props["Category"] || "",
        width: '464px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "Variant",
        value: props["Variant"] || "",
        width: '464px',
        required: true,
        height: '9px'
      },
      {
        type: "input",
        name: "Maturity",
        value: props["Maturity"] || "",
        width: '464px',
        required: true,
        height: '9px'
      },
    ],
  }
}