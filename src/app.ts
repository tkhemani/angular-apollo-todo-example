import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import {
  Component
} from '@angular/core';

import {
  bootstrap
} from '@angular/platform-browser-dynamic';

import TodoApp from './components/TodoApp.ts'

import './style.css';

bootstrap(TodoApp);
