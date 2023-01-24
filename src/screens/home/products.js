import Link from '@mui/material/Link'

export default {
  visibleFields: ['PRODUCTION CODE', 'PRODUCT NAME', 'CATEGORY', 'PRODUCT', 'VARIANT', 'MATURITY'],
  columns: [
    {
      field: "id",
      headerName: "PRODUCTION CODE",
      width: 200,
      align: 'center',
      headerAlign: "center",
      renderCell: (params) => (
        <Link className='tabs_cell__link' href={`/dashboard/products/${params.id}`}>
          {params.id}
        </Link>
      ),
    },
    {
      field: "product_name",
      headerName: "PRODUCT NAME",
      width: 200,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "category",
      headerName: "CATEGORY",
      width: 200,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "product",
      headerName: "PRODUCT",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "variant",
      headerName: "VARIANT",
      width: 150,
      align: 'center',
      headerAlign: "center"
    },
    {
      field: "maturity",
      headerName: "MATURITY",
      width: 150,
      align: 'center',
      headerAlign: "center"
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