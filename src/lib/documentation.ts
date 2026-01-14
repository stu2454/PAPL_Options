// Comprehensive tooltip documentation for all parameters

export const PARAMETER_DOCUMENTATION = {
  schemeScale: {
    activeParticipants: {
      label: "Active Participants",
      description: "Number of active NDIS participants with approved plans",
      source: "NDIA Q1 2025-26 Quarterly Dashboard (30 September 2025)",
      defaultValue: "751,446",
      formula: "Direct count from dashboard data",
      impact: "Directly affects transaction volume calculations. Higher participant numbers increase total transactions, lookups, and system-wide costs proportionally.",
    },
    annualPaymentFlows: {
      label: "Annual Payment Flows",
      description: "Total annual payments flowing through plan managers to providers",
      source: "NDIA Q1 2025-26 Quarterly Dashboard - Average annual payment per participant ($65,800) × Active participants",
      defaultValue: "$49.5 billion",
      formula: "751,446 participants × $65,800 average = $49.5B",
      impact: "Represents dollar value at risk. Version control errors and pricing discrepancies are calculated as percentages of this flow. Small error rates on large flows create substantial correction costs.",
    },
    activePlanManagers: {
      label: "Active Plan Managers",
      description: "Number of active plan management organizations",
      source: "Estimated from market analysis. Dashboard shows 200,668 providers serve plan-managed participants.",
      defaultValue: "500 organizations",
      formula: "Market estimate based on participant distribution and provider counts",
      impact: "Affects training costs, infrastructure costs, and tool development investments. More organizations = higher distributed costs but potentially more competition.",
    },
    largeOperatorsPct: {
      label: "Large Operators Percentage",
      description: "Percentage of plan managers considered large/sophisticated with technical capability",
      source: "Market segmentation analysis",
      defaultValue: "30%",
      formula: "Estimated from volume concentration analysis",
      impact: "Determines API adoption potential and proprietary tool development. Large operators can invest in automation (Option 3 API integration), small operators rely on simpler tools (web interface or documents).",
    },
    transactionFrequency: {
      label: "Transaction Frequency",
      description: "Average number of provider invoices per participant per week",
      source: "Derived from payment patterns. Assumes providers batch services into weekly/fortnightly invoices rather than per-session billing.",
      defaultValue: "2 invoices per week",
      formula: "Based on provider invoicing patterns and 99.6% payment-within-3-days rate suggesting batch processing",
      impact: "Directly determines annual transaction volume. Higher frequency = more transactions = more lookups = higher processing costs. Range: 1/week (highly batched) to 4/week (frequent invoicing).",
    },
    activeServiceRate: {
      label: "Active Service Rate",
      description: "Percentage of participants actively receiving services in any given period",
      source: "Below dashboard's 75% utilization rate, accounts for participants between services or in planning phases",
      defaultValue: "70%",
      formula: "Conservative estimate below 75% utilization rate shown in dashboard",
      impact: "Affects transaction volume calculations. Not all participants generate transactions continuously - some are between services, planning, or have paused supports.",
    },
  },
  currentState: {
    currentPaplMaintenance: {
      label: "Current PAPL Maintenance Cost",
      description: "Annual cost to maintain PAPL documents (content development, review, publication)",
      source: "Estimated from typical government document production costs. Includes FTE time, contractor costs, legal review, publication overhead.",
      defaultValue: "$330,000 per year",
      formula: "Estimated based on: Content updates (~$80K) + Version control (~$30K) + QA/Legal (~$40K) + Communication (~$20K) + Support Catalogue generation (~$80K) + Coordination (~$50K)",
      impact: "Critical for Option 3 ROI calculation. Higher current maintenance costs make automation more valuable. This parameter should be validated through interviews with actual PAPL maintenance teams.",
    },
    currentErrorRate: {
      label: "Current Error Rate",
      description: "Baseline percentage of transactions with pricing errors",
      source: "Industry standard for manual lookup processes with complex documents",
      defaultValue: "0.5%",
      formula: "Assumed baseline for competent operations using manual PDF lookup",
      impact: "Baseline for calculating error reduction benefits. At 54.7M transactions, 0.5% = 273,500 errors annually. Each 0.1% change = 54,700 errors, costing $200 each to correct.",
    },
    currentLookupTime: {
      label: "Current Lookup Time (PDF)",
      description: "Average time to find pricing information in current PDF PAPL",
      source: "Estimated from typical PDF navigation patterns: open document, search, navigate to section, read conditions, verify price",
      defaultValue: "120 seconds (2 minutes)",
      formula: "Based on: Document search (~30s) + Navigation to item (~30s) + Reading conditions (~30s) + Verification (~30s)",
      impact: "Baseline for processing efficiency calculations. At 65.6M annual lookups, every 10 seconds saved = 182,000 hours = $13.7M annually at $75/hour.",
    },
    versionControlFailureRate: {
      label: "Version Control Failure Rate",
      description: "Percentage of plan managers missing document updates annually",
      source: "Estimated from dual-document management complexity. Applies primarily to Option 1.",
      defaultValue: "5%",
      formula: "8 updates/year × 5% detection failure rate = 0.4 missed updates per organization per year × 500 orgs = 200 instances",
      impact: "In Option 1, failures cause mispricing on affected volumes until detected. 5% of plan managers × $49.5B flows = ~$2.5B at risk of mispricing.",
    },
    frameworkClarificationRate: {
      label: "Framework Clarification Rate",
      description: "Percentage of transactions requiring clarification about which framework (OFP/NFP) applies",
      source: "Estimated from transition complexity. Applies to Options 1 and 2.",
      defaultValue: "2%",
      formula: "2% of 54.7M transactions = 1.09M problem transactions requiring additional clarification work",
      impact: "Each clarification requires 45 minutes staff time ($37.50). At 2%, costs $41M annually. Affects Options 1 and 2 during transition period.",
    },
  },
  transition: {
    transitionDuration: {
      label: "Transition Duration",
      description: "Expected years of parallel OFP/NFP operation",
      source: "Policy planning assumption. Plans can be 12-36 months, so administrative tail extends beyond nominal transition.",
      defaultValue: "6 years",
      formula: "5-year nominal transition + 1 year administrative tail for last OFP plans to complete",
      impact: "Directly multiplies all annual costs. Longer transitions make dual-maintenance (Option 1) more expensive and automation (Option 3) more valuable. Each additional year adds ~$340K NDIA cost for Option 1.",
    },
    planManagerHourlyCost: {
      label: "Plan Manager Hourly Cost",
      description: "Burdened hourly cost for plan manager staff time",
      source: "Industry standard for professional services staff including salary, benefits, overheads, training, supervision.",
      defaultValue: "$75 per hour",
      formula: "Typical burdened rate: Base salary (~$50/hr) + Benefits (~30%) + Overheads (~20%)",
      impact: "Multiplier for all processing time calculations. Used for: lookup time costs, clarification costs, training costs, QA costs. $10/hour change affects 65.6M lookups/year = $182M over 6 years.",
    },
    errorCorrectionCost: {
      label: "Error Correction Cost",
      description: "Cost to identify, verify, recalculate, adjust, and document a single pricing error",
      source: "Estimated from operational workflows: identification, investigation, correction, provider communication, documentation.",
      defaultValue: "$200 per transaction",
      formula: "Error identification (~$50) + Correction processing (~$100) + Provider communication (~$50)",
      impact: "At baseline 0.5% error rate on 54.7M transactions = 273,500 errors × $200 = $54.7M annually. Each 0.1% error rate improvement saves $10.9M annually.",
    },
  },
  option3: {
    webToolLookupTime: {
      label: "Web Tool Lookup Time",
      description: "Average time to find pricing using web search interface",
      source: "Estimated from modern web search interfaces (MBS, PBS precedents). Faster than PDF due to instant search, filtering, no navigation.",
      defaultValue: "40 seconds",
      formula: "Web search (~5s) + Result selection (~10s) + Reading (~15s) + Verification (~10s). 67% faster than PDF.",
      impact: "Key driver of Option 3 efficiency gains. 80 seconds saved per lookup × 39.4M web tool lookups (60% adoption) = 87,556 hours = $6.6M annually.",
    },
    webToolAdoptionRate: {
      label: "Web Tool Adoption Rate",
      description: "Percentage of plan managers adopting web tool as primary pricing lookup method",
      source: "Based on MBS/PBS precedent systems. Conservative estimate given transition period learning curve.",
      defaultValue: "60%",
      formula: "Precedent: Medicare MBS web search achieved 70%+ adoption within 2 years. 60% is conservative for 18-month target.",
      impact: "Directly determines Option 3 benefits realization. Each 10% increase in adoption adds ~$11M in processing savings over 6 years.",
    },
    webToolErrorRate: {
      label: "Web Tool Error Rate",
      description: "Pricing error rate when using structured web interface",
      source: "Lower than PDF due to structured presentation, clear conditions display, reduced navigation errors.",
      defaultValue: "0.3%",
      formula: "40% reduction from 0.5% baseline. Structured interfaces reduce misinterpretation and navigation errors.",
      impact: "Savings from error reduction: (0.5% - 0.3%) × 32.8M web tool transactions = 65,600 fewer errors × $200 = $13.1M annually.",
    },
    apiLookupTime: {
      label: "API Lookup Time",
      description: "Average automated lookup time via API integration",
      source: "Based on automated system integration performance. Includes query time, response, internal validation.",
      defaultValue: "10 seconds",
      formula: "API query (~2s) + Response processing (~3s) + Automated validation (~5s). Fully automated within workflow.",
      impact: "Fastest option but requires upfront integration investment. Large operators processing 13M lookups save 110 seconds each vs PDF = 397,222 hours = $29.8M annually.",
    },
    apiAdoptionRate: {
      label: "API Adoption Rate",
      description: "Percentage of plan managers integrating API into systems",
      source: "Limited by technical capability and integration costs. Primarily large operators with development resources.",
      defaultValue: "25%",
      formula: "Estimated from: Large operators (30% of orgs) × 80% integration rate + Medium operators (40% of orgs) × 10% rate ≈ 25%",
      impact: "While lower adoption than web tool, API users process larger volumes (50-60% of transactions), so efficiency impact is substantial.",
    },
    apiIntegrationCostLarge: {
      label: "API Integration Cost (Large Operators)",
      description: "One-time cost for large plan manager to integrate API into systems",
      source: "Industry standard for enterprise API integration: development, testing, training, deployment.",
      defaultValue: "$200,000",
      formula: "Development (~$100K) + Testing/QA (~$40K) + Training (~$20K) + Deployment/Support (~$40K)",
      impact: "Large operators justify cost through volume: Processing 5M transactions with 110s savings = 152,778 hours = $11.5M/year. Payback in <2 months.",
    },
    apiIntegrationCostMedium: {
      label: "API Integration Cost (Medium Operators)",
      description: "One-time cost for medium plan manager to integrate API",
      source: "Smaller scale integration, potentially using third-party tools or simpler implementation.",
      defaultValue: "$75,000",
      formula: "Lighter implementation than large operators: Development (~$40K) + Testing (~$15K) + Training (~$10K) + Support (~$10K)",
      impact: "Medium operators (1M transactions) save 30,556 hours = $2.3M/year. Payback in ~4 months. Marginal ROI - some may choose web tool instead.",
    },
    option3PocCost: {
      label: "Option 3 Proof-of-Concept Cost",
      description: "Phase 1 cost to build web tool prototype and validate feasibility",
      source: "Estimated from government IT project sizing: Database setup, basic API, prototype web interface, user testing.",
      defaultValue: "$175,000",
      formula: "Database design (~$40K) + Data migration (~$30K) + Basic API (~$40K) + Web prototype (~$30K) + User testing (~$10K) + PM (~$25K)",
      impact: "Risk mitigation investment. Validates feasibility before $425K production commitment. Can abandon if PoC reveals problems, limiting downside to $175K.",
    },
    option3ProductionCost: {
      label: "Option 3 Production Build Cost",
      description: "Phase 2 cost to build production-grade system",
      source: "Full-scale implementation: production infrastructure, complete feature set, security, testing, rollout.",
      defaultValue: "$425,000",
      formula: "Production infrastructure (~$100K) + Full API (~$80K) + Production web tool (~$100K) + Document generation (~$40K) + Testing (~$50K) + Documentation (~$30K) + Integration support (~$25K)",
      impact: "Only incurred after successful PoC. Builds complete system with reliability, security, performance for production use.",
    },
    option3AnnualMaintenance: {
      label: "Option 3 Annual Maintenance",
      description: "Annual cost to operate, maintain, and improve the system",
      source: "Includes hosting, staff, support, security. Standard for government web applications.",
      defaultValue: "$414,000 per year",
      formula: "Hosting (~$50K) + Development/maintenance (~$180K) + Operations (~$60K) + Support (~$94K) + Security (~$30K)",
      impact: "Ongoing operational commitment. Requires 4-6 FTE equivalent (developers, ops, support). Must be sustainable long-term or system degrades.",
    },
  },
  risk: {
    option2ComplexityPenalty: {
      label: "Option 2 Complexity Penalty",
      description: "Percentage increase in lookup time due to unified document complexity",
      source: "Estimated from navigating complex documents with dual framework content. Every lookup requires framework awareness.",
      defaultValue: "17%",
      formula: "20 seconds additional time ÷ 120 second baseline = 17% increase in lookup time",
      impact: "At 65.6M lookups, 17% penalty adds 364,583 hours annually = $27.3M/year = $164M over 6 years. Distributed across all users.",
    },
    option2ErrorIncrease: {
      label: "Option 2 Error Rate Increase",
      description: "Percentage point increase in error rate due to document complexity",
      source: "Confusion from framework proximity, navigation fatigue, similar-seeming items with different rules.",
      defaultValue: "0.2 percentage points",
      formula: "Increases baseline 0.5% to 0.7%. Creates additional 109,400 errors annually.",
      impact: "Additional errors × $200 correction cost = $21.9M annually = $131M over 6 years. Affects participants through service disruptions.",
    },
    option1ClarificationCost: {
      label: "Option 1 Framework Clarification Cost",
      description: "Cost per transaction requiring clarification about which framework applies",
      source: "Staff time to contact provider, potentially contact NDIA/participant, document resolution, reprocess.",
      defaultValue: "$37.50 per transaction",
      formula: "45 minutes staff time × $50/hour burdened = $37.50",
      impact: "At 2% clarification rate, affects 1.09M transactions = $41M annually. Applies to Option 1 throughout transition period.",
    },
  },
};

export const DERIVED_METRICS_DOCUMENTATION = {
  annualTransactions: {
    label: "Annual Transactions",
    description: "Total provider invoices processed annually through plan managers",
    formula: "Active Participants × Active Service Rate × Transaction Frequency × 52 weeks",
    example: "751,446 × 70% × 2 × 52 = 54,700,568 transactions",
    source: "Calculated from scheme scale parameters",
    impact: "Foundational metric for all volume-based calculations. Determines processing time costs, error volumes, and system capacity requirements.",
  },
  averageTransactionValue: {
    label: "Average Transaction Value",
    description: "Average dollar value per provider invoice",
    formula: "Annual Payment Flows ÷ Annual Transactions",
    example: "$49,500,000,000 ÷ 54,700,568 = $905 per transaction",
    source: "Calculated from scheme scale parameters",
    impact: "Used to convert dollar flows to transaction counts for error correction calculations. Validates transaction frequency assumptions (range: $396-$1,807 across scenarios).",
  },
  annualLookups: {
    label: "Annual Pricing Lookups",
    description: "Number of times plan managers query PAPL for pricing information",
    formula: "Annual Transactions × 60% (requiring consultation) × 2 lookups per transaction",
    example: "54,700,568 × 60% × 2 = 65,640,682 lookups",
    source: "Not all transactions require fresh lookups. 40% are recurring services with established pricing. Complex transactions require multiple lookups (item code, conditions, verification).",
    impact: "Key metric for processing efficiency calculations. Each second saved per lookup = $1.37M annually at $75/hour. Determines web tool and API value proposition.",
  },
};

export const CALCULATION_METHODOLOGY = {
  option1: {
    title: "Option 1: Separate PAPL Documents for OFP and NFP",
    description: "Maintain two distinct documents throughout transition. Minimizes user complexity but creates sustained dual-maintenance burden and version control risk.",
    
    ndiaCosts: {
      upfront: {
        value: "$100,000",
        calculation: "Template development for NFP PAPL (~$50K) + Additional content development (~$30K) + Stakeholder communication (~$20K)",
        rationale: "Low because infrastructure exists - just scaling content production",
      },
      annualMaintenance: {
        value: "$340,000 per year",
        calculation: "Per document: Content updates ($80K) + Version control ($30K) + QA/Legal ($40K) + Stakeholder communication ($20K) = $170K × 2 documents",
        rationale: "Must maintain full production cycle for both documents in parallel",
      },
    },
    
    userCosts: {
      frameworkClarification: {
        calculation: "Affected transactions × Clarification cost per transaction × Years",
        formula: "(Annual Transactions × 2%) × $37.50 × 6 years",
        example: "(54,700,568 × 2%) × $37.50 × 6 = $246M",
        rationale: "2% of transactions require determining which framework applies, consuming 45 minutes staff time each",
      },
      versionControl: {
        calculation: "Infrastructure cost per org × Organizations × Years",
        formula: "$5,000 × 500 × 6",
        example: "$15M",
        rationale: "Organizations must maintain processes, systems, and staff training for dual-document version control",
      },
      training: {
        calculation: "Initial training + Annual ongoing training",
        formula: "(Plan Managers × $10K) + (Plan Managers × $5K × Years)",
        example: "(500 × $10K) + (500 × $5K × 6) = $20M",
        rationale: "Staff must be trained on both frameworks initially, with ongoing refresher training as frameworks evolve",
      },
      errorCorrection: {
        calculation: "Affected payment flows × Mispricing rate × Error correction cost",
        formula: "(Annual Flows × 5% version failure rate × 2% affected) ÷ Avg Transaction × $200 × Years",
        example: "($49.5B × 5% × 2%) ÷ $905 × $200 × 6 = $12M",
        rationale: "Plan managers operating on old pricing versions systematically misprice transactions until detected",
      },
    },
  },
  
  option2: {
    title: "Option 2: Unified PAPL Handling Both Frameworks",
    description: "Single document containing both OFP and NFP. Simplifies NDIA production but transfers complexity to users, impacting processing times and error rates.",
    
    ndiaCosts: {
      upfront: {
        value: "$320,000",
        calculation: "Document architecture design ($80K) + Content integration ($150K) + User testing ($50K) + Legal review ($40K)",
        rationale: "Higher than Option 1 due to genuine design complexity of reconciling incompatible taxonomies",
      },
      annualMaintenance: {
        value: "$240,000 per year",
        calculation: "Content updates ($120K) + Version control ($30K) + Enhanced QA ($60K) + Communication ($20K) + Usability monitoring ($10K)",
        rationale: "Single workflow but must verify both frameworks remain coherent. Lower than Option 1 dual maintenance.",
      },
    },
    
    userCosts: {
      processingTime: {
        calculation: "Baseline processing hours × Complexity penalty × Hourly cost × Years",
        formula: "(Annual Lookups × 120s ÷ 3600) × 17% × $75 × 6",
        example: "(65,640,682 × 120 ÷ 3600) × 17% × $75 × 6 = $164M",
        rationale: "Every lookup requires framework awareness throughout navigation, adding ~20 seconds per lookup",
      },
      proprietaryTools: {
        calculation: "Large operators × Tool development cost",
        formula: "(Plan Managers × 30%) × $300,000",
        example: "(500 × 30%) × $300,000 = $45M",
        rationale: "Sophisticated operators build internal tools to parse complex document, creating interpretation fragmentation",
      },
      increasedErrors: {
        calculation: "Additional errors × Correction cost × Years",
        formula: "(Annual Transactions × 0.2% increase) × $200 × 6",
        example: "(54,700,568 × 0.2%) × $200 × 6 = $131M",
        rationale: "Framework confusion and navigation fatigue increase error rates from 0.5% to 0.7%",
      },
      training: {
        calculation: "Higher training costs due to complexity",
        formula: "(Plan Managers × $15K initial) + (Plan Managers × $10K annual × Years)",
        example: "(500 × $15K) + (500 × $10K × 6) = $38M",
        rationale: "More complex document requires more intensive training and ongoing competency maintenance",
      },
    },
  },
  
  option3: {
    title: "Option 3: Layered Access Architecture",
    description: "Multiple access tiers (documents, web tool, API) from single structured source. Addresses equity through appropriate access methods matched to user capabilities.",
    
    ndiaCosts: {
      upfront: {
        value: "$600,000",
        calculation: "PoC ($175K) + Production build ($425K)",
        breakdown: "PoC: Database design ($40K) + Data migration ($30K) + Basic API ($40K) + Prototype ($30K) + Testing ($10K) + PM ($25K)\nProduction: Infrastructure ($100K) + Full API ($80K) + Web tool ($100K) + Doc generation ($40K) + Testing ($50K) + Documentation ($30K) + PM ($25K)",
        rationale: "Higher upfront but phased approach limits risk. Only proceed to production after PoC validates feasibility.",
      },
      annualMaintenance: {
        value: "$414,000 per year",
        calculation: "Hosting ($50K) + Development ($180K) + Operations ($60K) + Support ($94K) + Security ($30K)",
        rationale: "Requires sustained technical capability (4-6 FTE). Must be committed long-term or system degrades.",
      },
      efficiencySavings: {
        value: "$290,000 per year",
        calculation: "Eliminated PAPL maintenance ($160K) + Catalogue generation ($80K) + Coordination ($50K)",
        rationale: "Automation eliminates manual document production. Single database update propagates to all outputs automatically.",
      },
      netCost: {
        value: "$1.24-1.44M over 6 years",
        calculation: "($600K + $414K × 6) - ($290K × 6) = $2.48M - $1.74M",
        rationale: "Gross cost $2.48M offset by $1.74M efficiency savings = $1.24M net. Assumes current maintenance costs $330K/year (must validate).",
      },
    },
    
    userBenefits: {
      processingEfficiency: {
        calculation: "Baseline cost - New cost (weighted by adoption)",
        formula: "Baseline: 65.6M lookups × 120s ÷ 3600 × $75 = $164M/year\nWeb tool (60%): 39.4M × 40s ÷ 3600 × $75 = $32.8M\nAPI (25%): 16.4M × 10s ÷ 3600 × $75 = $3.4M\nPDF (15%): 9.8M × 120s ÷ 3600 × $75 = $24.5M\nNew total: $60.7M/year\nSavings: $164M - $60.7M = $103.3M/year",
        sixYearTotal: "$393M",
        rationale: "Web tool reduces lookup time 67% vs PDF. API reduces 92%. Even partial adoption produces massive aggregate savings at 65.6M lookups.",
      },
      errorReduction: {
        calculation: "Baseline errors - New errors (weighted by adoption)",
        formula: "Baseline: 54.7M × 0.5% × $200 = $54.7M/year\nWeb tool (60%): 32.8M × 0.3% × $200 = $19.7M\nAPI (25%): 13.7M × 0.15% × $200 = $4.1M\nPDF (15%): 8.2M × 0.5% × $200 = $8.2M\nNew total: $32M/year\nSavings: $54.7M - $32M = $22.7M/year",
        sixYearTotal: "$79M",
        rationale: "Structured interfaces reduce misinterpretation errors. Web tool 40% reduction (0.5% → 0.3%), API 70% reduction.",
      },
      versionControlElimination: {
        calculation: "Option 1 clarification costs × Conservative factor",
        formula: "$246M × 50% = $123M",
        rationale: "Conservative estimate. Web tool and API always query current data, eliminating version control issues. Framework comparison views make differences explicit.",
      },
    },
    
    userCosts: {
      apiIntegration: {
        calculation: "Large orgs × Large cost + Medium orgs × Medium cost",
        formula: "(500 × 30% × 25% × $200K) + (500 × 40% × 25% × 50% × $75K)",
        example: "(37.5 × $200K) + (25 × $75K) = $9.4M",
        rationale: "One-time investment for organizations choosing API integration. ROI positive for high-volume operators only.",
      },
    },
  },
};

export const DATA_SOURCES = {
  primary: {
    name: "NDIA Q1 2025-26 Quarterly Performance Dashboard",
    date: "30 September 2025",
    url: "https://www.ndis.gov.au/about-us/publications/quarterly-reports",
    keyFigures: {
      activeParticipants: "751,446",
      quarterlyPayments: "$12.57 billion",
      annualPayments: "$49.5 billion (derived from 12-month average)",
      averagePaymentPerParticipant: "$65,800 annually",
      activeProviders: "273,673",
      planManagerProviders: "200,668",
      paymentSpeed: "99.6% paid within 3 days",
    },
  },
  secondary: {
    industryBenchmarks: "Plan manager operational costs, hourly rates, error rates from industry standards",
    governmentPrecedents: "MBS, PBS web search adoption rates and efficiency improvements",
    marketAnalysis: "Plan manager organization count and size distribution estimates",
  },
};
