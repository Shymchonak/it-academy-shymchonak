const fs = require('fs-extra')

//Directories
const projectDir = '/Users/Slavva/Documents/it-academy/it-academy-shymchonak/Homework-02/'
const firstWorkDirName = 'workdir-01/'
const secondWorkDirName = 'workdir-02/'
const thirdWorkDirName = 'workdir-03/'

const firstWorkDirAddress = projectDir + firstWorkDirName
const secondWorkDirAddress = projectDir + secondWorkDirName
const thirdWorkDirAddress = projectDir + thirdWorkDirName


//Files
const fileName = 'Workfile.txt'
const newFileName = 'NewWorkfile.txt'

const fileAddress = projectDir + firstWorkDirName + fileName
const newFileAddress = secondWorkDirAddress + fileName
const fullFileAddressSrc = secondWorkDirName + fileName
const fullFileAddressDst = thirdWorkDirName + newFileName


//содание первой папки
fs.ensureDirSync(firstWorkDirAddress)

//cоздание файла в первой рабочей папке
fs.ensureFileSync(fileAddress)

//создание второй папки
fs.ensureDirSync(secondWorkDirAddress)

//перемещение файла из папки №1 в папку №2
fs.moveSync(fileAddress, newFileAddress)

//создание третьей папки
fs.ensureDirSync(thirdWorkDirAddress)

//копирование файла из второй папки в третью
fs.copySync(fullFileAddressSrc, fullFileAddressDst)

//удаление начального файла
fs.removeSync(fullFileAddressSrc)
//удаление скопированного файла
fs.removeSync(fullFileAddressDst)

//удаление 3 папки
fs.removeSync(firstWorkDirName)
//удаление 2 папки
fs.removeSync(secondWorkDirName)
//удаление 1 папки
fs.removeSync(thirdWorkDirName)