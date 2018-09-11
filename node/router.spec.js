const superagent = require('supertest');
const app = require('./app')
function request(){
  return superagent(app.listen());
}
describe('node接口测试',function(){
  it('php接口访问',function(done){
    request()
      .get("http://127.0.0.1/index.php?num=22")
      .expect('Content-type','text/html; charset=iso-8859-1')
      .expect(404)
      .end(function(err,res){
        if(typeof res.data === "object"){
          done()
        }else{
          done(err)
        }
      })
  })
})