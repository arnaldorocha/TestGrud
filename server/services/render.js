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

exports.interview = (req,res)=>{
  res.render('interview');
}

exports.interviewRegister = (req,res)=>{
  res.render('interviewRegister');
}

exports.interviewLogs = (req,res)=>{
  res.render('interviewLogs');
}

exports.knowledge = (req,res)=>{
  res.render('knowledge');
}

exports.portfolio = (req,res)=>{
  res.render('portfolio');
}

exports.contacts = (req,res)=>{
  res.render('contacts');
}

exports.update_user = (req,res)=>{
  res.render('update_user');
}
