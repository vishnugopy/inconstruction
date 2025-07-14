# inconstruction

A React/Next.js component that adds an "Under Construction" overlay with a customizable message to any wrapped children.

## Features

- 🚧 Wraps child components with an "under construction" overlay
- 🛠️ Customizable message for the overlay
- 🌐 Works in both React and Next.js environments
- 🌍 Supports 30+ languages out of the box
- 💅 Customizable styling through className props
- 🎨 Custom icon support
- ✨ Animated overlay with pulse effect
- 🌫️ Blur effect on wrapped content
- 🎚️ Programmatic visibility control
- 📅 Date-based end time control
- 👥 Role-based display control

## Installation

To install the package, run:

```bash
npm i inconstruction
```

## Usage

To use the component, import it and wrap your child components with it:

```jsx
// Import the component
import React from "react";
import InConstruction from "inconstruction";

const MyPage: React.FC = () => {
  return (
    <InConstruction
      message="We're working on this section! Please check back soon."
      language="en"
      className="custom-overlay"
      childrenClassName="custom-content"
      icon={<span>🏗️</span>}
      visible={true}
      endDate={new Date("2024-12-31")}
      allowedRoles={["admin", "developer"]}
      userRoles={["user"]}
    >
      <div>
        <h1>New Feature Coming Soon</h1>
        <p>
          We're working on a new feature for this page. Please check back soon
          to see the updates!
        </p>
      </div>
    </InConstruction>
  );
};

export default MyPage;
```

## Props

The `InConstruction` component accepts the following props:

- `children`: ReactNode — The component(s) you want to wrap with the "under construction" overlay.
- `message`: string (optional) — The custom message that will be displayed in the overlay. If not provided, a default message in the selected language will be shown.
- `language`: string (optional) — The language for the default message. Defaults to "en". See supported languages below.
- `className`: string (optional) — Custom CSS class name for the overlay container.
- `childrenClassName`: string (optional) — Custom CSS class name for the wrapped content container.
- `icon`: ReactNode (optional) — Custom icon to display in the overlay instead of the default 🚧 emoji.
- `visible`: boolean (optional) — Controls the visibility of the overlay programmatically. Defaults to true.
- `endDate`: Date (optional) — Date when the overlay should stop being displayed.
- `allowedRoles`: string[] (optional) — Array of role names that are allowed to bypass the overlay.
- `userRoles`: string[] (optional) — Array of the current user's roles to check against allowedRoles.

## Supported Languages

The component supports the following languages (use the language code as the `language` prop):

| Language   | Code | Example Message                         |
| ---------- | ---- | --------------------------------------- |
| English    | `en` | This section is under construction      |
| French     | `fr` | Cette section est en construction       |
| Spanish    | `es` | Esta sección está en construcción       |
| German     | `de` | Dieser Abschnitt ist in der Entwicklung |
| Italian    | `it` | Questa sezione è in costruzione         |
| Portuguese | `pt` | Esta seção está em construção           |
| Russian    | `ru` | Этот раздел находится в разработке      |
| Japanese   | `ja` | このセクションは工事中です              |
| Korean     | `ko` | 이 섹션은 건설 중입니다                 |
| Chinese    | `zh` | 这个部分正在建设中                      |
| Arabic     | `ar` | هذا القسم في الإنشاء                    |
| Hindi      | `hi` | यह खंड निर्माण में है                   |
| Dutch      | `nl` | Deze sectie is in aanbouw               |
| Swedish    | `sv` | Den här delen är under konstruktion     |
| Norwegian  | `no` | Denne delen er under konstruksjon       |
| Danish     | `da` | Denne del er under konstruksjon         |
| Polish     | `pl` | Ta sekcja jest w budowie                |
| Czech      | `cs` | Tato sekce je ve výstavbě               |
| Slovak     | `sk` | Táto sekcia je v stavbe                 |
| Croatian   | `hr` | Ova sekcija je u izgradnji              |
| Slovenian  | `sl` | Ta sekcija je v gradnji                 |
| Lithuanian | `lt` | Ši sekcija yra kūrimoje                 |
| Latvian    | `lv` | Šī sekcija ir būvējot                   |
| Turkish    | `tr` | Bu bölüm inşa ediliyor                  |
| Indonesian | `id` | Bagian ini sedang dalam pembangunan     |
| Thai       | `th` | ส่วนนี้กำลังก่อสร้าง                    |
| Vietnamese | `vi` | Phần này đang được xây dựng             |
| Bengali    | `bn` | এই অংশটি নির্মাণ করা হচ্ছে              |
| Greek      | `el` | Αυτή η ενότητα είναι υπό κατασκευή      |
| Romanian   | `ro` | Această secțiune este în construcție    |
| Ukrainian  | `uk` | Цей розділ знаходиться в будівництві    |
| Persian    | `fa` | این بخش در حال ساخت و ساز است           |
| Hebrew     | `he` | פרק זה בבנייה                           |

## Styling

The component comes with default styling that includes:

- Semi-transparent orange overlay
- Pulsing animation effect
- Blur effect on the wrapped content
- Centered message with icons

You can customize the styling by providing your own CSS classes through the `className` and `childrenClassName` props.

## Advanced Usage

### Toggle Control

You can use the `visible` prop to programmatically control the overlay's visibility:

```jsx
<InConstruction visible={true}>{/* children */}</InConstruction>
```

### Date-based Activation

Set an end date for the construction notice:

```jsx
<InConstruction endDate={new Date("2024-12-31")}>
  {/* children */}
</InConstruction>
```

### Role-based Display

Control visibility based on user roles (works with any authentication system):

```jsx
<InConstruction
  allowedRoles={["admin", "developer"]}
  userRoles={currentUser.roles} // Your auth system's roles
>
  {/* children */}
</InConstruction>
```
