import {PraiseButton} from './pariseButton.js'
class Thumb extends PraiseButton{
  constructor (num) {
    super(num)
  }

  map (f) {
    return Thumb.of(f())
  }
  addStyle (num) {
    this.addClass('active').find('span').html(num)
  }
  removeStyle (num) {
    this.removeClass('active').find('span').html(num)
  }
  static of (num) {
    return new Thumb(num);
  }
}
const initial = function (num) {
  let thumb = Thumb.of(num)
  this._thumb = thumb
  return this
}
const addLikeNum = function () {
  this._thumb.addStyle && this._thumb.addStyle.call(this, this._thumb.addLikeNum())
  return this
}
const subLikeNum = function () {
  this._thumb.removeStyle && this._thumb.removeStyle.call(this, this._thumb.subLikeNum())
  return this
}
const twoWaryLikeNum = function (flag) {
  flag ? addLikeNum.call(this) : subLikeNum.call(this)
  return this
}
export {Thumb, initial, addLikeNum, subLikeNum, twoWaryLikeNum}