export default (rec) => {
  const elems = ["STYLE","SCRIPT","HEAD","#text"]

  // console.log(rec[0]);

  function B_CHECK_ELEM(el){
    return !elems.includes(el?.nodeName) && !!(
      el?.getAttribute("class") 
      ||el?.getAttribute(blick.attr.flex)
      ||el?.getAttribute(blick.attr.text)
      ||el?.getAttribute(blick.attr.grid) 
    )
  }


  if (rec.length !== 1) return true
  if (B_CHECK_ELEM(rec[0].target) && !rec[0].addedNodes) return true 
  if (rec[0].addedNodes.length > 1) return true 
  if (B_CHECK_ELEM(rec[0].addedNodes[0])) return true
}