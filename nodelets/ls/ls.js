const COLOR_RESET = "\x1b[0m"
const COLOR_BLUE = "\x1b[34m"
const COLOR_WHITE = "\x1b[37m"

const fs = require('fs')

let DIRCONTENT = fs.readdirSync(process.cwd())
DIRCONTENT = DIRCONTENT.map(fildeOrFolder => {
    if (fs.lstatSync(fildeOrFolder).isDirectory()) {
        return `${COLOR_BLUE}${fildeOrFolder}${COLOR_RESET}`
    } else {
        return `${COLOR_WHITE}${fildeOrFolder}${COLOR_RESET}`
    }
})

// Create a "table" from dircontent
// Should look like this
/*
aa       b        cccccccc
ssssssss eeee     eeeeeeee
*/

let maxLength = 0
DIRCONTENT.forEach(fileOrFolder => {
    if (fileOrFolder.length > maxLength) {
        maxLength = fileOrFolder.length
    }
})

function addSpacesUntilLengthEqualsMaxLength (string) {
    let spaces = ''
    for (let i = 0; i < maxLength - string.length; i++) {
        spaces += ' '
    }
    return string + spaces
}

const SPACED_DIRCONTENT = DIRCONTENT.map(addSpacesUntilLengthEqualsMaxLength)

// For every five elements:
for (let i = 0; i < DIRCONTENT.length; i += 5) {
    if (SPACED_DIRCONTENT[i] === undefined) SPACED_DIRCONTENT[i] = ''
    if (SPACED_DIRCONTENT[i + 1] === undefined) SPACED_DIRCONTENT[i + 1] = ''
    if (SPACED_DIRCONTENT[i + 2] === undefined) SPACED_DIRCONTENT[i + 2] = ''
    if (SPACED_DIRCONTENT[i + 3] === undefined) SPACED_DIRCONTENT[i + 3] = ''
    if (SPACED_DIRCONTENT[i + 4] === undefined) SPACED_DIRCONTENT[i + 4] = ''

    console.log(`${SPACED_DIRCONTENT[i]}  ${SPACED_DIRCONTENT[i + 1]}  ${SPACED_DIRCONTENT[i + 2]}  ${SPACED_DIRCONTENT[i + 3]}  ${SPACED_DIRCONTENT[i + 4]}`)
}