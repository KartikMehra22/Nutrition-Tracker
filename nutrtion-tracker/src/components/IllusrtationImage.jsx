function IllustrationImage() {
return (
    <svg width="300" height="300" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(100, 50)">
        <rect x="200" y="100" width="400" height="400" rx="20" fill="#f5f5f5" opacity="0.3" />

        <g transform="translate(300, 200)">

        <path
            d="M0,150 C-20,100 -30,50 -20,0 C-10,-50 20,-80 50,-70 C80,-60 90,-30 90,0 C90,30 80,80 60,130 C40,180 20,200 0,150 Z"
            fill="#4CAF50"
        />

        <circle cx="40" cy="-100" r="40" fill="#8D5524" />

        <circle cx="30" cy="-110" r="5" fill="#333" />
        <circle cx="50" cy="-110" r="5" fill="#333" />
        <path d="M30,-90 Q40,-80 50,-90" stroke="#333" strokeWidth="2" fill="none" />

        <path d="M-20,0 C-40,20 -60,50 -100,30" stroke="#8D5524" strokeWidth="20" strokeLinecap="round" />
        <path d="M90,0 C110,20 130,50 170,30" stroke="#8D5524" strokeWidth="20" strokeLinecap="round" />

        <path d="M0,150 C-10,200 -20,250 -30,300" stroke="#333" strokeWidth="20" strokeLinecap="round" />
        <path d="M60,130 C70,180 80,230 90,280" stroke="#333" strokeWidth="20" strokeLinecap="round" />
        </g>

        <ellipse cx="400" cy="230" rx="60" ry="30" fill="#e0e0e0" />
        <ellipse cx="400" cy="220" rx="50" ry="25" fill="#f5f5f5" />

        <circle cx="380" cy="210" r="10" fill="#4CAF50" />
        <circle cx="400" cy="215" r="8" fill="#8BC34A" />
        <circle cx="420" cy="210" r="12" fill="#4CAF50" />
        <circle cx="390" cy="200" r="7" fill="#8BC34A" />
        <circle cx="410" cy="200" r="9" fill="#4CAF50" />

        <path
        d="M500,150 C530,150 550,130 550,100 C550,70 530,50 500,50 C470,50 450,70 450,100 C450,130 470,150 500,150 Z"
        fill="white"
        stroke="#e0e0e0"
        strokeWidth="2"
        />
        <path d="M470,150 L460,180 L480,150" fill="white" stroke="#e0e0e0" strokeWidth="2" />

        <path
        d="M500,120 L510,110 C520,100 535,110 530,125 C525,140 500,150 500,150 C500,150 475,140 470,125 C465,110 480,100 490,110 Z"
        fill="#4CAF50"
        />

        <rect x="500" y="200" width="50" height="50" rx="5" fill="white" stroke="#e0e0e0" strokeWidth="2" />
        <rect x="500" y="270" width="50" height="50" rx="5" fill="white" stroke="#e0e0e0" strokeWidth="2" />
        <rect x="500" y="340" width="50" height="50" rx="5" fill="white" stroke="#e0e0e0" strokeWidth="2" />

        <rect x="250" y="350" width="80" height="40" rx="5" fill="white" stroke="#e0e0e0" strokeWidth="2" />
        <path d="M260,350 C260,330 270,320 290,320 C310,320 320,330 320,350" fill="#8BC34A" />

        <path
        d="M600,350 C580,350 570,330 570,310 C570,290 580,270 600,270 C620,270 630,290 630,310 C630,330 620,350 600,350 Z"
        fill="#4CAF50"
        opacity="0.5"
        />
        <rect x="595" y="270" width="10" height="30" fill="white" opacity="0.8" />
    </g>
    </svg>
)
}

export default IllustrationImage
