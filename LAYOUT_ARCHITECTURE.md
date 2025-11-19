# Layout Architecture Documentation

## Overview

Complete responsive layout architecture implemented for the Coffee Taste Finder application with a forest/coffee color scheme and old paper background.

## Color Scheme (Light Mode Only)

### Primary Colors

- **Background**: `#f5f1e8` (Old paper color)
- **Primary Text**: `#2c1810` (Forest/coffee dark brown)
- **Secondary Text**: `#6b5344` (Muted brown)
- **Muted Text**: `#8b7355` (Light gray-brown)

### Accent Colors

- **Forest Accent**: `#3d5a3b`
- **Coffee Accent**: `#6f4e37`
- **Light Accent**: `#c9b8a8`
- **Border**: `#d4cac0`

## Typography Scale

### Headings

| Level                | Desktop Size    | Mobile Size     | Weight         | Line Height |
| -------------------- | --------------- | --------------- | -------------- | ----------- |
| h1 (Primary)         | 48px (3rem)     | 36px (2.25rem)  | Bold (700)     | 1.25        |
| h2 (Section Level 1) | 30px (1.875rem) | 24px (1.5rem)   | Semibold (600) | 1.33        |
| h3 (Section Level 2) | 20px (1.25rem)  | 18px (1.125rem) | Semibold (600) | 1.5         |

### Body Text

| Type           | Size            | Weight        | Line Height |
| -------------- | --------------- | ------------- | ----------- |
| Body Text      | 16px (1rem)     | Regular (400) | 1.5         |
| Secondary Text | 14px (0.875rem) | Regular (400) | 1.25        |
| Muted Text     | 12px (0.75rem)  | Regular (400) | 1           |

## Layout Structure

### Three-Tier Architecture

Every page implements a consistent three-section structure:

```
┌─────────────────────────────────────┐
│         STICKY HEADER               │  Full-bleed width
│  ☕ | Coffee Taste Finder Title      │  Centered content (max 1200px)
├─────────────────────────────────────┤
│                                     │
│       MAIN BODY CONTENT             │  Full-bleed width
│     (Flexible components)           │  Centered content (max 1200px)
│                                     │  Responsive padding
│                                     │  Flex-grow to fill space
├─────────────────────────────────────┤
│  Social Icons | Copyright Text      │  Full-bleed width
│           FOOTER                    │  Centered content (max 1200px)
└─────────────────────────────────────┘
```

### Section Details

#### Header (Sticky)

- **Positioning**: `position: sticky; top: 0; z-index: 50`
- **Background**: Old paper color with bottom border
- **Content**: Logo + Page Title (centered) + spacer
- **Responsive Padding**:
  - Mobile: `py-4` (16px)
  - Tablet (sm): `py-5` (20px)
  - Desktop (md+): `py-6` (24px)

#### Main Body

- **Flex**: `flex-1` (grows to fill available space)
- **Content Container**: `max-w-container` (1200px) with centered alignment
- **Responsive Padding**:
  - Mobile: `py-8 px-4` (32px vertical, 16px horizontal)
  - Tablet (sm): `py-10 px-6` (40px vertical, 24px horizontal)
  - Desktop (md): `py-12 px-8` (48px vertical, 32px horizontal)
  - Large Desktop (lg): `py-16 px-12` (64px vertical, 48px horizontal)

#### Footer

- **Background**: Old paper color with top border
- **Sections**: Social media icons + Copyright text
- **Responsive Padding**: Same as body section
- **Social Icons**: 40px (10 units) mobile → 48px (12 units) desktop

## Responsive Breakpoints

Tailwind CSS breakpoints (mobile-first approach):

| Breakpoint | Width   | Purpose                   |
| ---------- | ------- | ------------------------- |
| Default    | 320px+  | Mobile base               |
| `sm`       | 640px+  | Small phones to landscape |
| `md`       | 768px+  | Tablets                   |
| `lg`       | 1024px+ | Small desktops            |
| `xl`       | 1280px+ | Desktops                  |
| `2xl`      | 1536px+ | Large desktops            |

## Component Files

### Layout Components

- **`app/components/layout/Header.tsx`**: Sticky header with logo and title
- **`app/components/layout/Footer.tsx`**: Footer with social media links
- **`app/components/layout/PageLayout.tsx`**: Wrapper component for consistent structure

### Props

#### Header

```typescript
interface HeaderProps {
  title: string;
  logo?: string | React.ReactNode;
}
```

#### Footer

```typescript
interface FooterProps {
  socialLinks?: SocialLink[];
  copyrightText?: string;
}

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}
```

#### PageLayout

```typescript
interface PageLayoutProps {
  title: string;
  logo?: string | React.ReactNode;
  children: React.ReactNode;
  socialLinks?: SocialLink[];
  copyrightText?: string;
  headerContent?: React.ReactNode; // Optional extra content below header
  footerContent?: React.ReactNode; // Optional extra content above footer
}
```

## Usage Example

```typescript
export default function MyPage() {
  const socialLinks = [
    { icon: "𝕏", url: "https://twitter.com", label: "Twitter" },
    { icon: "📷", url: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <PageLayout
      title="My Page Title"
      logo="☕"
      socialLinks={socialLinks}
      copyrightText="© 2025 My Company"
    >
      {/* Page content here */}
      <h2>Section Title</h2>
      <p>Body text goes here...</p>
    </PageLayout>
  );
}
```

## CSS Features

### Full-Bleed Sections

Content can extend to viewport edges while maintaining centered max-width container:

```tsx
<div className="w-full bg-paper">
  <div className="mx-auto max-w-container px-4 sm:px-6 md:px-8 lg:px-12">
    {/* Content automatically centered and constrained */}
  </div>
</div>
```

### Typography Classes

Default typography applied to semantic elements:

- `h1`, `h2`, `h3`: Automatic sizing and styling
- `p`: Default paragraph styling
- `.text-secondary`: Secondary text styling
- `.text-muted`: Muted text styling

## Key Features

✅ **Responsive Design**: Mobile-first approach with tailored breakpoints  
✅ **Full-Bleed Capability**: Sections extend edge-to-edge with centered content  
✅ **Consistent Spacing**: Harmonized padding and margins across breakpoints  
✅ **Forest/Coffee Theme**: Warm, natural color palette inspired by nature  
✅ **Light Mode Only**: Simplified, cohesive visual experience  
✅ **Accessibility**: Semantic HTML with proper heading hierarchy  
✅ **Type-Safe**: Full TypeScript support with prop interfaces  
✅ **Extensible**: Easy to add custom header/footer content  
✅ **Sticky Header**: Easy navigation while scrolling

## Configuration Files

- **`app/globals.css`**: Color variables, typography scale, semantic element styling
- **`tailwind.config.ts`**: Custom theme colors, spacing, typography, breakpoints
- **`app/layout.tsx`**: Root layout with font imports
- **`app/page.tsx`**: Example implementation with HomePage

## Testing Responsive Design

To test at different breakpoints in VS Code:

1. Open DevTools (F12)
2. Toggle device toolbar (Cmd+Shift+M on Mac)
3. Select device or manually set viewport width:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1200px+

All layout elements scale gracefully across these breakpoints.
