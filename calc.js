function onchangeRoute() {
  document.getElementById('proof').innerHTML = "";
  document.getElementById('output').innerHTML = "";
  document.getElementById('notes').innerHTML = "";
  document.getElementById('ifEyeEar').style.display = 'none';
  document.getElementById('ifNose').style.display = 'none';
  document.getElementById('ifInj').style.display = 'none';
  document.getElementById('ifDevice').style.display = 'none';
  document.getElementById('ifKit').style.display = 'none';
  const routeInput = document.getElementById('route');
  if (routeInput.value == 'EyeEar') {
    document.getElementById('ifEyeEar').style.display = 'block';
  } else if (routeInput.value == 'Nose') {
    document.getElementById('ifNose').style.display = 'block';
  } else if (routeInput.value == 'Inj') {
    document.getElementById('ifInj').style.display = 'block';
  } else if (routeInput.value == 'Device') {
    document.getElementById('ifDevice').style.display = 'block';
  } else if (routeInput.value == 'Kit') {
    document.getElementById('ifKit').style.display = 'block';
  }
}
function onchangeEyeEar() {
  const eyeEarInput = document.getElementById('eyeEarDrugs');
  if (eyeEarInput.value == 'lotemaxsm' || eyeEarInput.value == 'miebo') {
    document.getElementById('ifEyeEarML').style.display = 'none';
    document.getElementById('ifEyeEarPkg').style.display = 'block';
  } else {
    document.getElementById('ifEyeEarML').style.display = 'block';
    document.getElementById('ifEyeEarPkg').style.display = 'none';
  }
}
function onchangeInj() {
  const injInput = document.getElementById('injDrugs');
  if (injInput.value == 'u100vial' || injInput.value == 'u500vial') {
    document.getElementById('insulin').style.display = 'block';
    document.getElementById('insulinPen').style.display = 'none';
  } else if (injInput.value == 'u100pen' || injInput.value == 'u200pen' || injInput.value == 'toujeo' || injInput.value == 'toujeomax' || injInput.value == 'u500pen') {
    document.getElementById('insulin').style.display = 'block';
    document.getElementById('insulinPen').style.display = 'block';
  } else {
    document.getElementById('insulin').style.display = 'none';
    document.getElementById('insulinPen').style.display = 'none';
  }
}
function calcPens() {
  const totalML = document.getElementById('injML');
  const injInput = document.getElementById('injDrugs');
  if (isNaN(totalML.value) || totalML.value == 0) {
      document.getElementById('numPens').innerHTML = "Invalid package size";
  } else {
    if (injInput.value == 'u100pen' || injInput.value == 'u200pen' || injInput.value == 'toujeomax' || injInput.value == 'u500pen') {
      document.getElementById('numPens').innerHTML = totalML.value+" mL / 3 mL pen = "+totalML.value / 3+" pen(s)";
    } else if (injInput.value == 'toujeo')  {
      document.getElementById('numPens').innerHTML = totalML.value+" mL / 1.5 mL pen = "+totalML.value / 1.5+" pen(s)";
    }
  }
}
function calc() {
  var proof = "";
  var output = "";
  var notes = "";
  document.getElementById('proof').innerHTML = '';
  document.getElementById('output').innerHTML = '';
  document.getElementById('notes').innerHTML = '';
  switch (document.getElementById('route').value) {
    case 'EyeEar':
      let totalDrops;
      let totalML = document.getElementById('EyeEarML').value;
      let totalPkg = document.getElementById('EyeEarPkg').value;
      let dailyDrops = document.getElementById('EyeEarGtt').value;
      // Calculate total number of drops
      switch (document.getElementById('eyeEarDrugs').value) {
        case 'other':
          proof = "("+totalML+" mL x 20 drops/mL)";
          totalDrops = totalML*20;
          break;
        case 'bepreve':
        case 'xalatan':
          proof = "("+totalML+" mL x 33 drops/mL)";
          totalDrops = totalML*33;
          break;
        case 'alrex':
        case 'istalol':
        case 'levobunolol':
        case 'timoptic':
        case 'vyzulta':
        case 'zylet':
          proof = "("+totalML+" mL x 32 drops/mL)";
          totalDrops = totalML*32;
          break;
        case 'atropine':
        case 'besivance':
        case 'cyclopentolate':
        case 'dexamethasone':
        case 'lotemaxsusp':
          proof = "("+totalML+" mL x 31 drops/mL)";
          totalDrops = totalML*31;
          break;
        case 'brimonidine':
          proof = "("+totalML+" mL x 30 drops/mL)";
          totalDrops = totalML*30;
          break;
        case 'timopticxe':
          proof = "("+totalML+" mL x 29 drops/mL)";
          totalDrops = totalML*29;
          break;
        case 'diclofenac':
        case 'dorzolamide':
        case 'cosopt':
          proof = "("+totalML+" mL x 28 drops/mL)";
          totalDrops = totalML*28;
          break;
        case 'zirgan':
          proof = "("+totalML+" mL x 27 drops/mL)";
          totalDrops = totalML*27;
          break;
        case 'lotemaxgel':
          proof = "("+totalML+" mL x 25 drops/mL)";
          totalDrops = totalML*25;
          break;
        case 'lumigan':
          proof = "("+totalML+" mL x 24 drops/mL)";
          totalDrops = totalML*24;
          break;
        case 'prolensa':
          proof = "("+totalML+" mL x 19 drops/mL)";
          totalDrops = totalML*19;
          break;
        case 'miebo':
          proof = "("+totalPkg+" pkg x 272 drops/mL)";
          totalDrops = totalPkg*272;
          break;
        case 'lotemaxsm':
          proof = "("+totalPkg+" pkg x 131 drops/mL)";
          totalDrops = totalPkg*131;
          break;
      }
      // Validate inputs and calculate days supply
      if (isNaN(totalDrops) || totalDrops < 1 || isNaN(dailyDrops) || dailyDrops < 1) {
        document.getElementById('output').innerHTML = "Invalid input(s)"
      } else {
        output = Math.floor(totalDrops / dailyDrops);
        proof = proof+" / "+dailyDrops+" drops per day =";
        // Add notes to specific drugs
        let standardDrops = Math.floor((totalML*20)/dailyDrops);
        switch (document.getElementById('eyeEarDrugs').value) {
          case 'atropine':
          case 'brimonidine':
          case 'cyclopentolate':
          case 'dexamethasone':
          case 'diclofenac':
          case 'dexamethasone':
          case 'diclofenac':
          case 'dorzolamide':
          case 'cosopt':
          case 'levobunolol':
            notes = "Days supply calculation only applies to <u>Bausch & Lomb generic</u> (NDC: 24208 or 82260)<br>Use the following calculation for other manufacturers:<br>("+totalML+" mL x 20 drops/mL) / "+dailyDrops+" = "+standardDrops+" days supply";
            break;
          case 'bepreve':
          case 'lotemaxgel':
          case 'timoptic':
          case 'timopticxe':
            notes = "Days supply calculation only applies to <u>Bausch & Lomb brand/generic</u> (NDC: 24208 or 82260)<br>Use the following calculation for other manufacturers:<br>("+totalML+" mL x 20 drops/mL) / "+dailyDrops+" = "+standardDrops+" days supply";
            break;
          case 'istalol':
          case 'lotemaxsusp':
            notes = "Days supply calculation only applies to <u>Bausch & Lomb brand</u> (NDC: 24208 or 82260)<br>Use the following calculation for other manufacturers:<br>("+totalML+" mL x 20 drops/mL) / "+dailyDrops+" = "+standardDrops+" days supply";
            break;
          case 'lumigan':
            notes = "Days supply calculation only applies to <u>Allergan brand</u> (NDC: 00023)<br>Use the following calculation for other manufacturers:<br>("+totalML+" mL x 20 drops/mL) / "+dailyDrops+" = "+standardDrops+" days supply";
            break;
          case 'alrex':
            notes = "Days supply calculation only applies to <u>Bausch & Lomb brand</u> (NDC: 24208)<br>Use the following calculation for other manufacturers:<br>Bausch & Lomb generic (NDC: 82260): ("+totalML+" mL x 31 drops/mL) / "+dailyDrops+" = "+Math.floor(Number((totalML*31)/dailyDrops))+" days supply<br>Other generics: ("+totalML+" mL x 20 drops/mL) / "+dailyDrops+" = "+standardDrops+" days supply";
            break;
          case 'prolensa':
            notes = "Days supply calculation only applies to <u>Bausch & Lomb brand</u> (NDC: 24208 or 82260)<br>Use the following calculation for other manufacturers:<br>Bausch & Lomb generic (NDC: 82260): ("+totalML+" mL x 21 drops/mL) / "+dailyDrops+" = "+Math.floor(Number((totalML*21)/dailyDrops))+" days supply<br>Other generics: ("+totalML+" mL x 20 drops/mL) / "+dailyDrops+" = "+standardDrops+" days supply";
            break;
          case 'xalatan':
            if (Number((totalML*50)/dailyDrops) > 42) {
              notes = "<b>Expires 42 days after opening</b><br>";
            }
            notes = notes+"Days supply calculation only applies to <u>Pfizer brand</u> (NDC: 00013)<br>Use the following calculation for other manufacturers:<br>Bausch & Lomb (NDC: 24208): ("+totalML+" mL x 36 drops/mL) / "+dailyDrops+" = "+Math.floor(Number((totalML*36)/dailyDrops))+" days supply<br>Greenstone (NDC: 59762): ("+totalML+" mL x 20 drops/mL) / "+dailyDrops+" = "+standardDrops+" days supply<br>Sandoz (NDC: 61314): ("+totalML+" mL x 35 drops/mL) / "+dailyDrops+" = "+Math.floor(Number((totalML*35)/dailyDrops))+" days supply<br>Somerset (NDC: 70069): ("+totalML+" mL x 50 drops/mL) / "+dailyDrops+" = "+Math.floor(Number((totalML*50)/dailyDrops))+" days supply";
            break;
          case 'vyzulta':
            if (output > 56) {
              notes = "<b>Expires 56 days after opening</b>";
            }
            break;
        }
        document.getElementById('proof').innerHTML = proof;
        document.getElementById('output').innerHTML = output+" days supply";
        document.getElementById('notes').innerHTML = notes;
      }
      break;
    case 'Nose':
      let totalSprays;
      let totalNosePkg = document.getElementById('NosePkg').value;
      let dailySprays = document.getElementById('NoseSpray').value;
      // Calculate total number of sprays
      switch (document.getElementById('noseDrugs').value) {
        case 'ipra3':
          proof = "("+totalNosePkg+" pkg x 345 sprays/pkg)";
          totalSprays = totalNosePkg*345;
          break;
        case 'ryaltris':
          proof = "("+totalNosePkg+" pkg x 240 sprays/pkg)";
          totalSprays = totalNosePkg*240;
          break;
        case 'azelastine':
          proof = "("+totalNosePkg+" pkg x 200 sprays/pkg)";
          totalSprays = totalNosePkg*200;
          break;
        case 'ipra6':
          proof = "("+totalNosePkg+" pkg x 165 sprays/pkg)";
          totalSprays = totalNosePkg*165;
          break;
        case 'dymista':
        case 'flut50':
        case 'omnaris':
          proof = "("+totalNosePkg+" pkg x 120 sprays/pkg)";
          totalSprays = totalNosePkg*120;
          break;
        case 'zetonna':
          proof = "("+totalNosePkg+" pkg x 60 sprays/pkg)";
          totalSprays = totalNosePkg*60;
          break;
        case 'desmopressin':
          proof = "("+totalNosePkg+" pkg x 50 sprays/pkg)";
          totalSprays = totalNosePkg*50;
          break;
        case 'calcitonin':
          proof = "("+totalNosePkg+" pkg x 30 sprays/pkg)";
          totalSprays = totalNosePkg*30;
          break;
        case 'butorphanol':
          proof = "("+totalNosePkg+" pkg x 14 sprays/pkg)";
          totalSprays = totalNosePkg*14;
          break;
      }
      // Validate inputs and calculate days supply
      if (isNaN(totalSprays) || totalSprays < 1) {
        document.getElementById('output').innerHTML = "Invalid input(s)"
      } else {
        output = Math.floor(totalSprays / dailySprays);
        proof = proof+" / "+dailySprays+" sprays per day = ";
        document.getElementById('proof').innerHTML = proof;
        document.getElementById('output').innerHTML = output+" days supply";
      }
      break;
    case 'Inj':
      let totalUnits;
      let totalInjML = document.getElementById('injML').value;
      let totalPkgUnits;
      // Calculate total number of units
      switch (document.getElementById('injDrugs').value) {
        case 'u100pen':
          totalPkgUnits = 300;
          proof = "("+totalInjML+" mL x 100 units/mL)";
          totalUnits = totalInjML*100;
          break;
        case 'u100vial':
          totalPkgUnits = 1000;
          proof = "("+totalInjML+" mL x 100 units/mL)";
          totalUnits = totalInjML*100;
          break;
        case 'u200pen':
          totalPkgUnits = 600;
          proof = "("+totalInjML+" mL x 200 units/mL)";
          totalUnits = totalInjML*200;
          break;
        case 'toujeo':
          totalPkgUnits = 450;
          proof = "("+totalInjML+" mL x 300 units/mL)";
          totalUnits = totalInjML*300;
          break;
        case 'toujeomax':
          totalPkgUnits = 900;
          proof = "("+totalInjML+" mL x 300 units/mL)";
          totalUnits = totalInjML*300;
          break;
        case 'u500pen':
          totalPkgUnits = 1500;
          proof = "("+totalInjML+" mL x 500 units/mL)";
          totalUnits = totalInjML*500;
          break;
        case 'u500vial':
          totalPkgUnits = 10000;
          proof = "("+totalInjML+" mL x 500 units/mL)";
          totalUnits = totalInjML*500;
          break;
      }
      let dailyUnits = document.getElementById('injIU').value;
      // Recalculate daily dose to include priming dose (pens only)
      switch (document.getElementById('injDrugs').value) {
        case 'u100pen':
        case 'u200pen':
          proof = proof+" / ("+dailyUnits+" units + ("+document.getElementById('injFreq').value+" injections x 2 priming units)) =";
          dailyUnits = Number(dailyUnits)+(document.getElementById('injFreq').value*2);
          notes = "Check room temperature stability of drug if over 28 days supply<br>Mixed insulins have shorter stability at 10-14 days supply";
          break;
        case 'toujeo':
          proof = proof+" / ("+dailyUnits+" units + ("+document.getElementById('injFreq').value+" injections x 3 priming units)) =";
          dailyUnits = Number(dailyUnits)+(document.getElementById('injFreq').value*3);
          notes = "Check room temperature stability of drug if over 56 days supply";
          break;
        case 'toujeomax':
          proof = proof+" / ("+dailyUnits+" units + ("+document.getElementById('injFreq').value+" injections x 4 priming units)) =";
          dailyUnits = Number(dailyUnits)+(document.getElementById('injFreq').value*4);
          notes = "Check room temperature stability of drug if over 56 days supply";
          break;
        case 'u500pen':
          proof = proof+" / ("+dailyUnits+" units + ("+document.getElementById('injFreq').value+" injections x 5 priming units)) =";
          dailyUnits = Number(dailyUnits)+(document.getElementById('injFreq').value*5);
          notes = "Check room temperature stability of drug if over 28 days supply";
          break;
        case 'ozempic':
          totalUnits = 169413001;
          dailyUnits = 1;
          proof = "<table><tr><th>Strength</th><th>Directions</th><th>Days Supply</th></tr><tr><td>0.25 mg or 0.5 mg</td><td>Inject 0.25 mg once weekly</td><td>56 days</td></tr><tr><td>0.25 mg or 0.5 mg</td><td>Inject 0.25 mg once weekly for 4 weeks, 0.5 mg once weekly for 2 weeks</td><td>42 days supply</td></tr><tr><td>0.25 mg or 0.5 mg</td><td>Inject 0.5 mg once weekly</td><td>28 days supply</td></tr><tr><td>1 mg</td><td>Inject 1 mg once weekly</td><td>28 days supply</td></tr><tr><td>2 mg</td><td>Inject 2 mg once weekly</td><td>28 days supply</td></tr></table>";
          notes = "";
          break;
        default:
          proof = proof+" / ("+dailyUnits+" units) ="
          notes = "Check room temperature stability of drug if over 28 days supply";
          break;
      }
      // Calculate 30 day and 90 day vials/pens
      var monthlyPkg = Math.floor((dailyUnits*30)/totalPkgUnits);
      var quarterlyPkg = Math.floor((dailyUnits*90)/totalPkgUnits);
      var monthlyPkgDays = Math.floor(monthlyPkg*totalPkgUnits/dailyUnits);
      var quarterlyPkgDays = Math.floor(quarterlyPkg*totalPkgUnits/dailyUnits);
      notes = notes+"<br>"+"Nearest 30 day supply: "+monthlyPkg+" vials/pens ("+Number(monthlyPkg*totalPkgUnits)+" mL = "+monthlyPkgDays+" days supply)";
      notes = notes+"<br>"+"Nearest 90 day supply: "+quarterlyPkg+" vials/pens ("+Number(quarterlyPkg*totalPkgUnits)+" mL = "+quarterlyPkgDays+" days supply)";
      // Validate inputs and calculate days supply
      if (isNaN(totalUnits) || totalUnits < 1 || isNaN(dailyUnits) || dailyUnits < 1) {
        document.getElementById('output').innerHTML = "Invalid input(s)";
      } else if (totalUnits == 169413001) {
        document.getElementById('proof').innerHTML = proof;
        document.getElementById('notes').innerHTML = notes;
      } else {
        output = Math.floor(totalUnits / dailyUnits);
        document.getElementById('proof').innerHTML = proof;
        document.getElementById('output').innerHTML = output+" days supply";
        document.getElementById('notes').innerHTML = notes;
      }
      break;
  }
}
