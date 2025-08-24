"use client";
import StockCommunity from "app/real-estate/community/page";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "ur";

type Dict = Record<string, string>;

const en: Dict = {
  brand: "Middle-Class Investment Guide",
  home: "Home",
  about: "About Us",
  realEstate: "Real Estate",
  stock: "Stock Exchange",
  guide: "Guide",
  community: "Community Support",
  resources: "Resources",
  dashboard: "Dashboard",
  dashboardCardBody: "Mock community insights dashboard.",
  forum: "Discussion Forum",
  fillAllFields: "Fill All Fields",
  contact: "Contact Us",
  login: "Login",
  topicCreated: "Topic Created Successfully",
  signup: "Sign Up",
  profile: "Profile",
  language: "Language",
  heroTitle: "Empowering Pakistan’s middle class to invest smarter.",
  heroSubtitle:
    "Learn the basics, see community insights, and practice with a safe demo UI. Explore real estate guides tailored for small investors. Access stock market basics and risk management tips. Stay updated with dashboards to track insights. Connect with a like-minded community of learners. Build your confidence with safe simulations before investing. Gain step-by-step knowledge designed for beginners.",
  getStarted: "Get Started",
  oathTitle: "User Oath / Undertaking",
  oathBtn: "I Agree and Continue",
  realEstateGuideIntro: "Basics of Real Estate investing (static guide).",
  stockGuideIntro:
    "Basics of Stock Market investing (static guide).Master the art of stock trading withcomprehensive strategies, risk management, and market analysis.",
  stockGuideTitle: "A Middle Class guide to Stock Exchange in Pakistan",
  searchable: "Searchable",
  selectSociety: "Select Society / Project",
  selectCompany: "Select Company / Share",
  startDate: "Start Date",
  endDate: "End Date",
  profitOrLoss: "Profit (+) or Loss (-) %",
  comments: "Comments / Review",
  addMore: "Add More",
  submit: "Submit",
  support: "Support",
  submitted:
    "Submitted (mock). Admin will validate and reflect on dashboard within 24 hours.",
  filters: "Filters",
  mostProfit: "Most Profit",
  mostLoss: "Most Loss",
  mostRecent: "Most Recent",
  realEstateTab: "Real Estate",
  stockTab: "Stock Exchange",
  createTopic: "Create Topic",
  title: "Title",
  message: "Message",
  post: "Post",
  reply: "Reply",
  name: "Name",
  city: "City",
  addReply: "Add a Reply",
  replyAdded: "Reply Added Successfully",
  passwordsDoNotMatch: "Passwords do not match",
  contactNumber: "Contact Number",
  whatsapp: "WhatsApp Number",
  category: "Category",
  confirmPassword: "Confirm Password",
  regularInvestor: "Regular Investor",
  dealerBroker: "Dealer / Broker",
  endUser: "End user / Small investor",
  email: "Email",
  password: "Password",
  signIn: "Sign In",
  register: "Register",
  yourHistory: "Your Submission History (mock)",
  mockSignup: "Mock signup successful!",
  res_realEstate: "Real Estate Basics (PDF)",
  res_stock: "Stock Market 101 (PDF)",
  res_links: "Useful Links: SECP, PSX",

  link_realEstate: "Real Estate",
  link_stock: "Stock Exchange",
  replyDeleted: "Reply Deleted",

  re_sale: "Website for Sale/Purchase and Rent",
  re_sale_desc: "Buy, sell, or rent properties across Pakistan.",
  re_cda: "CDA Approved Societies (Islamabad)",
  re_cda_desc: "Invest in CDA-approved housing societies in Islamabad.",
  re_rda: "RDA Approved Societies (Rawalpindi)",
  re_rda_desc: "Invest in RDA-approved housing societies in Rawalpindi.",

  se_official: "Official Pakistan Stock Exchange Website",
  se_official_desc: "Check live stock prices, indices, and announcements.",
  se_scstrade: "SCSTrade",
  se_scstrade_desc: "A platform to analyze Pakistan Stock Exchange data.",
  se_courses: "Free Stock Exchange Courses",
  se_courses_desc: "Learn about trading and investment strategies in Pakistan.",
  aboutHeroTitle:
    "About Us – Empowering Middle-Class Pakistanis to Build Wealth",
  aboutHeroDesc:
    "At chotainvestor.pk we believe that financial freedom should be accessible to every middle-class Pakistani.",
  whyWeExistTitle: "Why We Exist",
  whyWeExistDesc:
    "Millions of Pakistanis remain trapped in a cycle of limited income, inflation, and financial uncertainty.",
  whyWeExistNote:
    "Traditional savings are no longer enough—true wealth is built through smart investments. Unfortunately, the stock market and real estate remain intimidating or exclusive for many. Whereas, the same is not true.",
  whatWeOfferTitle: "What We Offer",
  whatWeOfferDesc:
    "We provide practical knowledge and step-by-step guidance for smart investing.",
  offerPoint1:
    "Stock Market Mastery – Learn how to invest wisely in the Pakistan Stock Exchange (PSX).",
  offerPoint2:
    "Real Estate Wealth – Discover profitable property investment strategies without needing massive capital.",
  offerPoint3:
    "Community-Driven Growth – Join a network of like-minded individuals sharing insights, success/failure stories, and support.",
  offerPoint4:
    "Step-by-Step Guidance – From beginner to advanced, we provide actionable plans tailored for middle-class budgets.",
  missionTitle: "Mission",
  missionSubtitle:
    "Empowering middle-class Pakistanis with the right knowledge and strategies.",
  missionDesc:
    "Our goal is to provide knowledge, strategies, and community support so people can achieve financial independence through smart investments in the stock market and real estate. We aim to become the largest platform for wealth-building discussions, helping individuals transition from their current lifestyle to a prosperous future.",
  visionTitle: "Vision",
  visionSubtitle: "Becoming Pakistan’s largest financial empowerment platform.",
  visionDesc:
    "We aim to help middle class families transition from survival mode to wealth-building—through education, discipline, and smart investing.",

  // Hero (green banner in screenshot)
  renovateTitle: "Renovate Easily",
  renovateSubtitle:
    "Effortlessly compare quotes from top quality contractors, and get peace of mind with warranty & price protections.",
  feature1: "Advanced Analytics",
  feature2: "Team Collaboration",
  feature3: "Custom Integrations",
  feature4: "24/7 Premium Support",
  // en.ts
  realEstateGuideTitle: "A Middle-Class Guide to Real Estate in Pakistan",
  realEstateGuideSubtitle: "Basics of Real Estate investing (static guide).",
  realEstateNoShortcut:
    "There is No Shortcut to Success. Before you think about doubling your money overnight, take a moment to look around. Nature teaches us one thing clearly: everything having worth takes time. A plant doesn’t grow in one day. The sun and the moon follow a precise and slow rhythm. Success in real estate—or in any meaningful endeavor—is no different. It’s a slow and steady journey, not a sprint. Anyone promising you quick returns or overnight success is, quite frankly, setting a trap. Don’t fall for it.",
  realEstateStatOptions: "Property Options",
  realEstateStatReturns: "Average Returns",
  realEstateStatChecks: "Legal Safety Checks",
  realEstateStatInvestment: "Minimum Investment",
  realEstateStatWarningHead: "Investment Disclaimer",
  realEstateStatWarning:
    " Real estate investments carry significant risks. Past performance doesn't guarantee future results. Always consult with legal and financial advisors before making investment decisions.",
  essentialSteps: "Essential Investment Steps",
  step1Title: "1. Safety of Assets Comes First",
  step1Desc:
    "If you're part of Pakistan's middle class, your savings are your lifeline. Before thinking about growth, focus on protecting them.",

  keyPointsTitle: "Key Points",
  keyPoint1: "Protect your existing savings first",
  keyPoint2: "Consider possession-able plots over flashy plot files",
  keyPoint3: "Ensure legal and approved investments",
  keyPoint4: "Evaluate infrastructure and future development plans",
  riskFactorsTitle: "Risk Factors",
  risk1: "Unverified societies or plots",
  risk2: "Delayed development in installment plans",
  risk3: "Fraudulent or unapproved files",
  visualAnalysisTitle: "Visual Analysis",
  visualResidential: "Residential",
  visualCommercial: "Commercial",
  visualMixed: "Mixed Use",
  visualIndustrial: "Industrial",
  realEstateStepsHeading: "Essential Investment Steps",
  step2_title: "2. Think Long Term: 7 to 10 Years Minimum",
  step2_desc:
    "Real estate is not for the impatient. Genuine appreciation takes 7-10 years. Be patient and plan your investment horizon.",
  step2_keypoint1: "Expect market cycles to span 7-10 years",
  step2_keypoint2: "Hold investments for long-term gains",
  step2_keypoint3: "Plan for infrastructure and development phases",
  step2_keypoint4: "Factor in tax implications and liquidity needs",
  step2_risk1: "Market downturns during holding period",
  step2_risk2: "Delayed project completions",
  step2_risk3: "Liquidity issues in emergencies",
  step2_graph_year1: "Year 1-2",
  step2_graph_year2: "Year 3-4",
  step2_graph_year3: "Year 5+",
  step2_graph_marketvalue: "Market Value",

  step3_title: "3. Failing to Plan is Planning to Fail",
  step3_desc:
    "You don’t need to be rich to invest smartly—you need a plan. Design a 7–10 year roadmap and stick to it.",
  step3_keypoint1: "Design a clear long-term investment roadmap",
  step3_keypoint2: "Avoid emotional or trend-based decisions",
  step3_keypoint3: "Diversify investments across locations and asset types",
  step3_keypoint4: "Learn from community experiences before investing",
  step3_risk1: "Following blind advice or family recommendations",
  step3_risk2: "Investing without legal verification",
  step3_risk3: "Overexposure to one society or project",
  step3_graph_portfolio1: "High Risk (20%)",
  step3_graph_portfolio2: "Medium (30%)",
  step3_graph_portfolio3: "Low Risk (25%)",
  step3_graph_portfolio4: "Cash/Liquid (25%)",
  step3_graph_title: "Portfolio Allocation",
  realEstateJourney_title: "Ready to Start Your Real Estate Journey?",
  realEstateJourney_desc:
    "Remember: Real estate investment requires patience, research, and professional guidance. Start with smaller investments and gradually build your portfolio.",
  realEstateJourney_btn1: "Research First",
  realEstateJourney_btn2: "Plan Your Timeline",
  realEstateJourney_btn3: "Diversify Wisely",

  stockGuideEssentialStepsTitle: "Your Trading Journey",
  stockGuideEssentialStepsDescription:
    "Follow these essential steps to become a successful investor.",
  stockGuideEssentialStep1_title: "1. Smart Investment Intro",
  stockGuideEssentialStep1_desc:
    "A Middle Class guide to Stock Exchange in Pakistan.",
  stockGuideEssentialStep1_keyPoint1:
    "Many middle-class Pakistanis dream of investing to secure their future",
  stockGuideEssentialStep1_keyPoint2:
    "Real estate often requires hefty down payments and long-term plans",
  stockGuideEssentialStep1_keyPoint3:
    "Stock market is a liquid alternative for smaller savings",
  stockGuideEssentialStep1_keyPoint4:
    "Government measures ensure protection from fraud in PSX accounts",
  stockGuideEssentialStep1_tip1: "Start small and invest within your means",
  stockGuideEssentialStep1_tip2: "Understand PSX procedures and account setup",
  stockGuideEssentialStep1_tip3:
    "Keep your investment accessible but avoid impulsive withdrawals",
  stockGuideEssentialStep1_timeline: "Immediate start possible",
  stockGuideEssentialStep1_graphAccount: "Account",
  stockGuideEssentialStep1_graphKYC: "KYC",
  stockGuideEssentialStep1_graphTrading: "Trading",
  stockGuideEssentialStep1_graphTimeline: "Setup Process Timeline",

  stockGuideEssentialStep2_title: "2. PSX: Safe Approach",
  stockGuideEssentialStep2_desc:
    "How to invest safely and avoid common pitfalls in Pakistan Stock Exchange.",
  stockGuideEssentialStep2_keyPoint1:
    "Avoid speculation: don’t just buy low and sell high",
  stockGuideEssentialStep2_keyPoint2:
    "Plan for medium to long-term: 3 to 5 years minimum",
  stockGuideEssentialStep2_keyPoint3:
    "Look for dividend-paying stocks for regular income",
  stockGuideEssentialStep2_keyPoint4:
    "Invest only money you can set aside long-term, not emergency funds",
  stockGuideEssentialStep2_keyPoint5:
    "Choose strong, reputable companies for stability",
  stockGuideEssentialStep2_tip1:
    "Research companies thoroughly before investing",
  stockGuideEssentialStep2_tip2:
    "Stay updated with economic and political conditions",
  stockGuideEssentialStep2_tip3:
    "Diversify your portfolio across sectors and stocks",
  stockGuideEssentialStep2_timeline: "3-5 years recommended",
  stockGuideEssentialStep2_graphMarketAnalysis: "Market Analysis",

  stockGuideEssentialStep3_title: "3. Learn from Real People",
  stockGuideEssentialStep3_desc:
    "Gain insights from experienced investors and community advice.",
  stockGuideEssentialStep3_keyPoint1:
    "Visit the Community Page to hear real investor experiences",
  stockGuideEssentialStep3_keyPoint2:
    "Learn lessons from others’ successes and mistakes",
  stockGuideEssentialStep3_keyPoint3:
    "Adopt tips and strategies for smarter investing",
  stockGuideEssentialStep3_tip1: "Engage in discussions and ask questions",
  stockGuideEssentialStep3_tip2: "Track your progress and reflect on decisions",
  stockGuideEssentialStep3_tip3: "Stay updated with latest investment trends",
  stockGuideEssentialStep3_timeline: "Ongoing learning",

  // Step 4
  stockGuideEssentialStep4_title: "4. Investment Comparison",
  stockGuideEssentialStep4_desc:
    "Real Estate vs Stock Exchange – Pros, Cons, and Middle-Class Guide.",
  stockGuideEssentialStep4_keyPoint1:
    "Minimum Investment: Stock Exchange can start with small savings, Real Estate requires large lump sum",
  stockGuideEssentialStep4_keyPoint2:
    "Liquidity: Stocks are highly liquid; property takes weeks/months to sell",
  stockGuideEssentialStep4_keyPoint3:
    "Partial Withdrawal: Stocks allow selling some shares, Real Estate does not",
  stockGuideEssentialStep4_keyPoint4:
    "Capital Appreciation: Stocks fluctuate, Real Estate more predictable historically",
  stockGuideEssentialStep4_keyPoint5:
    "Regular Income: Stocks may pay dividends, Real Estate pays rental income",
  stockGuideEssentialStep4_keyPoint6:
    "Risk Level: Stocks high risk, Real Estate medium risk",
  stockGuideEssentialStep4_keyPoint7:
    "Maintenance: Stocks need no upkeep, Real Estate requires management",
  stockGuideEssentialStep4_keyPoint8:
    "Accessibility: Stocks easy for middle class, Real Estate entry barrier is high",
  stockGuideEssentialStep4_keyPoint9:
    "ROI Time: Stocks 3-5 years, Real Estate 7-10 years",
  stockGuideEssentialStep4_keyPoint10:
    "Litigation: Stocks no litigation, Real Estate may have legal disputes",
  stockGuideEssentialStep4_tip1: "Plan long term for both investment types",
  stockGuideEssentialStep4_tip2:
    "Start with Stock Exchange if you cannot afford property",
  stockGuideEssentialStep4_tip3:
    "Diversify your investments gradually as funds allow",
  stockGuideEssentialStep4_timeline: "Depends on investment type and planning",
  stockGuideEssentialStep4_graphStock: "Stock",
  stockGuideEssentialStep4_graphRealEstate: "Real Estate",
  stockGuideEssentialStep4_graphLegendStock: "Stock Exchange",
  stockGuideEssentialStep4_graphLegendRealEstate: "Real Estate",

  marketStats_label_marketCap: "Market Cap",
  marketStats_label_dailyVolume: "Daily Volume",
  marketStats_label_listedStocks: "Listed Stocks",
  marketStats_label_sectors: "Sectors",
  marketStats_suffix_lCr: "L Cr",
  marketStats_suffix_kCr: "K Cr",
  marketStats_suffix_plus: "+",
  marketStats_prefix_empty: "",

  risk_title: "Know Your Risk Appetite",
  risk_level_conservative: "Conservative",
  risk_level_moderate: "Moderate",
  risk_level_aggressive: "Aggressive",
  risk_description_conservative: "Blue-chip stocks, dividends",
  risk_description_moderate: "Large & mid-cap mix",
  risk_description_aggressive: "Small-cap, growth stocks",
  readyToStart: "Ready to Start Your Investment Journey?",
  rememberNote:
    "Remember: Successful investing requires patience, discipline, and continuous learning. Start small, learn from mistakes, and gradually build your portfolio.",
  startLearning: "Start Learning",
  practiceTrading: "Practice Trading",
  manageRisk: "Manage Risk",
  disclaimer:
    "Disclaimer: Stock market investments are subject to market risks. Past performance is not indicative of future returns. Please consult your financial advisor before making investment decisions.",
  realEstateCommunityTitle:
    "Have You Personally Invested in This housing society or project?",

  cityLabel: "Select City",
  cityRawalpindi: "Rawalpindi/Islamabad",
  cityKarachi: "Karachi",
  cityLahore: "Lahore",
  cityPeshawar: "Peshawar",
  cityQuetta: "Quetta",

  projectLabel: "Explore Real Estate Investment Options",
  projectPlaceholder: "Select or type your housing society/project",
  projectHelp:
    "If the name is not found, email us with city and project info: info@chotainvestor.pk",

  nameLabel: "Name",
  whatsappLabel: "WhatsApp Number",
  investedLabel: "Have You Personally Invested?",
  investedYes: "Yes",
  investedNo: "No",
  durationLabel: "Duration of Investment",
  duration1to2: "1-2 years",
  duration5plus: "More than 5 years",
  duration10plus: "More than 10 years",
  profitLabel: "Did You Make a Profit?",
  profitYes: "Yes",
  profitNo: "No",
  ratingLabel: "Rate Your Experience ",
  commentLabel: "Comments or Advice",
  voteSubmit: "Submit Vote",
  submittedMsg: "✅ Your vote has been submitted",
  pollTitle: "Live Poll Results",
  profitStat: "% of people who made a profit",
  lossStat: "% who faced loss",
  avgRating: "Average star rating",
  totalResponses: "Total responses",
  commentsTitle: "Real comments by Investors",
  noComments: "No comments yet. Be the first to share your experience!",
  profit: "Profit",
  loss: "Loss",

  footer:
    "Learn from Real People. Vote on Real Experiences. Build Wealth Together.",

  StockCommunityTitle:
    "Have You Personally Invested in This Sector or Company?",
  StockCommunityCompanyLabel: "Explore Stock Investment Options",
  StockCommunityCompanyDescription:
    "If not found, email us: info@chotainvestor.pk",
  useful_links: "Useful Links",
  submit_useful_resources:
    "Want to be helpful? Send relevant useful resources with some detail to info@chotainvestor.pk",

  cat_self_help: "Best Self Help Book to overcome personal complexes/ phobias",
  cat_become_rich: "Best Guide books to become rich",
  cat_real_estate: "Best Websites for Real Estate",
  cat_stock_exchange: "Best Websites for Stock Exchange",

  subtle_art_title: "The Subtle Art by Mark Manson",
  subtle_art_desc: "Official book page and details.",

  think_rich_title: "Think and Grow Rich by Napoleon Hill",
  think_rich_desc: "Napoleon Hill Foundation official page.",
  rich_dad_title: "Rich Dad Poor Dad by Robert Kiyosaki",
  rich_dad_desc: "Official Rich Dad page.",

  zameen_title: "Website for Sale/ Purchase and Rent",
  zameen_desc: "Zameen.com – buy, sell, and rent properties in Pakistan.",
  cda_title: "CDA Approved Societies for Investment in Islamabad (Real Estate)",
  cda_desc: "Official CDA list of approved societies.",
  rda_title:
    "RDA Approved Societies for Investment in Rawalpindi (Real Estate)",
  rda_desc: "Official RDA list of approved societies.",

  psx_title: "Official Pakistan Stock Exchange Website",
  psx_desc: "Market data, announcements, rules, and listings.",
  scs_title: "A good website regarding Pakistan Stock Exchange",
  scs_desc: "SCSTrade – PSX data, charts, and research tools.",
  psx_learn_title: "Free of cost courses for learning stock exchange",
  psx_learn_desc: "PSX Knowledge Center – free learning resources.",

  brand_title: "Middle-Class Investment Guide",
  brand_desc:
    "Empowering middle-class families with smart investment strategies, financial literacy, and wealth-building guidance for a secure future.",

  happy_investors: "Happy Investors",
  invested: "Invested",

  investment_guides: "Investment Guides",
  contact_us: "Contact Us",
  legal_resources: "Legal & Resources",

  stock_guide: "Stock Guide",
  real_estate: "Real Estate",
  risk_management: "Risk Management",
  learning_resources: "Learning Resources",
  communityFooter: "Community",

  privacy_policy: "Privacy Policy",
  terms_service: "Terms of Service",
  cookie_policy: "Cookie Policy",
  Disclaimer: "Disclaimer",

  rights_reserved: "All rights reserved.",
  risk_notice:
    "Investment advice is subject to market risks. Please read all documents carefully.",
  back_to_top: "Back to Top",
  investment_disclaimer:
    "Investment Disclaimer: All investments are subject to market risks. Past performance does not guarantee future returns. Please consult a certified financial advisor before making any investment decisions.",

  dashboardQuickStats: "Quick Stats",
  dashboardTotalEntries: "Total Entries",
  dashboardAvgProfit: "Avg Profit %",
  dashboardAvgLoss: "Avg Loss %",
  dashboardSearch: "Search",
  dashboardSearchPlaceholder: "Search by name or city",
  dashboardNotifications: "Notifications",
  dashboardNewEntry: "New Entry",

  dashboardRealEstateTab: "Real Estate",
  dashboardStockTab: "Stock",
  dashboardFilters: "Filters",
  dashboardMostProfit: "Most Profit",
  dashboardMostLoss: "Most Loss",
  dashboardMostRecent: "Most Recent",

  dashboardAvgYears: "Avg Years",

  dashboardProfitVsLoss: "Profit vs Loss",
  dashboardAvgProfitByCity: "Avg Profit by City",

  dashboardProfitPercent: "Profit %",
  dashboardLossPercent: "Loss %",
  dashboardComments: "Comments",

  dashboardHighProfit: "High Profit",
  dashboardRisky: "Risky",
  dashboardRecent: "Recent",
};

const ur: Dict = {
  brand: "مڈل کلاس انویسٹمنٹ گائیڈ",
  home: "ہوم",
  about: "ہمارے بارے میں",
  realEstate: "ریئل اسٹیٹ",
  stock: "اسٹاک ایکسچینج",
  guide: "رہنمائی",
  topicCreated: "موضوع کامیابی سے تخلیق کیا گیا",
  addReply: "جواب شامل کریں",
  community: "کمیونٹی سپورٹ",
  resources: "وسائل",
  dashboard: "ڈیش بورڈ",
  dashboardCardBody: "ماک کمیونٹی انسائٹس ڈیش بورڈ۔",
  forum: "ڈسکشن فورم",
  contact: "رابطہ",
  login: "لاگ ان",
  signup: "سائن اپ",
  profile: "پروفائل",
  replyAdded: "جواب کامیابی سے شامل کیا گیا",
  language: "زبان",
  heroTitle: "پاکستان کی مڈل کلاس کو سمجھداری سے سرمایہ کاری کے قابل بنائیں۔",
  heroSubtitle:
    "بنیادی اصول سیکھیں، کمیونٹی کی بصیرت دیکھیں اور محفوظ ڈیمو انٹرفیس کے ساتھ مشق کریں۔ ریئل اسٹیٹ گائیڈز تک رسائی حاصل کریں جو خاص طور پر چھوٹے سرمایہ کاروں کے لیے تیار کی گئی ہیں۔ اسٹاک مارکیٹ کے بنیادی اصول اور رسک مینجمنٹ کے نکات جانیں۔ بصیرت کے لیے ماک ڈیش بورڈز کے ذریعے اپ ٹو ڈیٹ رہیں۔ سیکھنے والوں کی کمیونٹی کے ساتھ جڑیں اور تجربہ کار مشورے سے فائدہ اٹھائیں۔ محفوظ سمیولیشنز کے ذریعے اعتماد پیدا کریں اور حقیقی سرمایہ کاری سے پہلے پریکٹس کریں۔ قدم بہ قدم رہنمائی حاصل کریں جو خاص طور پر نئے سرمایہ کاروں کے لیے ڈیزائن کی گئی ہے۔",
  getStarted: "شروع کریں",
  oathTitle: "صارف کا حلف نامہ",
  oathBtn: "میں متفق ہوں، آگے بڑھیں",
  realEstateGuideIntro:
    "ریئل اسٹیٹ سرمایہ کاری کی بنیادی باتیں (جامد رہنمائی)۔",
  stockGuideIntro:
    "اسٹاک مارکیٹ کی بنیادی باتیں (جامد رہنمائی)۔اسٹاک تجارت کے فن میں مہارت حاصل کریں جامع حکمت عملیوں، خطرے کے انتظام اور بازار کے تجزیے کے ساتھ۔",
  stockGuideTitle: "پاکستان میں اسٹاک ایکسچینج کے لیے مڈل کلاس کا رہنما",
  searchable: "قابل تلاش",
  selectSociety: "سوسائٹی / پراجیکٹ منتخب کریں",
  selectCompany: "کمپنی / شیئر منتخب کریں",
  startDate: "آغاز تاریخ",
  endDate: "اختتامی تاریخ",
  profitOrLoss: "منافع (+) یا نقصان (-) ٪",
  comments: "تبصرے / جائزہ",
  replyDeleted: "جواب کامیابی سے حذف کر دیا گیا",
  addMore: "مزید شامل کریں",
  submit: "جمع کریں",
  support: "سپورٹ",
  confirmPassword: "پاس ورڈ کی تصدیق کریں",
  submitted:
    "جمع کرا دیا گیا (ڈیمو)۔ ایڈمن کی توثیق کے بعد 24 گھنٹوں میں ڈیش بورڈ میں نظر آئے گا۔",
  filters: "فلٹرز",
  mostProfit: "زیادہ منافع",
  mostLoss: "زیادہ نقصان",
  mostRecent: "نیا ترین",
  realEstateTab: "ریئل اسٹیٹ",
  stockTab: "اسٹاک ایکسچینج",
  createTopic: "ٹوپک بنائیں",
  title: "عنوان",
  message: "پیغام",
  post: "پوسٹ",
  reply: "جواب",
  name: "نام",
  city: "شہر",
  fillAllFields: "تمام فیلڈز کو پُر کریں",
  contactNumber: "رابطہ نمبر",
  whatsapp: "واٹس ایپ نمبر",
  category: "زمرہ",
  regularInvestor: "ریگولر انویسٹر",
  dealerBroker: "ڈیلر / بروکر",
  endUser: "اینڈ یوزر / چھوٹا سرمایہ کار",
  email: "ای میل",
  mockSignup: "سائن اپ کامیاب رہا!",
  password: "پاس ورڈ",
  passwordsDoNotMatch: "پاس ورڈ اور تصدیقی پاس ورڈ ایک جیسے نہیں ہیں",
  signIn: "سائن ان",
  register: "رجسٹر",
  yourHistory: "آپ کی ہسٹری (ڈیمو)",

  res_realEstate: "ریئل اسٹیٹ کی بنیادی معلومات (PDF)",
  res_stock: "اسٹاک مارکیٹ 101 (PDF)",
  res_links: "مفید لنکس: SECP، PSX",

  link_realEstate: "ریئل اسٹیٹ",
  link_stock: "اسٹاک ایکسچینج",

  re_sale: "خرید و فروخت اور کرایہ کے لئے ویب سائٹ",
  re_sale_desc: "پاکستان بھر میں جائیداد خریدیں، فروخت کریں یا کرایہ پر لیں۔",
  re_cda: "سی ڈی اے منظور شدہ سوسائٹیز (اسلام آباد)",
  re_cda_desc:
    "اسلام آباد میں سی ڈی اے کی منظور شدہ ہاؤسنگ سوسائٹیز میں سرمایہ کاری کریں۔",
  re_rda: "آر ڈی اے منظور شدہ سوسائٹیز (راولپنڈی)",
  re_rda_desc:
    "راولپنڈی میں آر ڈی اے کی منظور شدہ ہاؤسنگ سوسائٹیز میں سرمایہ کاری کریں۔",

  se_official: "پاکستان اسٹاک ایکسچینج کی آفیشل ویب سائٹ",
  se_official_desc: "لائیو اسٹاک قیمتیں، انڈیکس اور اعلانات دیکھیں۔",
  se_scstrade: "ایس سی ایس ٹریڈ",
  se_scstrade_desc:
    "پاکستان اسٹاک ایکسچینج کے ڈیٹا کا تجزیہ کرنے کا پلیٹ فارم۔",
  se_courses: "اسٹاک ایکسچینج کے مفت کورسز",
  se_courses_desc: "پاکستان میں ٹریڈنگ اور سرمایہ کاری کی حکمت عملی سیکھیں۔",
  aboutHeroTitle:
    "ہمارے بارے میں – مڈل کلاس پاکستانیوں کو دولت بنانے کے قابل بنانا",
  aboutHeroDesc:
    "chotainvestor.pk پر ہمارا یقین ہے کہ مالی آزادی ہر مڈل کلاس پاکستانی کے لیے قابلِ رسائی ہونی چاہیے۔",
  whyWeExistTitle: "ہم کیوں موجود ہیں",
  whyWeExistDesc:
    "لاکھوں پاکستانی محدود آمدن، مہنگائی اور مالی بے یقینی کے چکر میں پھنسے ہوئے ہیں۔",
  whyWeExistNote:
    "روایتی بچتیں اب کافی نہیں—اصل دولت سمجھ دار سرمایہ کاری سے بنتی ہے۔ بدقسمتی سے اسٹاک مارکیٹ اور ریئل اسٹیٹ بہت سے لوگوں کے لیے مشکل یا خاص سمجھی جاتی ہیں، حالانکہ ایسا نہیں ہونا چاہیے۔",
  whatWeOfferTitle: "ہم کیا فراہم کرتے ہیں",
  whatWeOfferDesc:
    "ہم سمارٹ انویسٹمنٹ کے لیے عملی علم اور مرحلہ وار رہنمائی فراہم کرتے ہیں۔",
  offerPoint1:
    "اسٹاک مارکیٹ مہارت — پاکستان اسٹاک ایکسچینج (PSX) میں سمجھداری سے سرمایہ کاری کرنا سیکھیں۔",
  offerPoint2:
    "ریئل اسٹیٹ میں دولت — بغیر بڑے سرمائے کے منافع بخش پراپرٹی حکمت عملیاں دریافت کریں۔",
  offerPoint3:
    "کمیونٹی پر مبنی ترقی — ہم خیال افراد کے نیٹ ورک میں شامل ہوں، بصیرتیں، کامیابی/ناکامی کی کہانیاں اور مدد شیئر کریں۔",
  offerPoint4:
    "مرحلہ وار رہنمائی — ابتدائی سے لے کر ایڈوانسڈ تک، مڈل کلاس بجٹ کے مطابق قابلِ عمل پلانز دیں۔",
  missionTitle: "مشن",
  missionSubtitle:
    "مڈل کلاس پاکستانیوں کو درست علم اور حکمت عملیوں کے ساتھ بااختیار بنانا۔",
  missionDesc:
    "ہماری کوشش ہے کہ علم، حکمت عملیاں اور کمیونٹی سپورٹ کے ذریعے لوگ اسٹاک مارکیٹ اور ریئل اسٹیٹ میں سمجھدار سرمایہ کاری کر کے مالی خودمختاری حاصل کریں۔ ہم چاہتے ہیں کہ دولت سازی پر سب سے بڑا پلیٹ فارم بنیں جو لوگوں کو موجودہ طرزِ زندگی سے خوشحال مستقبل کی طرف لے جائے۔",
  visionTitle: "ویژن",
  visionSubtitle: "پاکستان کا سب سے بڑا مالیاتی بااختیار پلیٹ فارم بننا۔",
  visionDesc:
    "ہم متوسط طبقے کے خاندانوں کو تعلیم، نظم و ضبط اور سمجھدار سرمایہ کاری کے ذریعے بقا کے موڈ سے دولت سازی کی طرف منتقل کرنے میں مدد دیتے ہیں۔",

  renovateTitle: "آسانی سے مرمت/تزئین و آرائش",
  renovateSubtitle:
    "معیاری کنٹریکٹرز سے کوٹس کا باآسانی موازنہ کریں، اور وارنٹی و قیمت کے تحفظ کے ساتھ ذہنی سکون پائیں۔",
  feature1: "ایڈوانسڈ اینالیٹکس",
  feature2: "ٹیم کولیبریشن",
  feature3: "کسٹم انٹیگریشنز",
  feature4: "24/7 پریمیئم سپورٹ",
  // ur.ts
  realEstateGuideTitle: "پاکستان میں ریئل اسٹیٹ کے لیے مڈل کلاس گائیڈ",
  realEstateGuideSubtitle:
    "ریئل اسٹیٹ سرمایہ کاری کی بنیادی باتیں (جامد رہنمائی)۔",
  realEstateNoShortcut:
    "کامیابی کا کوئی شارٹ کٹ نہیں ہے۔ اس سے پہلے کہ آپ ایک رات میں پیسہ دگنا کرنے کے بارے میں سوچیں، ایک لمحہ رک کر اپنے اردگرد دیکھیں۔ فطرت ہمیں ایک بات واضح طور پر سکھاتی ہے: ہر قیمتی چیز وقت لیتی ہے۔ پودا ایک دن میں نہیں اگتا۔ سورج اور چاند ایک خاص اور آہستہ رفتار کے ساتھ چلتے ہیں۔ ریئل اسٹیٹ میں کامیابی — یا کسی بھی اہم کام میں — مختلف نہیں ہے۔ یہ ایک سست اور مسلسل سفر ہے، دوڑ نہیں۔ جو بھی آپ کو فوری منافع یا راتوں رات کامیابی کا وعدہ کرے، وہ دراصل ایک جال بچھا رہا ہے۔ اس فریب میں نہ آئیں۔",
  realEstateStatOptions: "پراپرٹی آپشنز",
  realEstateStatReturns: "اوسط منافع",
  realEstateStatChecks: "قانونی سیفٹی چیکس",
  realEstateStatInvestment: "کم از کم سرمایہ کاری",
  realEstateStatWarningHead: "سرمایہ کاری کی تنبیہ",
  realEstateStatWarning:
    " ریئل اسٹیٹ کی سرمایہ کاری میں نمایاں خطرات ہوتے ہیں۔ ماضی کی کارکردگی مستقبل کے نتائج کی ضمانت نہیں دیتی۔ سرمایہ کاری کے فیصلے کرنے سے پہلے ہمیشہ قانونی اور مالی مشیروں سے مشورہ کریں۔",
  essentialSteps: "اہم سرمایہ کاری کے اقدامات",
  step1Title: "1. سب سے پہلے اثاثوں کی حفاظت",
  step1Desc:
    "اگر آپ پاکستان کی مڈل کلاس کا حصہ ہیں تو آپ کی بچت آپ کی زندگی کی لکیریں ہیں۔ بڑھوتری کے بارے میں سوچنے سے پہلے ان کی حفاظت پر توجہ دیں۔",

  keyPointsTitle: "اہم نکات",
  keyPoint1: "سب سے پہلے اپنی موجودہ بچت کی حفاظت کریں",
  keyPoint2: "چمکدار پلاٹ فائلوں کے بجائے قبضہ ملنے والے پلاٹس پر غور کریں",
  keyPoint3: "قانونی اور منظور شدہ سرمایہ کاری کو یقینی بنائیں",
  keyPoint4: "انفراسٹرکچر اور مستقبل کے ترقیاتی منصوبوں کا جائزہ لیں",

  riskFactorsTitle: "خطرات",
  risk1: "غیر مصدقہ سوسائٹیاں یا پلاٹس",
  risk2: "اقساط والے منصوبوں میں تاخیر سے ترقی",
  risk3: "جعلی یا غیر منظور شدہ فائلیں",

  visualAnalysisTitle: "بصری تجزیہ",
  visualResidential: "رہائشی",
  visualCommercial: "کمرشل",
  visualMixed: "مخلوط استعمال",
  visualIndustrial: "انڈسٹریل",
  realEstateStepsHeading: "اہم سرمایہ کاری کے اقدامات",
  step2_title: "2. طویل مدتی سوچیں: کم از کم 7 تا 10 سال",
  step2_desc:
    "ریئل اسٹیٹ بے صبر لوگوں کے لیے نہیں ہے۔ حقیقی قدر میں اضافہ 7 تا 10 سال لیتا ہے۔ صبر کریں اور اپنے سرمایہ کاری کا ہدف طے کریں۔",
  step2_keypoint1: "متوقع مارکیٹ سائیکلز 7 تا 10 سال تک چل سکتے ہیں",
  step2_keypoint2: "سرمایہ کاری طویل مدتی منافع کے لیے رکھیں",
  step2_keypoint3: "انفراسٹرکچر اور ترقی کے مراحل کے لیے منصوبہ بندی کریں",
  step2_keypoint4: "ٹیکس کے اثرات اور نقدی کی ضروریات کو مدنظر رکھیں",
  step2_risk1: "سرمایہ رکھنے کے دوران مارکیٹ میں کمی",
  step2_risk2: "پراجیکٹس کی مکمل ہونے میں تاخیر",
  step2_risk3: "ایمرجنسی کی صورت میں نقدی کے مسائل",
  step2_graph_year1: "سال 1-2",
  step2_graph_year2: "سال 3-4",
  step2_graph_year3: "سال 5+",
  step2_graph_marketvalue: "مارکیٹ کی قدر",

  step3_title: "3. منصوبہ بندی میں ناکامی کا مطلب ناکامی کی منصوبہ بندی ہے",
  step3_desc:
    "عقلمندی سے سرمایہ کاری کے لیے امیر ہونے کی ضرورت نہیں ہے—آپ کو ایک منصوبہ چاہیے۔ 7 تا 10 سالہ روڈ میپ بنائیں اور اس پر عمل کریں۔",
  step3_keypoint1: "ایک واضح طویل مدتی سرمایہ کاری کا روڈ میپ بنائیں",
  step3_keypoint2: "جذباتی یا فیشن پر مبنی فیصلوں سے بچیں",
  step3_keypoint3: "مختلف مقامات اور اثاثہ اقسام میں سرمایہ کاری کو تقسیم کریں",
  step3_keypoint4: "سرمایہ کاری سے پہلے کمیونٹی کے تجربات سے سیکھیں",
  step3_risk1: "اندھادھند مشورے یا خاندانی سفارشات پر عمل کرنا",
  step3_risk2: "قانونی تصدیق کے بغیر سرمایہ کاری",
  step3_risk3: "کسی ایک سوسائٹی یا پراجیکٹ میں زیادہ سرمایہ کاری",
  step3_graph_portfolio1: "زیادہ خطرہ (20٪)",
  step3_graph_portfolio2: "درمیانہ (30٪)",
  step3_graph_portfolio3: "کم خطرہ (25٪)",
  step3_graph_portfolio4: "نقد/لیکویڈ (25٪)",
  step3_graph_title: "پورٹ فولیو کی تقسیم",
  realEstateJourney_title:
    "اپنی رئیل اسٹیٹ کے سفر کا آغاز کرنے کے لیے تیار ہیں؟",
  realEstateJourney_desc:
    "یاد رکھیں: رئیل اسٹیٹ میں سرمایہ کاری کے لیے صبر، تحقیق اور پیشہ ورانہ رہنمائی ضروری ہے۔ چھوٹی سرمایہ کاری سے شروع کریں اور آہستہ آہستہ اپنا پورٹ فولیو بڑھائیں۔",
  realEstateJourney_btn1: "سب سے پہلے تحقیق کریں",
  realEstateJourney_btn2: "اپنا وقت طے کریں",
  realEstateJourney_btn3: "عقل مندی سے سرمایہ کاری کریں",

  stockGuideEssentialStepsTitle: "آپ کا تجارتی سفر",
  stockGuideEssentialStepsDescription:
    "ان اہم مراحل کی پیروی کریں تاکہ ایک کامیاب سرمایہ کار بن سکیں۔",
  stockGuideEssentialStep1_title: "1۔ اسمارٹ سرمایہ کاری کا تعارف",
  stockGuideEssentialStep1_desc:
    "پاکستان میں اسٹاک ایکسچینج کے لیے مڈل کلاس کے لیے گائیڈ۔",
  stockGuideEssentialStep1_keyPoint1:
    "کئی مڈل کلاس پاکستانی اپنے مستقبل کو محفوظ بنانے کے لیے سرمایہ کاری کا خواب دیکھتے ہیں",
  stockGuideEssentialStep1_keyPoint2:
    "ریئل اسٹیٹ اکثر بھاری ڈاؤن پیمنٹ اور طویل مدتی منصوبوں کی ضرورت رکھتا ہے",
  stockGuideEssentialStep1_keyPoint3:
    "چھوٹے ذخائر کے لیے اسٹاک مارکیٹ ایک لیکوئیڈ متبادل ہے",
  stockGuideEssentialStep1_keyPoint4:
    "حکومتی اقدامات PSX اکاؤنٹس میں دھوکہ دہی سے تحفظ یقینی بناتے ہیں",
  stockGuideEssentialStep1_tip1:
    "چھوٹے سے شروع کریں اور اپنی استطاعت کے مطابق سرمایہ کاری کریں",
  stockGuideEssentialStep1_tip2: "PSX کے طریقہ کار اور اکاؤنٹ سیٹ اپ کو سمجھیں",
  stockGuideEssentialStep1_tip3:
    "اپنی سرمایہ کاری قابل رسائی رکھیں لیکن جذباتی نکالنے سے گریز کریں",
  stockGuideEssentialStep1_timeline: "فوری آغاز ممکن ہے",
  stockGuideEssentialStep1_graphAccount: "اکاؤنٹ",
  stockGuideEssentialStep1_graphKYC: "KYC",
  stockGuideEssentialStep1_graphTrading: "ٹریڈنگ",
  stockGuideEssentialStep1_graphTimeline: "سیٹ اپ کا عمل",

  stockGuideEssentialStep2_title: "2۔ PSX: محفوظ طریقہ",
  stockGuideEssentialStep2_desc:
    "پاکستان اسٹاک ایکسچینج میں محفوظ سرمایہ کاری اور عام نقصانات سے بچنے کا طریقہ۔",
  stockGuideEssentialStep2_keyPoint1:
    "قیاس آرائی سے بچیں: صرف کم خریدیں اور زیادہ نہ بیچیں",
  stockGuideEssentialStep2_keyPoint2:
    "درمیانی سے طویل مدتی کے لیے منصوبہ بنائیں: کم 1ز کم 3 تا 5 سال",
  stockGuideEssentialStep2_keyPoint3:
    "مستقل آمدنی کے لیے ڈیویڈنٹ دینے والے اسٹاک تلاش کریں",
  stockGuideEssentialStep2_keyPoint4:
    "صرف وہ رقم سرمایہ کاری کریں جو آپ طویل مدتی کے لیے رکھ سکتے ہیں، ہنگامی فنڈز نہیں",
  stockGuideEssentialStep2_keyPoint5:
    "استحکام کے لیے مضبوط اور معتبر کمپنیوں کا انتخاب کریں",
  stockGuideEssentialStep2_tip1:
    "سرمایہ کاری سے پہلے کمپنیوں کی اچھی طرح تحقیق کریں",
  stockGuideEssentialStep2_tip2: "اقتصادی اور سیاسی حالات سے باخبر رہیں",
  stockGuideEssentialStep2_tip3:
    "اپنے پورٹ فولیو کو سیکٹرز اور اسٹاکس میں تقسیم کریں",
  stockGuideEssentialStep2_timeline: "3-5 سال کی سفارش کی جاتی ہے",
  stockGuideEssentialStep2_graphMarketAnalysis: "مارکیٹ تجزیہ",

  stockGuideEssentialStep3_title: "3۔ حقیقی لوگوں سے سیکھیں",
  stockGuideEssentialStep3_desc:
    "تجربہ کار سرمایہ کاروں اور کمیونٹی کے مشورے سے بصیرت حاصل کریں۔",
  stockGuideEssentialStep3_keyPoint1:
    "کمیونٹی پیج پر جا کر حقیقی سرمایہ کار کے تجربات سنیں",
  stockGuideEssentialStep3_keyPoint2:
    "دوسروں کی کامیابیوں اور غلطیوں سے سبق سیکھیں",
  stockGuideEssentialStep3_keyPoint3:
    "سمارٹ سرمایہ کاری کے لیے ٹپس اور حکمت عملی اپنائیں",
  stockGuideEssentialStep3_tip1: "مباحثوں میں حصہ لیں اور سوالات کریں",
  stockGuideEssentialStep3_tip2:
    "اپنی پیش رفت کو ٹریک کریں اور فیصلوں پر غور کریں",
  stockGuideEssentialStep3_tip3:
    "تازہ ترین سرمایہ کاری کے رجحانات سے باخبر رہیں",
  stockGuideEssentialStep3_timeline: "مسلسل سیکھنا",

  stockGuideEssentialStep4_title: "4۔ سرمایہ کاری کا موازنہ",
  stockGuideEssentialStep4_desc:
    "ریئل اسٹیٹ بمقابلہ اسٹاک ایکسچینج – فوائد، نقصانات، اور مڈل کلاس کے لیے گائیڈ۔",
  stockGuideEssentialStep4_keyPoint1:
    "کم از کم سرمایہ کاری: اسٹاک ایکسچینج چھوٹے ذخائر سے شروع ہو سکتا ہے، ریئل اسٹیٹ کے لیے بڑی رقم کی ضرورت",
  stockGuideEssentialStep4_keyPoint2:
    "لیکویڈیٹی: اسٹاک زیادہ لیکوئیڈ ہیں؛ پراپرٹی فروخت ہونے میں ہفتے/ماہ لگ سکتے ہیں",
  stockGuideEssentialStep4_keyPoint3:
    "جزوی واپسی: اسٹاک کچھ شیئرز بیچنے کی اجازت دیتا ہے، ریئل اسٹیٹ نہیں",
  stockGuideEssentialStep4_keyPoint4:
    "سرمایہ میں اضافہ: اسٹاک میں اتار چڑھاؤ ہوتا ہے، ریئل اسٹیٹ تاریخی طور پر زیادہ پیش گوئی کے قابل",
  stockGuideEssentialStep4_keyPoint5:
    "باقاعدہ آمدنی: اسٹاک ڈیویڈنڈ دے سکتے ہیں، ریئل اسٹیٹ کرایہ دیتا ہے",
  stockGuideEssentialStep4_keyPoint6:
    "خطرے کی سطح: اسٹاک زیادہ خطرہ، ریئل اسٹیٹ درمیانہ خطرہ",
  stockGuideEssentialStep4_keyPoint7:
    "مینٹیننس: اسٹاک میں دیکھ بھال کی ضرورت نہیں، ریئل اسٹیٹ میں انتظامی ضروریات",
  stockGuideEssentialStep4_keyPoint8:
    "رسائی: اسٹاک مڈل کلاس کے لیے آسان، ریئل اسٹیٹ کی رکاوٹ زیادہ",
  stockGuideEssentialStep4_keyPoint9:
    "ROI وقت: اسٹاک 3-5 سال، ریئل اسٹیٹ 7-10 سال",
  stockGuideEssentialStep4_keyPoint10:
    "عدالتی مقدمات: اسٹاک میں نہیں، ریئل اسٹیٹ میں قانونی تنازعات ہو سکتے ہیں",
  stockGuideEssentialStep4_tip1:
    "دونوں سرمایہ کاری کی اقسام کے لیے طویل مدتی منصوبہ بنائیں",
  stockGuideEssentialStep4_tip2:
    "اگر پراپرٹی برداشت نہیں کر سکتے تو اسٹاک سے شروع کریں",
  stockGuideEssentialStep4_tip3: "رقم کی اجازت کے مطابق سرمایہ کاری کریں",
  stockGuideEssentialStep4_timeline:
    "سرمایہ کاری کی قسم اور منصوبہ بندی پر منحصر",
  stockGuideEssentialStep4_graphStock: "اسٹاک",
  stockGuideEssentialStep4_graphRealEstate: "ریئل اسٹیٹ",
  stockGuideEssentialStep4_graphLegendStock: "اسٹاک ایکسچینج",
  stockGuideEssentialStep4_graphLegendRealEstate: "ریئل اسٹیٹ",
  marketStats_label_marketCap: "مارکیٹ کیپ",
  marketStats_label_dailyVolume: "روزانہ کا حجم",
  marketStats_label_listedStocks: "فہرست شدہ اسٹاکس",
  marketStats_label_sectors: "سیکٹرز",
  marketStats_suffix_lCr: "لاکھ کروڑ",
  marketStats_suffix_kCr: "ہزار کروڑ",
  marketStats_suffix_plus: "+",
  marketStats_prefix_empty: "",

  risk_title: "اپنی رسک ایپٹائٹ جانیں",
  risk_level_conservative: "محفوظ",
  risk_level_moderate: "درمیانہ",
  risk_level_aggressive: "جارحانہ",
  risk_description_conservative: "بلیو چِپ اسٹاکس، ڈیویڈنڈز",
  risk_description_moderate: "بڑے اور درمیانے کیپ کا مرکب",
  risk_description_aggressive: "چھوٹے کیپ، گروتھ اسٹاکس",
  readyToStart: "کیا آپ اپنی سرمایہ کاری کا سفر شروع کرنے کے لیے تیار ہیں؟",
  rememberNote:
    "یاد رکھیں: کامیاب سرمایہ کاری کے لیے صبر، نظم و ضبط اور مسلسل سیکھنا ضروری ہے۔ چھوٹے پیمانے پر شروع کریں، غلطیوں سے سیکھیں اور آہستہ آہستہ اپنا پورٹ فولیو بنائیں۔",
  startLearning: "سیکھنا شروع کریں",
  practiceTrading: "ٹریڈنگ کی مشق کریں",
  manageRisk: "خطرے کو سنبھالیں",
  disclaimer:
    "ڈسکلیمر: اسٹاک مارکیٹ میں سرمایہ کاری مارکیٹ کے خطرات سے مشروط ہے۔ ماضی کی کارکردگی مستقبل کے نتائج کی ضمانت نہیں دیتی۔ براہ کرم سرمایہ کاری کے فیصلے کرنے سے پہلے اپنے مالی مشیر سے مشورہ کریں۔",

  RealEstateCommunityTitle:
    "کیا آپ نے ذاتی طور پر اس ہاؤسنگ سوسائٹی یا پروجیکٹ میں سرمایہ کاری کی ہے؟",
  cityLabel: "شہر منتخب کریں",
  cityRawalpindi: "راولپنڈی/اسلام آباد",
  cityKarachi: "کراچی",
  cityLahore: "لاہور",
  cityPeshawar: "پشاور",
  cityQuetta: "کوئٹہ",

  projectLabel: "رئیل اسٹیٹ سرمایہ کاری کے اختیارات دریافت کریں",
  projectPlaceholder: "اپنی ہاؤسنگ سوسائٹی یا پروجیکٹ منتخب یا ٹائپ کریں",
  projectHelp:
    "اگر نام نہیں مل رہا تو شہر اور پروجیکٹ کی معلومات info@chotainvestor.pk پر ای میل کریں",

  nameLabel: "نام",
  whatsappLabel: "واٹس ایپ نمبر",
  investedLabel: "کیا آپ نے ذاتی طور پر سرمایہ کاری کی؟",
  investedYes: "جی ہاں",
  investedNo: "نہیں",

  durationLabel: "سرمایہ کاری کی مدت",
  duration1to2: "1-2 سال",
  duration5plus: "5 سال سے زیادہ",
  duration10plus: "10 سال سے زیادہ",

  profitLabel: "کیا آپ نے منافع کمایا؟",
  profitYes: "جی ہاں",
  profitNo: "نہیں",

  ratingLabel: "اپنے تجربے کو ریٹ کریں ",
  commentLabel: "تبصرے یا مشورہ",

  voteSubmit: "ووٹ جمع کروائیں",
  submittedMsg: "✅ آپ کا ووٹ جمع کر دیا گیا ہے",

  pollTitle: "لائیو پول کے نتائج",
  profitStat: "٪ لوگ جنہوں نے منافع کمایا",
  lossStat: "٪ لوگ جنہیں نقصان ہوا",
  avgRating: "اوسط اسٹار ریٹنگ",
  totalResponses: "کل جوابات",
  commentsTitle: "سرمایہ کاروں کے حقیقی تبصرے",
  noComments: "ابھی تک کوئی تبصرہ نہیں۔ اپنی رائے سب سے پہلے دیں!",
  profit: "منافع",
  loss: "نقصان",
  footer: "حقیقی لوگوں سے سیکھیں۔ حقیقی تجربات پر ووٹ کریں۔ مل کر دولت بنائیں۔",
  StockCommunityTitle:
    "کیا آپ نے ذاتی طور پر اس سیکٹر یا کمپنی میں سرمایہ کاری کی ہے؟",
  StockCommunityCompanyLabel: "اسٹاک سرمایہ کاری کے اختیارات دریافت کریں",
  StockCommunityCompanyDescription:
    "اگر نام نہیں مل رہا تو شہر اور پروجیکٹ کی معلومات info@chotainvestor.pk پر ای میل کریں",

  useful_links: "مفید لنکس",
  submit_useful_resources:
    "مددگار بننا چاہتے ہیں؟ متعلقہ مفید وسائل تفصیل کے ساتھ info@chotainvestor.pk پر بھیجیں",

  cat_self_help:
    "بہترین سیلف ہیلپ کتاب ذاتی کمپلیکس/ فوبیا پر قابو پانے کے لیے",
  cat_become_rich: "امیر بننے کے لیے بہترین رہنما کتابیں",
  cat_real_estate: "ریئل اسٹیٹ کے لیے بہترین ویب سائٹس",
  cat_stock_exchange: "اسٹاک ایکسچینج کے لیے بہترین ویب سائٹس",

  subtle_art_title: "دی سبٹل آرٹ از مارک مین سن",
  subtle_art_desc: "آفیشل کتاب صفحہ اور تفصیلات۔",

  think_rich_title: "تھنگ اینڈ گرو رچ از نپولین ہل",
  think_rich_desc: "نپولین ہل فاؤنڈیشن کا آفیشل صفحہ۔",
  rich_dad_title: "رچ ڈاڈ پُور ڈاڈ از رابرٹ کیوساکی",
  rich_dad_desc: "آفیشل رچ ڈاڈ صفحہ۔",

  zameen_title: "خرید و فروخت اور کرایہ کے لیے ویب سائٹ",
  zameen_desc:
    "Zameen.com – پاکستان میں جائیداد خریدیں، بیچیں اور کرایہ پر لیں۔",
  cda_title: "سی ڈی اے کی منظور شدہ سوسائٹیاں (اسلام آباد کے لیے سرمایہ کاری)",
  cda_desc: "سی ڈی اے کی آفیشل منظور شدہ سوسائٹیز کی فہرست۔",
  rda_title: "آر ڈی اے کی منظور شدہ سوسائٹیاں (راولپنڈی کے لیے سرمایہ کاری)",
  rda_desc: "آر ڈی اے کی آفیشل منظور شدہ سوسائٹیز کی فہرست۔",

  psx_title: "پاکستان اسٹاک ایکسچینج کی آفیشل ویب سائٹ",
  psx_desc: "مارکیٹ ڈیٹا، اعلانات، قوانین اور لسٹنگ۔",
  scs_title: "پاکستان اسٹاک ایکسچینج کے متعلق ایک اچھی ویب سائٹ",
  scs_desc: "SCSTrade – PSX ڈیٹا، چارٹس اور ریسرچ ٹولز۔",
  psx_learn_title: "اسٹاک ایکسچینج سیکھنے کے لیے مفت کورسز",
  psx_learn_desc: "PSX نالج سینٹر – مفت سیکھنے کے وسائل۔",
  brand_title: "مڈل کلاس انویسٹمنٹ گائیڈ",
  brand_desc:
    "مڈل کلاس خاندانوں کو اسمارٹ سرمایہ کاری کی حکمت عملیوں، مالی خواندگی، اور دولت سازی کی رہنمائی فراہم کرنا تاکہ ایک محفوظ مستقبل بنایا جا سکے۔",

  happy_investors: "خوش سرمایہ کار",
  invested: "سرمایہ کاری کی گئی",

  investment_guides: "سرمایہ کاری رہنمائیاں",
  contact_us: "ہم سے رابطہ کریں",
  legal_resources: "قانونی و وسائل",

  stock_guide: "اسٹاک گائیڈ",
  real_estate: "ریئل اسٹیٹ",
  risk_management: "رسک مینجمنٹ",
  learning_resources: "لرننگ وسائل",
  communityFooter: "کمیونٹی",

  privacy_policy: "پرائیویسی پالیسی",
  terms_service: "سروس کی شرائط",
  cookie_policy: "کوکی پالیسی",
  Disclaimer: "ڈسکلیمر",

  rights_reserved: "جملہ حقوق محفوظ ہیں۔",
  risk_notice:
    "سرمایہ کاری کے مشورے مارکیٹ کے خطرات سے مشروط ہیں۔ براہ کرم تمام دستاویزات غور سے پڑھیں۔",
  back_to_top: "واپس اوپر جائیں",
  investment_disclaimer:
    "سرمایہ کاری ڈسکلیمر: تمام سرمایہ کاریاں مارکیٹ کے خطرات سے مشروط ہیں۔ ماضی کی کارکردگی مستقبل کی ضمانت نہیں دیتی۔ براہ کرم کسی مستند مالی مشیر سے مشورہ کریں۔",

  dashboardQuickStats: "فوری اعدادوشمار",
  dashboardTotalEntries: "کل اندراجات",
  dashboardAvgProfit: "اوسط منافع %",
  dashboardAvgLoss: "اوسط نقصان %",
  dashboardSearch: "تلاش کریں",
  dashboardSearchPlaceholder: "نام یا شہر تلاش کریں",
  dashboardNotifications: "اطلاعات",
  dashboardNewEntry: "نیا اندراج",

  dashboardRealEstateTab: "ریئل اسٹیٹ",
  dashboardStockTab: "اسٹاک",
  dashboardFilters: "فلٹرز",
  dashboardMostProfit: "زیادہ منافع",
  dashboardMostLoss: "زیادہ نقصان",
  dashboardMostRecent: "حالیہ",

  dashboardAvgYears: "اوسط سال",

  dashboardProfitVsLoss: "منافع بمقابلہ نقصان",
  dashboardAvgProfitByCity: "شہر کے لحاظ سے اوسط منافع",

  dashboardProfitPercent: "منافع %",
  dashboardLossPercent: "نقصان %",
  dashboardComments: "تبصرے",

  dashboardHighProfit: "زیادہ منافع",
  dashboardRisky: "خطرناک",
  dashboardRecent: "حالیہ",
};

const dictionaries: Record<Locale, Dict> = { en, ur };

interface Ctx {
  locale: Locale;
  t: (key: keyof typeof en) => string;
  toggle: () => void;
}

const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>("en");
  const t = (key: keyof typeof en) => dictionaries[locale][key] || key;

  useEffect(() => { 
    const dir = locale === "ur" ? "rtl" : "ltr";
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", dir);
      document.documentElement.setAttribute("lang", locale);
      document.body.classList.toggle("rtl", dir === "rtl");
    }
  }, [locale]);
  const value = useMemo(
    () => ({
      locale,
      t,
      toggle: () => setLocale((l) => (l === "en" ? "ur" : "en")),
    }),
    [locale]
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useL = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useL must be used within LanguageProvider");
  return ctx;
};
