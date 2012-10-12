var tap = require("../")
  , test = tap.test

test.only("this group of tests are the only ones to run", function (t) {
  t.test("it should run this", function (t) {
    t.ok(true, "yes")
    t.end()
  })
  t.test("it should run this two", function (t) {
    t.ok(true, "yes")
    t.end()
  })
  t.end()
})

test("it should skip this test", function(t){
  t.ok(false, 'should have skipped this test')
  t.end()
})

