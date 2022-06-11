
//Extraído do course
module.exports = (err, req, res, next) => {
  // Erro do Joi
  if (err.isJoi) {
    //console.log('-->',err);
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  };
  // Erro com staus
  if(err.status){
    return res.status(err.status).json({error: {message: err.message}});
  }
}