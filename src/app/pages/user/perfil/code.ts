// var cursosarray = ['61eb1d51c0de2', '6208554a2a65b', '6209b96842557', '6209c6b88e3f7', '6209cbaebe125', '620a3c69e4f31']
//     const reducerSum = (accumulator, currentValue) => {
//       if (currentValue?.completoVista === "SI") {
//         return accumulator + 1;
//       }
//       return accumulator;
//     };
//     for (var i = 0; i < cursosarray.length; i++) {
//       const payload = new FormData();
//       payload.append("token", token_);
//       payload.append("idCurso", cursosarray[i]);
//       axios
//         .post(`https://unacemcantera.com.pe/user/videos_by_course`, payload)
//         .then((res) => {

//           totalcursos.push([res.data.data[0].nombreCurso , parseInt(((res.data.data.reduce(reducerSum, 0)) * 100) / res.data.data.length)])
//           console.log(totalcursos)
//           setTotalCursos(totalcursos)
          
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//         .finally(() => {

//         });

//     }