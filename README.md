# NDIS Pricing Options Decision Tool

Interactive simulation tool for exploring cost-benefit implications of three pricing artifact distribution options during the OFP/NFP transition.

## Features

- **Real-time Calculations**: Results update instantly as parameters change
- **Scenario Management**: Save and load different parameter configurations
- **Export Capabilities**: Export results as JSON (PDF and Excel coming soon)
- **Password Protection**: Simple access control for sharing
- **Responsive Design**: Works on desktop and tablet devices

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:5173
```

### Docker (Local)

```bash
# Build and run with docker-compose
docker-compose up --build

# Access at http://localhost:4173
```

### Docker (Manual Build)

```bash
# Build the image
docker build -t ndis-simulator .

# Run the container
docker run -p 4173:4173 ndis-simulator

# Access at http://localhost:4173
```

## Deployment

### Deploy to Render

1. **Create new Web Service on Render**
   - Connect your GitHub repository
   - Choose "Docker" as the environment

2. **Configure Build Settings**
   - Build Command: `docker build -t ndis-simulator .`
   - Start Command: `docker run -p 4173:4173 ndis-simulator`

3. **Set Environment Variables** (if needed)
   - `NODE_ENV=production`

4. **Deploy**
   - Render will automatically build and deploy

### Deploy to Other Platforms

This is a standard React + Vite application that can be deployed to:
- **Vercel**: Connect GitHub repo, auto-detects Vite
- **Netlify**: Connect GitHub repo, build command `npm run build`
- **AWS Amplify**: Connect GitHub repo, auto-detects React
- **GitHub Pages**: Build locally, push `dist/` folder

## Project Structure

```
ndis-pricing-simulator/
├── src/
│   ├── components/          # React components
│   │   ├── PasswordGate.tsx
│   │   ├── ParameterInput.tsx
│   │   ├── SchemeScaleInputs.tsx
│   │   ├── ResultsComparison.tsx
│   │   ├── DerivedMetrics.tsx
│   │   ├── ScenarioManager.tsx
│   │   └── ExportTools.tsx
│   ├── lib/
│   │   ├── calculations/    # Core calculation engine
│   │   │   ├── derived.ts
│   │   │   ├── option1.ts
│   │   │   ├── option2.ts
│   │   │   ├── option3.ts
│   │   │   └── index.ts
│   │   ├── constants.ts     # Default parameters
│   │   └── utils.ts         # Helper functions
│   ├── store/
│   │   └── parametersStore.ts  # Zustand state management
│   ├── types/
│   │   └── index.ts         # TypeScript types
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles
├── Dockerfile
├── docker-compose.yml
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Usage

### Password

The tool is password-protected. Default password: `digitalPAPL2026`

To change the password, edit `src/lib/constants.ts`:
```typescript
export const PASSWORD = 'your-new-password';
```

### Parameter Adjustments

1. **Scheme Scale**: Core NDIS metrics (participants, payment flows)
2. **Current State**: Baseline costs and error rates
3. **Transition**: Duration and cost parameters
4. **Option 3**: Web tool and API adoption assumptions
5. **Risk Adjustments**: Complexity penalties and error increases

### Scenario Management

- **Save**: Store current parameters with a name
- **Load**: Restore previously saved scenarios
- **Delete**: Remove saved scenarios
- **Reset**: Return to default parameters

### Export

- **JSON**: Full parameters and results export
- **PDF**: Coming soon
- **Excel**: Coming soon

## Data Source

Based on NDIA Q1 2025-26 Quarterly Performance Dashboard:
- 751,446 active participants
- $49.5 billion in annual payment flows
- 273,673 active providers

## Calculation Methodology

### Derived Metrics
- **Annual Transactions** = Participants × Active Rate × Frequency × 52 weeks
- **Avg Transaction Value** = Annual Payments ÷ Transactions
- **Annual Lookups** = Transactions × 60% × 2

### Option 1: Separate Documents
- NDIA: $2.04M over 6 years (dual maintenance)
- Users: ~$288M (clarification + errors + training)
- **System Total: +$290M**

### Option 2: Unified Document
- NDIA: $1.76M over 6 years (single maintenance)
- Users: ~$394M (processing + errors + tools)
- **System Total: +$396M**

### Option 3: Layered Access
- NDIA: $1.24-1.44M net (after efficiency savings)
- Users: -$508M (net benefits from efficiency gains)
- **System Total: -$507M (net benefit)**

## Technology Stack

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling
- **Zustand**: State management
- **Lucide React**: Icons
- **Recharts**: Data visualization (coming soon)

## Development

### Prerequisites
- Node.js 20+
- npm 9+

### Scripts
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Adding New Parameters

1. Update types in `src/types/index.ts`
2. Add default values in `src/lib/constants.ts`
3. Add ranges in `src/lib/constants.ts`
4. Update calculations in `src/lib/calculations/`
5. Create input component in `src/components/`

## Future Enhancements

- [ ] Additional parameter sections (Current State, Transition, Option 3, Risk)
- [ ] Interactive charts (cost breakdown, cash flow, sensitivity analysis)
- [ ] PDF export with charts and tables
- [ ] Excel export with raw data
- [ ] Comparison mode (side-by-side scenarios)
- [ ] Sensitivity analysis (tornado diagrams)
- [ ] Risk heatmap visualization
- [ ] Mobile-optimized interface
- [ ] User authentication (proper)
- [ ] Cloud save (backend integration)

## Support

For questions or issues:
- Contact: Stuart (NDIA Markets Delivery Branch)
- Repository: [GitHub URL]

## License

Internal NDIA tool - Not for public distribution
