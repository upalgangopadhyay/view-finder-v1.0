from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "brochures"

CONTACT_PHONE = "+91 8697524868"
CONTACT_EMAIL = "viewfindertravels@gmail.com"
CONTACT_IG = "@viewfinderkolkata"


TOURS = [
    {
        "slug": "kashmir-group-tour-from-kolkata",
        "title": "Kashmir Group Tour",
        "tagline": "Paradise on Earth",
        "duration": "7 Days / 6 Nights",
        "stay": "4 Nights Srinagar + 2 Nights Pahalgam",
        "price": "INR 15,500 per person",
        "intro": [
            "Kashmir blends alpine scenery, heritage gardens, lakeside life, and rich mountain culture in one complete Himalayan journey.",
            "This route covers Srinagar, Sonmarg, Gulmarg, and Pahalgam with balanced pacing so travelers can explore deeply without rushing.",
        ],
        "facts": [
            "Dal Lake hosts one of South Asia's most unique floating markets.",
            "Gulmarg Gondola is among the world's highest cable car systems.",
            "Pampore saffron from Kashmir is globally prized.",
            "Mughal gardens here were designed as symbolic landscapes of paradise.",
        ],
        "best_time": [
            "March to May: Blooming gardens and clear valley weather.",
            "June to August: Pleasant weather and broad route access.",
            "September to November: Brilliant autumn chinar colors.",
            "December to February: Snow-focused experiences in Gulmarg and Pahalgam.",
        ],
        "itinerary": [
            "Day 1: Arrival in Srinagar, Dal Lake leisure, optional shikara and market walk.",
            "Day 2: Sonmarg excursion with seasonal points like Thajiwas/Zero Point.",
            "Day 3: Gulmarg day trip with gondola zone and meadow exploration.",
            "Day 4: Srinagar heritage circuit including Mughal gardens and local markets.",
            "Day 5: Transfer to Pahalgam with valley viewpoints.",
            "Day 6: Full Pahalgam exploration: Aru, Betaab, Chandanwari belt.",
            "Day 7: Departure transfer to station/airport.",
        ],
        "inclusions": [
            "Hotel accommodation",
            "Meals as per package plan",
            "Transport for all listed sightseeing",
            "Pickup and drop support",
        ],
        "exclusions": [
            "Train/flight tickets",
            "Entry tickets and optional activities",
            "Personal expenses",
        ],
        "optional": [
            "Houseboat stay upgrade on Dal Lake",
            "Wazwan culinary session",
            "Snow activities in Gulmarg (seasonal)",
            "Photography-focused sunrise/sunset stops",
        ],
    },
    {
        "slug": "shimla-manali-group-tour-from-kolkata",
        "title": "Shimla Manali Group Tour",
        "tagline": "Colonial Hills to Alpine Valleys",
        "duration": "6 Days / 5 Nights",
        "stay": "2 Nights Shimla + 3 Nights Manali",
        "price": "INR 12,000 per person",
        "intro": [
            "This Himachal circuit combines Shimla's heritage atmosphere with Manali's dramatic mountain routes and adventure options.",
            "Designed for families and mixed groups, it balances scenic drives, local culture, and high-altitude experiences.",
        ],
        "facts": [
            "Shimla served as British India's summer capital.",
            "Atal Tunnel is among the world's longest high-altitude highway tunnels.",
            "Kullu valley is famous for handwoven wool products.",
            "Manali sits on ancient trans-Himalayan trade corridors.",
        ],
        "best_time": [
            "March to June: Pleasant hill weather and lush landscapes.",
            "July to September: Green scenery with occasional rains.",
            "October to November: Crisp views and lighter crowds.",
            "December to February: Snow-season mountain experiences.",
        ],
        "itinerary": [
            "Day 1: Arrive Shimla and explore Mall Road, Kalibari, Jakhoo area.",
            "Day 2: Kufri and Fagu excursion with scenic ridge viewpoints.",
            "Day 3: Transfer to Manali via Kullu with activity stopovers.",
            "Day 4: Solang Valley, Atal Tunnel corridor, seasonal high-altitude points.",
            "Day 5: Manali local circuit: Hadimba, Vashisht, Club House.",
            "Day 6: Return transfer with Manikaran and Kasol route stops.",
        ],
        "inclusions": [
            "Hotel accommodation",
            "Meals as per package",
            "Intercity and local transport",
            "Pickup and drop support",
        ],
        "exclusions": [
            "Train/flight tickets",
            "Adventure and activity charges",
            "Personal and entry expenses",
        ],
        "optional": [
            "Rohtang permit-day extension (subject to access)",
            "Private photoshoot in Solang valley",
            "Extra night in Manali",
            "Adventure bundle add-on",
        ],
    },
    {
        "slug": "haridwar-mussoorie-rishikesh-tour-from-kolkata",
        "title": "Haridwar Mussoorie Rishikesh Tour",
        "tagline": "Spiritual Ghats and Hill Air",
        "duration": "4 Days / 3 Nights",
        "stay": "3 Nights Haridwar (excursions to Mussoorie/Rishikesh)",
        "price": "INR 6,000 per person",
        "intro": [
            "A compact Uttarakhand getaway combining Ganga Aarti, Mussoorie hill viewpoints, and Rishikesh riverfront culture.",
            "Ideal for quick holidays, this route keeps transfers practical while covering spiritual and scenic highlights.",
        ],
        "facts": [
            "Haridwar is one of Hinduism's seven holiest cities.",
            "Har Ki Pauri Aarti is among India's most iconic spiritual rituals.",
            "Mussoorie's colonial history made it a classic hill retreat.",
            "Rishikesh is globally known for yoga and river adventure.",
        ],
        "best_time": [
            "October to March: Cool, clear and comfortable travel weather.",
            "April to June: Pleasant in hills with warm plains.",
            "July to September: Monsoon greenery with weather caution.",
        ],
        "itinerary": [
            "Day 1: Arrive Haridwar, evening Ganga Aarti at Har Ki Pauri.",
            "Day 2: Dehradun-Mussoorie excursion with Kempty Falls zone.",
            "Day 3: Haridwar local temple and ropeway circuit.",
            "Day 4: Rishikesh visit, bridge landmarks, optional rafting, departure.",
        ],
        "inclusions": [
            "Hotel accommodation",
            "Meals as per package",
            "Local transport and transfers",
            "Pickup and drop support",
        ],
        "exclusions": [
            "Train/flight tickets",
            "Rafting/activity fees",
            "Personal expenses",
        ],
        "optional": [
            "Spiritual-only variant without adventure",
            "Evening Ganga-side cafe and local walk",
            "Extended Mussoorie overnight stay",
            "Temple guide add-on",
        ],
    },
    {
        "slug": "duars-gorumara-jaldapara-chilapata-tour",
        "title": "Duars Wildlife and Nature Tour",
        "tagline": "Forests, Rivers, and Safari Trails",
        "duration": "5 Days / 4 Nights",
        "stay": "2N Gorumara + 1N Jaldapara + 1N Chilapata",
        "price": "INR 11,500 per person",
        "intro": [
            "Duars offers dense forests, river valleys, tea belts, and wildlife zones across North Bengal's foothill landscape.",
            "This itinerary is ideal for nature-loving groups who want short scenic drives and varied forest ecosystems.",
        ],
        "facts": [
            "Duars literally means doors, referring to Himalayan gateway routes.",
            "Jaldapara is known for Indian one-horned rhinoceros sightings.",
            "The region combines tea gardens with sal-forest biodiversity.",
            "Buxa and Jayanti are key eco-tourism points in North Bengal.",
        ],
        "best_time": [
            "October to March: Best safari and forest travel season.",
            "April to June: Warm but active wildlife movement windows.",
            "Monsoon months may see zone restrictions.",
        ],
        "itinerary": [
            "Day 1: Arrive Gorumara and evening watchtower visit.",
            "Day 2: Seven-point scenic circuit including Murti, Jhalong, Bindu.",
            "Day 3: Optional safari, transfer to Jaldapara and rescue center.",
            "Day 4: Buxa and Jayanti excursion, overnight Chilapata.",
            "Day 5: Checkout and return transfer.",
        ],
        "inclusions": [
            "Hotel accommodation",
            "Meals as per package",
            "Transfers and sightseeing transport",
            "Pickup and drop support",
        ],
        "exclusions": [
            "Train/flight tickets",
            "Safari permit and tickets",
            "Personal expenses",
        ],
        "optional": [
            "Additional safari slot booking",
            "Birding-focused morning trails",
            "Tea garden photo walk",
            "Upgraded eco-resort stays",
        ],
    },
    {
        "slug": "darjeeling-and-offbeat-tour",
        "title": "Darjeeling and Offbeat Hills Tour",
        "tagline": "Tea Slopes and Quiet Village Stays",
        "duration": "5 Days / 4 Nights",
        "stay": "Sittong + Lamahatta + Darjeeling routing",
        "price": "INR 9,000 per person",
        "intro": [
            "This route blends iconic Darjeeling landmarks with calmer offbeat stays across Sittong, Lamahatta, and surrounding villages.",
            "Perfect for travelers who want tea gardens, mountain culture, and less-crowded scenic points.",
        ],
        "facts": [
            "Darjeeling tea has global GI-tag recognition.",
            "Tiger Hill is one of India's iconic sunrise viewpoints.",
            "Sittong is known for orange orchards and mountain village life.",
            "The Darjeeling Himalayan Railway is a UNESCO-listed system.",
        ],
        "best_time": [
            "October to December: Clear mountain views and crisp weather.",
            "March to May: Blossoms and comfortable temperatures.",
            "Monsoon brings intense greenery but variable road conditions.",
        ],
        "itinerary": [
            "Day 1: Sittong transfer with Ahaldara and Namthing Pokhri belt.",
            "Day 2: Lamahatta and Takdah orchid landscape circuit.",
            "Day 3: Transfer to Darjeeling, evening at Mall/Chowrasta.",
            "Day 4: Tiger Hill, Batasia, Ghoom, HMI, ropeway coverage.",
            "Day 5: Lepchajagat-Mirik extension, drop to NJP/Bagdogra.",
        ],
        "inclusions": [
            "Hotel/homestay stay",
            "Meals as per package",
            "Transport and transfers",
            "Pickup and drop support",
        ],
        "exclusions": [
            "Train/flight tickets",
            "Entry/activity charges",
            "Personal expenses",
        ],
        "optional": [
            "Toy train joyride add-on",
            "Tea estate tasting session",
            "Professional sunrise photo route",
            "Extra night in Darjeeling",
        ],
    },
    {
        "slug": "arunachal-pradesh-guwahati-kaziranga-tour",
        "title": "Arunachal Pradesh with Guwahati and Kaziranga",
        "tagline": "Monasteries, Passes, and Wild Grasslands",
        "duration": "8 Days / 7 Nights",
        "stay": "Guwahati, Bomdila, Tawang, Dirang, Kaziranga",
        "price": "INR 21,000 per person",
        "intro": [
            "A grand Northeast expedition linking river-city heritage, Buddhist highlands, border landscapes, and safari grasslands.",
            "This long-route itinerary is structured for depth, letting travelers experience Arunachal's cultural and geographic diversity.",
        ],
        "facts": [
            "Tawang Monastery is one of the largest monasteries in India.",
            "Sela Pass is a dramatic high-altitude gateway in Arunachal.",
            "Kaziranga is globally known for one-horned rhinoceros habitat.",
            "The route spans river plains, snow corridors, and alpine settlements.",
        ],
        "best_time": [
            "October to April: Best for clear roads and mountain visibility.",
            "May to June: Green but warmer lower-altitude segments.",
            "Monsoon travel requires weather and landslide caution.",
        ],
        "itinerary": [
            "Day 1: Guwahati arrival, Kamakhya temple, Brahmaputra cruise.",
            "Day 2: Transfer to Bomdila with local monastery areas.",
            "Day 3: Travel to Tawang via Sela Pass and memorial route.",
            "Day 4: Tawang city and monastery circuit.",
            "Day 5: Madhuri Lake and border landscape excursion.",
            "Day 6: Transfer to Dirang with waterfalls and hot spring stops.",
            "Day 7: Move to Kaziranga, optional safari and cultural program.",
            "Day 8: Guwahati temples, final departure transfer.",
        ],
        "inclusions": [
            "Hotel accommodation",
            "Meals as per package",
            "All route transfers and sightseeing transport",
            "Pickup and drop support",
        ],
        "exclusions": [
            "Train/flight tickets",
            "Kaziranga safari and permits",
            "Personal expenses",
        ],
        "optional": [
            "Prebooked jeep safari slot",
            "Premium stay upgrades in Tawang/Dirang",
            "Dedicated monastery heritage guide",
            "Extra Guwahati night extension",
        ],
    },
    {
        "slug": "silk-route-east-sikkim-tour",
        "title": "Silk Route East Sikkim Tour",
        "tagline": "Historic Hairpin Roads and High Valleys",
        "duration": "5 Days / 4 Nights",
        "stay": "Sillerygaon, Padamchen, Aritar/Dalapchand, Gangtok",
        "price": "INR 6,500 per person",
        "intro": [
            "The old Silk Route in East Sikkim delivers some of India's most photogenic mountain roads and high-altitude ridgelines.",
            "This route combines village stays, dramatic viewpoints, and a smooth Gangtok finale.",
        ],
        "facts": [
            "Zuluk loops are famous for geometric mountain hairpin patterns.",
            "Nathang Valley sits at high altitude with stark scenic textures.",
            "Kupup Lake is linked to old military and border corridors.",
            "The historical Silk Route connected India with Tibet trade routes.",
        ],
        "best_time": [
            "March to May: Clear skies with mild temperatures.",
            "October to December: Crisp visibility and dramatic landscapes.",
            "Winter months offer snow in selected belts.",
        ],
        "itinerary": [
            "Day 1: Transfer to Sillerygaon with Ramitey viewpoint.",
            "Day 2: Move to Padamchen via Kiukhola and Rongli.",
            "Day 3: Zuluk-Nathang-Kupup high-altitude circuit.",
            "Day 4: Transfer to Gangtok and MG Marg leisure.",
            "Day 5: Checkout and departure transfer.",
        ],
        "inclusions": [
            "Hotel/homestay stay",
            "Meals as per package",
            "Transport and transfers",
            "Pickup and drop support",
        ],
        "exclusions": [
            "Train/flight tickets",
            "Permit and entry charges",
            "Personal expenses",
        ],
        "optional": [
            "Sunrise photography run at selected viewpoints",
            "Extra Gangtok night add-on",
            "Customized private vehicle upgrade",
            "Curated local cuisine tasting stop",
        ],
    },
    {
        "slug": "goa-tour-package",
        "title": "Goa Coastal Tour",
        "tagline": "Beach Break with Heritage and Nightlife",
        "duration": "4 Days / 3 Nights",
        "stay": "3 Nights Goa (South base + North excursion)",
        "price": "INR 6,500 per person",
        "intro": [
            "Goa combines Arabian Sea beaches, Indo-Portuguese architecture, vibrant food culture, and relaxed coastal energy.",
            "This short itinerary balances calm South Goa and active North Goa for a complete quick getaway.",
        ],
        "facts": [
            "Goa has over 100 km of coastline with varied beach personalities.",
            "Old Goa churches are UNESCO-recognized heritage landmarks.",
            "Goan cuisine is a blend of Konkani and Portuguese influences.",
            "The state has one of India's most vibrant live-music scenes.",
        ],
        "best_time": [
            "November to February: Peak season with pleasant weather.",
            "March to May: Warm conditions with lighter crowds.",
            "Monsoon months offer lush landscapes and off-season rates.",
        ],
        "itinerary": [
            "Day 1: Arrive Goa, South Goa stay, beachside leisure.",
            "Day 2: South Goa sightseeing loop and heritage points.",
            "Day 3: North Goa circuit with fort and market zones.",
            "Day 4: Checkout and departure transfer.",
        ],
        "inclusions": [
            "Hotel accommodation",
            "Meals as per package",
            "Local transport and transfers",
            "Pickup and drop support",
        ],
        "exclusions": [
            "Train/flight tickets",
            "Water sports and nightlife spends",
            "Personal expenses",
        ],
        "optional": [
            "Sunset cruise add-on",
            "Water sports activity pass",
            "Heritage walk with local guide",
            "Couple photography beach session",
        ],
    },
]


def register_fonts() -> tuple[str, str]:
    regular = Path(r"C:\Windows\Fonts\arial.ttf")
    bold = Path(r"C:\Windows\Fonts\arialbd.ttf")
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("VfSans", str(regular)))
        pdfmetrics.registerFont(TTFont("VfSansBold", str(bold)))
        return "VfSans", "VfSansBold"
    return "Helvetica", "Helvetica-Bold"


def style_map(fr: str, fb: str):
    base = getSampleStyleSheet()
    return {
        "brand": ParagraphStyle("brand", parent=base["Normal"], fontName=fb, fontSize=11, textColor=colors.HexColor("#0B3D91"), alignment=1),
        "title": ParagraphStyle("title", parent=base["Title"], fontName=fb, fontSize=28, leading=32, textColor=colors.HexColor("#0C2D57"), alignment=1),
        "tag": ParagraphStyle("tag", parent=base["Normal"], fontName=fr, fontSize=11.5, leading=15, textColor=colors.HexColor("#24577A"), alignment=1),
        "h2": ParagraphStyle("h2", parent=base["Heading2"], fontName=fb, fontSize=15.5, leading=18, textColor=colors.HexColor("#0B3D91"), spaceBefore=3, spaceAfter=3),
        "h3": ParagraphStyle("h3", parent=base["Heading3"], fontName=fb, fontSize=11.8, leading=14, textColor=colors.HexColor("#0A5A88"), spaceBefore=2, spaceAfter=1),
        "body": ParagraphStyle("body", parent=base["Normal"], fontName=fr, fontSize=10.4, leading=13.7, textColor=colors.HexColor("#1F2D3A"), spaceAfter=2),
        "bullet": ParagraphStyle("bullet", parent=base["Normal"], fontName=fr, fontSize=10.3, leading=13.3, leftIndent=13, bulletIndent=1, textColor=colors.HexColor("#1F2D3A"), spaceAfter=1),
        "small": ParagraphStyle("small", parent=base["Normal"], fontName=fr, fontSize=8.9, leading=11.8, textColor=colors.HexColor("#3D556B")),
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
    canvas.drawRightString(w - 1.8 * cm, 0.42 * cm, f"Tour Brochure | Page {doc.page}")
    canvas.restoreState()


def bullets(story, st, items):
    for item in items:
        story.append(Paragraph(item, st["bullet"], bulletText="*"))


def generate_one(tour, st):
    output_path = OUTPUT_DIR / f"{tour['slug']}-brochure.pdf"
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=1.8 * cm,
        rightMargin=1.8 * cm,
        topMargin=2.2 * cm,
        bottomMargin=1.5 * cm,
        title=f"{tour['title']} Brochure",
        author="Viewfinder Travel Solutions",
    )

    s = []
    s.append(Paragraph("VIEWFINDER TRAVEL SOLUTIONS", st["brand"]))
    s.append(Spacer(1, 0.1 * cm))
    s.append(Paragraph(tour["title"].upper(), st["title"]))
    s.append(Paragraph(tour["tagline"], st["tag"]))
    s.append(Paragraph(f"{tour['duration']} | {tour['stay']}", st["tag"]))
    s.append(Paragraph(f"Starting from {tour['price']}", st["tag"]))
    s.append(Spacer(1, 0.12 * cm))

    s.append(Paragraph("Trip Introduction", st["h2"]))
    for para in tour["intro"]:
        s.append(Paragraph(para, st["body"]))

    s.append(Paragraph("Did You Know?", st["h2"]))
    bullets(s, st, tour["facts"])

    s.append(Spacer(1, 0.1 * cm))
    s.append(Paragraph("Package Overview", st["h2"]))
    overview = Table(
        [
            ["Duration", tour["duration"]],
            ["Stay Plan", tour["stay"]],
            ["Starting Price", tour["price"]],
            ["Travel Type", "Group tour with customization options"],
        ],
        colWidths=[4.8 * cm, 10.6 * cm],
    )
    overview.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#DDEBFA")),
                ("BACKGROUND", (1, 0), (1, -1), colors.HexColor("#F6FAFF")),
                ("FONTNAME", (0, 0), (0, -1), "VfSansBold" if "VfSansBold" in pdfmetrics.getRegisteredFontNames() else "Helvetica-Bold"),
                ("FONTNAME", (1, 0), (1, -1), "VfSans" if "VfSans" in pdfmetrics.getRegisteredFontNames() else "Helvetica"),
                ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#BCD0E3")),
                ("FONTSIZE", (0, 0), (-1, -1), 9.8),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    s.append(overview)

    s.append(Spacer(1, 0.12 * cm))
    s.append(Paragraph("Best Time to Visit", st["h2"]))
    bullets(s, st, tour["best_time"])

    s.append(Spacer(1, 0.12 * cm))
    s.append(Paragraph("Day-by-Day Itinerary", st["h2"]))
    for item in tour["itinerary"]:
        if ":" in item:
            day, plan = item.split(":", 1)
            s.append(Paragraph(day.strip(), st["h3"]))
            s.append(Paragraph(plan.strip(), st["body"]))
        else:
            s.append(Paragraph(item, st["body"]))

    s.append(Paragraph("Included", st["h2"]))
    bullets(s, st, tour["inclusions"])

    s.append(Paragraph("Not Included", st["h2"]))
    bullets(s, st, tour["exclusions"])

    s.append(Paragraph("Optional Add-ons", st["h2"]))
    bullets(s, st, tour["optional"])

    s.append(Paragraph("Essential Travel Notes", st["h2"]))
    bullets(
        s,
        st,
        [
            "Carry valid government photo ID during travel.",
            "Mountain weather can change quickly; keep layered clothing.",
            "Activity tickets and local permits may need advance booking.",
            "Customizations are available for families, couples, and private groups.",
        ],
    )

    s.append(Spacer(1, 0.12 * cm))
    s.append(Paragraph("Book Your Trip", st["h2"]))
    s.append(Paragraph("Viewfinder Travel Solutions | Kolkata, West Bengal", st["body"]))
    s.append(Paragraph(f"Phone: {CONTACT_PHONE}", st["body"]))
    s.append(Paragraph(f"Email: {CONTACT_EMAIL}", st["body"]))
    s.append(Paragraph(f"Instagram: {CONTACT_IG}", st["body"]))
    s.append(Paragraph("Prices are indicative for group departures and may vary by date and availability.", st["small"]))

    doc.build(s, onFirstPage=page_frame, onLaterPages=page_frame)
    return output_path


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    fr, fb = register_fonts()
    st = style_map(fr, fb)
    created = []
    for tour in TOURS:
        created.append(generate_one(tour, st))
    for path in created:
        print(path)


if __name__ == "__main__":
    main()
