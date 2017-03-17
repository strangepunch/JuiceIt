import { ngModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { make-juice } from './make-juice/make-juice.component';
import { plan-juice } from './plan-juice/plan-juice.component';
import { calendar } from './calendar/calendar.component';

const routes: Routes  [
	{ path: '', redirectTo: 'calendar', pathMatch: 'full'},
	{ path: 'make-juice', component: make-juice.component},
	{ path: 'plan-juice', component: plan-juice.component},
	{ path: 'calendar', component: calendar.component}

]