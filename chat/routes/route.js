module.exports = {
  // indexPage: (req,res) => {
  //   res.send('<h1>Hello World!!!</h1>');
  // }
  indexPage:(req,res) => {
    res.sendFile(__dirname+'/index.html');
  }
}
