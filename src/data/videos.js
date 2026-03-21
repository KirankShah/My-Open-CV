// VIDEOS DATA - Edit this file to update your video portfolio
export const videosData = [
  {
    id: 2,
    title: "Blockchain-Based CDD/EDD Compliance Prototype",
    category: "Blockchain | Compliance Technology",
    description: "Ethereum, Solidity, and React proof-of-concept for immutable customer due diligence records with automated enhanced due diligence triggers and tamper-proof audit trails.",
    featured: false,
    thumbnail: "/images/projects/smart_contract_project.jpg",
    technologies: ["Ethereum", "Solidity", "React", "Blockchain"],
    features: [
      "Immutable CDD record management",
      "Automated EDD trigger logic",
      "Tamper-proof audit trail concept",
      "Demonstrates compliance-oriented blockchain use case"
    ],
    type: "youtube",
    youtubeId: "vxoXRdwfyrA",
    demoVideo: "https://youtu.be/vxoXRdwfyrA",
    youtubeLink: "https://youtu.be/vxoXRdwfyrA",
    githubLink: "https://github.com/KirankShah/aml-kyc-cdd-blockchain-prototype",
    liveDemo: "",
    metrics: [
      { label: "Architecture", value: "Proof of Concept" },
      { label: "Focus", value: "CDD/EDD" },
      { label: "Audit Trail", value: "Immutable" }
    ],
    status: "Completed",
    completionDate: "2025"
  },
  {
    id: 3,
    title: "How to Prevent Crowd Funding Platform being Misused for Terrorist and Proliferation Financing",
    category: "Financial Crime | Smart Contract",
    description: "Explation of Crowd Funding Platform is used to collection donations from individuals and entities in crypto which is later abused by terrorits and extremist group and explantions of preventive measures.",
    featured: false,
    thumbnail: "/images/projects/crowdfunding.png",
    technologies: ["Risk Assessment", "Terrorist Financing", "Solidity", "Ethereum"],
    features: [
      "Explanation of what crowd funding platform is and how it works",
      "Demonstration of actual donation based crowd funding platform",
      "Discussion regarding how such platform is misued for TF/PF",
      "Explanation of control measures to prevent abuse of such platform for TF/PF"
    ],
    type: "youtube",
    youtubeId: "pB4VbzGIAFo",
    demoVideo: "https://youtu.be/pB4VbzGIAFo",
    youtubeLink: "https://youtu.be/pB4VbzGIAFo",
    metrics: [
      { label: "Architecture", value: "Proof of Concept" },
      { label: "Focus", value: "Terrorist and Proliferation Financing" },
      { label: "Tools", value: "Solidity + Blockchain" }
    ],
    status: "Completed",
    completionDate: "2025"
  },
 
];

// INSTRUCTIONS FOR UPDATING VIDEOS:
// 
// FOR LOCAL VIDEO FILES:
// 1. Place your MP4 video file in /public/videos/ folder
// 2. Set type: "local"
// 3. Set videoPath to the file name (e.g., "/videos/my-video.mp4")
// 4. Add a thumbnail image in /public/images/videos/ folder
//
// FOR YOUTUBE VIDEOS:
// 1. Upload your video to YouTube
// 2. Get the video ID from the URL (e.g., in youtube.com/watch?v=ABC123, the ID is "ABC123")
// 3. Set type: "youtube"
// 4. Set youtubeId to the video ID
// 5. Thumbnail will be automatically fetched from YouTube
//
// GENERAL:
// - Set featured: true for your most important video (usually 1-2 max)
// - Add relevant tags for categorization
// - Duration format: "MM:SS" or "HH:MM:SS"
// - Categories can be: "Technical Demo", "Thought Leadership", "Tutorial", "Conference Talk", etc.
