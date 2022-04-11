#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const CMDLETS_FOLDER = path.join(__dirname, 'cmdlets')


try {
    for (const CMDLET of fs.readdirSync(CMDLETS_FOLDER)) {
        const CMDLET_PATH = path.join(CMDLETS_FOLDER, CMDLET)
        const SYSTEM32_PATH = path.join('C:', 'Windows', 'System32', CMDLET)
        
        fs.copyFileSync(CMDLET_PATH, SYSTEM32_PATH)
    }
} catch (err) {
    console.log('Did you thought I was joking when I told you to open cmd as administrator?')
}