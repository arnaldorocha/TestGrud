exports.homeRoutes = (req, res) => {
  res.render('index');
}

exports.register = (req,res)=>{
  res.render('register');
}

exports.register_two = (req,res)=>{
  res.render('register_two');
}

exports.register_three = (req,res)=>{
  res.render('register_three');
}

exports.user = (req,res)=>{
  res.render('user');
}

exports.update_user = (req,res)=>{
  res.render('update_user');
}
