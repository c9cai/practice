//fuck this shit decided to use a 2d DLL + map lul

class ds {
  constructor() {
    this.dict = {};
    this.counts = {};
		this.maxVal = -Infinity
    this.minVal = Infinity

    this.highest = []
    this.lowest = []

  }
  
  plus(key) {
    this.dict[key] = (this.dict[key] === undefined) ? 1 : this.dict[key]++
    if (this.dict[key] > this.maxVal) {
      this.max = key
      this.maxVal = this.dict[key]
    }
    if (this.dict[key] < this.minVal) {
      this.max = key
      this.minVal = this.dict[key]
    }
  }

  minus(key) {
    if (this.dict[key] >= 1) {
      if (this.dict[key] === 1) {
        delete this.dict[key]
      } else {
        this.dict[key] = this.dict[key]--

      }
    }
  }

  get_max() {
    return this.max
  }

  get_min() {
    return this.min
  }
}