// ==========================================================================
// Policy Database (Local Context)
// ==========================================================================
const POLICIES_DATABASE = {
    hr: [
        {
            id: "hr-conduct",
            title: "Code of Conduct & Professional Behavior",
            categoryLabel: "HR Policy",
            keywords: ["conduct", "behavior", "harassment", "respect", "dress code", "ethics", "professionalism", "share client data", "confidentiality", "security", "share", "client", "data", "protect", "information leakage"],
            content: `Our company is committed to maintaining a professional, respectful, and safe work environment. All employees must adhere to these standards:
            <ul>
                <li><strong>Mutual Respect:</strong> Zero tolerance for harassment, discrimination, or bullying of any kind.</li>
                <li><strong>Ethics:</strong> Employees must perform duties with integrity, honesty, and transparency. Avoid any conflict of interest.</li>
                <li><strong>Dress Code:</strong> Smart casual attire is expected from Monday to Thursday. Fridays are casual dress days.</li>
                <li><strong>Confidentiality:</strong> Proprietary company data, client details, and employee records must be protected and never shared externally without authorization.</li>
            </ul>`
        },
        {
            id: "hr-benefits",
            title: "Employee Benefits & Wellness Programs",
            categoryLabel: "HR Policy",
            keywords: ["benefits", "insurance", "health", "wellness", "gym", "medical", "provident fund", "pf", "allowance", "stipend", "doctor", "money", "salary"],
            content: `We offer a comprehensive benefits package to support employees' physical, mental, and financial health:
            <ul>
                <li><strong>Medical Insurance:</strong> Family health insurance coverage up to $10,000 annually, covering spouse and up to two children.</li>
                <li><strong>Wellness Stipend:</strong> A monthly wellness stipend of $50 for gym memberships, yoga classes, or mental health counseling apps.</li>
                <li><strong>Provident Fund (PF):</strong> The company matches up to 5% of basic salary contributions to the retirement fund.</li>
                <li><strong>Learning Budget:</strong> An annual allowance of $500 for courses, certifications, and textbooks.</li>
            </ul>`
        }
    ],
    leave: [
        {
            id: "leave-types",
            title: "Leave Allocation & Types of Leaves",
            categoryLabel: "Leave Policy",
            keywords: ["leaves", "paid leaves", "sick leave", "casual leave", "maternity", "paternity", "vacation", "cl", "sl", "parental", "father", "mother", "off"],
            content: `Employees receive a total of <strong>24 paid leaves</strong> per calendar year, accrued monthly (2 leaves per month). The breakdown is as follows:
            <ul>
                <li><strong>Casual Leave (CL):</strong> 8 days for personal matters. Maximum 3 consecutive days allowed.</li>
                <li><strong>Sick Leave (SL):</strong> 8 days for medical recovery. A doctor's certificate is required for sick leave exceeding 2 consecutive days.</li>
                <li><strong>Earned Leave / Vacation:</strong> 8 days. Can be carried forward to the next year up to a maximum limit of 15 days.</li>
                <li><strong>Parental Leaves:</strong> Maternity leave of 26 paid weeks for birth mothers. Paternity leave of 4 paid weeks for new fathers.</li>
            </ul>`
        },
        {
            id: "leave-approval",
            title: "Leave Application & Approval Process",
            categoryLabel: "Leave Policy",
            keywords: ["apply leave", "leave request", "hr portal", "manager approval", "unplanned leave", "notice", "apply", "request", "approval"],
            content: `All planned leaves must be applied for and approved in advance:
            <ul>
                <li><strong>Notice Period:</strong> Leave requests of more than 3 days must be submitted on the HR portal at least 2 weeks in advance.</li>
                <li><strong>Manager Approval:</strong> All leave requests are subject to approval by your immediate manager based on project delivery demands.</li>
                <li><strong>Unplanned Leaves:</strong> In case of emergency or sudden sickness, notify your manager via email or Slack by 9:30 AM on the day of absence.</li>
            </ul>`
        }
    ],
    attendance: [
        {
            id: "attendance-timing",
            title: "Office Hours & Core Collaboration Time",
            categoryLabel: "Attendance Policy",
            keywords: ["timing", "hours", "late arrival", "grace period", "work hours", "attendance", "shift", "late", "delay", "office timings", "duration"],
            content: `The standard workweek is 40 hours (Monday through Friday).
            <ul>
                <li><strong>Office Hours:</strong> Standard working hours are 9:00 AM to 6:00 PM, including a 1-hour lunch break.</li>
                <li><strong>Core Hours:</strong> All employees must be online or in office during the core hours of 10:30 AM to 4:30 PM for meetings and collaboration.</li>
                <li><strong>Grace Period:</strong> A maximum of 3 late arrivals (after 9:30 AM) per month are permitted without salary deduction. Further delays require manager approval or will be deducted as half-day leave.</li>
            </ul>`
        }
    ],
    wfh: [
        {
            id: "wfh-guidelines",
            title: "Work From Home (WFH) & Hybrid Work Model",
            categoryLabel: "WFH Policy",
            keywords: ["wfh", "work from home", "hybrid", "remote", "allowance", "internet", "equipment", "reimbursement", "broadband", "wi-fi", "wifi", "chair", "laptop"],
            content: `We operate on a hybrid work structure designed to balance team collaboration and personal flexibility:
            <ul>
                <li><strong>Hybrid Rule:</strong> Employees are required to work from the office at least 3 days a week. Tuesdays and Thursdays are mandatory office days for all teams.</li>
                <li><strong>WFH Allowance:</strong> A one-time allowance of $200 is provided to set up a home office (chair, monitor, or keyboard).</li>
                <li><strong>Internet Reimbursement:</strong> Up to $30 monthly reimbursement for high-speed home broadband connection.</li>
                <li><strong>Core Expectation:</strong> During remote days, you must remain active on Slack, join scheduled virtual standups, and maintain a quiet, professional environment.</li>
            </ul>`
        }
    ],
    holidays: [
        {
            id: "holidays-list",
            title: "Annual Company Calendar & Public Holidays",
            categoryLabel: "Holidays",
            keywords: ["holidays", "christmas", "new year", "diwali", "thanksgiving", "national holiday", "festivals", "floating holiday", "calendar", "festival"],
            content: `The company observes <strong>10 paid public holidays</strong> each year. The general holiday schedule includes:
            <ul>
                <li>New Year's Day (January 1st)</li>
                <li>Memorial Day (Last Monday of May)</li>
                <li>Independence Day (July 4th)</li>
                <li>Labor Day (First Monday of September)</li>
                <li>Diwali (Festival Holiday - Date Varies)</li>
                <li>Thanksgiving Day (Fourth Thursday of November)</li>
                <li>Christmas Day (December 25th)</li>
                <li>3 Optional Floating Holidays (chosen by the employee, subject to team approval).</li>
            </ul>`
        }
    ]
};

// Flatten policies for easier search indexing
const FLATTENED_POLICIES = [];
Object.keys(POLICIES_DATABASE).forEach(category => {
    POLICIES_DATABASE[category].forEach(policy => {
        FLATTENED_POLICIES.push({
            ...policy,
            category
        });
    });
});

// ==========================================================================
// Application State
// ==========================================================================
const state = {
    apiKey: localStorage.getItem('gemini_api_key') || '',
    activeCategory: 'all',
    theme: localStorage.getItem('app_theme') || 'dark',
    recognition: null,
    isListening: false,
    typingInterval: null
};

// ==========================================================================
// DOM Cache Elements
// ==========================================================================
const DOM = {
    body: document.body,
    sidebar: document.getElementById('appSidebar'),
    hamburgerMenu: document.getElementById('hamburgerMenu'),
    mobileCloseBtn: document.getElementById('mobileCloseBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    statusLabel: document.getElementById('statusLabel'),
    aiStatusBadge: document.getElementById('aiStatusBadge'),
    openSettingsBtn: document.getElementById('openSettingsBtn'),
    closeSettingsBtn: document.getElementById('closeSettingsBtn'),
    settingsModal: document.getElementById('settingsModal'),
    geminiApiKeyInput: document.getElementById('geminiApiKey'),
    togglePasswordBtn: document.getElementById('togglePasswordBtn'),
    saveApiBtn: document.getElementById('saveApiBtn'),
    clearApiBtn: document.getElementById('clearApiBtn'),
    searchInput: document.getElementById('searchInput'),
    voiceSearchBtn: document.getElementById('voiceSearchBtn'),
    searchSubmitBtn: document.getElementById('searchSubmitBtn'),
    voiceIndicator: document.getElementById('voiceIndicator'),
    voiceStatusText: document.getElementById('voiceStatusText'),
    welcomeSection: document.getElementById('welcomeSection'),
    responseSection: document.getElementById('responseSection'),
    displayQueryText: document.getElementById('displayQueryText'),
    skeletonLoader: document.getElementById('skeletonLoader'),
    aiResponseText: document.getElementById('aiResponseText'),
    citationBadges: document.getElementById('citationBadges'),
    btnThumbsUp: document.getElementById('btn-thumbs-up'),
    btnThumbsDown: document.getElementById('btn-thumbs-down'),
    policyGrid: document.getElementById('policyGrid'),
    feedbackToast: document.getElementById('feedbackToast'),
    toastMessage: document.getElementById('toastMessage'),
    navLinks: document.querySelectorAll('.nav-link'),
    suggestionChips: document.querySelectorAll('.chip')
};

// ==========================================================================
// Initializations & Initialization Logic
// ==========================================================================
function init() {
    setupTheme();
    updateAIStatusUI();
    renderPolicyDatabase();
    setupSpeechRecognition();
    bindEvents();
}

// Set up default theme on load
function setupTheme() {
    if (state.theme === 'light') {
        DOM.body.classList.remove('dark-theme');
        DOM.body.classList.add('light-theme');
        DOM.themeToggleBtn.querySelector('.theme-icon').className = 'fa-solid fa-sun theme-icon';
        DOM.themeToggleBtn.querySelector('.theme-text').textContent = 'Light Mode';
    } else {
        DOM.body.classList.remove('light-theme');
        DOM.body.classList.add('dark-theme');
        DOM.themeToggleBtn.querySelector('.theme-icon').className = 'fa-solid fa-moon theme-icon';
        DOM.themeToggleBtn.querySelector('.theme-text').textContent = 'Dark Mode';
    }
}

// Update the Top Indicator Badge depending on API Key Presence
function updateAIStatusUI() {
    const indicator = DOM.aiStatusBadge.querySelector('.status-indicator');
    if (state.apiKey) {
        indicator.className = 'status-indicator gemini';
        DOM.statusLabel.textContent = 'Gemini Generative AI Mode';
        DOM.geminiApiKeyInput.value = state.apiKey;
    } else {
        indicator.className = 'status-indicator local';
        DOM.statusLabel.textContent = 'Offline Matching Mode';
        DOM.geminiApiKeyInput.value = '';
    }
}

// Render policy list in grid below
function renderPolicyDatabase() {
    DOM.policyGrid.innerHTML = '';
    
    const filteredPolicies = state.activeCategory === 'all' 
        ? FLATTENED_POLICIES 
        : FLATTENED_POLICIES.filter(p => p.category === state.activeCategory);

    if (filteredPolicies.length === 0) {
        DOM.policyGrid.innerHTML = `<div class="info-alert"><p>No policy details found for this category.</p></div>`;
        return;
    }

    filteredPolicies.forEach(policy => {
        const card = document.createElement('article');
        card.className = 'policy-card';
        card.id = `card-${policy.id}`;
        card.innerHTML = `
            <div class="policy-card-header">
                <div class="policy-card-title">
                    <i class="fa-solid fa-file-shield"></i>
                    <h3>${policy.title}</h3>
                </div>
                <span class="policy-tag">${policy.categoryLabel}</span>
            </div>
            <div class="policy-card-content">
                ${policy.content}
            </div>
        `;
        DOM.policyGrid.appendChild(card);
    });
}

// Set up HTML5 Web Speech API
function setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        DOM.voiceSearchBtn.style.display = 'none';
        console.log('Web Speech Recognition API is not supported in this browser.');
        return;
    }

    state.recognition = new SpeechRecognition();
    state.recognition.continuous = false;
    state.recognition.lang = 'en-US';
    state.recognition.interimResults = false;
    state.recognition.maxAlternatives = 1;

    state.recognition.onstart = () => {
        state.isListening = true;
        DOM.voiceSearchBtn.classList.add('active');
        DOM.voiceIndicator.classList.remove('hidden');
        DOM.voiceStatusText.textContent = "Listening... Speak your policy query now";
    };

    state.recognition.onresult = (event) => {
        const voiceQuery = event.results[0][0].transcript;
        DOM.searchInput.value = voiceQuery;
        showToast("Voice query detected!");
        handleQuerySubmit(voiceQuery);
    };

    state.recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        DOM.voiceStatusText.textContent = `Error: ${event.error}. Try again.`;
        setTimeout(() => {
            stopVoiceListening();
        }, 2000);
    };

    state.recognition.onend = () => {
        stopVoiceListening();
    };
}

function stopVoiceListening() {
    state.isListening = false;
    DOM.voiceSearchBtn.classList.remove('active');
    DOM.voiceIndicator.classList.add('hidden');
}

// ==========================================================================
// Event Binding
// ==========================================================================
function bindEvents() {
    // Responsive Navigation Sidebar
    DOM.hamburgerMenu.addEventListener('click', () => {
        DOM.sidebar.classList.add('active');
    });

    DOM.mobileCloseBtn.addEventListener('click', () => {
        DOM.sidebar.classList.remove('active');
    });

    // Theme Toggle Click Handler
    DOM.themeToggleBtn.addEventListener('click', () => {
        if (DOM.body.classList.contains('dark-theme')) {
            state.theme = 'light';
        } else {
            state.theme = 'dark';
        }
        localStorage.setItem('app_theme', state.theme);
        setupTheme();
    });

    // Category Filter Selection
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            DOM.navLinks.forEach(l => l.classList.remove('active'));
            
            const button = e.currentTarget;
            button.classList.add('active');
            state.activeCategory = button.getAttribute('data-category');
            renderPolicyDatabase();
            
            // Close mobile menu if open
            DOM.sidebar.classList.remove('active');
        });
    });

    // Settings Modal Show / Hide
    DOM.openSettingsBtn.addEventListener('click', () => {
        DOM.settingsModal.classList.remove('hidden');
    });

    const closeModal = () => {
        DOM.settingsModal.classList.add('hidden');
    };
    DOM.closeSettingsBtn.addEventListener('click', closeModal);
    DOM.settingsModal.addEventListener('click', (e) => {
        if (e.target === DOM.settingsModal) closeModal();
    });

    // Password view toggle
    DOM.togglePasswordBtn.addEventListener('click', () => {
        const type = DOM.geminiApiKeyInput.getAttribute('type') === 'password' ? 'text' : 'password';
        DOM.geminiApiKeyInput.setAttribute('type', type);
        const icon = DOM.togglePasswordBtn.querySelector('i');
        icon.className = type === 'password' ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
    });

    // Save and Clear API Keys in Settings
    DOM.saveApiBtn.addEventListener('click', () => {
        const key = DOM.geminiApiKeyInput.value.trim();
        if (key) {
            state.apiKey = key;
            localStorage.setItem('gemini_api_key', key);
            showToast("Gemini API key saved successfully!");
        } else {
            state.apiKey = '';
            localStorage.removeItem('gemini_api_key');
            showToast("API key removed. Running in offline matching mode.");
        }
        updateAIStatusUI();
        closeModal();
    });

    DOM.clearApiBtn.addEventListener('click', () => {
        state.apiKey = '';
        localStorage.removeItem('gemini_api_key');
        DOM.geminiApiKeyInput.value = '';
        updateAIStatusUI();
        showToast("Gemini API key cleared.");
        closeModal();
    });

    // Voice Search Click Handlers
    DOM.voiceSearchBtn.addEventListener('click', () => {
        if (!state.recognition) return;
        if (state.isListening) {
            state.recognition.stop();
        } else {
            state.recognition.start();
        }
    });

    // Search query submit
    DOM.searchSubmitBtn.addEventListener('click', () => {
        handleQuerySubmit(DOM.searchInput.value);
    });

    DOM.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleQuerySubmit(DOM.searchInput.value);
        }
    });

    // Suggestion Chips Click
    DOM.suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-query');
            DOM.searchInput.value = query;
            handleQuerySubmit(query);
        });
    });

    // Feedback actions
    DOM.btnThumbsUp.addEventListener('click', () => {
        DOM.btnThumbsUp.classList.toggle('active');
        DOM.btnThumbsDown.classList.remove('active');
        if (DOM.btnThumbsUp.classList.contains('active')) {
            showToast("Thank you for your helpful feedback!");
        }
    });

    DOM.btnThumbsDown.addEventListener('click', () => {
        DOM.btnThumbsDown.classList.toggle('active');
        DOM.btnThumbsUp.classList.remove('active');
        if (DOM.btnThumbsDown.classList.contains('active')) {
            showToast("Feedback noted. We will train our AI to improve.");
        }
    });
}

// ==========================================================================
// Core Query Execution Engine
// ==========================================================================
function handleQuerySubmit(query) {
    query = query.trim();
    if (!query) return;

    // Reset feedback buttons
    DOM.btnThumbsUp.classList.remove('active');
    DOM.btnThumbsDown.classList.remove('active');

    // Display Query Text & Adjust Views
    DOM.welcomeSection.classList.add('hidden');
    DOM.responseSection.classList.remove('hidden');
    DOM.displayQueryText.textContent = query;
    
    // Reset output text, show loader
    DOM.aiResponseText.innerHTML = '';
    DOM.citationBadges.innerHTML = '';
    DOM.skeletonLoader.classList.remove('hidden');

    if (state.typingInterval) clearInterval(state.typingInterval);

    // Call Local or Remote API depending on settings
    if (state.apiKey) {
        queryGeminiAI(query);
    } else {
        queryLocalSemanticEngine(query);
    }
}

// --------------------------------------------------------------------------
// Local Semantic NLP Fallback Engine
// --------------------------------------------------------------------------
function queryLocalSemanticEngine(query) {
    // Normalization & Stop words filtration (improved for policy context search)
    const stopWords = new Set([
        "what", "is", "the", "how", "many", "do", "i", "get", "a", "an", "of", "to", "for", 
        "in", "on", "at", "about", "are", "we", "can", "company", "policy", "policies", 
        "please", "help", "information", "rules", "tell", "show", "me", "find", "search"
    ]);
    const queryTokens = query.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(token => token.length > 1 && !stopWords.has(token));

    let bestMatch = null;
    let highestScore = -1;

    FLATTENED_POLICIES.forEach(policy => {
        let score = 0;
        const titleText = policy.title.toLowerCase();
        const contentText = policy.content.toLowerCase().replace(/<[^>]*>/g, ' '); // Strip HTML tags for clean scoring

        queryTokens.forEach(token => {
            // 1. Keyword matching - Highest Weight if matches exactly
            policy.keywords.forEach(kw => {
                const cleanKw = kw.toLowerCase();
                if (cleanKw === token) {
                    score += 8; // Exact keyword match (e.g. "share", "client", "data")
                } else if (cleanKw.includes(token)) {
                    score += 4; // Substring keyword match
                }
            });

            // 2. Title matching - High Weight
            const titleWords = titleText.split(/\s+/);
            if (titleWords.includes(token)) {
                score += 6; // Exact word matches a word in title
            } else if (titleText.includes(token)) {
                score += 3;
            }

            // 3. Content matching - Density Weight
            if (contentText.includes(token)) {
                const words = contentText.split(/\s+/);
                let occurrences = 0;
                words.forEach(w => {
                    if (w.includes(token)) occurrences++;
                });
                score += Math.min(occurrences, 4) * 1.5; // Up to 6 points for high density
            }
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = policy;
        }
    });

    // Simulate Network Latency of 600ms before outputting matching data
    setTimeout(() => {
        DOM.skeletonLoader.classList.add('hidden');

        let responseText = "";
        let citations = [];

        if (highestScore > 1.5 && bestMatch) { // Threshold adjusted slightly to prevent low-score garbage matches
            // Formatting output to sound like an assistant summarizing
            responseText = `Based on our company's <strong>${bestMatch.categoryLabel} (${bestMatch.title})</strong>:<br><br>
            ${bestMatch.content}<br><br>
            <em>Please check the highlighted section below for full official clauses. If you need special accommodations, write to the HR desk directly.</em>`;
            citations.push(bestMatch);
        } else {
            responseText = `I couldn't find a specific policy match for your query: "<em>${query}</em>". <br><br>
            Here is what you can do:
            <ul>
                <li>Double check your spelling or try search terms like <strong>"leaves"</strong>, <strong>"wfh"</strong>, or <strong>"office timings"</strong>.</li>
                <li>Explore the specific sections using the category filter buttons in the sidebar on the left.</li>
                <li>Input your own Google Gemini API key by clicking the <strong>AI Settings</strong> gear button on the top right to enable generalized cognitive queries.</li>
            </ul>`;
            // Add all policies as general backup citations
            citations = FLATTENED_POLICIES.slice(0, 2);
        }

        typewriterStreamEffect(DOM.aiResponseText, responseText, citations);
    }, 600);
}

// --------------------------------------------------------------------------
// Real Google Gemini API Call
// --------------------------------------------------------------------------
async function queryGeminiAI(query) {
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${state.apiKey}`;

    // Structure Context mapping all database contents
    const companyContextText = FLATTENED_POLICIES.map(p => {
        return `Category: ${p.categoryLabel}
Title: ${p.title}
Reference ID: ${p.id}
Rules Details: ${p.content.replace(/<[^>]*>/g, '')}`; // strip HTML tags for cleaner AI context
    }).join('\n\n');

    const promptText = `You are a helpful and polite corporate assistant answering internal employee policy inquiries.
Use ONLY the company policy context guidelines below to answer the user's question accurately.
If the answer is NOT present or implied in the company policies, say: "I cannot find a direct answer to this in our current policy manual. Please contact the HR department or your manager directly."
Do not make up facts or add outside details not related to the policies context.
Organize your response nicely using bullet points and bold formatting where appropriate. Make it professional and easy to read.

---
COMPANY POLICY CONTEXT DATABASE:
${companyContextText}
---

USER QUESTION:
"${query}"

RESPONSE:`;

    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: promptText
                    }
                ]
            }
        ]
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || `HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        DOM.skeletonLoader.classList.add('hidden');

        // Extract Gemini text response
        let aiResultText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (!aiResultText) {
            throw new Error("Empty response received from the Gemini AI model.");
        }

        // Convert simple markdown elements (bolding, lists) to HTML elements
        let formattedHtml = parseSimpleMarkdownToHtml(aiResultText);

        // Figure out which policies were referenced in this answer by analyzing text or matching IDs
        const citedPolicies = [];
        FLATTENED_POLICIES.forEach(policy => {
            const checkTitle = policy.title.toLowerCase().replace(/[^a-z0-9]/g, '');
            const checkCategory = policy.categoryLabel.toLowerCase();
            const responseClean = aiResultText.toLowerCase().replace(/[^a-z0-9]/g, '');
            
            if (responseClean.includes(policy.id.toLowerCase()) || 
                responseClean.includes(checkTitle) || 
                (responseClean.includes(checkCategory) && responseClean.includes(policy.keywords[0]))) {
                citedPolicies.push(policy);
            }
        });

        // Default to first match if no explicit match detected
        if (citedPolicies.length === 0) {
            // Try matching keywords
            FLATTENED_POLICIES.forEach(p => {
                let matches = 0;
                p.keywords.forEach(kw => {
                    if (query.toLowerCase().includes(kw)) matches++;
                });
                if (matches > 0 && citedPolicies.length < 2) {
                    citedPolicies.push(p);
                }
            });
        }

        typewriterStreamEffect(DOM.aiResponseText, formattedHtml, citedPolicies);

    } catch (error) {
        console.error("Gemini API Error:", error);
        DOM.skeletonLoader.classList.add('hidden');
        
        showToast("Gemini API failed! Falling back to offline matching engine.");
        // Mark key as faulty and fallback
        queryLocalSemanticEngine(query);
    }
}

// --------------------------------------------------------------------------
// UI Typwriter & Formatting Helpers
// --------------------------------------------------------------------------

// Parse basic markdown patterns (**bold**, *italics*, lists) to HTML
function parseSimpleMarkdownToHtml(markdownText) {
    let html = markdownText
        // Replace bold notation
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Replace italic notation
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Replace code snippets
        .replace(/`(.*?)`/g, '<code style="font-family: JetBrains Mono; background: var(--bg-input); padding: 2px 4px; border-radius: 4px;">$1</code>')
        // Clean linebreaks to HTML breaks
        .replace(/\n/g, '<br>');

    // Replace markdown lists with actual HTML tags
    html = html.replace(/(?:<br>\s*-\s+(.*?)(?=<br>|$))/g, '<br><li>$1</li>');
    // Wrap bullet lines with UL if bullet tags are present
    if (html.includes('<li>')) {
        // Simple regex replace for lists block structure
        html = html.replace(/(<li>.*?<\/li>)/g, '<ul>$1</ul>');
        // Clean duplicate adjacent uls
        html = html.replaceAll('</ul><br><ul>', '');
        html = html.replaceAll('</ul><ul>', '');
    }

    return html;
}

// Streams response character by character
function typewriterStreamEffect(targetElement, fullHtml, citations) {
    let index = 0;
    targetElement.innerHTML = '<span class="typing-cursor"></span>';
    
    // We will inject letters, taking care of not splitting HTML tags.
    // To make it easy, we split the HTML into tokens (tags vs text strings)
    const tokens = tokenizeHtml(fullHtml);
    let currentHtml = "";

    state.typingInterval = setInterval(() => {
        if (index < tokens.length) {
            currentHtml += tokens[index];
            targetElement.innerHTML = currentHtml + '<span class="typing-cursor"></span>';
            index++;
            
            // Scroll down chat viewport slightly if needed
            DOM.responseSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            clearInterval(state.typingInterval);
            targetElement.innerHTML = currentHtml; // Remove cursor
            renderCitations(citations);
        }
    }, 12); // fast streaming speed
}

// Helper to split HTML string into array of tags and content tokens so tags print immediately
function tokenizeHtml(html) {
    const tokens = [];
    let i = 0;
    while (i < html.length) {
        if (html[i] === '<') {
            let tag = "";
            while (i < html.length && html[i] !== '>') {
                tag += html[i];
                i++;
            }
            if (i < html.length) {
                tag += '>';
                i++;
            }
            tokens.push(tag);
        } else {
            tokens.push(html[i]);
            i++;
        }
    }
    return tokens;
}

// Renders the citations at the bottom of the response block
function renderCitations(citations) {
    DOM.citationBadges.innerHTML = '';
    
    if (citations.length === 0) {
        DOM.citationBadges.innerHTML = '<span style="font-size:0.8rem; color:var(--text-muted);">Self-inferred response</span>';
        return;
    }

    citations.forEach(policy => {
        const badge = document.createElement('span');
        badge.className = 'badge-citation';
        badge.textContent = `${policy.categoryLabel}: ${policy.title.substring(0, 15)}...`;
        badge.title = `Click to view full: ${policy.title}`;
        
        badge.addEventListener('click', () => {
            // Scroll to the card
            const card = document.getElementById(`card-${policy.id}`);
            if (card) {
                // Change category tab if not visible
                if (state.activeCategory !== 'all' && state.activeCategory !== policy.category) {
                    // Trigger sidebar click
                    const sideButton = document.getElementById(`btn-cat-${policy.category}`);
                    if (sideButton) sideButton.click();
                }
                
                setTimeout(() => {
                    const targetCard = document.getElementById(`card-${policy.id}`);
                    if (targetCard) {
                        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        targetCard.classList.add('highlight');
                        showToast(`Scrolling to: ${policy.title}`);
                        setTimeout(() => {
                            targetCard.classList.remove('highlight');
                        }, 2500);
                    }
                }, 200);
            }
        });

        DOM.citationBadges.appendChild(badge);
    });
}

// Toast alerts helper
function showToast(message) {
    DOM.toastMessage.textContent = message;
    DOM.feedbackToast.classList.remove('hidden');
    
    // Animate out after 3 seconds
    setTimeout(() => {
        DOM.feedbackToast.classList.add('hidden');
    }, 3000);
}

// Start application initialization on script load
window.addEventListener('DOMContentLoaded', init);
