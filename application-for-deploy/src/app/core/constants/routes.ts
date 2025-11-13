export const AppRoutes = {
  Home: "",
  NewsItem: "item/:id",
  Error: "error/:code",
  ServerError: "error/500",
  NotAuthorized: "error/401",
  NotFound: "error/404"
} as const;