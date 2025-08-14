"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        // Standard category routes first
        {
            method: 'GET',
            path: '/categories',
            handler: 'category.find',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/categories/:id',
            handler: 'category.findOne',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/categories/slug/:slug',
            handler: 'category.findBySlug',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/categories/root',
            handler: 'category.findRootCategories',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/categories/featured',
            handler: 'category.findFeatured',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/categories',
            handler: 'category.create',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/categories/:id',
            handler: 'category.update',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/categories/:id',
            handler: 'category.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
