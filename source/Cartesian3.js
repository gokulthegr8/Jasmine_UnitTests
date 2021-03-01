/**
 * A 3D Cartesian point.
 */
class Cartesian3 {
  /**
   * Creates a new instance
   *
   * @param {Number} [x=0.0] The X component.
   * @param {Number} [y=0.0] The Y component.
   * @param {Number} [z=0.0] The Z component.
   */
  constructor(x, y, z) {
    /**
     * The X component.
     * @type {Number}
     * @default 0.0
     */
    if(arguments.length>3){
      throw new Error ("The maximum number of arguments is 3")
    }
    if(typeof x ==='string' || x instanceof String){
      x=parseInt(x)
      if(Number.isNaN(x)){
        throw new Error("Please enter a number")
      }
    }
    if(typeof y =='string' || y instanceof String){
      y=parseInt(y)
      if(Number.isNaN(y)){
        throw new Error("Please enter a number")
      }
    }
    if(typeof z ==='string' || z instanceof String){
      z=parseInt(z)
      if(Number.isNaN(z)){
        throw new Error("Please enter a number")
      }
    }
    this.x = x ?? 0.0;

    /**
     * The Y component.
     * @type {Number}
     * @default 0.0
     */
    this.y = y ?? 0.0;

    /**
     * The Z component.
     * @type {Number}
     * @default 0.0
     */
    this.z = z ?? 0.0;
  }

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Cartesian3} [right] The second Cartesian.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  equals(right) {
    if(arguments.length>1 || arguments.length<1){
      throw new Error ("Argument length is incorrect")
    }
    return (
      this === right ||
      (this.x === right.x && this.y === right.y && this.z === right.z)
    );
  }

  /**
   * Computes the componentwise sum of this instance and the provided instance.
   *
   * @param {Cartesian3} right The instance to add to this instance
   * @param {Cartesian3} [result] An existing instance onto which to restore the result
   * @returns {Cartesian3} The modified result parameter or a new instance if a result parameter was not provided.
   */
  add(right, result) {
    if (!(right instanceof Cartesian3)) {
      throw new Error("right is required");
    }

    if (typeof result !== "undefined") {
      result.x = this.x + right.x;
      result.y = this.y + right.y;
      result.z = this.z + right.z;
      return result;
    }

    return new Cartesian3(this.x + right.x, this.y + right.y, this.z + right.z);
  }
}

export default Cartesian3;
