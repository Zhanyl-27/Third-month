// const data = {
//     userName: 'Zhanyl',
//     userAge: 26,
//     hobbi: 'swimming',
// };

// const jsonData = JSON.stringify(data);


const data = '{"userName": "Zhanyl", "userAge": 26, "hobbi": "swimming"}';

new Promise((resolve, reject) => 
{
    resolve(JSON.parse(data));
}).
then((data) => 
{
    console.log(data);
});