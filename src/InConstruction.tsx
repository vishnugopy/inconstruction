// src/InConstruction.tsx
import React, { ReactNode, useEffect, useState } from "react";
import "./InConstruction.css";

// Define the component's props interface
export interface InConstructionProps {
  children: ReactNode;
  message?: string; // Optional custom message for the "Under Construction" notice
  className?: string;
  childrenClassName?: string;
  language?: "en" | "fr";
  icon?: ReactNode;
  visible?: boolean; // Toggle control for overlay visibility
  endDate?: Date; // End date for automatic overlay display
  allowedRoles?: string[]; // Roles that are allowed to bypass the overlay
  userRoles?: string[]; // Current user's roles
}

const defaultMessage = {
  en: "This section is under construction ",
  fr: "Cette section est en construction ",
  es: "Esta sección está en construcción ",
  de: "Dieser Abschnitt ist in der Entwicklung ",
  it: "Questa sezione è in costruzione ",
  pt: "Esta seção está em construção ",
  ru: "Этот раздел находится в разработке ",
  ja: "このセクションは工事中です ",
  ko: "이 섹션은 건설 중입니다 ",
  zh: "这个部分正在建设中 ",
  ar: "هذا القسم في الإنشاء ",
  hi: "यह खंड निर्माण में है ",
  nl: "Deze sectie is in aanbouw ",
  sv: "Den här delen är under konstruktion ",
  no: "Denne delen er under konstruksjon ",
  da: "Denne del er under konstruksjon ",
  pl: "Ta sekcja jest w budowie ",
  cs: "Tato sekce je ve výstavbě ",
  sk: "Táto sekcia je v stavbe ",
  hr: "Ova sekcija je u izgradnji ",
  sl: "Ta sekcija je v gradnji ",
  lt: "Ši sekcija yra kūrimoje ",
  lv: "Šī sekcija ir būvējot ",
  tr: "Bu bölüm inşa ediliyor ",
  id: "Bagian ini sedang dalam pembangunan ",
  th: "ส่วนนี้กำลังก่อสร้าง ",
  vi: "Phần này đang được xây dựng ",
  bn: "এই অংশটি নির্মাণ করা হচ্ছে ",
  el: "Αυτή η ενότητα είναι υπό κατασκευή ",
  ro: "Această secțiune este în construcție ",
  uk: "Цей розділ знаходиться в будівництві ",
  fa: "این بخش در حال ساخت و ساز است ",
  he: "פרק זה בבנייה ",
};

// Functional component with TypeScript support
const InConstruction: React.FC<InConstructionProps> = ({
  children,
  message,
  className = "",
  language = "en",
  childrenClassName = "",
  icon,
  visible = true,
  endDate,
  allowedRoles = [],
  userRoles = [],
}) => {
  const [showOverlay, setShowOverlay] = useState(visible);

  useEffect(() => {
    // Update overlay visibility based on props
    let shouldShow = visible;
    const now = new Date();

    // Check date-based activation
    if (endDate) {
      if (endDate && now > endDate) shouldShow = false;
    }

    // Check role-based display
    if (allowedRoles.length > 0 && userRoles.length > 0) {
      const hasAllowedRole = userRoles.some((role) =>
        allowedRoles.includes(role)
      );
      if (hasAllowedRole) shouldShow = false;
    }

    setShowOverlay(shouldShow);
  }, [visible, endDate, allowedRoles, userRoles]);

  if (!showOverlay) {
    return <>{children}</>;
  }

  return (
    <div className={`in-construction-zone ${className}`}>
      <div className="overlay">
        {icon ? icon : "🚧"}
        <p>
          {message
            ? message
            : defaultMessage[language as keyof typeof defaultMessage]}
        </p>
        {icon ? icon : "🚧"}
      </div>
      <div className={`content ${childrenClassName}`}>{children}</div>
    </div>
  );
};

export default InConstruction;
