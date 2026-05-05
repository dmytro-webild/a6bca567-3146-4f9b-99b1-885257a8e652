"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Products",          id: "products"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="ShopHub"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars"}}
      title="Elevate Your Style"
      description="Discover a curated collection of premium products designed for modern life. Experience shopping simplified."
      buttons={[
        {
          text: "Shop Now",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-124943.jpg"
      imageAlt="modern lifestyle shopping banner"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-at-camera_1258-119094.jpg",          alt: "Shopping concept close up portrait young beautiful attractive redhair girl smiling looking at camera"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-excited-happy-woman-holding-shopping-bags-showing-plastic-credit-card-smiling-amazed-standing-against-pink-background_1258-300368.jpg",          alt: "Portrait of excited happy woman holding shopping bags and showing plastic credit card smiling amazed standing against pink background"},
        {
          src: "http://img.b2bpic.net/free-photo/young-client-wearing-yellow-clothes-copy-space_23-2148674271.jpg",          alt: "Young client wearing yellow clothes copy space"},
        {
          src: "http://img.b2bpic.net/free-photo/elegant-dressed-woman-talking-phone_23-2148674304.jpg",          alt: "Elegant dressed woman talking on the phone"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-woman-reading-bed_23-2148882718.jpg",          alt: "Close up woman reading in bed"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Premium Quality"},
        {
          type: "text",          text: "Fast Shipping"},
        {
          type: "text",          text: "Exclusive Deals"},
        {
          type: "text",          text: "Trusted Brand"},
        {
          type: "text",          text: "Global Support"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Quality You Can Trust"
      buttons={[
        {
          text: "Learn More"},
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          name: "Essential Item",          price: "$29",          imageSrc: "http://img.b2bpic.net/free-photo/girly-composition-monstera-plant_23-2148229243.jpg"},
        {
          id: "2",          name: "Premium Accessory",          price: "$49",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-say-no-fast-fashion_23-2149669608.jpg"},
        {
          id: "3",          name: "Classic Apparel",          price: "$89",          imageSrc: "http://img.b2bpic.net/free-photo/travel-still-life-pack-top-view_23-2148837313.jpg"},
        {
          id: "4",          name: "Modern Gadget",          price: "$129",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-girly-composition-table_23-2148229294.jpg"},
        {
          id: "5",          name: "Lifestyle Tool",          price: "$59",          imageSrc: "http://img.b2bpic.net/free-photo/mock-up-blank-poster-picture-frame-hanging-black-marble-wall-room-can-be-used-mockup-montage-products-display-design-key-visual-layout_1253-1087.jpg"},
        {
          id: "6",          name: "Signature Piece",          price: "$199",          imageSrc: "http://img.b2bpic.net/free-photo/blank-stationery-set-corporate-identity-template_93675-130790.jpg"},
      ]}
      title="Curated Selection"
      description="Browse our latest arrivals and timeless classics."
    />
  </div>

  <div id="proof" data-section="proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Google",        "Microsoft",        "Apple",        "Amazon",        "Tesla",        "Nike",        "Adidas"]}
      title="Trusted by Leaders"
      description="Our platform is recognized for excellence by industry leaders."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          badge: "Essential",          price: "$9",          subtitle: "Basic access",          features: [
            "Standard shipping",            "Member newsletter"],
        },
        {
          id: "pro",          badge: "Popular",          price: "$29",          subtitle: "Pro benefits",          features: [
            "Free shipping",            "Priority support",            "Exclusive deals"],
        },
        {
          id: "vip",          badge: "Premium",          price: "$49",          subtitle: "All-access",          features: [
            "VIP shipping",            "24/7 Concierge",            "Early access"],
        },
      ]}
      title="Simple Membership"
      description="Unlock exclusive benefits and discounts."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Great quality!",          quote: "Excellent products and shipping.",          name: "Sarah J.",          role: "Designer",          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-green-suit-using-phone-outside-street_1303-29546.jpg"},
        {
          id: "2",          title: "Highly recommend",          quote: "The best shopping experience ever.",          name: "Mark C.",          role: "Developer",          imageSrc: "http://img.b2bpic.net/free-photo/excited-smiling-blond-girl-happily-keeping-thumbs-up-near-with-copy-space-text-promotional-content-isolated-yellow-background-like-expression_574295-2945.jpg"},
        {
          id: "3",          title: "So happy",          quote: "Everything arrived on time.",          name: "Emily R.",          role: "Manager",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-walking-couple_1301-1316.jpg"},
        {
          id: "4",          title: "Excellent service",          quote: "Fantastic quality products.",          name: "David K.",          role: "Analyst",          imageSrc: "http://img.b2bpic.net/free-photo/female-shoppers_329181-8091.jpg"},
        {
          id: "5",          title: "Love it",          quote: "Shopping made so simple.",          name: "John D.",          role: "Editor",          imageSrc: "http://img.b2bpic.net/free-photo/friends-shopping-second-hand-market_23-2149353754.jpg"},
      ]}
      title="Customer Stories"
      description="Hear what our community says about their shopping journey."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "What shipping options exist?",          content: "We offer standard and express shipping."},
        {
          id: "q2",          title: "Can I return items?",          content: "Yes, we accept returns within 30 days."},
        {
          id: "q3",          title: "How is quality assured?",          content: "Each product passes strict quality checks."},
      ]}
      sideTitle="Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      text="Get in touch with our team for personalized support. We are available 24/7 via email at support@shophub.com or phone at +1 (800) 555-0199. Visit our headquarters at 123 Retail Ave, Commerce City."
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"
      }}
      buttons={[
        { text: "Email Us", href: "mailto:support@shophub.com" },
        { text: "Call Us", href: "tel:+18005550199" }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Shop",          items: [
            {
              label: "Products",              href: "#products"},
            {
              label: "Pricing",              href: "#pricing"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
      bottomLeftText="© 2024 ShopHub. All rights reserved."
      bottomRightText="Privacy Policy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}