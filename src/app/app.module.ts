import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DailyPlanComponent } from './components/daily-plan/daily-plan.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { JuiceRecipeComponent } from './components/juice-recipe/juice-recipe.component';
import { MakeJuiceComponent } from './components/make-juice/make-juice.component';
import { PlanJuiceComponent } from './components/plan-juice/plan-juice.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { WeeklyPlanComponent } from './components/weekly-plan/weekly-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DailyPlanComponent,
    IngredientComponent,
    JuiceRecipeComponent,
    MakeJuiceComponent,
    PlanJuiceComponent,
    ShoppingListComponent,
    WeeklyPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
