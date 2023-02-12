export const general = (props) => {
  return {
    getServerDetails: '/rest/admin/products?production_code=',
    updateServerDetails: {
      url: '/rest/admin/product/',
      isFormData: true,
    },
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
          name: "product_name_bahasa",
          headerName: "Nama Produk",
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
          type: "input",
          name: "production_code",
          headerName: "Kode Produk",
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
          height: '41px',
          dependent: "category_id_bahasa",
          dependentVariable: "category_name_bahasa"
        },
        {
          type: "dropdown",
          name: "category_id_bahasa",
          headerName: "Kategori",
          dependent: "category_id",
          dependentVariable: "category_name",
          value: props["Category"] || "",
          width: '464px',
          optionUrl: '/rest/metadata',
          serverVaraible: "category",
          optionMainVariable: "cropCategories",
          optionVariable: "category_name_bahasa",
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
          type: "input",
          name: "variant_name_bahasa",
          headerName: "Variasi",
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
          height: '41px',
          dependent: "maturity_id_bahasa",
          dependentVariable: "maturity_type_bahasa",
        },
        {
          type: "dropdown",
          name: "maturity_id_bahasa",
          headerName: "Kematangan",
          value: props["Maturity"] || "",
          serverVaraible: "maturity",
          optionUrl: '/rest/metadata',
          optionMainVariable: "cropMaturities",
          optionVariable: "maturity_type_bahasa",
          width: '464px',
          required: true,
          height: '41px',
          dependent: "maturity_id",
          dependentVariable: "maturity_type",
        },
      ],
    }
  }
}