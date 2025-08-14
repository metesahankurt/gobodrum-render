# 🚀 GoBodrum v5 Strapi - Sıralı Implementasyon Planı

## 📋 Genel Bakış
Bu plan, GoBodrum v5 Strapi CMS'ini adım adım geliştirmek için tasarlanmıştır. Her faz tamamlandıktan sonra bir sonrakine geçilmelidir.

---

## 🎯 FAZ 1: Rich Text Editor & Temel İyileştirmeler
**Süre:** 3-5 gün  
**Zorluk:** Orta  
**Öncelik:** Kritik ⚡

### Adım 1.1: CKEditor 5 Plugin Kurulumu (30 dakika)
```bash
# Strapi klasörünüzde çalıştırın:
npm install @strapi/plugin-ckeditor
# veya
npm install strapi-plugin-ckeditor5
```

**Manuel Kurulum:**
1. Package.json'a ekleyin
2. Plugin konfigürasyonu yapın
3. Restart Strapi

### Adım 1.2: Plugin Konfigürasyonu (45 dakika)
**Dosya:** `config/plugins.ts`
```typescript
export default {
  ckeditor: {
    enabled: true,
    config: {
      plugin: {
        toolbar: {
          items: [
            'heading', '|',
            'fontfamily', 'fontsize', '|',
            'bold', 'italic', 'underline', 'strikethrough', '|',
            'alignment', '|',
            'numberedList', 'bulletedList', '|',
            'outdent', 'indent', '|',
            'todoList', 'link', 'blockquote', 'imageUpload', 'insertTable',
            'mediaEmbed', 'codeBlock', '|',
            'htmlEmbed', '|',
            'specialCharacters', 'horizontalLine', '|',
            'sourceEditing', '|',
            'undo', 'redo'
          ]
        },
        language: 'en',
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage'
          ]
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties'
          ]
        },
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }
          ]
        }
      }
    }
  }
};
```

### Adım 1.3: Text-Column Component Güncelleme (20 dakika)
**Dosya:** `src/components/elements/text-column.json`
```json
{
  "collectionName": "components_elements_text_columns",
  "info": {
    "displayName": "Text Column",
    "description": "Individual text column with rich content support"
  },
  "options": {},
  "attributes": {
    "content": {
      "type": "richtext",
      "required": true,
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "fontSize": {
      "type": "enumeration",
      "enum": ["text-sm", "text-base", "text-lg", "text-xl"],
      "default": "text-lg"
    },
    "textAlign": {
      "type": "enumeration", 
      "enum": ["text-left", "text-center", "text-right"],
      "default": "text-left"
    },
    "order": {
      "type": "integer",
      "default": 1
    },
    "backgroundColor": {
      "type": "string",
      "default": "transparent"
    },
    "textColor": {
      "type": "string", 
      "default": "text-gray-900"
    }
  }
}
```

### Adım 1.4: Test ve Doğrulama (15 dakika)
1. Strapi restart
2. Admin panelde rich text editor test
3. Image upload test
4. Table creation test

**✅ Faz 1 Tamamlama Kriterleri:**
- [ ] CKEditor 5 çalışıyor
- [ ] Image upload aktif
- [ ] Quote blocks çalışıyor
- [ ] Table support mevcut
- [ ] Code blocks çalışıyor

---

## 🎯 FAZ 2: İçerik Yönetim Sistemi
**Süre:** 1 hafta  
**Zorluk:** Orta-Yüksek  
**Öncelik:** Yüksek 🔥

### Adım 2.1: Category Content Type (45 dakika)
**Dosya:** `src/api/category/content-types/category/schema.json`
```json
{
  "kind": "collectionType",
  "collectionName": "categories",
  "info": {
    "singularName": "category",
    "pluralName": "categories", 
    "displayName": "Category",
    "description": "Content categories for organization"
  },
  "options": {
    "draftAndPublish": false
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    "name": {
      "type": "string",
      "required": true,
      "unique": true
    },
    "slug": {
      "type": "uid",
      "targetField": "name",
      "required": true
    },
    "description": {
      "type": "text"
    },
    "color": {
      "type": "string",
      "default": "#3B82F6"
    },
    "icon": {
      "type": "string",
      "default": "folder"
    },
    "image": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "parentCategory": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::category.category"
    },
    "childCategories": {
      "type": "relation", 
      "relation": "oneToMany",
      "target": "api::category.category",
      "mappedBy": "parentCategory"
    },
    "order": {
      "type": "integer",
      "default": 0
    },
    "isActive": {
      "type": "boolean",
      "default": true
    },
    "seoTitle": {
      "type": "string",
      "maxLength": 60
    },
    "seoDescription": {
      "type": "text", 
      "maxLength": 160
    }
  }
}
```

### Adım 2.2: Tag Content Type (30 dakika)
**Dosya:** `src/api/tag/content-types/tag/schema.json`
```json
{
  "kind": "collectionType",
  "collectionName": "tags",
  "info": {
    "singularName": "tag",
    "pluralName": "tags",
    "displayName": "Tag", 
    "description": "Content tags for better organization"
  },
  "options": {
    "draftAndPublish": false
  },
  "attributes": {
    "name": {
      "type": "string",
      "required": true,
      "unique": true
    },
    "slug": {
      "type": "uid", 
      "targetField": "name"
    },
    "color": {
      "type": "string",
      "default": "#6B7280"
    },
    "usageCount": {
      "type": "integer",
      "default": 0
    }
  }
}
```

### Adım 2.3: Blog/Article Content Type (1 saat)
**Dosya:** `src/api/article/content-types/article/schema.json`
```json
{
  "kind": "collectionType",
  "collectionName": "articles",
  "info": {
    "singularName": "article",
    "pluralName": "articles",
    "displayName": "Article",
    "description": "Blog posts and articles"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "slug": {
      "type": "uid", 
      "targetField": "title",
      "required": true
    },
    "excerpt": {
      "type": "text",
      "maxLength": 300
    },
    "content": {
      "type": "richtext",
      "required": true
    },
    "featuredImage": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"],
      "required": false
    },
    "gallery": {
      "type": "media",
      "multiple": true,
      "allowedTypes": ["images"]
    },
    "author": {
      "type": "relation",
      "relation": "manyToOne", 
      "target": "admin::user"
    },
    "categories": {
      "type": "relation",
      "relation": "manyToMany",
      "target": "api::category.category"
    },
    "tags": {
      "type": "relation",
      "relation": "manyToMany", 
      "target": "api::tag.tag"
    },
    "viewCount": {
      "type": "integer",
      "default": 0
    },
    "readingTime": {
      "type": "integer"
    },
    "isSticky": {
      "type": "boolean",
      "default": false
    },
    "isFeatured": {
      "type": "boolean", 
      "default": false
    },
    "status": {
      "type": "enumeration",
      "enum": ["draft", "published", "archived"],
      "default": "draft"
    },
    "publishDate": {
      "type": "datetime"
    },
    "seoTitle": {
      "type": "string",
      "maxLength": 60
    },
    "seoDescription": {
      "type": "text",
      "maxLength": 160
    },
    "seoKeywords": {
      "type": "string"
    },
    "socialImage": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    }
  }
}
```

### Adım 2.4: API Routes & Controllers (1 saat)
**Article Controller - `src/api/article/controllers/article.ts`:**
```typescript
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    
    const entity = await strapi.entityService.findMany('api::article.article', {
      ...query,
      populate: {
        featuredImage: true,
        gallery: true,
        author: true,
        categories: true,
        tags: true,
        socialImage: true
      },
    });

    return this.transformResponse(entity);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.entityService.findOne('api::article.article', id, {
      ...query,
      populate: {
        featuredImage: true,
        gallery: true, 
        author: true,
        categories: true,
        tags: true,
        socialImage: true
      },
    });

    // Increment view count
    if (entity) {
      await strapi.entityService.update('api::article.article', id, {
        data: { viewCount: entity.viewCount + 1 }
      });
    }

    return this.transformResponse(entity);
  },

  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.entityService.findMany('api::article.article', {
      filters: { slug: { $eq: slug } },
      populate: {
        featuredImage: true,
        gallery: true,
        author: true, 
        categories: true,
        tags: true,
        socialImage: true
      },
    });

    if (entity.length === 0) {
      return ctx.notFound('Article not found');
    }

    // Increment view count
    await strapi.entityService.update('api::article.article', entity[0].id, {
      data: { viewCount: entity[0].viewCount + 1 }
    });

    return this.transformResponse(entity[0]);
  },

  async findByCategory(ctx) {
    const { categorySlug } = ctx.params;
    const { query } = ctx;

    const category = await strapi.entityService.findMany('api::category.category', {
      filters: { slug: { $eq: categorySlug } }
    });

    if (category.length === 0) {
      return ctx.notFound('Category not found');
    }

    const articles = await strapi.entityService.findMany('api::article.article', {
      ...query,
      filters: {
        categories: { id: { $eq: category[0].id } }
      },
      populate: {
        featuredImage: true,
        author: true,
        categories: true,
        tags: true
      }
    });

    return this.transformResponse(articles);
  }
}));
```

### Adım 2.5: Frontend Integration Hazırlığı (30 dakika)
**Dosya:** `src/lib/strapi.ts` güncelleme:
```typescript
// Mevcut koda eklenecek functions:

export async function getArticles(params = {}) {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/articles`, {
      params: {
        populate: ['featuredImage', 'author', 'categories', 'tags'],
        ...params
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return null;
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/articles/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching article by slug:', error);
    return null;
  }
}

export async function getCategories() {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/categories`, {
      params: {
        populate: ['image'],
        sort: 'order:asc'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
}
```

**✅ Faz 2 Tamamlama Kriterleri:**
- [ ] Category sistem çalışıyor
- [ ] Tag sistem aktif
- [ ] Article CRUD operations çalışıyor
- [ ] Relations düzgün kurulmuş
- [ ] API endpoints test edilmiş

---

## 🎯 FAZ 3: İş Mantığı Sistemleri
**Süre:** 1.5 hafta  
**Zorluk:** Yüksek  
**Öncelik:** Orta 🟡

### Adım 3.1: Business Content Types (2 saat)

#### Hotel Content Type:
**Dosya:** `src/api/hotel/content-types/hotel/schema.json`
```json
{
  "kind": "collectionType",
  "collectionName": "hotels",
  "info": {
    "singularName": "hotel",
    "pluralName": "hotels", 
    "displayName": "Hotel"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "name": {
      "type": "string",
      "required": true
    },
    "slug": {
      "type": "uid",
      "targetField": "name"
    },
    "description": {
      "type": "richtext"
    },
    "shortDescription": {
      "type": "text",
      "maxLength": 200
    },
    "images": {
      "type": "media",
      "multiple": true,
      "allowedTypes": ["images"]
    },
    "location": {
      "type": "json"
    },
    "address": {
      "type": "text"
    },
    "phone": {
      "type": "string"
    },
    "email": {
      "type": "email"
    },
    "website": {
      "type": "string"
    },
    "starRating": {
      "type": "integer",
      "min": 1,
      "max": 5
    },
    "priceRange": {
      "type": "enumeration",
      "enum": ["budget", "mid-range", "luxury", "ultra-luxury"]
    },
    "amenities": {
      "type": "json"
    },
    "policies": {
      "type": "richtext"
    },
    "categories": {
      "type": "relation",
      "relation": "manyToMany", 
      "target": "api::category.category"
    },
    "isActive": {
      "type": "boolean",
      "default": true
    },
    "averageRating": {
      "type": "decimal",
      "default": 0
    },
    "totalReviews": {
      "type": "integer",
      "default": 0
    }
  }
}
```

#### Restaurant Content Type:
**Dosya:** `src/api/restaurant/content-types/restaurant/schema.json`
```json
{
  "kind": "collectionType",
  "collectionName": "restaurants",
  "info": {
    "singularName": "restaurant", 
    "pluralName": "restaurants",
    "displayName": "Restaurant"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "name": {
      "type": "string",
      "required": true
    },
    "slug": {
      "type": "uid",
      "targetField": "name"
    },
    "description": {
      "type": "richtext"
    },
    "cuisine": {
      "type": "enumeration",
      "enum": ["turkish", "mediterranean", "seafood", "international", "italian", "asian"]
    },
    "priceLevel": {
      "type": "enumeration", 
      "enum": ["$", "$$", "$$$", "$$$$"]
    },
    "images": {
      "type": "media",
      "multiple": true,
      "allowedTypes": ["images"]
    },
    "location": {
      "type": "json"
    },
    "workingHours": {
      "type": "json"
    },
    "contact": {
      "type": "json"
    },
    "categories": {
      "type": "relation",
      "relation": "manyToMany",
      "target": "api::category.category"
    },
    "averageRating": {
      "type": "decimal",
      "default": 0
    },
    "totalReviews": {
      "type": "integer", 
      "default": 0
    }
  }
}
```

### Adım 3.2: Review System (1.5 saat)
**Dosya:** `src/api/review/content-types/review/schema.json`
```json
{
  "kind": "collectionType",
  "collectionName": "reviews", 
  "info": {
    "singularName": "review",
    "pluralName": "reviews",
    "displayName": "Review"
  },
  "options": {
    "draftAndPublish": false
  },
  "attributes": {
    "rating": {
      "type": "integer",
      "min": 1,
      "max": 5,
      "required": true
    },
    "title": {
      "type": "string"
    },
    "comment": {
      "type": "text",
      "required": true
    },
    "customerName": {
      "type": "string",
      "required": true
    },
    "customerEmail": {
      "type": "email"
    },
    "isVerified": {
      "type": "boolean",
      "default": false
    },
    "isApproved": {
      "type": "boolean",
      "default": false
    },
    "targetType": {
      "type": "enumeration",
      "enum": ["hotel", "restaurant", "activity", "article"],
      "required": true
    },
    "targetId": {
      "type": "integer",
      "required": true
    },
    "pros": {
      "type": "json"
    },
    "cons": {
      "type": "json"
    },
    "visitDate": {
      "type": "date"
    },
    "helpfulCount": {
      "type": "integer", 
      "default": 0
    },
    "responseFromOwner": {
      "type": "text"
    }
  }
}
```

### Adım 3.3: Booking System (2 saat)
**Dosya:** `src/api/booking/content-types/booking/schema.json`
```json
{
  "kind": "collectionType",
  "collectionName": "bookings",
  "info": {
    "singularName": "booking",
    "pluralName": "bookings",
    "displayName": "Booking"
  },
  "options": {
    "draftAndPublish": false
  },
  "attributes": {
    "bookingNumber": {
      "type": "string",
      "required": true,
      "unique": true
    },
    "customerInfo": {
      "type": "json",
      "required": true
    },
    "serviceType": {
      "type": "enumeration", 
      "enum": ["hotel", "restaurant", "activity", "transfer"],
      "required": true
    },
    "serviceId": {
      "type": "integer",
      "required": true
    },
    "serviceName": {
      "type": "string",
      "required": true
    },
    "bookingDate": {
      "type": "datetime",
      "required": true
    },
    "checkIn": {
      "type": "date"
    },
    "checkOut": {
      "type": "date"
    },
    "guests": {
      "type": "json"
    },
    "specialRequests": {
      "type": "text"
    },
    "totalPrice": {
      "type": "decimal",
      "required": true
    },
    "currency": {
      "type": "string",
      "default": "TRY"
    },
    "status": {
      "type": "enumeration",
      "enum": ["pending", "confirmed", "cancelled", "completed"],
      "default": "pending"
    },
    "paymentStatus": {
      "type": "enumeration",
      "enum": ["pending", "paid", "failed", "refunded"],
      "default": "pending"
    },
    "paymentMethod": {
      "type": "string"
    },
    "notes": {
      "type": "text"
    },
    "cancelReason": {
      "type": "text"
    }
  }
}
```

**✅ Faz 3 Tamamlama Kriterleri:**
- [ ] Hotel/Restaurant content types aktif
- [ ] Review sistem çalışıyor 
- [ ] Booking sistem kurulmuş
- [ ] Relations düzgün
- [ ] Test data girilmiş

---

## 🎯 FAZ 4: Performans & Güvenlik
**Süre:** 3-4 gün  
**Zorluk:** Orta  
**Öncelik:** Orta 🟡

### Adım 4.1: SEO Plugin Kurulumu (1 saat)
```bash
npm install @strapi/plugin-seo
```

**Config güncelleme:** `config/plugins.ts`
```typescript
export default {
  // ... mevcut config
  seo: {
    enabled: true,
  },
};
```

### Adım 4.2: Cache Implementation (1.5 saat)
**Dosya:** `config/middlewares.ts`
```typescript
export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::response-time',
    config: {
      enabled: true,
    },
  },
];
```

### Adım 4.3: Rate Limiting (45 dakika)
```bash
npm install koa-ratelimit
```

### Adım 4.4: Database Optimization (1 saat)
- Index ekleme
- Query optimization
- Connection pooling

**✅ Faz 4 Tamamlama Kriterleri:**
- [ ] SEO plugin aktif
- [ ] Cache çalışıyor
- [ ] Rate limiting aktif
- [ ] Database optimized

---

## 🎯 FAZ 5: Test & Deploy Hazırlığı  
**Süre:** 2-3 gün  
**Zorluk:** Orta  
**Öncelik:** Düşük 🟢

### Adım 5.1: Seed Data (2 saat)
### Adım 5.2: Testing (2 saat) 
### Adım 5.3: Documentation (1 saat)
### Adım 5.4: Deploy Config (1 saat)

---

## 📝 Her Faz Sonrası Kontrol Listesi

### ✅ Faz Tamamlama Template:
```markdown
## Faz X - [Faz Adı] Tamamlandı ✅

### Yapılan İşler:
- [ ] İş 1
- [ ] İş 2  
- [ ] İş 3

### Test Sonuçları:
- [ ] Functionality test ✅
- [ ] Performance test ✅
- [ ] UI test ✅

### Sonraki Fazda Dikkat Edilecekler:
- Not 1
- Not 2
```

---

## 🚀 Başlayalım!

Şimdi **FAZ 1**'den başlayabiliriz. Hangi adımdan başlamak istiyorsunuz?

1. **CKEditor 5 kurulumu** (30 dakika)
2. **Plugin konfigürasyonu** (45 dakika)  
3. **Component güncellemeleri** (20 dakika)
4. **Test ve doğrulama** (15 dakika)

Hangi adımdan başlayalım? 🎯