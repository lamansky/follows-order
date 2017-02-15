'use strict'

const sequentialIndexOf = require('sequential-indexof')

module.exports = function followsOrder (arrayToCheck, order) {
  if (order.length <= 1) return true
  const orderIndex = sequentialIndexOf(order)

  let elem, pos
  let prev = 0
  let i = 0

  while (i < arrayToCheck.length) {
    elem = arrayToCheck[i++]
    pos = orderIndex(elem)
    if (pos !== -1) {
      if (pos < prev) return false
      prev = pos
    }
  }
  return true
}
