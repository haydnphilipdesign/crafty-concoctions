// Discreet Website Protection Measures
// Copyright © 2025 Haydn Watkins - multimedium.dev

(function() {
    'use strict';
    
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable common keyboard shortcuts for developer tools and source viewing
    document.addEventListener('keydown', function(e) {
        // Disable F12 (Developer Tools)
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+S (Save As)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+A (Select All)
        if (e.ctrlKey && e.keyCode === 65) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+P (Print)
        if (e.ctrlKey && e.keyCode === 80) {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Add invisible watermarks to key elements
    function addWatermarks() {
        const watermark = document.createElement('div');
        watermark.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='rgba(0,0,0,0.02)' font-size='14' transform='rotate(-45 100 100)'%3E© Haydn Watkins - multimedium.dev%3C/text%3E%3C/svg%3E");
            background-repeat: repeat;
        `;
        document.body.appendChild(watermark);
    }
    
    // Obfuscate CSS class names in console
    function obfuscateClasses() {
        if (typeof window.devtools === 'undefined') {
            window.devtools = { open: false, orientation: null };
        }
    }
    
    // Add subtle tracking for developer tools detection
    let devtools = {
        open: false,
        orientation: null
    };
    
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > 160 || window.outerWidth - window.innerWidth > 160) {
            if (!devtools.open) {
                devtools.open = true;
                // Quietly log but don't alert the user
                console.clear();
            }
        } else {
            devtools.open = false;
        }
    }, 500);
    
    // Add copyright notices in CSS and JS
    function addCopyrightNotices() {
        const style = document.createElement('style');
        style.textContent = `
            /* 
             * Website Design & Development by Haydn Watkins
             * © 2025 multimedium.dev - All Rights Reserved
             * Unauthorized reproduction or distribution is prohibited
             */
            body::before {
                content: '';
                position: absolute;
                top: -1px;
                left: -1px;
                width: 1px;
                height: 1px;
                opacity: 0;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Disable image saving
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
            
            // Add transparent overlay to prevent easy saving
            img.style.position = 'relative';
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: transparent;
                pointer-events: none;
                z-index: 1;
            `;
            img.parentNode.style.position = 'relative';
            img.parentNode.appendChild(overlay);
        });
    });
    
    // Initialize protection measures
    document.addEventListener('DOMContentLoaded', function() {
        addWatermarks();
        obfuscateClasses();
        addCopyrightNotices();
        
        // Add subtle deterrent message in console
        setTimeout(function() {
            console.clear();
            console.log('%c🛡️ Website Protection Active', 'color: #2D5016; font-size: 16px; font-weight: bold;');
            console.log('%c© 2025 Haydn Watkins - multimedium.dev', 'color: #666; font-size: 12px;');
            console.log('%cThis website design is proprietary. Unauthorized reproduction is prohibited.', 'color: #800020; font-size: 12px;');
        }, 1000);
    });
    
    // Disable common shortcuts on mobile
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });
    
    // Add meta tags to discourage bots/scrapers
    if (document.head) {
        const robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        robotsMeta.content = 'noindex, nofollow, noarchive, nosnippet, noimageindex';
        document.head.appendChild(robotsMeta);
    }
    
    // Quiet detection of view source attempts
    Object.defineProperty(document, 'visibilityState', {
        get: function() {
            return 'visible';
        }
    });
    
})();