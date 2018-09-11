export class PraiseButton{
  constructor(num) {
    this.num = num
  }
  addLikeNum () {
    this.num += 1
    return this.num
  }
  subLikeNum () { 
    return this.num -= 1
  }
}