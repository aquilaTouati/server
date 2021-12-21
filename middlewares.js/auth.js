// import jwt from "jsonwebtoken";

// const secret = 'test';
// const auth = async (req, res, next) => {
//   try {
// const token = req.headers.authorization/*.split(" ")[1]*/;
// console.log("token:", token);
// const isCustomAuth = token.length < 500;

// let decodedData;
// if(token && isCustomAuth ){
//   decodedData= JSON.parse(jwt.verify(token, secret));
//   if (decodedData){
//     req.userId=decodedData.id;
//   }
// } else {
//   decodedData= JSON.parse(jwt.decode(token));
//   req.userId= decodedData.sub;
// }
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default auth;