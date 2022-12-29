
function isValid(value){
    if (typeof value=== "undefined" || typeof value ===null) return false
    if (typeof value=== "string" &&  value.trim().length===0) return false
    if (typeof value=== "number" &&  value.trim().length===0) return false
    if (typeof value=== "object" ) return false
    
    return true
}

const isValidObjectId=function(id){
    const regexObjectID = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i
    return (regexObjectID.test(id))
    }



module.exports={isValid,isValidObjectId}