#!/usr/bin/env node

// Task #1

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
    .command('current', 'current dates', () => {}, (argv) => {
        if (argv.year) {
            console.log(new Date().getFullYear())
        } else if (argv.month) {
            console.log(new Date().getMonth())
        } else if (argv.day) {
            console.log(new Date().getDate())
        } else {
            console.log(new Date())
        }
    })
    .command('add', 'add date', () => {}, (argv) => {
        let date = new Date();
        if (argv.year) {
            date.setFullYear(date.getFullYear() + argv.year)
            console.log(date)
        } else if (argv.month) {
            date.setMonth(date.getMonth() + argv.month)
            console.log(date)
        } else if (argv.day) {
            date.setDate(date.getDate() + argv.day)
            console.log(date)
        } else {
            console.log(`One of arguments missed. Current year: ${new Date()}`)
        }
    })
    .command('sub', 'subtract date', () => {}, (argv) => {
        let date = new Date();
        if (argv.year) {
            date.setFullYear(date.getFullYear() - argv.year)
            console.log(date)
        } else if (argv.month) {
            date.setMonth(date.getMonth() - argv.month)
            console.log(date)
        } else if (argv.day) {
            date.setDate(date.getDate() - argv.day)
            console.log(date)
        } else {
            console.log(`One of arguments missed. Current year: ${new Date()}`)
        }
    })
    .option('year', {
        alias: 'y',
        type: 'number',
        default: 0,
        description: 'Get year'
    })
    .option('month', {
        alias: 'm',
        type: 'number',
        default: 0,
        description: 'Get month'
    })
    .option('day', {
        alias: 'd',
        type: 'number',
        default: 0,
        description: 'Get day'
    })
    .parse()
