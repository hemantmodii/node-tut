//globals- no window !!!!

//__dirname     - path to current directory
//__filename    - file name
//require       - function to use module
//module        - info about current module(file)
//process       - info about env where the program is beign executed

console.log(__dirname);
setInterval(() => {
  console.log('hello world');
}, 1000);