module.exports = {
  getHomePage: (req,res) => {
    let query = "select * from players order by id asc";

    //execute query
    db.query(query,(err,result)=>{
      if(err){
        res.redirect('/');
      }
      res.render('index.ejs',{
        'title':'Welcome to Socka | View Players',
        'players':result
      });
    });
  }
}
