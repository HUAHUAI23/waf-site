// Translations for the website
const translations = {
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_features': 'Features',
        'nav_architecture': 'Architecture',
        'nav_deployment': 'Deployment',
        'nav_contact': 'Contact',
        'nav_try_demo': 'Try Demo',
        
        // Hero section
        'hero_title': 'Enterprise-Grade Web Application Firewall',
        'hero_description': 'Protect your web applications with next-generation WAF technology powered by HAProxy and Coraza. Defend against OWASP Top 10 threats with advanced security and minimal performance impact.',
        'get_started': 'Get Started',
        'learn_more': 'Learn More',
        'badge_owasp': 'OWASP Compliant',
        'badge_performance': 'High Performance',
        'badge_cloud': 'Cloud Native',
        'badge_security': 'Enterprise Security',
        
        // Features section
        'features_title': 'Comprehensive Protection',
        'features_subtitle': 'Advanced security features to protect your web applications',
        
        // Architecture section
        'architecture_title': 'Advanced Architecture',
        'architecture_subtitle': 'Combining HAProxy and Coraza WAF for unparalleled security',
        'architecture_heading': 'Multi-Engine Fusion Architecture',
        
        // Deployment section
        'deployment_title': 'Flexible Deployment',
        'deployment_subtitle': 'Deploy anywhere with simple, scalable architecture',
        'try_demo_deployment': 'Try Demo Deployment',
        
        // Demo section
        'demo_title': 'See It In Action',
        'demo_subtitle': 'Experience RuiQi WAF with one-click deployment',
        'demo_heading': 'Try RuiQi WAF Now',
        'deploy_on_sealos': 'Deploy on Sealos',
        
        // Contact section
        'contact_title': 'Get in Touch',
        'contact_subtitle': 'Have questions about RuiQi WAF? We\'re here to help.',
        'contact_info': 'Contact Information',
        'contact_connect': 'Connect With Us',
        'send_message': 'Send Message',
        
        // Footer
        'footer_product': 'Product',
        'footer_resources': 'Resources',
        'footer_company': 'Company',
        'footer_support': 'Support',
        'footer_copyright': '© 2025 RuiQi WAF Team. All rights reserved.',
        
        // Language switcher
        'language': 'EN',
        'language_full': 'English'
    },
    'zh': {
        // Navigation
        'nav_home': '首页',
        'nav_features': '功能',
        'nav_architecture': '架构',
        'nav_deployment': '部署',
        'nav_contact': '联系我们',
        'nav_try_demo': '试用演示',
        
        // Hero section
        'hero_title': '企业级Web应用防火墙',
        'hero_description': '使用由HAProxy和Coraza驱动的下一代WAF技术保护您的Web应用程序。以先进的安全性和最小的性能影响防御OWASP Top 10威胁。',
        'get_started': '开始使用',
        'learn_more': '了解更多',
        'badge_owasp': 'OWASP合规',
        'badge_performance': '高性能',
        'badge_cloud': '云原生',
        'badge_security': '企业级安全',
        
        // Features section
        'features_title': '全面保护',
        'features_subtitle': '保护您的Web应用程序的高级安全功能',
        
        // Architecture section
        'architecture_title': '先进架构',
        'architecture_subtitle': '结合HAProxy和Coraza WAF实现无与伦比的安全性',
        'architecture_heading': '多引擎融合架构',
        
        // Deployment section
        'deployment_title': '灵活部署',
        'deployment_subtitle': '使用简单、可扩展的架构在任何地方部署',
        'try_demo_deployment': '尝试演示部署',
        
        // Demo section
        'demo_title': '实际效果',
        'demo_subtitle': '通过一键部署体验RuiQi WAF',
        'demo_heading': '立即试用RuiQi WAF',
        'deploy_on_sealos': '在Sealos上部署',
        
        // Contact section
        'contact_title': '联系我们',
        'contact_subtitle': '对RuiQi WAF有疑问？我们随时为您提供帮助。',
        'contact_info': '联系信息',
        'contact_connect': '与我们联系',
        'send_message': '发送消息',
        
        // Footer
        'footer_product': '产品',
        'footer_resources': '资源',
        'footer_company': '公司',
        'footer_support': '支持',
        'footer_copyright': '© 2025 RuiQi WAF 团队。保留所有权利。',
        
        // Language switcher
        'language': '中文',
        'language_full': '中文'
    }
};

// Default language
let currentLanguage = 'en';

// Function to change the language
function changeLanguage(lang) {
    if (lang !== 'en' && lang !== 'zh') {
        console.error('Unsupported language:', lang);
        return;
    }
    
    currentLanguage = lang;
    document.documentElement.setAttribute('lang', lang);
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders for form elements
    const formElements = document.querySelectorAll('[data-i18n-placeholder]');
    formElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update language switcher button
    const langSwitcher = document.getElementById('language-switcher');
    if (langSwitcher) {
        langSwitcher.textContent = translations[lang]['language'];
    }
    
    // Save language preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has a saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
        currentLanguage = savedLang;
    } else {
        // Try to detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) {
            currentLanguage = 'zh';
        }
    }
    
    // Set initial language
    changeLanguage(currentLanguage);
    
    // Set up language switcher
    const langSwitcher = document.getElementById('language-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            const newLang = currentLanguage === 'en' ? 'zh' : 'en';
            changeLanguage(newLang);
        });
    }
}); 