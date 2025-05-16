// Internationalization handler for RuiQi WAF website

// Default language
let currentLanguage = 'en'

// Language translations
const translations = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-features': 'Features',
    'nav-architecture': 'Architecture',
    'nav-deployment': 'Deployment',
    'nav-contact': 'Contact',
    'nav-try-demo': 'Try Demo',

    // Hero Section
    'hero-title': 'Enterprise-Grade Web Application Firewall',
    'hero-description': 'Protect your web applications with next-generation WAF technology powered by HAProxy and Coraza. Defend against OWASP Top 10 threats with advanced security and minimal performance impact.',
    'hero-get-started': 'Get Started',
    'hero-learn-more': 'Learn More',
    'hero-badge-owasp': 'OWASP Compliant',
    'hero-badge-performance': 'High Performance',
    'hero-badge-cloud': 'Cloud Native',
    'hero-badge-security': 'Enterprise Security',

    // Features Section
    'features-title': 'Comprehensive Protection',
    'features-subtitle': 'Advanced security features to protect your web applications',
    'feature-owasp-title': 'OWASP Top 10 Protection',
    'feature-owasp-desc': 'Full coverage against injection attacks, XSS, CSRF, and other critical web application vulnerabilities with continuous updates.',
    'feature-performance-title': 'High Performance',
    'feature-performance-desc': 'Optimized architecture with <5ms latency impact and 10,000+ requests/second throughput on standard hardware.',
    'feature-cloud-title': 'Cloud Native Design',
    'feature-cloud-desc': 'Seamless deployment in Kubernetes, Docker and traditional environments with horizontal scaling capability.',
    'feature-bot-title': 'Bot Protection',
    'feature-bot-desc': 'Advanced behavioral analysis to distinguish between legitimate users, good bots, and malicious automation.',
    'feature-api-title': 'API Security',
    'feature-api-desc': 'Specialized protection for REST, GraphQL and SOAP APIs with schema validation and anomaly detection.',
    'feature-patch-title': 'Virtual Patching',
    'feature-patch-desc': 'Apply immediate protection against zero-day vulnerabilities without modifying application code.',

    // Architecture Section
    'arch-title': 'Advanced Architecture',
    'arch-subtitle': 'Combining HAProxy and Coraza WAF for unparalleled security',
    'arch-fusion-title': 'Multi-Engine Fusion Architecture',
    'arch-fusion-desc': 'RuiQi WAF leverages a sophisticated architecture that combines high-performance proxy capabilities with deep security inspection:',
    'arch-haproxy-title': 'HAProxy Frontend Layer',
    'arch-haproxy-desc': 'High-performance HTTP/HTTPS proxy with TLS 1.3 support, basic filtering, and intelligent traffic distribution.',
    'arch-coraza-title': 'Coraza WAF Core Engine',
    'arch-coraza-desc': 'Next-generation open-source WAF engine compatible with ModSecurity, supporting OWASP CRS and custom rules.',
    'arch-spoe-title': 'SPOE Communication',
    'arch-spoe-desc': 'Efficient communication protocol between HAProxy and Coraza, optimizing detection performance.',

    // Deployment Section
    'deploy-title': 'Flexible Deployment',
    'deploy-subtitle': 'Deploy anywhere with simple, scalable architecture',
    'deploy-edge-title': 'Edge Deployment',
    'deploy-edge-desc': 'Deploy at network edge as first line of defense against external attacks.',
    'deploy-app-title': 'Application Front',
    'deploy-app-desc': 'Direct protection for application servers with precise security controls.',
    'deploy-layer-title': 'Layered Protection',
    'deploy-layer-desc': 'Edge + application-front dual protection for defense-in-depth architecture.',
    'deploy-mesh-title': 'Service Mesh',
    'deploy-mesh-desc': 'Seamless integration with Istio/Linkerd as a security component for microservices.',
    'deploy-try-demo': 'Try Demo Deployment',

    // Demo Section
    'demo-title': 'See It In Action',
    'demo-subtitle': 'Experience RuiQi WAF with one-click deployment',
    'demo-try-title': 'Try RuiQi WAF Now',
    'demo-try-desc': 'Deploy a fully functional instance in less than 30 seconds with our Sealos integration. No setup required!',
    'demo-feature-1': 'Full admin dashboard access',
    'demo-feature-2': 'Pre-configured security rules',
    'demo-feature-3': 'Live traffic inspection',
    'demo-feature-4': 'Real-time analytics',
    'demo-deploy-btn': 'Deploy on Sealos',
    'demo-credentials': 'Default username: <strong>admin</strong> | Default password: <strong>admin123</strong>',

    // Testimonial Section
    'testimonial-title': 'Trusted by Security Professionals',
    'testimonial-subtitle': 'What our users say about RuiQi WAF',

    // Contact Section
    'contact-title': 'Get in Touch',
    'contact-subtitle': 'Have questions about RuiQi WAF? We\'re here to help.',
    'contact-info-title': 'Contact Information',
    'contact-address-title': 'Address',
    'contact-address': 'Room 323, Houde Building, Jiujiang University, 551 Qianjin East Road, Lianxi District, Jiujiang, Jiangxi',
    'contact-phone-title': 'Phone',
    'contact-support-title': 'Support',
    'contact-support-desc': 'Visit our GitHub repository',
    'contact-connect-title': 'Connect With Us',
    'contact-form-name': 'Your Name',
    'contact-form-email': 'Your Email',
    'contact-form-message': 'Your Message',
    'contact-form-send': 'Send Message',

    // Footer
    'footer-description': 'Enterprise-grade web application firewall protection with modern architecture and exceptional performance.',
    'footer-product': 'Product',
    'footer-resources': 'Resources',
    'footer-documentation': 'Documentation',
    'footer-api': 'API Reference',
    'footer-whitepaper': 'White Paper',
    'footer-blog': 'Blog',
    'footer-company': 'Company',
    'footer-about': 'About Us',
    'footer-careers': 'Careers',
    'footer-privacy': 'Privacy Policy',
    'footer-support': 'Support',
    'footer-help': 'Help Center',
    'footer-community': 'Community',
    'footer-status': 'Status',
    'footer-github': 'GitHub',
    'footer-copyright': '© 2025 RuiQi WAF Team. All rights reserved.',
    'footer-terms': 'Terms of Service',
    'footer-cookies': 'Cookies'
  },
  zh: {
    // Navigation
    'nav-home': '首页',
    'nav-features': '功能特点',
    'nav-architecture': '架构',
    'nav-deployment': '部署',
    'nav-contact': '联系我们',
    'nav-try-demo': '试用演示',

    // Hero Section
    'hero-title': '企业级Web应用防火墙',
    'hero-description': '利用HAProxy和Coraza提供的新一代WAF技术保护您的Web应用。防御OWASP Top 10威胁，提供高级安全保障，同时最小化性能影响。',
    'hero-get-started': '立即开始',
    'hero-learn-more': '了解更多',
    'hero-badge-owasp': 'OWASP合规',
    'hero-badge-performance': '高性能',
    'hero-badge-cloud': '云原生',
    'hero-badge-security': '企业级安全',

    // Features Section
    'features-title': '全面保护',
    'features-subtitle': '保护您Web应用的高级安全功能',
    'feature-owasp-title': 'OWASP Top 10 防护',
    'feature-owasp-desc': '全面防御注入攻击、XSS、CSRF和其他关键Web应用漏洞，并持续更新。',
    'feature-performance-title': '高性能',
    'feature-performance-desc': '优化架构，在标准硬件上延迟影响小于5ms，每秒处理10,000+请求。',
    'feature-cloud-title': '云原生设计',
    'feature-cloud-desc': '在Kubernetes、Docker和传统环境中无缝部署，支持水平扩展。',
    'feature-bot-title': '机器人防护',
    'feature-bot-desc': '高级行为分析，区分合法用户、良性机器人和恶意自动化程序。',
    'feature-api-title': 'API安全',
    'feature-api-desc': '针对REST、GraphQL和SOAP API的专业保护，包括架构验证和异常检测。',
    'feature-patch-title': '虚拟补丁',
    'feature-patch-desc': '无需修改应用代码，即可立即防御零日漏洞。',

    // Architecture Section
    'arch-title': '先进架构',
    'arch-subtitle': '结合HAProxy和Coraza WAF提供无与伦比的安全性',
    'arch-fusion-title': '多引擎融合架构',
    'arch-fusion-desc': 'RuiQi WAF利用精密架构，结合高性能代理能力与深度安全检查：',
    'arch-haproxy-title': 'HAProxy前端层',
    'arch-haproxy-desc': '高性能HTTP/HTTPS代理，支持TLS 1.3，基本过滤，以及智能流量分发。',
    'arch-coraza-title': 'Coraza WAF核心引擎',
    'arch-coraza-desc': '新一代开源WAF引擎，兼容ModSecurity，支持OWASP CRS及自定义规则。',
    'arch-spoe-title': 'SPOE通信',
    'arch-spoe-desc': 'HAProxy与Coraza之间的高效通信协议，优化检测性能。',

    // Deployment Section
    'deploy-title': '灵活部署',
    'deploy-subtitle': '简单、可扩展的架构，随处部署',
    'deploy-edge-title': '边缘部署',
    'deploy-edge-desc': '在网络边缘部署，作为抵御外部攻击的第一道防线。',
    'deploy-app-title': '应用前端',
    'deploy-app-desc': '为应用服务器提供精确安全控制的直接保护。',
    'deploy-layer-title': '分层保护',
    'deploy-layer-desc': '边缘+应用前端双重保护，实现深度防御架构。',
    'deploy-mesh-title': '服务网格',
    'deploy-mesh-desc': '作为微服务安全组件，与Istio/Linkerd无缝集成。',
    'deploy-try-demo': '试用演示部署',

    // Demo Section
    'demo-title': '实际体验',
    'demo-subtitle': '通过一键部署体验RuiQi WAF',
    'demo-try-title': '立即试用RuiQi WAF',
    'demo-try-desc': '通过Sealos集成，在30秒内部署功能完整的实例。无需设置！',
    'demo-feature-1': '完整管理员仪表板访问',
    'demo-feature-2': '预配置安全规则',
    'demo-feature-3': '实时流量检查',
    'demo-feature-4': '实时分析',
    'demo-deploy-btn': '在Sealos上部署',
    'demo-credentials': '默认用户名: <strong>admin</strong> | 默认密码: <strong>admin123</strong>',

    // Testimonial Section
    'testimonial-title': '安全专业人士的信任之选',
    'testimonial-subtitle': '用户对RuiQi WAF的评价',

    // Contact Section
    'contact-title': '联系我们',
    'contact-subtitle': '对RuiQi WAF有疑问？我们随时为您提供帮助。',
    'contact-info-title': '联系信息',
    'contact-address-title': '地址',
    'contact-address': '江西省九江市濂溪区前进东路551号九江学院厚德楼323室',
    'contact-phone-title': '电话',
    'contact-support-title': '技术支持',
    'contact-support-desc': '访问我们的GitHub仓库',
    'contact-connect-title': '与我们联系',
    'contact-form-name': '您的姓名',
    'contact-form-email': '您的邮箱',
    'contact-form-message': '您的留言',
    'contact-form-send': '发送留言',

    // Footer
    'footer-description': '具有现代架构和卓越性能的企业级web应用防火墙保护。',
    'footer-product': '产品',
    'footer-resources': '资源',
    'footer-documentation': '文档',
    'footer-api': 'API参考',
    'footer-whitepaper': '白皮书',
    'footer-blog': '博客',
    'footer-company': '公司',
    'footer-about': '关于我们',
    'footer-careers': '招聘',
    'footer-privacy': '隐私政策',
    'footer-support': '支持',
    'footer-help': '帮助中心',
    'footer-community': '社区',
    'footer-status': '状态',
    'footer-github': 'GitHub',
    'footer-copyright': '© 2025 RuiQi WAF团队。保留所有权利。',
    'footer-terms': '服务条款',
    'footer-cookies': 'Cookie政策'
  }
}

// Function to translate the page
function translatePage(language) {
  currentLanguage = language

  // Save language preference to localStorage
  localStorage.setItem('language', language)

  // Set the lang attribute on the HTML element
  document.documentElement.setAttribute('lang', language)

  // Update language toggle button text
  const langTextElement = document.querySelector('.lang-toggle-btn .lang-text')
  if (langTextElement) {
    langTextElement.textContent = language === 'en' ? 'EN' : '中'
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n')
    if (translations[language][key]) {
      // Handle elements that might contain HTML
      if (key.includes('credentials') || key.includes('copyright')) {
        element.innerHTML = translations[language][key]
      } else {
        element.textContent = translations[language][key]
      }
    }
  })

  // Handle placeholder attributes for form elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder')
    if (translations[language][key]) {
      element.placeholder = translations[language][key]
    }
  })
}

// Function to toggle between languages
function toggleLanguage() {
  const newLanguage = currentLanguage === 'en' ? 'zh' : 'en'
  translatePage(newLanguage)
}

// Initialize language based on browser preferences or saved preference
function initializeLanguage() {
  // Check for saved language preference
  const savedLanguage = localStorage.getItem('language')

  if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
    translatePage(savedLanguage)
  } else {
    // Detect browser language
    const browserLanguage = navigator.language || navigator.userLanguage

    // Default to English, use Chinese if browser language starts with zh
    if (browserLanguage.startsWith('zh')) {
      translatePage('zh')
    } else {
      translatePage('en')
    }
  }

  // Add event listener to language toggle button
  const langToggleBtn = document.querySelector('.lang-toggle-btn')
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage)
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLanguage)

// Export functions for use in other scripts
window.i18n = {
  translatePage,
  toggleLanguage,
  getCurrentLanguage: () => currentLanguage
} 