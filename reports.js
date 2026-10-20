/*
  =====================================================================
  YOUR REPORTS LIST: this is the only file you need to edit.
  =====================================================================

  HOW TO ADD A NEW REPORT
  1. Put the PDF in the "reports" folder. Use a short file name with no
     spaces, e.g.  2026-11-nz-housing-outlook.pdf
  2. Copy one of the entries below (from the opening { to the closing },)
     and paste it anywhere in the list. Then change the details:

       title        The report title.
       date         Used to sort the list, newest first. Format: YYYY-MM-DD.
                    If you only know the month, use the 1st (2026-11-01).
       displayDate  What visitors see, e.g. "14 Aug 2026" or "November 2026".
       role         Your credit, e.g. "Sole author", "Sole editor",
                    "Co-editor with Jane Smith". Use "" to hide it.
       summary      Two or three plain sentences on what the report covers.
       tags         Topics for the filter buttons. Reuse existing tags where
                    you can; a new tag creates a new button automatically.
       file         The PDF's file name, exactly as it is in "reports".

  3. Save, then upload both this file and the new PDF to GitHub.

  Watch the punctuation: each entry is wrapped in { }, followed by a comma,
  and text goes inside "double quotes". If a summary needs a double quote,
  write it as \" instead.
*/

const REPORTS = [
  {
    title: "Global Macro Report: AI holds the market up. Bonds could pull it down.",
    date: "2026-10-01",
    displayDate: "October 2026",
    role: "Sole author",
    summary: "Looks at the three things driving markets right now: AI, bond yields and geopolitics, and how they all meet in the bond market. Covers how concentrated the AI rally has become, why heavy borrowing by AI companies and governments is pushing US yields up, and what the Iran war and the US-China trade truce mean for oil and inflation. Ends with a three-month view on AI stocks, the US 10-year yield, oil, the S&P 500 and the Fed.",
    tags: ["Global macro", "Equities", "Bonds & credit"],
    file: "2026-10-global-macro-report.pdf"
  },
  {
    title: "Understanding El Niño 2026: Economic and Market Impacts",
    date: "2026-08-14",
    displayDate: "14 Aug 2026",
    role: "Sole editor",
    summary: "Explains what El Niño is and why the 2026 event could be one of the strongest since 1950. Looks at the likely costs to the global economy, what it means for commodity markets in different regions, and the specific impact on New Zealand.",
    tags: ["Commodities", "New Zealand", "Global macro"],
    file: "2026-08-14-el-nino-2026.pdf"
  },
  {
    title: "S&P 500 Q1 2026 Earnings Outlook",
    date: "2026-05-08",
    displayDate: "8 May 2026",
    role: "Sole editor",
    summary: "Reviews first-quarter results once 89% of S&P 500 companies had reported. Revenue growth came in at 11.3% against 9.9% expected, the highest since Q2 2022, with every sector growing and profit margins at a record. Also looks at the K-shaped split in the market and what the CAPE ratio says about valuations.",
    tags: ["Equities"],
    file: "2026-05-08-sp500-q1-earnings-outlook.pdf"
  },
  {
    title: "Weekly Market Report",
    date: "2026-04-24",
    displayDate: "24 Apr 2026",
    role: "Co-editor with Cao Khai Doan",
    summary: "Covers Moody's move to a negative outlook on New Zealand, the second ratings agency to do so this year, and Treasury's oil price scenarios. Then looks at why the US dollar's war premium is fading as investors turn to Fed rate cuts, and at Blackstone's bet on the data centres and power that AI depends on.",
    tags: ["New Zealand", "Currencies", "Private markets"],
    file: "2026-04-24-weekly-market-report.pdf"
  },
  {
    title: "Weekly Market Report",
    date: "2026-04-10",
    displayDate: "10 Apr 2026",
    role: "MUIC research team",
    summary: "A US-Iran ceasefire eased oil prices, but the RBNZ still expects inflation to peak at 4.2% in June and rate hikes are now on the table. The report also looks at why oil shocks are making bonds and shares fall together, and what Novartis's US$2 billion allergy treatment deal says about how big pharma approaches early-stage biotech.",
    tags: ["New Zealand", "Bonds & credit", "Commodities"],
    file: "2026-04-10-weekly-market-report.pdf"
  },
  {
    title: "Private Credit Market Outlook",
    date: "2026-04-10",
    displayDate: "Semester 1, 2026",
    role: "Sole author",
    summary: "Explains how private credit grew from about $300 billion to $1.8 trillion and how its main strategies and lenders work. Argues that risks are building: retail money in funds that cannot easily pay investors back, a market that has not been through a credit cycle in 17 years, heavy exposure to software companies, and a wall of loans due for refinancing in 2027 and 2028.",
    tags: ["Bonds & credit", "Private markets"],
    file: "2026-s1-private-credit-outlook.pdf"
  },
  {
    title: "Weekly Market Report",
    date: "2026-04-03",
    displayDate: "3 Apr 2026",
    role: "Co-editor with Cao Khai Doan",
    summary: "Updates on the Iran war ahead of the 6 April deadline and the Houthis' entry into the conflict. Looks at why bonds are not protecting the classic 60/40 portfolio during the oil shock, whether the S&P 500 correction is nearly over, and why the euro's weakness is more about energy dependence than interest rates.",
    tags: ["Global macro", "Equities", "Currencies"],
    file: "2026-04-03-weekly-market-report.pdf"
  },
  {
    title: "Weekly Market Report",
    date: "2026-03-27",
    displayDate: "27 Mar 2026",
    role: "Co-editor with Cao Khai Doan and Gia Bao Thu Ngo",
    summary: "Opens with a New Zealand data wrap as the Middle East conflict starts to show up in local numbers. Then looks at why the RBNZ's OCR path depends on more than domestic inflation, why oil is now trading on credibility rather than supply, and what rising fund manager cash levels say about sentiment.",
    tags: ["New Zealand", "Commodities", "Equities"],
    file: "2026-03-27-weekly-market-report.pdf"
  },
  {
    title: "Understanding Asset Tokenization",
    date: "2026-03-06",
    displayDate: "6 Mar 2026",
    role: "MUIC research team",
    summary: "An introduction to asset tokenization: recording ownership of real assets such as bonds, funds, property or commodities as digital tokens on a blockchain. Covers where it is already used, how adoption is growing, and the main benefits and risks.",
    tags: ["Fintech"],
    file: "2026-03-06-asset-tokenization.pdf"
  },
  {
    title: "The Rising Cost of Ageing: Challenges for NZ Superannuation",
    date: "2026-02-27",
    displayDate: "27 Feb 2026",
    role: "MUIC research team",
    summary: "New Zealand's population is getting older while the share of working-age people shrinks. The report explains how NZ Super works, why its universal design puts growing pressure on government finances, and what KiwiSaver reform could do to help.",
    tags: ["New Zealand", "Policy"],
    file: "2026-02-27-rising-cost-of-ageing.pdf"
  },
  {
    title: "New Zealand Weekly Market Outlook",
    date: "2026-02-20",
    displayDate: "20 Feb 2026",
    role: "MUIC research team",
    summary: "Covers the RBNZ's decision to hold the OCR at 2.25% and its slightly higher rate track, which now points to one hike before the end of 2026. Also looks at inflation sitting just above the target band and early signs of economic recovery.",
    tags: ["New Zealand"],
    file: "2026-02-20-nz-weekly-market-outlook.pdf"
  }
];
