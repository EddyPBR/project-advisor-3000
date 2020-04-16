module.exports = {

  index(request, response){
    response.send({ ok: "true", user: request.userId });
  }

}
