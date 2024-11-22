//----------------------------------
function promptok(pref){ 
  let repl = prompt(pref + '\nPlease enter y or n to continue:\n' + pref).toLowerCase().trim();
  if(repl == 'y') return 1;
  return 0;
}//endfunc
//----------------------------------
function getfromlocstor(pref){ 
  return localStorage.getItem(pref);
}//endfunc
//----------------------------------
function savetolocstor(pref, pdata){ 
  localStorage.setItem(pref, pdata);
}//endfunc
//----------------------------------
/* Example input: anewvcb = groupval2listbykey(atx3, '=', '/');
 * Example output: { 'one': 'some/word/list/here', 'two': 'another/word/list/here' }
 */
function groupval2listbykey(parr, pdelim, psep){ 
  parr = sortuniqstrarr(parr);
  let rgx = RegExp(pdelim);
  let prevfld1 = '';
  let listfld2 = '';
  let aout = new Array();
  let fld1='';
  let fld2='';
  for(i in parr){
    let atmp1 = parr[i].split(rgx);
    fld1=atmp1[0];
    if(typeof atmp1[1] != 'undefined') fld2=atmp1[1];
    if(i){
      if(prevfld1 != fld1){
        aout[prevfld1] = listfld2;
        listfld2 = '';
      }
      if(listfld2!='') listfld2+=psep;
      listfld2 += fld2;
    }
    prevfld1 = fld1;
  }//endfor
  aout[prevfld1] = listfld2;
  return aout;
}//endfunc
//----------------------------------
function sortuniq(pstr, pdelim){ 
const rgx = RegExp(pdelim);
let atmp1 = pstr.split(rgx);
atmp1 = sortuniqstrarr(atmp1);
let outstr = '';
  for(i in atmp1){
    if(outstr != '') outstr += pdelim;
    outstr += atmp1[i];
  }//endfor
  return outstr;
}//endfunc
//----------------------------------
function sortuniqstrarr(arr) { 
  if (arr.length === 0) return arr;
  //arr = arr.sort(function (a, b) { return a*1 - b*1; }); //<=NUM 
  arr = arr.sort(function (a, b) { return ('' + a).localeCompare(b); })
  var ret = [arr[0]];
  for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
    if (arr[i-1] !== arr[i]) {
      ret.push(arr[i]);
    }
  }
  return ret;
}
//----------------------------------
