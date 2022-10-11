/**
 * The program calculates the
 *
 *
 * By: Seti Ngabo
 * Version: 1.0
 * Since:   2022-09-15
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const light = 2.998 * 10 ** 8

// input and output
const userString = prompt('What is the mass of the object?(kg) : ')
const user = parseFloat(userString)

if (user < 0) {
  console.log('Negative number, tyry again.')
} else if (user! > 0) {
  console.log(`${user} is not a number`)

  const answer = (user * light) ** 2
  console.log(`${answer} Joules of energy would be released`)
} else {
  console.log('Invalid input, try again.')
}

console.log('\nDone.')
