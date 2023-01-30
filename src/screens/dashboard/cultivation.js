export const cultivation = (props) => {
  return {
    getServerDetails: "/rest/admin/product-cultivation/",
    fields: {
      "Hydroponics": [
        {
          type: "multi-inputs",
          name: "Hydroponics",
          headerName: "Hydroponics",
          rows: [
            {
              name: "is_active",
              headerName: "Status",
              width: "116px",
              type: "dropdown",
              options: [
                "true",
                "false"
              ],
              height: 41
            },
            {
              name: "crop_type_id",
              headerName: "Annual",
              width: "112px",
              serverVaraible: "crop_type",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cropTypes",
              optionVariable: "crop_type_name",
              height: 41
            },
            {
              name: "harvest_class_id",
              headerName: "Harvest class",
              serverVaraible: "harvest_class",
              width: "115px",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cropHarvestClasses",
              optionVariable: "class_name",
              height: 41
            },
            {
              name: "grow_media_id",
              headerName: "Grow Media",
              width: "120px",
              type: "dropdown",
              serverVaraible: "grow_media",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cropGrowingMedia",
              serverVaraible: "grow_media",
              optionVariable: "media_name",
              height: 41
            },
            {
              name: "germination",
              headerName: "Germination",
              width: "81px",
              height: 9
            },
            {
              name: "juvenile",
              headerName: "Juvenile",
              width: "81px",
              height: 9
            },
            {
              name: "vegetative",
              headerName: "Vegetative",
              width: "81px",
              height: 9
            },
            {
              name: "generative",
              headerName: "Generative",
              width: "81px",
              height: 9
            },
            {
              type: "input",
              name: "maturity",
              headerName: "Maturity",
              width: "81px",
              height: 9
            },
            {
              name: "duration",
              headerName: "duration (Days)",
              width: "81px",
              height: 9
            },
          ],
          value: props["Add Greenhouse"] || [
            {
              is_active: "",
              crop_type_id: "",
              "harvest_class_id": "",
              "grow_media_id": "",
              "germination": "",
              juvenile: "",
              vegetative: "",
              generative: "",
              maturity: "",
              "duration": ""
            }
          ],
        }
      ],
      "Open Field": [
        {
          type: "multi-inputs",
          headerName: "Open Field",
          name: "Open Field",
          rows: [
            {
              name: "is_active",
              headerName: "Status",
              width: "116px",
              type: "dropdown",
              options: [
                "true",
                "false"
              ],
              height: 41
            },
            {
              name: "crop_type_id",
              headerName: "Annual",
              width: "112px",
              serverVaraible: "crop_type",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cropTypes",
              optionVariable: "crop_type_name",
              height: 41
            },
            {
              name: "harvest_class_id",
              headerName: "Harvest class",
              serverVaraible: "harvest_class",
              width: "115px",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cropHarvestClasses",
              optionVariable: "class_name",
              height: 41
            },
            {
              name: "grow_media_id",
              headerName: "Grow Media",
              width: "120px",
              type: "dropdown",
              serverVaraible: "grow_media",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cropGrowingMedia",
              serverVaraible: "grow_media",
              optionVariable: "media_name",
              height: 41
            },
            {
              name: "germination",
              headerName: "Germination",
              width: "81px",
              height: 9
            },
            {
              name: "juvenile",
              headerName: "Juvenile",
              width: "81px",
              height: 9
            },
            {
              name: "vegetative",
              headerName: "Vegetative",
              width: "81px",
              height: 9
            },
            {
              name: "generative",
              headerName: "Generative",
              width: "81px",
              height: 9
            },
            {
              type: "input",
              name: "maturity",
              headerName: "Maturity",
              width: "81px",
              height: 9
            },
            {
              name: "duration",
              headerName: "duration (Days)",
              width: "81px",
              height: 9
            },
          ],
          value: props["Add Greenhouse"] || [
            {
              is_active: "",
              crop_type_id: "",
              "harvest_class_id": "",
              "grow_media_id": "",
              "germination": "",
              juvenile: "",
              vegetative: "",
              generative: "",
              maturity: "",
              "duration": ""
            }
          ],
        }
      ],
      "Soilless": [
        {
          type: "multi-inputs",
          name: "Soilless",
          headerName: "Soilless",
          rows: [
            {
              name: "is_active",
              headerName: "Status",
              width: "116px",
              type: "dropdown",
              options: [
                "true",
                "false"
              ],
              height: 41
            },
            {
              name: "crop_type_id",
              headerName: "Annual",
              width: "112px",
              serverVaraible: "crop_type",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cropTypes",
              optionVariable: "crop_type_name",
              height: 41
            },
            {
              name: "harvest_class_id",
              headerName: "Harvest class",
              serverVaraible: "harvest_class",
              width: "115px",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cropHarvestClasses",
              optionVariable: "class_name",
              height: 41
            },
            {
              name: "grow_media_id",
              headerName: "Grow Media",
              width: "120px",
              type: "dropdown",
              serverVaraible: "grow_media",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cropGrowingMedia",
              serverVaraible: "grow_media",
              optionVariable: "media_name",
              height: 41
            },
            {
              name: "germination",
              headerName: "Germination",
              width: "81px",
              height: 9
            },
            {
              name: "juvenile",
              headerName: "Juvenile",
              width: "81px",
              height: 9
            },
            {
              name: "vegetative",
              headerName: "Vegetative",
              width: "81px",
              height: 9
            },
            {
              name: "generative",
              headerName: "Generative",
              width: "81px",
              height: 9
            },
            {
              type: "input",
              name: "maturity",
              headerName: "Maturity",
              width: "81px",
              height: 9
            },
            {
              name: "duration",
              headerName: "duration (Days)",
              width: "81px",
              height: 9
            },
          ],
          value: props["Soilless"] || [
            {
              is_active: "",
              crop_type_id: "",
              "harvest_class_id": "",
              "grow_media_id": "",
              "germination": "",
              juvenile: "",
              vegetative: "",
              generative: "",
              maturity: "",
              "duration": ""
            }

          ],
        }
      ]
    }
  }
}