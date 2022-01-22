// const {
//     models: {
//         Role
//     }
// } = require('../models')

// function initial() {
//     Role.countDocuments((err, count) => {
//         if (!err && count === 0) {
//             new Role({
//                 name: 'admin'
//             }).save(err => {
//                 if (err) throw err
//                 console.log('add "admin" to roles');
//             });
//             new Role({
//                 name: 'user'
//             }).save(err => {
//                 if (err) throw err
//                 console.log('add "user" to roles');
//             })
//             new Role({
//                 name: 'particular'
//             }).save(err => {
//                 if (err) throw err
//                 console.log('add "particular" to roles')
//             })
//         }
//     })
// }
// module.exports = {
//     initial
// }