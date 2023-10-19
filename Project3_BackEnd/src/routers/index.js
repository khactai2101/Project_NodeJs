import roleRouter from "./roleRouter";
import brandRouter from "./brandRouter";
import CategoriesRouter from "./CategoriesRouter";
import ReviewRouter from "./reviewRouter";
import imageRouter from "./imageRouter";
import authRouter from "./authRouter";
import userRouter from "./userRouter";
import addressRouter from "./addressRouter";
import productRouter from "./productRouter";
import sizeRouter from "./sizeRouter";
import productSizeRouter from "./productSizeRouter";
import favoriteRouter from "./favoriteRouter";
import cartRouter from "./cartRouter";
import orderItemRouter from "./orderItemRouter";
import orderRouter from "./orderRouter";

const initRouters = (app) => {
  const initLink = "/api/v1";

  app.use(`${initLink}/role`, roleRouter);
  app.use(`${initLink}/brand`, brandRouter);
  app.use(`${initLink}/categories`, CategoriesRouter);
  app.use(`${initLink}/reviews`, ReviewRouter);
  app.use(`${initLink}/images`, imageRouter);
  app.use(`${initLink}/auth`, authRouter);
  app.use(`${initLink}/users`, userRouter);
  app.use(`${initLink}/address`, addressRouter);
  app.use(`${initLink}/products`, productRouter);
  app.use(`${initLink}/sizes`, sizeRouter);
  app.use(`${initLink}/productSizes`, productSizeRouter);
  app.use(`${initLink}/favorites`, favoriteRouter);
  app.use(`${initLink}/cart`, cartRouter);
  app.use(`${initLink}/orderItems`, orderItemRouter);
  app.use(`${initLink}/order`, orderRouter);
};

module.exports = initRouters;
