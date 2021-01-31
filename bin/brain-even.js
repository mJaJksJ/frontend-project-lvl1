#!/usr/bin/env node
import {Play} from '../src/is-even-game.js'
import {HelloFunc, CongratesFuns} from '../src/cli.js'

const userName = HelloFunc();
Play();
CongratesFuns(userName);

