export default class AuthMiddleware {
    async handle(ctx, next) {
        try {
            await ctx.auth.authenticate();
            await next();
        }
        catch {
            return ctx.response.redirect('/login');
        }
    }
}
//# sourceMappingURL=auth_middleware.js.map