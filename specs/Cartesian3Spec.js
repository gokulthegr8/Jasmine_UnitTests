import Cartesian3 from "../source/Cartesian3.js";

describe("Cartesian3", function () {
  it("construct with default values", function () {
    var cartesian = new Cartesian3();
    expect(cartesian.x).toEqual(0.0);
    expect(cartesian.y).toEqual(0.0);
    expect(cartesian.z).toEqual(0.0);
  });

  it("construct with all values", function () {
    var cartesian = new Cartesian3(1.0, 1.0, 1.0);
    expect(cartesian.x).toEqual(1.0);
    expect(cartesian.y).toEqual(1.0);
    expect(cartesian.z).toEqual(1.0);
  });

  it("add works", function () {
    var left = new Cartesian3(2.0, 3.0, 6.0);
    var right = new Cartesian3(6.0, 5.0, 7.0);
    var result = new Cartesian3();
    var expectedResult = new Cartesian3(8.0, 8.0, 13.0);
    left.add(right, result);
    expect(result).toEqual(expectedResult);
  });

  it("equals returns true for identical values", function () {
    var cartesian = new Cartesian3(1.0, 2.0, 3.0);
    expect(cartesian.equals(new Cartesian3(1.0, 2.0, 3.0))).toEqual(true);
  });

  it("equals returns false for differing values", function () {
    var cartesian = new Cartesian3(1.0, 2.0, 3.0);
    expect(cartesian.equals(new Cartesian3(4.0, 5.0, 6.0))).toEqual(false);
  });

  //TCs added by Gokul
  it("construct with default values - validate for non decimal values", function () {
    var cartesian = new Cartesian3();
    expect(cartesian.x).toEqual(0);
    expect(cartesian.y).toEqual(0);
    expect(cartesian.z).toEqual(0);
  });

  it("construct with default values - validate failure for incorrect values", function () {
    var cartesian = new Cartesian3();
    expect(cartesian.x).not.toEqual(1.0);
    expect(cartesian.y).not.toEqual(1.0);
    expect(cartesian.z).not.toEqual(1.0);
  });
 
  it("construct with all values - Validate whether the constructor is accepting strings(numbers)", function () {
    var cartesian = new Cartesian3("1.0", "1.0", "1.0");
    expect(cartesian.x).toEqual(1.0);
    expect(cartesian.y).toEqual(1.0);
    expect(cartesian.z).toEqual(1.0);
  });
  // Similarly we can write test cases for other combinations
  it("constructor - Combination of values and default values", function () {
    var cartesian = new Cartesian3(1.0, 1.0);
    expect(cartesian.x).toEqual(1.0);
    expect(cartesian.y).toEqual(1.0);
    expect(cartesian.z).toEqual(0.0);
  });
  it("add works for string input", function () {
    var left = new Cartesian3(2.0, 3.0, 6.0);
    var right = new Cartesian3("6.0", "5.0", "7.0");
    var result = new Cartesian3();
    var expectedResult = new Cartesian3(8.0, 8.0, 13.0);
    left.add(right, result);
    expect(result).toEqual(expectedResult);// The numbers get concatenated instead of adding as one of the input is in string format. Hence the test case will fail.
  });
  it("add - validate whether add function still works without passing in the result parameter", function () {
    var left = new Cartesian3(2.0, 3.0, 6.0);
    var right = new Cartesian3(6.0, 5.0, 7.0);
    var expectedResult = new Cartesian3(8.0, 8.0, 13.0);
    expect(left.add(right)).toEqual(expectedResult);
  });
  it("add - no parameter", function () {
    var left = new Cartesian3(2.0, 3.0, 6.0);
    expect( function(){ left.add() } ).toThrow(new Error("right is required"));
  });
  //this can be done for different combinations
  it("equals returns false for single different value", function () {
    var cartesian = new Cartesian3(1.0, 2.0, 3.0);
    expect(cartesian.equals(new Cartesian3(1.0, 2.0, 6.0))).toEqual(false);
  });
  it("validate error message when a random word is passed as a parameter to the constructor", function () {
    // var cartesian = new Cartesian3("abc");
    expect( function(){new Cartesian3("abc"); } ).toThrow(new Error("Please enter a number"));
  });
  it("validate error message when more than 3 parameters are passed", function () {
    
    expect( function(){ new Cartesian3(1,2,3,4); } ).toThrow(new Error("The maximum number of arguments is 3"));

  });


    //this can be done for different combinations
  // THIS TEST CASE IS INVALID AFTER THE CODE MODIFICATION DONE IN Cartesian3.js
  // it("equals returns false for identical values with different data types", function () {
  //   var cartesian = new Cartesian3(1.0, 2.0, 3.0);
  //   expect(cartesian.equals(new Cartesian3("1.0", "2.0", "3.0"))).toEqual(false);
  // });

});
