// Consult Ready — Guideline Data
// Each object = one card + modal. Add new guidelines by copying the template below.
// Sections use HTML strings — tables, <ul>, <strong>, .alert-box, .step-block, .callout all supported.

const GUIDELINES = [

  // ─────────────────────────────────────────────
  //  CARDIOVASCULAR
  // ─────────────────────────────────────────────

  {
    id: "hypertension",
    title: "Hypertension in Adults",
    subtitle: "Stage classification · ABPM diagnosis · Stepped drug treatment · BP targets",
    system: "Cardiovascular",
    nice_ref: "NG136",
    updated: "Feb 2026",

    diagnosis: `
      <h4>Classification</h4>
      <table>
        <thead>
          <tr><th>Stage</th><th>Clinic BP</th><th>ABPM/HBPM average</th></tr>
        </thead>
        <tbody>
          <tr><td>Stage 1</td><td>140/90–159/99 mmHg</td><td>135/85–149/94 mmHg</td></tr>
          <tr><td>Stage 2</td><td>160/100–179/119 mmHg</td><td>150/95 mmHg or higher</td></tr>
          <tr><td><strong>Stage 3 (severe)</strong></td><td>≥180/120 mmHg</td><td>—</td></tr>
        </tbody>
      </table>

      <h4>Measurement &amp; Diagnosis</h4>
      <ul>
        <li>Measure in both arms; if difference &gt;15 mmHg repeat — use higher reading arm</li>
        <li>Take 2 measurements per consultation; record lower of last 2</li>
        <li>Palpate radial/brachial pulse first — if irregular, measure manually (AF)</li>
        <li>If clinic BP 140/90–180/120 mmHg: offer <strong>ABPM</strong> to confirm diagnosis
          <ul><li>If ABPM unsuitable or not tolerated: offer <strong>HBPM</strong></li></ul>
        </li>
        <li>ABPM: ≥2 readings/hour during waking hours; use average of ≥14 readings</li>
        <li>HBPM: 2 readings ≥1 min apart, BD, ≥4 days (ideally 7); discard day 1</li>
      </ul>

      <h4>Confirming Diagnosis</h4>
      <ul>
        <li>Hypertension confirmed if clinic BP ≥140/90 <strong>AND</strong> ABPM/HBPM ≥135/85 mmHg</li>
        <li>No diagnosis: recheck clinic BP at least every 5 years</li>
        <li class="callout">★ NEW 2026: Offer healthy living advice if raised BP but not yet diagnosed</li>
      </ul>

      <h4>Postural Hypotension</h4>
      <ul>
        <li>Check in: T2DM, aged ≥80, or symptomatic (falls, dizziness)</li>
        <li>Significant drop: systolic ≥20 mmHg or diastolic ≥10 mmHg after 1 min standing
          <ul><li>If significant: treat to standing BP target; consider referral if persists</li></ul>
        </li>
      </ul>

      <h4>Investigations &amp; CVD Risk</h4>
      <p><strong>Baseline investigations for all:</strong></p>
      <ul>
        <li>Urine ACR + dipstick for haematuria</li>
        <li>Bloods: HbA1c, U&amp;E, eGFR, total cholesterol, HDL</li>
        <li>Fundoscopy: hypertensive retinopathy</li>
        <li>12-lead ECG: LVH</li>
      </ul>
      <p><strong>CVD risk assessment:</strong></p>
      <ul>
        <li>Use formal CVD risk tool (QRISK3) for all — use clinic BP measurements</li>
        <li>Discuss prognosis and modifiable risk factors</li>
        <li class="callout">★ Consider specialist evaluation for secondary causes in adults aged under 40</li>
        <li>Type 2 DM: measure BP at least annually; reinforce lifestyle advice</li>
      </ul>
    `,

    management: `
      <h4>Who &amp; When to Treat</h4>
      <p><strong>Stage 2 hypertension (clinic ≥160/100):</strong></p>
      <ul>
        <li>Offer antihypertensive treatment + lifestyle advice to all adults — any age</li>
      </ul>
      <p><strong>Stage 1 hypertension (clinic 140–159/90–99):</strong></p>
      <ul>
        <li>Discuss treatment if aged &lt;80 with ≥1 of: TOD, established CVD, renal disease, diabetes, QRISK3 ≥10%</li>
        <li>Consider treatment if aged &lt;60 and QRISK3 &lt;10% (lifetime risk may be underestimated)</li>
        <li>Consider treatment if aged &gt;80 and clinic BP &gt;150/90 mmHg</li>
        <li class="callout">★ Use clinical judgement for frailty/multimorbidity — discuss risks and benefits</li>
      </ul>
      <p><strong>Lifestyle advice — offer to all:</strong></p>
      <ul>
        <li>Diet: reduce dietary sodium; avoid salt substitutes if DM, CKD, ACEi/ARB</li>
        <li>Exercise: regular aerobic activity · Alcohol: reduce if excessive</li>
        <li>Caffeine: discourage excessive intake · Smoking: offer cessation support</li>
        <li>Weight: healthy diet and weight management</li>
      </ul>
      <p class="alert-inline"><strong>Do NOT offer Ca, Mg or K supplements to lower BP</strong></p>

      <div class="step-block">
        <p class="step-header">Step 1</p>
        <p><strong>Age &lt;55, NOT Black African/Caribbean, no T2DM:</strong></p>
        <ul>
          <li>ACE inhibitor (ACEi) <strong>OR</strong> ARB
            <ul>
              <li>ACEi: e.g. ramipril or lisinopril · ARB: e.g. candesartan or losartan</li>
              <li>Prefer ARB over ACEi in adults of Black African/Caribbean family origin</li>
              <li>Do <strong>NOT</strong> combine ACEi + ARB</li>
            </ul>
          </li>
        </ul>
        <p><strong>Age ≥55 OR Black African/Caribbean origin, no T2DM:</strong></p>
        <ul>
          <li>Calcium-channel blocker (CCB) — e.g. amlodipine
            <ul>
              <li>If CCB not tolerated (oedema): thiazide-like diuretic</li>
              <li>If heart failure present: thiazide-like diuretic (follow CHF guideline)</li>
            </ul>
          </li>
        </ul>
        <p><strong>ALL adults with T2DM (any age, any ethnicity):</strong></p>
        <ul>
          <li>ACEi or ARB — regardless of age or ethnicity
            <ul><li>Black African/Caribbean with T2DM: ACEi or ARB (not CCB as step 1)</li></ul>
          </li>
        </ul>
      </div>

      <div class="step-block">
        <p class="step-header">Step 2</p>
        <ul>
          <li>Before escalating: confirm optimal tolerated dose and discuss adherence</li>
          <li>If on ACEi/ARB: add CCB or thiazide-like diuretic</li>
          <li>If on CCB: add ACEi/ARB or thiazide-like diuretic</li>
          <li class="callout">★ Choice of add-on based on individual factors — no fixed order</li>
        </ul>
      </div>

      <div class="step-block">
        <p class="step-header">Step 3</p>
        <ul>
          <li>Triple therapy: ACEi or ARB + CCB + thiazide-like diuretic</li>
          <li>Optimise doses before considering step 4</li>
        </ul>
        <p><strong>Thiazide-like diuretic:</strong> prefer <strong>indapamide</strong> over bendroflumethiazide or hydrochlorothiazide</p>
        <ul><li>If stable and well-controlled on bendroflumethiazide/HCTZ: continue</li></ul>
      </div>

      <div class="step-block alert-step">
        <p class="step-header">Step 4 — Resistant Hypertension</p>
        <p>Confirm: ABPM/HBPM elevated + check postural hypotension + discuss adherence</p>
        <ul>
          <li>K ≤4.5 mmol/L: add low-dose <strong>spironolactone</strong>
            <ul><li>Note: not all spironolactone preparations have UK MA for this indication</li></ul>
          </li>
          <li>K &gt;4.5 mmol/L: add <strong>alpha-blocker</strong> or <strong>beta-blocker</strong></li>
        </ul>
        <p class="callout">★ Uncontrolled on optimal tolerated doses of 4 drugs: seek specialist advice</p>
      </div>

      <h4>Blood Pressure Targets</h4>
      <p><strong>Clinic BP targets:</strong></p>
      <table>
        <thead><tr><th>Patient group</th><th>Clinic BP target</th></tr></thead>
        <tbody>
          <tr><td>Hypertension (±T2DM), aged &lt;80</td><td>&lt;140/90 mmHg</td></tr>
          <tr><td>Hypertension (±T2DM), aged ≥80</td><td>&lt;150/90 mmHg</td></tr>
          <tr><td>T1DM or CKD, ACR &lt;70 mg/mmol, aged &lt;80</td><td>&lt;140/90 mmHg</td></tr>
          <tr><td>T1DM or CKD, ACR ≥70 mg/mmol, any age</td><td>&lt;130/80 mmHg</td></tr>
          <tr><td>CKD, ACR &lt;70 mg/mmol, aged ≥80</td><td>&lt;140/90 mmHg</td></tr>
        </tbody>
      </table>
      <p><strong>ABPM/HBPM targets (waking average):</strong></p>
      <table>
        <thead><tr><th>Age group</th><th>ABPM/HBPM target</th></tr></thead>
        <tbody>
          <tr><td>Aged &lt;80</td><td>&lt;135/85 mmHg</td></tr>
          <tr><td>Aged ≥80</td><td>&lt;145/85 mmHg</td></tr>
        </tbody>
      </table>
      <p class="callout">★ Same BP targets apply whether or not cardiovascular disease is present [2022]</p>
      <ul><li>Use clinic BP to monitor treatment response</li></ul>

      <h4>Special Prescribing</h4>
      <ul>
        <li>Isolated systolic HTN (SBP ≥160): treat same as combined systolic+diastolic HTN</li>
        <li>Prefer once-daily formulations; prescribe non-proprietary where appropriate</li>
        <li>CVD present: apply condition-specific guidance (ACS, CHF) alongside HTN treatment</li>
        <li>Women of childbearing potential: if planning pregnancy/pregnant/breastfeeding follow NG133</li>
        <li class="alert-inline">ACEi and ARB: do <strong>NOT</strong> use in pregnancy — see MHRA safety advice</li>
        <li>T2DM newly diagnosed on antihypertensives: review BP control and medications</li>
      </ul>
    `,

    referral: `
      <div class="alert-box">
        <p><strong>BP ≥180/120 mmHg WITH any of the following → same-day specialist referral:</strong></p>
        <ul>
          <li>Retinal haemorrhage or papilloedema (= <strong>accelerated/malignant hypertension</strong>)</li>
          <li>New-onset confusion, chest pain, signs of heart failure, or acute kidney injury</li>
          <li>Suspected <strong>phaeochromocytoma</strong>: labile/postural hypotension, headache, palpitations, pallor, abdominal pain, diaphoresis</li>
        </ul>
      </div>

      <h4>BP ≥180/120 mmHg — No Same-Day Referral Criteria Met</h4>
      <ul>
        <li>Investigate for target organ damage urgently
          <ul>
            <li>If TOD found: consider starting treatment immediately (no ABPM needed)</li>
            <li>If no TOD: repeat clinic BP within 7 days <strong>OR</strong> arrange ABPM/HBPM with clinical review within 7 days</li>
          </ul>
        </li>
      </ul>

      <h4>Other Referral Indications</h4>
      <ul>
        <li class="callout">★ Consider specialist evaluation for secondary causes in adults aged under 40</li>
        <li>Resistant hypertension uncontrolled on optimal tolerated doses of 4 drugs</li>
        <li>Persistent significant postural hypotension despite treatment adjustment</li>
      </ul>
    `,

    monitoring: `
      <h4>Annual Review — All Patients</h4>
      <ul>
        <li>BP measurement, lifestyle support, symptoms, medication review</li>
        <li class="callout">★ Confirm optimal tolerated dose at each step before escalating treatment</li>
        <li>Aged ≥80, T2DM, or symptomatic: always check for postural hypotension
          <ul><li>If significant postural drop: treat to standing BP target</li></ul>
        </li>
        <li class="callout">★ Use clinical judgement for frailty/multimorbidity — individualise targets</li>
      </ul>

      <h4>Self-Monitoring (HBPM)</h4>
      <ul>
        <li>Advise patients who wish to self-monitor to use validated HBPM devices
          <ul><li>NHS England blood pressure@home scheme supports HBPM</li></ul>
        </li>
        <li>Provide training on device use + action plan if target not met</li>
        <li>HBPM/ABPM targets are 5 mmHg lower than equivalent clinic thresholds</li>
        <li>Consider ABPM/HBPM additionally if white-coat or masked HTN suspected</li>
      </ul>

      <h4>Adherence</h4>
      <ul>
        <li>Review adherence before each treatment escalation</li>
        <li>Review medications to confirm optimal tolerated doses prescribed</li>
        <li>Consider objective adherence assessment in resistant hypertension</li>
      </ul>

      <h4>BP Measurement Protocols</h4>
      <p><strong>HBPM protocol:</strong></p>
      <ul>
        <li>2 readings ≥1 min apart, seated, BD for ≥4 days (ideally 7); discard day 1</li>
      </ul>
      <p><strong>ABPM protocol:</strong></p>
      <ul>
        <li>≥2 readings/hour during waking hours; use average of ≥14 readings</li>
      </ul>
    `
  },

  {
    id: "cvd-lipids",
    title: "CVD: Risk Assessment & Lipid Modification",
    subtitle: "QRISK3 · Statin choice · Primary & secondary prevention · Monitoring",
    system: "Cardiovascular",
    nice_ref: "NG238",
    updated: "Oct 2025",

    diagnosis: `
      <h4>Who to Assess (Primary Prevention)</h4>
      <ul>
        <li>Use systematic strategy in primary care to identify high-risk adults</li>
        <li>Prioritise those with estimated 10-yr CVD risk &ge;10% (from existing records)</li>
        <li>Review CVD risk estimates ongoing for adults over 40</li>
      </ul>

      <h4>Risk Tool: QRISK3</h4>
      <ul>
        <li>Use <strong>QRISK3</strong> for adults aged 25&ndash;84 without established CVD (incl. T2DM)</li>
        <li>Do <strong>NOT</strong> use risk tools for: T1DM &middot; eGFR &lt;60 or albuminuria (CKD) &middot; Familial hypercholesterolaemia</li>
        <li>Risk may be <strong>underestimated</strong> in: HIV &middot; severe mental illness &middot; autoimmune/inflammatory disorders &middot; recent ex-smokers &middot; immunosuppressants</li>
        <li>Adults &ge;85 &mdash; consider at increased risk due to age alone</li>
        <li class="callout">★ Consider QRISK3-lifetime for those with 10-yr score &lt;10% or aged &lt;40 with risk factors &mdash; useful to motivate lifestyle change</li>
      </ul>

      <h4>Initial Lipid Measurement</h4>
      <ul>
        <li>Measure total <strong>and</strong> HDL cholesterol for best CVD risk estimate</li>
        <li>Use full lipid profile + family history to judge familial disorder &mdash; not cut-offs alone</li>
        <li>Exclude secondary causes before specialist referral: alcohol &middot; uncontrolled DM &middot; hypothyroidism &middot; liver disease &middot; nephrotic syndrome</li>
      </ul>

      <h4>Aspirin</h4>
      <div class="alert-box"><strong>Do NOT routinely offer aspirin for primary prevention of CVD</strong></div>
    `,

    management: `
      <h4>Lifestyle Modifications</h4>
      <ul>
        <li>Diet: total fat &le;30% of total energy; saturated fat &le;7%; replace with mono/polyunsaturated fats; use olive oil or rapeseed oil</li>
        <li>Physical activity: advise aerobic + muscle-strengthening per UK CMO guidelines</li>
        <li>Weight: manage overweight/obesity per NICE NG246</li>
        <li>Smoking: advise cessation per NICE NG209</li>
        <li class="callout">★ Do NOT advise plant stanols/sterols for CVD prevention (primary or secondary, CKD, T1/T2DM)</li>
      </ul>

      <h4>Primary Prevention: Treatment Pathway</h4>
      <ul>
        <li>1. Optimise lifestyle changes; reassess risk after lifestyle attempt</li>
        <li>2. Treat comorbidities and secondary causes of dyslipidaemia first</li>
        <li>3. If lifestyle ineffective or inappropriate &rarr; offer statin</li>
      </ul>

      <h4>Statin Choice</h4>
      <ul>
        <li><strong>Atorvastatin 20 mg OD</strong> &mdash; offer if QRISK3 &ge;10%</li>
        <li>Consider atorvastatin 20 mg even if QRISK3 &lt;10%: if informed preference or risk may be underestimated</li>
        <li>Age &ge;85: consider atorvastatin 20 mg (weigh appropriateness)</li>
        <li>T1DM: offer statin if age &gt;40 OR diabetes &gt;10 yrs OR nephropathy OR other CVD risk factors &mdash; use <strong>atorvastatin 20 mg</strong></li>
      </ul>

      <h4>Secondary Prevention: First-line Treatment</h4>
      <ul>
        <li><strong>Atorvastatin 80 mg OD</strong> &mdash; offer to ALL adults with established CVD regardless of baseline cholesterol</li>
        <li>Lower dose if: drug interactions &middot; high adverse effect risk &middot; patient preference &middot; CKD (eGFR &lt;60) &mdash; use atorvastatin 20 mg</li>
        <li class="callout">★ Do NOT delay statin in ACS &mdash; measure full lipid profile on admission and at 2&ndash;3 months</li>
      </ul>

      <h4>Escalation if Target Not Met</h4>
      <ul>
        <li><strong>Step 1:</strong> Check adherence; optimise dose to highest tolerated intensity</li>
        <li><strong>Step 2:</strong> Add ezetimibe (TA385) &mdash; consider even if target IS met (secondary prevention)</li>
        <li><strong>Step 3:</strong> If target still not met on ezetimibe &mdash; consider injectable therapies:
          <ul>
            <li>PCSK9 inhibitors: evolocumab (TA394) or alirocumab (TA393) &mdash; via specialist</li>
            <li>Inclisiran (siRNA, 2&ndash;3 monthly then 6-monthly) &mdash; specialist initiation</li>
            <li>Bempedoic acid + ezetimibe (TA694) &mdash; if statins contraindicated/not tolerated</li>
          </ul>
        </li>
      </ul>

      <h4>CKD: Statin Treatment</h4>
      <ul>
        <li>Atorvastatin 20 mg for primary OR secondary prevention in all CKD patients</li>
        <li>If lipid target not met and eGFR &ge;30: increase atorvastatin dose</li>
        <li class="callout">★ Do NOT increase atorvastatin dose if eGFR &lt;30 &mdash; seek renal specialist advice</li>
      </ul>

      <h4>Drugs NOT to Use for CVD Prevention</h4>
      <ul>
        <li>Fibrates &mdash; do NOT prescribe routinely</li>
        <li>Omega-3 fatty acids &mdash; not routinely (exception: icosapent ethyl per NICE TA, specialist)</li>
        <li>Niacin (nicotinic acid) &mdash; do NOT use</li>
      </ul>

      <h4>Statin Intolerance</h4>
      <ul>
        <li>Offer ezetimibe instead of statin (TA385) &mdash; whatever cholesterol level</li>
        <li>Try lower dose &middot; switch statin (e.g. rosuvastatin) &middot; lower-intensity statin</li>
        <li class="callout">★ Any statin at any dose reduces CVD risk &mdash; discuss this with patients. Do NOT stop statin for rise in HbA1c/glucose &mdash; CVD benefit outweighs diabetes risk</li>
      </ul>
    `,

    referral: `
      <h4>Refer to Specialist</h4>
      <div class="alert-box">
        <strong>Urgent: Triglycerides &gt;20 mmol/L</strong> (not due to alcohol/DM) &mdash; urgent specialist referral
      </div>
      <ul>
        <li>Total cholesterol &gt;9.0 mmol/L <strong>or</strong> non-HDL &gt;7.5 mmol/L &mdash; even without family history</li>
        <li>Triglycerides 10&ndash;20 mmol/L: repeat fasting in 5 days (within 2 weeks); if still &gt;10 &rarr; specialist</li>
        <li>Triglycerides 4.5&ndash;9.9 mmol/L: risk may be underestimated; optimise other risk factors; specialist if non-HDL &gt;7.5</li>
        <li>Refer for familial hypercholesterolaemia per NICE CG71</li>
        <li>Secondary prevention LDL still &gt;2.0 on statin + ezetimibe: refer for PCSK9i / inclisiran</li>
      </ul>

      <h4>Quick Decision Guide</h4>
      <table>
        <thead>
          <tr><th>Scenario</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>QRISK3 &ge;10%, no CVD</td><td>Atorvastatin 20 mg (discuss lifestyle first)</td></tr>
          <tr><td>Established CVD</td><td>Atorvastatin 80 mg (do not delay)</td></tr>
          <tr><td>CKD (any stage)</td><td>Atorvastatin 20 mg</td></tr>
          <tr><td>T1DM &gt;40 yrs or &gt;10 yr duration</td><td>Atorvastatin 20 mg</td></tr>
          <tr><td>Statin not tolerated</td><td>Ezetimibe first line</td></tr>
          <tr><td>2&deg; prev. LDL &gt;2.0 on max statin</td><td>Add ezetimibe</td></tr>
          <tr><td>2&deg; prev. LDL still &gt;2.0 on statin+eze</td><td>Refer for PCSK9i / inclisiran</td></tr>
          <tr><td>TC &gt;9.0 or non-HDL &gt;7.5 mmol/L</td><td>Refer specialist</td></tr>
          <tr><td>TG &gt;20 mmol/L</td><td>Urgent specialist referral</td></tr>
          <tr><td>Pregnancy planned</td><td>Stop statin 3 months before conception</td></tr>
        </tbody>
      </table>
    `,

    monitoring: `
      <h4>Pre-Statin Baseline Bloods</h4>
      <table>
        <thead>
          <tr><th>Test</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td>Full lipid profile</td><td>Essential for baseline</td></tr>
          <tr><td>Liver transaminases (ALT/AST)</td><td>Do not exclude if &lt;3&times; ULN</td></tr>
          <tr><td>Renal function</td><td>Guides dose in CKD</td></tr>
          <tr><td>Diabetes status</td><td>HbA1c / glucose</td></tr>
          <tr><td>TSH</td><td>If thyroid symptoms</td></tr>
          <tr><td>CK</td><td>Only if pre-existing unexplained muscle symptoms</td></tr>
        </tbody>
      </table>
      <ul>
        <li>If baseline CK &gt;5&times; ULN: recheck at 7 days &mdash; if still &gt;5&times; ULN do <strong>NOT</strong> start statin</li>
        <li>If CK raised but &lt;5&times; ULN: start at lower dose</li>
      </ul>

      <h4>Lipid Monitoring Schedule</h4>
      <table>
        <thead>
          <tr><th>Timepoint</th><th>Tests</th></tr>
        </thead>
        <tbody>
          <tr><td>Baseline</td><td>Full lipid profile &middot; LFTs (ALT/AST) &middot; Renal function &middot; HbA1c/glucose &middot; CK if muscle symptoms</td></tr>
          <tr><td>2&ndash;3 months after starting/changing therapy</td><td>Full lipid profile &middot; ALT/AST</td></tr>
          <tr><td>12 months</td><td>ALT/AST (then not again unless clinically indicated)</td></tr>
          <tr><td>Ongoing</td><td>Lipid profile as clinically indicated</td></tr>
        </tbody>
      </table>

      <h4>Response Targets</h4>
      <ul>
        <li><strong>Primary prevention:</strong> &gt;40% reduction in non-HDL cholesterol from baseline</li>
        <li><strong>Secondary prevention:</strong> LDL &le;2.0 mmol/L OR non-HDL &le;2.6 mmol/L</li>
        <li class="callout">★ QOF indicator NM252: LDL &le;2.0 mmol/L or non-HDL &le;2.6 mmol/L in past 12 months</li>
        <li>If primary prevention target not met at 3 months: check adherence, consider dose increase or add ezetimibe</li>
        <li>If secondary prevention target not met: escalate per stepped pathway (ezetimibe &rarr; injectable)</li>
      </ul>

      <h4>Muscle Symptoms &amp; Liver Safety</h4>
      <ul>
        <li>Ask about pre-existing unexplained muscle pain/tenderness/weakness before starting</li>
        <li>Advise patient to report unexplained muscle symptoms during treatment</li>
        <li>If symptoms arise &rarr; measure CK:
          <ul>
            <li>CK &lt;5&times; ULN: reassure &mdash; likely not statin-related; explore other causes</li>
            <li>CK &gt;5&times; ULN: stop statin; recheck at 7 days</li>
          </ul>
        </li>
        <li class="callout">★ Do NOT routinely measure CK in asymptomatic patients on statins</li>
        <li>Transaminases &lt;3&times; ULN: continue statin &mdash; do not exclude</li>
        <li>Transaminases &ge;3&times; ULN: stop statin; recheck at 1 month; investigate other causes</li>
        <li class="callout">★ Do NOT routinely recheck LFTs after 12 months unless clinically indicated</li>
      </ul>

      <h4>Pregnancy</h4>
      <ul>
        <li>Statins contraindicated in pregnancy &mdash; stop <strong>3 months before conception</strong>; do not restart until breastfeeding finished</li>
      </ul>
    `
  },

  {
    id: "heart-failure",
    title: "Chronic Heart Failure in Adults",
    subtitle: "HFrEF · HFmrEF · HFpEF · Four-pillar therapy · NT-proBNP · Monitoring",
    system: "Cardiovascular",
    nice_ref: "NG106",
    updated: "Sep 2025",

    diagnosis: `
      <h4>Classification &amp; Definitions</h4>
      <table>
        <thead>
          <tr><th>Type</th><th>LVEF</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>HFrEF</strong> &mdash; HF with Reduced EF</td><td>&lt;40%</td></tr>
          <tr><td><strong>HFmrEF</strong> &mdash; HF with Mildly Reduced EF</td><td>41&ndash;49%</td></tr>
          <tr><td><strong>HFpEF</strong> &mdash; HF with Preserved EF</td><td>&gt;50%</td></tr>
        </tbody>
      </table>

      <h4>NYHA Classification</h4>
      <table>
        <thead>
          <tr><th>Class</th><th>Symptoms</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>I</strong></td><td>No limitation of physical activity</td></tr>
          <tr><td><strong>II</strong></td><td>Slight limitation; comfortable at rest</td></tr>
          <tr><td><strong>III</strong></td><td>Marked limitation; comfortable only at rest</td></tr>
          <tr><td><strong>IV</strong></td><td>Symptoms at rest; any activity causes discomfort</td></tr>
        </tbody>
      </table>

      <h4>Investigations</h4>
      <ul>
        <li>Measure <strong>NT-proBNP</strong> in all suspected HF</li>
        <li>ECG, CXR, U&amp;E, TFTs, LFTs, lipids, HbA1c, FBC, urinalysis, spirometry</li>
        <li>Transthoracic echocardiography &mdash; confirms diagnosis, assesses EF and valves</li>
        <li class="callout">★ NT-proBNP &lt;400 ng/L in untreated patient makes HF less likely</li>
        <li class="callout">★ NT-proBNP does NOT differentiate HFrEF / HFmrEF / HFpEF</li>
      </ul>

      <h4>NT-proBNP Referral Thresholds</h4>
      <table>
        <thead>
          <tr><th>NT-proBNP</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>&gt;2,000 ng/L</strong></td><td>Urgent referral: echo + specialist within <strong>2 weeks</strong></td></tr>
          <tr><td><strong>400&ndash;2,000 ng/L</strong></td><td>Routine referral: echo + specialist within <strong>6 weeks</strong></td></tr>
          <tr><td><strong>&lt;400 ng/L</strong></td><td>Less likely HF &mdash; review alternative causes</td></tr>
        </tbody>
      </table>

      <h4>Factors Affecting NT-proBNP</h4>
      <ul>
        <li><strong>Falsely low:</strong> obesity, African/Caribbean ethnicity, diuretics, ACEi/ARNI/ARB, beta-blocker, MRA</li>
        <li><strong>Falsely raised (non-HF):</strong> renal, hepatic or pulmonary disease; COPD; diabetes; sepsis; cirrhosis</li>
      </ul>
    `,

    management: `
      <h4>HFrEF Pharmacological Treatment</h4>
      <div class="alert-box">
        <strong>NEW 2025: Four-pillar therapy is now first-line for ALL HFrEF</strong><br>
        Offer ALL 4 simultaneously if tolerated:<br>
        <strong>ACE inhibitor + Beta-blocker + MRA + SGLT2 inhibitor</strong>
      </div>

      <p><strong>If symptoms persist on max tolerated dose of all 4:</strong></p>
      <ul>
        <li>Consider switching ACEi to <strong>ARNI</strong> (sacubitril/valsartan)</li>
        <li>Wait &gt;36 hrs after last ACEi dose before starting ARNI</li>
        <li class="callout">★ Primary care: seek specialist advice before starting ARNI</li>
      </ul>

      <p><strong>ACEi intolerance (not angioedema):</strong></p>
      <ul>
        <li>Offer ARNI + beta-blocker + MRA + SGLT2i</li>
      </ul>

      <p><strong>Angioedema to ACEi / intolerance to ARNI:</strong></p>
      <ul>
        <li>Offer beta-blocker + MRA + SGLT2i; consider ARB</li>
      </ul>

      <p><strong>Further specialist treatments:</strong></p>
      <ul>
        <li><strong>Ivabradine</strong> &mdash; per NICE TA267</li>
        <li><strong>Digoxin</strong> &mdash; worsening/severe HFrEF despite optimised 4-pillar therapy (specialist advice)</li>
        <li><strong>Hydralazine + nitrate</strong> &mdash; if ACEi/ARNI/ARB not tolerated (specialist advice); especially African/Caribbean ethnicity NYHA III/IV</li>
        <li class="callout">★ Avoid verapamil, diltiazem, short-acting dihydropyridines in HFrEF</li>
      </ul>

      <h4>HFmrEF Treatment (EF 41&ndash;49%)</h4>
      <div class="alert-box"><strong>NEW 2025: Four-pillar therapy now considered for HFmrEF</strong></div>
      <ul>
        <li>Consider ACEi + beta-blocker + MRA + SGLT2i</li>
        <li>If ACEi intolerant: consider ARB + beta-blocker + MRA + SGLT2i</li>
        <li>SGLT2i: empagliflozin (TA929) or dapagliflozin (TA902)</li>
      </ul>

      <h4>HFpEF Treatment (EF &gt;50%)</h4>
      <div class="alert-box"><strong>NEW 2025: SGLT2i and MRA now recommended for HFpEF</strong></div>
      <ul>
        <li>Consider MRA + SGLT2 inhibitor</li>
        <li>SGLT2i: empagliflozin (TA929) or dapagliflozin (TA902)</li>
        <li>Treat comorbidities; manage fluid overload with diuretics</li>
      </ul>

      <h4>Chronic Kidney Disease</h4>
      <ul>
        <li>eGFR &lt;45: lower starting doses and smaller dose increments</li>
        <li>eGFR &lt;30: specialist MDT to consider renal physician liaison</li>
      </ul>

      <h4>IV Iron Therapy (HFrEF)</h4>
      <p>Assess iron status in ALL HFrEF patients:</p>
      <table>
        <thead>
          <tr><th>Test</th><th>Iron Deficiency Threshold</th></tr>
        </thead>
        <tbody>
          <tr><td>TSAT</td><td>&lt;20%</td></tr>
          <tr><td>Serum ferritin</td><td>&lt;100 ng/mL</td></tr>
          <tr><td>Haemoglobin</td><td>Hb &lt;150 g/L &mdash; triggers IV iron consideration</td></tr>
        </tbody>
      </table>
      <ul>
        <li>Consider IV iron (iron sucrose / ferric carboxymaltose / ferric derisomaltose)</li>
        <li class="callout">★ Ferric carboxymaltose: monitor phosphate (hypophosphataemia risk)</li>
        <li class="callout">★ Iron deficiency anaemia &mdash; investigate alternative causes; do not assume HF-related</li>
      </ul>
    `,

    referral: `
      <h4>When to Refer / Specialist Involvement</h4>
      <div class="alert-box">
        <strong>Refer urgently (within 2 weeks):</strong>
        <ul>
          <li>NT-proBNP &gt;2,000 ng/L &mdash; echo + specialist within 2 weeks</li>
          <li>Decompensated or advanced HF (NYHA III&ndash;IV) &mdash; specialist MDT</li>
        </ul>
      </div>
      <div class="alert-box">
        <strong>Refer routinely (within 6 weeks):</strong>
        <ul>
          <li>NT-proBNP 400&ndash;2,000 ng/L &mdash; echo + specialist within 6 weeks</li>
        </ul>
      </div>
      <ul>
        <li>HF not responding to treatment</li>
        <li>HF caused by valve disease &mdash; refer for specialist assessment</li>
        <li>Suspected HF but no cardiac abnormality found</li>
        <li>eGFR &lt;30: specialist HF MDT to consider renal physician liaison</li>
        <li>Post-procedure (ICD/CRT): continue specialist management</li>
        <li class="callout">★ Primary care prescribers: seek specialist advice before starting ARNI</li>
      </ul>

      <h4>Primary Care Role &amp; Care Planning</h4>
      <ul>
        <li>Recall patient <strong>at least every 6 months</strong>; update clinical record</li>
        <li>Lead full review of HF care (may form part of long-term conditions review)</li>
        <li>Ensure effective communication between care settings</li>
        <li>Routine management handed to primary care once stable and optimised post-discharge</li>
      </ul>
      <p><strong>Care plan must include:</strong></p>
      <ul>
        <li>Diagnosis, aetiology, medicines and monitoring plan</li>
        <li>Symptoms to watch for; deterioration action plan</li>
        <li>Named coordinator (usually specialist HF nurse) contact details</li>
        <li>Copy given to patient, family/carers and all professionals involved</li>
      </ul>

      <h4>Palliative &amp; End-of-Life Care</h4>
      <ul>
        <li>Involve palliative care when appropriate via specialist MDT</li>
        <li>Advance care planning: wishes, resuscitation, ICD deactivation</li>
        <li>Discuss prognosis honestly; revisit as condition evolves</li>
        <li class="callout">★ End-of-life: diuretics, opioids and anxiolytics for symptom control</li>
      </ul>
    `,

    monitoring: `
      <h4>Starting &amp; Monitoring Medicines</h4>
      <p><strong>Before starting ACEi / ARNI / ARB / MRA:</strong></p>
      <ul>
        <li>Measure eGFR and electrolytes</li>
        <li>Measure BP before and after each dose increment</li>
      </ul>
      <p><strong>After starting / each dose increment:</strong></p>
      <ul>
        <li>eGFR + electrolytes at <strong>1&ndash;2 weeks</strong>, then every <strong>3&ndash;6 months</strong></li>
        <li>Recheck any time renal function may be compromised</li>
        <li class="callout">★ Creatinine rises &gt;50% or K&plus; &gt;5.5 mmol/L &mdash; follow local guidelines</li>
        <li>Hyperkalaemia: patiromer (TA623) or SZC (TA599)</li>
      </ul>
      <p><strong>Beta-blockers:</strong></p>
      <ul>
        <li>12-lead ECG before prescribing: check rhythm, rate, conduction</li>
        <li class="callout">★ Avoid if 2nd/3rd degree heart block (no pacemaker) or HR &lt;50 bpm</li>
        <li>Assess HR and clinical status after each dose increment</li>
        <li>Do not withhold for: age, PVD, DM, ILD, COPD, erectile dysfunction</li>
      </ul>

      <h4>Clinical Review (Min. 6-Monthly in Primary Care)</h4>
      <ul>
        <li>Functional capacity, fluid status, cardiac rhythm, cognitive + nutritional status</li>
        <li>Do not routinely monitor digoxin; check 8&ndash;12 hrs post-dose if toxicity suspected</li>
        <li>Influenza + pneumococcal vaccination; avoid NSAIDs/COX-2 inhibitors</li>
      </ul>

      <h4>Cardiac Rehabilitation &amp; Lifestyle</h4>
      <ul>
        <li><strong>Cardiac rehabilitation</strong> &mdash; exercise-based programme; offer to all including housebound</li>
      </ul>

      <h4>Information &amp; Shared Decision Making</h4>
      <ul>
        <li>Specialist MDT: extended first consultation at diagnosis</li>
        <li>Second consultation within <strong>2 weeks</strong> if possible</li>
        <li>Discuss: diagnosis, prognosis, treatments, risk of sudden death</li>
        <li>Be frank about prognostic uncertainty; revisit as condition evolves</li>
        <li class="callout">★ Involve family/carers; encourage questions at each consultation</li>
      </ul>
    `
  },

  {
    id: "atrial-fibrillation",
    title: "Atrial Fibrillation",
    subtitle: "Detection · CHA\u2082DS\u2082-VASc · DOAC therapy · Rate &amp; rhythm control · Monitoring",
    system: "Cardiovascular",
    nice_ref: "NG196",
    updated: "Jun 2021",

    diagnosis: `
      <h4>Suspect AF if patient presents with:</h4>
      <ul>
        <li>Breathlessness, palpitations, syncope/dizziness, chest discomfort, or stroke/TIA</li>
      </ul>

      <h4>Step 1 — Manual Pulse Palpation</h4>
      <ul>
        <li>Assess for irregular pulse in all suspected cases</li>
      </ul>

      <h4>Step 2 — 12-lead ECG</h4>
      <ul>
        <li>Perform ECG to confirm diagnosis if irregular pulse detected — with or without symptoms</li>
      </ul>

      <h4>Suspected Paroxysmal AF (ECG negative)</h4>
      <ul>
        <li>Episodes &lt;24 h apart or asymptomatic: 24-hour ambulatory ECG</li>
        <li>Episodes &gt;24 h apart: ambulatory ECG, event recorder or other ECG technology for appropriate period</li>
      </ul>

      <h4>Echocardiography (TTE) — arrange when:</h4>
      <ul>
        <li>Baseline echo needed for long-term management</li>
        <li>Rhythm-control strategy (including cardioversion) planned</li>
        <li>Suspected structural/functional heart disease</li>
        <li>Refining antithrombotic risk stratification needed</li>
      </ul>
      <div class="alert-box">Do NOT do routine TTE solely to further risk-stratify if anticoagulation decision already made</div>

      <h4>Stroke Risk — CHA&#x2082;DS&#x2082;-VASc</h4>
      <ul>
        <li>Use in: all AF types (paroxysmal/persistent/permanent), atrial flutter, ongoing arrhythmia risk post-cardioversion or ablation</li>
      </ul>
      <table>
        <thead>
          <tr><th>Factor</th><th>Points</th></tr>
        </thead>
        <tbody>
          <tr><td>C — Congestive HF</td><td>1</td></tr>
          <tr><td>H — Hypertension</td><td>1</td></tr>
          <tr><td>A&#x2082; — Age &ge;75</td><td>2</td></tr>
          <tr><td>D — Diabetes mellitus</td><td>1</td></tr>
          <tr><td>S&#x2082; — Stroke/TIA/TE history</td><td>2</td></tr>
          <tr><td>V — Vascular disease</td><td>1</td></tr>
          <tr><td>A — Age 65–74</td><td>1</td></tr>
          <tr><td>Sc — Sex (female)</td><td>1</td></tr>
        </tbody>
      </table>

      <h4>Bleeding Risk — ORBIT Score</h4>
      <ul>
        <li>Use ORBIT (not HAS-BLED) — higher accuracy for absolute bleeding risk</li>
        <li>Use to support shared decision-making; identify modifiable risk factors</li>
      </ul>
      <p><strong>Modifiable bleeding risk factors to address:</strong></p>
      <ul>
        <li>Uncontrolled hypertension · Poor INR control · Antiplatelets/SSRIs/NSAIDs · Harmful alcohol use · Reversible anaemia</li>
      </ul>
      <div class="alert-box">Do NOT withhold anticoagulation solely because of age or falls risk</div>
    `,

    management: `
      <h4>Anticoagulation Decisions</h4>
      <table>
        <thead>
          <tr><th>CHA&#x2082;DS&#x2082;-VASc Score</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>Score &ge;2 (any)</td><td><strong>Offer DOAC</strong></td></tr>
          <tr><td>Score 1 (men only)</td><td><strong>Consider DOAC</strong></td></tr>
          <tr><td>Score 0 (men) / 1 (women)</td><td>No anticoagulation</td></tr>
        </tbody>
      </table>

      <h4>DOAC First-line (if no contraindication)</h4>
      <ul>
        <li>Apixaban · Dabigatran · Edoxaban · Rivaroxaban</li>
        <li>Check BNF for renal dosing, reversal agents, contraindications</li>
      </ul>

      <h4>If DOAC Contraindicated/Not Tolerated</h4>
      <ul>
        <li>Offer vitamin K antagonist (warfarin)</li>
        <li>If already on stable VKA — review at next routine appointment; switch if appropriate based on TTR</li>
      </ul>

      <h4>VKA Monitoring — Reassess if:</h4>
      <ul>
        <li>2 INR values &gt;5 or 1 INR &gt;8 in past 6 months</li>
        <li>2 INR values &lt;1.5 in past 6 months</li>
        <li>Time in therapeutic range (TTR) &lt;65%</li>
      </ul>

      <div class="alert-box">
        <strong>Do NOT offer:</strong>
        <ul>
          <li>Aspirin monotherapy for stroke prevention in AF</li>
          <li>Left atrial appendage occlusion (LAAO) as alternative to anticoagulation unless contraindicated/not tolerated</li>
        </ul>
      </div>

      <h4>Rate Control — First-line (non-acute)</h4>
      <p>Offer rate control UNLESS: reversible cause of AF · HF primarily caused by AF · New-onset AF · Suitable for ablation · Clinical judgement favours rhythm control</p>
      <table>
        <thead>
          <tr><th>Drug</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td>Beta-blocker (not sotalol)</td><td>First-line monotherapy; most patients</td></tr>
          <tr><td>Diltiazem or verapamil</td><td>Rate-limiting CCB; check LV function</td></tr>
          <tr><td>Digoxin (monotherapy)</td><td>Non-paroxysmal AF; sedentary; CCB/BB ruled out</td></tr>
        </tbody>
      </table>
      <ul>
        <li><strong>HF + AF:</strong> follow NG106 — use beta-blockers; avoid CCBs</li>
        <li><strong>Combination therapy:</strong> if monotherapy fails — any 2 of: beta-blocker, diltiazem, digoxin</li>
      </ul>
      <div class="alert-box">Do NOT use amiodarone for long-term rate control</div>

      <h4>Rhythm Control &amp; Cardioversion</h4>
      <p><strong>Consider rhythm control if:</strong> symptoms persist despite rate control, or rate-control strategy unsuccessful</p>
      <ul>
        <li><strong>First-line:</strong> standard beta-blocker (not sotalol) unless contraindicated</li>
        <li><strong>Second-line:</strong> dronedarone (post-cardioversion, per TA197) or amiodarone (LV impairment/HF)</li>
      </ul>
      <div class="alert-box">Avoid flecainide/propafenone in ischaemic or structural heart disease</div>

      <h4>Pill-in-the-Pocket — Consider if:</h4>
      <ul>
        <li>Infrequent symptomatic paroxysmal AF</li>
        <li>No LV dysfunction, valvular or ischaemic heart disease</li>
        <li>SBP &gt;100 mmHg, HR &gt;70 bpm; patient understands when/how to use</li>
      </ul>

      <h4>Cardioversion</h4>
      <ul>
        <li>AF persisting &gt;48 h: prefer electrical cardioversion</li>
        <li>Consider amiodarone 4 weeks pre- and up to 12 months post-cardioversion to maintain sinus rhythm</li>
        <li>TOE-guided cardioversion: consider if minimal pre-cardioversion anticoagulation desired</li>
      </ul>

      <h4>Left Atrial Ablation</h4>
      <ul>
        <li>Symptomatic paroxysmal or persistent AF failing drug treatment</li>
        <li>Radiofrequency ablation first choice; cryoballoon/laser balloon if RF unsuitable</li>
        <li>Discuss: not always effective; may not be long-lasting</li>
        <li>Consider surgical ablation concurrently with other cardiothoracic surgery</li>
      </ul>

      <h4>Acute AF Management</h4>
      <div class="alert-box"><strong>If haemodynamically unstable — emergency electrical cardioversion immediately</strong></div>
      <p><strong>If haemodynamically stable — rate or rhythm control:</strong></p>
      <ul>
        <li>Rate control: IV beta-blocker or rate-limiting CCB (diltiazem/verapamil)</li>
        <li>Rhythm control: electrical or pharmacological cardioversion</li>
      </ul>
      <p><strong>Onset &lt;48 hours:</strong></p>
      <ul>
        <li>Immediate cardioversion is an option; anticoagulate before and continue for at least 4 weeks post-cardioversion</li>
        <li>Consider long-term anticoagulation based on stroke risk</li>
      </ul>
      <p><strong>Onset &gt;48 hours or unknown:</strong></p>
      <ul>
        <li>Anticoagulate for at least 3 weeks prior to cardioversion (or use TOE-guided strategy to exclude LAA thrombus)</li>
        <li>Continue anticoagulation for at least 4 weeks post-cardioversion</li>
        <li>Long-term anticoagulation based on CHA&#x2082;DS&#x2082;-VASc score</li>
      </ul>
      <p><strong>Acute AF + Stroke/TIA:</strong></p>
      <ul>
        <li>Do not start anticoagulation immediately after disabling ischaemic stroke — risk of haemorrhagic transformation</li>
        <li>Timing of anticoagulation start: follow NG128 (Stroke/TIA guideline)</li>
        <li>Consider early anticoagulation after TIA once haemorrhage excluded on imaging</li>
      </ul>

      <p class="callout">★ Shared decision-making throughout — use patient decision aids</p>
    `,

    referral: `
      <h4>Referral — within 4 weeks if:</h4>
      <ul>
        <li>Treatment fails to control AF symptoms</li>
        <li>Recurrence after cardioversion</li>
      </ul>

      <h4>Personalised Care Package should include:</h4>
      <ul>
        <li>Stroke awareness and prevention measures</li>
        <li>Rate control plan · Symptom/rhythm assessment</li>
        <li>Education: AF, complications, anticoagulation, support networks</li>
        <li>Psychological support if needed</li>
        <li>Contact point for advice</li>
      </ul>

      <h4>Non-anticoagulated patients — reassess stroke risk if:</h4>
      <ul>
        <li>Age reaches 65 · New diabetes · New heart failure · PAD · CHD · Stroke/TIA/thromboembolism</li>
      </ul>

      <p class="callout">★ Signpost to AF Association / British Heart Foundation for patient support</p>
    `,

    monitoring: `
      <h4>Annual Monitoring — All AF Patients</h4>
      <table>
        <thead>
          <tr><th>Parameter</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>Anticoagulation</td><td>Review need + quality annually</td></tr>
          <tr><td>Stroke risk (CHA&#x2082;DS&#x2082;-VASc)</td><td>Reassess if new risk factors</td></tr>
          <tr><td>Bleeding risk (ORBIT)</td><td>Assess + address modifiable factors</td></tr>
          <tr><td>Renal function (DOACs)</td><td>Monitor — adjust dose if needed</td></tr>
          <tr><td>INR (warfarin)</td><td>TTR; reassess if TTR &lt;65%</td></tr>
        </tbody>
      </table>

      <h4>Stopping Anticoagulation — consider if:</h4>
      <ul>
        <li>AF resolves and not expected to recur, or reversible cause treated</li>
        <li>Always reassess stroke risk before stopping; shared decision-making</li>
      </ul>

      <h4>Annual Review — Anticoagulated Patients</h4>
      <ul>
        <li>Review need for, and quality of, anticoagulation annually (or sooner if clinically indicated)</li>
      </ul>

      <h4>Preventing Postoperative AF</h4>
      <ul>
        <li>Consider amiodarone prophylaxis for cardiothoracic surgery patients at risk</li>
      </ul>

      <h4>Safety Netting</h4>
      <ul>
        <li>Seek urgent help: worsening breathlessness, syncope, palpitations, neurological symptoms</li>
      </ul>
    `
  },

  {
    id: "tloc-blackouts",
    title: "Transient Loss of Consciousness (Blackouts)",
    subtitle: "Vasovagal · Cardiac red flags · ECG · Referral pathways · Driving advice",
    system: "Cardiovascular",
    nice_ref: "CG109",
    updated: "Nov 2023",

    diagnosis: `
      <h4>Overview</h4>
      <ul>
        <li><strong>TLoC</strong> = spontaneous loss of consciousness with complete, spontaneous recovery and no residual neurological deficit</li>
        <li>Affects up to 50% of the population at some point; cardiovascular causes most common</li>
        <li>Misdiagnosis is common — systematic assessment is essential</li>
      </ul>

      <h4>Causes of TLoC</h4>
      <table>
        <thead>
          <tr><th>Category</th><th>Examples</th></tr>
        </thead>
        <tbody>
          <tr><td>Neurally mediated (reflex)</td><td>Vasovagal, situational, carotid sinus</td></tr>
          <tr><td>Postural hypotension</td><td>Drug-induced, autonomic, dehydration</td></tr>
          <tr><td>Cardiac arrhythmic</td><td>Bradyarrhythmia, tachyarrhythmia, channelopathy</td></tr>
          <tr><td>Structural cardiac</td><td>Aortic stenosis, HCM, PE</td></tr>
          <tr><td>Neurological / other</td><td>Epilepsy, PNES, hypoglycaemia</td></tr>
        </tbody>
      </table>

      <h4>History — Ask Patient AND Witness (QS71 Statement 1)</h4>
      <ul>
        <li><strong>Before:</strong> posture, activity, symptoms (sweating, warmth, nausea, palpitations, chest pain, aura, déjà vu)</li>
        <li><strong>During:</strong> skin colour, eye position, limb movements, tongue biting, incontinence, duration</li>
        <li><strong>After:</strong> confusion, headache, injury, time to full recovery</li>
        <li><strong>Background:</strong> previous episodes, frequency; personal/family Hx cardiac disease, sudden death &lt;40 yrs; current medications (esp. diuretics, antihypertensives, QT-prolonging drugs)</li>
      </ul>

      <h4>Features Suggesting Epilepsy — Refer Neurology within 2 Weeks</h4>
      <ul>
        <li>Bitten tongue</li>
        <li>Head-turning to one side during TLoC</li>
        <li>No memory of abnormal behaviour witnessed before/during/after</li>
        <li>Unusual posturing; prolonged limb-jerking</li>
        <li>Prodromal déjà vu or jamais vu</li>
      </ul>
      <p class="callout">★ Brief seizure-like activity (stiffening, jerking) can occur in uncomplicated vasovagal faint — does NOT automatically indicate epilepsy</p>

      <h4>Examination (QS71 Statement 1)</h4>
      <ul>
        <li>Vital signs: pulse rate, BP, respiratory rate, temperature</li>
        <li>Lying and standing BP (if postural hypotension suspected)</li>
        <li>Full cardiovascular examination: murmurs, signs of HF</li>
        <li>Neurological examination if indicated</li>
        <li><strong>12-lead ECG — mandatory in all suspected TLoC</strong> (QS71 Statement 2)</li>
        <li>Arrange ECG within <strong>3 days</strong> if not yet performed in primary care</li>
      </ul>

      <h4>ECG Red Flags — Refer within 24 hrs if ANY Present (QS71 Statement 2)</h4>
      <div class="alert-box">
        <ul>
          <li>Conduction abnormality: complete RBBB, LBBB, or any degree of heart block</li>
          <li>Prolonged QT or QRS interval</li>
          <li>Short PR interval / delta waves (WPW)</li>
          <li>ST elevation pattern: Brugada (V1–V3 coved ST elevation)</li>
          <li>LV or RV hypertrophy</li>
          <li>Pathological Q waves; abnormal T-wave inversion</li>
          <li>Sustained atrial arrhythmia or paced rhythm</li>
        </ul>
      </div>
      <p class="callout">★ ECG must be interpreted by automated analysis or clinician competent in identifying these abnormalities. Report must be available in full clinical context.</p>
    `,

    management: `
      <h4>Diagnoses Managed in Primary Care</h4>

      <p><strong>Uncomplicated Vasovagal Syncope — diagnose if ALL met:</strong></p>
      <ul>
        <li>No features suggesting alternative diagnosis</li>
        <li>The 3 Ps present:
          <ul>
            <li><strong>Posture</strong> — prolonged standing, or prevented by lying down</li>
            <li><strong>Provoking factor</strong> — pain, medical procedure, emotion, heat</li>
            <li><strong>Prodromal symptoms</strong> — sweating, warmth/hot, nausea, light-headedness</li>
          </ul>
        </li>
        <li>No further management needed if no clinical/social concern</li>
      </ul>
      <p class="callout">★ If initial assessment not by GP: advise patient to bring ECG/report form to their GP</p>

      <p><strong>Situational Syncope:</strong></p>
      <ul>
        <li>Consistently provoked by micturition (standing), coughing, or swallowing</li>
        <li>No alternative diagnosis features — no further action needed</li>
      </ul>

      <p><strong>Postural Hypotension (amended Nov 2023):</strong></p>
      <ul>
        <li>Suspect if no alternative diagnosis and history is typical</li>
        <li>Measure lying BP then standing BP at 1 min: positive if systolic fall &ge;20 mmHg OR diastolic fall &ge;10 mmHg (per NG136)</li>
        <li>If seated was used initially and result negative but symptoms persist, repeat supine to standing</li>
        <li>If confirmed: review medications (diuretics, antihypertensives), manage underlying cause</li>
      </ul>
      <div class="alert-box">If BP measurements do not confirm postural hypotension despite suggestive symptoms — refer for specialist cardiovascular assessment</div>

      <h4>Specialist Investigations (QS71 Statement 6)</h4>
      <p><strong>Ambulatory ECG for suspected arrhythmic syncope:</strong></p>
      <table>
        <thead>
          <tr><th>TLoC Frequency</th><th>Ambulatory ECG Type</th></tr>
        </thead>
        <tbody>
          <tr><td>Several times/week or more</td><td>Holter monitor (24–48 hrs); if no event, switch to external event recorder</td></tr>
          <tr><td>Every 1–2 weeks</td><td>External event recorder; if further TLoC, offer ILR</td></tr>
          <tr><td>Less than once every 2 weeks</td><td>Implantable loop recorder (ILR)</td></tr>
        </tbody>
      </table>
      <ul>
        <li>Do <strong>not</strong> use Holter as first choice unless ECG shows conduction abnormality</li>
      </ul>

      <p><strong>Other specialist investigations:</strong></p>
      <ul>
        <li><strong>Carotid sinus massage:</strong> offer to patients with suspected carotid sinus syncope OR unexplained syncope aged &ge;60 yrs — must be in controlled setting with ECG and resuscitation equipment</li>
        <li><strong>Tilt test:</strong> do NOT offer if vasovagal syncope confirmed at initial assessment; only for recurrent vasovagal TLoC affecting QoL or high injury risk</li>
        <li><strong>Cardiac imaging:</strong> if structural heart disease suspected</li>
        <li>Do <strong>not</strong> use EEG routinely in investigation of TLoC (use only in epilepsy pathway)</li>
      </ul>

      <h4>Exercise Testing (QS71 Statement 5)</h4>
      <ul>
        <li>TLoC <strong>during</strong> exercise: cardiac arrhythmic cause probable — offer urgent exercise test within <strong>7 days</strong></li>
        <li>TLoC shortly <strong>after stopping</strong> exercise: vasovagal more likely</li>
      </ul>
      <div class="alert-box">Contraindicated if suspected aortic stenosis or HCM — imaging first</div>
    `,

    referral: `
      <h4>Urgent Cardiac Referral — within 24 Hours if ANY of: (QS71 Statement 3)</h4>
      <div class="alert-box">
        <ul>
          <li>Any ECG red flag (see Diagnosis tab)</li>
          <li>Heart failure (history or signs)</li>
          <li>TLoC during exertion</li>
          <li>Family Hx sudden cardiac death age &lt;40 yrs and/or inherited cardiac condition</li>
          <li>New or unexplained breathlessness</li>
          <li>Heart murmur on auscultation</li>
        </ul>
      </div>
      <p class="callout">★ Consider 24-hr referral for anyone aged &gt;65 yrs with TLoC and no prodromal symptoms</p>

      <h4>Refer ALL Other TLoC for Specialist Cardiovascular Assessment</h4>
      <ul>
        <li><strong>Exceptions:</strong> firm diagnosis of uncomplicated faint, situational syncope, postural hypotension, or features strongly suggestive of epilepsy (refer neurology instead)</li>
      </ul>

      <h4>Specialist Cardiovascular Assessment Includes (QS71 Statement 4)</h4>
      <ul>
        <li>Full cardiovascular and lying/standing BP examination</li>
        <li>Repeat 12-lead ECG; review previous ECGs</li>
        <li>Assign to: structural heart disease / cardiac arrhythmia / neurally mediated / unexplained</li>
      </ul>

      <h4>Neurology Referral — within 2 Weeks if:</h4>
      <ul>
        <li>Bitten tongue, head-turning, prolonged limb-jerking, prodromal déjà vu/jamais vu, or no memory of abnormal behaviour during episode</li>
      </ul>
    `,

    monitoring: `
      <h4>Driving Advice — Advise at First Presentation</h4>
      <div class="alert-box"><strong>All patients awaiting specialist assessment: must NOT drive</strong></div>
      <ul>
        <li><strong>Group 1</strong> (car/motorcycle): typical vasovagal or recurrent syncope with avoidable trigger occurring only when standing — may drive, no DVLA notification needed</li>
        <li><strong>Group 1:</strong> no reliable prodrome, unexplained syncope, cough syncope, cardiovascular cause suspected, or seizure suspected — must not drive, notify DVLA</li>
      </ul>
      <div class="alert-box"><strong>Group 2 (bus/lorry):</strong> stop driving and notify DVLA after any TLoC episode, including typical vasovagal</div>
      <p class="callout">★ Following specialist assessment, advise patient of DVLA reporting obligations. Check current DVLA 'assessing fitness to drive' guidance before advising individual patients — reviewed regularly.</p>

      <h4>Patient Advice for Vasovagal / Situational Syncope</h4>
      <ul>
        <li>Explain trigger events and avoidance strategies</li>
        <li>If triggers unclear: keep symptom diary (circumstances, timing, activity)</li>
        <li>Return to GP if further TLoC, especially if episode differs from usual</li>
        <li>Physical counterpressure manoeuvres (leg crossing, hand gripping) may abort episodes</li>
        <li>Advise on implications for health and safety at work</li>
      </ul>

      <h4>Safety Netting — Advise Patient to Seek Urgent Review if:</h4>
      <div class="alert-box">
        <ul>
          <li>TLoC during exertion, or while seated/lying</li>
          <li>Associated chest pain, palpitations, or breathlessness</li>
          <li>New/changed seizure-like movements</li>
          <li>Injury from episode; or episode differs from previous typical faints</li>
        </ul>
      </div>
    `
  },

  {
    id: "stable-angina",
    title: "Stable Angina: Management",
    subtitle: "GTN relief · Beta-blocker/CCB · Stepped drug treatment · Revascularisation · Monitoring",
    system: "Cardiovascular",
    nice_ref: "CG126",
    updated: "Aug 2016",

    diagnosis: `
      <h4>Background</h4>
      <ul>
        <li>Chest pain/discomfort triggered by exertion, emotional stress, cold or heavy meals</li>
        <li>May radiate to neck, shoulder, jaw or arms; atypical: GI discomfort, breathlessness, nausea</li>
        <li>Caused by myocardial ischaemia — usually atherosclerotic CAD limiting O&#x2082; delivery</li>
        <li>Prevalence: ~8% men / 3% women aged 55–64; ~14% men / 8% women aged 65–74</li>
        <li>Aim: minimise symptoms, improve QoL, reduce long-term morbidity and mortality</li>
      </ul>
      <p class="callout">★ Do not exclude from treatment based on age alone; manage equally across sex and ethnicity</p>

      <h4>Diagnosis</h4>
      <ul>
        <li>Diagnose per NICE CG95 (recent-onset chest pain of suspected cardiac origin)</li>
        <li>Manage unstable angina/NSTEMI per CG95, CG94 and NG185 (ACS)</li>
      </ul>
      <div class="alert-box">Advise patient to seek urgent help if sudden worsening in frequency or severity</div>

      <h4>Patient Information &amp; Support</h4>
      <p><strong>Explain to patient:</strong></p>
      <ul>
        <li>Precipitants: exertion, stress, cold, heavy meals</li>
        <li>Long-term course, treatment aims, prognosis</li>
        <li>Address misconceptions about heart attack risk and life expectancy</li>
      </ul>
      <p><strong>Explore and address:</strong></p>
      <ul>
        <li>Self-management: pacing activities, goal-setting</li>
        <li>Impact of stress, anxiety, depression on symptoms</li>
        <li>Physical exertion — including sexual activity</li>
        <li>Lifestyle: smoking cessation, diet, weight, exercise</li>
      </ul>
      <p class="callout">★ Encourage questions; involve family/carers where appropriate</p>

      <h4>Acute Symptom Relief — Short-acting Nitrate (GTN spray/tablet)</h4>
      <ul>
        <li>Offer for both prevention and treatment of episodes</li>
        <li>Use immediately before planned exertion</li>
        <li>If episode: repeat dose after 5 minutes if no relief</li>
      </ul>
      <div class="alert-box"><strong>Call 999 if pain persists 5 min after second dose</strong></div>
      <ul>
        <li>Warn: flushing, headache, light-headedness — sit down if dizzy</li>
      </ul>
    `,

    management: `
      <h4>Optimal Drug Treatment — General Principles</h4>
      <ul>
        <li>Optimal drug treatment = 1–2 anti-anginal drugs + secondary prevention drugs</li>
        <li>Aim of anti-anginals: prevent angina episodes</li>
        <li>Aim of secondary prevention: prevent MI and stroke</li>
        <li>Review response (including side effects) <strong>2–4 weeks</strong> after starting or changing treatment</li>
        <li>Titrate up to <strong>maximum tolerable dose</strong> against symptoms</li>
      </ul>

      <h4>First-line: Beta-blocker OR Calcium Channel Blocker (CCB)</h4>
      <ul>
        <li>Choose based on comorbidities, contraindications, patient preference</li>
      </ul>
      <table>
        <thead>
          <tr><th>Drug class</th><th>Prefer when</th></tr>
        </thead>
        <tbody>
          <tr><td>Beta-blocker</td><td>Heart failure with reduced EF, post-MI, tachyarrhythmia</td></tr>
          <tr><td>CCB (dihydropyridine)</td><td>Raynaud's, asthma/COPD, bradycardia</td></tr>
          <tr><td>Rate-limiting CCB (diltiazem/verapamil)</td><td>Preferred alternative if BB not tolerated</td></tr>
        </tbody>
      </table>
      <ul>
        <li>If BB not tolerated: switch to CCB (and vice versa)</li>
        <li>If symptoms not controlled on monotherapy: combine BB + dihydropyridine CCB</li>
      </ul>
      <div class="alert-box">Do NOT combine beta-blocker with rate-limiting CCB (diltiazem/verapamil) — risk of bradycardia/AV block</div>

      <h4>Second-line: Add or Switch</h4>
      <p>If BB + CCB combination not controlled, OR one is contraindicated/not tolerated — add one of:</p>
      <ul>
        <li>Long-acting nitrate OR ivabradine OR nicorandil OR ranolazine</li>
        <li>Decision based on comorbidities, contraindications, preference and cost</li>
      </ul>
      <div class="alert-box">
        <ul>
          <li><strong>Ivabradine:</strong> MHRA safety concerns — bradycardia risk; use only if sinus rhythm, HR &ge;70</li>
          <li><strong>Nicorandil:</strong> now second-line; risk of GI ulceration (MHRA Jan 2016)</li>
        </ul>
      </div>
      <p class="callout">★ When combining ivabradine + CCB: use dihydropyridine CCB only</p>

      <h4>Third-line: Exceptional Circumstances Only</h4>
      <ul>
        <li>Add a third anti-anginal drug ONLY if: symptoms not controlled on two anti-anginals, AND patient awaiting revascularisation OR revascularisation not appropriate/acceptable</li>
        <li>Do not add third drug if symptoms are controlled on two drugs</li>
      </ul>

      <h4>Comorbidity-Guided Drug Selection</h4>
      <table>
        <thead>
          <tr><th>Comorbidity</th><th>Preferred anti-anginal</th></tr>
        </thead>
        <tbody>
          <tr><td>Heart failure (HFrEF)</td><td>Beta-blocker (carvedilol, bisoprolol)</td></tr>
          <tr><td>Asthma / COPD</td><td>CCB (avoid beta-blocker)</td></tr>
          <tr><td>Bradycardia / AV block</td><td>DHP-CCB; avoid BB + rate-limiting CCB</td></tr>
          <tr><td>Diabetes</td><td>Either; ACE inhibitor for 2° prevention</td></tr>
          <tr><td>Hypertension</td><td>BB or CCB (dual benefit)</td></tr>
          <tr><td>Peripheral arterial disease</td><td>CCB preferred over BB</td></tr>
          <tr><td>Post-MI</td><td>Beta-blocker (mortality benefit)</td></tr>
        </tbody>
      </table>

      <h4>Secondary Prevention (All Patients)</h4>
      <ul>
        <li><strong>Aspirin 75 mg daily</strong> — consider, balancing bleeding risk and comorbidities</li>
        <li><strong>ACE inhibitor</strong> — consider if diabetes; offer/continue for other indications per NICE</li>
        <li><strong>Statin</strong> — offer per NICE lipid modification guideline</li>
        <li><strong>Antihypertensives</strong> — offer per NICE hypertension guideline (NG136)</li>
      </ul>
      <div class="alert-box">Do NOT offer vitamin or fish oil supplements — no evidence of benefit</div>
    `,

    referral: `
      <h4>Investigation &amp; Revascularisation — Symptoms Not Controlled</h4>
      <ul>
        <li>Consider revascularisation (CABG or PCI) if symptoms not satisfactorily controlled on optimal medical treatment</li>
        <li>Offer <strong>coronary angiography</strong> to guide treatment strategy</li>
        <li>Additional non-invasive or invasive functional testing may be needed to evaluate angiographic findings</li>
      </ul>

      <h4>CABG vs PCI — Decision-Making</h4>
      <p><strong>When either procedure is appropriate — explain to patient:</strong></p>
      <ul>
        <li>Main purpose: symptom relief (not always prognostic benefit)</li>
        <li>CABG and PCI are both effective at relieving symptoms</li>
        <li>Repeat revascularisation rate: lower after CABG than PCI</li>
        <li>Stroke risk: uncommon with both; similar incidence</li>
        <li>Potential survival advantage with CABG for some multivessel disease</li>
      </ul>
      <p><strong>Prefer CABG over PCI if multivessel disease AND any of:</strong></p>
      <ul>
        <li>Diabetes</li>
        <li>Age &gt;65 years</li>
        <li>Anatomically complex three-vessel disease &plusmn; left main stem</li>
      </ul>
      <p><strong>PCI may be preferred (cost-effective) if:</strong></p>
      <ul>
        <li>Anatomically less complex disease and patient has no preference</li>
      </ul>
      <p class="callout">★ MDT meeting required for left main stem / complex three-vessel disease — must include cardiac surgeons and interventional cardiologists</p>

      <h4>Symptoms Satisfactorily Controlled — Further Investigation</h4>
      <ul>
        <li>Discuss prognosis without further investigation</li>
        <li>Explain likelihood of left main stem or proximal three-vessel disease</li>
        <li>Consider functional or non-invasive anatomical test to identify survival benefit from surgery</li>
        <li>Consider coronary angiography if functional testing shows extensive ischaemia AND revascularisation acceptable</li>
        <li>Consider CABG if angiography confirms left main stem or proximal three-vessel disease</li>
      </ul>

      <h4>Pain Interventions — Not Recommended</h4>
      <div class="alert-box">Do NOT offer: TENS, enhanced external counterpulsation (EECP), or acupuncture</div>

      <h4>Refractory / Unresponsive Angina</h4>
      <p>For patients not responding to drug treatment and/or revascularisation:</p>
      <ul>
        <li>Comprehensive re-evaluation: review diagnosis; consider non-ischaemic causes of pain</li>
        <li>Explore impact of symptoms on quality of life</li>
        <li>Review drug treatment; consider future options</li>
        <li>Acknowledge limitations of further treatment</li>
        <li>Explore psychological factors in pain; teach skills to modify pain cognitions and behaviours</li>
        <li>Explain self-management strategies for pain control</li>
      </ul>

      <h4>Cardiac Syndrome X</h4>
      <ul>
        <li>Consider if: angiographically normal coronaries + continuing anginal symptoms</li>
        <li>Continue drug treatment only if it improves symptoms</li>
      </ul>
      <div class="alert-box">Do NOT routinely offer secondary prevention drugs to suspected cardiac syndrome X</div>
    `,

    monitoring: `
      <h4>After Starting or Changing Drug Treatment</h4>
      <ul>
        <li>Review at <strong>2–4 weeks</strong> — response and side effects</li>
        <li>Titrate to maximum tolerable dose</li>
      </ul>

      <h4>Ongoing Reviews</h4>
      <ul>
        <li>Assess symptom control and functional status</li>
        <li>Check adherence and explore barriers</li>
        <li>Review secondary prevention medications</li>
        <li>Monitor for drug side effects (e.g. bradycardia on BB, ankle oedema on CCB)</li>
        <li>Lifestyle: smoking, weight, exercise, diet, alcohol</li>
      </ul>
      <p class="callout">★ Ensure patient knows: seek emergency care if chest pain unrelieved by 2 doses of GTN over 10 min</p>
    `
  },

  // ─────────────────────────────────────────────
  //  RESPIRATORY
  // ─────────────────────────────────────────────

  {
    id: "asthma",
    title: "Asthma: Diagnosis & Chronic Management",
    subtitle: "FeNO/spirometry diagnosis · AIR regimen · MART stepwise therapy · Risk-stratified review",
    system: "Respiratory",
    nice_ref: "NG245",
    updated: "Nov 2024",

    diagnosis: `
      <h4>Clinical Assessment</h4>
      <ul>
        <li>Obtain structured history: wheeze, cough, breathlessness, chest tightness — note nocturnal/early-morning/seasonal variation</li>
        <li>Ask about triggers, atopic personal/family history (asthma, allergic rhinitis)</li>
        <li>Consider alternative diagnoses: COPD, VCD, cardiac, GORD, hyperventilation</li>
        <li>Do <strong>not</strong> confirm asthma without a suggestive history <strong>AND</strong> supporting objective test — code as <em>suspected asthma</em> until confirmed</li>
        <li>ICS use may normalise FeNO/spirometry — test before or after adequate washout if possible</li>
        <li class="callout">★ Treat immediately if acutely unwell; perform objective tests once stable</li>
      </ul>

      <h4>Objective Tests — Adults (&gt;16 yrs)</h4>
      <div class="step-block">
        <p class="step-header">Step 1 — FeNO or blood eosinophil count</p>
        <ul><li>FeNO ≥50 ppb <strong>OR</strong> eosinophil count above lab reference range → <strong>diagnose asthma</strong></li></ul>
      </div>
      <div class="step-block">
        <p class="step-header">Step 2 (if Step 1 negative) — Spirometry + BDR</p>
        <ul><li>FEV₁ increase ≥12% <strong>AND</strong> ≥200 mL post-bronchodilator (or ≥10% of predicted FEV₁) → <strong>diagnose asthma</strong></li></ul>
      </div>
      <div class="step-block">
        <p class="step-header">Step 3 (if spirometry unavailable/delayed) — PEF variability</p>
        <ul><li>PEF twice daily × 2 weeks — variability (amplitude % mean) ≥20% → <strong>diagnose asthma</strong></li></ul>
      </div>
      <div class="step-block">
        <p class="step-header">Step 4 (if still suspected) — Bronchial challenge test</p>
        <ul><li>Refer; bronchial hyper-responsiveness present → <strong>diagnose asthma</strong></li></ul>
      </div>

      <h4>Objective Tests — Children 5–16 yrs</h4>
      <ul>
        <li><strong>Step 1:</strong> FeNO ≥35 ppb → diagnose asthma</li>
        <li><strong>Step 2:</strong> Spirometry BDR ≥12% from baseline (or ≥10% predicted FEV₁)</li>
        <li><strong>Step 3:</strong> PEF variability ≥20% over 2 weeks</li>
        <li><strong>Step 4:</strong> Skin prick test (house dust mite) or total IgE + eosinophil count
          <ul>
            <li>Exclude if no sensitisation and IgE not raised</li>
            <li>Diagnose if sensitised/raised IgE <strong>AND</strong> eosinophil count &gt;0.5 × 10⁹/L</li>
          </ul>
        </li>
        <li>Still in doubt → refer to paediatric specialist for bronchial challenge</li>
      </ul>

      <h4>Children Under 5</h4>
      <ul>
        <li>Diagnosis usually clinical — trial of paediatric low-dose ICS with regular review</li>
        <li>Attempt objective tests at age 5; retry every 6–12 months if unable to cooperate</li>
        <li class="callout">★ Refer preschool child with ≥1 hospital admission or ≥2 ED visits for wheeze in 12 months</li>
      </ul>

      <h4>Occupational Asthma</h4>
      <ul>
        <li>Screen all adult-onset, poorly controlled, or recurrent asthma for occupational cause</li>
        <li>Ask: symptoms better/worse on days away from work? Better on holiday?</li>
        <li>Refer to occupational asthma specialist if occupational cause suspected</li>
      </ul>
    `,

    management: `
      <h4>Before Stepping Up — Always Check</h4>
      <ul>
        <li>Alternative diagnosis or comorbidity</li>
        <li>Inhaler technique (check at every review, every asthma consultation)</li>
        <li>Adherence (use prescription records)</li>
        <li>Active/passive smoking or vaping</li>
        <li>Occupational exposures · Psychosocial factors (anxiety, depression)</li>
        <li>Environmental factors (air pollution, indoor mould)</li>
      </ul>
      <p class="alert-inline"><strong>Never prescribe SABA alone</strong> — always co-prescribe ICS</p>
      <ul>
        <li>Review response to new/changed treatment in <strong>8–12 weeks</strong></li>
        <li>Digital inhalers are <strong>not</strong> recommended for routine use</li>
      </ul>

      <h4>Inhaler Choice &amp; Technique</h4>
      <ul>
        <li>Base device choice on: correct technique, patient preference, lowest environmental impact, integral dose counter</li>
        <li>Prescribe spacer with MDI (especially children); consider same device type for preventer and reliever</li>
        <li>Observe technique at every review, every consultation, after any device change</li>
      </ul>

      <h4>Pharmacological Management — Aged ≥12 Years</h4>
      <div class="step-block">
        <p class="step-header">Step 1 — New diagnosis</p>
        <ul>
          <li>Offer <strong>low-dose ICS/formoterol as needed (AIR therapy)</strong>
            <ul><li>Only budesonide/formoterol licensed for AIR in mild asthma (Nov 2025)</li></ul>
          </li>
          <li>If highly symptomatic at presentation or severe exacerbation → start low-dose MART instead; step down to AIR if controlled later</li>
        </ul>
      </div>
      <div class="step-block">
        <p class="step-header">Step 2 — Not controlled on AIR</p>
        <ul><li>Offer <strong>low-dose MART</strong> (ICS/formoterol maintenance + reliever)</li></ul>
      </div>
      <div class="step-block">
        <p class="step-header">Step 3 — Not controlled on low-dose MART</p>
        <ul><li>Offer <strong>moderate-dose MART</strong></li></ul>
      </div>
      <div class="step-block alert-step">
        <p class="step-header">Step 4 — Not controlled on moderate-dose MART</p>
        <ul>
          <li>Check FeNO and blood eosinophil count
            <ul>
              <li>If either raised → <strong>refer to specialist</strong></li>
              <li>If neither raised → trial LTRA <strong>or</strong> LAMA added to moderate-dose MART for 8–12 weeks</li>
              <li>If improved but still inadequate → continue + trial the other add-on</li>
              <li>If no improvement → stop and trial the alternative (LTRA or LAMA)</li>
            </ul>
          </li>
        </ul>
        <p class="callout">★ MHRA: warn patients about neuropsychiatric reactions with montelukast</p>
      </div>

      <h4>Transferring Patients on Older Regimens</h4>
      <ul>
        <li>SABA-only → switch to low-dose ICS/formoterol as needed (AIR)</li>
        <li>Regular ICS/LABA + supplementary therapy → consider switch to moderate-dose MART</li>
        <li>High-dose ICS → <strong>refer to specialist</strong></li>
        <li class="callout">★ Existing stable patients do NOT have to switch regimen — only change if stepping up</li>
      </ul>

      <h4>Pharmacological Management — Children 5–11 yrs</h4>
      <div class="step-block">
        <p class="step-header">Step 1 — New diagnosis</p>
        <ul><li>Twice-daily <strong>paediatric low-dose ICS</strong> + SABA as needed</li></ul>
      </div>
      <div class="step-block">
        <p class="step-header">Step 2a — Not controlled (can manage MART)</p>
        <ul><li>Paediatric low-dose MART (off-label unless budesonide/formoterol 100/6 mcg DPI aged 6–11)</li></ul>
      </div>
      <div class="step-block">
        <p class="step-header">Step 2b — Not controlled (cannot manage MART)</p>
        <ul>
          <li>Add <strong>LTRA</strong> for 8–12 weeks trial; stop if ineffective</li>
          <li>If LTRA fails → paediatric low-dose ICS/LABA + SABA</li>
        </ul>
      </div>
      <div class="step-block">
        <p class="step-header">Step 3 — Not controlled</p>
        <ul><li>Paediatric <strong>moderate-dose MART</strong> (or moderate-dose ICS/LABA ±LTRA)</li></ul>
      </div>
      <h4>Under 5 Years</h4>
      <ul>
        <li>Trial 8–12 weeks twice-daily paediatric low-dose ICS if symptoms indicate maintenance or severe episodes</li>
        <li>If no response, consider stopping ICS and review diagnosis</li>
      </ul>

      <h4>Stepping Down Treatment</h4>
      <ul>
        <li>Consider step-down after good control for at least <strong>8–12 weeks</strong>; choose appropriate time (not during respiratory infection or pregnancy)</li>
        <li>Aged ≥12: stepping down from low-dose ICS + SABA or low-dose MART → switch to low-dose ICS/formoterol as needed (AIR)</li>
        <li>Do <strong>not</strong> stop ICS-containing treatment abruptly</li>
        <li>Agree monitoring plan and follow-up; update personalised asthma action plan (PAAP)</li>
        <li class="alert-inline">High-dose ICS — risk of adrenal insufficiency. Issue Steroid Emergency Card to adults; children &lt;16 on high-dose ICS should be under specialist</li>
      </ul>

      <h4>Pregnancy &amp; Breastfeeding</h4>
      <ul>
        <li>Continue asthma medication throughout pregnancy — risks of poorly controlled asthma outweigh risks of treatment</li>
        <li>Step up or down as per standard pathway; review frequently</li>
        <li>Follow BNF guidance on ICS doses in pregnancy and breastfeeding</li>
      </ul>

      <h4>ICS Dose Reference (Adults)</h4>
      <table>
        <thead><tr><th>Dose level</th><th>Beclometasone equiv/day</th></tr></thead>
        <tbody>
          <tr><td>Low</td><td>200–400 mcg</td></tr>
          <tr><td>Moderate</td><td>401–800 mcg</td></tr>
          <tr><td>High</td><td>&gt;800 mcg</td></tr>
        </tbody>
      </table>
    `,

    referral: `
      <div class="alert-box">
        <p><strong>Refer to specialist — aged ≥12, if not controlled on:</strong></p>
        <ul>
          <li>Moderate-dose MART + LTRA + LAMA (step 4 add-ons exhausted)</li>
          <li>FeNO or blood eosinophil count raised at step 4</li>
          <li>High-dose ICS regimen (any age)</li>
        </ul>
      </div>

      <div class="alert-box">
        <p><strong>Refer to specialist — children 5–11, if not controlled on:</strong></p>
        <ul>
          <li>Moderate-dose MART, <strong>or</strong></li>
          <li>Moderate-dose ICS/LABA (±LTRA)</li>
        </ul>
      </div>

      <div class="alert-box">
        <p><strong>Refer to paediatric specialist — preschool children (&lt;5):</strong></p>
        <ul>
          <li>≥1 hospital admission <strong>or</strong> ≥2 ED visits for wheeze in 12 months</li>
          <li>Diagnostic doubt after clinical trial of ICS</li>
        </ul>
      </div>

      <h4>Occupational Asthma</h4>
      <ul>
        <li>Refer to occupational asthma specialist if occupational cause is suspected</li>
      </ul>

      <h4>Adolescents</h4>
      <ul>
        <li>Ask if they vape or smoke — encourage cessation; signpost to NHS Stop Smoking services</li>
        <li>Consider transition planning to adult services</li>
      </ul>

      <h4>Self-Management Support</h4>
      <ul>
        <li>Offer personalised asthma action plan (PAAP) + education to all patients
          <ul>
            <li>Adults: symptom-based or PEF-based plans (symptom preferred)</li>
            <li>Children: usually symptom-based</li>
          </ul>
        </li>
        <li>Explain triggers including indoor/outdoor air pollution; include approaches to reduce exposure in PAAP</li>
        <li>Consider telehealthcare for self-management support</li>
      </ul>
    `,

    monitoring: `
      <h4>Monitoring Asthma Control — Every Review</h4>
      <ul>
        <li>Days off work/school due to asthma</li>
        <li>Reliever inhaler use (check prescription record)</li>
        <li>Courses of oral corticosteroids since last review</li>
        <li>A&amp;E attendance or hospital admission</li>
        <li>Consider validated questionnaire: ACQ, ACT, or Childhood ACT</li>
        <li>Consider FeNO monitoring at routine review and before/after therapy change (adults)</li>
        <li class="alert-inline">Do NOT use regular PEF monitoring for routine control assessment (unless in personalised action plan)</li>
      </ul>

      <h4>Identify High-Risk Patients Proactively</h4>
      <ul>
        <li>≥2 courses OCS per year</li>
        <li>Excessive SABA use (≥3 canisters/year)</li>
        <li>Any hospital admission or ≥2 ED visits for asthma</li>
        <li>Poor ICS adherence or persistently poor inhaler technique</li>
        <li>Raised FeNO or eosinophilia despite treatment</li>
        <li>Psychosocial vulnerability (anxiety/depression, social isolation)</li>
      </ul>
      <p><strong>For high-risk patients:</strong></p>
      <ul>
        <li>Use electronic alert systems/GP dashboards to flag; prioritise structured medication reviews</li>
        <li>Ensure up-to-date PAAP and consider MDT involvement</li>
      </ul>
      <p class="callout">★ Annual structured asthma review is the minimum for all patients on the asthma register</p>

      <h4>Inhaler Technique &amp; Adherence</h4>
      <ul>
        <li>Check inhaler technique at every review, every consultation, after any device change</li>
        <li>If FeNO raised when uncontrolled → may indicate poor ICS adherence or need for dose increase</li>
        <li>Encourage return of used/expired inhalers to pharmacy</li>
      </ul>
    `,

    air: `
      <h4>What is AIR Therapy?</h4>
      <p>AIR (Anti-Inflammatory Reliever) uses a <strong>low-dose ICS/formoterol inhaler as the sole reliever</strong> — taken only when symptoms occur. No separate SABA. No separate daily preventer at Step 1.</p>
      <ul>
        <li>Formoterol: rapid onset (~1–3 min) — suitable as rescue bronchodilator</li>
        <li>ICS component: treats airway inflammation at the moment it matters</li>
        <li>Replaces the old 'blue inhaler + separate preventer' model</li>
        <li>Step 1 of NG245: as-needed AIR only — no fixed daily dosing required</li>
        <li class="callout">★ NG245: prescribing SABA alone is no longer appropriate for any adult with asthma</li>
      </ul>

      <h4>How to Explain to Patients</h4>
      <p><em>"This inhaler is both your reliever AND your preventer. Use it whenever you have symptoms. Every puff treats the inflammation causing your asthma — not just the wheeze."</em></p>
      <ul>
        <li>Warn: there is no separate blue inhaler — some patients find this confusing</li>
        <li>Emphasise: do NOT stop using it even when well — it is their only inhaler</li>
        <li>Advise: if using it frequently (daily or more), book a review</li>
        <li>Provide PAAP: green/amber/red zones with puff counts as guidance</li>
        <li>Use ≥3 inhalations/week as a prompt for review</li>
      </ul>

      <h4>Why the Change from SABA?</h4>
      <p><strong>Problems with SABA-only relief:</strong></p>
      <ul>
        <li>SABA relieves bronchospasm but leaves underlying eosinophilic inflammation untreated</li>
        <li>Patients took reliever when symptomatic but skipped ICS preventer — inflammation unchecked</li>
        <li>SABA overuse (≥3 canisters/year) linked to increased exacerbation risk and asthma death</li>
        <li>Salbutamol desensitisation with overuse — reduced bronchodilator response over time</li>
      </ul>
      <p><strong>Benefits of AIR over SABA + separate ICS preventer:</strong></p>
      <ul>
        <li>Adherence is structurally built in — no "forgetting" the preventer</li>
        <li>GINA SABINA trial: AIR reduced severe exacerbations by 64% vs SABA-only</li>
        <li>Fewer total ICS doses yet better clinical outcomes — reduces over-treatment risk</li>
        <li>MART (Step 2) trials show superiority over fixed-dose ICS + SABA</li>
      </ul>

      <h4>Licensed AIR Inhalers in the UK (Adults &amp; Children ≥12 yrs, NG245 Nov 2024)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Device</th><th>Strength (mcg)</th><th>AIR dose</th><th>Max/day</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Symbicort Turbohaler</strong></td><td>DPI</td><td>200/6 metered</td><td>1 inh as needed</td><td>8 inh (12 limited*)</td><td>Reference product. 12-month shelf life after opening. Lower cost per dose on AIR.</td></tr>
          <tr><td><strong>Fobumix Easyhaler</strong></td><td>DPI</td><td>160/4.5† delivered</td><td>1 inh as needed</td><td>8 inh (12 limited*)</td><td>4-month shelf life after opening — may not suit low-use AIR patients.</td></tr>
          <tr><td><strong>DuoResp Spiromax</strong></td><td>DPI</td><td>160/4.5† delivered</td><td>1 inh as needed</td><td>8 inh (12 limited*)</td><td>Breath-actuated DPI with dose counter.</td></tr>
          <tr><td><strong>WockAIR</strong></td><td>DPI</td><td>160/4.5† delivered</td><td>1 inh as needed</td><td>8 inh (12 limited*)</td><td>Check local formulary for availability.</td></tr>
        </tbody>
      </table>
      <ul>
        <li>* &gt;8 inhalations/day should be temporary — always prompts urgent GP review</li>
        <li>† Delivered dose — clinically equivalent to Symbicort 200/6 metered dose</li>
        <li class="alert-inline">No pMDI is currently licensed for AIR therapy — pMDI use for AIR is off-label</li>
        <li>Symbicort 100/6: <strong>NOT</strong> licensed for AIR — licensed for MART only (≥12 yrs)</li>
      </ul>

      <h4>GP Prescribing Tips</h4>
      <ul>
        <li>Always prescribe by brand name — metered vs delivered dose differs between brands; doses are not interchangeable</li>
        <li>Fobumix: 4-month shelf life after opening — consider Symbicort for infrequent users</li>
        <li>Symbicort: 12-month shelf life — preferred for Step 1 AIR (infrequent use)</li>
        <li>Carbon footprint: all AIR inhalers are DPIs — lower environmental impact than pMDIs</li>
        <li>Supply the same brand each month — do not switch between equivalent brands</li>
        <li>FeNO before starting: ICS will reduce FeNO — test before initiating where possible</li>
      </ul>

      <h4>Transitions &amp; Step Down</h4>
      <p><strong>Switching existing SABA patients to AIR:</strong></p>
      <ul>
        <li>Stop salbutamol — do not co-prescribe alongside AIR inhaler</li>
        <li>Start budesonide/formoterol as-needed (AIR) — no daily dose required</li>
        <li>Explain clearly: one inhaler replaces both blue and brown inhaler</li>
      </ul>
      <p><strong>Stepping down to AIR (from MART or ICS+SABA):</strong></p>
      <ul>
        <li>Consider after ≥3 months of well-controlled asthma on low-dose MART</li>
        <li>Reduce ICS by ≥25–50% at each step — allow 8–12 weeks between steps</li>
        <li>Review FeNO, PEF and symptom scores before stepping down</li>
        <li class="alert-inline">Never step down during or within 3 months of an exacerbation</li>
      </ul>
    `,

    mart: `
      <h4>What is MART?</h4>
      <p>MART uses a <strong>single ICS/formoterol inhaler for both daily maintenance AND as-needed relief</strong>. No SABA needed — one inhaler replaces both preventer and reliever.</p>
      <ul>
        <li>Take <strong>1–2 puffs once or twice daily</strong> as maintenance (preventer)</li>
        <li>Take <strong>additional puffs as needed</strong> for symptom relief</li>
        <li>Formoterol's rapid onset (~1–3 min) makes it effective as rescue therapy</li>
        <li>ICS delivered with every relief puff — anti-inflammatory at every use</li>
      </ul>
      <p><strong>MART vs AIR:</strong></p>
      <ul>
        <li>AIR (Step 1): as-needed only — no fixed daily dose — mild/newly diagnosed</li>
        <li>MART (Steps 2–3): fixed daily maintenance + as-needed relief</li>
      </ul>
      <p><strong>When to start:</strong></p>
      <ul>
        <li>Step 2: uncontrolled on AIR → low-dose MART</li>
        <li>Step 3: uncontrolled on low-dose MART → moderate-dose MART</li>
        <li>Highly symptomatic or post-exacerbation → start at Step 2 directly</li>
      </ul>

      <h4>Before Stepping Up — Always Check First</h4>
      <ul>
        <li><strong>Adherence</strong> — check prescription refill frequency</li>
        <li><strong>Inhaler technique</strong> — commonest cause of apparent poor control</li>
        <li><strong>Triggers</strong> — allergens, NSAIDs, smoking, GORD, rhinitis, occupational</li>
        <li><strong>Diagnosis</strong> — exclude VCD, COPD, cardiac, or anxiety mimicking asthma</li>
        <li><strong>FeNO + blood eosinophils</strong> — if raised on moderate MART → refer to specialist</li>
      </ul>

      <h4>MART vs Fixed-Dose ICS/LABA + SABA</h4>
      <ul>
        <li>Single inhaler — improves adherence</li>
        <li>ICS at every symptomatic episode, not just scheduled doses</li>
        <li>Reduces SABA overuse — linked to excess asthma mortality</li>
        <li>NICE analysis: MART dominant — more effective, lower cost</li>
        <li>30–50% fewer severe exacerbations vs fixed-dose ICS/LABA + SABA</li>
      </ul>
      <p><strong>Fixed-dose ICS/LABA + SABA remains appropriate only if:</strong></p>
      <ul>
        <li>Intolerant to formoterol — use salmeterol/vilanterol product</li>
        <li>Directed by secondary care · patient stable and well-controlled</li>
      </ul>

      <h4>Licensed MART Inhalers in the UK (NG245 Nov 2024)</h4>
      <p><strong>Budesonide/formoterol — licensed for AIR and MART, adults ≥12 yrs</strong></p>
      <table>
        <thead>
          <tr><th>Brand</th><th>Device</th><th>Strength (mcg)</th><th>Low-dose MART</th><th>Mod-dose MART</th><th>Max relief/occasion</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Symbicort Turbohaler</strong></td><td>DPI</td><td>100/6 · 200/6 metered</td><td>1 inh BD</td><td>2 inh BD (200/6)</td><td>6 inh / 8 per day (12 limited*)</td><td>100/6: moderate asthma only. 200/6: moderate or severe. 12-month shelf life.</td></tr>
          <tr><td><strong>Fobumix Easyhaler</strong></td><td>DPI</td><td>160/4.5† delivered</td><td>1 inh BD</td><td>2 inh BD</td><td>6 inh / 8 per day (12 limited*)</td><td>†Equiv to Symbicort 200/6. 4-month shelf life — may not suit infrequent users.</td></tr>
          <tr><td><strong>DuoResp Spiromax</strong></td><td>DPI</td><td>160/4.5† delivered</td><td>1 inh BD</td><td>2 inh BD</td><td>6 inh / 8 per day (12 limited*)</td><td>†Equiv to Symbicort 200/6. Breath-actuated DPI with dose counter.</td></tr>
          <tr><td><strong>WockAIR</strong></td><td>DPI</td><td>160/4.5† delivered</td><td>1 inh BD</td><td>2 inh BD</td><td>6 inh / 8 per day (12 limited*)</td><td>†Equiv to Symbicort 200/6. Check local formulary for availability.</td></tr>
        </tbody>
      </table>
      <p><strong>Beclometasone/formoterol — MART only, NOT licensed for AIR; adults ≥18 yrs only</strong></p>
      <table>
        <thead>
          <tr><th>Brand</th><th>Device</th><th>Strength (mcg)</th><th>Low-dose MART</th><th>Mod-dose MART</th><th>Relief</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Fostair NEXThaler</strong></td><td>DPI</td><td>100/6 delivered</td><td>1–2 inh BD</td><td>2 inh BD (higher = off-label)</td><td>SABA for relief</td><td>Extra-fine DPI. Low-dose MART only. NOT licensed for AIR. Lower carbon than MDI.</td></tr>
          <tr><td><strong>Fostair pMDI</strong></td><td>pMDI</td><td>100/6 delivered</td><td>1–2 inh BD</td><td>Not licensed</td><td>SABA for relief</td><td>100/6 only for MART. 200/6 NOT licensed for MART. Higher carbon — use NEXThaler DPI.</td></tr>
          <tr><td><strong>Luforbec (Bibecfo, Proxor) pMDI</strong></td><td>pMDI</td><td>100/6 delivered</td><td>1–2 inh BD</td><td>Not licensed</td><td>SABA for relief</td><td>Branded generic of Fostair 100/6 pMDI — same indications. 200/6 NOT for MART. Prescribe by brand.</td></tr>
        </tbody>
      </table>
      <p><strong>Budesonide/formoterol MDI — MART only; adults ≥18 yrs (lower formoterol dose per puff)</strong></p>
      <table>
        <thead>
          <tr><th>Brand</th><th>Device</th><th>Strength (mcg)</th><th>Low-dose MART</th><th>Mod-dose MART</th><th>Relief</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Symbicort 100/3 MDI</strong></td><td>pMDI</td><td>100/3 metered</td><td>2 inh BD</td><td>4 inh BD (caution: higher bud dose)</td><td>SABA for relief</td><td>Less formoterol/puff vs Turbohaler 100/6 — more puffs → higher cumulative budesonide. Use DPI where possible.</td></tr>
        </tbody>
      </table>
      <ul>
        <li>* &gt;8 inh/day should be temporary — urgent review required</li>
        <li>† 160/4.5 mcg delivered = Symbicort 200/6 mcg metered — clinically equivalent</li>
        <li class="alert-inline">Bec/form 200/6 is NOT licensed for MART. No bec/form is licensed for AIR.</li>
      </ul>

      <h4>GP Prescribing Tips</h4>
      <ul>
        <li>Prescribe by brand name always — dose expression differs between devices</li>
        <li class="alert-inline">Beclometasone 100/6 ≠ budesonide 100/6 — extra-fine vs standard particle; not interchangeable</li>
        <li>Fostair/Luforbec 200/6 NOT licensed for MART — 100/6 only for bec/form MART</li>
        <li>Symbicort 100/3 MDI: lower formoterol/puff — more puffs → higher budesonide; prefer DPI</li>
        <li>No SABA on MART — do not co-prescribe salbutamol; document if exception made</li>
        <li>MART + LTRA/LAMA: if adding at Step 3, MART dose continues unchanged</li>
        <li>Carbon: all budesonide/formoterol MART inhalers are DPIs — prefer over pMDI</li>
        <li>Review trigger: &gt;3 extra relief puffs/week or daily use → book review</li>
        <li>Issue Steroid Emergency Card if maintenance ≥800 mcg/day budesonide equivalent</li>
      </ul>

      <h4>Patient Counselling + PAAP Guidance</h4>
      <p><em>"This inhaler does two jobs — take your regular doses every day to prevent symptoms, then use the same inhaler as your reliever when symptoms occur. No separate blue inhaler needed."</em></p>
      <ul>
        <li>Never stop the daily maintenance doses — even when feeling well</li>
        <li>≥6 reliever puffs in one episode without improvement → call 999</li>
        <li>More relief puffs than usual over several days = worsening — book review</li>
      </ul>
      <p><strong>PAAP zones (low-dose MART, budesonide/formoterol 200/6):</strong></p>
      <ul>
        <li><strong>Green:</strong> 2 maintenance + 0–1 extra/day — well controlled</li>
        <li><strong>Amber:</strong> 2–4 extra puffs/day &gt;2 days — double maintenance; see GP</li>
        <li><strong>Red:</strong> ≥6 puffs/episode or &gt;8 total/day — prednisolone + urgent review</li>
        <li class="alert-inline">No improvement after 6 puffs → call 999 immediately</li>
      </ul>
    `,

    inhalers: `
      <div class="alert-box">
        <strong>Prescribing rules:</strong> Always prescribe by <strong>brand name</strong> &mdash; inhalers are NOT interchangeable even within the same drug class due to particle size, device and dose differences. MART/AIR inhalers use formoterol (fast-onset) &mdash; salmeterol-based inhalers (Seretide) are NOT suitable for MART. Children &lt;12 yrs: MDI + spacer (+ mask &lt;5 yrs) is standard; DPI only if inspiratory flow confirmed adequate.
      </div>

      <h4>SABA &mdash; Short-Acting Beta2 Agonist (Reliever)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Paed 5&ndash;11 yrs</th><th>Adult / &ge;12 yrs</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Salbutamol</strong><br>(Ventolin / generic)</td>
            <td>Salbutamol 100 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>1&ndash;2 puffs prn (max 4&times;/day)</td>
            <td>1&ndash;2 puffs prn (max 4&times;/day)</td>
            <td>Always use via spacer in children. &ge;3 canisters/yr = poor control &mdash; review. Never prescribe without ICS.</td>
          </tr>
          <tr>
            <td><strong>Salbutamol</strong><br>(Accuhaler / Easyhaler)</td>
            <td>Salbutamol 200 mcg/dose</td>
            <td>DPI (Accuhaler / Easyhaler)</td>
            <td>Not suitable &lt;5 yrs</td>
            <td>1 dose prn</td>
            <td>For &ge;12 yrs with adequate inspiratory flow. Easyhaler has lower carbon footprint.</td>
          </tr>
          <tr>
            <td><strong>Bricanyl</strong><br>(terbutaline)</td>
            <td>Terbutaline 500 mcg/dose</td>
            <td>DPI (Turbohaler)</td>
            <td>Not routinely used</td>
            <td>1 inhalation prn</td>
            <td>Alternative to salbutamol. Requires adequate inspiratory effort.</td>
          </tr>
        </tbody>
      </table>

      <h4>ICS (Solo) &mdash; Low Dose</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Paed 5&ndash;11 yrs</th><th>Adult / &ge;12 yrs</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Clenil Modulite</strong><br>50, 100 mcg</td>
            <td>Beclometasone std-particle 50 or 100 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>50 mcg: 1&ndash;2 puffs BD (100&ndash;200 mcg/day)</td>
            <td>100 mcg: 2&ndash;4 puffs BD (200&ndash;500 mcg/day)</td>
            <td>Standard particle. Not interchangeable with Qvar. Rinse mouth after use.</td>
          </tr>
          <tr>
            <td><strong>Soprobec 50 mcg</strong></td>
            <td>Beclometasone std-particle 50 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>1&ndash;2 puffs BD (100&ndash;200 mcg/day)</td>
            <td>2&ndash;4 puffs BD</td>
            <td>Alternative to Clenil 50 mcg. Same dose equivalence as Clenil.</td>
          </tr>
          <tr>
            <td><strong>Qvar / Kelhale</strong><br>50, 100 mcg</td>
            <td>Beclometasone extra-fine 50 or 100 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>50 mcg: 1&ndash;2 puffs BD</td>
            <td>100 mcg: 1&ndash;2 puffs BD</td>
            <td><strong>Extra-fine:</strong> 100 mcg Qvar &asymp; 200&ndash;250 mcg std-particle BDP &mdash; MORE potent. Do NOT substitute. Licensed &ge;12 yrs (Qvar) or &ge;18 yrs (Kelhale).</td>
          </tr>
          <tr>
            <td><strong>Pulmicort Turbohaler 100</strong></td>
            <td>Budesonide std-particle 100 mcg/dose</td>
            <td>DPI (Turbohaler)</td>
            <td>1 puff OD&ndash;BD (100&ndash;200 mcg/day)</td>
            <td>1&ndash;2 puffs BD (200&ndash;400 mcg/day)</td>
            <td>Children &ge;5 yrs. Requires moderate inspiratory effort.</td>
          </tr>
          <tr>
            <td><strong>Budesonide Easyhaler</strong><br>100, 200 mcg</td>
            <td>Budesonide std-particle 100 or 200 mcg/dose</td>
            <td>DPI (Easyhaler)</td>
            <td>100 mcg: 1 puff BD (200 mcg/day)</td>
            <td>200 mcg: 1 puff BD (400 mcg/day)</td>
            <td>Lower carbon footprint than pMDI. &ge;6 yrs. Dose counter included.</td>
          </tr>
          <tr>
            <td><strong>Flixotide Evohaler 50 mcg</strong></td>
            <td>Fluticasone propionate 50 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>1&ndash;2 puffs BD (100&ndash;200 mcg/day)</td>
            <td>2 puffs BD (100&ndash;200 mcg/day)</td>
            <td>Licensed &ge;4 yrs. Fluticasone &asymp; twice as potent as BDP mcg-for-mcg.</td>
          </tr>
          <tr>
            <td><strong>Flixotide Accuhaler 50 mcg</strong></td>
            <td>Fluticasone propionate 50 mcg/blister</td>
            <td>DPI (Accuhaler)</td>
            <td>1 puff BD (100 mcg/day)</td>
            <td>1&ndash;2 puffs BD (100&ndash;200 mcg/day)</td>
            <td>Licensed &ge;4 yrs. Lower carbon footprint. Requires adequate inspiratory flow.</td>
          </tr>
        </tbody>
      </table>

      <h4>ICS (Solo) &mdash; Moderate Dose</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Paed 5&ndash;11 yrs</th><th>Adult / &ge;12 yrs</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Clenil 200 mcg</strong></td>
            <td>Beclometasone std-particle 200 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>1 puff BD (400 mcg/day)</td>
            <td>1&ndash;2 puffs BD (400&ndash;800 mcg/day)</td>
            <td>Specialist-guided in children. Adults: max of moderate range.</td>
          </tr>
          <tr>
            <td><strong>Pulmicort 200</strong></td>
            <td>Budesonide 200 mcg/dose</td>
            <td>DPI (Turbohaler)</td>
            <td>1 puff BD (400 mcg/day)</td>
            <td>1&ndash;2 puffs BD (400&ndash;800 mcg/day)</td>
            <td>Monitor growth in children. Review if high dose needed.</td>
          </tr>
          <tr>
            <td><strong>Flixotide Evohaler / Accuhaler</strong><br>125, 250 mcg</td>
            <td>Fluticasone propionate 125 or 250 mcg/dose</td>
            <td>pMDI / DPI (Accuhaler)</td>
            <td>Not routinely used</td>
            <td>250&ndash;500 mcg/day</td>
            <td>Fluticasone 250 mcg &asymp; BDP 500 mcg. Licensed &ge;12 yrs at higher strengths. Specialist guidance for high doses.</td>
          </tr>
        </tbody>
      </table>

      <h4>ICS (Solo) &mdash; High Dose (Specialist Only)</h4>
      <div class="alert-box"><strong>High-dose ICS:</strong> Steroid card + emergency steroid card required. Risk of adrenal suppression, growth restriction in children, cataracts. Monitor growth in children annually.</div>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Dose</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Clenil 250 / 400 mcg</strong></td>
            <td>Beclometasone std-particle 250 or 400 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>&ge;1000 mcg/day (specialist)</td>
            <td>Not in NG245 primary care pathway &mdash; refer to specialist.</td>
          </tr>
          <tr>
            <td><strong>Flixotide Accuhaler 500 mcg</strong></td>
            <td>Fluticasone propionate 500 mcg/blister</td>
            <td>DPI (Accuhaler)</td>
            <td>&ge;1000 mcg/day (specialist)</td>
            <td>Licensed &ge;12 yrs. Consider bone protection with long-term use.</td>
          </tr>
        </tbody>
      </table>

      <h4>ICS/LABA &mdash; Low Dose (Fixed Maintenance + SABA prn)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Paed 5&ndash;11 yrs</th><th>Adult / &ge;12 yrs</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Seretide Evohaler 50/25</strong></td>
            <td>Fluticasone / Salmeterol 50/25 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>1 puff BD (100/50 mcg/day)</td>
            <td>1&ndash;2 puffs BD</td>
            <td>Licensed &ge;5 yrs. NOT for MART &mdash; use separate SABA reliever.</td>
          </tr>
          <tr>
            <td><strong>Seretide Accuhaler 100/50</strong></td>
            <td>Fluticasone / Salmeterol 100/50 mcg/blister</td>
            <td>DPI (Accuhaler)</td>
            <td>1 puff BD (100/50 mcg/day)</td>
            <td>1 puff BD</td>
            <td>Licensed &ge;5 yrs. Lower carbon footprint. NOT for MART. Add SABA reliever separately.</td>
          </tr>
          <tr>
            <td><strong>Flutiform 50/5</strong><br>(Combisal / Avenor 25/50)</td>
            <td>Fluticasone / Formoterol 50/5 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>1&ndash;2 puffs BD (100/10 mcg/day)</td>
            <td>2 puffs BD</td>
            <td>Licensed &ge;5 yrs. Formoterol (fast-onset) vs salmeterol (slower). NOT for MART.</td>
          </tr>
          <tr>
            <td><strong>Symbicort Turbohaler 100/6</strong></td>
            <td>Budesonide / Formoterol 100/6 mcg/dose (delivered ~80/4.5)</td>
            <td>DPI (Turbohaler)</td>
            <td>1&ndash;2 puffs BD (200/12 mcg/day)</td>
            <td>1&ndash;2 puffs BD</td>
            <td>Licensed &ge;6 yrs. Only budesonide/formoterol DPI licensed for MART in children 6&ndash;11 (Nov 2025). Can be used as fixed maintenance or MART.</td>
          </tr>
          <tr>
            <td><strong>Fobumix Easyhaler 80/4.5</strong></td>
            <td>Budesonide / Formoterol 80/4.5 mcg/dose (= Symbicort 100/6)</td>
            <td>DPI (Easyhaler)</td>
            <td>1&ndash;2 puffs BD</td>
            <td>1&ndash;2 puffs BD</td>
            <td>Licensed &ge;6 yrs. 4-month shelf life after opening. Lower carbon footprint.</td>
          </tr>
        </tbody>
      </table>

      <h4>ICS/LABA &mdash; Moderate Dose (Fixed Maintenance + SABA prn)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Paed 5&ndash;11 yrs</th><th>Adult / &ge;12 yrs</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Seretide Evohaler 125/25</strong></td>
            <td>Fluticasone / Salmeterol 125/25 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>Not routinely</td>
            <td>2 puffs BD (500/100 mcg/day)</td>
            <td>Licensed &ge;12 yrs. NOT for MART.</td>
          </tr>
          <tr>
            <td><strong>Seretide Accuhaler 250/50</strong></td>
            <td>Fluticasone / Salmeterol 250/50 mcg/blister</td>
            <td>DPI (Accuhaler)</td>
            <td>Not routinely</td>
            <td>1 puff BD (500/100 mcg/day)</td>
            <td>Licensed &ge;12 yrs. Lower carbon footprint vs pMDI. NOT for MART.</td>
          </tr>
          <tr>
            <td><strong>Symbicort Turbohaler 200/6</strong></td>
            <td>Budesonide / Formoterol 200/6 mcg/dose (delivered ~160/4.5)</td>
            <td>DPI (Turbohaler)</td>
            <td>Specialist only</td>
            <td>1&ndash;2 puffs BD + prn if MART</td>
            <td>Licensed &ge;12 yrs for MART (AIR + maintenance). Key AIR inhaler for adults/&ge;12 yrs.</td>
          </tr>
          <tr>
            <td><strong>DuoResp Spiromax 160/4.5</strong></td>
            <td>Budesonide / Formoterol 160/4.5 mcg/dose (= Symbicort 200/6)</td>
            <td>DPI (Spiromax)</td>
            <td>Specialist only</td>
            <td>1&ndash;2 puffs BD + prn if MART</td>
            <td>Licensed &ge;18 yrs. Equiv to Symbicort 200/6. Licensed for AIR (&ge;12 yrs) and MART (&ge;18 yrs). Lower cost. 12-month shelf life.</td>
          </tr>
          <tr>
            <td><strong>WockAIR 160/4.5</strong></td>
            <td>Budesonide / Formoterol 160/4.5 mcg/dose (= Symbicort 200/6)</td>
            <td>DPI</td>
            <td>Not routinely</td>
            <td>1&ndash;2 puffs BD + prn if MART</td>
            <td>Licensed &ge;12 yrs. Equiv to Symbicort 200/6. Licensed for AIR (&ge;12 yrs). 12-month shelf life.</td>
          </tr>
          <tr>
            <td><strong>Fostair NEXThaler 100/6</strong></td>
            <td>Beclometasone extra-fine / Formoterol 100/6 mcg/dose</td>
            <td>DPI (NEXThaler)</td>
            <td>Not recommended (&lt;18 yrs)</td>
            <td>1&ndash;2 puffs BD + prn if MART</td>
            <td>Licensed &ge;18 yrs. Extra-fine BDP: 100 mcg &asymp; 250 mcg std-particle BDP. MART licensed. Also licensed for COPD. Note: 200/6 strength NOT licensed for MART.</td>
          </tr>
          <tr>
            <td><strong>Fostair pMDI 100/6</strong><br>(Luforbec / Bibecfo / Proxor)</td>
            <td>Beclometasone extra-fine / Formoterol 100/6 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>Not recommended (&lt;18 yrs)</td>
            <td>2 puffs BD + 1 prn if MART</td>
            <td>Licensed &ge;18 yrs. MART licensed (Fostair pMDI 100/6 only &mdash; not NEXThaler for MART, not 200/6 for MART). Higher carbon footprint. Generics interchangeable only within brand.</td>
          </tr>
          <tr>
            <td><strong>Relvar Ellipta 92/22</strong></td>
            <td>Fluticasone furoate / Vilanterol 92/22 mcg/dose</td>
            <td>DPI (Ellipta)</td>
            <td>Not recommended (&lt;12 yrs)</td>
            <td>1 puff OD (once daily)</td>
            <td>Licensed &ge;12 yrs. Once-daily dosing may aid adherence. FF 92 mcg &asymp; fluticasone propionate 250 mcg/day. NOT for MART.</td>
          </tr>
          <tr>
            <td><strong>Flutiform 125/5</strong><br>(Sereflo / Sirdupla 125/25)</td>
            <td>Fluticasone / Formoterol (or Salmeterol) 125/5 or 125/25 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>Not routinely (&lt;12 yrs)</td>
            <td>2 puffs BD</td>
            <td>Licensed &ge;12 yrs. NOT for MART. Sereflo/Sirdupla = generic Seretide 125 equivalents.</td>
          </tr>
        </tbody>
      </table>

      <h4>ICS/LABA &mdash; High Dose (Specialist Only)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Dose</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Seretide Accuhaler 500/50</strong></td>
            <td>Fluticasone / Salmeterol 500/50 mcg/blister</td>
            <td>DPI (Accuhaler)</td>
            <td>1 puff BD (specialist)</td>
            <td>Licensed &ge;12 yrs. Also licensed for COPD. Steroid card. NOT for MART. Monitor for systemic ICS effects.</td>
          </tr>
          <tr>
            <td><strong>Symbicort Turbohaler 400/12</strong></td>
            <td>Budesonide / Formoterol 400/12 mcg/dose</td>
            <td>DPI (Turbohaler)</td>
            <td>1&ndash;2 puffs BD (specialist)</td>
            <td>Licensed &ge;18 yrs. NOT for AIR or MART. Steroid card. Monitor bone density with long-term use.</td>
          </tr>
          <tr>
            <td><strong>Fostair NEXThaler / pMDI 200/6</strong></td>
            <td>Beclometasone extra-fine / Formoterol 200/6 mcg/dose</td>
            <td>DPI or pMDI</td>
            <td>2 puffs BD (specialist)</td>
            <td>Licensed &ge;18 yrs. Extra-fine 200/6 = high-dose BDP equivalent. NOT licensed for MART. Steroid card.</td>
          </tr>
          <tr>
            <td><strong>Relvar Ellipta 184/22</strong></td>
            <td>Fluticasone furoate / Vilanterol 184/22 mcg/dose</td>
            <td>DPI (Ellipta)</td>
            <td>1 puff OD (specialist)</td>
            <td>Licensed &ge;18 yrs. Once-daily. High-dose ICS equivalent. NOT for MART. Steroid card.</td>
          </tr>
        </tbody>
      </table>

      <h4>MART / AIR &mdash; Maintenance + Reliever Same Inhaler</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Paed 5&ndash;11 yrs</th><th>Adult / &ge;12 yrs</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Symbicort Turbohaler 100/6</strong></td>
            <td>Budesonide / Formoterol 100 mcg / 6 mcg (metered dose)</td>
            <td>DPI (Turbohaler)</td>
            <td>MART: 1 puff BD + 1 prn<br><em>Only MART licensed for children 6&ndash;11</em></td>
            <td>MART (&ge;12 yrs): 1&ndash;2 puffs BD + 1&ndash;2 prn; max 8/day</td>
            <td>ONLY inhaler licensed for MART in children 6&ndash;11 (Nov 2025). 12-month shelf life.</td>
          </tr>
          <tr>
            <td><strong>Symbicort Turbohaler 200/6</strong></td>
            <td>Budesonide / Formoterol 200 mcg / 6 mcg (metered dose)</td>
            <td>DPI (Turbohaler)</td>
            <td>Not licensed</td>
            <td>AIR (&ge;12 yrs): 1 prn, max 6/occasion, 8/day<br>MART (&ge;12 yrs): 1&ndash;2 BD + 1&ndash;2 prn</td>
            <td>Key AIR inhaler for adults/&ge;12 yrs. 12-month shelf life.</td>
          </tr>
          <tr>
            <td><strong>DuoResp Spiromax 160/4.5</strong></td>
            <td>Budesonide / Formoterol 160/4.5 mcg/dose (= Symbicort 200/6)</td>
            <td>DPI (Spiromax)</td>
            <td>Not licensed</td>
            <td>AIR (&ge;12 yrs); MART (&ge;18 yrs): 1&ndash;2 BD + 1 prn</td>
            <td>Equivalent to Symbicort 200/6. 12-month shelf life. Lower carbon footprint than Symbicort.</td>
          </tr>
          <tr>
            <td><strong>Fobumix Easyhaler 160/4.5</strong></td>
            <td>Budesonide / Formoterol 160/4.5 mcg/dose (= Symbicort 200/6)</td>
            <td>DPI (Easyhaler)</td>
            <td>Not licensed</td>
            <td>AIR (&ge;12 yrs): 1 prn; MART (&ge;18 yrs): 1&ndash;2 BD + 1 prn</td>
            <td>4-month shelf life after opening &mdash; Symbicort preferred for infrequent AIR users.</td>
          </tr>
          <tr>
            <td><strong>WockAIR 160/4.5</strong></td>
            <td>Budesonide / Formoterol 160/4.5 mcg/dose (= Symbicort 200/6)</td>
            <td>DPI</td>
            <td>Not licensed</td>
            <td>AIR (&ge;12 yrs)</td>
            <td>Equivalent to Symbicort 200/6. Licensed for AIR &ge;12 yrs. 12-month shelf life.</td>
          </tr>
          <tr>
            <td><strong>Fostair pMDI 100/6</strong></td>
            <td>Beclometasone extra-fine / Formoterol 100/6 mcg/puff</td>
            <td>pMDI (+ spacer)</td>
            <td>Not licensed (&lt;18 yrs)</td>
            <td>MART only (&ge;18 yrs): 2 puffs BD maint. + 1 prn<br>NOT licensed for AIR</td>
            <td>Only Fostair pMDI 100/6 has MART licence (not NEXThaler for MART, not 200/6 for MART). High carbon footprint. Extra-fine = greater potency per mcg.</td>
          </tr>
          <tr>
            <td><strong>Symbicort 100/3 MDI</strong></td>
            <td>Budesonide / Formoterol 100/3 mcg/puff (lower formoterol vs Turbohaler 100/6)</td>
            <td>pMDI (+ spacer)</td>
            <td>Specialist use only</td>
            <td>MART (&ge;12 yrs): 2 puffs BD + 2 prn</td>
            <td>Lower formoterol per puff &mdash; requires more puffs for MART, giving higher budesonide dose. Use with caution. Specialist-supervised only in children.</td>
          </tr>
        </tbody>
      </table>

      <h4>LTRA (Oral Add-on)</h4>
      <div class="alert-box">
        <strong>Montelukast (Singulair / generic) &mdash; MHRA warning (2019):</strong> Neuropsychiatric reactions (sleep disturbance, aggression, depression, suicidal ideation) &mdash; counsel patient/carer before prescribing. Review regularly. Stop if neuropsychiatric ADRs occur.
        <ul>
          <li>2&ndash;5 yrs: 4 mg granules OD (PM)</li>
          <li>6&ndash;14 yrs: 5 mg chewable tablet OD (PM)</li>
          <li>&ge;15 yrs: 10 mg tablet OD (PM)</li>
        </ul>
      </div>

      <h4>Dose Equivalence Reminders</h4>
      <ul>
        <li>Beclometasone extra-fine (Qvar, Fostair, Kelhale) &asymp; 2&ndash;2.5&times; more potent than std-particle BDP (Clenil) &mdash; do NOT substitute without dose adjustment</li>
        <li>Fluticasone propionate &asymp; twice as potent as std-particle BDP mcg-for-mcg</li>
        <li>Fluticasone furoate (Relvar) 92 mcg OD &asymp; fluticasone propionate 250 mcg BD</li>
      </ul>
    `
  },

  {
    id: "copd",
    title: "COPD in Over 16s: Diagnosis & Management",
    subtitle: "Spirometry severity · Inhaled therapy pathway · Exacerbation management · LTOT",
    system: "Respiratory",
    nice_ref: "NG115",
    updated: "Jul 2019",

    diagnosis: `
      <h4>Suspect COPD if age &gt;35 with risk factor + &ge;1 of:</h4>
      <ul>
        <li>Exertional breathlessness</li>
        <li>Chronic cough</li>
        <li>Regular sputum production</li>
        <li>Frequent winter 'bronchitis'</li>
        <li>Wheeze</li>
      </ul>
      <p><strong>Risk factors:</strong> smoking (pack-years), biomass/dust exposure</p>
      <div class="alert-box"><strong>Haemoptysis or chest pain &mdash; consider alternative diagnosis</strong></div>

      <h4>Initial Investigations at Diagnosis</h4>
      <ul>
        <li>Post-bronchodilator spirometry (confirm FEV1/FVC &lt;0.7)</li>
        <li>Chest X-ray (exclude other pathology)</li>
        <li>FBC (anaemia or polycythaemia)</li>
        <li>BMI</li>
        <li>Consider alpha-1 antitrypsin if early onset / non-smoker / FH</li>
      </ul>

      <h4>Spirometry &amp; Severity</h4>
      <table>
        <thead>
          <tr><th>Severity</th><th>FEV1 % predicted</th></tr>
        </thead>
        <tbody>
          <tr><td>Mild (GOLD 1)</td><td>&ge;80%</td></tr>
          <tr><td>Moderate (GOLD 2)</td><td>50&ndash;79%</td></tr>
          <tr><td>Severe (GOLD 3)</td><td>30&ndash;49%</td></tr>
          <tr><td>Very severe (GOLD 4)</td><td>&lt;30%</td></tr>
        </tbody>
      </table>
      <ul>
        <li>Only diagnose COPD with mild obstruction if symptomatic</li>
        <li>FEV1/FVC &gt;0.7 does not exclude COPD in younger symptomatic patients</li>
        <li>FEV1/FVC returns to normal with treatment &rarr; reconsider diagnosis</li>
        <li class="callout">★ Do NOT use oral steroid reversibility tests to guide ICS prescribing</li>
      </ul>

      <h4>MRC Dyspnoea Scale</h4>
      <table>
        <thead>
          <tr><th>Grade</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Breathless only on strenuous exercise</td></tr>
          <tr><td>2</td><td>Breathless hurrying or walking uphill</td></tr>
          <tr><td>3</td><td>Walks slower than peers / stops on level ground</td></tr>
          <tr><td>4</td><td>Stops for breath after ~100m or a few minutes</td></tr>
          <tr><td>5</td><td>Too breathless to leave house / on dressing</td></tr>
        </tbody>
      </table>
      <ul>
        <li>Offer pulmonary rehabilitation if MRC &ge;3</li>
        <li>Use CAT score to assess symptom burden at reviews</li>
      </ul>

      <h4>Differentiating COPD vs Asthma</h4>
      <table>
        <thead>
          <tr><th>Feature</th><th>COPD</th><th>Asthma</th></tr>
        </thead>
        <tbody>
          <tr><td>Age at onset</td><td>&gt;35</td><td>Any age</td></tr>
          <tr><td>Smoking Hx</td><td>Nearly always</td><td>Possible</td></tr>
          <tr><td>Breathlessness</td><td>Persistent</td><td>Variable</td></tr>
          <tr><td>Night symptoms</td><td>Uncommon</td><td>Common</td></tr>
          <tr><td>Sputum</td><td>Chronic</td><td>Less common</td></tr>
          <tr><td>FEV1 reversibility</td><td>&lt;400 mL</td><td>&gt;400 mL</td></tr>
          <tr><td>Diurnal PEF variation</td><td>&lt;20%</td><td>&ge;20%</td></tr>
        </tbody>
      </table>
      <p class="callout">★ Both may coexist &mdash; use longitudinal observation and specialist review if uncertain</p>
    `,

    management: `
      <h4>Non-Pharmacological Management (Offer to All)</h4>
      <ul>
        <li><strong>Smoking cessation</strong> &mdash; most effective intervention; offer NRT, varenicline or bupropion + support</li>
        <li><strong>Vaccinations</strong> &mdash; annual influenza; once-only pneumococcal</li>
        <li><strong>Pulmonary rehabilitation</strong> &mdash; offer if MRC &ge;3 or functionally limited; reduces admissions and improves QoL</li>
        <li><strong>Nutritional support</strong> &mdash; assess BMI; low BMI is adverse prognostic factor</li>
        <li><strong>Self-management plan</strong> &mdash; co-develop with patient; include action plan for exacerbations</li>
        <li><strong>Inhaler technique</strong> &mdash; train at initiation and check at every review</li>
        <li class="callout">★ Do not use alpha-tocopherol, beta-carotene or anti-tussives in stable COPD</li>
      </ul>

      <h4>Stable COPD &mdash; Inhaled Therapy Pathway</h4>
      <p><strong>Step 1 &mdash; All patients:</strong> optimise non-pharmacological management + vaccinations</p>
      <ul><li>SABA (e.g. salbutamol) or SAMA (e.g. ipratropium) PRN</li></ul>

      <p><strong>Step 2 &mdash; Still breathless or exacerbating despite SABA/SAMA:</strong></p>
      <table>
        <thead>
          <tr><th>No asthmatic features</th><th>Asthmatic features present</th></tr>
        </thead>
        <tbody>
          <tr><td>LAMA + LABA</td><td>LABA + ICS</td></tr>
        </tbody>
      </table>
      <p>Asthmatic features include: previous diagnosis of asthma or atopy &middot; higher blood eosinophil count &middot; substantial FEV1 variability / diurnal PEF variation &ge;20%</p>

      <p><strong>Step 3 &mdash; Escalate to LAMA + LABA + ICS (triple therapy) if:</strong></p>
      <ul>
        <li>On LABA+ICS: persistent QoL-impairing symptoms OR &ge;1 severe exacerbation (hospitalisation) OR &ge;2 moderate exacerbations/year</li>
        <li>On LAMA+LABA: &ge;1 severe exacerbation OR &ge;2 moderate exacerbations/year</li>
        <li>On LAMA+LABA with persistent symptoms: 3-month trial of triple therapy &mdash; review and stop if no benefit</li>
        <li class="callout">★ Document reason for ICS use; review ICS indication at least annually &mdash; be aware of pneumonia risk</li>
      </ul>

      <h4>Add-On Therapies</h4>
      <ul>
        <li><strong>Theophylline (SR):</strong> only after SABA/LABA/LAMA trial, or if unable to use inhalers; monitor levels and interactions; reduce dose if co-prescribing macrolide or fluoroquinolone</li>
        <li><strong>Mucolytics</strong> (e.g. carbocisteine): consider for chronic productive cough &mdash; continue only if symptomatic benefit</li>
        <li><strong>Roflumilast:</strong> see NICE TA461 for severe COPD with frequent exacerbations</li>
        <li><strong>Prophylactic azithromycin 250mg TDS/week</strong> &mdash; consider if: non-smoker AND optimised Rx AND &ge;4 exacerbations/year with sputum, or prolonged/hospitalised exacerbations
          <ul>
            <li>Pre-treatment: sputum MC&amp;S (incl. TB + NTM), CT thorax (exclude bronchiectasis), ECG (QT), LFTs</li>
            <li>Review at 3 months then &ge;6-monthly; co-prescribe non-macrolide antibiotic for rescue pack</li>
            <li>Advise re hearing loss/tinnitus risk; not needed to stop during exacerbation</li>
          </ul>
        </li>
      </ul>

      <h4>Exacerbation Management (Primary Care)</h4>
      <p>Exacerbation defined as: sustained worsening beyond normal day-to-day variation</p>
      <ul>
        <li>Increase SABA frequency (via spacer or nebuliser if severe)</li>
        <li><strong>Oral prednisolone 30mg OD for 5 days</strong> if breathlessness interferes with ADLs</li>
        <li>Antibiotics (see NG114) only if purulent sputum change or clinical features of pneumonia</li>
      </ul>
      <p><strong>Self-management / rescue pack</strong> (if &ge;1 exacerbation in past year):</p>
      <ul>
        <li>Provide home supply of oral prednisolone + antibiotic</li>
        <li>Patient must understand when and how to use, report use, and request replacement</li>
        <li>Co-prescribe non-macrolide antibiotic rescue pack for patients on prophylactic azithromycin</li>
        <li class="callout">★ 3 or more rescue pack courses in a year &mdash; investigate reasons and review treatment</li>
        <li class="callout">★ Develop individualised action plan with every at-risk patient</li>
      </ul>
    `,

    referral: `
      <h4>Refer for Specialist Advice When:</h4>
      <ul>
        <li>Diagnostic uncertainty (consider alpha-1 AT, CT, TLCO)</li>
        <li>Onset &lt;40 years or non-smoker</li>
        <li>Rapid FEV1 decline</li>
        <li>Haemoptysis</li>
        <li>Severe or very severe COPD (GOLD 3&ndash;4)</li>
        <li>Frequent exacerbations (&ge;2/year) despite optimised treatment</li>
        <li>Cor pulmonale</li>
        <li>Assessment for pulmonary rehabilitation, surgery or LTOT</li>
        <li>Symptoms disproportionate to spirometry</li>
        <li class="callout">★ Referral appropriate at any stage &mdash; not just severe disease</li>
      </ul>

      <h4>Oxygen Therapy (LTOT)</h4>
      <p>LTOT assessment: SpO2 &le;92% persistently at rest (stable) &rarr; ABG on 2 occasions &ge;3 weeks apart</p>
      <table>
        <thead>
          <tr><th>ABG threshold</th><th>Indication</th></tr>
        </thead>
        <tbody>
          <tr><td>PaO2 &lt;7.3 kPa</td><td>LTOT indicated</td></tr>
          <tr><td>PaO2 7.3&ndash;8.0 kPa</td><td>LTOT if: polycythaemia, nocturnal hypoxia, peripheral oedema, pulm. hypertension</td></tr>
          <tr><td>PaO2 &gt;8.0 kPa</td><td>LTOT not indicated</td></tr>
        </tbody>
      </table>
      <ul>
        <li>LTOT: &ge;15 hours/day; target SpO2 88&ndash;92% in hypercapnic COPD</li>
        <li>Consider ambulatory O2 for patients already on LTOT who are mobile</li>
        <li class="callout">★ Do not prescribe LTOT for patients who continue to smoke (fire risk and reduced benefit)</li>
        <li class="callout">★ Inappropriate oxygen may cause respiratory depression &mdash; do not use in acute settings without controlled delivery</li>
      </ul>
    `,

    monitoring: `
      <h4>Annual Review</h4>
      <table>
        <thead>
          <tr><th>Domain</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>Symptoms</td><td>CAT score / MRC dyspnoea scale</td></tr>
          <tr><td>Spirometry</td><td>Monitor progression</td></tr>
          <tr><td>Exacerbation Hx</td><td>Frequency, severity, hospitalisations</td></tr>
          <tr><td>Inhaler technique</td><td>Observe and correct at every review</td></tr>
          <tr><td>Inhaler/ICS review</td><td>Review ICS indication annually; check pneumonia risk</td></tr>
          <tr><td>Vaccinations</td><td>Influenza (annual); pneumococcal (once)</td></tr>
          <tr><td>Smoking status</td><td>Pack-years; offer cessation support</td></tr>
          <tr><td>Pulse oximetry</td><td>SpO2 &le;92% &rarr; refer for LTOT assessment</td></tr>
          <tr><td>Nutrition / BMI</td><td>Low BMI = adverse prognostic factor</td></tr>
          <tr><td>Pulm. rehab</td><td>Offer/re-refer if MRC &ge;3</td></tr>
        </tbody>
      </table>
      <p class="callout">★ Prognostic factors: FEV1, smoking, MRC, hypoxia, BMI, exacerbation frequency, multimorbidity, frailty</p>
    `,

    inhalers: `
      <div class="alert-box">
        <strong>Prescribing rules:</strong> Always prescribe COPD inhalers by <strong>brand name</strong> &mdash; devices are NOT interchangeable even for the same drug. LABA/LAMA not licensed for asthma. ICS monotherapy not indicated in COPD. DPI preferred over pMDI (lower carbon footprint) if adequate inspiratory flow &mdash; check technique at every review.
      </div>

      <h4>SABA &mdash; Short-Acting Beta2 Agonist (Reliever)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Frequency</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Salbutamol</strong><br>(Ventolin / generic)</td>
            <td>Salbutamol 100 mcg/puff</td>
            <td>pMDI (+ spacer if poor coordination)</td>
            <td>1&ndash;2 puffs prn</td>
            <td>PRN at all stages. &gt;2 inhalers/yr signals poor control &mdash; review maintenance. Nebulised equally effective to inhaler + spacer for most. Caution: hypokalaemia with high doses.</td>
          </tr>
          <tr>
            <td><strong>Salbutamol</strong><br>(Accuhaler / Easyhaler)</td>
            <td>Salbutamol 200 mcg/dose</td>
            <td>DPI (Accuhaler / Easyhaler)</td>
            <td>1 dose prn</td>
            <td>Only if patient cannot use pMDI + spacer. Easyhaler has lower carbon footprint. Requires adequate inspiratory flow.</td>
          </tr>
          <tr>
            <td><strong>Bricanyl</strong><br>(terbutaline)</td>
            <td>Terbutaline 500 mcg/dose</td>
            <td>DPI (Turbohaler)</td>
            <td>1 dose prn</td>
            <td>Alternative SABA. Salbutamol preferred in COPD. Requires moderate inspiratory flow.</td>
          </tr>
        </tbody>
      </table>

      <h4>SAMA &mdash; Short-Acting Muscarinic Antagonist (Reliever)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Frequency</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Atrovent</strong><br>(ipratropium)</td>
            <td>Ipratropium 20 mcg/puff</td>
            <td>pMDI (+ spacer) or Nebuliser</td>
            <td>2 puffs 3&ndash;4&times; daily</td>
            <td>Slower onset than SABA (~15&ndash;30 min). Nebulised form used in acute exacerbations. Caution: angle-closure glaucoma, BPH/bladder outflow obstruction. Step up to LAMA if using regularly.</td>
          </tr>
        </tbody>
      </table>

      <h4>LAMA &mdash; Long-Acting Muscarinic Antagonist (Maintenance)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Frequency</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Spiriva Handihaler</strong><br>(tiotropium) ★</td>
            <td>Tiotropium 18 mcg/capsule</td>
            <td>DPI (Handihaler) &mdash; capsule device</td>
            <td>1 capsule OD</td>
            <td>Gold standard LAMA. Reduces exacerbations and hospitalisations. Capsule must NOT be swallowed &mdash; insert into device. MHRA alert: do not substitute Handihaler/Respimat without intentional switch. Caution: eGFR &lt;30 (reduce dose). Dry mouth most common SE.</td>
          </tr>
          <tr>
            <td><strong>Spiriva Respimat</strong><br>(tiotropium) ★</td>
            <td>Tiotropium 2.5 mcg/puff (delivered)</td>
            <td>SMI (Respimat)</td>
            <td>2 puffs OD</td>
            <td>Slower, gentler spray &mdash; useful if limited coordination or inspiratory flow. Not interchangeable with Handihaler (different dose strengths). Lower carbon footprint than pMDI.</td>
          </tr>
          <tr>
            <td><strong>Incruse Ellipta</strong><br>(umeclidinium)</td>
            <td>Umeclidinium 55 mcg/dose (delivered)</td>
            <td>DPI (Ellipta)</td>
            <td>1 inhalation OD</td>
            <td>Low-resistance DPI &mdash; suitable for lower inspiratory flow. Dry mouth less common than tiotropium. COPD only (not licensed for asthma).</td>
          </tr>
          <tr>
            <td><strong>Seebri Breezhaler</strong><br>(glycopyrronium)</td>
            <td>Glycopyrronium 44 mcg/capsule</td>
            <td>DPI (Breezhaler) &mdash; capsule device</td>
            <td>1 capsule OD</td>
            <td>Capsule must NOT be swallowed. COPD only. Caution: renal impairment (raised plasma levels).</td>
          </tr>
          <tr>
            <td><strong>Eklira Genuair</strong><br>(aclidinium)</td>
            <td>Aclidinium 322 mcg/dose (delivered)</td>
            <td>DPI (Genuair)</td>
            <td>1 inhalation BD</td>
            <td>Twice daily LAMA. Genuair device has feedback mechanism confirming dose inhaled. COPD only. No dose reduction needed for renal impairment &mdash; unlike other LAMAs.</td>
          </tr>
        </tbody>
      </table>

      <h4>LABA &mdash; Long-Acting Beta2 Agonist (Maintenance &mdash; Rarely Used Alone)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Frequency</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Serevent</strong><br>(salmeterol)</td>
            <td>25 mcg/puff (pMDI) or 50 mcg/dose (DPI)</td>
            <td>pMDI or DPI (Accuhaler)</td>
            <td>2 puffs or 1 dose BD</td>
            <td>Not recommended as new monotherapy &mdash; prefer LAMA or LABA/LAMA. If asthmatic features requiring ICS, use as ICS/LABA combination. Review and consider stepping up if currently on salmeterol monotherapy.</td>
          </tr>
          <tr>
            <td><strong>Onbrez Breezhaler</strong><br>(indacaterol)</td>
            <td>150 or 300 mcg/capsule</td>
            <td>DPI (Breezhaler) &mdash; capsule device</td>
            <td>1 capsule OD</td>
            <td>Once daily. Faster onset than salmeterol. Capsule NOT swallowed. Click sound on inhalation is normal. COPD only.</td>
          </tr>
          <tr>
            <td><strong>Striverdi Respimat</strong><br>(olodaterol)</td>
            <td>Olodaterol 2.5 mcg/puff</td>
            <td>SMI (Respimat)</td>
            <td>2 puffs OD</td>
            <td>Once daily. Generally now used as Spiolto Respimat (combined with tiotropium) rather than as monotherapy.</td>
          </tr>
        </tbody>
      </table>

      <h4>LABA/LAMA &mdash; Dual Bronchodilator (First-Line Maintenance)</h4>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Frequency</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Anoro Ellipta</strong><br>(umeclidinium / vilanterol) ★</td>
            <td>Umeclidinium 55 mcg + Vilanterol 22 mcg / dose</td>
            <td>DPI (Ellipta)</td>
            <td>1 inhalation OD</td>
            <td>Low-resistance Ellipta &mdash; good for reduced inspiratory flow. Superior exacerbation prevention vs monotherapy. COPD only.</td>
          </tr>
          <tr>
            <td><strong>Ultibro Breezhaler</strong><br>(indacaterol / glycopyrronium) ★</td>
            <td>Indacaterol 85 mcg + Glycopyrronium 43 mcg / capsule</td>
            <td>DPI (Breezhaler) &mdash; capsule device</td>
            <td>1 capsule OD</td>
            <td>Capsule NOT swallowed. Click sound normal. COPD only. Caution: renal impairment (glycopyrronium accumulates).</td>
          </tr>
          <tr>
            <td><strong>Spiolto Respimat</strong><br>(tiotropium / olodaterol) ★</td>
            <td>Tiotropium 2.5 mcg + Olodaterol 2.5 mcg / puff (delivered)</td>
            <td>SMI (Respimat)</td>
            <td>2 puffs OD</td>
            <td>Useful if limited inspiratory flow or poor coordination. Do NOT confuse with Spiriva Respimat (tiotropium monotherapy) &mdash; different drug content. Low carbon footprint. COPD only.</td>
          </tr>
          <tr>
            <td><strong>Duaklir Genuair</strong><br>(aclidinium / formoterol) ★</td>
            <td>Aclidinium 340 mcg + Formoterol 12 mcg / dose (delivered)</td>
            <td>DPI (Genuair)</td>
            <td>1 inhalation BD</td>
            <td>Twice daily &mdash; suitable if BD dosing preferred or OD dual gives poor symptom control. Genuair device confirms correct inhalation. Formoterol: fast-onset bronchodilation. COPD only.</td>
          </tr>
          <tr>
            <td><strong>Bevespi Aerosphere</strong><br>(glycopyrronium / formoterol)</td>
            <td>Glycopyrronium 7.2 mcg + Formoterol 5 mcg / puff (delivered)</td>
            <td>pMDI (Aerosphere) + spacer recommended</td>
            <td>2 puffs BD</td>
            <td>Only LABA/LAMA available as pMDI &mdash; for patients unable to use DPI or SMI. Higher carbon footprint. COPD only. Caution: renal impairment (glycopyrronium).</td>
          </tr>
        </tbody>
      </table>

      <h4>ICS/LABA &mdash; If Asthmatic Features Present or Eosinophils &ge;300 cells/&mu;L</h4>
      <div class="alert-box"><strong>ICS caution:</strong> ICS significantly increases pneumonia risk in COPD &mdash; only use when clearly indicated. Review ICS appropriateness at least annually. Consider step-down to LABA/LAMA if eosinophils &lt;100 cells/&mu;L, no exacerbations in past year, pneumonia, or side effects.</div>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Frequency</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Fostair 100/6</strong><br>(beclometasone / formoterol)</td>
            <td>Extra-fine BDP 100 mcg + Formoterol 6 mcg / puff or dose</td>
            <td>pMDI or DPI (NEXThaler)</td>
            <td>2 puffs BD (pMDI) or 1&ndash;2 doses BD (NEXThaler)</td>
            <td>Licensed for COPD + asthma features. Extra-fine BDP: 100 mcg &equiv; ~250 mcg standard-particle BDP. Prefer LABA/LAMA/ICS triple over LABA/ICS dual if possible. Rinse mouth. Annual ICS review.</td>
          </tr>
          <tr>
            <td><strong>Seretide Accuhaler 500/50</strong><br>(fluticasone / salmeterol)</td>
            <td>Fluticasone 500 mcg + Salmeterol 50 mcg / dose</td>
            <td>DPI (Accuhaler)</td>
            <td>1 dose BD</td>
            <td>Licensed for COPD with FEV1 &lt;60% + frequent exacerbations. High-dose ICS &mdash; significant pneumonia risk. Prefer triple therapy if possible. Review ICS annually.</td>
          </tr>
          <tr>
            <td><strong>DuoResp Spiromax 160/4.5</strong><br>(budesonide / formoterol)</td>
            <td>Budesonide 160 mcg + Formoterol 4.5 mcg / dose (delivered)</td>
            <td>DPI (Spiromax)</td>
            <td>1&ndash;2 doses BD</td>
            <td>Equivalent to Symbicort Turbohaler 200/6. Licensed for COPD with asthmatic features. Lower carbon footprint. Review ICS annually &mdash; consider step up to triple or step down to LABA/LAMA.</td>
          </tr>
        </tbody>
      </table>

      <h4>Triple Therapy &mdash; ICS/LABA/LAMA</h4>
      <p>Indicated if: &ge;1 severe exacerbation or &ge;2 moderate exacerbations/yr despite LABA/LAMA, OR asthmatic features + exacerbations on ICS/LABA.</p>
      <table>
        <thead>
          <tr><th>Brand</th><th>Drug &amp; Strength</th><th>Device</th><th>Frequency</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Trelegy Ellipta</strong><br>(FF / umeclidinium / vilanterol)</td>
            <td>Fluticasone furoate 92 mcg + Umeclidinium 55 mcg + Vilanterol 22 mcg / dose</td>
            <td>DPI (Ellipta)</td>
            <td>1 inhalation OD</td>
            <td>ONCE DAILY &mdash; highest adherence of all triple inhalers. Lowest carbon footprint. FF 92 mcg &equiv; fluticasone propionate 250 mcg/day. COPD only. Annual ICS review essential.</td>
          </tr>
          <tr>
            <td><strong>Trimbow NEXThaler</strong><br>(beclometasone / formoterol / glycopyrronium)</td>
            <td>Extra-fine BDP 88 mcg + Formoterol 5 mcg + Glycopyrronium 9 mcg / dose</td>
            <td>DPI (NEXThaler)</td>
            <td>2 inhalations BD</td>
            <td>COPD only (&ge;18 yrs). Extra-fine BDP &mdash; greater lung deposition. NOTE: Trimbow pMDI 172/5/9 mcg strength is NOT licensed for COPD &mdash; use 88/5/9 NEXThaler only. Annual ICS review.</td>
          </tr>
          <tr>
            <td><strong>Trimbow pMDI</strong><br>(beclometasone / formoterol / glycopyrronium)</td>
            <td>Extra-fine BDP 87 mcg + Formoterol 5 mcg + Glycopyrronium 9 mcg / puff</td>
            <td>pMDI (Aerosphere) + spacer recommended</td>
            <td>2 puffs BD</td>
            <td>Use with AeroChamber Plus spacer. Useful if DPI not suitable. Higher carbon footprint. NOTE: 172/5/9 strength NOT recommended for COPD &mdash; use 87/5/9 only. COPD only.</td>
          </tr>
          <tr>
            <td><strong>Trixeo Aerosphere</strong><br>(budesonide / formoterol / glycopyrronium)</td>
            <td>Budesonide 160 mcg + Formoterol 5 mcg + Glycopyrronium 7.2 mcg / puff</td>
            <td>pMDI (Aerosphere) + spacer recommended</td>
            <td>2 puffs BD</td>
            <td>Only budesonide-containing triple inhaler. Use with spacer. Higher carbon footprint. Suitable if NEXThaler or Ellipta not achievable. COPD only (&ge;18 yrs).</td>
          </tr>
        </tbody>
      </table>

      <h4>Add-On Therapies (Specialist Initiated)</h4>
      <table>
        <thead>
          <tr><th>Drug</th><th>Formulation</th><th>Frequency</th><th>Key Notes</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Daxas (roflumilast)</strong></td>
            <td>500 mcg tablet &mdash; ORAL (not inhaled)</td>
            <td>1 tablet OD</td>
            <td>PDE4 inhibitor. Specialist-initiated only. For severe COPD (FEV1 &lt;50%) + chronic bronchitis + &ge;2 exacerbations/yr despite triple therapy (NICE TA461). SE: nausea, diarrhoea, weight loss, depression &mdash; monitor mental health. Avoid if underweight.</td>
          </tr>
          <tr>
            <td><strong>Azithromycin 250 mg</strong><br>(prophylactic)</td>
            <td>250 mg tablet &mdash; ORAL (not inhaled)</td>
            <td>3&times; weekly</td>
            <td>Specialist-initiated. Pre-screen: sputum MC+S (incl. TB/NTM/Pseudomonas) + CT chest (exclude bronchiectasis) + ECG (QTc &mdash; avoid if &gt;450 ms men / &gt;470 ms women) + LFTs. Monitor LFTs 6-monthly; stop if hearing loss. Pro-arrhythmic. Continue through exacerbations.</td>
          </tr>
        </tbody>
      </table>

      <h4>Device Guide</h4>
      <table>
        <thead>
          <tr><th>Device</th><th>Description &amp; Considerations</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>pMDI</strong></td><td>Pressurised metered-dose inhaler. Requires coordination of inhalation with actuation. Always use with spacer. Highest carbon footprint.</td></tr>
          <tr><td><strong>DPI</strong></td><td>Dry powder inhaler. Breath-actuated &mdash; no coordination needed but requires moderate-to-high inspiratory flow. Ellipta has lowest resistance; Breezhaler and Turbohaler require higher flow. Lower carbon footprint than pMDI.</td></tr>
          <tr><td><strong>SMI (Respimat)</strong></td><td>Soft mist inhaler. Slow, fine mist &mdash; lower inspiratory flow needed. Good for elderly or those with poor coordination. Lower carbon footprint than pMDI.</td></tr>
          <tr><td><strong>Capsule DPI</strong><br>(Breezhaler, Handihaler)</td><td>Capsules must be loaded into the device before each dose. Capsules must NOT be swallowed. Audible click/rattle during inhalation is normal.</td></tr>
        </tbody>
      </table>
    `
  },

  // ─────────────────────────────────────────────
  //  ENDOCRINE
  // ─────────────────────────────────────────────

  {
    id: "type2diabetes",
    title: "Type 2 Diabetes in Adults",
    subtitle: "HbA1c targets · SGLT2i first-line [2026] · Comorbidity-based prescribing · Annual review",
    system: "Endocrine",
    nice_ref: "NG28",
    updated: "Feb 2026",

    diagnosis: `
      <h4>Individualised Care &amp; Lifestyle</h4>
      <ul>
        <li>Tailor care to personal preferences, comorbidities, polypharmacy risk and life expectancy</li>
        <li>Reassess needs and medication efficacy at every review — stop ineffective drugs</li>
        <li>Offer structured education (e.g. DESMOND/X-PERT) at diagnosis; reinforce annually</li>
        <li>Dietary advice: high-fibre, low-GI carbs; oily fish; low-fat dairy; limit saturated fat</li>
        <li>Target 5–10% weight loss if overweight; read alongside NHS T2DM Path to Remission Programme</li>
        <li>Advise regular oral health reviews — T2DM increases periodontitis risk; treating it improves HbA1c</li>
        <li>Do <strong>not</strong> offer antiplatelet therapy for primary prevention in T2DM without CVD</li>
      </ul>

      <h4>HbA1c Targets</h4>
      <p>Agree individual HbA1c target — use NICE patient decision aid</p>
      <table>
        <thead>
          <tr><th>Situation</th><th>Target HbA1c</th></tr>
        </thead>
        <tbody>
          <tr><td>Diet/lifestyle alone, or + 1 non-hypo drug</td><td>48 mmol/mol (6.5%)</td></tr>
          <tr><td>On drug associated with hypoglycaemia</td><td>53 mmol/mol (7.0%)</td></tr>
          <tr><td>HbA1c rises to ≥58 mmol/mol (7.5%)</td><td>Intensify; aim 53 mmol/mol</td></tr>
        </tbody>
      </table>
      <ul>
        <li>Reinforce diet, lifestyle and adherence whenever target not met</li>
        <li><strong>Relax target</strong> (case-by-case): reduced life expectancy; high hypo risk (falls, impaired awareness, driving/machinery); significant comorbidities or frailty</li>
        <li>Measure HbA1c every 3–6 months until stable, then 6-monthly</li>
        <li class="callout">★ HbA1c below target without hypo — encourage maintenance; check for other causes (renal deterioration, weight loss)</li>
      </ul>

      <h4>Blood Glucose Monitoring</h4>
      <p><strong>Capillary blood glucose — do NOT routinely offer unless:</strong></p>
      <ul>
        <li>On insulin | Evidence of hypoglycaemia</li>
        <li>Oral medication increasing hypo risk while driving/operating machinery</li>
        <li>Pregnant or planning pregnancy</li>
      </ul>
      <p><strong>CGM (isCGM/flash or rtCGM) — offer to insulin-treated T2DM if:</strong></p>
      <ul>
        <li>Recurrent or severe hypoglycaemia | Impaired hypo awareness</li>
        <li>Cannot self-monitor by CBG (disability/cognitive impairment)</li>
        <li>Would otherwise need ≥8 CBG tests/day | Needs carer to monitor</li>
        <li class="callout">★ CGM must be provided by team with expertise; integrate with education; annual structured review</li>
      </ul>
    `,

    management: `
      <h4>Key 2026 Prescribing Changes</h4>
      <ul>
        <li>Metformin M/R now preferred over standard-release for new starts [2026]</li>
        <li>Existing patients on standard-release: continue OR switch to M/R if not tolerated or preferred</li>
        <li><strong>SGLT2i now first-line for most patients</strong> — recommended for glycaemic, cardiovascular AND renal benefit</li>
        <li>SGLT2i and GLP-1 RA recommended as much for CV/renal protection as for HbA1c reduction</li>
      </ul>
      <p class="alert-inline">Do NOT combine a GLP-1 receptor agonist (or tirzepatide) with a DPP-4 inhibitor</p>
      <p class="callout">★ If response to medicines suggests T1DM rather than T2DM: see NICE NG17</p>

      <h4>Initial Medicines by Comorbidity [2026]</h4>
      <table>
        <thead>
          <tr><th>Comorbidity group</th><th>First-line offer [2026]</th><th>If metformin CI/not tolerated</th></tr>
        </thead>
        <tbody>
          <tr><td>No relevant comorbidity</td><td>Metformin M/R + SGLT2i</td><td>SGLT2i monotherapy</td></tr>
          <tr><td>Heart failure (any EF)</td><td>Metformin M/R + SGLT2i</td><td>SGLT2i monotherapy</td></tr>
          <tr><td>Atherosclerotic CVD</td><td>Metformin M/R + SGLT2i + sc semaglutide ≤1mg/wk</td><td>SGLT2i + sc semaglutide ≤1mg/wk</td></tr>
          <tr><td>Early-onset T2DM (&lt;40 yrs)</td><td>Metformin M/R + SGLT2i; consider GLP-1 RA or tirzepatide</td><td>SGLT2i + consider GLP-1 RA or tirzepatide</td></tr>
          <tr><td>Obesity</td><td>Metformin M/R + SGLT2i</td><td>SGLT2i monotherapy</td></tr>
          <tr><td>CKD eGFR &gt;30</td><td>Metformin M/R + SGLT2i</td><td>SGLT2i monotherapy</td></tr>
          <tr><td>CKD eGFR 20–30</td><td>Dapagliflozin or empagliflozin + DPP-4i</td><td>—</td></tr>
          <tr><td>CKD eGFR &lt;20</td><td>Consider DPP-4i</td><td>Pioglitazone or insulin</td></tr>
          <tr><td>Frailty</td><td>Metformin M/R; SGLT2i only if no risk of volume depletion/hypotension</td><td>SGLT2i (if safe) or DPP-4i</td></tr>
        </tbody>
      </table>
      <p class="callout">★ If &gt;1 comorbidity present: discuss with patient which to prioritise for treatment choice</p>
      <ul>
        <li>GLP-1 RA at time of publication (Feb 2026): liraglutide, dulaglutide, semaglutide only</li>
        <li>sc semaglutide (Ozempic): doses up to 1 mg/wk only per current licence</li>
      </ul>

      <h4>Further Medication by Comorbidity [2026]</h4>
      <table>
        <thead>
          <tr><th>Group</th><th>Further medicines if glycaemic targets not met</th></tr>
        </thead>
        <tbody>
          <tr><td>No comorbidity</td><td>Add DPP-4i; if fails: sulfonylurea, pioglitazone, or insulin</td></tr>
          <tr><td>Heart failure</td><td>Add DPP-4i; if fails: sulfonylurea or insulin (not pioglitazone)</td></tr>
          <tr><td>Atherosclerotic CVD</td><td>Add sc semaglutide if not yet started; for HbA1c: sulfonylurea, pioglitazone, or insulin</td></tr>
          <tr><td>Early-onset T2DM</td><td>Add GLP-1 RA or tirzepatide; if not suitable: DPP-4i then sulfonylurea/pioglitazone/insulin</td></tr>
          <tr><td>Obesity</td><td>After ≥3 months: GLP-1 RA or tirzepatide; if not suitable: DPP-4i then sulfonylurea/pioglitazone/insulin</td></tr>
          <tr><td>CKD</td><td>Consider DPP-4i; if fails: pioglitazone, sulfonylurea (eGFR &gt;30), or insulin</td></tr>
          <tr><td>Frailty</td><td>Consider DPP-4i; if fails: pioglitazone, sulfonylurea, or insulin</td></tr>
        </tbody>
      </table>
      <ul>
        <li>Introduce medicines stepwise; check tolerability and effectiveness of each</li>
        <li>Continue SGLT2i for CV/renal benefit even if glycaemic targets are met</li>
        <li class="alert-inline">Sulfonylureas and insulin increase hypo/falls risk — especially in frailty</li>
        <li>Stop GLP-1 RA/tirzepatide if: BMI &lt;18.5 kg/m², OR not reaching targets AND not taken for CV benefit</li>
      </ul>

      <h4>Reviewing Medicines</h4>
      <ul>
        <li>Optimise current regimen first: check adherence, adverse effects, diet, dose/formulation</li>
        <li>Make a <strong>shared decision</strong> about any changes at each review</li>
        <li class="alert-inline">Do not combine GLP-1 RA (or tirzepatide) with a DPP-4 inhibitor</li>
        <li>Stop medicines used solely for hyperglycaemia when starting insulin; retain those with CV/renal/weight benefit after discussion</li>
        <li class="callout">★ Sick day rules: written plan for each patient. Withhold metformin and SGLT2i if dehydrated/vomiting/acutely unwell; follow MHRA advice on SGLT2i ketone monitoring</li>
      </ul>

      <h4>Insulin-Based Treatment</h4>
      <ul>
        <li>Provide structured education: injection technique (rotate sites), dose titration, dietary advice, self-monitoring, hypo management, DVLA guidance</li>
        <li>Continue metformin; stop other hypo-only agents; retain CV/renal/weight benefit agents after discussion</li>
      </ul>
      <table>
        <thead>
          <tr><th>Regimen</th><th>When to use</th></tr>
        </thead>
        <tbody>
          <tr><td>Basal (once or twice daily)</td><td>Initial therapy for all</td></tr>
          <tr><td>Basal + short/rapid (or biphasic)</td><td>HbA1c ≥75 mmol/mol (9%) or post-meal highs</td></tr>
          <tr><td>Biphasic analogue (not human)</td><td>Pre-meal preference; hypo problem; marked post-meal rise</td></tr>
        </tbody>
      </table>
      <ul>
        <li>Basal choice: shared decision on carer needs, nocturnal hypo risk, once-daily preference; use least expensive suitable option</li>
        <li>Each review: check basal patients for need to add bolus; check biphasic patients for need to adjust or switch to basal-bolus</li>
        <li class="alert-inline">Biosimilar insulins: use lowest cost when starting; shared decision to switch existing patients (MHRA guidance)</li>
      </ul>
    `,

    referral: `
      <h4>Suspected T1DM / LADA</h4>
      <div class="alert-box">
        <p><strong>If response to medicines suggests T1DM rather than T2DM:</strong></p>
        <ul>
          <li>Refer per <strong>NICE NG17</strong> (Type 1 diabetes in adults)</li>
          <li>Consider if: rapid deterioration, unexplained weight loss, ketosis, atypical presentation</li>
        </ul>
      </div>

      <h4>Complications — Onward Referral</h4>
      <p><strong>Foot care:</strong></p>
      <ul>
        <li>Annual foot exam; stratify risk; refer high-risk or active foot problems to <strong>MDT foot care team</strong></li>
      </ul>
      <p><strong>Nephropathy / CKD:</strong></p>
      <ul>
        <li>Manage per <strong>NICE NG203</strong>; SGLT2i for renal protection per initial medicines table</li>
      </ul>
      <p><strong>Retinopathy:</strong></p>
      <ul>
        <li>Annual NHS diabetic eye screening; refer to ophthalmology if sight-threatening changes</li>
        <li class="alert-inline">Warn: rapid HbA1c reduction can worsen retinopathy — see NICE NG28/NG17 guidance</li>
      </ul>
      <p><strong>Neuropathy:</strong></p>
      <ul>
        <li>Assess annually; painful diabetic neuropathy: manage per <strong>NICE NG59</strong></li>
      </ul>
      <p><strong>Gastroparesis:</strong></p>
      <ul>
        <li>Consider if erratic glucose control, unexplained bloating or vomiting</li>
        <li>Alternate erythromycin and metoclopramide; domperidone only exceptionally (cardiac risk — MHRA)</li>
      </ul>
      <p><strong>Erectile dysfunction:</strong></p>
      <ul>
        <li>Optimise CVD risk; offer PDE5 inhibitor if not contraindicated; psychological support</li>
      </ul>
      <p><strong>Periodontitis:</strong></p>
      <ul>
        <li>Refer to dental/oral health team if periodontitis diagnosed</li>
      </ul>

      <h4>Other Referral Indications</h4>
      <ul>
        <li>CGM provision — must be provided by team with expertise in CGM use</li>
        <li>Pregnancy or planning pregnancy — see <strong>NICE NG3</strong> (diabetes in pregnancy)</li>
        <li>Obesity management — see also <strong>NICE NG246</strong>; NHS T2DM Path to Remission Programme</li>
      </ul>
    `,

    monitoring: `
      <h4>Annual Review — Key Parameters</h4>
      <table>
        <thead>
          <tr><th>Parameter</th><th>Frequency / Action</th></tr>
        </thead>
        <tbody>
          <tr><td>HbA1c</td><td>3–6 monthly until stable; then 6-monthly</td></tr>
          <tr><td>BP</td><td>Annually (at least); manage per NICE NG136</td></tr>
          <tr><td>Urine ACR + eGFR</td><td>Annually</td></tr>
          <tr><td>Lipids / CVD risk</td><td>Annually; use QRISK3</td></tr>
          <tr><td>Foot examination</td><td>Annually; refer if at risk or active problem</td></tr>
          <tr><td>Retinal screening</td><td>Annually via NHS diabetic eye screening</td></tr>
          <tr><td>Weight / BMI</td><td>Annually</td></tr>
          <tr><td>Medication review</td><td>Annually; stop ineffective drugs</td></tr>
          <tr><td>Education review</td><td>Annually</td></tr>
          <tr><td>Oral health reminder</td><td>Annually — advise regular dental review</td></tr>
          <tr><td>Psychological wellbeing</td><td>At each review</td></tr>
        </tbody>
      </table>

      <h4>Managing Complications</h4>
      <p><strong>Foot care:</strong></p>
      <ul>
        <li>Annual foot exam; stratify risk; refer high-risk or active problems to MDT foot care team</li>
      </ul>
      <p><strong>Nephropathy / CKD:</strong></p>
      <ul>
        <li>Annual ACR + eGFR; manage per NICE NG203; SGLT2i for renal protection</li>
      </ul>
      <p><strong>Retinopathy:</strong></p>
      <ul>
        <li>Annual NHS diabetic eye screening; ophthalmology referral if sight-threatening changes</li>
        <li class="alert-inline">Warn: rapid HbA1c reduction can worsen retinopathy</li>
      </ul>
      <p><strong>Neuropathy:</strong></p>
      <ul>
        <li>Assess annually; painful diabetic neuropathy: manage per NICE NG59</li>
      </ul>
      <p><strong>Gastroparesis:</strong></p>
      <ul>
        <li>Consider if erratic glucose control, unexplained bloating or vomiting</li>
        <li>Alternate erythromycin and metoclopramide; domperidone only exceptionally (MHRA guidance)</li>
      </ul>
      <p><strong>Erectile dysfunction:</strong></p>
      <ul>
        <li>Optimise CVD risk; offer PDE5 inhibitor if not contraindicated; psychological support</li>
      </ul>
      <p><strong>Periodontitis:</strong></p>
      <ul>
        <li>Higher risk of periodontitis; treating it improves glucose control</li>
        <li>Advise regular dental review; refer to dental/oral health team if diagnosed</li>
      </ul>
    `
  },

  // ─────────────────────────────────────────────
  //  MENTAL HEALTH
  // ─────────────────────────────────────────────

  {
    id: "depression",
    title: "Depression in Adults",
    subtitle: "PHQ-9 severity · Matched care model · Antidepressant prescribing · Relapse prevention",
    system: "Mental Health",
    nice_ref: "NG222",
    updated: "Dec 2025",

    diagnosis: `
      <h4>Definition &amp; Severity</h4>
      <p>Wide range of problems: absent positive affect, low mood, emotional/cognitive/physical/behavioural symptoms. Severity is a continuum of symptoms, duration, and functional impact.</p>
      <table>
        <thead><tr><th>Category</th><th>PHQ-9</th><th>Equivalent</th></tr></thead>
        <tbody>
          <tr><td>Less severe</td><td>&lt;16</td><td>Subthreshold / mild</td></tr>
          <tr><td>More severe</td><td>≥16</td><td>Moderate / severe</td></tr>
        </tbody>
      </table>
      <p class="callout">★ Matched care model: use least intrusive, most resource-efficient treatment appropriate to need</p>

      <h4>Recognition &amp; Assessment</h4>
      <p><strong>Screening (PHQ-2 approach) — over the last month, often bothered by:</strong></p>
      <ul>
        <li>Feeling down, depressed, or hopeless?</li>
        <li>Little interest or pleasure in doing things?</li>
      </ul>
      <p><strong>Comprehensive assessment — do not rely on symptom count alone:</strong></p>
      <ul>
        <li>Symptom severity, duration, course; functional/social impairment</li>
        <li>Past history of depression; coexisting mental/physical disorders</li>
        <li>History of mood elevation (consider bipolar — see CG185)</li>
        <li>Previous treatment response; current lifestyle (diet, activity, sleep)</li>
        <li>Stressful/traumatic life events, debt, employment, loneliness, alcohol/drug use</li>
      </ul>
      <p><strong>Depression with anxiety:</strong></p>
      <ul>
        <li>If comorbid anxiety <em>disorder</em>: treat anxiety disorder first</li>
        <li>If anxiety symptoms only: treat the depression first</li>
      </ul>
      <ul>
        <li>Use PHQ-9 (or equivalent) to inform and evaluate treatment</li>
        <li>Review treatment efficacy at <strong>2–4 weeks</strong> after starting</li>
      </ul>

      <h4>Risk Assessment &amp; Management</h4>
      <div class="alert-box">
        <p><strong>Always ask directly about suicidal ideation and intent</strong></p>
        <ul>
          <li>Assess social support; arrange help appropriate to level of risk</li>
          <li>Do <strong>not</strong> withhold treatment on basis of suicide risk</li>
          <li>Limit quantity of medication if overdose risk; consider liquid formulations</li>
          <li>Consider more frequent contact (in-person, video, phone)</li>
          <li>Refer urgently to specialist mental health if immediate risk to self/others</li>
        </ul>
      </div>
      <p><strong>Ages 18–25 or increased suicide risk — antidepressants:</strong></p>
      <ul>
        <li>Assess mental state before prescribing (ideally in person)</li>
        <li>Review after <strong>1 week</strong> (not 2 weeks) for suicidality</li>
        <li class="alert-inline">Warn of potential increased agitation/suicidal ideation in early treatment — advise patient and carer to be vigilant, especially on starting/changing treatment</li>
      </ul>
    `,

    management: `
      <h4>Less Severe Depression (PHQ-9 &lt;16)</h4>
      <p class="callout">★ Do NOT routinely offer antidepressants as first-line (amended Oct/Dec 2025) — unless patient preference after full discussion</p>
      <ul>
        <li><strong>Active monitoring:</strong> for those not wanting treatment — regular follow-up, self-help materials, address social factors</li>
      </ul>
      <p><strong>First-line options (in approximate order of preference):</strong></p>
      <table>
        <thead><tr><th>Intervention</th><th>Format</th></tr></thead>
        <tbody>
          <tr><td>Individual guided self-help</td><td>CBT-based, 6–8 sessions</td></tr>
          <tr><td>Group CBT</td><td>Group format</td></tr>
          <tr><td>Group behavioural activation</td><td>Group format</td></tr>
          <tr><td>Structured physical activity</td><td>Up to 3 sessions/wk × 12 wks</td></tr>
          <tr><td>Individual CBT</td><td>If group not suitable</td></tr>
          <tr><td>Individual behavioural activation</td><td>If group not suitable</td></tr>
          <tr><td>Individual IPT</td><td>If CBT/BA not suitable</td></tr>
          <tr><td>Mindfulness-based CBT (MBCT)</td><td>If appropriate</td></tr>
          <tr><td>Short-term psychodynamic therapy (STPP)</td><td>Last ranked option</td></tr>
          <tr><td><strong>SSRI antidepressant</strong></td><td><strong>If patient preference</strong></td></tr>
        </tbody>
      </table>
      <ul>
        <li>If antidepressant chosen: <strong>sertraline</strong> first choice (favourable efficacy/safety profile)</li>
        <li>Discuss: benefits, harms, withdrawal effects, expected onset within 4 weeks</li>
        <li>Provide written information; agree management plan</li>
      </ul>

      <h4>More Severe Depression (PHQ-9 ≥16)</h4>
      <p><strong>First-line — offer a combination or one of:</strong></p>
      <table>
        <thead><tr><th>Intervention</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td><strong>Antidepressant + psychological therapy</strong></td><td>Combination preferred</td></tr>
          <tr><td>Antidepressant alone (SSRI first)</td><td>If therapy not preferred/available</td></tr>
          <tr><td>Individual CBT alone</td><td>If antidepressant declined</td></tr>
          <tr><td>Individual IPT</td><td>Alternative to CBT</td></tr>
          <tr><td>Behavioural couples therapy</td><td>If relationship difficulties contribute</td></tr>
          <tr><td>STPP</td><td>If other therapies declined/unavailable</td></tr>
        </tbody>
      </table>
      <p><strong>Antidepressant choice — more severe:</strong></p>
      <ul>
        <li>SSRIs first-line; also consider SNRIs, mirtazapine, TCAs if SSRI unsuitable</li>
        <li class="alert-inline">Avoid dosulepin — cardiac toxicity, overdose risk</li>
        <li>Vortioxetine: if prior SSRI/SNRI failure (see TA367)</li>
      </ul>
      <p><strong>Treatment non-response:</strong></p>
      <ul>
        <li>No response after <strong>4 weeks</strong> (antidepressant) or <strong>4–6 weeks</strong> (psychological): review contributing factors, consider switching or augmenting</li>
        <li>Switch within or between drug classes; or add psychological therapy to antidepressant</li>
      </ul>

      <h4>Antidepressant Prescribing &amp; Stopping</h4>
      <p><strong>Before starting — discuss and agree:</strong></p>
      <ul>
        <li>Reasons for medication; dose and likely adjustments</li>
        <li>Expected onset: usually within <strong>4 weeks</strong> if effective</li>
        <li>Harms: side effects, withdrawal, sexual dysfunction, weight gain, sedation</li>
        <li>Duration: continue for at least <strong>6 months after remission</strong>; review regularly</li>
        <li>Self-monitoring; written information to take away</li>
      </ul>
      <p><strong>Withdrawal — key points:</strong></p>
      <ul>
        <li class="alert-inline">Paroxetine and venlafaxine: higher risk of withdrawal — extra caution; taper slowly in step-wise fashion (e.g. 50% then 25% reductions)</li>
        <li>Speed led by patient — ensure symptoms resolved before next reduction</li>
        <li>Consider liquid preparations for very small doses</li>
        <li>Fluoxetine: long half-life allows alternate-day dosing at 20 mg</li>
        <li>Withdrawal symptoms ≠ relapse; reassure patient</li>
        <li>If severe withdrawal: restart at previous dose, taper more slowly</li>
      </ul>
      <p><strong>Withdrawal symptoms include:</strong> dizziness/vertigo, electric shock sensations, GI upset, insomnia, palpitations, irritability, anxiety, low mood — onset days after stopping, usually resolve 1–2 weeks (can be months)</p>

      <h4>Relapse Prevention</h4>
      <p><strong>Who is at risk:</strong> ≥2 previous episodes; severe/prolonged episodes; residual symptoms; chronic depression</p>
      <p><strong>Preventing relapse — offer:</strong></p>
      <ul>
        <li>Continue antidepressant for at least 6 months post-remission (2+ years if recurrent/high-risk)</li>
        <li><strong>Mindfulness-based CBT (MBCT):</strong> 8 sessions over 2–3 months; especially effective after ≥3 episodes; includes relapse-prevention skills</li>
        <li>Group CBT with explicit relapse prevention focus</li>
        <li>Combined antidepressant + psychological therapy (CBT or MBCT)</li>
      </ul>
      <ul>
        <li>Identify warning signs (anxiety, poor sleep, avoidance, rumination)</li>
        <li>Develop action plan for early deterioration</li>
        <li>Review lessons from therapy; consolidate strategies</li>
      </ul>

      <h4>Further-Line &amp; Treatment-Resistant</h4>
      <p><strong>After two treatment failures — consider:</strong></p>
      <ul>
        <li>Lithium augmentation of antidepressant (shared care; monitor levels)</li>
        <li>Augmentation with atypical antipsychotic (shared care)</li>
        <li>Combining two antidepressants (e.g. SSRI + mirtazapine) — specialist advice</li>
        <li>Vortioxetine (TA367) — if prior SSRI/SNRI failure</li>
      </ul>
      <p><strong>Treatment-resistant (≥2 adequate trials):</strong></p>
      <ul>
        <li>Refer to specialist mental health services</li>
        <li>Esketamine nasal spray: <strong>not recommended</strong> by NICE TA</li>
        <li>rTMS (IPG542) or vagus nerve stimulation (IPG679): consider per guidance</li>
        <li>ECT: severe/life-threatening or previous response — accredited service, informed consent required</li>
      </ul>

      <h4>Chronic &amp; Psychotic Depression</h4>
      <p><strong>Chronic depressive symptoms (&gt;2 years):</strong></p>
      <ul>
        <li>Offer same treatments as acute depression; antidepressant + CBT or STPP preferred</li>
        <li>Address social/environmental maintaining factors</li>
      </ul>
      <p><strong>Psychotic depression:</strong></p>
      <ul>
        <li class="alert-inline">Do not offer antidepressant monotherapy — risk of worsening</li>
        <li>Offer antidepressant + antipsychotic (combined) or ECT</li>
        <li>Manage under specialist mental health services</li>
      </ul>
      <p><strong>Depression + personality disorder:</strong></p>
      <ul>
        <li>Treat as for depression without PD; psychological therapy preferred</li>
        <li>Antidepressants may help comorbid anxiety</li>
      </ul>
    `,

    referral: `
      <div class="alert-box">
        <p><strong>Urgent referral to specialist mental health — immediate risk to self or others</strong></p>
      </div>

      <h4>Other Indications for Specialist Referral</h4>
      <ul>
        <li>Treatment-resistant depression (≥2 adequate trials failed)</li>
        <li>Psychotic symptoms or bipolar risk</li>
        <li>Chronic severe depression not responding in primary care</li>
        <li>Stopping lithium (always under specialist supervision)</li>
      </ul>

      <h4>Safety Netting</h4>
      <ul>
        <li>Ensure patient knows how to seek urgent help if condition worsens</li>
        <li>Advise family/carer to be vigilant for worsening mood, hopelessness, suicidal ideation</li>
        <li>Provide written information and peer support/self-help resources</li>
        <li class="callout">★ Consider advance statement for recurrent severe or psychotic depression</li>
      </ul>
    `,

    monitoring: `
      <h4>Review Timing</h4>
      <ul>
        <li>General: within <strong>2 weeks</strong> of starting antidepressant</li>
        <li>Age 18–25 or increased suicide risk: after <strong>1 week</strong></li>
        <li>Review treatment efficacy at 2–4 weeks; assess PHQ-9 at each contact</li>
        <li>No response at 4 weeks (antidepressant) or 4–6 weeks (psychological): review contributing factors, consider switching or augmenting</li>
      </ul>

      <h4>Lithium Monitoring (Shared Care)</h4>
      <table>
        <thead><tr><th>Period</th><th>Frequency</th></tr></thead>
        <tbody>
          <tr><td>Stable dose, Year 1</td><td>Every 3 months</td></tr>
          <tr><td>After Year 1</td><td>Every 6 months</td></tr>
          <tr><td>Older / renal impairment</td><td>Every 3 months</td></tr>
        </tbody>
      </table>
      <ul>
        <li>Stop lithium only under specialist advice; taper over 1–3 months</li>
      </ul>

      <h4>Ongoing Care</h4>
      <ul>
        <li>Continue antidepressant for at least 6 months post-remission (2+ years if recurrent/high-risk)</li>
        <li>Monitor for relapse warning signs: anxiety, poor sleep, avoidance, rumination</li>
        <li>Signpost to peer support, self-help resources</li>
        <li>Assess for comorbid anxiety, substance misuse, physical illness at each review</li>
      </ul>
    `
  },

  // ─────────────────────────────────────────────
  //  GASTROENTEROLOGY
  // ─────────────────────────────────────────────

  {
    id: "ibs",
    title: "Irritable Bowel Syndrome",
    subtitle: "Positive symptom-based diagnosis · Subtype-targeted pharmacotherapy · Low FODMAP",
    system: "Gastroenterology",
    nice_ref: "CG61",
    updated: "Apr 2017",

    diagnosis: `
      <h4>Background</h4>
      <ul>
        <li>Chronic, relapsing, often life-long functional GI disorder</li>
        <li>Subtypes: diarrhoea-predominant (IBS-D), constipation-predominant (IBS-C), mixed/alternating (IBS-M)</li>
        <li>Most common age 20–30; 2× more common in women</li>
        <li>Often overlaps with non-ulcer dyspepsia or coeliac disease</li>
      </ul>

      <h4>Diagnosis</h4>
      <p><strong>Consider IBS assessment if symptoms ≥6 months:</strong> abdominal pain or discomfort · bloating · change in bowel habit</p>
      <p><strong>Diagnostic criteria — all must be met:</strong></p>
      <ul>
        <li>Abdominal pain/discomfort <strong>relieved by defaecation</strong> OR <strong>associated with altered bowel frequency/stool form</strong></li>
        <li>PLUS at least <strong>2 of the following 4:</strong>
          <ul>
            <li>Altered stool passage (straining, urgency, incomplete evacuation)</li>
            <li>Abdominal bloating, distension, tension or hardness</li>
            <li>Symptoms made worse by eating</li>
            <li>Passage of mucus</li>
          </ul>
        </li>
      </ul>
      <p><strong>Supporting features</strong> (not diagnostic but supportive): lethargy, nausea, backache, bladder symptoms</p>
      <p class="callout">★ Diagnosis of IBS is positive (symptom-based), not exclusionary. Bristol Stool Form Scale type 4 = target stool consistency when titrating treatment.</p>

      <h4>Investigations — Required in All Who Meet IBS Criteria</h4>
      <ul>
        <li>FBC · ESR or plasma viscosity · CRP</li>
        <li>Coeliac serology: EMA or TTG antibodies</li>
      </ul>
      <p><strong>NOT required to confirm IBS diagnosis:</strong> ultrasound, sigmoidoscopy, colonoscopy, barium enema, TFTs, faecal OCP, faecal occult blood, hydrogen breath test</p>

      <h4>Red Flags — Refer to Secondary Care</h4>
      <div class="alert-box">
        <p><strong>Refer if ANY of the following present (re-check at every follow-up):</strong></p>
        <ul>
          <li>Signs/symptoms of cancer — follow NG12 (suspected cancer)</li>
          <li>Elevated inflammatory markers (CRP/ESR/PV) — consider IBD</li>
          <li>Rectal bleeding · Unintentional/unexplained weight loss</li>
          <li>Onset age &gt;60 with change in bowel habit persisting &gt;6 weeks</li>
          <li>Abdominal or rectal mass</li>
          <li>Family history of bowel/ovarian cancer</li>
        </ul>
      </div>
    `,

    management: `
      <h4>Dietary, Lifestyle &amp; Self-Help (First-Line for All)</h4>
      <ul>
        <li>Eat regular meals; avoid skipping meals</li>
        <li>Fluid: ≥8 cups/day (water or non-caffeinated drinks)</li>
        <li>Limit tea/coffee to 3 cups/day; reduce alcohol and fizzy drinks</li>
        <li>Limit high-fibre foods (bran, wholemeal, brown rice); reduce resistant starch (processed/re-cooked foods)</li>
        <li>Limit fresh fruit to 3 portions/day (~80 g each)</li>
        <li><strong>IBS-D:</strong> avoid sorbitol (sugar-free sweets, chewing gum, diabetic products)</li>
        <li><strong>Bloating/wind:</strong> oats and linseeds (up to 1 tbsp/day) may help</li>
        <li>Fibre: reduce insoluble fibre (bran); if increase needed, use <strong>soluble fibre</strong> (ispaghula/oats)</li>
        <li>Assess activity levels (GPPAQ); encourage increase if low · encourage relaxation</li>
        <li>Probiotics: patient choice — advise ≥4 weeks at manufacturer dose; monitor effect</li>
        <li><strong>Not recommended:</strong> aloe vera · acupuncture · reflexology</li>
      </ul>

      <h4>Pharmacological Management</h4>
      <p><strong>Pain/spasm:</strong></p>
      <ul>
        <li>Antispasmodics — first-line; take as required alongside lifestyle advice
          <ul><li>e.g. mebeverine, hyoscine butylbromide, peppermint oil</li></ul>
        </li>
      </ul>
      <p><strong>IBS-C (constipation-predominant):</strong></p>
      <ul>
        <li>Laxatives — first-line; <strong>avoid lactulose</strong>; titrate to Bristol type 4 stool</li>
        <li>Linaclotide — only if: optimal laxative doses from ≥2 classes have failed <strong>AND</strong> constipation ≥12 months; review at 3 months; discontinue if inadequate response</li>
      </ul>
      <p><strong>IBS-D (diarrhoea-predominant):</strong></p>
      <ul>
        <li>Loperamide — first-choice antimotility agent; titrate to Bristol type 4; patient self-adjusts dose</li>
      </ul>
      <p><strong>Second-line — pain/global symptoms unresponsive to above:</strong></p>
      <ul>
        <li><strong>TCA (off-label):</strong> start 5–10 mg amitriptyline equivalent once at night; increase cautiously — do not usually exceed 30 mg; review at 4 weeks then 6–12 monthly; document informed consent</li>
        <li><strong>SSRI (off-label):</strong> only if TCA ineffective; review at 4 weeks then 6–12 monthly; document consent</li>
        <li class="alert-inline">TCAs and SSRIs are off-label for IBS — document informed consent. Follow NG215 for antidepressant dependence/withdrawal guidance.</li>
      </ul>

      <h4>Drug Treatment Summary</h4>
      <table>
        <thead><tr><th>Symptom</th><th>1st line</th><th>2nd line</th></tr></thead>
        <tbody>
          <tr><td>Pain/spasm</td><td>Antispasmodic (PRN)</td><td>TCA (low dose)</td></tr>
          <tr><td>IBS-C</td><td>Laxative (non-lactulose)</td><td>Linaclotide*</td></tr>
          <tr><td>IBS-D</td><td>Loperamide (titrate)</td><td>TCA (low dose)</td></tr>
          <tr><td>Global/pain unresponsive</td><td>TCA</td><td>SSRI</td></tr>
        </tbody>
      </table>
      <p>*Linaclotide: only after ≥2 laxative classes failed AND constipation ≥12 months</p>

      <h4>Advanced Dietary Management (2nd Line)</h4>
      <ul>
        <li>If symptoms persist despite general dietary advice, <strong>refer to dietitian</strong></li>
        <li><strong>Low FODMAP diet</strong> — consider under dietitian supervision (Fermentable Oligosaccharides, Disaccharides, Monosaccharides And Polyols — poorly absorbed carbs → fermentation → gas, bloating, pain, diarrhoea)</li>
        <li>Single food avoidance / structured exclusion diets may also be offered</li>
        <li class="callout">★ Advanced dietary advice must be given by a healthcare professional with dietary expertise</li>
      </ul>

      <h4>Psychological Interventions (Refractory IBS)</h4>
      <ul>
        <li>Indicate if IBS refractory to pharmacological treatments after <strong>12 months</strong>, or continuing/worsening symptoms despite treatment</li>
        <li>Cognitive behavioural therapy (CBT) · Hypnotherapy · Psychodynamic interpersonal therapy</li>
        <li class="callout">★ Greatest benefit in refractory IBS — refer early if symptoms significantly impact quality of life</li>
      </ul>
    `,

    referral: `
      <div class="alert-box">
        <p><strong>Refer to secondary care if ANY red flag present (re-check at every review):</strong></p>
        <ul>
          <li>Signs/symptoms of cancer — follow NG12</li>
          <li>Elevated inflammatory markers (CRP/ESR/PV) — consider IBD</li>
          <li>Rectal bleeding · Unintentional/unexplained weight loss</li>
          <li>Onset age &gt;60 with change in bowel habit persisting &gt;6 weeks</li>
          <li>Abdominal or rectal mass</li>
          <li>Family history of bowel/ovarian cancer</li>
        </ul>
      </div>

      <h4>Referral for Dietitian-Led Dietary Management</h4>
      <ul>
        <li>Symptoms persist despite first-line dietary advice</li>
        <li>Low FODMAP diet must be supervised by a healthcare professional with dietary expertise</li>
      </ul>

      <h4>Referral for Psychological Intervention</h4>
      <ul>
        <li>IBS refractory to pharmacological treatments after 12 months</li>
        <li>Continuing/worsening symptom profile despite treatment</li>
        <li>Symptoms significantly impacting quality of life — refer early</li>
        <li>Options: CBT · hypnotherapy · psychodynamic interpersonal therapy</li>
      </ul>
    `,

    monitoring: `
      <h4>Follow-up</h4>
      <ul>
        <li>Agree follow-up plan with patient based on symptom response</li>
        <li>Include as part of <strong>annual patient review</strong></li>
        <li>Check for any new red flag symptoms at every review; re-investigate and/or refer if new red flags emerge</li>
        <li>If TCA or SSRI started: review at 4 weeks, then 6–12 monthly</li>
        <li>Linaclotide: review at 3 months; discontinue if inadequate response</li>
      </ul>
      <p class="callout">★ IBS is chronic and relapsing — set realistic expectations; emphasise self-management</p>

      <h4>Safety-Netting Advice for Patients</h4>
      <ul>
        <li class="alert-inline">Seek urgent review if: unintentional weight loss, rectal bleeding, persistent change in bowel habit, new abdominal mass</li>
        <li>Symptoms can fluctuate — reassure about benign nature</li>
        <li>Written lifestyle/diet information improves self-management</li>
      </ul>

      <h4>Self-Help (Provide to All Patients)</h4>
      <ul>
        <li>Symptom diary to identify triggers</li>
        <li>Regular meals, hydration, physical activity</li>
        <li>Stress management and adequate relaxation time</li>
      </ul>
    `
  }

];
