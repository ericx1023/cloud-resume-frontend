# 組件介面合約 (Phase 1)

## 1. `BrutalistSection` (容器組件)

```typescript
interface BrutalistSectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}
```

## 2. `Typography` (復古字體處理)

```typescript
interface TypographyProps {
  variant: 'serif' | 'pixel';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'giant';
  color?: 'primary' | 'accent' | 'contrast';
  children: React.ReactNode;
}
```

## 3. `ExperienceList` (經歷列表)

```typescript
interface ExperienceListProps {
  items: ExperienceItem[];
}
```
