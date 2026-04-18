# ☀️ Helios Solar Assistant

Helios is a sophisticated solar monitoring and optimization platform designed for modern residential estates. It combines a high-end, dark-themed aesthetic with powerful AI integrations to help users manage their renewable energy footprint.

![Helios Demo Placeholder](https://picsum.photos/seed/solar-energy/1200/600)

## 🌌 The Aesthetic
Helios follows a **Sophisticated Dark** design philosophy:
- **Typography**: Paired **Georgia** (italic serifs for headlines) with **Inter** (clean sans-serif for technical data).
- **Color Palette**: Deep Charcoal (`#050608`) background with vibrant **Solar Gold** (`#fdb813`) accents.
- **Glassmorphism**: UI components use semi-transparent surfaces with delicate borders and backdrop blurring.

## 🚀 Key Features
- **Intelligent Monitoring**: Real-time stats for output, grid offset, and storage.
- **n8n AI Integration**: A bespoke "Solar Assistant" powered by an n8n webhook workflow.
- **Animated Interaction**: A pulsing Floating Action Button (FAB) that programmatically toggles the assistant.
- **Adaptive Grid**: A clinical 2-column layout designed for professional technical overview.
- **Responsive Design**: Fluid layouts that scale from ultra-wide desktops to mobile devices.

## 🛠️ Tech Stack
- **Framework**: React 18+ with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Motion (by Framer)
- **Icons**: Lucide React
- **Integration**: n8n Chat (Embedded CDN)

## ⚙️ Configuration
The chatbot requires a valid n8n production webhook. You can update this in `index.html`:

```javascript
/* index.html */
window.n8nChat = createChat({
  webhookUrl: 'https://kabeersling.app.n8n.cloud/webhook/...',
  // ... other config
});
```

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

---
*Built with precision for the next century of energy.*
