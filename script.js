
const mass_Mark = 78;
const height_Mark = 1.69;
const mass_John = 92;
const height_John = 1.95;

const BMI_Mark = mass_Mark / (height_Mark ** 2);
const BMI_John = mass_John / (height_John ** 2);


if(BMI_Mark > BMI_John){
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's BMI (${BMI_John})`);
}else{
    console.log(`John's BMI (${BMI_John}) is higher than Mark's BMI (${BMI_Mark})`);
}