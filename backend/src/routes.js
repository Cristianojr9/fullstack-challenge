"use strict"

import ProfessionRoute from "./app/modules/Profession/Routes/ProfessionRoutes";
import ProfessionalRoute from "./app/modules/Professional/Routes/ProfessionalRoutes";

const routes = (app) => {
  app.use("/profession", ProfessionRoute);
  app.use("/professional", ProfessionalRoute);

  return app;
}

export default routes;