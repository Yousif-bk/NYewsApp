import { Routes } from "@angular/router";
import { AppRoutes } from "../models/AppRoutes";

export const content: Routes = [
  {
     path: AppRoutes.news.main,
     loadChildren: () => import("../../../app/components/news/news.module").then((m) => m.NewsModule),
  },
];
