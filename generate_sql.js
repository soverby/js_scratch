const csv = require("csvtojson")
const uuidv4 = require('uuid/v4');

const prsMstrInsert = 'INSERT INTO prs_mstr (mstr_prs_key, data_source_system_cd, prs_nat_key, prefix_cd,'
                      + ' src_marital_status_cd, src_ethnicity_cd, delete_flg, '

const fieldMapping = {
    'acp_first_nm': 'first_name',
    'middle_nm': 'middle_name',
    'acp_last_nm': 'last_name',
    'acp_full_nm': 'full_name',
    'nick_nm': 'nickname',
    'acp_gender_cd': 'gender_cd',
    'acp_gender_nm': 'gender_cd',
    'birth_dt': 'birth_date',
    'death_dt': 'death_date',
    'deceased_flg': 'deceased',
    'src_ethnicity_nm': 'ethnicity',
    'prefix_nm': 'prefix',
    'suffix_nm': 'suffix',
    'suffix_cd': 'suffix_code',
    'first_nm': 'first_name',
    'last_nm': 'last_name',
    'full_nm': 'full_name'
}

const csvReader = async () => {
    await csv()
        .fromFile('/Users/sean.overby/Downloads/hudson_prsmstr.csv')
        .subscribe((prs) => {
            var insertStatement = prsMstrInsert;
            var valuesStatement = `) VALUES('${uuidv4()}', 'ACC~ACC~MRM~1', '${uuidv4()}', 'N/P', 'N/P', 'N/P', CAST(0 as bit), `

            Object.keys(fieldMapping).forEach( k => {
                if(prs[fieldMapping[k]] !== '') {
                    insertStatement += k + ','
                    valuesStatement += `'${prs[fieldMapping[k]]}', `
                }
            });

            insertStatement = insertStatement.replace(/,\s*$/, "") + valuesStatement.replace(/,\s*$/, "") + ");"
            console.log(insertStatement);
        })
}

csvReader()

