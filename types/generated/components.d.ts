import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCardItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_card_items';
  info: {
    description: 'Individual card for grids and collections';
    displayName: 'Card Item';
  };
  attributes: {
    badge: Schema.Attribute.String;
    badgeColor: Schema.Attribute.Enumeration<
      ['blue', 'green', 'red', 'yellow', 'purple', 'gray']
    > &
      Schema.Attribute.DefaultTo<'blue'>;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Learn More'>;
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    showButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFilterOption extends Struct.ComponentSchema {
  collectionName: 'components_elements_filter_options';
  info: {
    description: 'Filter option for filterable sections';
    displayName: 'Filter Option';
  };
  attributes: {
    isDefault: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsGuideEventItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_guide_event_items';
  info: {
    description: 'Individual item for guides and events grid';
    displayName: 'Guide Event Item';
  };
  attributes: {
    badgeColor: Schema.Attribute.Enumeration<
      [
        'blue',
        'emerald',
        'cyan',
        'amber',
        'indigo',
        'purple',
        'orange',
        'rose',
        'gray',
      ]
    > &
      Schema.Attribute.DefaultTo<'blue'>;
    category: Schema.Attribute.String & Schema.Attribute.Required;
    date: Schema.Attribute.Date;
    excerpt: Schema.Attribute.Text & Schema.Attribute.Required;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    subcategory: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsHeroBadge extends Struct.ComponentSchema {
  collectionName: 'components_elements_hero_badges';
  info: {
    description: 'Badge for hero sections (Blue Flag, certificates, etc.)';
    displayName: 'Hero Badge';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-blue-600/90'>;
    badgeType: Schema.Attribute.Enumeration<
      ['certification', 'award', 'feature', 'info']
    > &
      Schema.Attribute.DefaultTo<'certification'>;
    borderColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'border-blue-500'>;
    icon: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    textColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-white'>;
  };
}

export interface ElementsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_info_cards';
  info: {
    description: 'Information card with title, content and CTA button';
    displayName: 'Info Card';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-white'>;
    buttonColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-gray-900'>;
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonStyle: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    contentColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-600'>;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'arrow-right'>;
    isExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    showIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-900'>;
  };
}

export interface ElementsPlanningCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_planning_cards';
  info: {
    description: 'Individual card for planning activities';
    displayName: 'Planning Card';
  };
  attributes: {
    cardBackgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-white'>;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    descriptionColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-600'>;
    hoverEffect: Schema.Attribute.Enumeration<
      ['none', 'lift', 'scale', 'both']
    > &
      Schema.Attribute.DefaultTo<'both'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageHeight: Schema.Attribute.Enumeration<
      ['h-40', 'h-48', 'h-52', 'h-56', 'h-64']
    > &
      Schema.Attribute.DefaultTo<'h-48'>;
    isExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-black'>;
  };
}

export interface ElementsQuickBookingButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_quick_booking_buttons';
  info: {
    description: 'Button for quick booking navigation';
    displayName: 'Quick Booking Button';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-white/10'>;
    hoverBackgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'hover:bg-white/20'>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTextColumn extends Struct.ComponentSchema {
  collectionName: 'components_elements_text_columns';
  info: {
    description: 'Individual text column with rich content support and advanced formatting options';
    displayName: 'Text Column';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'transparent'>;
    borderRadius: Schema.Attribute.Enumeration<
      [
        'rounded-none',
        'rounded-sm',
        'rounded',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
      ]
    > &
      Schema.Attribute.DefaultTo<'rounded-none'>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    fontSize: Schema.Attribute.Enumeration<
      ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl']
    > &
      Schema.Attribute.DefaultTo<'text-lg'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    paddingX: Schema.Attribute.Enumeration<
      ['px-0', 'px-2', 'px-4', 'px-6', 'px-8']
    > &
      Schema.Attribute.DefaultTo<'px-4'>;
    paddingY: Schema.Attribute.Enumeration<
      ['py-0', 'py-2', 'py-4', 'py-6', 'py-8']
    > &
      Schema.Attribute.DefaultTo<'py-4'>;
    shadow: Schema.Attribute.Enumeration<
      ['shadow-none', 'shadow-sm', 'shadow', 'shadow-md', 'shadow-lg']
    > &
      Schema.Attribute.DefaultTo<'shadow-none'>;
    textAlign: Schema.Attribute.Enumeration<
      ['text-left', 'text-center', 'text-right', 'text-justify']
    > &
      Schema.Attribute.DefaultTo<'text-left'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-900'>;
  };
}

export interface ElementsWeatherCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_weather_cards';
  info: {
    description: 'Weather information display card';
    displayName: 'Weather Card';
  };
  attributes: {
    accentColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-blue-600'>;
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-blue-50'>;
    borderColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'border-blue-200'>;
    layout: Schema.Attribute.Enumeration<['grid', 'horizontal', 'vertical']> &
      Schema.Attribute.DefaultTo<'grid'>;
    location: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Bodrum'>;
    refreshInterval: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 3600000;
          min: 60000;
        },
        number
      > &
      Schema.Attribute.DefaultTo<600000>;
    showTitle: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showUpdateTime: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-900'>;
    timezone: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Europe/Istanbul'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Current Weather in Bodrum'>;
  };
}

export interface SectionsBeachHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_beach_hero_sections';
  info: {
    description: 'Hero section specifically designed for beach pages';
    displayName: 'Beach Hero Section';
  };
  attributes: {
    badges: Schema.Attribute.Component<'elements.hero-badge', true>;
    ctaTargetId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'beach-content'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Explore Beach Details'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    distance: Schema.Attribute.String;
    heightClass: Schema.Attribute.Enumeration<
      ['h-[50vh]', 'h-[60vh]', 'h-[70vh]', 'h-[80vh]', 'h-screen']
    > &
      Schema.Attribute.DefaultTo<'h-[70vh]'>;
    heroImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isBlueFlag: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    overlayOpacity: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.4>;
    showCta: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-white/95'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-white'>;
  };
}

export interface SectionsExploreGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_explore_grids';
  info: {
    description: 'Grid section with cards for exploring content';
    displayName: 'Explore Grid';
  };
  attributes: {
    animation: Schema.Attribute.Enumeration<
      ['none', 'fade-in', 'slide-up', 'stagger']
    > &
      Schema.Attribute.DefaultTo<'fade-in'>;
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-white'>;
    cards: Schema.Attribute.Component<'elements.card-item', true>;
    cardStyle: Schema.Attribute.Enumeration<
      ['default', 'hover-lift', 'rounded', 'shadow']
    > &
      Schema.Attribute.DefaultTo<'hover-lift'>;
    gridColumns: Schema.Attribute.Enumeration<['1', '2', '3', '4', '5', '6']> &
      Schema.Attribute.DefaultTo<'3'>;
    showViewAllButton: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    spacing: Schema.Attribute.Enumeration<['tight', 'normal', 'wide']> &
      Schema.Attribute.DefaultTo<'normal'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Explore Bodrum'>;
    viewAllLink: Schema.Attribute.String;
    viewAllText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View All'>;
  };
}

export interface SectionsGuidesEventsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_guides_events_sections';
  info: {
    description: 'Filterable grid section for guides and events content';
    displayName: 'Guides & Events Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-gray-50'>;
    filterOptions: Schema.Attribute.Component<'elements.filter-option', true>;
    gridColumns: Schema.Attribute.Enumeration<['1', '2', '3', '4']> &
      Schema.Attribute.DefaultTo<'3'>;
    items: Schema.Attribute.Component<'elements.guide-event-item', true>;
    maxItemsToShow: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 20;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
    paddingY: Schema.Attribute.Enumeration<
      ['py-12', 'py-16', 'py-20', 'py-24']
    > &
      Schema.Attribute.DefaultTo<'py-20'>;
    showFilters: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showViewAllButton: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Expert guides and insider knowledge for the ultimate Bodrum experience'>;
    subtitleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-600'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Bodrum Guides & Events'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-900'>;
    viewAllLink: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/guides'>;
    viewAllText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View All Bodrum Guides'>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: 'Main hero section with sliding images and quick booking options';
    displayName: 'Hero Section';
  };
  attributes: {
    autoSlideInterval: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 10000;
          min: 1000;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5000>;
    darkOverlayOpacity: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.4>;
    heroImages: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    quickBookingOptions: Schema.Attribute.Component<
      'elements.quick-booking-button',
      true
    >;
    showIndicators: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showNavigationArrows: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showScrollIndicator: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Discover and book the best of Bodrum with the local destination experts'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Bodrum'>;
    titleFontSize: Schema.Attribute.Enumeration<
      ['small', 'medium', 'large', 'xl']
    > &
      Schema.Attribute.DefaultTo<'xl'>;
  };
}

export interface SectionsNewsEventsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_events_sections';
  info: {
    description: 'Two-column section with heading and news/events cards';
    displayName: 'News & Events Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-gray-50'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Stay connected with everything happening in Turkey's most beautiful coastal destination.">;
    descriptionColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-600'>;
    eventsCard: Schema.Attribute.Component<'elements.info-card', false>;
    layout: Schema.Attribute.Enumeration<['stacked', 'side-by-side']> &
      Schema.Attribute.DefaultTo<'side-by-side'>;
    newsCard: Schema.Attribute.Component<'elements.info-card', false>;
    paddingY: Schema.Attribute.Enumeration<
      ['py-12', 'py-16', 'py-20', 'py-24']
    > &
      Schema.Attribute.DefaultTo<'py-16'>;
    sectionTag: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Out & About'>;
    sectionTagColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-500'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Latest news, reviews & events in Bodrum'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-900'>;
  };
}

export interface SectionsPlanningCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_planning_cards_sections';
  info: {
    description: 'Horizontal scrollable cards section for planning activities';
    displayName: 'Planning Cards Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#000000'>;
    backgroundPattern: Schema.Attribute.Media<'images'>;
    cards: Schema.Attribute.Component<'elements.planning-card', true>;
    cardWidth: Schema.Attribute.Enumeration<['w-64', 'w-72', 'w-80', 'w-96']> &
      Schema.Attribute.DefaultTo<'w-80'>;
    paddingY: Schema.Attribute.Enumeration<
      ['py-12', 'py-16', 'py-20', 'py-24']
    > &
      Schema.Attribute.DefaultTo<'py-16'>;
    patternSize: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'160px 160px'>;
    seeAllLink: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/experiences'>;
    seeAllText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'See all experiences'>;
    showMobileSwipeIndicator: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showScrollButtons: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showSeeAllButton: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Start Planning'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-white'>;
  };
}

export interface SectionsWelcomeSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_welcome_sections';
  info: {
    description: 'Welcome/intro section with three-column content layout';
    displayName: 'Welcome Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-gray-50'>;
    contentColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-700'>;
    contentColumns: Schema.Attribute.Component<'elements.text-column', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    ctaIsExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Discover Bodrum'>;
    layout: Schema.Attribute.Enumeration<
      ['single', 'two-column', 'three-column']
    > &
      Schema.Attribute.DefaultTo<'three-column'>;
    paddingY: Schema.Attribute.Enumeration<
      ['py-10', 'py-16', 'py-20', 'py-24']
    > &
      Schema.Attribute.DefaultTo<'py-20'>;
    showCallToAction: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Discover Turkey's premier Mediterranean destination where ancient charm meets modern luxury.">;
    subtitleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-600'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Welcome to Bodrum'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'text-gray-900'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.card-item': ElementsCardItem;
      'elements.filter-option': ElementsFilterOption;
      'elements.guide-event-item': ElementsGuideEventItem;
      'elements.hero-badge': ElementsHeroBadge;
      'elements.info-card': ElementsInfoCard;
      'elements.planning-card': ElementsPlanningCard;
      'elements.quick-booking-button': ElementsQuickBookingButton;
      'elements.text-column': ElementsTextColumn;
      'elements.weather-card': ElementsWeatherCard;
      'sections.beach-hero-section': SectionsBeachHeroSection;
      'sections.explore-grid': SectionsExploreGrid;
      'sections.guides-events-section': SectionsGuidesEventsSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.news-events-section': SectionsNewsEventsSection;
      'sections.planning-cards-section': SectionsPlanningCardsSection;
      'sections.welcome-section': SectionsWelcomeSection;
    }
  }
}
