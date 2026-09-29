const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// try catch handler
// const asyncHandler = (fn) => async (req, res, next) => {

//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

/*

// how this function inside function works 

const asyncHandler = () => { }
const asyncHandler = (func) => { }
const asyncHandler = (func) => async () => { }
const asyncHandler = (func) => { return async () => { func() } }
const asyncHandler = (func) => async () => {
    return function () {

    }
}
function asyncHandler(func) {
    return async function () {
        func() // executed here 
    };
}



// another eg :

const makeAdder = (x) => {
  return (y) => x + y;
};

const add5 = makeAdder(5);

add5(3);

*/
