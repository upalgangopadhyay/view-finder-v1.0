from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "brochures"
OUTPUT_PATH = OUTPUT_DIR / "kashmir-trip-brochure-viewfinder.pdf"


def register_fonts() -> tuple[str, str]:
    regular = Path(r"C:\Windows\Fonts\arial.ttf")
    bold = Path(r"C:\Windows\Fonts\arialbd.ttf")
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("VfSans", str(regular)))
        pdfmetrics.registerFont(TTFont("VfSansBold", str(bold)))
        return "VfSans", "VfSansBold"
    return "Helvetica", "Helvetica-Bold"


def styles(fr: str, fb: str):
    base = getSampleStyleSheet()
    return {
        "brand": ParagraphStyle("brand", parent=base["Normal"], fontName=fb, fontSize=11, textColor=colors.HexColor("#0B3D91"), alignment=1),
        "title": ParagraphStyle("title", parent=base["Title"], fontName=fb, fontSize=31, leading=35, textColor=colors.HexColor("#0C2D57"), alignment=1),
        "tag": ParagraphStyle("tag", parent=base["Normal"], fontName=fr, fontSize=12, leading=17, textColor=colors.HexColor("#24577A"), alignment=1),
        "h2": ParagraphStyle("h2", parent=base["Heading2"], fontName=fb, fontSize=16, leading=19, textColor=colors.HexColor("#0B3D91"), spaceBefore=3, spaceAfter=3),
        "h3": ParagraphStyle("h3", parent=base["Heading3"], fontName=fb, fontSize=12, leading=15, textColor=colors.HexColor("#0A5A88"), spaceBefore=2, spaceAfter=1),
        "body": ParagraphStyle("body", parent=base["Normal"], fontName=fr, fontSize=10.5, leading=14, textColor=colors.HexColor("#1F2D3A"), spaceAfter=2),
        "bullet": ParagraphStyle("bullet", parent=base["Normal"], fontName=fr, fontSize=10.4, leading=13.5, leftIndent=13, bulletIndent=1, textColor=colors.HexColor("#1F2D3A"), spaceAfter=1),
        "small": ParagraphStyle("small", parent=base["Normal"], fontName=fr, fontSize=9, leading=12, textColor=colors.HexColor("#3D556B")),
    }


def page_frame(canvas, doc):
    w, h = A4
    canvas.saveState()
    canvas.setFillColor(colors.HexColor("#0F3557"))
    canvas.rect(0, h - 1.6 * cm, w, 1.6 * cm, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor("#EDF4FB"))
    canvas.rect(0, 0, w, 1.0 * cm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(1.8 * cm, h - 1.02 * cm, "VIEWFINDER TRAVEL SOLUTIONS")
    canvas.setFillColor(colors.HexColor("#4E6B85"))
    canvas.drawRightString(w - 1.8 * cm, 0.42 * cm, f"Kashmir Brochure | Page {doc.page}")
    canvas.restoreState()


def bullet_list(story, st, items):
    for item in items:
        story.append(Paragraph(item, st["bullet"], bulletText="*"))


def build():
    fr, fb = register_fonts()
    st = styles(fr, fb)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        leftMargin=1.8 * cm,
        rightMargin=1.8 * cm,
        topMargin=2.2 * cm,
        bottomMargin=1.5 * cm,
        title="Kashmir Tour Brochure",
        author="Viewfinder Travel Solutions",
    )

    s = []

    s.append(Paragraph("VIEWFINDER TRAVEL SOLUTIONS", st["brand"]))
    s.append(Spacer(1, 0.1 * cm))
    s.append(Paragraph("KASHMIR", st["title"]))
    s.append(Paragraph("Paradise on Earth", st["tag"]))
    s.append(Paragraph("6 Nights, 7 Days | Srinagar, Sonmarg, Gulmarg, Pahalgam", st["tag"]))
    s.append(Paragraph("Starting from INR 15,500 per person", st["tag"]))
    s.append(Spacer(1, 0.15 * cm))
    s.append(Paragraph("Kashmir is where Himalayan drama meets living heritage. Celebrated by Mughal emperors and travelers for centuries, the valley offers houseboat sunsets, terraced gardens, mountain meadows, saffron fields, and deeply warm hospitality. This itinerary is expanded for comfort, giving you time to experience each destination instead of rushing through it.", st["body"]))
    s.append(Paragraph("Historically, Kashmir flourished as a center of Shaivite learning before becoming a jewel of Mughal landscape design. Today, you see that legacy in Shalimar and Nishat gardens, old city craft traditions, and a cuisine known for carefully layered flavors.", st["body"]))
    s.append(Paragraph("Did You Know?", st["h2"]))
    bullet_list(s, st, [
        "Kashmir produces most of India\'s premium saffron, especially around Pampore.",
        "Gulmarg Gondola is one of the world\'s highest cable car systems.",
        "Dal Lake\'s floating market is among the most unique in South Asia.",
        "Sonmarg means Meadow of Gold because of its autumn glow.",
    ])

    s.append(Spacer(1, 0.12 * cm))
    s.append(Paragraph("Package Overview", st["h2"]))
    t = Table([
        ["Included", "Not Included"],
        ["Hotel stay (4N Srinagar + 2N Pahalgam)", "Train or flight tickets"],
        ["Meals as per package plan", "Personal expenses and tips"],
        ["Private/local transport in Kashmir", "Adventure activities (optional)"],
        ["Pickup and drop support", "Travel insurance"],
        ["Tour coordination support", "Anything outside inclusions"],
    ], colWidths=[7.7 * cm, 7.7 * cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0F3557")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), fb),
        ("BACKGROUND", (0, 1), (0, -1), colors.HexColor("#EAF3FD")),
        ("BACKGROUND", (1, 1), (1, -1), colors.HexColor("#F8FBFF")),
        ("FONTNAME", (0, 1), (-1, -1), fr),
        ("FONTSIZE", (0, 0), (-1, -1), 10),
        ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#BFD1E4")),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    s.append(t)
    s.append(Spacer(1, 0.15 * cm))
    quick = Table([
        ["Duration", "7 Days"],
        ["Total Nights", "6 Nights"],
        ["Stay Split", "4N Srinagar + 2N Pahalgam"],
        ["Starting Price", "INR 15,500 per person"],
    ], colWidths=[4.6 * cm, 10.8 * cm])
    quick.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#DDEBFA")),
        ("BACKGROUND", (1, 0), (1, -1), colors.HexColor("#F6FAFF")),
        ("FONTNAME", (0, 0), (0, -1), fb),
        ("FONTNAME", (1, 0), (1, -1), fr),
        ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#BCD0E3")),
    ]))
    s.append(quick)
    s.append(Spacer(1, 0.12 * cm))
    s.append(Paragraph("Best Time to Visit", st["h2"]))
    bullet_list(s, st, [
        "March to May: Tulips, mild weather, and lush valley landscapes.",
        "June to August: Pleasant days and easy access to Sonmarg/Gulmarg.",
        "September to November: Chinar trees turn red and gold, very photogenic.",
        "December to February: Snow experiences and winter sports in Gulmarg.",
    ])

    s.append(Spacer(1, 0.12 * cm))
    s.append(Paragraph("Day-by-Day Itinerary", st["h2"]))
    days = [
        ("Day 1 | Arrival in Srinagar", "Airport or station pickup, check-in, Dal Lake orientation, shikara option, boulevard walk, and evening local market exploration."),
        ("Day 2 | Sonmarg Excursion", "Scenic Sindh Valley drive, Thajiwas glacier zone, optional Zero Point run (weather dependent), alpine meadow stops."),
        ("Day 3 | Gulmarg Adventure", "Gondola corridor visit, meadow walks, seasonal snow activities, optional golf-course viewpoint loop, return to Srinagar."),
        ("Day 4 | Srinagar Heritage Day", "Mughal gardens circuit: Shalimar, Nishat, and nearby cultural points with time for handicraft and saffron shopping."),
    ]
    for d, p in days:
        s.append(Paragraph(d, st["h3"]))
        s.append(Paragraph(p, st["body"]))
        s.append(Paragraph("Suggested extras: Local cuisine tasting, guided photo stops, or curated craft shopping walk.", st["small"]))

    s.append(Spacer(1, 0.08 * cm))
    days2 = [
        ("Day 5 | Transfer to Pahalgam", "Drive along Lidder valley landscapes and orchard belts. Cover Aru valley depending on timing and road condition."),
        ("Day 6 | Pahalgam Full Exploration", "Visit Betaab Valley and Chandanwari; add Baisaran pony route if preferred. Keep pace relaxed for family-friendly travel."),
        ("Day 7 | Departure", "Final valley morning, checkout, and transfer to Srinagar for onward departure with stop options based on schedule."),
    ]
    for d, p in days2:
        s.append(Paragraph(d, st["h3"]))
        s.append(Paragraph(p, st["body"]))

    s.append(Paragraph("Optional Add-on Experiences", st["h2"]))
    bullet_list(s, st, [
        "Houseboat night stay on Dal Lake (upgrade).",
        "Traditional Wazwan dining session.",
        "Snow activity pack in Gulmarg (seasonal).",
        "Pahalgam pony route to Baisaran meadows.",
        "Dedicated photography route at sunrise/sunset points.",
    ])

    s.append(Spacer(1, 0.12 * cm))
    s.append(Paragraph("Essential Travel Information", st["h2"]))
    s.append(Paragraph("Packing Checklist", st["h3"]))
    bullet_list(s, st, [
        "Warm layer or fleece (even in summer evenings).",
        "Comfortable walking shoes with grip.",
        "Sunglasses, sunscreen, moisturizer, lip balm.",
        "Power bank and personal medicines.",
        "Government photo ID and some cash.",
    ])
    s.append(Paragraph("Things to Know", st["h3"]))
    bullet_list(s, st, [
        "Weather changes quickly in mountain zones; layer clothing is essential.",
        "Network is best with major Indian providers; some remote zones may be patchy.",
        "Respect local customs near shrines and ask before close-up photography.",
        "Adventure tickets, gondola rides, and some local taxis are extra.",
    ])

    s.append(Spacer(1, 0.12 * cm))
    s.append(Paragraph("Customization Options", st["h2"]))
    bullet_list(s, st, [
        "Couple-focused itinerary with premium stay upgrades.",
        "Family-friendly pacing with reduced activity intensity.",
        "Adventure-heavy variant with more snow and mountain activities.",
        "Travel-ticket support from Kolkata on request.",
    ])

    s.append(Spacer(1, 0.18 * cm))
    s.append(Paragraph("Book Your Kashmir Journey", st["h2"]))
    s.append(Paragraph("Viewfinder Travel Solutions | Kolkata, West Bengal", st["body"]))
    s.append(Paragraph("Phone: +91 8697524868", st["body"]))
    s.append(Paragraph("Email: viewfindertravels@gmail.com", st["body"]))
    s.append(Paragraph("Instagram: @viewfinderkolkata", st["body"]))
    s.append(Spacer(1, 0.1 * cm))
    s.append(Paragraph("Prices shown are indicative for group departures. Final quote depends on date, availability, and customization.", st["small"]))

    doc.build(s, onFirstPage=page_frame, onLaterPages=page_frame)
    print(f"Created: {OUTPUT_PATH}")


if __name__ == "__main__":
    build()
