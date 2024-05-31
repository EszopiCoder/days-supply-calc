// [abbreviated drug name (string), drug name (string), total dose by pkg (boolean), mL min, mL step, mL value, daily drops value, drops per mL/pkg,[primary mfg name, primary mfg ndc, [[mfg name, drops per mL],[mfg name 2, drops per mL 2],...]],expiration in days]
const arrEyeEarDrugs = [
  ['other','Other',false,1,0.5,5,1,20],
  ['alrex','ALREX 0.2% [loteprednol etabonate]',false,5,5,5,4,32,['Bausch & Lomb brand','(NDC: 24208)',[['Bausch & Lomb generic (NDC: 82260):',31],['Other generics:',20]]]],
  ['atropine','atropine 1%',false,1,0.5,5,1,31,['Bausch & Lomb generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['bepreve','BEPREVE 1.5% [bepotastine]',false,5,5,5,2,33,['Bausch & Lomb brand/generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['besivance','BESIVANCE 0.6% [besifloxacin]',false,5,5,5,3,31],
  ['brimonidine','brimonidine 0.2%',false,5,5,5,6,30,['Bausch & Lomb generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['cyclopentolate','cyclopentolate 1%',false,1,0.5,5,1,31,['Bausch & Lomb generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['dexamethasone','dexamethasone 0.1%',false,5,5,5,1,31,['Bausch & Lomb generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['diclofenac','diclofenac sod 0.1%',false,2.5,2.5,2.5,4,28,['Bausch & Lomb generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['dorzolamide','dorzolamide sod 2%',false,5,5,5,6,28,['Bausch & Lomb generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['cosopt','COSOPT 2% / 0.5% [dorzolamide sod / timolol maleate]',false,5,5,5,4,28,['Bausch & Lomb generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['istalol','ISTALOL 0.5% [timolol maleate]',false,2.5,2.5,2.5,2,32,['Bausch & Lomb brand','(NDC: 24208)',[['Other generics:',20]]]],
  ['levobunolol','levobunolol 0.5%',false,5,5,5,2,32,['Bausch & Lomb generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['lotemaxsusp','LOTEMAX 0.5% susp [loteprednol etabonate]',false,5,5,5,4,31,['Bausch & Lomb brand','(NDC: 24208)',[['Other generics:',20]]]],
  ['lotemaxgel','LOTEMAX 0.5% gel (5 g) [loteprednol etabonate]',false,5,5,5,4,25,['Bausch & Lomb brand/generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['lotemaxsm','LOTEMAX SM 0.38% gel (5 g) [loteprednol etabonate]',true,1,0.5,5,3,131],
  ['lumigan','LUMIGAN 0.01% [bimatoprost]',false,2.5,2.5,2.5,2,24,['Allergan brand','(NDC: 00023)',[['Other generics:',20]]]],
  ['miebo','MIEBO 1.3 GM/mL (3 mL) [perfluorohexyloctane]',true,1,0.5,5,8,272],
  ['prolensa','PROLENSA 0.07% (3 mL) [bromfenac sodium]',false,3,3,3,1,19,['Bausch & Lomb brand','(NDC: 24208)',[['Bausch & Lomb generic (NDC: 82260):',21],['Other generics:',20]]]],
  ['timoptic','TIMOPTIC [timolol maleate]',false,5,5,5,4,32,['Bausch & Lomb brand/generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['timopticxe','TIMOPTIC XE (5 mL) [timolol maleate gel forming]',false,5,5,5,2,29,['Bausch & Lomb brand/generic','(NDC: 24208 or 82260)',[['Other generics:',20]]]],
  ['vevye','VEVYE 0.1% (2 mL) [cyclosporine]',false,2,2,2,4,100],
  ['vyzulta','VYZULTA 0.024% [latanoprostene bunod]',false,2.5,2.5,2.5,2,32,null,56],
  ['xalatan','XALATAN 0.005% (2.5 mL) [latanoprost]',false,2.5,2.5,2.5,2,33,['Pfizer brand','(NDC: 00013)',[['Bausch & Lomb (NDC: 24208):',36],['Greenstone (NDC: 59762):',20],['Sandoz (NDC: 61314):',35],['Somerset (NDC: 70069):',50]]],42],
  ['zirgan','ZIRGAN 0.15% (5 g) [ganciclovir]',false,5,5,5,5,27],
  ['zylet','ZYLET 0.5% / 0.3% [loteprednol etabonate / tobramycin]',false,2.5,2.5,2.5,1,32]
];
// [abbreviated drug name (string), drug name (string), daily sprays value, sprays per package]
const arrNoseDrugs = [
  ['azelastine','azelastine 0.1% (30 mL)',4,200],
  ['butorphanol','butorphanol 10 mg/mL (2.5 mL)',2,14],
  ['calcitonin','calcitonin salmon 220 USP (3.7 mL)',1,30],
  ['desmopressin','desmopressin 0.01% (5 mL)',2,50],
  ['dymista','DYMISTA 137 mcg / 50 mcg (23 g) [azelastine / fluticasone]',4,120],
  ['flut50','FLONASE 50 mcg (16g) [fluticasone]',4,120],
  ['ipra3','ipratropium 0.03% (30 mL)',12,345],
  ['ipra6','ipratropium 0.06% (15 mL)',12,165],
  ['ryaltris','RYALTRIS 665 mcg / 25 mcg (29 g) [olopatadine / mometasone]',8,240],
  ['omnaris','OMNARIS 50 mcg (12.5 g) [ciclesonide]',4,120],
  ['zetonna','ZETONNA 37 mcg (6.1 g) [ciclesonide]',2,60]
];
// [abbreviated drug name (string), drug name (string), pen, mL min, mL step, mL value, units min, units step, units value, insulin concentration, priming units, expiration]
const arrInsulinDrugs = [
  ['u100pen','U-100 insulin PEN (3 mL)',true,3,3,3,1,0.5,0.5,100,2,28],
  ['u100vial3','U-100 insulin VIAL (3 mL)',false,3,3,3,1,1,1,100,0,28],
  ['u100vial','U-100 insulin VIAL (10 mL)',false,10,10,10,1,1,1,100,0,28],
  ['u200pen','U-200 insulin PEN (3 mL)',true,3,3,3,1,1,1,200,2,28],
  ['toujeo','U-300 TOUJEO PEN (1.5 mL) [insulin glargine]',true,1.5,1.5,1.5,1,1,1,300,3,56],
  ['toujeomax','U-300 TOUJEO MAX PEN (3 mL) [insulin glargine]',true,3,3,3,2,2,2,300,4,56],
  ['u500pen','U-500 HUMULIN R PEN (3 mL) [insulin human]',true,3,3,3,5,5,5,500,5,28],
  ['u500vial','U-500 HUMULIN R VIAL (20 mL) [insulin human]',false,20,20,20,5,5,5,500,0,40],
  ['humalogmix','U-100 HUMALOG 50/50 or 75/25 MIX PEN (3 mL) [insulin lispro protamine mix]',true,3,3,3,1,1,1,100,2,10],
  ['humulinvial','U-100 HUMULIN N, R, or 70/30 VIAL (3 mL) [insulin human]',false,3,3,3,1,1,1,100,0,31],
  ['humulinvial','U-100 HUMULIN N, R, or 70/30 VIAL (10 mL) [insulin human]',false,10,10,10,1,1,1,100,0,31],
  ['humulinnpen','U-100 HUMULIN N PEN (3 mL) [isophane insulin human]',true,3,3,3,1,1,1,100,2,14],
  ['humulinmixpen','U-100 HUMULIN 70/30 PEN (3 mL) [isophane insulin human mix]',true,3,3,3,1,1,1,100,2,10],
  ['novolinvial','U-100 NOVOLIN N, R, or 70/30 VIAL (10 mL) [insulin human]',false,10,10,10,1,1,1,100,0,42],
  ['novologmixpen','U-100 NOVOLIN 70/30 PEN (3 mL) [insulin aspart protamine mix]',true,3,3,3,1,1,1,100,2,14],
  ['tresiba100pen','U-100 TRESIBA PEN (3 mL) [insulin degludec]',true,3,3,3,1,1,1,100,2,56],
  ['tresiba200pen','U-200 TRESIBA PEN (3 mL) [insulin degludec]',true,3,3,3,1,1,1,200,2,56]
];
// [abbreviated drug name (string), drug name (string), [[table header],[table row],...]]
const arrInjDrugs = [
  ['ozempic','OZEMPIC (3 mL) [semaglutide]',[['Strength','Directions','Days Supply'],['0.25 mg or 0.5 mg','Inject 0.25 mg once weekly','56 days'],['0.25 mg or 0.5 mg','Inject 0.25 mg once weekly for 4 weeks, 0.5 mg once weekly for 2 weeks','42 days'],['0.25 mg or 0.5 mg','Inject 0.5 mg once weekly','28 days'],['1 mg','Inject 1 mg once weekly','28 days'],['2 mg','Inject 2 mg once weekly','28 days']]],
  ['liraglutide','VICTOZA or SAXENDA (3 mL) [liraglutide]',[['Product','Directions','Quantity','Days Supply'],['VICTOZA','Inject 1.2 mg daily','6 mL (2 pens)','30 days'],['VICTOZA','Inject 1.8 mg daily','9 mL (3 pens)','30 days'],['SAXENDA','Inject 0.6 mg daily for 1 week, 1.2 mg daily for 1 week, 1.8 mg daily for 1 week, 2.4 mg daily for 1 week, 3 mg daily','9 mL (3 pens)','32 days'],['SAXENDA','Inject 3 mg daily','15 mL (5 pens)','30 days']]]
];
window.onload = function() {
  addDrugs();
}
function addDrugs() {
  // Add eye/ear drugs
  for (let i = 0; i < arrEyeEarDrugs.length; i++) {
    let eyeEarDrugs = document.createElement('option');
    eyeEarDrugs.value = i;
    eyeEarDrugs.innerHTML = arrEyeEarDrugs[i][1];
    document.getElementById('eyeEarDrugs').append(eyeEarDrugs);
  }
  // Add nasal drugs
  for (let j = 0; j < arrNoseDrugs.length; j++) {
    let noseDrugs = document.createElement('option');
    noseDrugs.value = j;
    noseDrugs.innerHTML = arrNoseDrugs[j][1];
    document.getElementById('noseDrugs').append(noseDrugs);
  }
  // Add injection (insulin) drugs
  for (let k = 0; k < arrInsulinDrugs.length; k++) {
    let insulinDrugs = document.createElement('option');
    insulinDrugs.value = k;
    insulinDrugs.innerHTML = arrInsulinDrugs[k][1];
    document.getElementById('insulinDrugs').append(insulinDrugs);
  }
  // Add injection (non-insulin) drugs
  for (let l = 0; l < arrInjDrugs.length; l++) {
    let injDrugs = document.createElement('option');
    injDrugs.value = l;
    injDrugs.innerHTML = arrInjDrugs[l][1];
    document.getElementById('injDrugs').append(injDrugs);
  }
}
// Run calc() function if enter button is pressed
document.addEventListener('keyup', (e) => {
  if (e.code == 'Enter') {
    calc();
  }
})
/**
 * Shows/Hides user inputs for each drug route.
 * Triggered by onchange event.
 */
function onchangeRoute() {
  document.getElementById('proof').innerHTML = "";
  document.getElementById('output').innerHTML = "";
  document.getElementById('notes').innerHTML = "";
  document.getElementById('ifEyeEar').style.display = 'none';
  document.getElementById('ifNose').style.display = 'none';
  document.getElementById('ifInsulin').style.display = 'none';
  document.getElementById('ifInj').style.display = 'none';
  document.getElementById('ifDevice').style.display = 'none';
  document.getElementById('ifKit').style.display = 'none';
  const routeInput = document.getElementById('route');
  if (routeInput.value == 'EyeEar') {
    document.getElementById('ifEyeEar').style.display = 'block';
  } else if (routeInput.value == 'Nose') {
    document.getElementById('ifNose').style.display = 'block';
  } else if (routeInput.value == 'Insulin') {
    document.getElementById('ifInsulin').style.display = 'block';
  } else if (routeInput.value == 'Inj') {
    document.getElementById('ifInj').style.display = 'block';
  } else if (routeInput.value == 'Device') {
    document.getElementById('ifDevice').style.display = 'block';
  } else if (routeInput.value == 'Kit') {
    document.getElementById('ifKit').style.display = 'block';
  }
}
/**
 * Shows/Hides user inputs for each eye/ear drug.
 * Also changes settings for totalML and dailyDrops number inputs.
 * Triggered by onchange event.
 */
function onchangeEyeEar() {
  const eyeEarInput = document.getElementById('eyeEarDrugs').value;
  const totalML = document.getElementById('EyeEarML');
  const dailyDrops = document.getElementById('EyeEarGtt');
  // Display appropriate inputs
  if (arrEyeEarDrugs[eyeEarInput][2] == true) {
    document.getElementById('ifEyeEarML').style.display = 'none';
    document.getElementById('ifEyeEarPkg').style.display = 'block';
  } else {
    document.getElementById('ifEyeEarML').style.display = 'block';
    document.getElementById('ifEyeEarPkg').style.display = 'none';
  }
  // Change attributes for number inputs per drug if applicable
  // totalML accounts for package size (if applicable)
  // dailyDrops changes value to usual dose per package insert (if applicable)
  totalML.min = arrEyeEarDrugs[eyeEarInput][3];
  totalML.step = arrEyeEarDrugs[eyeEarInput][4];
  totalML.value = arrEyeEarDrugs[eyeEarInput][5];
  dailyDrops.value = arrEyeEarDrugs[eyeEarInput][6];
}
/**
 * Changes settings for NoseSpray number input.
 * Triggered by onchange event.
 */
function onchangeNose() {
  const noseInput = document.getElementById('noseDrugs').value;
  const dailySprays = document.getElementById('NoseSpray').value;
  dailySprays = arrNoseDrugs[noseInput][2];
}
/**
 * Shows/Hides user inputs for each injection drug.
 * Also changes settings for insulinML and insulinIU number inputs.
 * Triggered by onchange event.
 */
function onchangeInsulin() {
  const insulinInput = document.getElementById('insulinDrugs').value;
  const totalML = document.getElementById('insulinML');
  const dailyUnits = document.getElementById('insulinIU');
  // Change settings for insulinML and insulinIU number inputs
  totalML.min = arrInsulinDrugs[insulinInput][3];
  totalML.step = arrInsulinDrugs[insulinInput][4];
  totalML.value = arrInsulinDrugs[insulinInput][5];
  dailyUnits.min = arrInsulinDrugs[insulinInput][6];
  dailyUnits.step = arrInsulinDrugs[insulinInput][7];
  dailyUnits.value = arrInsulinDrugs[insulinInput][8];
  // Display appropriate inputs
  if (arrInsulinDrugs[insulinInput][2] == true) {
    document.getElementById('insulin').style.display = 'block';
    document.getElementById('insulinPen').style.display = 'block';
  } else {
    document.getElementById('insulin').style.display = 'block';
    document.getElementById('insulinPen').style.display = 'none';
  }
  calcPkg();
}
/**
 * Calculates the number of pens and outputs via innerHTML to 'numPkg'.
 * Triggered by onchange event.
 */
function calcPkg() {
  const totalML = document.getElementById('insulinML');
  const insulinInput = document.getElementById('insulinDrugs').value;
  if (isNaN(totalML.value) || totalML.value == 0) {
      document.getElementById('numPkg').innerHTML = "Invalid package size";
  } else {
    if (arrInsulinDrugs[insulinInput][2] == true) {
      document.getElementById('numPkg').innerHTML = totalML.value+" mL / "+arrInsulinDrugs[insulinInput][3]+" mL pen = "+totalML.value / arrInsulinDrugs[insulinInput][3]+" pen(s)";
    } else {
      document.getElementById('numPkg').innerHTML = totalML.value+" mL / "+arrInsulinDrugs[insulinInput][3]+" mL vial = "+totalML.value / arrInsulinDrugs[insulinInput][3]+" vial(s)";
    }
  }
}
/**
 * Calculates days supply and outputs via innerHTML.
 * Triggered by onclick event.
 */
function calc() {
  document.getElementById('proof').innerHTML='';
  document.getElementById('output').innerHTML = '';
  document.getElementById('notes').innerHTML = '';
  let proof = '';
  let output = '';
  let notes = '';
  switch (document.getElementById('route').value) {
    case 'EyeEar':
      const eyeEarInput = document.getElementById('eyeEarDrugs').value;
      const totalML = document.getElementById('EyeEarML').value;
      const totalPkg = document.getElementById('EyeEarPkg').value;
      const dailyDrops = document.getElementById('EyeEarGtt').value;
      let totalDrops;
      // Calculate total number of drops
      if (arrEyeEarDrugs[eyeEarInput][2] == true) {
        proof = "("+totalPkg+" pkg x "+arrEyeEarDrugs[eyeEarInput][7]+" drops/pkg)";
        totalDrops = totalPkg*arrEyeEarDrugs[eyeEarInput][7];
      } else {
        proof = "("+totalML+" mL x "+arrEyeEarDrugs[eyeEarInput][7]+" drops/mL)";
        totalDrops = totalML*arrEyeEarDrugs[eyeEarInput][7];
      }
      // Validate inputs and calculate days supply
      if (isNaN(totalDrops) || totalDrops < 1 || isNaN(dailyDrops) || dailyDrops < 1) {
        document.getElementById('output').innerHTML = "Invalid input(s)"
      } else {
        output = Math.floor(totalDrops / dailyDrops);
        proof += " / "+dailyDrops+" drops per day =";
        // Add notes to specific drugs
        let standardDrops = Math.floor((totalML*20)/dailyDrops);
        if (arrEyeEarDrugs[eyeEarInput][8] != null) {
          notes = "Days supply calculation only applies to <u>"+arrEyeEarDrugs[eyeEarInput][8][0]+"</u> "+arrEyeEarDrugs[eyeEarInput][8][1]+"<br>Use the following calculation for other manufacturers:";
          for (let j = 0; j < arrEyeEarDrugs[eyeEarInput][8][2].length; j++) {
            notes += "<br>"+arrEyeEarDrugs[eyeEarInput][8][2][j][0]+" ("+totalML+" mL x "+arrEyeEarDrugs[eyeEarInput][8][2][j][1]+" drops/mL) / "+dailyDrops+" = "+Math.floor(totalML*arrEyeEarDrugs[eyeEarInput][8][2][j][1]/dailyDrops)+" days supply";
          }
        }
        if (arrEyeEarDrugs[eyeEarInput][9] != null) {
          notes += "<br><b>Expires "+arrEyeEarDrugs[eyeEarInput][9]+" days after opening</b>"
        }
        document.getElementById('proof').innerHTML = proof;
        document.getElementById('output').innerHTML = output+" days supply";
        document.getElementById('notes').innerHTML = notes;
      }
      break;
    case 'Nose':
      const noseInput = document.getElementById('noseDrugs').value;
      const totalNosePkg = document.getElementById('NosePkg').value;
      const dailySprays = document.getElementById('NoseSpray').value;
      let totalSprays;
      // Calculate total number of sprays
      proof = "("+totalNosePkg+" pkg x "+arrNoseDrugs[noseInput][3]+" sprays/pkg)";
      totalSprays = totalNosePkg*arrNoseDrugs[noseInput][3];
      // Validate inputs and calculate days supply
      if (isNaN(totalSprays) || totalSprays < 1) {
        document.getElementById('output').innerHTML = "Invalid input(s)"
      } else {
        output = Math.floor(totalSprays / dailySprays);
        proof += " / "+dailySprays+" sprays per day = ";
        document.getElementById('proof').innerHTML = proof;
        document.getElementById('output').innerHTML = output+" days supply";
      }
      break;
    case 'Insulin':
      const insulinInput = document.getElementById('insulinDrugs').value;
      const totalInsulinML = document.getElementById('insulinML').value;
      let dailyUnits = document.getElementById('insulinIU').value;
      let totalUnits;
      let totalPkgUnits;
      let validPkg = true;
      // Calculate total number of units
      proof = "("+totalInsulinML+" mL x "+arrInsulinDrugs[insulinInput][9]+" units/mL)";
      totalUnits = totalInsulinML*arrInsulinDrugs[insulinInput][9];
      totalPkgUnits = arrInsulinDrugs[insulinInput][3]*arrInsulinDrugs[insulinInput][9];
      // Validate correct package size
      if (totalInsulinML % arrInsulinDrugs[insulinInput][3] > 0) {
        validPkg = false;
      }
      // Recalculate daily dose to include priming dose (pens only)
      if (arrInsulinDrugs[insulinInput][2] == true) {
        proof += " / ("+dailyUnits+" units + ("+document.getElementById('insulinFreq').value+" injections x "+arrInsulinDrugs[insulinInput][10]+" priming units)) =";
        dailyUnits = Number(dailyUnits)+(document.getElementById('insulinFreq').value*arrInsulinDrugs[insulinInput][10]);
      } else {
        proof += " / ("+dailyUnits+" units) =";
      }
      // Calculate 30 day and 90 day vials/pens
      var monthlyPkg = Math.floor((dailyUnits*30)/totalPkgUnits);
      var quarterlyPkg = Math.floor((dailyUnits*90)/totalPkgUnits);
      var monthlyML = (monthlyPkg * totalPkgUnits) / (totalUnits / totalInsulinML);
      var quarterlyML = (quarterlyPkg * totalPkgUnits) / (totalUnits / totalInsulinML);
      var monthlyPkgDays = Math.floor(monthlyPkg*totalPkgUnits/dailyUnits);
      var quarterlyPkgDays = Math.floor(quarterlyPkg*totalPkgUnits/dailyUnits);
      // Validate inputs and calculate days supply
      if (isNaN(totalUnits) || totalUnits < 1 || isNaN(dailyUnits) || dailyUnits < 1) {
        document.getElementById('output').innerHTML = "Invalid input(s)";
      } else if (validPkg == false) {
        document.getElementById('output').innerHTML = "Invalid package size";
      } else {
        output = Math.floor(totalUnits / dailyUnits);
        // Correct days supply based on product stability
        if (arrInsulinDrugs[insulinInput][11] > 0 && totalInsulinML/output < arrInsulinDrugs[insulinInput][3] / arrInsulinDrugs[insulinInput][11]) {
          output = "<del>"+output+" days supply</del> &rarr; "+totalInsulinML/arrInsulinDrugs[insulinInput][3]*arrInsulinDrugs[insulinInput][11];
          notes = "Each pen only lasts for "+arrInsulinDrugs[insulinInput][11]+" days after first usage";
        }
        // Add 30 and 90 day calculations if applicable
        if (monthlyPkg > 0 || quarterlyPkg > 0) {
          notes += "<br>"+"Nearest 30 day supply: "+monthlyPkg+" vials/pens ("+monthlyML+" mL = "+monthlyPkgDays+" days supply)";
          notes += "<br>"+"Nearest 90 day supply: "+quarterlyPkg+" vials/pens ("+quarterlyML+" mL = "+quarterlyPkgDays+" days supply)";
        }
        // Display results
        document.getElementById('proof').innerHTML = proof;
        document.getElementById('output').innerHTML = output+" days supply";
        document.getElementById('notes').innerHTML = notes;
      }
      break;
    case 'Inj':
      // Create HTML table from array
      let injInput = document.getElementById('injDrugs').value;
      let injTable = "<table>";
      for (let i = 0; i < arrInjDrugs[injInput][2].length; i++) {
        injTable += "<tr>";
        for (j = 0; j < arrInjDrugs[injInput][2][i].length; j++) {
          if (i == 0) {
            injTable += "<th>"+arrInjDrugs[injInput][2][i][j]+"</th>";
          } else {
            injTable += "<td>"+arrInjDrugs[injInput][2][i][j]+"</td>";
          }
        }
        injTable += "</tr>";
      }
      // Display results
      document.getElementById('output').innerHTML = injTable;
      break;
  }
}
/**
 * Copies days supply result and displays alert.
 * Triggered by onclick event.
 */
function copyText() {
  var result = document.getElementById('proof').innerText+" "+document.getElementById('output').innerText+"\r\n"+document.getElementById('notes').innerText;
  if (document.getElementById('proof').innerText.length+document.getElementById('output').innerText.length+document.getElementById('notes').innerText.length == 0) {
    alert('No text found');
  } else {
    navigator.clipboard.writeText(result);
    document.getElementById('copyAlert').style.display = 'block';
    document.getElementById('copyAlert').innerHTML = 'Text copied!';
    setTimeout(function() {
      document.getElementById('copyAlert').innerHTML = '';
      document.getElementById('copyAlert').style.display = 'none';
    }, 2000);
  }
}
