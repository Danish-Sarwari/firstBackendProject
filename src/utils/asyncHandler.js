const asyncHandler = (requsetHandler)=>{
    (res, req, next) =>{
        Promise.resolve(
            requsetHandler(res, req, next)
        ).catch((error)=>next(error))
    }
}


export {asyncHandler}

// const asyncHandler= (fn) = async (res, req, next) =>{
//     try {
//         await fn(res, req, next)
//     } catch (error) {
//         res.status(err.code || 200).json({
//             success: false,
//             messsage: err.messsage
//         })
//     }
// }