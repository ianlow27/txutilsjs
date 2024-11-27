//---------------------------------- 
function isMobile(){
   const toMatch = [
       /Android/i,
       /webOS/i,
       /iPhone/i,
       /iPad/i,
       /iPod/i,
       /Phone/i
   ];
   return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
   });
   /* ES5
     return toMatch.some(function(toMatchItem){
       return navigator.userAgent.match(toMatchItem);
     });
   */ 
}//endfunc
//----------------------------------
function cym_conv2Accentxx(pstr){
return "h33333g0865ffgh";
}
function cym_conv2Accent(pstr){
//pstr=String(pstr);
       
//alert("1"+pstr);
if(pstr.match(/\^/)){
  pstr = pstr.replace(/a\^/g, 'â');
  pstr = pstr.replace(/e\^/g, 'ê');
  pstr = pstr.replace(/i\^/g, 'î');
  pstr = pstr.replace(/o\^/g, 'ô');
  pstr = pstr.replace(/u\^/g, 'û');
  pstr = pstr.replace(/w\^/g, 'ŵ');
  pstr = pstr.replace(/y\^/g, 'ŷ');
}
if(pstr.match(/%/)){
  pstr = pstr.replace(/a%/g, 'ä');
  pstr = pstr.replace(/e%/g, 'ë');
  pstr = pstr.replace(/i%/g, 'ï');
  pstr = pstr.replace(/o%/g, 'ö');
  pstr = pstr.replace(/u%/g, 'ü');
  pstr = pstr.replace(/y%/g, 'ÿ');
}
if(pstr.match(/´/)){
  pstr = pstr.replace(/a´/g, 'á');
  pstr = pstr.replace(/e´/g, 'é');
  pstr = pstr.replace(/i´/g, 'í');
  pstr = pstr.replace(/o´/g, 'ó');
  pstr = pstr.replace(/u´/g, 'ú');
  pstr = pstr.replace(/y´/g, 'ý');
}
if(pstr.match(/`/)){
  pstr = pstr.replace(/a`/g, 'à');
  pstr = pstr.replace(/e`/g, 'è');
  pstr = pstr.replace(/i`/g, 'ì');
  pstr = pstr.replace(/o`/g, 'ò');
  pstr = pstr.replace(/u`/g, 'ù');
  pstr = pstr.replace(/y`/g, 'ỳ');
}
//alert(pstr);

//let str=pstr;
return pstr;
}//endfunc
//-----------------------------------
function rmleadspc(pstr){

  let retval = String(pstr)
    .replace(/\s([\,\.\:\;\!\?]{1,1})/g,"$1")
    .replace(/\s'\ss\s/g, "'s ")
    .replace(/\s'\sS\s/g, "'S ")
    ;
//alert(retval);
return retval;

//return pstr;
}//endfunc
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
//----------------------------------
