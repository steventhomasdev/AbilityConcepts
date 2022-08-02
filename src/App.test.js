import { GetProductsCat, LoginAuthentication } from "./api/api";

// describe("GetProductsCat Api test", () => {
//   test("get all product categories", async () => {
//     const testData = {
//       body: [
//         {
//           _id: {
//             $oid: "628cdd8c5b3657ed9f0290d9",
//           },
//           cat: "Rentals",
//           image:
//             "https://medicsmobility.ca/media/wysiwyg/category-images/01Rentals.jpg",
//         },
//         {
//           _id: {
//             $oid: "628cddeb5b3657ed9f0290db",
//           },
//           cat: "Beds and Mattress",
//           image:
//             "https://medicsmobility.ca/media/wysiwyg/category-images/02BedsMattresses.jpg",
//         }
//       ],
//       StatusCode: "200"
//     };
//     const response = { json: jest.fn().mockResolvedValueOnce(testData) };
//     global.fetch = jest.fn().mockResolvedValueOnce(response);

//     return GetProductsCat().then((data) => {
//       expect(data.StatusCode).toEqual("200");
//     });
//   });o0poj 
// describe("GetProductsCat Api test", () => {
//   test("get all product categories", async () => {

//     return GetProductsCat().then((data) => {
//       expect(data).toEqual(200); 
//     });
//   });
// });


// describe("Login API tests", () => {
//   test("login success", async () => {

//     const userData = {
//       email: "steven@gmail.com",
//       password: "steven@123"
//     };

//     return LoginAuthentication(userData).then((data) => {
//       expect(data.statusCode).toEqual(200);
//     });
//   });
// });

// describe("Login API tests", () => {
//   test("login fai", async () => {

//     const userData = {
//       email: "steven@gmail.com",
//       password: "steven@12hhh3"
//     };

//     return LoginAuthentication(userData).then((data) => {
//       expect(data.statusCode).toEqual(401);
//     });
//   });
// });