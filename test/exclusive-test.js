var tap = require("../")
  , test = tap.test

test("this test gets skipped", function(t){
  t.ok(false, 'should have been skipped')
  t.end()
})

test.only("only runs this test", function(t){
  t.ok(true, 'yea!')
  t.end()
})

