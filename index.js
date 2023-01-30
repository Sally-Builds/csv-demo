const fs = require("fs");
const csvParser = require("csv-parser");

const result = [];

var readStream = fs.createReadStream("./data.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
    if(result.length === 500) {
        readStream.destroy()
    console.log(result);
}
  })
  .on("end", () => {
    console.log(result);


  }).on("close", () => {
    console.log('closed')
  });
console.log("here")
  // const interface = {
  //   Patient_ID: '21',
  //   CoC_Accreditation_Flag: 'Blank(s)',
  //   Age_recode_with_single_ages_and_eighty_five_plus: '44 years',
  //   Race_and_origin_recode_NHW_NHB_NHAIAN_NHAPI_Hispanic: 'Non-Hispanic White',
  //   HIS_Link: 'Record sent for linkage, no IHS match',
  //   SEER_cause_specific_death_classification: 'Alive or dead of other cause',
  //   Survival_months_flag: 'Complete dates are available and there are more than 0 days of survival',
  //   'Vital_status_recode_study cutoff used': 'Alive',
  //   sex: 'Male',
  //   Year_of_diagnosis: '2002',
  //   primary_site_label: 'C62.9-Testis, NOS',
  //   Type_of_reporting_source: 'Hospital inpatient/outpatient or clinic'
  // }