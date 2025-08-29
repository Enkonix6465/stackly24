# Language Functionality Documentation

## Overview

The application now supports three languages: English (en), Arabic (ar), and Hebrew (he). The language functionality includes:

- **Multi-language support**: English, Arabic, and Hebrew
- **RTL support**: Automatic right-to-left layout for Arabic and Hebrew
- **Persistent storage**: Language preference is saved in localStorage
- **Dynamic translations**: All navigation text is automatically translated
- **Responsive design**: Language selector works on both desktop and mobile

## Components Added

### 1. LanguageProvider (`src/components/LanguageProvider.tsx`)

- Context provider for language state management
- Handles language switching and RTL direction
- Provides translation function `t(key)`
- Automatically updates document direction and language attributes

### 2. LanguageSelector (`src/components/LanguageSelector.tsx`)

- Dropdown component for language selection
- Shows current language with flag and code
- Displays language names in their native script
- Positioned in the header navigation

### 3. Updated Header (`src/components/Header.tsx`)

- Integrated with language context
- All navigation text now uses translations
- Language selector added to both desktop and mobile views
- RTL-aware layout adjustments

## Usage

### Setting up the Language Provider

The `LanguageProvider` is already wrapped around the app in `src/pages/_app.tsx`:

```tsx
import { LanguageProvider } from "@/components/LanguageProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

### Using Translations in Components

```tsx
import { useLanguage } from "@/components/LanguageProvider";

export default function MyComponent() {
  const { t, currentLanguage, isRTL } = useLanguage();

  return (
    <div>
      <h1>{t("nav.home")}</h1>
      <p>Current language: {currentLanguage}</p>
      <p>Is RTL: {isRTL ? "Yes" : "No"}</p>
    </div>
  );
}
```

### Adding New Translations

To add new translation keys, update the `translations` object in `LanguageProvider.tsx`:

```tsx
const translations = {
  en: {
    "new.key": "English Text",
    // ... existing translations
  },
  ar: {
    "new.key": "النص العربي",
    // ... existing translations
  },
  he: {
    "new.key": "טקסט עברי",
    // ... existing translations
  },
};
```

## Features

### Automatic RTL Support

- Arabic and Hebrew automatically switch to RTL layout
- Document direction and language attributes are updated
- CSS classes automatically adjust for RTL languages

### Persistent Language Selection

- Language choice is saved in localStorage
- Automatically restored on page refresh
- No need to re-select language on each visit

### Responsive Design

- Language selector works on all screen sizes
- Mobile-friendly dropdown positioning
- Consistent styling across devices

## CSS Classes Added

The following CSS classes have been added to `src/styles/globals.css` for RTL support:

```css
/* RTL Language Support */
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

/* RTL spacing adjustments */
[dir="rtl"] .space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}

/* RTL dropdown positioning */
[dir="rtl"] .absolute.right-0 {
  right: auto;
  left: 0;
}
```

## Browser Support

- Modern browsers with ES6+ support
- localStorage support required
- CSS custom properties support for RTL adjustments

## Testing

To test the language functionality:

1. Navigate to any page with the header
2. Click the language selector (flag icon)
3. Choose a different language
4. Verify that:
   - Navigation text changes to the selected language
   - Layout adjusts for RTL languages (Arabic/Hebrew)
   - Language persists after page refresh
   - Mobile navigation also shows translated text

## Troubleshooting

### Common Issues

1. **"useLanguage must be used within a LanguageProvider"**

   - Ensure the component is wrapped in `LanguageProvider`
   - Check that `_app.tsx` has the provider setup

2. **Translations not working**

   - Verify translation keys exist in all language objects
   - Check that the `t()` function is being called correctly

3. **RTL layout issues**
   - Ensure CSS classes are properly applied
   - Check that document direction is being set correctly

### Debug Mode

You can add console logs to debug language switching:

```tsx
const { setLanguage } = useLanguage();

const handleLanguageChange = (lang: Language) => {
  console.log("Switching to language:", lang);
  setLanguage(lang);
};
```

## Future Enhancements

- Add more languages
- Implement server-side language detection
- Add language-specific date/time formatting
- Support for language-specific content (not just navigation)
- Add language preference to user profiles
