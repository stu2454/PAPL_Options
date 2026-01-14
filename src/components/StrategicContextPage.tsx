import { AlertTriangle, Users, Zap, Shield, Target, Info } from 'lucide-react';

// Tooltip component for inline documentation
const InfoTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="group relative inline-block ml-1 align-middle">
      <Info className="w-4 h-4 text-gray-400 hover:text-ndis-purple cursor-help inline" />
      <div className="invisible group-hover:visible absolute z-10 w-96 p-4 bg-gray-900 text-white text-sm rounded-lg shadow-xl left-0 top-6 pointer-events-none">
        <div className="absolute -top-2 left-4 w-4 h-4 bg-gray-900 transform rotate-45"></div>
        {children}
      </div>
    </span>
  );
};

export function StrategicContextPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Strategic Context: Why This Decision Matters
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          The NDIS is undertaking a fundamental transformation of how participants access supports
          through the transition from Old Framework Planning (OFP) to New Framework Planning (NFP).
          This 5-6 year transition creates a critical decision point: how should pricing information
          be distributed to ensure equity, efficiency, and operational sustainability?
        </p>
        <p className="text-gray-600">
          This tool helps decision-makers understand the system-wide implications of three strategic
          approaches to managing pricing artifacts during the transition period.
        </p>
      </div>

      {/* The Challenge */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-ndis-orange" />
          <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            During the OFP/NFP transition, plan managers processing{' '}
            <strong className="inline-flex items-center">
              54.7 million annual transactions
              <InfoTooltip>
                <div className="space-y-2">
                  <p className="font-semibold border-b border-gray-700 pb-2">Transaction Volume Calculation</p>
                  <p className="text-xs leading-relaxed">
                    <strong>Data Source:</strong> NDIA Q1 2025-26 Quarterly Dashboard
                  </p>
                  <p className="text-xs leading-relaxed">
                    <strong>Calculation Method:</strong>
                  </p>
                  <ul className="text-xs space-y-1 ml-3 list-disc list-inside">
                    <li>Active participants: 751,446</li>
                    <li>Service utilisation rate: 70% (actively receiving services)</li>
                    <li>Transaction frequency: 2 invoices per participant per week</li>
                    <li>Annual formula: 751,446 × 0.70 × 2 × 52 weeks = <strong>54.7M transactions</strong></li>
                  </ul>
                  <p className="text-xs leading-relaxed mt-2 pt-2 border-t border-gray-700">
                    <strong>Assumptions:</strong> This represents provider invoicing activity processed through plan managers. 
                    The 70% utilisation rate reflects that not all participants have active service delivery in any given 
                    period. The 2 invoices/week average accounts for variation across different service types and provider 
                    billing practices.
                  </p>
                </div>
              </InfoTooltip>
            </strong>
            {' '}worth{' '}
            <strong className="inline-flex items-center">
              $49.5 billion
              <InfoTooltip>
                <div className="space-y-2">
                  <p className="font-semibold border-b border-gray-700 pb-2">Annual Payment Flows</p>
                  <p className="text-xs leading-relaxed">
                    <strong>Data Source:</strong> NDIA Q1 2025-26 Quarterly Dashboard
                  </p>
                  <p className="text-xs leading-relaxed">
                    This figure represents total annual NDIS payment flows as reported in the official quarterly 
                    dashboard. It includes all payments to registered providers across all support categories 
                    (core supports, capacity building, capital supports).
                  </p>
                  <p className="text-xs leading-relaxed mt-2 pt-2 border-t border-gray-700">
                    <strong>Note:</strong> The proportion flowing through plan managers (rather than direct NDIA-managed 
                    or self-managed payments) varies by support category but represents a substantial share of total 
                    Scheme payments. Plan managers handle funds on behalf of participants who choose this support 
                    management option, processing invoices and making payments to providers according to the 
                    participant's approved plan.
                  </p>
                </div>
              </InfoTooltip>
            </strong>
            {' '}need accurate, timely pricing information for two parallel frameworks. The current PAPL (Pricing 
            Arrangements and Price Limits) document serves this function, but the transition creates unprecedented 
            complexity.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="font-semibold text-red-900 mb-2 inline-flex items-center">
                Volume Challenge
                <InfoTooltip>
                  <div className="space-y-2">
                    <p className="font-semibold border-b border-gray-700 pb-2">Pricing Lookups Calculation</p>
                    <p className="text-xs leading-relaxed">
                      <strong>Calculation:</strong> 54.7M annual transactions × 60% requiring lookup × 2 lookups per transaction = <strong>65.6M lookups</strong>
                    </p>
                    <p className="text-xs leading-relaxed mt-2 pt-2 border-t border-gray-700">
                      <strong>Assumptions:</strong> Not every transaction requires pricing verification—approximately 60% need active lookup (routine services vs. exceptional items). Each lookup-required transaction averages 2 pricing checks: initial verification and confirmation/cross-check.
                    </p>
                    <p className="text-xs leading-relaxed mt-2 pt-2 border-t border-gray-700">
                      <strong>Context:</strong> This represents the operational burden on plan managers during the transition period when they must navigate dual pricing frameworks.
                    </p>
                  </div>
                </InfoTooltip>
              </div>
              <div className="text-2xl font-bold text-red-700 mb-1">65.6M</div>
              <div className="text-sm text-gray-600">Annual pricing lookups by plan managers</div>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="font-semibold text-orange-900 mb-2 inline-flex items-center">
                Duration Challenge
                <InfoTooltip>
                  <div className="space-y-2">
                    <p className="font-semibold border-b border-gray-700 pb-2">Transition Timeline</p>
                    <p className="text-xs leading-relaxed">
                      <strong>Basis:</strong> 6 years represents the estimated period for full OFP→NFP transition based on NDIA planning timelines and historical implementation patterns.
                    </p>
                    <p className="text-xs leading-relaxed mt-2 pt-2 border-t border-gray-700">
                      <strong>Phasing:</strong> Gradual rollout across participant cohorts means both frameworks must operate in parallel throughout this period. All existing OFP participants must complete their plan cycles before full NFP adoption.
                    </p>
                    <p className="text-xs leading-relaxed mt-2 pt-2 border-t border-gray-700">
                      <strong>Implications:</strong> Longer transition increases cumulative costs for Options 1 and 2, while making Option 3's upfront investment relatively more attractive as efficiency benefits compound over time.
                    </p>
                  </div>
                </InfoTooltip>
              </div>
              <div className="text-2xl font-bold text-orange-700 mb-1">6 Years</div>
              <div className="text-sm text-gray-600">Estimated parallel framework operation</div>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="font-semibold text-yellow-900 mb-2 inline-flex items-center">
                Complexity Challenge
                <InfoTooltip>
                  <div className="space-y-2">
                    <p className="font-semibold border-b border-gray-700 pb-2">Error Rate Calculation</p>
                    <p className="text-xs leading-relaxed">
                      <strong>Calculation:</strong> 54.7M transactions × 0.5% baseline error rate = <strong>273,500 errors annually</strong>
                    </p>
                    <p className="text-xs leading-relaxed mt-2 pt-2 border-t border-gray-700">
                      <strong>Baseline Assumption:</strong> 0.5% error rate represents current-state processing errors under OFP framework. This includes incorrect pricing applications, wrong budget line assignments, and manual keying errors.
                    </p>
                    <p className="text-xs leading-relaxed mt-2 pt-2 border-t border-gray-700">
                      <strong>Risk:</strong> Transition complexity (dual frameworks, document navigation) increases this baseline rate. Option 2's unified document approach shows 40% increase to 0.7% (382K errors). Option 3's structured interfaces reduce errors by 40-70% through automation.
                    </p>
                  </div>
                </InfoTooltip>
              </div>
              <div className="text-2xl font-bold text-yellow-700 mb-1">273K</div>
              <div className="text-sm text-gray-600">Potential errors annually at 0.5% baseline</div>
            </div>
          </div>

          <p>
            <strong>The fundamental question:</strong> How do we maintain equitable access to
            accurate pricing information for all market participants—from sole trader providers to
            large organizations—while managing operational costs and system complexity?
          </p>
        </div>
      </div>

      {/* Three Strategic Options */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Three Strategic Approaches</h2>

        {/* Option 1 */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Option 1: Separate Documents (Status Quo Scaled)
          </h3>
          
          <div className="space-y-3 text-gray-700">
            <p className="font-medium text-gray-900">Approach:</p>
            <p>
              Maintain two distinct PAPL documents—one for OFP, one for NFP—throughout the
              transition. Each document is produced, maintained, and distributed independently
              following current processes.
            </p>

            <p className="font-medium text-gray-900 mt-4">Strategic Rationale:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Simplicity for users:</strong> Clear separation reduces framework confusion</li>
              <li><strong>Minimal change:</strong> Leverages existing document production infrastructure</li>
              <li><strong>Low upfront risk:</strong> Only $100K initial investment</li>
            </ul>

            <p className="font-medium text-gray-900 mt-4">Strategic Weaknesses:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Sustained dual burden:</strong> $340K annually to maintain parallel production</li>
              <li><strong>Version control risk:</strong> 5% of organizations may miss updates, causing systematic mispricing</li>
              <li><strong>Framework clarification overhead:</strong> 2% of transactions (~1.1M annually) require additional work to determine which framework applies</li>
              <li><strong>Multiplies transition cost:</strong> Every additional year adds $340K+ to system costs</li>
            </ul>

            <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
              <p className="text-sm text-red-900">
                <strong>Risk Profile:</strong> Low innovation risk, high operational risk. Version control
                failures create systemic mispricing affecting $2.5B+ in annual flows. The longer the
                transition, the more expensive and risky this approach becomes.
              </p>
            </div>
          </div>
        </div>

        {/* Option 2 */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Option 2: Unified Document (Consolidation Strategy)
          </h3>
          
          <div className="space-y-3 text-gray-700">
            <p className="font-medium text-gray-900">Approach:</p>
            <p>
              Combine both OFP and NFP pricing into a single document. Users navigate a more complex
              document but NDIA simplifies production to a single workflow.
            </p>

            <p className="font-medium text-gray-900 mt-4">Strategic Rationale:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Single production workflow:</strong> $240K annual maintenance vs $340K for Option 1</li>
              <li><strong>One authoritative source:</strong> Eliminates version control confusion</li>
              <li><strong>Controlled by NDIA:</strong> Single point of truth for pricing policy</li>
            </ul>

            <p className="font-medium text-gray-900 mt-4">Strategic Weaknesses:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Transfers complexity to users:</strong> Every lookup requires framework awareness throughout navigation</li>
              <li><strong>Processing time penalty:</strong> 17% slower lookups × 65.6M annual lookups = 364K additional hours = $164M over 6 years</li>
              <li><strong>Higher error rates:</strong> Framework confusion increases errors from 0.5% to 0.7%, adding 109K errors annually</li>
              <li><strong>Proprietary tool fragmentation:</strong> Large operators build custom parsing tools, creating interpretation divergence and market advantage</li>
              <li><strong>Higher training burden:</strong> More complex document requires sustained competency investment</li>
            </ul>

            <div className="mt-4 p-3 bg-orange-50 rounded border border-orange-200">
              <p className="text-sm text-orange-900">
                <strong>Risk Profile:</strong> Optimization for NDIA efficiency creates distributed costs
                and risks across the market. Small/medium operators without technical resources bear
                disproportionate burden. Could create two-tier market: sophisticated operators with
                custom tools vs. others struggling with complex document.
              </p>
            </div>
          </div>
        </div>

        {/* Option 3 */}
        <div className="mb-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Option 3: Layered Access Architecture ("Digital First" Strategy)
          </h3>
          
          <div className="space-y-3 text-gray-700">
            <p className="font-medium text-gray-900">Approach:</p>
            <p>
              Transform pricing distribution from document-first to data-first. Build a structured
              database as the single source of truth, then provide multiple access tiers matched to
              user capabilities: traditional documents (PDF/Word), web search tool (like Medicare MBS),
              and API for sophisticated integration.
            </p>

            <p className="font-medium text-gray-900 mt-4">Strategic Rationale:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Addresses equity fundamentally:</strong> Every user gets access method matched to their capability</li>
              <li><strong>"Build once, publish endlessly":</strong> Single database update propagates to all outputs automatically</li>
              <li><strong>Precedented approach:</strong> Follows proven Medicare PBS/MBS model</li>
              <li><strong>Version control elimination:</strong> Web tool and API always query current data</li>
              <li><strong>Efficiency at scale:</strong> 67% faster lookups via web tool, 92% faster via API</li>
              <li><strong>Error rate reduction:</strong> Structured interfaces reduce interpretation errors 40-70%</li>
            </ul>

            <p className="font-medium text-gray-900 mt-4">Strategic Strengths:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>System-wide net benefit:</strong> -$507M over 6 years (negative = benefit to system)</li>
              <li><strong>Completes existing infrastructure:</strong> NDIA already has Product Catalogue API; this extends it to PAPL</li>
              <li><strong>Phased risk management:</strong> $175K PoC validates feasibility before $425K production commitment</li>
              <li><strong>Long-term sustainability:</strong> Efficiency savings ($290K/year) offset ongoing maintenance</li>
              <li><strong>Market equity:</strong> Levels playing field—small operators get same access speed as large organizations</li>
            </ul>

            <p className="font-medium text-gray-900 mt-4">Strategic Considerations:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Higher upfront investment:</strong> $600K vs $100-320K for other options</li>
              <li><strong>Technical capability requirement:</strong> Need sustained 4-6 FTE to operate system</li>
              <li><strong>Change management:</strong> Users need to adopt new access methods (60% web, 25% API target)</li>
              <li><strong>Long-term commitment:</strong> System degrades without ongoing maintenance</li>
            </ul>

            <div className="mt-4 p-3 bg-green-100 rounded border border-green-300">
              <p className="text-sm text-green-900">
                <strong>Risk Profile:</strong> Higher innovation risk (technical implementation, user
                adoption) but fundamentally addresses equity and efficiency. Phased approach limits
                downside. System benefits compound over time—longer transition makes this option
                relatively more attractive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Matters - Equity Lens */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-ndis-purple" />
          <h2 className="text-2xl font-bold text-gray-900">The Equity Question</h2>
        </div>

        <div className="space-y-4 text-gray-700">
          <p className="text-lg font-medium text-gray-900">
            Why does access method matter?
          </p>

          <p>
            NDIA already operates a comprehensive API providing structured pricing data to sophisticated
            organizations. However, complex access requirements create a two-tier market:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">Large Organizations</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Technical resources to integrate APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Automated lookups in 10 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Lower error rates through automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Competitive advantage in processing speed</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-3">Small/Medium Providers</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Limited technical capability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Manual PDF lookups in 120 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Higher error rates from manual navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Structural disadvantage compounds over time</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-ndis-purple bg-opacity-10 rounded-lg border-l-4 border-ndis-purple">
            <p className="font-semibold text-ndis-purple mb-2">The Equity Principle:</p>
            <p className="text-gray-800">
              Option 3 provides equitable access by offering appropriate tools for different capability
              levels. A sole trader gets the same 40-second lookup time via web search that would
              otherwise require $200K API integration. This is not about technological innovation—it's
              about ensuring fair access to public pricing information.
            </p>
          </div>

          <p>
            Options 1 and 2 perpetuate the current inequity by maintaining document-only distribution.
            Organizations with resources build proprietary tools; others remain disadvantaged. Option 3
            makes the existing structured data accessible to all participants through appropriate
            interfaces.
          </p>
        </div>
      </div>

      {/* Government Precedents */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-ndis-green" />
          <h2 className="text-2xl font-bold text-gray-900">Proven Government Precedents</h2>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            Option 3 is not experimental—it follows established patterns from other government agencies
            that transformed document-based pricing distribution:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">
                Medicare Benefits Schedule (MBS)
              </h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Challenge:</strong> Medical practitioners needed fast access to 5,700+ item codes</li>
                <li><strong>Solution:</strong> MBS Online web search tool + downloadable XML data files + PDF/Word documents</li>
                <li><strong>Technical Implementation:</strong> Structured database with web interface; XML files support third-party applications</li>
                <li><strong>Adoption:</strong> Web search is primary tool for most users; XML enables third-party app development</li>
                <li><strong>Result:</strong> Faster lookups, reduced errors, equitable access across practice sizes</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">
                Pharmaceutical Benefits Scheme (PBS)
              </h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Challenge:</strong> Pharmacists needed current pricing and authority requirements for 900+ medicines</li>
                <li><strong>Solution:</strong> PBS REST API + web search + CSV downloads + PDF documents</li>
                <li><strong>Technical Implementation:</strong> Full REST API with monthly updates; API replacing legacy XML/text files</li>
                <li><strong>Adoption:</strong> API enables integration into pharmacy systems; CSV files available for simpler use cases</li>
                <li><strong>Result:</strong> Real-time data access, eliminated version control issues, automated workflows</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-900 mb-2">Key Pattern - Layered Access:</p>
            <p className="text-gray-800 mb-2">
              Both MBS and PBS demonstrate the successful "layered access" approach, though at different
              levels of technical sophistication:
            </p>
            <ul className="space-y-1 text-sm text-gray-700 mb-2">
              <li>• <strong>Documents (PDF/Word):</strong> For occasional users and offline reference</li>
              <li>• <strong>Web Search:</strong> For frequent manual lookups (MBS Online widely adopted)</li>
              <li>• <strong>Structured Data (XML/CSV):</strong> For bulk download and third-party tools (MBS XML files)</li>
              <li>• <strong>REST API:</strong> For automated system integration (PBS API replacing legacy formats)</li>
            </ul>
            <p className="text-gray-800">
              Users self-selected appropriate tools based on their technical capability and usage patterns.
              No one was forced to change, but most chose efficiency when offered accessible options.
              The MBS demonstrates that even without a full API, structured data downloads enable significant
              innovation by third parties.
            </p>
          </div>

          <p className="font-medium">
            NDIS already has the technical foundation—the Product Catalogue API demonstrates the
            agency's capability to build and maintain API infrastructure. Option 3 extends this
            proven capability to PAPL pricing data during the transition period, following the same
            layered access pattern successfully deployed by Department of Health for MBS (web + XML downloads)
            and PBS (web + API).
          </p>
        </div>
      </div>

      {/* Decision Framework */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-ndis-orange" />
          <h2 className="text-2xl font-bold text-gray-900">Decision Framework</h2>
        </div>

        <div className="space-y-4 text-gray-700">
          <p className="text-lg font-medium text-gray-900">
            How should decision-makers evaluate these options?
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">If your priority is minimizing change...</h3>
              <p>
                <strong>Option 1</strong> offers lowest disruption but highest long-term cost and operational
                risk. Appropriate if you expect a very short transition (2-3 years) or if organizational
                capacity for change is extremely limited.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">If your priority is NDIA efficiency...</h3>
              <p>
                <strong>Option 2</strong> optimizes for internal workflow but transfers costs and complexity
                to the market. Appropriate if you assess that market participants have capacity to absorb
                complexity and you're willing to accept processing penalties and error rate increases.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">If your priority is system-wide efficiency and equity...</h3>
              <p>
                <strong>Option 3</strong> addresses the fundamental problem through proven approaches.
                Higher upfront investment delivers compound benefits over transition period. Appropriate
                if you can commit technical resources and want to establish sustainable infrastructure
                beyond the transition.
              </p>
            </div>
          </div>

          <div className="mt-6 p-5 bg-ndis-purple text-white rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Critical Insight:</h3>
            <p className="mb-3">
              The longer the transition period, the more favorable Option 3 becomes relative to Options
              1 and 2. At 6 years, Option 3 delivers a <strong>net benefit of $507M</strong> to the
              system compared to baseline.
            </p>
            <p className="text-sm text-white text-opacity-90">
              Options 1 and 2 impose cumulative costs that grow linearly with time. Option 3's benefits
              compound—efficiency gains and error reductions multiply across millions of transactions
              annually. The phased implementation (PoC → Production) limits downside risk while preserving
              upside potential.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-6 h-6 text-ndis-teal" />
          <h2 className="text-2xl font-bold text-gray-900">Key Takeaways for Decision-Makers</h2>
        </div>

        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-ndis-purple text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <div>
              <p className="font-semibold text-gray-900">This is an equity question, not just an efficiency question</p>
              <p className="text-sm">Current API access creates two-tier market. Option 3 provides equitable access to pricing information for all participants.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-ndis-purple text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
            <div>
              <p className="font-semibold text-gray-900">Transition duration matters significantly</p>
              <p className="text-sm">If transition extends beyond 6 years, Option 3's relative advantage grows. Options 1 and 2 become progressively more expensive.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-ndis-purple text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
            <div>
              <p className="font-semibold text-gray-900">Option 3 completes existing infrastructure</p>
              <p className="text-sm">NDIA already has Product Catalogue API. This extends proven capability to PAPL, following Department of Health's PBS/MBS precedent.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-ndis-purple text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
            <div>
              <p className="font-semibold text-gray-900">Risk is managed through phased approach</p>
              <p className="text-sm">$175K PoC validates feasibility before production commitment. Can abandon with limited downside if PoC reveals problems.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-ndis-purple text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
            <div>
              <p className="font-semibold text-gray-900">System-wide perspective is essential</p>
              <p className="text-sm">Decision affects not just NDIA but entire market ecosystem. User-side benefits ($596M) dwarf NDIA costs ($1.2M net) in Option 3.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-ndis-purple to-ndis-teal text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Use This Tool to Explore Scenarios</h2>
        <p className="mb-4">
          The Simulator tab allows you to adjust key assumptions and see how results change.
          Test different transition durations, adoption rates, and cost parameters to understand
          sensitivity and validate the business case under various scenarios.
        </p>
        <p className="text-sm text-white text-opacity-90">
          The Methodology tab provides complete transparency on calculation methods and data sources,
          enabling independent validation of all figures presented here.
        </p>
      </div>
    </div>
  );
}
