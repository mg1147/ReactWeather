function addPromise(a, b){
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      var c = a+b;
      resolve(c);
    } else {
        reject('Es wurde ein String eingegeben');
      }
    });
}

addPromise(1,2).then(function (temp) {
  console.log('promise succes', temp);
}, function (err) {
  console.log('Fehler',err);
});

addPromise(1,'bla').then(function (temp) {
  console.log('promise succes', temp);
}, function (err) {
  console.log('Fehler',err);
});
f
