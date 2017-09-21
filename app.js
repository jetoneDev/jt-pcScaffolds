import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'link-router';
import Dva from 'dva';
import { Routes } from './config';
import * as Models from './models';
const app = Dva(),
    router = <Router key="main" history={hashHistory} routes={Routes} />

for (var key in Models) {
    if (Models.hasOwnProperty(key)) {
        app.model(Models[key]);
    }
}

app.router(() => router);
app.start('#container');