# Loading Components للبورتفوليو 🚀

## نظرة عامة

تم إنشاء مجموعة من الـ loading components لتحسين تجربة المستخدم على GitHub Pages، خصوصاً مع الحاجات اللي بتاخد وقت في التحميل.

---

## المكونات المتوفرة

### 1. PageLoader - صفحة التحميل الرئيسية

**الاستخدام:**

```jsx
import PageLoader from './components/PageLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <YourContent />
    </>
  );
}
```

**الخصائص:**

- `isLoading` (required): Boolean - بيحدد هل الـ loader ظاهر ولا لأ
- `delay` (optional): Number - وقت التأخير قبل إخفاء الـ loader (default: 300ms)

---

### 2. ImageLoader - تحميل الصور مع Shimmer Effect

**الاستخدام:**

```jsx
import ImageLoader from './components/ImageLoader';

<ImageLoader
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-64 object-cover"
  placeholderColor="bg-blue-200"
/>
```

**المميزات:**

- ✨ Shimmer animation أثناء التحميل
- 🖼️ Skeleton placeholder
- ⚠️ Error state لو الصورة مش موجودة
- 🎨 Smooth fade-in transition

**الخصائص:**

- `src`: String - رابط الصورة
- `alt`: String - وصف الصورة
- `className`: String - CSS classes
- `placeholderColor`: String - لون الـ placeholder (default: 'bg-gray-200')

---

### 3. LoadingSpinner - Spinner للأجزاء الصغيرة

**الاستخدام:**

```jsx
import LoadingSpinner from './components/LoadingSpinner';

// Basic usage
<LoadingSpinner />

// With custom text and size
<LoadingSpinner 
  size="lg" 
  text="جاري التحميل..." 
/>

// Full screen overlay
<LoadingSpinner 
  fullScreen 
  text="برجاء الانتظار..."
/>
```

**الخصائص:**

- `size`: String - حجم الـ spinner ('sm', 'md', 'lg', 'xl') - default: 'md'
- `text`: String - النص المعروض - default: 'Loading...'
- `fullScreen`: Boolean - يعرض overlay على كامل الشاشة - default: false

---

### 4. AppImage - Component محسّن للصور

**الاستخدام:**

```jsx
import Image from 'components/AppImage';

// مع loading state (default)
<Image 
  src="/assets/profile.jpg"
  alt="Profile Picture"
  className="rounded-full w-32 h-32"
/>

// بدون loading state
<Image 
  src="/assets/icon.png"
  alt="Icon"
  withLoader={false}
  className="w-8 h-8"
/>
```

**الخصائص:**

- `withLoader`: Boolean - يستخدم ImageLoader (default: true)
- `placeholderColor`: String - لون الـ placeholder
- باقي الـ props بتتمرر للصورة

---

## أمثلة عملية

### مثال: Portfolio Section مع Loading

```jsx
import { useState, useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import Image from 'components/AppImage';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load projects data
    fetchProjects().then(data => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingSpinner size="lg" text="Loading projects..." />;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map(project => (
        <div key={project.id} className="card">
          <Image 
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
}
```

---

## نصائح للأداء ⚡

### 1. تحسين الصور

```bash
# استخدم صيغ حديثة زي WebP
# قلل حجم الصور قبل الرفع
```

### 2. Lazy Loading

```jsx
// استخدم lazy loading للصور اللي تحت الشاشة
<Image 
  src="/large-image.jpg"
  loading="lazy"
  alt="Large Image"
/>
```

### 3. أولويات التحميل

```html
<!-- في index.html، ضيف preload للموارد المهمة -->
<link rel="preload" as="image" href="/assets/hero-image.jpg">
```

---

## الحاجات اللي بتاخد وقت على GitHub Pages

### 🖼️ الصور

- **المشكلة**: الصور الكبيرة بتاخد وقت
- **الحل**: استخدم `ImageLoader` component

### 📦 JavaScript Bundles

- **المشكلة**: React و Dependencies كتير
- **الحل**: استخدم `PageLoader` أول ما الصفحة تفتح

### 🔤 الفونتات

- **المشكلة**: Google Fonts بتتحمل من CDN
- **الحل**: استخدم `font-display: swap` في الـ CSS

### 🌐 External Resources

- **المشكلة**: API calls و third-party scripts
- **الحل**: استخدم `LoadingSpinner` أثناء الانتظار

---

## CSS Utilities المضافة

### Shimmer Animation

```css
.animate-shimmer {
  animation: shimmer 2s infinite;
}
```

### Skeleton Loading

```jsx
<div className="skeleton w-full h-48" />
<div className="skeleton-text w-3/4" />
<div className="skeleton-circle w-12 h-12" />
```

---

## ملاحظات مهمة ⚠️

1. **الـ CSS Lint Warnings** عادية - دي بسبب Tailwind directives (`@tailwind`, `@apply`)
2. **التوقيت**: خلي minimum loading time حوالي 1-1.5 ثانية عشان ميبقاش في flash
3. **GitHub Pages**: لو الموقع بطيء، ممكن تستخدم CDN زي Cloudflare
4. **الصور**: احفظ الصور بحجم معقول (أقل من 200KB للبورتريه)

---

## Build & Deploy

```bash
# Build الموقع
npm run build

# Test locally
npm run dev

# Deploy to GitHub Pages
git add .
git commit -m "Added loading components"
git push origin main
```

---

عايز تضيف حاجة تانية أو تعدل في أي component؟ 🚀
