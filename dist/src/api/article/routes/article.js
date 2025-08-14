"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        // Standard article routes first (specific paths)
        {
            method: 'GET',
            path: '/articles',
            handler: 'article.find',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/articles/:id',
            handler: 'article.findOne',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/articles/slug/:slug',
            handler: 'article.findBySlug',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/articles/category/:categorySlug',
            handler: 'article.findByCategory',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/articles/tag/:tagSlug',
            handler: 'article.findByTag',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/articles/featured',
            handler: 'article.findFeatured',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/articles/sticky',
            handler: 'article.findSticky',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/articles/popular',
            handler: 'article.findPopular',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/articles/search',
            handler: 'article.search',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/articles',
            handler: 'article.create',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/articles/:id',
            handler: 'article.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/articles/:id',
            handler: 'article.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        // Dynamic section-based routes
        {
            method: 'GET',
            path: '/discover/:articleSlug',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/things-to-do/:articleSlug',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/stay/:articleSlug',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/dining/:articleSlug',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/shopping/:articleSlug',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/events/:articleSlug',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/explore/:articleSlug',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        // Section listing routes
        {
            method: 'GET',
            path: '/discover',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/things-to-do',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/stay',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/dining',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/shopping',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/events',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/explore',
            handler: 'article.findByRouteSection',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
    ],
};
