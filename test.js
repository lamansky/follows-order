'use strict'

const assert = require('assert')
const followsOrder = require('.')

describe('followsOrder()', function () {
  it('returns true for properly-ordered array', function () {
    assert(followsOrder([1, 2, 3], [1, 2, 3]))
  })

  it('returns false for improperly-ordered array', function () {
    assert(!followsOrder([1, 3, 2], [1, 2, 3]))
  })

  it('returns true for properly-ordered array with extra elements', function () {
    assert(followsOrder([1, 2, 3, 4, 5], [1, 3, 5]))
  })

  it('returns true for properly-ordered array with omitted elements', function () {
    assert(followsOrder([2, 3, 5], [1, 2, 3, 4, 5]))
  })

  it('returns true for properly-ordered array with duplicate elements', function () {
    assert(followsOrder([1, 3, 4, 1], [1, 2, 3, 2, 1]))
  })

  it('returns true for properly-ordered array with duplicate, extra elements', function () {
    assert(followsOrder([1, 1, 2, 2], [1, 2]))
  })

  it('returns false for improperly-ordered array with duplicate elements', function () {
    assert(!followsOrder([1, 1, 3], [1, 2, 3, 2, 1]))
  })

  it('returns true for properly-ordered string', function () {
    assert(followsOrder('test', 'te'))
  })

  it('returns false for an improperly-ordered string with duplicate characters', function () {
    assert(!followsOrder('abba', 'abab'))
  })
})
