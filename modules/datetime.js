const dt = luxon.DateTime.now().toFormat('MMMM d yyyy, HH:mm:ss') + luxon.DateTime.now().toFormat(' a').toLowerCase();

export default dt;

console.log(dt); 

