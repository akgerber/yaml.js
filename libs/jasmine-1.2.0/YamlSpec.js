describe("YAML parsing", function() {
	var t;
	for ( var i = 0; i < YAML.parseTests.length; i++){

		t = YAML.parseTests[i];
		
		it(t.title, function() {
		  expect(YAML.decode(t.input)).toEqual(t.output);
		});
	}
});
describe("YAML dumping and parsing", function() {
	var t;
	for ( var i = 0; i < YAML.parseTests.length; i++){

		t = YAML.parseTests[i];
		
		it(t.title, function() {
		  expect(YAML.decode(YAML.encode(t.output))).toEqual(t.output);
		});
	}
});