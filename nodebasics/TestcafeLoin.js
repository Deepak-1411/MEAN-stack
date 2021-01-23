//code to launch google.com and serach website w3school and perform some basic operation
import {selector} from testcafe;

fixture `My fixture`
.page('https://www.www.google.com');

test('search website', async t =>{
await t
.typetext('','')
.presskey('tab')
.presskey('enter')

})
