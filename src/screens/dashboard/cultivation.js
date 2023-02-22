export const cultivation = (props) => {
  return {
    getServerDetails: "/rest/admin/product-cultivation/",
    updateServerDetails: {
      url: '/rest/admin/product-cultivation/',
      isFormData: false,
    },
    getKeyInformation: {
      url: '/rest/metadata',
      optionMainVariable: "farmTypes",
      optionVariable: "farm_type_name",
      typeInfo: 'cultivation_info'
    },
    fields: {
      "Hydroponics": [
        {
          type: "multi-inputs",
          name: "Hydroponics",
          headerName: "Hydroponics",
          rows: [
            {
              name: "active_status_id",
              headerName: "Status",
              serverVaraible: "active_status",
              width: "116px",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cultivationInfoStatus",
              optionVariable: "status",
              height: 41
            },
            {
              name: "crop_type",
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
              name: "harvest_class",
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
              name: "grow_media",
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
              crop_type: "",
              "harvest_class": "",
              "grow_media": "",
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
              name: "active_status_id",
              headerName: "Status",
              serverVaraible: "active_status",
              width: "116px",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cultivationInfoStatus",
              optionVariable: "status",
              height: 41
            },
            {
              name: "crop_type",
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
              name: "harvest_class",
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
              name: "grow_media",
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
              crop_type: "",
              "harvest_class": "",
              "grow_media": "",
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
              name: "active_status_id",
              headerName: "Status",
              serverVaraible: "active_status",
              width: "116px",
              type: "dropdown",
              optionUrl: '/rest/metadata',
              optionMainVariable: "cultivationInfoStatus",
              optionVariable: "status",
              height: 41
            },
            {
              name: "crop_type",
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
              name: "harvest_class",
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
              name: "grow_media",
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
              crop_type: "",
              "harvest_class": "",
              "grow_media": "",
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