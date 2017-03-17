import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MakeJuiceComponent } from './make-juice/make-juice.component';
import { PlanJuiceComponent } from './plan-juice/plan-juice.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { WeeklyPlanComponent } from './weekly-plan/weekly-plan.component';
import { DailyPlanComponent } from './daily-plan/daily-plan.component';
import { JuiceRecipeComponent } from './juice-recipe/juice-recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeJuiceComponent,
    PlanJuiceComponent,
    CalendarComponent,
    ShoppingListComponent,
    WeeklyPlanComponent,
    DailyPlanComponent,
    JuiceRecipeComponent,
    IngredientComponent
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
