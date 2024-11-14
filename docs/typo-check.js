// Data provided
const pages = [{
    url: 'https://stackinfra-redesign-develop.box.gravityapps.net/locations/americas/atlanta',
    MD: [
        {
            selector: '.wp-block-gravity-two-columns-content',
            items: {
                'h2': { color: 'rgb(29, 79, 145)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '36px', fontStyle: 'normal', fontWeight: '500', lineHeight: '46.8px', letterSpacing: '-1.08px' },
                'p': { color: 'rgb(105, 119, 134)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '18px', fontStyle: 'normal', fontWeight: '500', lineHeight: '120%', letterSpacing: '-0.18px' }
            }
        },
        {
            selector: '.mod-market-banner',
            items: {
                'h1': { color: 'rgb(255, 255, 255)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '36px', fontStyle: 'normal', fontWeight: '600', lineHeight: '130%', letterSpacing: '-0.72px', textTransform: 'uppercase' },
                'p': { color: 'rgb(255, 255, 255)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '20px', fontStyle: 'normal', fontWeight: '500', lineHeight: '130%', letterSpacing: '-0.2px' },
                'p.h2': { color: 'rgb(255, 255, 255)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '36px', fontStyle: 'normal', fontWeight: '600', lineHeight: '120%', letterSpacing: '-1.08px' },
                'p.h6': { color: 'rgb(255, 255, 255)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '20px', fontStyle: 'normal', fontWeight: '500', lineHeight: '120%' }
            }
        },
        {
            selector: '.mod-campuses-carousel',
            items: {
                'h3': { color: 'rgb(29, 79, 145)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '28px', fontStyle: 'normal', fontWeight: '600', lineHeight: '120%', letterSpacing: '-0.28px' },
                'h4': { color: 'rgb(255, 255, 255)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '24px', fontStyle: 'normal', fontWeight: '600', lineHeight: '120%', letterSpacing: '-0.72px' },
                'p': { color: 'rgb(255, 255, 255)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '16px', fontStyle: 'normal', fontWeight: '500', lineHeight: '130%', letterSpacing: '-0.16px' },
                'button': { color: 'rgb(29, 79, 145)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '20px', fontStyle: 'normal', fontWeight: '600', lineHeight: '70%' },
                '.list-handle-content .slick-list h4': { color: 'rgb(29, 79, 145)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '18px', fontStyle: 'normal', fontWeight: '500', lineHeight: '100%', letterSpacing: '-0.72px' },
                '.list-handle-content .slick-list h4+p': { color: 'rgb(29, 79, 145)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '16px', fontStyle: 'normal', fontWeight: '500', lineHeight: '130%', letterSpacing: '-0.16px' }
            }
        },
        {
            selector: '.mod-icon-and-text-card',
            items: {
                'h2': { color: 'rgb(29, 79, 145)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '36px', fontStyle: 'normal', fontWeight: '600', lineHeight: '120%', letterSpacing: '-1.08px' },
                'p': { color: 'rgb(105, 119, 134)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '18px', fontStyle: 'normal', fontWeight: '500', lineHeight: '120%', letterSpacing: '-0.18px' }
            }
        },
        {
            selector: '.wp-block-gravity-full-width-image-with-cta',
            items: {
                'h4.has-h2-font-size': { color: 'rgb(255, 255, 255)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '36px', fontStyle: 'normal', fontWeight: '600', lineHeight: '120%', letterSpacing: '-1.08px' },
                'a': { color: 'rgb(255, 255, 255)', fontFamily: 'tt-commons-pro, system-ui, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: '600', lineHeight: '130%', letterSpacing: '0.14px', textTransform: 'uppercase' }
            }
        }
    ]
}];

// Function to convert camelCase to kebab-case
function camelToKebabCase(str) {
    return str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
}

// Function to check styles
function checkStyles() {
    const MD = pages[0].MD;

    // Create CSS for tooltip
    const style = document.createElement('style');
    style.innerHTML = `
    .custom-tooltip {
        position: absolute;
        background-color: rgba(255, 0, 0, 0.9);
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        z-index: 1000;
        pointer-events: none;
        font-size: 12px;
        max-width: 250px;
        word-wrap: break-word;
    }
    `;
    document.head.appendChild(style);

    MD.forEach(module => {
        const parentSelector = module.selector;
        const items = module.items;

        // For each item in items:
        for (const [itemSelector, expectedStyles] of Object.entries(items)) {
            // For each parent element matching parentSelector:
            document.querySelectorAll(parentSelector).forEach(parentElement => {
                // For each element matching itemSelector within parentElement:
                parentElement.querySelectorAll(itemSelector).forEach(element => {
                    // Get computed styles
                    const computedStyles = window.getComputedStyle(element);

                    // Compare styles
                    let hasDifference = false;
                    let differences = '';

                    for (const [property, expectedValue] of Object.entries(expectedStyles)) {
                        let computedValue = computedStyles.getPropertyValue(camelToKebabCase(property));
                        computedValue = computedValue.trim();

                        if (property === 'lineHeight') {
                            // Convert expected line-height percentage to pixels
                            let expectedLineHeightPx;
                            if (expectedValue.endsWith('%')) {
                                const percentage = parseFloat(expectedValue) / 100;
                                let fontSize = computedStyles.getPropertyValue('font-size');
                                fontSize = parseFloat(fontSize); // Assuming fontSize is in px
                                expectedLineHeightPx = fontSize * percentage;
                                expectedLineHeightPx = expectedLineHeightPx.toFixed(2) + 'px';
                            } else {
                                expectedLineHeightPx = expectedValue;
                            }

                            // Convert computed line-height to pixels if possible
                            let computedLineHeightPx = computedValue;
                            if (computedValue === 'normal') {
                                // 'normal' is typically 1.2 times the font size
                                let fontSize = computedStyles.getPropertyValue('font-size');
                                fontSize = parseFloat(fontSize);
                                computedLineHeightPx = (fontSize * 1.2).toFixed(2) + 'px';
                            }

                            // If computed line-height is a number without units, multiply by font size
                            if (/^[0-9.]+$/.test(computedValue)) {
                                let fontSize = computedStyles.getPropertyValue('font-size');
                                fontSize = parseFloat(fontSize);
                                computedLineHeightPx = (parseFloat(computedValue) * fontSize).toFixed(2) + 'px';
                            }

                            // Compare expected and computed line-height in pixels
                            if (Math.abs(parseFloat(computedLineHeightPx) - parseFloat(expectedLineHeightPx)) > 0.1) {
                                hasDifference = true;
                                differences += `${property}: expected "${expectedLineHeightPx}", got "${computedLineHeightPx}"\n`;
                            }
                        } else {
                            // For other properties, compare directly
                            if (computedValue !== expectedValue) {
                                hasDifference = true;
                                differences += `${property}: expected "${expectedValue}", got "${computedValue}"\n`;
                            }
                        }
                    }

                    if (hasDifference) {
                        // Make element background red
                        element.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';

                        // Create tooltip element
                        const tooltip = document.createElement('div');
                        tooltip.classList.add('custom-tooltip');
                        tooltip.innerText = differences;

                        // Position the tooltip
                        const showTooltip = (event) => {
                            document.body.appendChild(tooltip);
                            const rect = element.getBoundingClientRect();
                            const tooltipRect = tooltip.getBoundingClientRect();

                            let top = rect.top + window.scrollY - tooltipRect.height - 5;
                            if (top < 0) {
                                top = rect.bottom + window.scrollY + 5;
                            }

                            let left = rect.left + window.scrollX + (rect.width - tooltipRect.width) / 2;
                            if (left < 0) {
                                left = rect.left + window.scrollX;
                            } else if (left + tooltipRect.width > window.innerWidth) {
                                left = rect.right + window.scrollX - tooltipRect.width;
                            }

                            tooltip.style.left = `${left}px`;
                            tooltip.style.top = `${top}px`;
                        };

                        const hideTooltip = () => {
                            if (tooltip.parentNode) {
                                tooltip.parentNode.removeChild(tooltip);
                            }
                        };

                        // Add event listeners
                        element.addEventListener('mouseenter', showTooltip);
                        element.addEventListener('mouseleave', hideTooltip);
                    }else{
                        element.style.backgroundColor = 'rgba(0, 255, 0, 0.3)'; 
                    }
                });
            });
        }
    });
}

// Run the style check
checkStyles();