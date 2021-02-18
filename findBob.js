let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str = str.trim()
str = str.toLowerCase()

console.log(str)
if (str.includes('bob')) {
  console.log('bob existe')
} else {
  console.log('bob n\est pas là')
}

let isExist = str.trim().toLowerCase().includes('bob')
if (isExist) {
  console.log('il existe !')
} else {
  console.log('il n\existe pas')
}