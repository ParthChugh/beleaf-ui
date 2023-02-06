import Link from '@mui/material/Link'

export default {
  visibleFields: ['PRODUCTION CODE', 'PRODUCT NAME', '', 'CATEGORY', 'PRODUCT', 'VARIANT', 'MATURITY'],
  searchField: "product",
  getServerDetails: '/rest/admin/products',
  columns: [
    {
      field: "product_picture",
      headerName: "",
      // file_type:  "product_image",
      width: 100,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => {
        console.log('params123213', params)
        return (
          <img src={params.row.product_image} width={28} height={28} style={{borderRadius: 5}} />
        )

      },
    },
    {
      field: "id",
      headerName: "PRODUCTION CODE",
      // file_type:  "production_code",
      width: 200,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Link className='tabs_cell__link' href={`/dashboard/products/${params.row.production_code}`}>
            {params.row.production_code.toUpperCase()}
          </Link>
        )
      },

    },
    {
      field: "product_name",
      headerName: "PRODUCT NAME",
      // file_type:  "product_name",
      width: 200,
      align: 'center',
      headerAlign: "center"
    },

    {
      field: "category",
      headerName: "CATEGORY",
      width: 200,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => {
        return params.row.category.category_name
      },
    },
    {
      field: "product",
      headerName: "PRODUCT",
      // file_type:  "product",
      width: 150,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => {
        return params.row.product_general_name
      },
    },
    {
      field: "variant_name",
      headerName: "VARIANT",
      // file_type:  "variant",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "maturity",
      headerName: "MATURITY",
      // file_type:  "maturity.maturity_type",
      width: 150,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => {
        return params.row.maturity.maturity_type
      },
    },
  ],
  rows: [
    {
      id: "LJBABGR001",
      product_name: "Kapesh Farm 1",
      category: "Neal Matthews",
      product: "water,crop,sun",
      variant: "West Java",
      maturity: "Semplak",
    },
    {
      id: "LJBABGR002",
      product_name: "Kapesh Farm 2",
      category: "Neal Matthews",
      product: "water,crop,sun",
      variant: "West Java",
      maturity: "Semplak",
    },
    {
      id: "LJBABGR003",
      product_name: "Kapesh Farm 3",
      category: "Neal Matthews",
      product: "water,crop,sun",
      variant: "West Java",
      maturity: "Semplak",
    },
  ]

}