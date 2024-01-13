// async function a() {
//   let prom = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   let result = await prom;

//   console.log(result);
// }
// a();

// const monocurrency = async () => {
//   let response = await fetch('https://api.monobank.ua/bank/currency');

//   if (response.ok) {
//     console.log('ok');
//   } else {
//     console.log('err: ' + response.status);
//   }
// };
// monocurrency();

// const postTest = async () => {
//   let user = {
//     name: 'Ivan',
//     city: 'Kyiv',
//   };

//   let response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// try {
//   console.log('start');
//   a;
//   console.log('finish');
// } catch (error) {
//   console.error(error);
// }

// setTimeout(() => {
//   try {
//     console.log('ok');
//     a;
//   } catch (error) {
//     console.log(error);
//   }
// }, 1000);

let socket = new WebSocket('wss://javascript.info');

socket.onopen = function (e) {
  console.log(e);
};

socket.onmessage = function (e) {
  console.log('message');
};
